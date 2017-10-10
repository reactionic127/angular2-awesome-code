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
var capture_modal_component_1 = require('./capture.modal.component');
var angular2_modal_1 = require('angular2-modal');
var CaptureModelService = (function () {
    function CaptureModelService(modal) {
        this.modal = modal;
    }
    CaptureModelService.prototype.openDialog = function (uploader, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(capture_modal_component_1.CaptureWindowModalComponent, angular2_modal_1.overlayConfigFactory({ uploader: uploader }, bootstrap_1.BSModalContext));
    };
    ;
    CaptureModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], CaptureModelService);
    return CaptureModelService;
}());
exports.CaptureModelService = CaptureModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL2NhcHR1cmUvY2FwdHVyZS5tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsMEJBQXNDLGtDQUFrQyxDQUFDLENBQUE7QUFDekUsd0NBQTRDLDJCQUEyQixDQUFDLENBQUE7QUFDeEUsK0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFHdEQ7SUFDSSw2QkFBbUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRW5DLHdDQUFVLEdBQVYsVUFBVyxRQUFhLEVBQUUsYUFBOEI7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxREFBMkIsRUFBRSxxQ0FBb0IsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsRUFBRSwwQkFBYyxDQUFDLENBQUMsQ0FBQztJQUNwSCxDQUFDOztJQVBMO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFRYiwwQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksMkJBQW1CLHNCQU8vQixDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL21vZGFsL2NhcHR1cmUvY2FwdHVyZS5tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWwsIEJTTW9kYWxDb250ZXh0IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXAnO1xuaW1wb3J0IHsgQ2FwdHVyZVdpbmRvd01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXB0dXJlLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBvdmVybGF5Q29uZmlnRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcHR1cmVNb2RlbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogTW9kYWwpIHt9XG5cbiAgICBvcGVuRGlhbG9nKHVwbG9hZGVyOiBhbnksIHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZikge1xuICAgIFx0dGhpcy5tb2RhbC5vdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWwub3BlbihDYXB0dXJlV2luZG93TW9kYWxDb21wb25lbnQsIG92ZXJsYXlDb25maWdGYWN0b3J5KHt1cGxvYWRlcjogdXBsb2FkZXJ9LCBCU01vZGFsQ29udGV4dCkpO1xuICAgIH07XG59XG4iXX0=
