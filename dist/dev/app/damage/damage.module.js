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
var angular2_modal_1 = require('angular2-modal');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var dot_slider_module_1 = require('../utilities/dot-slider/dot-slider.module');
var carmap_component_1 = require('./carmap.component');
var damage_location_component_1 = require('./damage-location.component');
var damage_component_1 = require('./damage.component');
var alert_modal_component_1 = require('./modal/alert.modal.component');
var confirm_modal_component_1 = require('./modal/confirm.modal.component');
var damage_modal_component_1 = require('./modal/damage.modal.component');
var image_map_component_1 = require('../utilities/image-map/image-map.component');
var level_slider_component_1 = require('../utilities/level-slider/level-slider.component');
var index_1 = require('../core/index');
var alert_modal_service_1 = require('./modal/alert.modal.service');
var confirm_modal_service_1 = require('./modal/confirm.modal.service');
var damage_modal_service_1 = require('./modal/damage.modal.service');
var DamageModule = (function () {
    function DamageModule() {
    }
    DamageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                index_1.ServiceModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule,
                dot_slider_module_1.DotSliderModule
            ],
            declarations: [
                damage_component_1.DamageComponent,
                alert_modal_component_1.AlertWindowModalComponent,
                confirm_modal_component_1.ConfirmWindowModalComponent,
                damage_modal_component_1.DamageWindowModalComponent,
                damage_location_component_1.DamageLocationComponent,
                carmap_component_1.CarMapComponent,
                image_map_component_1.ImageMapComponent,
                level_slider_component_1.LevelSliderComponent
            ],
            providers: [
                alert_modal_service_1.AlertModelService,
                damage_modal_service_1.DamageModelService,
                confirm_modal_service_1.ConfirmModelService
            ],
            exports: [damage_component_1.DamageComponent,
                router_1.RouterModule],
            entryComponents: [
                alert_modal_component_1.AlertWindowModalComponent,
                confirm_modal_component_1.ConfirmWindowModalComponent,
                damage_modal_component_1.DamageWindowModalComponent
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], DamageModule);
    return DamageModule;
}());
exports.DamageModule = DamageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvZGFtYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlELGVBQWUsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFELHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTFELCtCQUF3QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3pELDBCQUF3QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQzNFLGtDQUF3QywyQ0FBMkMsQ0FBQyxDQUFBO0FBRXBGLGlDQUE0QyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ2pFLDBDQUE0Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFFLGlDQUE0QyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ2pFLHNDQUE0QywrQkFBK0IsQ0FBQyxDQUFBO0FBQzVFLHdDQUE0QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQzlFLHVDQUE0QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdFLG9DQUE0Qyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ3pGLHVDQUE0QyxrREFBa0QsQ0FBQyxDQUFBO0FBRy9GLHNCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCxvQ0FBd0MsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RSxzQ0FBd0MsK0JBQStCLENBQUMsQ0FBQTtBQUN4RSxxQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQW9DdkU7SUFBQTtJQUE0QixDQUFDO0lBbEM3QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWixxQkFBYTtnQkFDYiw0QkFBVyxDQUFDLE9BQU8sRUFBRTtnQkFDckIsZ0NBQW9CO2dCQUNwQixtQ0FBZTthQUNoQjtZQUNELFlBQVksRUFBRTtnQkFDWixrQ0FBZTtnQkFDZixpREFBeUI7Z0JBQ3pCLHFEQUEyQjtnQkFDM0IsbURBQTBCO2dCQUMxQixtREFBdUI7Z0JBQ3ZCLGtDQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIsNkNBQW9CO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHVDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQiwyQ0FBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBZTtnQkFDekIscUJBQVksQ0FBQztZQUNiLGVBQWUsRUFBRTtnQkFDZixpREFBeUI7Z0JBQ3pCLHFEQUEyQjtnQkFDM0IsbURBQTBCO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLENBQUMsNkJBQXNCLENBQUM7U0FDcEMsQ0FBQzs7b0JBQUE7SUFFMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFtYWdlL2RhbWFnZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZGFsTW9kdWxlIH0gICAgZnJvbSAnYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXAnO1xuaW1wb3J0IHsgRG90U2xpZGVyTW9kdWxlIH0gICAgICAgICBmcm9tICcuLi91dGlsaXRpZXMvZG90LXNsaWRlci9kb3Qtc2xpZGVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IENhck1hcENvbXBvbmVudCB9ICAgICAgICAgICAgIGZyb20gJy4vY2FybWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYW1hZ2VMb2NhdGlvbkNvbXBvbmVudCB9ICAgICBmcm9tICcuL2RhbWFnZS1sb2NhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFtYWdlQ29tcG9uZW50IH0gICAgICAgICAgICAgZnJvbSAnLi9kYW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFsZXJ0V2luZG93TW9kYWxDb21wb25lbnQgfSAgIGZyb20gJy4vbW9kYWwvYWxlcnQubW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1XaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvY29uZmlybS5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFtYWdlV2luZG93TW9kYWxDb21wb25lbnQgfSAgZnJvbSAnLi9tb2RhbC9kYW1hZ2UubW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlTWFwQ29tcG9uZW50IH0gICAgICAgICAgIGZyb20gJy4uL3V0aWxpdGllcy9pbWFnZS1tYXAvaW1hZ2UtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZXZlbFNsaWRlckNvbXBvbmVudCB9ICAgICAgICBmcm9tICcuLi91dGlsaXRpZXMvbGV2ZWwtc2xpZGVyL2xldmVsLXNsaWRlci5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7IFNlcnZpY2VNb2R1bGUgfSAgICAgICAgICAgZnJvbSAnLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBBbGVydE1vZGVsU2VydmljZSB9ICAgICAgIGZyb20gJy4vbW9kYWwvYWxlcnQubW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtTW9kZWxTZXJ2aWNlIH0gICAgIGZyb20gJy4vbW9kYWwvY29uZmlybS5tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IERhbWFnZU1vZGVsU2VydmljZSB9ICAgICAgZnJvbSAnLi9tb2RhbC9kYW1hZ2UubW9kYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgU2VydmljZU1vZHVsZSxcbiAgICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgIEJvb3RzdHJhcE1vZGFsTW9kdWxlLFxuICAgICAgRG90U2xpZGVyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIERhbWFnZUNvbXBvbmVudCxcbiAgICAgIEFsZXJ0V2luZG93TW9kYWxDb21wb25lbnQsXG4gICAgICBDb25maXJtV2luZG93TW9kYWxDb21wb25lbnQsXG4gICAgICBEYW1hZ2VXaW5kb3dNb2RhbENvbXBvbmVudCxcbiAgICAgIERhbWFnZUxvY2F0aW9uQ29tcG9uZW50LFxuICAgICAgQ2FyTWFwQ29tcG9uZW50LFxuICAgICAgSW1hZ2VNYXBDb21wb25lbnQsXG4gICAgICBMZXZlbFNsaWRlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBBbGVydE1vZGVsU2VydmljZSxcbiAgICAgIERhbWFnZU1vZGVsU2VydmljZSxcbiAgICAgIENvbmZpcm1Nb2RlbFNlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtEYW1hZ2VDb21wb25lbnQsXG4gICAgUm91dGVyTW9kdWxlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgIEFsZXJ0V2luZG93TW9kYWxDb21wb25lbnQsXG4gICAgICBDb25maXJtV2luZG93TW9kYWxDb21wb25lbnQsXG4gICAgICBEYW1hZ2VXaW5kb3dNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFtYWdlTW9kdWxlIHsgfVxuIl19
