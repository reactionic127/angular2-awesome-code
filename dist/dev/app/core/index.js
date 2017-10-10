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
var data_service_1 = require('./data.service');
var store_service_1 = require('./store.service');
var navbar_service_1 = require('./navbar.service');
var event_service_1 = require('./event.service');
var display_modal_component_1 = require('./modal/display/display.modal.component');
var capture_modal_component_1 = require('./modal/capture/capture.modal.component');
var upload_modal_component_1 = require('./modal/upload/upload.modal.component');
var show_img_modal_component_1 = require('./modal/show/show.img.modal.component');
var display_modal_service_1 = require('./modal/display/display.modal.service');
var capture_modal_service_1 = require('./modal/capture/capture.modal.service');
var upload_modal_service_1 = require('./modal/upload/upload.modal.service');
var show_img_modal_service_1 = require('./modal/show/show.img.modal.service');
var ng2_file_upload_1 = require('ng2-file-upload');
var ServiceModule = (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_file_upload_1.FileUploadModule
            ],
            providers: [
                data_service_1.DataService,
                store_service_1.StoreService,
                navbar_service_1.NavbarService,
                event_service_1.EventService,
                display_modal_service_1.DisplayModelService,
                capture_modal_service_1.CaptureModelService,
                upload_modal_service_1.UploadModelService,
                show_img_modal_service_1.ShowImgModelService
            ],
            declarations: [
                display_modal_component_1.DisplayWindowModalComponent,
                capture_modal_component_1.CaptureWindowModalComponent,
                upload_modal_component_1.UploadWindowModalComponent,
                show_img_modal_component_1.ShowImgWindowModalComponent
            ],
            entryComponents: [
                display_modal_component_1.DisplayWindowModalComponent,
                capture_modal_component_1.CaptureWindowModalComponent,
                upload_modal_component_1.UploadWindowModalComponent,
                show_img_modal_component_1.ShowImgWindowModalComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceModule);
    return ServiceModule;
}());
exports.ServiceModule = ServiceModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsdUJBQW9DLGlCQUFpQixDQUFDLENBQUE7QUFDdEQsNkJBQW9DLGdCQUFnQixDQUFDLENBQUE7QUFDckQsOEJBQW9DLGlCQUFpQixDQUFDLENBQUE7QUFDdEQsK0JBQW9DLGtCQUFrQixDQUFDLENBQUE7QUFDdkQsOEJBQW9DLGlCQUFpQixDQUFDLENBQUE7QUFDdEQsd0NBQTRDLHlDQUF5QyxDQUFDLENBQUE7QUFDdEYsd0NBQTRDLHlDQUF5QyxDQUFDLENBQUE7QUFDdEYsdUNBQTRDLHVDQUF1QyxDQUFDLENBQUE7QUFDcEYseUNBQTRDLHVDQUF1QyxDQUFDLENBQUE7QUFFcEYsc0NBQW9DLHVDQUF1QyxDQUFDLENBQUE7QUFDNUUsc0NBQW9DLHVDQUF1QyxDQUFDLENBQUE7QUFDNUUscUNBQW9DLHFDQUFxQyxDQUFDLENBQUE7QUFDMUUsdUNBQW9DLHFDQUFxQyxDQUFDLENBQUE7QUFFMUUsZ0NBQWlDLGlCQUFpQixDQUFDLENBQUE7QUErQm5EO0lBQUE7SUFBNkIsQ0FBQztJQTdCOUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osa0NBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDBCQUFXO2dCQUNYLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLDRCQUFZO2dCQUNaLDJDQUFtQjtnQkFDbkIsMkNBQW1CO2dCQUNuQix5Q0FBa0I7Z0JBQ2xCLDRDQUFtQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDYixxREFBMkI7Z0JBQzFCLHFEQUEyQjtnQkFDM0IsbURBQTBCO2dCQUMxQixzREFBMkI7YUFDNUI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2hCLHFEQUEyQjtnQkFDMUIscURBQTJCO2dCQUMzQixtREFBMEI7Z0JBQzFCLHNEQUEyQjthQUM1QjtTQUNKLENBQUM7O3FCQUFBO0lBRTJCLG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixxQkFBYSxnQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gICAgICAgIGZyb20gJy4vc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gICAgICAgZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSAgICAgICAgZnJvbSAnLi9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IERpc3BsYXlXaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvZGlzcGxheS9kaXNwbGF5Lm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXB0dXJlV2luZG93TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL2NhcHR1cmUvY2FwdHVyZS5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkV2luZG93TW9kYWxDb21wb25lbnQgfSAgZnJvbSAnLi9tb2RhbC91cGxvYWQvdXBsb2FkLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaG93SW1nV2luZG93TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL3Nob3cvc2hvdy5pbWcubW9kYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzcGxheU1vZGVsU2VydmljZSB9IGZyb20gJy4vbW9kYWwvZGlzcGxheS9kaXNwbGF5Lm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FwdHVyZU1vZGVsU2VydmljZSB9IGZyb20gJy4vbW9kYWwvY2FwdHVyZS9jYXB0dXJlLm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkTW9kZWxTZXJ2aWNlIH0gIGZyb20gJy4vbW9kYWwvdXBsb2FkL3VwbG9hZC5tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNob3dJbWdNb2RlbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsL3Nob3cvc2hvdy5pbWcubW9kYWwuc2VydmljZSc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZpbGVVcGxvYWRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICBTdG9yZVNlcnZpY2UsXG4gICAgICBOYXZiYXJTZXJ2aWNlLFxuICAgICAgRXZlbnRTZXJ2aWNlLFxuICAgICAgRGlzcGxheU1vZGVsU2VydmljZSxcbiAgICAgIENhcHR1cmVNb2RlbFNlcnZpY2UsXG4gICAgICBVcGxvYWRNb2RlbFNlcnZpY2UsXG4gICAgICBTaG93SW1nTW9kZWxTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICBcdERpc3BsYXlXaW5kb3dNb2RhbENvbXBvbmVudCxcbiAgICAgIENhcHR1cmVXaW5kb3dNb2RhbENvbXBvbmVudCxcbiAgICAgIFVwbG9hZFdpbmRvd01vZGFsQ29tcG9uZW50LFxuICAgICAgU2hvd0ltZ1dpbmRvd01vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBcdERpc3BsYXlXaW5kb3dNb2RhbENvbXBvbmVudCxcbiAgICAgIENhcHR1cmVXaW5kb3dNb2RhbENvbXBvbmVudCxcbiAgICAgIFVwbG9hZFdpbmRvd01vZGFsQ29tcG9uZW50LFxuICAgICAgU2hvd0ltZ1dpbmRvd01vZGFsQ29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VNb2R1bGUgeyB9XG4iXX0=
