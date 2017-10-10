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
var router_1 = require('@angular/router');
var angular2_modal_1 = require('angular2-modal');
var DisclaimerWindowModalComponent = (function () {
    function DisclaimerWindowModalComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.context = dialog.context;
        this.disclaimerData = this.context.disclaimerData;
    }
    DisclaimerWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DisclaimerWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    DisclaimerWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    DisclaimerWindowModalComponent.prototype.gotoHome = function () {
        this.dialog.close();
        this.router.navigate(['/']);
    };
    DisclaimerWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'disclaimer.modal.component.html',
            styleUrls: ['disclaimer.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, router_1.Router])
    ], DisclaimerWindowModalComponent);
    return DisclaimerWindowModalComponent;
}());
exports.DisclaimerWindowModalComponent = DisclaimerWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lc3RpbWF0ZS9tb2RhbC9kaXNjbGFpbWVyLm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQ1EsZUFBZSxDQUFDLENBQUE7QUFDeEIsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQsK0JBQTBDLGdCQUFnQixDQUFDLENBQUE7QUFVM0Q7SUFJSSx3Q0FBbUIsTUFBeUMsRUFDaEQsTUFBYztRQURQLFdBQU0sR0FBTixNQUFNLENBQW1DO1FBQ2hELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDdEQsQ0FBQztJQUVELHNEQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxvREFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsaURBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlEQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBL0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQ2hELENBQUM7O3NDQUFBO0lBMkJGLHFDQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxzQ0FBOEIsaUNBMEIxQyxDQUFBIiwiZmlsZSI6ImFwcC9lc3RpbWF0ZS9tb2RhbC9kaXNjbGFpbWVyLm1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFxufSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERpYWxvZ1JlZiwgTW9kYWxDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbCc7XG5pbXBvcnQgeyBEaXNjbGFpbWVyTW9kYWxDb250ZW50IH0gICAgZnJvbSAnLi9kaXNjbGFpbWVyLW1vZGFsLWNvbnRlbnQnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkaXNjbGFpbWVyLm1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZGlzY2xhaW1lci5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlzY2xhaW1lcldpbmRvd01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgTW9kYWxDb21wb25lbnQ8RGlzY2xhaW1lck1vZGFsQ29udGVudD4ge1xuICAgIGNvbnRleHQ6IERpc2NsYWltZXJNb2RhbENvbnRlbnQ7XG4gICAgZGlzY2xhaW1lckRhdGE6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZjxEaXNjbGFpbWVyTW9kYWxDb250ZW50PixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBkaWFsb2cuY29udGV4dDtcbiAgICAgICAgdGhpcy5kaXNjbGFpbWVyRGF0YSA9IHRoaXMuY29udGV4dC5kaXNjbGFpbWVyRGF0YTtcbiAgICB9XG5cbiAgICBiZWZvcmVEaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYmVmb3JlQ2xvc2UoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBnb3RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH1cbn1cbiJdfQ==
