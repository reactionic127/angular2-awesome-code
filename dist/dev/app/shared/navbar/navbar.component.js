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
var index_1 = require('../../shared/index');
var navbar_service_1 = require('../../core/navbar.service');
var router_1 = require('@angular/router');
var store_service_1 = require('../../core/store.service');
var NavbarComponent = (function () {
    function NavbarComponent(_navbarService, _storeService, router) {
        var _this = this;
        this._navbarService = _navbarService;
        this._storeService = _storeService;
        this.actionVisible = false;
        this.isMorePage = false;
        this.isNextPage = false;
        this.isDrop = false;
        this.actionData = [];
        this.host = index_1.Config.API;
        this.slug = this._storeService.get('slugID');
        router.events.subscribe(function (event) {
            var urlString = event.url.toString();
            _this.currentUrl = urlString;
            if (event instanceof router_1.NavigationStart) {
                _this.selectedMoreIndex = -1;
                if (urlString.indexOf('next') > -1) {
                    _this.isNextPage = true;
                }
                else {
                    _this.isNextPage = false;
                }
                if (urlString.indexOf('more') > -1) {
                    _this.isMorePage = true;
                    var moreIndex = _this._storeService.get('current_more_index');
                    _this.selectedMoreIndex = parseInt(moreIndex);
                }
                else {
                    _this.isMorePage = false;
                }
            }
        });
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._navbarService.getEvent().subscribe(function (data) {
            _this.actionVisible = true;
            _this.actionData = data;
            for (var i = 0; i < _this.actionData.length; i++) {
                _this.actionData[i].text = _this.clearString(_this.actionData[i].text);
            }
            _this._storeService.setObject('action_data', _this.actionData);
        });
        if (this._storeService.getObject('action_data')) {
            this.actionData = this._storeService.getObject('action_data');
        }
    };
    NavbarComponent.prototype.clearString = function (str) {
        if (str) {
            str = str.replace(/&quot;/g, '"');
        }
        return str;
    };
    NavbarComponent.prototype.next = function () {
        this.isDrop = this.isDrop ? false : true;
    };
    NavbarComponent.prototype.moreAction = function (url, text, index) {
        this.selectedMoreIndex = index;
        this._storeService.set('current_more_index', index.toString());
        var link = this.host + url;
        this._storeService.set('more_aciton_text', text);
        this._storeService.set('more_aciton_link', link);
        this._storeService.set('back_aciton_link', this.currentUrl);
        this.router.navigate(['/more', this.slug]);
        this.isDrop = false;
    };
    NavbarComponent.prototype.gotoEstimate = function () {
        this.router.navigate(['/estimate', this.slug]);
    };
    NavbarComponent.prototype.closeDrop = function (event) {
        if (this.isDrop && (event.target === this.navbarApp.nativeElement)) {
            this.isDrop = false;
        }
    };
    __decorate([
        core_1.ViewChild('navbarApp'), 
        __metadata('design:type', core_1.ElementRef)
    ], NavbarComponent.prototype, "navbarApp", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [navbar_service_1.NavbarService, store_service_1.StoreService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUtPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHNCQUF3QyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzdELCtCQUF3QywyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BFLHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFELDhCQUF3QywwQkFBMEIsQ0FBQyxDQUFBO0FBVW5FO0lBZ0JDLHlCQUFvQixjQUE2QixFQUN4QyxhQUEyQixFQUNuQyxNQUFjO1FBbEJoQixpQkFnR0M7UUFoRm9CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQ3hDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRW5DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBTSxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUM1QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzFCLEVBQUUsQ0FBQSxDQUFDLEtBQUssWUFBWSx3QkFBZSxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixF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QUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLEtBQVU7UUFDbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQztJQUNGLENBQUM7SUFqRkQ7UUFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7c0RBQUE7SUFwQnhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBaUdGLHNCQUFDO0FBQUQsQ0FoR0EsQUFnR0MsSUFBQTtBQWhHWSx1QkFBZSxrQkFnRzNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0Vmlld0NoaWxkLFxuXHRFbGVtZW50UmVmLFxuXHRPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gICAgICAgICAgIGZyb20gJy4uLy4uL2NvcmUvbmF2YmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi8uLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG5hdmlnYXRpb24gYmFyIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmF2YmFyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0YWN0aW9uRGF0YTogYW55W107XG5cdGFjdGlvblZpc2libGU6IGJvb2xlYW47XG5cdGlzTW9yZVBhZ2U6IGJvb2xlYW47XG5cdGlzTmV4dFBhZ2U6IGJvb2xlYW47XG5cdGlzRHJvcDogYm9vbGVhbjtcblxuXHRzZWxlY3RlZE1vcmVJbmRleDogbnVtYmVyO1xuXG5cdGhvc3Q6IHN0cmluZztcblx0cm91dGVyOiBSb3V0ZXI7XG5cdGN1cnJlbnRVcmw6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXG5cdEBWaWV3Q2hpbGQoJ25hdmJhckFwcCcpIG5hdmJhckFwcDogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3N0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuXHRcdHJvdXRlcjogUm91dGVyKSB7XG5cdFx0dGhpcy5hY3Rpb25WaXNpYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5pc01vcmVQYWdlID0gZmFsc2U7XG5cdFx0dGhpcy5pc05leHRQYWdlID0gZmFsc2U7XG5cdFx0dGhpcy5pc0Ryb3AgPSBmYWxzZTtcblx0XHR0aGlzLmFjdGlvbkRhdGEgPSBbXTtcblx0XHR0aGlzLmhvc3QgPSBDb25maWcuQVBJO1xuXHRcdHRoaXMuc2x1ZyA9IHRoaXMuX3N0b3JlU2VydmljZS5nZXQoJ3NsdWdJRCcpO1xuXG5cdFx0cm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuXHRcdFx0bGV0IHVybFN0cmluZyA9IGV2ZW50LnVybC50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5jdXJyZW50VXJsID0gdXJsU3RyaW5nO1xuXHRcdCAgXHRpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuXHRcdCAgXHRcdHRoaXMuc2VsZWN0ZWRNb3JlSW5kZXggPSAtMTtcblx0XHQgICAgXHRpZih1cmxTdHJpbmcuaW5kZXhPZignbmV4dCcpID4gLTEpIHtcblx0XHQgICAgXHRcdHRoaXMuaXNOZXh0UGFnZSA9IHRydWU7XG5cdFx0ICAgIFx0fSBlbHNlIHtcblx0XHQgICAgXHRcdHRoaXMuaXNOZXh0UGFnZSA9IGZhbHNlO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGlmKHVybFN0cmluZy5pbmRleE9mKCdtb3JlJykgPiAtMSkge1xuXHRcdCAgICBcdFx0dGhpcy5pc01vcmVQYWdlID0gdHJ1ZTtcblx0XHQgICAgXHRcdGxldCBtb3JlSW5kZXggPSB0aGlzLl9zdG9yZVNlcnZpY2UuZ2V0KCdjdXJyZW50X21vcmVfaW5kZXgnKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkTW9yZUluZGV4ID0gcGFyc2VJbnQobW9yZUluZGV4KTtcblx0XHQgICAgXHR9IGVsc2Uge1xuXHRcdCAgICBcdFx0dGhpcy5pc01vcmVQYWdlID0gZmFsc2U7XG5cdFx0ICAgIFx0fVxuXHRcdCAgXHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLl9uYXZiYXJTZXJ2aWNlLmdldEV2ZW50KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5hY3Rpb25WaXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuYWN0aW9uRGF0YSA9IGRhdGE7XG5cdFx0XHRmb3IobGV0IGk9MDsgaTx0aGlzLmFjdGlvbkRhdGEubGVuZ3RoO2krKykge1xuXHRcdFx0XHR0aGlzLmFjdGlvbkRhdGFbaV0udGV4dCA9IHRoaXMuY2xlYXJTdHJpbmcodGhpcy5hY3Rpb25EYXRhW2ldLnRleHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc3RvcmVTZXJ2aWNlLnNldE9iamVjdCgnYWN0aW9uX2RhdGEnLCB0aGlzLmFjdGlvbkRhdGEpO1xuXHRcdH0pO1xuXG5cdFx0aWYodGhpcy5fc3RvcmVTZXJ2aWNlLmdldE9iamVjdCgnYWN0aW9uX2RhdGEnKSkge1xuXHRcdFx0dGhpcy5hY3Rpb25EYXRhID0gdGhpcy5fc3RvcmVTZXJ2aWNlLmdldE9iamVjdCgnYWN0aW9uX2RhdGEnKTtcblx0XHR9XG5cdH1cblxuXHRjbGVhclN0cmluZyhzdHI6IHN0cmluZykge1xuXHRcdGlmKHN0cikge1xuXHRcdFx0c3RyID0gc3RyLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXG5cdG5leHQoKSB7XG5cdCAgICB0aGlzLmlzRHJvcCA9IHRoaXMuaXNEcm9wID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0bW9yZUFjdGlvbih1cmw6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zZWxlY3RlZE1vcmVJbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuX3N0b3JlU2VydmljZS5zZXQoJ2N1cnJlbnRfbW9yZV9pbmRleCcsIGluZGV4LnRvU3RyaW5nKCkpO1xuXHRcdGxldCBsaW5rID0gdGhpcy5ob3N0ICsgdXJsO1xuXHRcdHRoaXMuX3N0b3JlU2VydmljZS5zZXQoJ21vcmVfYWNpdG9uX3RleHQnLCB0ZXh0KTtcblx0XHR0aGlzLl9zdG9yZVNlcnZpY2Uuc2V0KCdtb3JlX2FjaXRvbl9saW5rJywgbGluayk7XG5cdFx0dGhpcy5fc3RvcmVTZXJ2aWNlLnNldCgnYmFja19hY2l0b25fbGluaycsIHRoaXMuY3VycmVudFVybCk7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbW9yZScsIHRoaXMuc2x1Z10pO1xuXHRcdHRoaXMuaXNEcm9wID0gZmFsc2U7XG5cdH1cblxuXHRnb3RvRXN0aW1hdGUoKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZXN0aW1hdGUnLCB0aGlzLnNsdWddKTtcblx0fVxuXG5cdGNsb3NlRHJvcChldmVudDogYW55KSB7XG5cdFx0aWYodGhpcy5pc0Ryb3AgJiYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5uYXZiYXJBcHAubmF0aXZlRWxlbWVudCkpIHtcblx0XHRcdHRoaXMuaXNEcm9wID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG4iXX0=
