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
var VehicleComponent = (function () {
    function VehicleComponent(route, _dataService, _eventService, router, _spinner) {
        this.route = route;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this.router = router;
        this._spinner = _spinner;
        this.PEMISSIONDENIED = 'Permission denied.';
        this.bCheckPermission = false;
        this.backendApi = index_1.Config.API;
        this.totoalStep = 0;
        this.currentStep = 0;
    }
    VehicleComponent.prototype.initVehicleData = function (data) {
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
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isPageLoading = false;
        this._spinner.start();
        this.sub = this.route.params.subscribe(function (params) {
            _this.slug = params['id'];
            _this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    slug: _this.slug
                }
            };
            _this._dataService.post('v1/data/getclaim', postData)
                .subscribe(function (res) {
                _this.initVehicleData(res.data);
                _this.vehicleData = res.data;
                _this.redirectWithPermissionIssue();
                _this.bCheckPermission = true;
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    VehicleComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VehicleComponent.prototype.redirectWithPermissionIssue = function () {
        if (this.vehicleData && this.vehicleData.message === this.PEMISSIONDENIED) {
            alert(this.vehicleData.message);
            this.router.navigate(['/']);
        }
    };
    VehicleComponent.prototype.next = function () {
        this.router.navigate(['/damage', this.slug]);
    };
    VehicleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-vehicle',
            templateUrl: 'vehicle.component.html',
            styleUrls: ['vehicle.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, data_service_1.DataService, event_service_1.EventService, router_1.Router, index_2.SpinnerService])
    ], VehicleComponent);
    return VehicleComponent;
}());
exports.VehicleComponent = VehicleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFHTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCw2QkFBdUMsc0JBQXNCLENBQUMsQ0FBQTtBQUM5RCw4QkFBdUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMvRCxzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQVl6RDtJQW1CRSwwQkFBb0IsS0FBcUIsRUFDL0IsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsTUFBYyxFQUNkLFFBQXdCO1FBSmQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBUGxDLG9CQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDdkMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBUWhDLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBTSxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixJQUFTO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxD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SSxDQUFDLFdBQW1CLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLEtBQUssQ0FBRSxJQUFJLENBQUMsV0FBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFHRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTVHSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDOzt3QkFBQTtJQXlHRix1QkFBQztBQUFELENBdkdBLEFBdUdDLElBQUE7QUF2R1ksd0JBQWdCLG1CQXVHNUIsQ0FBQSIsImZpbGUiOiJhcHAvdmVoaWNsZS92ZWhpY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9ICAgICAgICAgICBmcm9tICcuLi9jb3JlL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBWZWhpY2xlQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC12ZWhpY2xlJyxcbiAgdGVtcGxhdGVVcmw6ICd2ZWhpY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3ZlaGljbGUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVmVoaWNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0c2x1ZzogbnVtYmVyO1xuICB0b3RvYWxTdGVwOiBudW1iZXI7XG4gIGN1cnJlbnRTdGVwOiBudW1iZXI7XG5cbiAgaGVscEljb246IHN0cmluZztcbiAgbGl2ZUhlbHBJY29uOiBzdHJpbmc7XG4gIGhlbHBTdGF0dXM6IGJvb2xlYW47XG4gIGxpdmVIZWxwU3RhdHVzOiBib29sZWFuO1xuICBpc1BhZ2VMb2FkaW5nOiBib29sZWFuO1xuXG5cdHN1YjogYW55O1xuXG4gIGJhY2tlbmRBcGk6IHN0cmluZztcblxuICB2ZWhpY2xlRGF0YTogT2JqZWN0O1xuICBQRU1JU1NJT05ERU5JRUQgPSAnUGVybWlzc2lvbiBkZW5pZWQuJztcbiAgYkNoZWNrUGVybWlzc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3NwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmJhY2tlbmRBcGkgPSBDb25maWcuQVBJO1xuICAgIHRoaXMudG90b2FsU3RlcCA9IDA7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gIH1cblxuICBpbml0VmVoaWNsZURhdGEoZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdGhpcy50b3RvYWxTdGVwID0gZGF0YS5zdGVwcy50b3RhbFN0ZXA7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IGRhdGEuc3RlcHMuY3VycmVudFN0ZXA7XG4gICAgdGhpcy5saXZlSGVscEljb24gPSB0aGlzLmJhY2tlbmRBcGkgKyBkYXRhLmxpdmVIZWxwLmljb247XG4gICAgdGhpcy5oZWxwSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEuaGVscC5pY29uO1xuICAgIGxldCBsb2dvSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEudWkubG9nbztcblxuICAgIGlmKGRhdGEubGl2ZUhlbHAub24gPT09IDEpIHtcbiAgICAgIHRoaXMubGl2ZUhlbHBTdGF0dXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpdmVIZWxwU3RhdHVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoZGF0YS5oZWxwLm9uID09PSAxKSB7XG4gICAgICB0aGlzLmhlbHBTdGF0dXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudFNlcnZpY2UuZW1pdCgnbG9hZF90b3BiYXJfZGF0YScsIHtcbiAgICAgIGhlbHBJY29uOiB0aGlzLmhlbHBJY29uLFxuICAgICAgaGVscFN0YXR1czogdGhpcy5oZWxwU3RhdHVzLFxuICAgICAgbGl2ZUhlbHBJY29uOiB0aGlzLmxpdmVIZWxwSWNvbixcbiAgICAgIGxpdmVIZWxwU3RhdHVzOiB0aGlzLmxpdmVIZWxwU3RhdHVzLFxuICAgICAgbG9nb0ljb246IGxvZ29JY29uLFxuICAgICAgaGVscExpbms6IGRhdGEuaGVscC5saW5rXG4gICAgfSk7XG4gICAgdGhpcy5pc1BhZ2VMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNQYWdlTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PiB7XG4gICAgICB0aGlzLnNsdWcgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNsdWc6IHRoaXMuc2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL2dldGNsYWltJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0VmVoaWNsZURhdGEocmVzLmRhdGEpO1xuICAgICAgICAgIHRoaXMudmVoaWNsZURhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0V2l0aFBlcm1pc3Npb25Jc3N1ZSgpO1xuICAgICAgICAgIHRoaXMuYkNoZWNrUGVybWlzc2lvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcblxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gIFx0dGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlZGlyZWN0V2l0aFBlcm1pc3Npb25Jc3N1ZSgpIHtcbiAgICBpZih0aGlzLnZlaGljbGVEYXRhICYmICh0aGlzLnZlaGljbGVEYXRhIGFzIGFueSkubWVzc2FnZSA9PT0gdGhpcy5QRU1JU1NJT05ERU5JRUQpIHtcbiAgICAgIGFsZXJ0KCh0aGlzLnZlaGljbGVEYXRhIGFzIGFueSkubWVzc2FnZSk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfVxuICB9XG5cbiAgLy9mcm9tIHZlaGljbGUgdG8gZGFtYWdlXG4gIG5leHQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFtYWdlJywgdGhpcy5zbHVnXSk7XG4gIH1cblxufVxuIl19
