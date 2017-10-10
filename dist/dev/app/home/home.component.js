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
var data_service_1 = require('../core/data.service');
var store_service_1 = require('../core/store.service');
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var HomeComponent = (function () {
    function HomeComponent(_dataService, route, router, _spinner, _storeService) {
        this._dataService = _dataService;
        this.route = route;
        this.router = router;
        this._spinner = _spinner;
        this._storeService = _storeService;
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.claimID = 194948;
        this.route.params.subscribe(function (params) {
            _this.profile_slug = params['profile_slug'];
        });
    };
    HomeComponent.prototype.next = function (form) {
        var _this = this;
        if (form.value.claimID) {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    profile_slug: form.value.profile_slug,
                    Customer_Zip: 91701,
                    ClaimID: form.value.claimID
                }
            };
            this._dataService.post('v1/data/getclaim', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this._storeService.setTempData(res.data);
                _this._storeService.set('p_slug', res.data.slug);
                _this.router.navigate(['/vehicle', res.data.slug]);
            });
        }
        else {
            alert('Please insert claim ID.');
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.ActivatedRoute, router_1.Router, index_1.SpinnerService, store_service_1.StoreService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFDcEQsOEJBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsc0JBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFVbEQ7SUFXRSx1QkFDVSxZQUF5QixFQUN6QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsUUFBd0IsRUFDeEIsYUFBMkI7UUFKM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBYnJDLFVBQUssR0FBVSxFQUFFLENBQUM7SUFhc0IsQ0FBQztJQUt6QyxnQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFRO1FBQWIsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXRCLElBQUksUUFBUSxHQUFHO2dCQUNiLElBQUksRUFBRSxHQUFHO2dCQUNULElBQUksRUFBRTtvQkFDSixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO29CQUNyQyxZQUFZLEVBQUUsS0FBSztvQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztpQkFDNUI7YUFDRixDQUFDO1lBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDO2lCQUNqRCxTQUFTLENBQUMsVUFBQyxHQUFRO2dCQUVsQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQTFESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQXVERixvQkFBQztBQUFELENBdERBLEFBc0RDLElBQUE7QUF0RFkscUJBQWEsZ0JBc0R6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9ICBmcm9tICcuLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBuYW1lczogYW55W10gPSBbXTtcbiAgY2xhaW1JRDogbnVtYmVyO1xuICBwcm9maWxlX3NsdWc6IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxuICAgKiBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9zcGlubmVyOiBTcGlubmVyU2VydmljZSxcbiAgICBwcml2YXRlIF9zdG9yZVNlcnZpY2U6IFN0b3JlU2VydmljZSkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xhaW1JRCA9IDE5NDk0ODtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zPT4ge1xuICAgICAgdGhpcy5wcm9maWxlX3NsdWcgPSBwYXJhbXNbJ3Byb2ZpbGVfc2x1ZyddO1xuICAgIH0pO1xuICB9XG5cbiAgbmV4dChmb3JtOmFueSkge1xuICAgIGlmKGZvcm0udmFsdWUuY2xhaW1JRCkge1xuICAgICAgdGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuXG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHByb2ZpbGVfc2x1ZzogZm9ybS52YWx1ZS5wcm9maWxlX3NsdWcsXG4gICAgICAgICAgQ3VzdG9tZXJfWmlwOiA5MTcwMSxcbiAgICAgICAgICBDbGFpbUlEOiBmb3JtLnZhbHVlLmNsYWltSURcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdCgndjEvZGF0YS9nZXRjbGFpbScsIHBvc3REYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIGdldCB0aGUgc2x1Z1xuICAgICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgIHRoaXMuX3N0b3JlU2VydmljZS5zZXRUZW1wRGF0YShyZXMuZGF0YSk7XG4gICAgICAgICAgdGhpcy5fc3RvcmVTZXJ2aWNlLnNldCgncF9zbHVnJywgcmVzLmRhdGEuc2x1Zyk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmVoaWNsZScsIHJlcy5kYXRhLnNsdWddKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgaW5zZXJ0IGNsYWltIElELicpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
