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
var dot_slider_module_1 = require('../utilities/dot-slider/dot-slider.module');
var img_component_1 = require('./img.component');
var photo_component_1 = require('./photo.component');
var PhotoModule = (function () {
    function PhotoModule() {
    }
    PhotoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                dot_slider_module_1.DotSliderModule
            ],
            declarations: [
                photo_component_1.PhotoComponent,
                img_component_1.ImgComponent
            ],
            exports: [photo_component_1.PhotoComponent, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoModule);
    return PhotoModule;
}());
exports.PhotoModule = PhotoModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waG90by9waG90by5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCxrQ0FBZ0MsMkNBQTJDLENBQUMsQ0FBQTtBQUU1RSw4QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCxnQ0FBZ0MsbUJBQW1CLENBQUMsQ0FBQTtBQWVwRDtJQUFBO0lBQTJCLENBQUM7SUFiNUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osbUNBQWU7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDYixnQ0FBYztnQkFDZCw0QkFBWTthQUNaO1lBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxxQkFBWSxDQUFDO1NBQzFDLENBQUM7O21CQUFBO0lBRXlCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvcGhvdG8vcGhvdG8ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERvdFNsaWRlck1vZHVsZSB9IGZyb20gJy4uL3V0aWxpdGllcy9kb3Qtc2xpZGVyL2RvdC1zbGlkZXIubW9kdWxlJztcblxuaW1wb3J0IHsgSW1nQ29tcG9uZW50IH0gICAgZnJvbSAnLi9pbWcuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvQ29tcG9uZW50IH0gIGZyb20gJy4vcGhvdG8uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgXHRDb21tb25Nb2R1bGUsXG4gICAgXHRSb3V0ZXJNb2R1bGUsXG4gICAgXHREb3RTbGlkZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgIFx0UGhvdG9Db21wb25lbnQsXG4gICAgXHRJbWdDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtQaG90b0NvbXBvbmVudCwgUm91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIFBob3RvTW9kdWxlIHsgfVxuIl19
