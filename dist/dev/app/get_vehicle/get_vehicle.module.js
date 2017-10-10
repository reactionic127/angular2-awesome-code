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
var common_1 = require('@angular/common');
var get_vehicle_component_1 = require('./get_vehicle.component');
var platform_browser_1 = require('@angular/platform-browser');
var angular2_select_1 = require('angular2-select');
var forms_1 = require('@angular/forms');
var GetVehicleModule = (function () {
    function GetVehicleModule() {
    }
    GetVehicleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                platform_browser_1.BrowserModule,
                angular2_select_1.SelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule],
            declarations: [get_vehicle_component_1.GetVehicleComponent],
            exports: [get_vehicle_component_1.GetVehicleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GetVehicleModule);
    return GetVehicleModule;
}());
exports.GetVehicleModule = GetVehicleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nZXRfdmVoaWNsZS9nZXRfdmVoaWNsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQ0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxnQ0FBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFFTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBYXhCO0lBQUE7SUFBZ0MsQ0FBQztJQVhqQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZO2dCQUN0QixnQ0FBYTtnQkFDYiw4QkFBWTtnQkFDWixtQkFBVztnQkFDWCwyQkFBbUI7Z0JBQ25CLG1CQUFXLENBQUM7WUFDWixZQUFZLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztTQUNqQyxDQUFDOzt3QkFBQTtJQUU4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL2dldF92ZWhpY2xlL2dldF92ZWhpY2xlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR2V0VmVoaWNsZUNvbXBvbmVudCB9IGZyb20gJy4vZ2V0X3ZlaGljbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFNlbGVjdE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXNlbGVjdCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgU2VsZWN0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0dldFZlaGljbGVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtHZXRWZWhpY2xlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEdldFZlaGljbGVNb2R1bGUgeyB9XG4iXX0=
