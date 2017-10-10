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
var angular2_modal_1 = require('angular2-modal');
var PlayerWindowModalComponent = (function () {
    function PlayerWindowModalComponent(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
        this.sources = [
            {
                src: 'https://new-api.virtualevaluator.net/explainer.mp4',
                type: 'video/mp4'
            }
        ];
    }
    PlayerWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    PlayerWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    PlayerWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    PlayerWindowModalComponent.prototype.closeModal = function () {
        this.dialog.close();
    };
    PlayerWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'player.modal.component.html',
            styleUrls: ['player.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], PlayerWindowModalComponent);
    return PlayerWindowModalComponent;
}());
exports.PlayerWindowModalComponent = PlayerWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWxjb21lL21vZGFsL3BsYXllci5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUNRLGVBQWUsQ0FBQyxDQUFBO0FBQ3hCLCtCQUEwQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVTNEO0lBSUksb0NBQW1CLE1BQXFDO1FBQXJDLFdBQU0sR0FBTixNQUFNLENBQStCO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1g7Z0JBQ0ksR0FBRyxFQUFFLG9EQUFvRDtnQkFDekQsSUFBSSxFQUFFLFdBQVc7YUFDcEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGtEQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELCtDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFsQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzs7a0NBQUE7SUE4QkYsaUNBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLGtDQUEwQiw2QkE2QnRDLENBQUEiLCJmaWxlIjoiYXBwL3dlbGNvbWUvbW9kYWwvcGxheWVyLm1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFxufSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dSZWYsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xuaW1wb3J0IHsgUGxheWVyTW9kYWxDb250ZW50IH0gICAgZnJvbSAnLi9wbGF5ZXItbW9kYWwtY29udGVudCc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdtb2RhbC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3BsYXllci5tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3BsYXllci5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyV2luZG93TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBNb2RhbENvbXBvbmVudDxQbGF5ZXJNb2RhbENvbnRlbnQ+IHtcbiAgICBjb250ZXh0OiBQbGF5ZXJNb2RhbENvbnRlbnQ7XG4gICAgc291cmNlczogQXJyYXk8T2JqZWN0PjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZjxQbGF5ZXJNb2RhbENvbnRlbnQ+KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRpYWxvZy5jb250ZXh0O1xuICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9uZXctYXBpLnZpcnR1YWxldmFsdWF0b3IubmV0L2V4cGxhaW5lci5tcDQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlby9tcDQnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYmVmb3JlRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJlZm9yZUNsb3NlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICB9XG59XG4iXX0=
