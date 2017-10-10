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
var player_modal_component_1 = require('./player.modal.component');
var angular2_modal_1 = require('angular2-modal');
var PlayerModelService = (function () {
    function PlayerModelService(modal) {
        this.modal = modal;
    }
    PlayerModelService.prototype.openDialog = function (imgURL, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(player_modal_component_1.PlayerWindowModalComponent, angular2_modal_1.overlayConfigFactory({ imgURL: imgURL }, bootstrap_1.BSModalContext));
    };
    ;
    PlayerModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], PlayerModelService);
    return PlayerModelService;
}());
exports.PlayerModelService = PlayerModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWxjb21lL21vZGFsL3BsYXllci5tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsMEJBQXNDLGtDQUFrQyxDQUFDLENBQUE7QUFDekUsdUNBQTJDLDBCQUEwQixDQUFDLENBQUE7QUFDdEUsK0JBQXFDLGdCQUFnQixDQUFDLENBQUE7QUFHdEQ7SUFDSSw0QkFBbUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRW5DLHVDQUFVLEdBQVYsVUFBVyxNQUFjLEVBQUUsYUFBOEI7UUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBMEIsRUFBRSxxQ0FBb0IsQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsRUFBRSwwQkFBYyxDQUFDLENBQUMsQ0FBQztJQUMvRyxDQUFDOztJQVBMO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUFRYix5QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksMEJBQWtCLHFCQU85QixDQUFBIiwiZmlsZSI6ImFwcC93ZWxjb21lL21vZGFsL3BsYXllci5tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWwsIEJTTW9kYWxDb250ZXh0IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXAnO1xuaW1wb3J0IHsgUGxheWVyV2luZG93TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3BsYXllci5tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgb3ZlcmxheUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICdhbmd1bGFyMi1tb2RhbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbGF5ZXJNb2RlbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogTW9kYWwpIHt9XG5cbiAgICBvcGVuRGlhbG9nKGltZ1VSTDogc3RyaW5nLCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICBcdHRoaXMubW9kYWwub3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsLm9wZW4oUGxheWVyV2luZG93TW9kYWxDb21wb25lbnQsIG92ZXJsYXlDb25maWdGYWN0b3J5KHtpbWdVUkw6IGltZ1VSTH0sIEJTTW9kYWxDb250ZXh0KSk7XG4gICAgfTtcbn1cbiJdfQ==
