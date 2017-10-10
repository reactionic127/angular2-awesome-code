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
var PhotoComponent = (function () {
    function PhotoComponent(route, router) {
        this.route = route;
        this.router = router;
        this.nextNavigation = false;
        this.isLoading = false;
        this.isNext = false;
    }
    PhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.slugId = params['id'];
        });
    };
    PhotoComponent.prototype.next = function () {
        if (this.isNext) {
            this.router.navigate(['/estimate', this.slugId]);
        }
        else {
            $('#photo_alert').show();
            setTimeout(function () {
                $('#photo_alert').hide();
            }, 3000);
        }
    };
    PhotoComponent.prototype.getData = function (event) {
        this.totoalStep = event.totalStep;
        this.currentStep = event.currentStep;
        this.isLoading = true;
    };
    PhotoComponent.prototype.getStepStatus = function (event) {
        if (event) {
            this.isNext = true;
        }
        else {
            this.isNext = false;
        }
    };
    PhotoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-photo',
            templateUrl: 'photo.component.html',
            styleUrls: ['photo.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waG90by9waG90by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUNnQixlQUFlLENBQUMsQ0FBQTtBQUNoQyx1QkFDZ0IsaUJBQWlCLENBQUMsQ0FBQTtBQWFsQztJQVVDLHdCQUNXLEtBQXFCLEVBQ3JCLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRixpQ0FBUSxHQUFSO1FBQUEsaUJBSUU7UUFIQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixVQUFVLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEtBQVU7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLEtBQVU7UUFDdEIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBdkRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7O3NCQUFBO0lBbURGLHFCQUFDO0FBQUQsQ0FqREEsQUFpREMsSUFBQTtBQWpEWSxzQkFBYyxpQkFpRDFCLENBQUEiLCJmaWxlIjoiYXBwL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSxcbiAgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmRlY2xhcmUgbGV0ICQ6IGFueTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIFBob3RvQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1waG90bycsXG4gIHRlbXBsYXRlVXJsOiAncGhvdG8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGhvdG8uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUGhvdG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzbHVnSWQ6IHN0cmluZztcblxuICBuZXh0TmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBpc05leHQ6IGJvb2xlYW47XG5cbiAgdG90b2FsU3RlcDogbnVtYmVyO1xuICBjdXJyZW50U3RlcDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gICAgdGhpcy5uZXh0TmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc05leHQgPSBmYWxzZTtcbiAgfVxuXG5cdG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PiB7XG4gICAgICB0aGlzLnNsdWdJZCA9IHBhcmFtc1snaWQnXTtcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgaWYodGhpcy5pc05leHQpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2VzdGltYXRlJywgdGhpcy5zbHVnSWRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI3Bob3RvX2FsZXJ0Jykuc2hvdygpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI3Bob3RvX2FsZXJ0JykuaGlkZSgpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YShldmVudDogYW55KSB7XG4gICAgdGhpcy50b3RvYWxTdGVwID0gZXZlbnQudG90YWxTdGVwO1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSBldmVudC5jdXJyZW50U3RlcDtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIH1cblxuICBnZXRTdGVwU3RhdHVzKGV2ZW50OiBhbnkpIHtcbiAgICBpZihldmVudCkge1xuICAgICAgdGhpcy5pc05leHQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzTmV4dCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=
