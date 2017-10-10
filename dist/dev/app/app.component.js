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
var index_1 = require('./shared/index');
var router_1 = require('@angular/router');
require('./operators');
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        console.log('Environment config', index_1.Config);
        this.currentPage = '';
        this.targetPageList = ['estimate', 'more', 'welcome'];
        router.events.subscribe(function (event) {
            var urlString = event.url.toString();
            if (event instanceof router_1.NavigationStart) {
                _this.currentPage = '';
                if (urlString.indexOf(_this.targetPageList[0]) > -1) {
                    _this.currentPage = _this.targetPageList[0];
                }
                if (urlString.indexOf(_this.targetPageList[1]) > -1) {
                    _this.currentPage = _this.targetPageList[1];
                }
                if (urlString.indexOf(_this.targetPageList[2]) > -1) {
                    _this.currentPage = _this.targetPageList[2];
                }
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFDMUQsUUFBTyxhQUFhLENBQUMsQ0FBQTtBQVVyQjtJQUlDLHNCQUFZLE1BQWM7UUFKM0IsaUJBNEJDO1FBdkJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzVCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsRUFBRSxDQUFBLENBQUMsS0FBSyxZQUFZLHdCQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFFdEIsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBaENGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7O29CQUFBO0lBNkJGLG1CQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSxvQkFBWSxlQTRCeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICcuL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2QtYXBwJyxcblx0dGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRjdXJyZW50UGFnZTogc3RyaW5nO1xuXHR0YXJnZXRQYWdlTGlzdDogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcblx0XHRjb25zb2xlLmxvZygnRW52aXJvbm1lbnQgY29uZmlnJywgQ29uZmlnKTtcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gJyc7XG5cdFx0dGhpcy50YXJnZXRQYWdlTGlzdCA9IFsnZXN0aW1hdGUnLCAnbW9yZScsICd3ZWxjb21lJ107XG5cblx0XHRyb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG5cdFx0XHRsZXQgdXJsU3RyaW5nID0gZXZlbnQudXJsLnRvU3RyaW5nKCk7XG5cdFx0XHRpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gJyc7XG5cblx0XHRcdFx0aWYodXJsU3RyaW5nLmluZGV4T2YodGhpcy50YXJnZXRQYWdlTGlzdFswXSkgPiAtMSkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnRhcmdldFBhZ2VMaXN0WzBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodXJsU3RyaW5nLmluZGV4T2YodGhpcy50YXJnZXRQYWdlTGlzdFsxXSkgPiAtMSkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnRhcmdldFBhZ2VMaXN0WzFdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodXJsU3RyaW5nLmluZGV4T2YodGhpcy50YXJnZXRQYWdlTGlzdFsyXSkgPiAtMSkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnRhcmdldFBhZ2VMaXN0WzJdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
