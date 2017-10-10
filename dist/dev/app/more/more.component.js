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
var store_service_1 = require('../core/store.service');
var platform_browser_1 = require('@angular/platform-browser');
var event_service_1 = require('../core/event.service');
var MoreComponent = (function () {
    function MoreComponent(_router, _storeService, _eventService, domSanitizer) {
        this._router = _router;
        this._storeService = _storeService;
        this._eventService = _eventService;
        this.domSanitizer = domSanitizer;
        this.sub = false;
    }
    MoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.init();
            }
        });
        this.init();
    };
    MoreComponent.prototype.init = function () {
        this.sub = true;
        var link = this._storeService.get('more_aciton_link');
        this.title = this._storeService.get('more_aciton_text');
        this.iframeLink = this.domSanitizer.bypassSecurityTrustResourceUrl(link);
        var toolbarData = this._storeService.getObject('load_topbar_data');
        if (toolbarData) {
            this._eventService.emit('load_topbar_data', toolbarData);
        }
    };
    MoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-more',
            templateUrl: 'more.component.html',
            styleUrls: ['more.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, store_service_1.StoreService, event_service_1.EventService, platform_browser_1.DomSanitizer])
    ], MoreComponent);
    return MoreComponent;
}());
exports.MoreComponent = MoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb3JlL21vcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFFTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFDdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw4QkFBa0MsdUJBQXVCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBa0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM5RCw4QkFBa0MsdUJBQXVCLENBQUMsQ0FBQTtBQVkxRDtJQUtDLHVCQUNXLE9BQWUsRUFDZixhQUEyQixFQUMzQixhQUEyQixFQUMzQixZQUEyQjtRQUgzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDakMsRUFBRSxDQUFBLENBQUMsS0FBSyxZQUFZLHdCQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25FLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztJQXJDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQWlDRixvQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1kscUJBQWEsZ0JBZ0N6QixDQUFBIiwiZmlsZSI6ImFwcC9tb3JlL21vcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsXG5OYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gICAgICBmcm9tICcuLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gICAgICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9ICAgICAgZnJvbSAnLi4vY29yZS9ldmVudC5zZXJ2aWNlJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIE1vcmVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLW1vcmUnLFxuICB0ZW1wbGF0ZVVybDogJ21vcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbW9yZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlmcmFtZUxpbms6IGFueTtcbiAgc3ViOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3N0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tU2FuaXRpemVyIDogRG9tU2FuaXRpemVyXG4gICkge3RoaXMuc3ViID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHt0aGlzLnN1YiA9IHRydWU7XG4gICAgbGV0IGxpbmsgPSB0aGlzLl9zdG9yZVNlcnZpY2UuZ2V0KCdtb3JlX2FjaXRvbl9saW5rJyk7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuX3N0b3JlU2VydmljZS5nZXQoJ21vcmVfYWNpdG9uX3RleHQnKTtcbiAgICB0aGlzLmlmcmFtZUxpbmsgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwobGluayk7XG4gICAgbGV0IHRvb2xiYXJEYXRhID0gdGhpcy5fc3RvcmVTZXJ2aWNlLmdldE9iamVjdCgnbG9hZF90b3BiYXJfZGF0YScpO1xuICAgIGlmKHRvb2xiYXJEYXRhKSB7XG4gICAgICB0aGlzLl9ldmVudFNlcnZpY2UuZW1pdCgnbG9hZF90b3BiYXJfZGF0YScsIHRvb2xiYXJEYXRhKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
