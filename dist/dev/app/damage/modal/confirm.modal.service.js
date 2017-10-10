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
var angular2_modal_1 = require('angular2-modal');
var confirm_modal_component_1 = require('./confirm.modal.component');
var ConfirmModelService = (function () {
    function ConfirmModelService(modal) {
        this.modal = modal;
    }
    ConfirmModelService.prototype.openDialog = function (carmapHandler, markId, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(confirm_modal_component_1.ConfirmWindowModalComponent, angular2_modal_1.overlayConfigFactory({ carmapHandler: carmapHandler,
            markId: markId }, bootstrap_1.BSModalContext));
    };
    ;
    ConfirmModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], ConfirmModelService);
    return ConfirmModelService;
}());
exports.ConfirmModelService = ConfirmModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvbW9kYWwvY29uZmlybS5tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsMEJBQXNDLGtDQUFrQyxDQUFDLENBQUE7QUFDekUsK0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFDdEQsd0NBQTRDLDJCQUEyQixDQUFDLENBQUE7QUFHeEU7SUFDSSw2QkFBbUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRW5DLHdDQUFVLEdBQVYsVUFBVyxhQUFrQixFQUFFLE1BQWMsRUFBRSxhQUErQjtRQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFEQUEyQixFQUFHLHFDQUFvQixDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWE7WUFDdkcsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUFFLDBCQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O0lBUkw7UUFBQyxpQkFBVSxFQUFFOzsyQkFBQTtJQVNiLDBCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSwyQkFBbUIsc0JBUS9CLENBQUEiLCJmaWxlIjoiYXBwL2RhbWFnZS9tb2RhbC9jb25maXJtLm1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbCwgQlNNb2RhbENvbnRleHQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBvdmVybGF5Q29uZmlnRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcbmltcG9ydCB7IENvbmZpcm1XaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS5tb2RhbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlybU1vZGVsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGFsOiBNb2RhbCkge31cblxuICAgIG9wZW5EaWFsb2coY2FybWFwSGFuZGxlcjogYW55LCBtYXJrSWQ6IG51bWJlciwgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIFx0dGhpcy5tb2RhbC5vdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcbiAgICBcdHJldHVybiB0aGlzLm1vZGFsLm9wZW4oQ29uZmlybVdpbmRvd01vZGFsQ29tcG9uZW50LCAgb3ZlcmxheUNvbmZpZ0ZhY3RvcnkoeyBjYXJtYXBIYW5kbGVyOiBjYXJtYXBIYW5kbGVyLFxuICAgIFx0XHRtYXJrSWQ6IG1hcmtJZH0sIEJTTW9kYWxDb250ZXh0KSk7XG4gICAgfTtcbn1cbiJdfQ==
