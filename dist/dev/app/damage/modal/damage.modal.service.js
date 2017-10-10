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
var damage_modal_component_1 = require('./damage.modal.component');
var DamageModelService = (function () {
    function DamageModelService(modal) {
        this.modal = modal;
    }
    DamageModelService.prototype.openDialog = function (autoPartID, carMap, viewContainer) {
        var _this = this;
        this.bClose = false;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(damage_modal_component_1.DamageWindowModalComponent, angular2_modal_1.overlayConfigFactory({ autoPartID: autoPartID,
            carMap: carMap }, bootstrap_1.BSModalContext))
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
    DamageModelService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.dialog.overlay.defaultViewContainer) {
                this.dialog.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
            this.bClose = true;
        }
    };
    DamageModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], DamageModelService);
    return DamageModelService;
}());
exports.DamageModelService = DamageModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvbW9kYWwvZGFtYWdlLm1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCwwQkFBc0Msa0NBQWtDLENBQUMsQ0FBQTtBQUN6RSwrQkFBZ0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRSx1Q0FBMkMsMEJBQTBCLENBQUMsQ0FBQTtBQUd0RTtJQUlJLDRCQUFtQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUMvQixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWtCLEVBQUUsTUFBVSxFQUFFLGFBQStCO1FBQTFFLGlCQWlCQztRQWhCQSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1EQUEwQixFQUFHLHFDQUFvQixDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVU7WUFDaEcsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUFFLDBCQUFjLENBQUMsQ0FBQzthQUNoQyxJQUFJLENBQUMsVUFBQyxNQUFpQztZQUM3QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNGLENBQUM7O0lBRUQseUNBQVksR0FBWjtRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEQsQ0FBQztZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO0lBcENGO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUFxQ2IseUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLDBCQUFrQixxQkFvQzlCLENBQUEiLCJmaWxlIjoiYXBwL2RhbWFnZS9tb2RhbC9kYW1hZ2UubW9kYWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsLCBCU01vZGFsQ29udGV4dCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcbmltcG9ydCB7IG92ZXJsYXlDb25maWdGYWN0b3J5LCBEaWFsb2dSZWYgfSBmcm9tICdhbmd1bGFyMi1tb2RhbCc7XG5pbXBvcnQgeyBEYW1hZ2VXaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZGFtYWdlLm1vZGFsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYW1hZ2VNb2RlbFNlcnZpY2Uge1xuXHRkaWFsb2c6IERpYWxvZ1JlZjxCU01vZGFsQ29udGV4dD47XG5cdGJDbG9zZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogTW9kYWwpIHtcbiAgICB9XG5cbiAgICBvcGVuRGlhbG9nKGF1dG9QYXJ0SUQ6IG51bWJlciwgY2FyTWFwOmFueSwgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIFx0dGhpcy5iQ2xvc2UgPSBmYWxzZTtcbiAgICBcdHRoaXMubW9kYWwub3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsLm9wZW4oRGFtYWdlV2luZG93TW9kYWxDb21wb25lbnQsICBvdmVybGF5Q29uZmlnRmFjdG9yeSh7IGF1dG9QYXJ0SUQ6IGF1dG9QYXJ0SUQsXG4gICAgICAgIFx0Y2FyTWFwOiBjYXJNYXB9LCBCU01vZGFsQ29udGV4dCkpXG4gICAgICAgIFx0LnRoZW4oKGRpYWxvZzogRGlhbG9nUmVmPEJTTW9kYWxDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmRpYWxvZyA9IGRpYWxvZztcblx0XHRcdFx0cmV0dXJuIGRpYWxvZy5yZXN1bHQ7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnY2xvc2VkJyk7XG5cdFx0XHRcdHRoaXMuZGVzdHJveU1vZGFsKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Rpc21pc3NlZCcpO1xuXHRcdFx0XHR0aGlzLmRlc3Ryb3lNb2RhbCgpO1xuXHRcdFx0fSk7XG4gICAgfTtcblxuICAgIGRlc3Ryb3lNb2RhbCAoKSB7XG5cdFx0aWYgKHRoaXMuZGlhbG9nICYmIHRoaXMuZGlhbG9nLm92ZXJsYXkpIHtcblx0XHRcdGlmKHRoaXMuZGlhbG9nLm92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIpIHtcblx0XHRcdFx0dGhpcy5kaWFsb2cub3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lci5jbGVhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRpYWxvZyA9IG51bGw7XG5cdFx0XHR0aGlzLmJDbG9zZSA9IHRydWU7XG5cdFx0fVxuXHR9XG59XG4iXX0=
