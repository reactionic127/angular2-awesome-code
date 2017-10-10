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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var about_module_1 = require('./about/about.module');
var home_module_1 = require('./home/home.module');
var help_module_1 = require('./help/help.module');
var welcome_module_1 = require('./welcome/welcome.module');
var zip_module_1 = require('./zip/zip.module');
var disclaimer_module_1 = require('./disclaimer/disclaimer.module');
var vehicle_module_1 = require('./vehicle/vehicle.module');
var damage_module_1 = require('./damage/damage.module');
var photo_module_1 = require('./photo/photo.module');
var estimate_module_1 = require('./estimate/estimate.module');
var next_module_1 = require('./next/next.module');
var more_module_1 = require('./more/more.module');
var shared_module_1 = require('./shared/shared.module');
var vehicle_model_module_1 = require('./vehicle_model/vehicle_model.module');
var get_vehicle_module_1 = require('./get_vehicle/get_vehicle.module');
var identify_module_1 = require('./identify/identify.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes, { useHash: true }),
                about_module_1.AboutModule,
                home_module_1.HomeModule,
                help_module_1.HelpModule,
                zip_module_1.ZipModule,
                disclaimer_module_1.DisclaimerModule,
                vehicle_module_1.VehicleModule,
                damage_module_1.DamageModule,
                photo_module_1.PhotoModule,
                estimate_module_1.EstimateModule,
                next_module_1.NextModule,
                welcome_module_1.WelcomeModule,
                more_module_1.MoreModule,
                vehicle_model_module_1.VehicleModelModule,
                get_vehicle_module_1.GetVehicleModule,
                identify_module_1.IdentifyModule,
                shared_module_1.SharedModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFDb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsaUNBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFDakUsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELDhCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELDJCQUFxQyxjQUFjLENBQUMsQ0FBQTtBQUVwRCw2QkFBd0Msc0JBQXNCLENBQUMsQ0FBQTtBQUMvRCw0QkFBd0Msb0JBQW9CLENBQUMsQ0FBQTtBQUM3RCw0QkFBd0Msb0JBQW9CLENBQUMsQ0FBQTtBQUM3RCwrQkFBd0MsMEJBQTBCLENBQUMsQ0FBQTtBQUNuRSwyQkFBd0Msa0JBQWtCLENBQUMsQ0FBQTtBQUMzRCxrQ0FBd0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RSwrQkFBd0MsMEJBQTBCLENBQUMsQ0FBQTtBQUNuRSw4QkFBd0Msd0JBQXdCLENBQUMsQ0FBQTtBQUNqRSw2QkFBd0Msc0JBQXNCLENBQUMsQ0FBQTtBQUMvRCxnQ0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw0QkFBd0Msb0JBQW9CLENBQUMsQ0FBQTtBQUM3RCw0QkFBd0Msb0JBQW9CLENBQUMsQ0FBQTtBQUM3RCw4QkFBd0Msd0JBQXdCLENBQUMsQ0FBQTtBQUNqRSxxQ0FBd0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMvRSxtQ0FBd0Msa0NBQWtDLENBQUMsQ0FBQTtBQUMzRSxnQ0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQStCckU7SUFBQTtJQUF5QixDQUFDO0lBN0IxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLHFCQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7Z0JBQzdDLDBCQUFXO2dCQUNYLHdCQUFVO2dCQUNWLHdCQUFVO2dCQUNWLHNCQUFTO2dCQUNULG9DQUFnQjtnQkFDaEIsOEJBQWE7Z0JBQ2IsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2Qsd0JBQVU7Z0JBQ1YsOEJBQWE7Z0JBQ2Isd0JBQVU7Z0JBQ1YseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLDRCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakMsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLFxuXHQgICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICAgICAgICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gICAgICAgICAgICAgICBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBBYm91dE1vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJy4vYWJvdXQvYWJvdXQubW9kdWxlJztcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSAgICAgICAgICAgICAgZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IEhlbHBNb2R1bGUgfSAgICAgICAgICAgICAgZnJvbSAnLi9oZWxwL2hlbHAubW9kdWxlJztcbmltcG9ydCB7IFdlbGNvbWVNb2R1bGUgfSAgICAgICAgICAgZnJvbSAnLi93ZWxjb21lL3dlbGNvbWUubW9kdWxlJztcbmltcG9ydCB7IFppcE1vZHVsZSB9ICAgICAgICAgICAgICAgZnJvbSAnLi96aXAvemlwLm1vZHVsZSc7XG5pbXBvcnQgeyBEaXNjbGFpbWVyTW9kdWxlIH0gICAgICAgIGZyb20gJy4vZGlzY2xhaW1lci9kaXNjbGFpbWVyLm1vZHVsZSc7XG5pbXBvcnQgeyBWZWhpY2xlTW9kdWxlIH0gICAgICAgICAgIGZyb20gJy4vdmVoaWNsZS92ZWhpY2xlLm1vZHVsZSc7XG5pbXBvcnQgeyBEYW1hZ2VNb2R1bGUgfSAgICAgICAgICAgIGZyb20gJy4vZGFtYWdlL2RhbWFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGhvdG9Nb2R1bGUgfSAgICAgICAgICAgICBmcm9tICcuL3Bob3RvL3Bob3RvLm1vZHVsZSc7XG5pbXBvcnQgeyBFc3RpbWF0ZU1vZHVsZSB9ICAgICAgICAgIGZyb20gJy4vZXN0aW1hdGUvZXN0aW1hdGUubW9kdWxlJztcbmltcG9ydCB7IE5leHRNb2R1bGUgfSAgICAgICAgICAgICAgZnJvbSAnLi9uZXh0L25leHQubW9kdWxlJztcbmltcG9ydCB7IE1vcmVNb2R1bGUgfSAgICAgICAgICAgICAgZnJvbSAnLi9tb3JlL21vcmUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9ICAgICAgICAgICAgZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBWZWhpY2xlTW9kZWxNb2R1bGUgfSAgICAgIGZyb20gJy4vdmVoaWNsZV9tb2RlbC92ZWhpY2xlX21vZGVsLm1vZHVsZSc7XG5pbXBvcnQgeyBHZXRWZWhpY2xlTW9kdWxlIH0gICAgICAgIGZyb20gJy4vZ2V0X3ZlaGljbGUvZ2V0X3ZlaGljbGUubW9kdWxlJztcbmltcG9ydCB7IElkZW50aWZ5TW9kdWxlIH0gICAgICAgICAgZnJvbSAnLi9pZGVudGlmeS9pZGVudGlmeS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHt1c2VIYXNoOiB0cnVlfSksXG4gICAgICAgICAgICBBYm91dE1vZHVsZSxcbiAgICAgICAgICAgIEhvbWVNb2R1bGUsXG4gICAgICAgICAgICBIZWxwTW9kdWxlLFxuICAgICAgICAgICAgWmlwTW9kdWxlLFxuICAgICAgICAgICAgRGlzY2xhaW1lck1vZHVsZSxcbiAgICAgICAgICAgIFZlaGljbGVNb2R1bGUsXG4gICAgICAgICAgICBEYW1hZ2VNb2R1bGUsXG4gICAgICAgICAgICBQaG90b01vZHVsZSxcbiAgICAgICAgICAgIEVzdGltYXRlTW9kdWxlLFxuICAgICAgICAgICAgTmV4dE1vZHVsZSxcbiAgICAgICAgICAgIFdlbGNvbWVNb2R1bGUsXG4gICAgICAgICAgICBNb3JlTW9kdWxlLFxuICAgICAgICAgICAgVmVoaWNsZU1vZGVsTW9kdWxlLFxuICAgICAgICAgICAgR2V0VmVoaWNsZU1vZHVsZSxcbiAgICAgICAgICAgIElkZW50aWZ5TW9kdWxlLFxuICAgICAgICAgICAgU2hhcmVkTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
