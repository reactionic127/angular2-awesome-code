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
var identify_component_1 = require('./identify.component');
var dot_slider_module_1 = require('../utilities/dot-slider/dot-slider.module');
var ng2_file_upload_1 = require('ng2-file-upload');
var angular2_select_1 = require('angular2-select');
var forms_1 = require('@angular/forms');
var IdentifyModule = (function () {
    function IdentifyModule() {
    }
    IdentifyModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                dot_slider_module_1.DotSliderModule,
                forms_1.FormsModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.ReactiveFormsModule,
                angular2_select_1.SelectModule
            ],
            declarations: [identify_component_1.IdentifyComponent],
            exports: [identify_component_1.IdentifyComponent, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], IdentifyModule);
    return IdentifyModule;
}());
exports.IdentifyModule = IdentifyModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pZGVudGlmeS9pZGVudGlmeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxrQ0FBa0MsMkNBQTJDLENBQUMsQ0FBQTtBQUM5RSxnQ0FBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxnQ0FBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFFTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBZ0J4QjtJQUFBO0lBQThCLENBQUM7SUFkL0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7Z0JBQ1oscUJBQVk7Z0JBQ1osbUNBQWU7Z0JBQ2YsbUJBQVc7Z0JBQ1gsa0NBQWdCO2dCQUNoQiwyQkFBbUI7Z0JBQ2hCLDhCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxxQkFBWSxDQUFDO1NBQzdDLENBQUM7O3NCQUFBO0lBRTRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9pZGVudGlmeS9pZGVudGlmeS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSWRlbnRpZnlDb21wb25lbnQgfSBmcm9tICcuL2lkZW50aWZ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb3RTbGlkZXJNb2R1bGUgfSAgIGZyb20gJy4uL3V0aWxpdGllcy9kb3Qtc2xpZGVyL2RvdC1zbGlkZXIubW9kdWxlJztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSAgZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7IFNlbGVjdE1vZHVsZSB9ICAgICAgZnJvbSAnYW5ndWxhcjItc2VsZWN0JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICBcdENvbW1vbk1vZHVsZSxcbiAgICBcdFJvdXRlck1vZHVsZSxcbiAgICBcdERvdFNsaWRlck1vZHVsZSxcbiAgICBcdEZvcm1zTW9kdWxlLFxuICAgIFx0RmlsZVVwbG9hZE1vZHVsZSxcbiAgICBcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFNlbGVjdE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbSWRlbnRpZnlDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtJZGVudGlmeUNvbXBvbmVudCwgUm91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIElkZW50aWZ5TW9kdWxlIHsgfVxuIl19
