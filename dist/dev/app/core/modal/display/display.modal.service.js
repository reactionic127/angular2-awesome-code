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
var display_modal_component_1 = require('./display.modal.component');
var angular2_modal_1 = require('angular2-modal');
var DisplayModelService = (function () {
    function DisplayModelService(modal) {
        this.modal = modal;
    }
    DisplayModelService.prototype.openDialog = function (displayData, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(display_modal_component_1.DisplayWindowModalComponent, angular2_modal_1.overlayConfigFactory({ displayData: displayData }, bootstrap_1.BSModalContext));
    };
    ;
    DisplayModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], DisplayModelService);
    return DisplayModelService;
}());
exports.DisplayModelService = DisplayModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL2Rpc3BsYXkvZGlzcGxheS5tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsMEJBQXNDLGtDQUFrQyxDQUFDLENBQUE7QUFDekUsd0NBQTRDLDJCQUEyQixDQUFDLENBQUE7QUFDeEUsK0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFHdEQ7SUFDSSw2QkFBbUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRW5DLHdDQUFVLEdBQVYsVUFBVyxXQUFtQixFQUFFLGFBQThCO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUFHLGFBQWEsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMscURBQTJCLEVBQUUscUNBQW9CLENBQUMsRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFDLEVBQUUsMEJBQWMsQ0FBQyxDQUFDLENBQUM7SUFDMUgsQ0FBQzs7SUFQTDtRQUFDLGlCQUFVLEVBQUU7OzJCQUFBO0lBUWIsMEJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDJCQUFtQixzQkFPL0IsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9tb2RhbC9kaXNwbGF5L2Rpc3BsYXkubW9kYWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsLCBCU01vZGFsQ29udGV4dCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcbmltcG9ydCB7IERpc3BsYXlXaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZGlzcGxheS5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgb3ZlcmxheUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICdhbmd1bGFyMi1tb2RhbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaXNwbGF5TW9kZWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kYWw6IE1vZGFsKSB7fVxuXG4gICAgb3BlbkRpYWxvZyhkaXNwbGF5RGF0YTogc3RyaW5nLCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICBcdHRoaXMubW9kYWwub3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsLm9wZW4oRGlzcGxheVdpbmRvd01vZGFsQ29tcG9uZW50LCBvdmVybGF5Q29uZmlnRmFjdG9yeSh7ZGlzcGxheURhdGE6IGRpc3BsYXlEYXRhfSwgQlNNb2RhbENvbnRleHQpKTtcbiAgICB9O1xufVxuIl19
