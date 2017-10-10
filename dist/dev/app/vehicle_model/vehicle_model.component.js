"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../core/data.service');
var index_1 = require('../shared/index');
var store_service_1 = require('../core/store.service');
var VehicleModelComponent = (function () {
    function VehicleModelComponent(router, route, _dataService, _storeService, _spinner) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._dataService = _dataService;
        this._storeService = _storeService;
        this._spinner = _spinner;
        this.pageLoading = true;
        this.nextAvailable = 0;
        this.vinAvailable = false;
        this._spinner.start();
        this.claimYearID = -1;
        this.claimMakeID = -1;
        this.claimModelID = -1;
        this.claimCategoryID = -1;
        this.claimModelDisabled = true;
        this.claimMakeDisabled = true;
        this.claimCategoryDisabled = true;
        this._dataService.get('v1/vehicle/years')
            .subscribe(function (res) {
            _this.years = [];
            for (var key in res.data.years) {
                var value = parseInt(res.data.years[key]);
                _this.years.push({ key: key, value: value });
            }
            _this.years.sort(function (a, b) {
                return parseInt(b.value) - parseInt(a.value);
            });
            _this._spinner.stop();
            _this.pageLoading = false;
        }, function (error) { return console.error('Unable to fetch brands', error); });
    }
    VehicleModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.zipcode = params['zipcode'];
            _this.profile_slug = params['profile_slug'];
        });
        this.user = {
            vincode: ''
        };
        this.vincodeNumberError = false;
    };
    VehicleModelComponent.prototype.onChangeYear = function (year) {
        var _this = this;
        if (this.nextAvailable === 0) {
            this.nextAvailable = 1;
        }
        else {
            this.nextAvailable = 2;
        }
        this.claimYearID = year;
        if (year === -1) {
            this.claimMakeDisabled = true;
        }
        else {
            this._spinner.start();
            this.claimUrl = 'v1/vehicle/makesfromdata?year=' + year;
            this._dataService.get(this.claimUrl)
                .subscribe(function (res) {
                _this.makes = [];
                _this.claimMakeDisabled = false;
                _this.makes = res.data;
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    VehicleModelComponent.prototype.onChangeMake = function (make) {
        var _this = this;
        if (parseInt(make) === -1) {
            this.models = [];
            this.categories = [];
            this.claimModelID = -1;
            this.claimCategoryID = -1;
            this.claimModelDisabled = true;
            this.claimCategoryDisabled = true;
            return;
        }
        this._spinner.start();
        this.claimUrl = 'v1/vehicle/modelsfromdata?year=' + this.claimYearID;
        this.claimUrl += '&make=';
        this.claimUrl += make;
        this._dataService.get(this.claimUrl)
            .subscribe(function (res) {
            _this.models = res.data;
            _this.claimMakeID = make;
            _this.claimModelDisabled = false;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    VehicleModelComponent.prototype.onChangeModel = function (model) {
        var _this = this;
        if (parseInt(model) === -1) {
            this.categories = [];
            this.claimCategoryID = -1;
            this.claimCategoryDisabled = true;
            return;
        }
        this._spinner.start();
        this.claimUrl = 'v1/vehicle/stylesfromdata?year=' + this.claimYearID;
        this.claimUrl += '&make=';
        this.claimUrl += this.claimMakeID;
        this.claimUrl += '&model=';
        this.claimUrl += model;
        this._dataService.get(this.claimUrl)
            .subscribe(function (res) {
            _this.categories = [];
            for (var i = 0; i < res.data.length; i++) {
                var value = res.data[i].style;
                var key = res.data[i].vehicleId;
                _this.categories.push({ key: key, value: value });
            }
            _this.claimModelID = model;
            _this.claimCategoryDisabled = false;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    VehicleModelComponent.prototype.onChangeCategory = function (category) {
        if (parseInt(category) === -1) {
            return;
        }
        if (this.nextAvailable === 0) {
            this.nextAvailable = 1;
        }
        else {
            this.nextAvailable = 2;
        }
        this.claimCategoryID = category;
        console.log(category);
    };
    VehicleModelComponent.prototype.keypressVin = function (value, vinform) {
        var _this = this;
        if ((/^[a-zA-Z0-9]*$/.test(value)) === false) {
            this.vincodeNumberError = true;
            vinform.reset();
            return;
        }
        this.vincodeNumberError = false;
        if (value.toString().length === 17) {
            this._spinner.start();
            this._dataService.get('v1/vehicle/vin?vin=' + value)
                .subscribe(function (res) {
                console.log(res);
                _this.vinAvailable = true;
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    VehicleModelComponent.prototype.loadClaim = function (form) {
        var _this = this;
        var formValues = form.value;
        var nextAvailable = true;
        for (var key in formValues) {
            if (!formValues[key]) {
                nextAvailable = false;
                break;
            }
        }
        if (nextAvailable) {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    Customer_Zip: this.zipcode,
                    AutoYear: this.claimYearID,
                    AutoID: this.claimCategoryID
                }
            };
            this._dataService.post('v1/data/createclaim', postData)
                .subscribe(function (res) {
                _this._storeService.set('p_slug', res.data.slug);
                _this._spinner.stop();
                _this.router.navigate(['/damage', res.data.slug]);
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
        else {
            alert('You should select all options.');
        }
    };
    VehicleModelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vehicle-model',
            templateUrl: 'vehicle_model.component.html',
            styleUrls: ['vehicle_model.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService, store_service_1.StoreService, index_1.SpinnerService])
    ], VehicleModelComponent);
    return VehicleModelComponent;
}());
exports.VehicleModelComponent = VehicleModelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZWhpY2xlX21vZGVsL3ZlaGljbGVfbW9kZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsNkJBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFDcEQsc0JBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsOEJBQThCLHVCQUF1QixDQUFDLENBQUE7QUFZdEQ7SUF3QkMsK0JBQW9CLE1BQWMsRUFDekIsS0FBcUIsRUFDckIsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsUUFBd0I7UUE1QmxDLGlCQStNQztRQXZMb0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7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YXBwL3ZlaGljbGVfbW9kZWwvdmVoaWNsZV9tb2RlbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICBmcm9tICcuLi9jb3JlL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gIGZyb20gJy4uL2NvcmUvc3RvcmUuc2VydmljZSc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBWZWhpY2xlTW9kZWxDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXZlaGljbGUtbW9kZWwnLFxuICB0ZW1wbGF0ZVVybDogJ3ZlaGljbGVfbW9kZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndmVoaWNsZV9tb2RlbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmVoaWNsZU1vZGVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0c3ViOiBhbnk7XG5cdHppcGNvZGU6IG51bWJlcjtcblx0cHJvZmlsZV9zbHVnOiBzdHJpbmc7XG5cdGNsYWltVXJsOiBzdHJpbmc7XG5cdHllYXJzOiBhbnlbXTtcblx0bWFrZXM6IGFueVtdO1xuXHRtb2RlbHM6IGFueVtdO1xuXHRjYXRlZ29yaWVzOiBhbnlbXTtcblx0cGFnZUxvYWRpbmc6IGJvb2xlYW47XG5cdGNsYWltWWVhcklEOiBudW1iZXI7XG5cdGNsYWltTWFrZUlEOiBudW1iZXI7XG5cdGNsYWltTW9kZWxJRDogbnVtYmVyO1xuXHRjbGFpbUNhdGVnb3J5SUQ6IG51bWJlcjtcblx0Y2xhaW1NYWtlRGlzYWJsZWQ6IGJvb2xlYW47XG5cdGNsYWltTW9kZWxEaXNhYmxlZDogYm9vbGVhbjtcblx0Y2xhaW1DYXRlZ29yeURpc2FibGVkOiBib29sZWFuO1xuXHRuZXh0QXZhaWxhYmxlOiBudW1iZXI7XG5cdHZpbkF2YWlsYWJsZTogYm9vbGVhbjtcblx0dmluQ29kZTogc3RyaW5nO1xuXHR1c2VyOiBhbnk7XG5cdHZpbmNvZGVWYWx1ZTogYW55O1xuXHR2aW5jb2RlTnVtYmVyRXJyb3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfc3Bpbm5lcjogU3Bpbm5lclNlcnZpY2UpIHtcblx0XHR0aGlzLnBhZ2VMb2FkaW5nID0gdHJ1ZTtcblx0XHR0aGlzLm5leHRBdmFpbGFibGUgPSAwO1xuXHRcdHRoaXMudmluQXZhaWxhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuXHRcdHRoaXMuY2xhaW1ZZWFySUQgPSAtMTtcblx0XHR0aGlzLmNsYWltTWFrZUlEID0gLTE7XG5cdFx0dGhpcy5jbGFpbU1vZGVsSUQgPSAtMTtcblx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlJRCA9IC0xO1xuXHRcdHRoaXMuY2xhaW1Nb2RlbERpc2FibGVkID0gdHJ1ZTtcblx0XHR0aGlzLmNsYWltTWFrZURpc2FibGVkID0gdHJ1ZTtcblx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlEaXNhYmxlZCA9IHRydWU7XG5cblx0XHR0aGlzLl9kYXRhU2VydmljZS5nZXQoJ3YxL3ZlaGljbGUveWVhcnMnKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgXHR0aGlzLnllYXJzID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiByZXMuZGF0YS55ZWFycykge1xuICAgICAgICAgICAgXHRsZXQgdmFsdWUgPSBwYXJzZUludChyZXMuZGF0YS55ZWFyc1trZXldKTtcbiAgICAgICAgICAgIFx0dGhpcy55ZWFycy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMueWVhcnMuc29ydChmdW5jdGlvbihhOiBhbnksIGI6IGFueSkge1xuICAgICAgICAgICAgXHRyZXR1cm4gcGFyc2VJbnQoYi52YWx1ZSkgLSBwYXJzZUludChhLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0ICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+IHtcblx0ICAgIFx0dGhpcy56aXBjb2RlID0gcGFyYW1zWyd6aXBjb2RlJ107XG5cdCAgICBcdHRoaXMucHJvZmlsZV9zbHVnID0gcGFyYW1zWydwcm9maWxlX3NsdWcnXTtcblx0ICAgIH0pO1xuXG5cdCAgICB0aGlzLnVzZXIgPSB7XG5cdCAgICBcdHZpbmNvZGU6ICcnXG5cdCAgICB9O1xuXG5cdCAgICB0aGlzLnZpbmNvZGVOdW1iZXJFcnJvciA9IGZhbHNlO1xuXHR9XG5cbiAgICBvbkNoYW5nZVllYXIoeWVhcjogYW55KSB7XG4gICAgXHRpZih0aGlzLm5leHRBdmFpbGFibGUgPT09IDApIHtcbiAgICBcdFx0dGhpcy5uZXh0QXZhaWxhYmxlID0gMTtcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHRoaXMubmV4dEF2YWlsYWJsZSA9IDI7XG4gICAgXHR9XG4gICAgXHR0aGlzLmNsYWltWWVhcklEID0geWVhcjtcbiAgICBcdGlmKHllYXIgPT09IC0xKSB7XG4gICAgXHRcdHRoaXMuY2xhaW1NYWtlRGlzYWJsZWQgPSB0cnVlO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0dGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuICAgIFx0XHR0aGlzLmNsYWltVXJsID0gJ3YxL3ZlaGljbGUvbWFrZXNmcm9tZGF0YT95ZWFyPScgKyB5ZWFyO1xuICAgIFx0XHR0aGlzLl9kYXRhU2VydmljZS5nZXQodGhpcy5jbGFpbVVybClcblx0ICAgICAgICBcdC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG5cdCAgICAgICAgICBcdFx0dGhpcy5tYWtlcyA9IFtdO1xuXHQgICAgICAgICAgXHRcdHRoaXMuY2xhaW1NYWtlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlcyA9IHJlcy5kYXRhO1xuXHQgICAgICAgICAgICBcdHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuXHQgICAgICAgICAgXHR9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgb25DaGFuZ2VNYWtlKG1ha2U6IGFueSkge1xuICAgIFx0aWYocGFyc2VJbnQobWFrZSkgPT09IC0xKSB7XG4gICAgXHRcdHRoaXMubW9kZWxzID0gW107XG4gICAgXHRcdHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuICAgIFx0XHR0aGlzLmNsYWltTW9kZWxJRCA9IC0xO1xuICAgIFx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlJRCA9IC0xO1xuICAgIFx0XHR0aGlzLmNsYWltTW9kZWxEaXNhYmxlZCA9IHRydWU7XG4gICAgXHRcdHRoaXMuY2xhaW1DYXRlZ29yeURpc2FibGVkID0gdHJ1ZTtcbiAgICBcdFx0cmV0dXJuO1xuICAgIFx0fVxuICAgIFx0dGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuICAgIFx0dGhpcy5jbGFpbVVybCA9ICd2MS92ZWhpY2xlL21vZGVsc2Zyb21kYXRhP3llYXI9JyArIHRoaXMuY2xhaW1ZZWFySUQ7XG4gICAgXHR0aGlzLmNsYWltVXJsICs9ICcmbWFrZT0nO1xuICAgIFx0dGhpcy5jbGFpbVVybCArPSBtYWtlO1xuXHRcdHRoaXMuX2RhdGFTZXJ2aWNlLmdldCh0aGlzLmNsYWltVXJsKVxuXHRcdFx0LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5tb2RlbHMgPSByZXMuZGF0YTtcblx0XHRcdFx0dGhpcy5jbGFpbU1ha2VJRCA9IG1ha2U7XG5cdFx0XHRcdHRoaXMuY2xhaW1Nb2RlbERpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuXHRcdFx0fSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTW9kZWwobW9kZWw6IGFueSkge1xuICAgIFx0aWYocGFyc2VJbnQobW9kZWwpID09PSAtMSkge1xuICAgIFx0XHR0aGlzLmNhdGVnb3JpZXMgPSBbXTtcbiAgICBcdFx0dGhpcy5jbGFpbUNhdGVnb3J5SUQgPSAtMTtcbiAgICBcdFx0dGhpcy5jbGFpbUNhdGVnb3J5RGlzYWJsZWQgPSB0cnVlO1xuICAgIFx0XHRyZXR1cm47XG4gICAgXHR9XG4gICAgXHR0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgXHR0aGlzLmNsYWltVXJsID0gJ3YxL3ZlaGljbGUvc3R5bGVzZnJvbWRhdGE/eWVhcj0nICsgdGhpcy5jbGFpbVllYXJJRDtcbiAgICBcdHRoaXMuY2xhaW1VcmwgKz0gJyZtYWtlPSc7XG4gICAgXHR0aGlzLmNsYWltVXJsICs9IHRoaXMuY2xhaW1NYWtlSUQ7XG4gICAgXHR0aGlzLmNsYWltVXJsICs9ICcmbW9kZWw9JztcbiAgICBcdHRoaXMuY2xhaW1VcmwgKz0gbW9kZWw7XG4gICAgXHR0aGlzLl9kYXRhU2VydmljZS5nZXQodGhpcy5jbGFpbVVybClcblx0XHRcdC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG5cdFx0XHRcdHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxyZXMuZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IHJlcy5kYXRhW2ldLnN0eWxlO1xuXHRcdFx0XHRcdGxldCBrZXkgPSByZXMuZGF0YVtpXS52ZWhpY2xlSWQ7XG5cdFx0XHRcdFx0dGhpcy5jYXRlZ29yaWVzLnB1c2goe2tleToga2V5LCB2YWx1ZTogdmFsdWV9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNsYWltTW9kZWxJRCA9IG1vZGVsO1xuXHRcdFx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlEaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLl9zcGlubmVyLnN0b3AoKTtcblx0XHRcdH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUNhdGVnb3J5KGNhdGVnb3J5OiBhbnkpIHtcbiAgICBcdGlmKHBhcnNlSW50KGNhdGVnb3J5KSA9PT0gLTEpIHtcbiAgICBcdFx0cmV0dXJuO1xuICAgIFx0fVxuICAgIFx0aWYodGhpcy5uZXh0QXZhaWxhYmxlID09PSAwKSB7XG4gICAgXHRcdHRoaXMubmV4dEF2YWlsYWJsZSA9IDE7XG4gICAgXHR9IGVsc2Uge1xuICAgIFx0XHR0aGlzLm5leHRBdmFpbGFibGUgPSAyO1xuICAgIFx0fVxuICAgIFx0dGhpcy5jbGFpbUNhdGVnb3J5SUQgPSBjYXRlZ29yeTtcbiAgICBcdGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcbiAgICB9XG5cblx0a2V5cHJlc3NWaW4odmFsdWU6IGFueSwgdmluZm9ybTogYW55KSB7XG5cdFx0aWYoKC9eW2EtekEtWjAtOV0qJC8udGVzdCh2YWx1ZSkpID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy52aW5jb2RlTnVtYmVyRXJyb3IgPSB0cnVlO1xuXHRcdFx0dmluZm9ybS5yZXNldCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudmluY29kZU51bWJlckVycm9yID0gZmFsc2U7XG5cblx0XHRpZih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMTcpIHtcblx0XHRcdHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcblx0ICAgIFx0dGhpcy5fZGF0YVNlcnZpY2UuZ2V0KCd2MS92ZWhpY2xlL3Zpbj92aW49JyArIHZhbHVlKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0dGhpcy52aW5BdmFpbGFibGUgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuXHRcdFx0XHR9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG5cdFx0fVxuXHR9XG5cblx0bG9hZENsYWltKGZvcm06IGFueSkge1xuXHRcdGxldCBmb3JtVmFsdWVzID0gZm9ybS52YWx1ZTtcblx0XHRsZXQgbmV4dEF2YWlsYWJsZSA9IHRydWU7XG5cdFx0Zm9yKGxldCBrZXkgaW4gZm9ybVZhbHVlcykge1xuXHRcdFx0aWYoIWZvcm1WYWx1ZXNba2V5XSkge1xuXHRcdFx0XHRuZXh0QXZhaWxhYmxlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKG5leHRBdmFpbGFibGUpIHtcblx0XHRcdHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcblx0XHQgICAgbGV0IHBvc3REYXRhID0ge1xuXHRcdCAgICAgIGNvZGU6IDIwMCxcblx0XHQgICAgICBkYXRhOiB7XG5cdFx0ICAgICAgICBDdXN0b21lcl9aaXA6IHRoaXMuemlwY29kZSxcblx0XHQgICAgICAgIEF1dG9ZZWFyOiB0aGlzLmNsYWltWWVhcklELFxuXHRcdCAgICAgICAgQXV0b0lEOiB0aGlzLmNsYWltQ2F0ZWdvcnlJRFxuXHRcdCAgICAgIH1cblx0XHQgICAgfTtcblxuXHRcdCAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL2NyZWF0ZWNsYWltJywgcG9zdERhdGEpXG5cdFx0ICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZVNlcnZpY2Uuc2V0KCdwX3NsdWcnLCByZXMuZGF0YS5zbHVnKTtcblx0XHQgICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuXHRcdCAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFtYWdlJywgcmVzLmRhdGEuc2x1Z10pO1xuXHRcdCAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWxlcnQoJ1lvdSBzaG91bGQgc2VsZWN0IGFsbCBvcHRpb25zLicpO1xuXHRcdH1cblx0fVxufVxuIl19
