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
var show_img_modal_component_1 = require('./show.img.modal.component');
var angular2_modal_1 = require('angular2-modal');
var ShowImgModelService = (function () {
    function ShowImgModelService(modal) {
        this.modal = modal;
    }
    ShowImgModelService.prototype.openDialog = function (title, imgURL, postData, viewContainer) {
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(show_img_modal_component_1.ShowImgWindowModalComponent, angular2_modal_1.overlayConfigFactory({
            title: title,
            imgURL: imgURL,
            postData: postData
        }, bootstrap_1.BSModalContext));
    };
    ;
    ShowImgModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [bootstrap_1.Modal])
    ], ShowImgModelService);
    return ShowImgModelService;
}());
exports.ShowImgModelService = ShowImgModelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL3Nob3cvc2hvdy5pbWcubW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELDBCQUFzQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3pFLHlDQUE0Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pFLCtCQUFxQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBR3REO0lBQ0ksNkJBQW1CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQUVuQyx3Q0FBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLE1BQWMsRUFBRSxRQUFnQixFQUFFLGFBQThCO1FBQ3pGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUFHLGFBQWEsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0RBQTJCLEVBQUUscUNBQW9CLENBQUM7WUFDeEUsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ2xCLEVBQUUsMEJBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7SUFYTDtRQUFDLGlCQUFVLEVBQUU7OzJCQUFBO0lBWWIsMEJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLDJCQUFtQixzQkFXL0IsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9tb2RhbC9zaG93L3Nob3cuaW1nLm1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbCwgQlNNb2RhbENvbnRleHQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBTaG93SW1nV2luZG93TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3Nob3cuaW1nLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBvdmVybGF5Q29uZmlnRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNob3dJbWdNb2RlbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogTW9kYWwpIHt9XG5cbiAgICBvcGVuRGlhbG9nKHRpdGxlOiBzdHJpbmcsIGltZ1VSTDogc3RyaW5nLCBwb3N0RGF0YTogT2JqZWN0LCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICBcdHRoaXMubW9kYWwub3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsLm9wZW4oU2hvd0ltZ1dpbmRvd01vZGFsQ29tcG9uZW50LCBvdmVybGF5Q29uZmlnRmFjdG9yeSh7XG4gICAgICAgIFx0dGl0bGU6IHRpdGxlLFxuICAgICAgICBcdGltZ1VSTDogaW1nVVJMLFxuICAgICAgICBcdHBvc3REYXRhOiBwb3N0RGF0YVxuICAgICAgICB9LCBCU01vZGFsQ29udGV4dCkpO1xuICAgIH07XG59XG4iXX0=
