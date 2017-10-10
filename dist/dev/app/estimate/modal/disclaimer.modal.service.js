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
var disclaimer_modal_component_1 = require('./disclaimer.modal.component');
var angular2_modal_1 = require('angular2-modal');
var DisclaimerModelService = (function () {
    function DisclaimerModelService(modal) {
        this.modal = modal;
    }
    DisclaimerModelService.prototype.openDialog = function (disclaimerData, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(disclaimer_modal_component_1.DisclaimerWindowModalComponent, angular2_modal_1.overlayConfigFactory({ disclaimerData: disclaimerData }, bootstrap_1.BSModalContext));
    };
    ;
    DisclaimerModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], DisclaimerModelService);
    return DisclaimerModelService;
}());
exports.DisclaimerModelService = DisclaimerModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lc3RpbWF0ZS9tb2RhbC9kaXNjbGFpbWVyLm1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCwwQkFBc0Msa0NBQWtDLENBQUMsQ0FBQTtBQUN6RSwyQ0FBK0MsOEJBQThCLENBQUMsQ0FBQTtBQUM5RSwrQkFBcUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUd0RDtJQUNJLGdDQUFtQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFFbkMsMkNBQVUsR0FBVixVQUFXLGNBQXNCLEVBQUUsYUFBOEI7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyREFBOEIsRUFBRSxxQ0FBb0IsQ0FBQyxFQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUMsRUFBRSwwQkFBYyxDQUFDLENBQUMsQ0FBQztJQUNuSSxDQUFDOztJQVBMO1FBQUMsaUJBQVUsRUFBRTs7OEJBQUE7SUFRYiw2QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksOEJBQXNCLHlCQU9sQyxDQUFBIiwiZmlsZSI6ImFwcC9lc3RpbWF0ZS9tb2RhbC9kaXNjbGFpbWVyLm1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbCwgQlNNb2RhbENvbnRleHQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBEaXNjbGFpbWVyV2luZG93TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2Rpc2NsYWltZXIubW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IG92ZXJsYXlDb25maWdGYWN0b3J5IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlzY2xhaW1lck1vZGVsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGFsOiBNb2RhbCkge31cblxuICAgIG9wZW5EaWFsb2coZGlzY2xhaW1lckRhdGE6IHN0cmluZywgdmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgXHR0aGlzLm1vZGFsLm92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5vcGVuKERpc2NsYWltZXJXaW5kb3dNb2RhbENvbXBvbmVudCwgb3ZlcmxheUNvbmZpZ0ZhY3Rvcnkoe2Rpc2NsYWltZXJEYXRhOiBkaXNjbGFpbWVyRGF0YX0sIEJTTW9kYWxDb250ZXh0KSk7XG4gICAgfTtcbn1cbiJdfQ==
