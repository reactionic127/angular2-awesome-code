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
var index_1 = require('../shared/index');
var DisclaimerComponent = (function () {
    function DisclaimerComponent(route, _spinner, router) {
        this.route = route;
        this._spinner = _spinner;
        this.router = router;
        this.slugId = '';
        this.isLoading = false;
        this.isExistSlug = false;
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.slugId = params['slug'];
            if (_this.slugId) {
                _this.isExistSlug = true;
                _this._spinner.start();
                var that_1 = _this;
                setTimeout(function () {
                    that_1._spinner.stop();
                    that_1.isLoading = true;
                }, 3000);
            }
            else {
                _this.isLoading = true;
            }
        });
    };
    DisclaimerComponent.prototype.next = function () {
        this.router.navigate(['/estimate', this.slugId]);
    };
    DisclaimerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-disclaimer',
            templateUrl: 'disclaimer.component.html',
            styleUrls: ['disclaimer.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.SpinnerService, router_1.Router])
    ], DisclaimerComponent);
    return DisclaimerComponent;
}());
exports.DisclaimerComponent = DisclaimerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXNjbGFpbWVyL2Rpc2NsYWltZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsc0JBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFXbEQ7SUFLRSw2QkFBb0IsS0FBcUIsRUFDaEMsUUFBd0IsRUFDeEIsTUFBYztRQUZILFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTdCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0QixJQUFJLE1BQUksR0FBRyxLQUFJLENBQUM7Z0JBQ2hCLFVBQVUsQ0FBQztvQkFDVixNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXZDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDOzsyQkFBQTtJQW1DRiwwQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksMkJBQW1CLHNCQWtDL0IsQ0FBQSIsImZpbGUiOiJhcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gIGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBEaXNjbGFpbWVyQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1kaXNjbGFpbWVyJyxcbiAgdGVtcGxhdGVVcmw6ICdkaXNjbGFpbWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Rpc2NsYWltZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpc2NsYWltZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzbHVnSWQ6IHN0cmluZztcblx0aXNMb2FkaW5nOiBib29sZWFuO1xuXHRpc0V4aXN0U2x1ZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgXHRwcml2YXRlIF9zcGlubmVyOiBTcGlubmVyU2VydmljZSxcbiAgXHRwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIFx0dGhpcy5zbHVnSWQgPSAnJztcbiAgXHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICBcdHRoaXMuaXNFeGlzdFNsdWcgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PiB7XG4gICAgICB0aGlzLnNsdWdJZCA9IHBhcmFtc1snc2x1ZyddO1xuXG4gICAgICBpZih0aGlzLnNsdWdJZCkge1xuICAgICAgICB0aGlzLmlzRXhpc3RTbHVnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIFx0dGhhdC5fc3Bpbm5lci5zdG9wKCk7XG5cdCAgICAgIFx0dGhhdC5pc0xvYWRpbmcgPSB0cnVlO1xuXHQgICAgICB9LCAzMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXN0aW1hdGUnLCB0aGlzLnNsdWdJZF0pO1xuICB9XG59XG4iXX0=
