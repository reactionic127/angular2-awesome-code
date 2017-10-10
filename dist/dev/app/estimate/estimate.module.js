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
var estimate_component_1 = require('./estimate.component');
var dot_slider_module_1 = require('../utilities/dot-slider/dot-slider.module');
var disclaimer_modal_component_1 = require('./modal/disclaimer.modal.component');
var disclaimer_modal_service_1 = require('./modal/disclaimer.modal.service');
var EstimateModule = (function () {
    function EstimateModule() {
    }
    EstimateModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, dot_slider_module_1.DotSliderModule],
            declarations: [estimate_component_1.EstimateComponent,
                disclaimer_modal_component_1.DisclaimerWindowModalComponent
            ],
            exports: [estimate_component_1.EstimateComponent],
            providers: [disclaimer_modal_service_1.DisclaimerModelService],
            entryComponents: [
                disclaimer_modal_component_1.DisclaimerWindowModalComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EstimateModule);
    return EstimateModule;
}());
exports.EstimateModule = EstimateModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lc3RpbWF0ZS9lc3RpbWF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxrQ0FBa0MsMkNBQTJDLENBQUMsQ0FBQTtBQUM5RSwyQ0FBZ0Qsb0NBQW9DLENBQUMsQ0FBQTtBQUNyRix5Q0FBdUMsa0NBQWtDLENBQUMsQ0FBQTtBQWMxRTtJQUFBO0lBQThCLENBQUM7SUFaL0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG1DQUFlLENBQUM7WUFDeEMsWUFBWSxFQUFFLENBQUMsc0NBQWlCO2dCQUMvQiwyREFBOEI7YUFDOUI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyxpREFBc0IsQ0FBQztZQUNuQyxlQUFlLEVBQUU7Z0JBQ2hCLDJEQUE4QjthQUM5QjtTQUNKLENBQUM7O3NCQUFBO0lBRTRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9lc3RpbWF0ZS9lc3RpbWF0ZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXN0aW1hdGVDb21wb25lbnQgfSBmcm9tICcuL2VzdGltYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb3RTbGlkZXJNb2R1bGUgfSAgIGZyb20gJy4uL3V0aWxpdGllcy9kb3Qtc2xpZGVyL2RvdC1zbGlkZXIubW9kdWxlJztcbmltcG9ydCB7IERpc2NsYWltZXJXaW5kb3dNb2RhbENvbXBvbmVudCB9ICBmcm9tICcuL21vZGFsL2Rpc2NsYWltZXIubW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IERpc2NsYWltZXJNb2RlbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsL2Rpc2NsYWltZXIubW9kYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRG90U2xpZGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtFc3RpbWF0ZUNvbXBvbmVudCxcbiAgICBcdERpc2NsYWltZXJXaW5kb3dNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW0VzdGltYXRlQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtEaXNjbGFpbWVyTW9kZWxTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBcdERpc2NsYWltZXJXaW5kb3dNb2RhbENvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBFc3RpbWF0ZU1vZHVsZSB7IH1cbiJdfQ==
