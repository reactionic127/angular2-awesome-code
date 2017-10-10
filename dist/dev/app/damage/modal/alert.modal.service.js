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
var alert_modal_component_1 = require('./alert.modal.component');
var angular2_modal_1 = require('angular2-modal');
var AlertModelService = (function () {
    function AlertModelService(modal) {
        this.modal = modal;
    }
    AlertModelService.prototype.openDialog = function (nType, alertData, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        this.modal.open(alert_modal_component_1.AlertWindowModalComponent, angular2_modal_1.overlayConfigFactory({ nType: nType, alertData: alertData }, bootstrap_1.BSModalContext))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog.result;
        })
            .then(function () {
            console.log('closed');
            _this.destroyModal();
        })
            .catch(function () {
            console.log('dismissed');
            _this.destroyModal();
        });
    };
    ;
    AlertModelService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.dialog.overlay.defaultViewContainer) {
                this.dialog.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
        }
    };
    AlertModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], AlertModelService);
    return AlertModelService;
}());
exports.AlertModelService = AlertModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvbW9kYWwvYWxlcnQubW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELDBCQUFzQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3pFLHNDQUEwQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BFLCtCQUFnRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBR2pFO0lBR0ksMkJBQW1CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQUVuQyxzQ0FBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLFNBQWMsRUFBRSxhQUE4QjtRQUF4RSxpQkFnQkM7UUFmQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7UUFFckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaURBQXlCLEVBQUUscUNBQW9CLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSwwQkFBYyxDQUFDLENBQUM7YUFDN0gsSUFBSSxDQUFDLFVBQUMsTUFBaUM7WUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDRCxDQUFDOztJQUVKLHdDQUFZLEdBQVo7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xELENBQUM7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztJQWhDRjtRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBaUNiLHdCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSx5QkFBaUIsb0JBZ0M3QixDQUFBIiwiZmlsZSI6ImFwcC9kYW1hZ2UvbW9kYWwvYWxlcnQubW9kYWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsLCBCU01vZGFsQ29udGV4dCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcbmltcG9ydCB7IEFsZXJ0V2luZG93TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0Lm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBvdmVybGF5Q29uZmlnRmFjdG9yeSwgRGlhbG9nUmVmIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRNb2RlbFNlcnZpY2Uge1xuXHRkaWFsb2c6IERpYWxvZ1JlZjxCU01vZGFsQ29udGV4dD47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kYWw6IE1vZGFsKSB7fVxuXG4gICAgb3BlbkRpYWxvZyhuVHlwZTogbnVtYmVyLCBhbGVydERhdGE6IGFueSwgdmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgXHR0aGlzLm1vZGFsLm92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyO1xuXG4gICAgICAgIHRoaXMubW9kYWwub3BlbihBbGVydFdpbmRvd01vZGFsQ29tcG9uZW50LCBvdmVybGF5Q29uZmlnRmFjdG9yeSh7IG5UeXBlOiBuVHlwZSwgYWxlcnREYXRhOiBhbGVydERhdGEgfSwgQlNNb2RhbENvbnRleHQpKVxuXHRcdC50aGVuKChkaWFsb2c6IERpYWxvZ1JlZjxCU01vZGFsQ29udGV4dD4pID0+IHtcblx0XHRcdHRoaXMuZGlhbG9nID0gZGlhbG9nO1xuXHRcdFx0cmV0dXJuIGRpYWxvZy5yZXN1bHQ7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2xvc2VkJyk7XG5cdFx0XHR0aGlzLmRlc3Ryb3lNb2RhbCgpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKCgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdkaXNtaXNzZWQnKTtcblx0XHRcdHRoaXMuZGVzdHJveU1vZGFsKCk7XG5cdFx0fSk7XG4gICAgfTtcblxuXHRkZXN0cm95TW9kYWwgKCkge1xuXHRcdGlmICh0aGlzLmRpYWxvZyAmJiB0aGlzLmRpYWxvZy5vdmVybGF5KSB7XG5cdFx0XHRpZih0aGlzLmRpYWxvZy5vdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyKSB7XG5cdFx0XHRcdHRoaXMuZGlhbG9nLm92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIuY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5kaWFsb2cgPSBudWxsO1xuXHRcdH1cblx0fVxufVxuIl19
