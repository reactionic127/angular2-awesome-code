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
var index_1 = require('../shared/index');
var data_service_1 = require('../core/data.service');
var event_service_1 = require('../core/event.service');
var index_2 = require('../shared/index');
var store_service_1 = require('../core/store.service');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var forms_1 = require('@angular/forms');
var GetVehicleComponent = (function () {
    function GetVehicleComponent(router, route, _dataService, _eventService, _storeService, _spinner, modal, vcRef) {
        this.router = router;
        this.route = route;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._storeService = _storeService;
        this._spinner = _spinner;
        this.modal = modal;
        this.vcRef = vcRef;
        modal.overlay.defaultViewContainer = vcRef;
        this.backendApi = index_1.Config.API;
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
        this.isVinRequire = false;
        this.isVinErrorAlert = false;
        this.errorAlert = '';
        this.makes = [];
        this.models = [];
        this.categories = [];
    }
    GetVehicleComponent.prototype.initVehicleData = function (data) {
        console.log(data);
        this.totoalStep = data.steps.totalStep;
        this.currentStep = data.steps.currentStep;
        this.liveHelpIcon = this.backendApi + data.liveHelp.icon;
        this.helpIcon = this.backendApi + data.help.icon;
        var logoIcon = this.backendApi + data.ui.logo;
        if (data.liveHelp.on === 1) {
            this.liveHelpStatus = true;
        }
        else {
            this.liveHelpStatus = false;
        }
        if (data.help.on === 1) {
            this.helpStatus = true;
        }
        else {
            this.helpStatus = false;
        }
        if (data.requireVIN === 1) {
            this.isVinRequire = true;
        }
        else {
            this.isVinRequire = false;
        }
        this._eventService.emit('load_topbar_data', {
            helpIcon: this.helpIcon,
            helpStatus: this.helpStatus,
            liveHelpIcon: this.liveHelpIcon,
            liveHelpStatus: this.liveHelpStatus,
            logoIcon: logoIcon,
            helpLink: data.help.link
        });
        this.isPageLoading = true;
        this._spinner.stop();
    };
    GetVehicleComponent.prototype.initForm = function () {
        this.getVehicleForm = new forms_1.FormGroup({
            year: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            make: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            model: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            category: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ])
        });
    };
    GetVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.get('v1/vehicle/years')
            .subscribe(function (res) {
            _this.years = [];
            for (var key in res.data.years) {
                var value = parseInt(res.data.years[key]);
                _this.years.push({ value: key, label: value });
            }
            _this.years.sort(function (a, b) {
                return parseInt(b.label) - parseInt(a.label);
            });
            _this.initForm();
            _this._spinner.stop();
            _this.pageLoading = false;
        }, function (error) { return console.error('Unable to fetch brands', error); });
        this.isPageLoading = false;
        this._spinner.start();
        this.sub = this.route.params.subscribe(function (params) {
            _this.zipcode = params['zipcode'];
            _this.slugId = params['slugId'];
        });
        this.user = {
            vincode: ''
        };
        this.vincodeNumberError = false;
        var postData = {
            code: 200,
            data: {
                slug: this.slugId
            }
        };
        this._dataService.post('v1/data/getvehicle', postData)
            .subscribe(function (res) {
            _this.initVehicleData(res.data);
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onYearsSelected = function (event) {
        var _this = this;
        var year = event.value;
        this.makes = [];
        this.models = [];
        this.categories = [];
        this.claimMakeDisabled = true;
        this.claimModelDisabled = true;
        this.claimCategoryDisabled = true;
        this.nextAvailable = 1;
        if (this.nextAvailable === 3) {
            this.nextAvailable = 2;
        }
        else {
            this.nextAvailable = 1;
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
                _this.claimMakeDisabled = false;
                _this.makes = res.data.map(function (item) {
                    return { value: item.make, label: item.make };
                });
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    GetVehicleComponent.prototype.onMakesSelected = function (event) {
        var _this = this;
        var make = event.value;
        this.models = [];
        this.categories = [];
        this.claimModelDisabled = true;
        this.claimCategoryDisabled = true;
        this.nextAvailable = 1;
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
            _this.models = res.data.map(function (item) {
                return { value: item.model, label: item.model };
            });
            _this.claimMakeID = make;
            _this.claimModelDisabled = false;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onModelsSelected = function (event) {
        var _this = this;
        var model = event.value;
        this.categories = [];
        this.claimCategoryDisabled = true;
        this.nextAvailable = 1;
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
            _this.categories = res.data.map(function (item) {
                return { value: item.vehicleId, label: item.style };
            });
            _this.claimModelID = model;
            _this.claimCategoryDisabled = false;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onCategoriesSelected = function (event) {
        var category = event.value;
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
    GetVehicleComponent.prototype.keypressVin = function (value, vinform) {
        var _this = this;
        if ((/^[a-zA-Z0-9]*$/.test(value)) === false) {
            this.vincodeNumberError = true;
            vinform.reset();
            return;
        }
        this.vincodeNumberError = false;
        if (value.toString().length === 17) {
            this._spinner.start();
            this.vinCode = value;
            this._dataService.get('v1/vehicle/vin?vin=' + value)
                .subscribe(function (res) {
                console.log(res);
                _this.claimMakeDisabled = false;
                _this.claimModelDisabled = false;
                _this.claimCategoryDisabled = false;
                if (res.code === 200) {
                    _this.vinAvailable = true;
                    _this.claimCategoryID = res.data.vehicleId;
                    _this.nextAvailable = 3;
                    _this.years = [{ value: res.data.year, label: res.data.year }];
                    _this.makes = [{ value: res.data.make, label: res.data.make }];
                    _this.models = [{ value: res.data.model, label: res.data.model }];
                    _this.categories = [{ value: res.data.style, label: res.data.style }];
                    var that_1 = _this;
                    setTimeout(function () {
                        that_1.getVehicleForm.controls['year'].setValue(res.data.year);
                        that_1.getVehicleForm.controls['make'].setValue(res.data.make);
                        that_1.getVehicleForm.controls['model'].setValue(res.data.model);
                        that_1.getVehicleForm.controls['category'].setValue(res.data.style);
                    }, 200);
                }
                else {
                    _this.alertError('VIN code is not invalid.', 3000);
                }
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
        else {
            this.vinAvailable = false;
        }
    };
    GetVehicleComponent.prototype.alertError = function (text, time) {
        this.isVinErrorAlert = true;
        this.errorAlert = text;
        var that = this;
        setTimeout(function () { that.isVinErrorAlert = false; }, time);
    };
    GetVehicleComponent.prototype.loadClaim = function () {
        var _this = this;
        if (this.isVinRequire && !this.vinAvailable) {
            this.alertError('Please enter a 17-digit VIN #', 3000);
            return;
        }
        this._spinner.start();
        var postData = {
            code: 200,
            data: {
                AutoVIN: this.vinCode,
                AutoYear: this.getVehicleForm['value']['year'],
                AutoID: this.claimCategoryID,
                slug: this.slugId
            }
        };
        this._dataService.post('v1/data/savevehicle', postData)
            .subscribe(function (res) {
            _this._storeService.set('p_slug', res.data.slug);
            _this._spinner.stop();
            _this.router.navigate(['/damage', res.data.slug]);
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onVin = function () {
        this.modal.alert()
            .size('sm')
            .showClose(true)
            .okBtnClass('hidden')
            .title('Vin Locations')
            .body("\n          <div class=\"vin-modal-wrapper no-padding\">\n          <img src=\"assets/img/vin_locations.png\">\n          </div>\n          ")
            .open();
    };
    GetVehicleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-get-vehicle',
            templateUrl: 'get_vehicle.component.html',
            styleUrls: ['get_vehicle.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService, event_service_1.EventService, store_service_1.StoreService, index_2.SpinnerService, bootstrap_1.Modal, core_1.ViewContainerRef])
    ], GetVehicleComponent);
    return GetVehicleComponent;
}());
exports.GetVehicleComponent = GetVehicleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nZXRfdmVoaWNsZS9nZXRfdmVoaWNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCw2QkFBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUNwRCw4QkFBNkIsdUJBQXVCLENBQUMsQ0FBQTtBQUNyRCxzQkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCw4QkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCwwQkFBc0Isa0NBQWtDLENBQUMsQ0FBQTtBQUN6RCxzQkFHTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBWXhCO0lBc0NDLDZCQUNXLE1BQWMsRUFDaEIsS0FBcUIsRUFDckIsWUFBeUIsRUFDdkIsYUFBMkIsRUFDN0IsYUFBMkIsRUFDM0IsUUFBd0IsRUFDdEIsS0FBWSxFQUNaLEtBQXVCO1FBUHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRS9CLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENB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QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFFLFVBQUMsS0FBVSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFQSxtQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7YUFDZixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsU0FBUyxDQUFDLElBQUksQ0FBQzthQUNmLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDcEIsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUN0QixJQUFJLENBQUMsOElBSUQsQ0FBQzthQUNMLElBQUksRUFBRSxDQUFDO0lBQ1osQ0FBQztJQXpYSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBcVhGLDBCQUFDO0FBQUQsQ0FwWEEsQUFvWEMsSUFBQTtBQXBYWSwyQkFBbUIsc0JBb1gvQixDQUFBIiwiZmlsZSI6ImFwcC9nZXRfdmVoaWNsZS9nZXRfdmVoaWNsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWcgfSAgICAgICAgICAgICAgICAgZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uL2NvcmUvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gIGZyb20gJy4uL2NvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbiAgRm9ybUNvbnRyb2xcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgVmVoaWNsZU1vZGVsQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1nZXQtdmVoaWNsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ2V0X3ZlaGljbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ2V0X3ZlaGljbGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdldFZlaGljbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc1BhZ2VMb2FkaW5nOiBib29sZWFuO1xuXHRzdWI6IGFueTtcblx0emlwY29kZTogbnVtYmVyO1xuXHRjbGFpbVVybDogc3RyaW5nO1xuXHRzbHVnSWQ6IHN0cmluZztcblx0eWVhcnM6IGFueVtdO1xuXHRtYWtlczogYW55W107XG5cdG1vZGVsczogYW55W107XG5cdGNhdGVnb3JpZXM6IGFueVtdO1xuXHRwYWdlTG9hZGluZzogYm9vbGVhbjtcblx0Y2xhaW1ZZWFySUQ6IG51bWJlcjtcblx0Y2xhaW1NYWtlSUQ6IG51bWJlcjtcblx0Y2xhaW1Nb2RlbElEOiBudW1iZXI7XG5cdGNsYWltQ2F0ZWdvcnlJRDogbnVtYmVyO1xuXHRjbGFpbU1ha2VEaXNhYmxlZDogYm9vbGVhbjtcblx0Y2xhaW1Nb2RlbERpc2FibGVkOiBib29sZWFuO1xuXHRjbGFpbUNhdGVnb3J5RGlzYWJsZWQ6IGJvb2xlYW47XG5cdG5leHRBdmFpbGFibGU6IG51bWJlcjtcblx0dmluQXZhaWxhYmxlOiBib29sZWFuO1xuXHR2aW5Db2RlOiBzdHJpbmc7XG5cdHVzZXI6IGFueTtcblx0dmluY29kZVZhbHVlOiBhbnk7XG5cdHZpbmNvZGVOdW1iZXJFcnJvcjogYm9vbGVhbjtcbiAgYmFja2VuZEFwaTogc3RyaW5nO1xuICBlcnJvckFsZXJ0OiBzdHJpbmc7XG4gIHRvdG9hbFN0ZXA6IG51bWJlcjtcbiAgY3VycmVudFN0ZXA6IG51bWJlcjtcblxuICBoZWxwSWNvbjogc3RyaW5nO1xuICBsaXZlSGVscEljb246IHN0cmluZztcbiAgaGVscFN0YXR1czogYm9vbGVhbjtcbiAgbGl2ZUhlbHBTdGF0dXM6IGJvb2xlYW47XG4gIGlzVmluUmVxdWlyZTogYm9vbGVhbjtcbiAgaXNWaW5FcnJvckFsZXJ0OiBib29sZWFuO1xuXG4gIGdldFZlaGljbGVGb3JtOiBGb3JtR3JvdXA7XG5cblx0Y29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfc3Bpbm5lcjogU3Bpbm5lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWwsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkge1xuICAgIG1vZGFsLm92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2Y1JlZjtcbiAgICB0aGlzLmJhY2tlbmRBcGkgPSBDb25maWcuQVBJO1xuXHRcdHRoaXMucGFnZUxvYWRpbmcgPSB0cnVlO1xuXHRcdHRoaXMubmV4dEF2YWlsYWJsZSA9IDA7XG5cdFx0dGhpcy52aW5BdmFpbGFibGUgPSBmYWxzZTtcblx0XHR0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG5cdFx0dGhpcy5jbGFpbVllYXJJRCA9IC0xO1xuXHRcdHRoaXMuY2xhaW1NYWtlSUQgPSAtMTtcblx0XHR0aGlzLmNsYWltTW9kZWxJRCA9IC0xO1xuXHRcdHRoaXMuY2xhaW1DYXRlZ29yeUlEID0gLTE7XG5cdFx0dGhpcy5jbGFpbU1vZGVsRGlzYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMuY2xhaW1NYWtlRGlzYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMuY2xhaW1DYXRlZ29yeURpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzVmluUmVxdWlyZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNWaW5FcnJvckFsZXJ0ID0gZmFsc2U7XG5cbiAgICB0aGlzLmVycm9yQWxlcnQgPSAnJztcblxuICAgIHRoaXMubWFrZXMgPSBbXTtcbiAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuXHR9XG5cblxuICBpbml0VmVoaWNsZURhdGEoZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdGhpcy50b3RvYWxTdGVwID0gZGF0YS5zdGVwcy50b3RhbFN0ZXA7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IGRhdGEuc3RlcHMuY3VycmVudFN0ZXA7XG4gICAgdGhpcy5saXZlSGVscEljb24gPSB0aGlzLmJhY2tlbmRBcGkgKyBkYXRhLmxpdmVIZWxwLmljb247XG4gICAgdGhpcy5oZWxwSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEuaGVscC5pY29uO1xuICAgIGxldCBsb2dvSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEudWkubG9nbztcblxuICAgIGlmKGRhdGEubGl2ZUhlbHAub24gPT09IDEpIHtcbiAgICAgIHRoaXMubGl2ZUhlbHBTdGF0dXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpdmVIZWxwU3RhdHVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoZGF0YS5oZWxwLm9uID09PSAxKSB7XG4gICAgICB0aGlzLmhlbHBTdGF0dXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihkYXRhLnJlcXVpcmVWSU4gPT09IDEpIHtcbiAgICAgIHRoaXMuaXNWaW5SZXF1aXJlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1ZpblJlcXVpcmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudFNlcnZpY2UuZW1pdCgnbG9hZF90b3BiYXJfZGF0YScsIHtcbiAgICAgIGhlbHBJY29uOiB0aGlzLmhlbHBJY29uLFxuICAgICAgaGVscFN0YXR1czogdGhpcy5oZWxwU3RhdHVzLFxuICAgICAgbGl2ZUhlbHBJY29uOiB0aGlzLmxpdmVIZWxwSWNvbixcbiAgICAgIGxpdmVIZWxwU3RhdHVzOiB0aGlzLmxpdmVIZWxwU3RhdHVzLFxuICAgICAgbG9nb0ljb246IGxvZ29JY29uLFxuICAgICAgaGVscExpbms6IGRhdGEuaGVscC5saW5rXG4gICAgfSk7XG4gICAgdGhpcy5pc1BhZ2VMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgfVxuXG4gIGluaXRGb3JtKCkge1xuICAgIHRoaXMuZ2V0VmVoaWNsZUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHllYXI6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgIDxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZFxuICAgICAgXSksXG4gICAgICBtYWtlOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1xuICAgICAgICA8YW55PlZhbGlkYXRvcnMucmVxdWlyZWRcbiAgICAgIF0pLFxuICAgICAgbW9kZWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgIDxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZFxuICAgICAgXSksXG4gICAgICBjYXRlZ29yeTogbmV3IEZvcm1Db250cm9sKG51bGwsIFtcbiAgICAgICAgPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkXG4gICAgICBdKVxuICAgIH0pO1xuICB9XG5cblx0bmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0KCd2MS92ZWhpY2xlL3llYXJzJylcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMueWVhcnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcmVzLmRhdGEueWVhcnMpIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChyZXMuZGF0YS55ZWFyc1trZXldKTtcbiAgICAgICAgICB0aGlzLnllYXJzLnB1c2goe3ZhbHVlOiBrZXksIGxhYmVsOiB2YWx1ZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ZWFycy5zb3J0KGZ1bmN0aW9uKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIubGFiZWwpIC0gcGFyc2VJbnQoYS5sYWJlbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdEZvcm0oKTtcbiAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIHRoaXMucGFnZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcblxuICAgIHRoaXMuaXNQYWdlTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcblx0ICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+IHtcblx0ICAgIFx0dGhpcy56aXBjb2RlID0gcGFyYW1zWyd6aXBjb2RlJ107XG5cdCAgICBcdHRoaXMuc2x1Z0lkID0gcGFyYW1zWydzbHVnSWQnXTtcblx0ICAgIH0pO1xuXG5cdCAgICB0aGlzLnVzZXIgPSB7XG5cdCAgICBcdHZpbmNvZGU6ICcnXG5cdCAgICB9O1xuXG5cdCAgICB0aGlzLnZpbmNvZGVOdW1iZXJFcnJvciA9IGZhbHNlO1xuICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzbHVnOiB0aGlzLnNsdWdJZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL2dldHZlaGljbGUnLCBwb3N0RGF0YSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRWZWhpY2xlRGF0YShyZXMuZGF0YSk7XG4gICAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcblxuICAgIH1cblxuICAgIG9uWWVhcnNTZWxlY3RlZChldmVudDogYW55KSB7XG4gICAgICBsZXQgeWVhciA9IChldmVudCBhcyBhbnkpLnZhbHVlO1xuICAgICAgdGhpcy5tYWtlcyA9IFtdO1xuICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgdGhpcy5jbGFpbU1ha2VEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsYWltTW9kZWxEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsYWltQ2F0ZWdvcnlEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLm5leHRBdmFpbGFibGUgPSAxO1xuXG4gICAgICBpZih0aGlzLm5leHRBdmFpbGFibGUgPT09IDMpIHtcbiAgICAgICAgdGhpcy5uZXh0QXZhaWxhYmxlID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmV4dEF2YWlsYWJsZSA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYWltWWVhcklEID0geWVhcjtcbiAgICAgIGlmKHllYXIgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuY2xhaW1NYWtlRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuICAgICAgICB0aGlzLmNsYWltVXJsID0gJ3YxL3ZlaGljbGUvbWFrZXNmcm9tZGF0YT95ZWFyPScgKyB5ZWFyO1xuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXQodGhpcy5jbGFpbVVybClcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGFpbU1ha2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYWtlcyA9IHJlcy5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IGl0ZW0ubWFrZSwgbGFiZWw6IGl0ZW0ubWFrZX07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uTWFrZXNTZWxlY3RlZChldmVudDogYW55KSB7XG4gICAgICBsZXQgbWFrZSA9IChldmVudCBhcyBhbnkpLnZhbHVlO1xuICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgdGhpcy5jbGFpbU1vZGVsRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGFpbUNhdGVnb3J5RGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5uZXh0QXZhaWxhYmxlID0gMTtcblxuICAgICAgaWYocGFyc2VJbnQobWFrZSkgPT09IC0xKSB7XG4gICAgXHRcdHRoaXMubW9kZWxzID0gW107XG4gICAgXHRcdHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuICAgIFx0XHR0aGlzLmNsYWltTW9kZWxJRCA9IC0xO1xuICAgIFx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlJRCA9IC0xO1xuICAgIFx0XHR0aGlzLmNsYWltTW9kZWxEaXNhYmxlZCA9IHRydWU7XG4gICAgXHRcdHRoaXMuY2xhaW1DYXRlZ29yeURpc2FibGVkID0gdHJ1ZTtcbiAgICBcdFx0cmV0dXJuO1xuICAgIFx0fVxuICAgIFx0dGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuICAgIFx0dGhpcy5jbGFpbVVybCA9ICd2MS92ZWhpY2xlL21vZGVsc2Zyb21kYXRhP3llYXI9JyArIHRoaXMuY2xhaW1ZZWFySUQ7XG4gICAgXHR0aGlzLmNsYWltVXJsICs9ICcmbWFrZT0nO1xuICAgIFx0dGhpcy5jbGFpbVVybCArPSBtYWtlO1xuICAgIFx0dGhpcy5fZGF0YVNlcnZpY2UuZ2V0KHRoaXMuY2xhaW1VcmwpXG4gICAgXHRcdC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5tb2RlbHMgPSByZXMuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogaXRlbS5tb2RlbCwgbGFiZWw6IGl0ZW0ubW9kZWx9O1xuICAgICAgICAgIH0pO1xuICAgIFx0XHRcdHRoaXMuY2xhaW1NYWtlSUQgPSBtYWtlO1xuICAgIFx0XHRcdHRoaXMuY2xhaW1Nb2RlbERpc2FibGVkID0gZmFsc2U7XG4gICAgXHRcdFx0dGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgXHRcdH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBvbk1vZGVsc1NlbGVjdGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgIGxldCBtb2RlbCA9IChldmVudCBhcyBhbnkpLnZhbHVlO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gW107XG4gICAgICB0aGlzLmNsYWltQ2F0ZWdvcnlEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLm5leHRBdmFpbGFibGUgPSAxO1xuXG4gICAgXHRpZihwYXJzZUludChtb2RlbCkgPT09IC0xKSB7XG4gICAgXHRcdHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuICAgIFx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlJRCA9IC0xO1xuICAgIFx0XHR0aGlzLmNsYWltQ2F0ZWdvcnlEaXNhYmxlZCA9IHRydWU7XG4gICAgXHRcdHJldHVybjtcbiAgICBcdH1cbiAgICBcdHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgICBcdHRoaXMuY2xhaW1VcmwgPSAndjEvdmVoaWNsZS9zdHlsZXNmcm9tZGF0YT95ZWFyPScgKyB0aGlzLmNsYWltWWVhcklEO1xuICAgIFx0dGhpcy5jbGFpbVVybCArPSAnJm1ha2U9JztcbiAgICBcdHRoaXMuY2xhaW1VcmwgKz0gdGhpcy5jbGFpbU1ha2VJRDtcbiAgICBcdHRoaXMuY2xhaW1VcmwgKz0gJyZtb2RlbD0nO1xuICAgIFx0dGhpcy5jbGFpbVVybCArPSBtb2RlbDtcbiAgICBcdHRoaXMuX2RhdGFTZXJ2aWNlLmdldCh0aGlzLmNsYWltVXJsKVxuXHRcdFx0LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0dGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBpdGVtLnZlaGljbGVJZCwgbGFiZWw6IGl0ZW0uc3R5bGV9O1xuICAgICAgICB9KTtcblx0XHRcdFx0dGhpcy5jbGFpbU1vZGVsSUQgPSBtb2RlbDtcblx0XHRcdFx0dGhpcy5jbGFpbUNhdGVnb3J5RGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5fc3Bpbm5lci5zdG9wKCk7XG5cdFx0XHR9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG4gICAgfVxuXG4gICAgb25DYXRlZ29yaWVzU2VsZWN0ZWQoZXZlbnQ6IGFueSkge1xuICAgICAgbGV0IGNhdGVnb3J5ID0gKGV2ZW50IGFzIGFueSkudmFsdWU7XG4gICAgXHRpZihwYXJzZUludChjYXRlZ29yeSkgPT09IC0xKSB7XG4gICAgXHRcdHJldHVybjtcbiAgICBcdH1cbiAgICBcdGlmKHRoaXMubmV4dEF2YWlsYWJsZSA9PT0gMCkge1xuICAgIFx0XHR0aGlzLm5leHRBdmFpbGFibGUgPSAxO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0dGhpcy5uZXh0QXZhaWxhYmxlID0gMjtcbiAgICBcdH1cbiAgICBcdHRoaXMuY2xhaW1DYXRlZ29yeUlEID0gY2F0ZWdvcnk7XG4gICAgXHRjb25zb2xlLmxvZyhjYXRlZ29yeSk7XG4gICAgfVxuXG5cdGtleXByZXNzVmluKHZhbHVlOiBhbnksIHZpbmZvcm06IGFueSkge1xuXHRcdGlmKCgvXlthLXpBLVowLTldKiQvLnRlc3QodmFsdWUpKSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMudmluY29kZU51bWJlckVycm9yID0gdHJ1ZTtcblx0XHRcdHZpbmZvcm0ucmVzZXQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZpbmNvZGVOdW1iZXJFcnJvciA9IGZhbHNlO1xuXG5cdFx0aWYodmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IDE3KSB7XG5cdFx0XHR0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICB0aGlzLnZpbkNvZGUgPSB2YWx1ZTtcblx0ICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldCgndjEvdmVoaWNsZS92aW4/dmluPScgKyB2YWx1ZSlcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIHRoaXMuY2xhaW1NYWtlRGlzYWJsZWQgICAgID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbGFpbU1vZGVsRGlzYWJsZWQgICAgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsYWltQ2F0ZWdvcnlEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYocmVzLmNvZGU9PT0yMDApIHtcbiAgICAgICAgICAgIHRoaXMudmluQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jbGFpbUNhdGVnb3J5SUQgPSByZXMuZGF0YS52ZWhpY2xlSWQ7XG4gICAgICAgICAgICB0aGlzLm5leHRBdmFpbGFibGUgPSAzO1xuICAgICAgICAgICAgdGhpcy55ZWFycyAgICAgICA9IFt7dmFsdWU6IHJlcy5kYXRhLnllYXIsIGxhYmVsOiByZXMuZGF0YS55ZWFyfV07XG4gICAgICAgICAgICB0aGlzLm1ha2VzICAgICAgID0gW3t2YWx1ZTogcmVzLmRhdGEubWFrZSwgbGFiZWw6IHJlcy5kYXRhLm1ha2V9XTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxzICAgICAgPSBbe3ZhbHVlOiByZXMuZGF0YS5tb2RlbCwgbGFiZWw6IHJlcy5kYXRhLm1vZGVsfV07XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgID0gW3t2YWx1ZTogcmVzLmRhdGEuc3R5bGUsIGxhYmVsOiByZXMuZGF0YS5zdHlsZX1dO1xuXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGF0LmdldFZlaGljbGVGb3JtLmNvbnRyb2xzWyd5ZWFyJ10uc2V0VmFsdWUocmVzLmRhdGEueWVhcik7XG4gICAgICAgICAgICAgIHRoYXQuZ2V0VmVoaWNsZUZvcm0uY29udHJvbHNbJ21ha2UnXS5zZXRWYWx1ZShyZXMuZGF0YS5tYWtlKTtcbiAgICAgICAgICAgICAgdGhhdC5nZXRWZWhpY2xlRm9ybS5jb250cm9sc1snbW9kZWwnXS5zZXRWYWx1ZShyZXMuZGF0YS5tb2RlbCk7XG4gICAgICAgICAgICAgIHRoYXQuZ2V0VmVoaWNsZUZvcm0uY29udHJvbHNbJ2NhdGVnb3J5J10uc2V0VmFsdWUocmVzLmRhdGEuc3R5bGUpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydEVycm9yKCdWSU4gY29kZSBpcyBub3QgaW52YWxpZC4nLCAzMDAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcblx0XHRcdFx0fSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuXHRcdH0gZWxzZSB7XG4gICAgICB0aGlzLnZpbkF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIH1cblx0fVxuXG4gIGFsZXJ0RXJyb3IodGV4dDogc3RyaW5nLCB0aW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLmlzVmluRXJyb3JBbGVydCA9IHRydWU7XG4gICAgdGhpcy5lcnJvckFsZXJ0ID0gdGV4dDtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoYXQuaXNWaW5FcnJvckFsZXJ0ID0gZmFsc2U7IH0sIHRpbWUpO1xuICB9XG5cblx0bG9hZENsYWltKCkge1xuICAgIGlmKHRoaXMuaXNWaW5SZXF1aXJlICYmICF0aGlzLnZpbkF2YWlsYWJsZSkge1xuICAgICAgdGhpcy5hbGVydEVycm9yKCdQbGVhc2UgZW50ZXIgYSAxNy1kaWdpdCBWSU4gIycsIDMwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXHRcdHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIEF1dG9WSU46IHRoaXMudmluQ29kZSxcbiAgICAgICAgQXV0b1llYXI6IHRoaXMuZ2V0VmVoaWNsZUZvcm1bJ3ZhbHVlJ11bJ3llYXInXSxcbiAgICAgICAgQXV0b0lEOiB0aGlzLmNsYWltQ2F0ZWdvcnlJRCxcbiAgICAgICAgc2x1ZzogdGhpcy5zbHVnSWRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdCgndjEvZGF0YS9zYXZldmVoaWNsZScsIHBvc3REYXRhKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcmVTZXJ2aWNlLnNldCgncF9zbHVnJywgcmVzLmRhdGEuc2x1Zyk7XG4gICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYW1hZ2UnLCByZXMuZGF0YS5zbHVnXSk7XG4gICAgICB9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG5cdH1cblxuICBvblZpbigpIHtcbiAgICB0aGlzLm1vZGFsLmFsZXJ0KClcbiAgICAgIC5zaXplKCdzbScpXG4gICAgICAuc2hvd0Nsb3NlKHRydWUpXG4gICAgICAub2tCdG5DbGFzcygnaGlkZGVuJylcbiAgICAgIC50aXRsZSgnVmluIExvY2F0aW9ucycpXG4gICAgICAuYm9keShgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZpbi1tb2RhbC13cmFwcGVyIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdmluX2xvY2F0aW9ucy5wbmdcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgKVxuICAgICAgLm9wZW4oKTtcbiAgfVxufVxuIl19
