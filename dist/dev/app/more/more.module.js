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
var more_component_1 = require('./more.component');
var dot_slider_module_1 = require('../utilities/dot-slider/dot-slider.module');
var MoreModule = (function () {
    function MoreModule() {
    }
    MoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, dot_slider_module_1.DotSliderModule],
            declarations: [more_component_1.MoreComponent],
            exports: [more_component_1.MoreComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MoreModule);
    return MoreModule;
}());
exports.MoreModule = MoreModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb3JlL21vcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsK0JBQWdDLGtCQUFrQixDQUFDLENBQUE7QUFDbkQsa0NBQWdDLDJDQUEyQyxDQUFDLENBQUE7QUFRNUU7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQ0FBZSxDQUFDO1lBQ3hDLFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUMzQixDQUFDOztrQkFBQTtJQUV3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL21vcmUvbW9yZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb3JlQ29tcG9uZW50IH0gICBmcm9tICcuL21vcmUuY29tcG9uZW50JztcbmltcG9ydCB7IERvdFNsaWRlck1vZHVsZSB9IGZyb20gJy4uL3V0aWxpdGllcy9kb3Qtc2xpZGVyL2RvdC1zbGlkZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEb3RTbGlkZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW01vcmVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtNb3JlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE1vcmVNb2R1bGUgeyB9XG4iXX0=
