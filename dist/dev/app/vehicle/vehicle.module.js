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
var router_1 = require('@angular/router');
var vehicle_component_1 = require('./vehicle.component');
var dot_slider_module_1 = require('../utilities/dot-slider/dot-slider.module');
var VehicleModule = (function () {
    function VehicleModule() {
    }
    VehicleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, dot_slider_module_1.DotSliderModule],
            declarations: [vehicle_component_1.VehicleComponent],
            exports: [vehicle_component_1.VehicleComponent, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], VehicleModule);
    return VehicleModule;
}());
exports.VehicleModule = VehicleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92ZWhpY2xlL3ZlaGljbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsa0NBQXFDLHFCQUFxQixDQUFDLENBQUE7QUFDM0Qsa0NBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFRakY7SUFBQTtJQUE2QixDQUFDO0lBTjlCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxFQUFFLG1DQUFlLENBQUM7WUFDdEQsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLEVBQUUscUJBQVksQ0FBQztTQUM1QyxDQUFDOztxQkFBQTtJQUUyQixvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIscUJBQWEsZ0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvdmVoaWNsZS92ZWhpY2xlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWZWhpY2xlQ29tcG9uZW50IH0gICAgIGZyb20gJy4vdmVoaWNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG90U2xpZGVyTW9kdWxlIH0gICAgICBmcm9tICcuLi91dGlsaXRpZXMvZG90LXNsaWRlci9kb3Qtc2xpZGVyLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEb3RTbGlkZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1ZlaGljbGVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtWZWhpY2xlQ29tcG9uZW50LCBSb3V0ZXJNb2R1bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgVmVoaWNsZU1vZHVsZSB7IH1cbiJdfQ==
