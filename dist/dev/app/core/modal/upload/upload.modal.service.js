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
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var upload_modal_component_1 = require('./upload.modal.component');
var angular2_modal_1 = require('angular2-modal');
var UploadModelService = (function () {
    function UploadModelService(modal) {
        this.modal = modal;
    }
    UploadModelService.prototype.openDialog = function (imgLIST, index, postData, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(upload_modal_component_1.UploadWindowModalComponent, angular2_modal_1.overlayConfigFactory({ imgLIST: imgLIST, index: index, postData: postData }, bootstrap_1.BSModalContext));
    };
    ;
    UploadModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], UploadModelService);
    return UploadModelService;
}());
exports.UploadModelService = UploadModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL3VwbG9hZC91cGxvYWQubW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELDBCQUFzQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3pFLHVDQUEyQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RFLCtCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBR3REO0lBQ0ksNEJBQW1CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQUVuQyx1Q0FBVSxHQUFWLFVBQVcsT0FBaUIsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxhQUE4QjtRQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1EQUEwQixFQUFFLHFDQUFvQixDQUN0RSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLEVBQUUsMEJBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7SUFSTDtRQUFDLGlCQUFVLEVBQUU7OzBCQUFBO0lBU2IseUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDBCQUFrQixxQkFROUIsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9tb2RhbC91cGxvYWQvdXBsb2FkLm1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbCwgQlNNb2RhbENvbnRleHQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBVcGxvYWRXaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBvdmVybGF5Q29uZmlnRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwbG9hZE1vZGVsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGFsOiBNb2RhbCkge31cblxuICAgIG9wZW5EaWFsb2coaW1nTElTVDogT2JqZWN0W10sIGluZGV4OiBudW1iZXIsIHBvc3REYXRhOiBPYmplY3QsIHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZikge1xuICAgIFx0dGhpcy5tb2RhbC5vdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWwub3BlbihVcGxvYWRXaW5kb3dNb2RhbENvbXBvbmVudCwgb3ZlcmxheUNvbmZpZ0ZhY3RvcnkoXG4gICAgICAgIFx0eyBpbWdMSVNUOiBpbWdMSVNULCBpbmRleDogaW5kZXgsIHBvc3REYXRhOiBwb3N0RGF0YX0sIEJTTW9kYWxDb250ZXh0KSk7XG4gICAgfTtcbn1cbiJdfQ==
