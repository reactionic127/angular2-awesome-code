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
var index_1 = require('../shared/index');
var data_service_1 = require('../core/data.service');
var index_2 = require('../shared/index');
var router_1 = require('@angular/router');
var player_modal_service_1 = require('./modal/player.modal.service');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var WelcomeComponent = (function () {
    function WelcomeComponent(_dataService, _spinner, _activatedRoute, _router, _playerModal, _viewContainer, modal) {
        this._dataService = _dataService;
        this._spinner = _spinner;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._playerModal = _playerModal;
        this._viewContainer = _viewContainer;
        this.modal = modal;
        modal.overlay.defaultViewContainer = _viewContainer;
        this.pageHeight = window.innerHeight;
        this.welcomeDescription = '';
        this.btnContent = '';
        this.logoUrl = '';
        this.callback = '';
        this.backendApi = index_1.Config.API;
        this.isVideoLink = false;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.slugId = params['slugId'];
            _this.isPageLoading = false;
            _this.getWelcomeData();
        });
    };
    WelcomeComponent.prototype.getWelcomeData = function () {
        var _this = this;
        var postData = {
            code: 200,
            data: {
                slug: this.slugId
            }
        };
        this._spinner.start();
        this._dataService.post('v1/data/welcome', postData)
            .subscribe(function (res) {
            var data = res.data;
            if (data.forward) {
                window.location.href = data.forward;
            }
            _this.logoUrl = _this.backendApi + data.logo;
            _this.videoLinkSrc = _this.backendApi + data.video_link_src;
            _this.videoLinkText = data.video_link_text;
            _this.welcomeDescription = data.desc;
            _this.btnContent = data.next_btn;
            _this.callback = data.callback;
            _this.videoLink = data.video_link;
            if (data.video === 0) {
                _this.isVideoLink = false;
            }
            else {
                _this.isVideoLink = true;
            }
            _this.isPageLoading = true;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    WelcomeComponent.prototype.start = function () {
        var subUrl = '';
        if (this.callback === 'vin_photo') {
            subUrl = 'identify';
        }
        else {
            subUrl = '/' + this.callback;
        }
        this._router.navigate([subUrl, this.slugId]);
    };
    WelcomeComponent.prototype.player = function () {
        this._playerModal.openDialog('', this._viewContainer);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-welcome',
            templateUrl: 'welcome.component.html',
            styleUrls: ['welcome.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, index_2.SpinnerService, router_1.ActivatedRoute, router_1.Router, player_modal_service_1.PlayerModelService, core_1.ViewContainerRef, bootstrap_1.Modal])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFHTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCw2QkFBdUMsc0JBQXNCLENBQUMsQ0FBQTtBQUM5RCxzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxxQ0FBdUMsOEJBQThCLENBQUMsQ0FBQTtBQUN0RSwwQkFBdUMsa0NBQWtDLENBQUMsQ0FBQTtBQVcxRTtJQWVDLDBCQUNTLFlBQXlCLEVBQ3pCLFFBQXdCLEVBQ3hCLGVBQStCLEVBQy9CLE9BQWUsRUFDZixZQUFnQyxFQUNoQyxjQUFnQyxFQUNoQyxLQUFZO1FBTlosaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQU87UUFFcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxjQUFjLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFNLENBQUMsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFD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QUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7O3dCQUFBO0lBNEZGLHVCQUFDO0FBQUQsQ0EzRkEsQUEyRkMsSUFBQTtBQTNGWSx3QkFBZ0IsbUJBMkY1QixDQUFBIiwiZmlsZSI6ImFwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxuXHRPbkluaXQsXG5cdFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSAgICAgICAgICAgICAgICAgZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi9jb3JlL2RhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGxheWVyTW9kZWxTZXJ2aWNlIH0gICAgIGZyb20gJy4vbW9kYWwvcGxheWVyLm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kYWwgfSAgICAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIFdlbGNvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NkLXdlbGNvbWUnLFxuXHR0ZW1wbGF0ZVVybDogJ3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnd2VsY29tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHBhZ2VIZWlnaHQ6IG51bWJlcjtcblx0aXNQYWdlTG9hZGluZzogYm9vbGVhbjtcblx0aXNWaWRlb0xpbms6IGJvb2xlYW47XG5cblx0YmFja2VuZEFwaTogc3RyaW5nO1xuXHRzbHVnSWQ6IHN0cmluZztcblx0d2VsY29tZURlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGJ0bkNvbnRlbnQ6IHN0cmluZztcblx0bG9nb1VybDogc3RyaW5nO1xuXHR2aWRlb0xpbmtTcmM6IHN0cmluZztcblx0dmlkZW9MaW5rOiBzdHJpbmc7XG5cdGNhbGxiYWNrOiBzdHJpbmc7XG5cdHZpZGVvTGlua1RleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfc3Bpbm5lcjogU3Bpbm5lclNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX3BsYXllck1vZGFsOiBQbGF5ZXJNb2RlbFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIG1vZGFsOiBNb2RhbFxuXHQpIHtcblx0XHRtb2RhbC5vdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gX3ZpZXdDb250YWluZXI7XG5cdFx0dGhpcy5wYWdlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdHRoaXMud2VsY29tZURlc2NyaXB0aW9uID0gJyc7XG5cdFx0dGhpcy5idG5Db250ZW50ID0gJyc7XG5cdFx0dGhpcy5sb2dvVXJsID0gJyc7XG5cdFx0dGhpcy5jYWxsYmFjayA9ICcnO1xuXHRcdHRoaXMuYmFja2VuZEFwaSA9IENvbmZpZy5BUEk7XG5cdFx0dGhpcy5pc1ZpZGVvTGluayA9IGZhbHNlO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PiB7XG5cdFx0XHR0aGlzLnNsdWdJZCA9IHBhcmFtc1snc2x1Z0lkJ107XG5cdFx0XHR0aGlzLmlzUGFnZUxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdHRoaXMuZ2V0V2VsY29tZURhdGEoKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldFdlbGNvbWVEYXRhKCkge1xuXHRcdGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgXHRjb2RlOiAyMDAsXG4gICAgICAgIFx0ZGF0YToge1xuICAgICAgICBcdFx0c2x1ZzogdGhpcy5zbHVnSWRcbiAgICAgICAgXHR9XG4gICAgICAgIH07XG5cblx0XHR0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG5cdFx0dGhpcy5fZGF0YVNlcnZpY2UucG9zdCgndjEvZGF0YS93ZWxjb21lJywgcG9zdERhdGEpXG4gICAgICAgIFx0LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgXHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XG5cbiAgICAgICAgXHRcdGlmKGRhdGEuZm9yd2FyZCkge1xuICAgICAgICBcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEuZm9yd2FyZDtcbiAgICAgICAgXHRcdH1cblxuICAgICAgICBcdFx0dGhpcy5sb2dvVXJsICAgICAgID0gdGhpcy5iYWNrZW5kQXBpICsgZGF0YS5sb2dvO1xuICAgICAgICBcdFx0dGhpcy52aWRlb0xpbmtTcmMgID0gdGhpcy5iYWNrZW5kQXBpICsgZGF0YS52aWRlb19saW5rX3NyYztcbiAgICAgICAgXHRcdHRoaXMudmlkZW9MaW5rVGV4dCAgICAgID0gZGF0YS52aWRlb19saW5rX3RleHQ7XG4gICAgICAgIFx0XHR0aGlzLndlbGNvbWVEZXNjcmlwdGlvbiA9IGRhdGEuZGVzYztcbiAgICAgICAgXHRcdHRoaXMuYnRuQ29udGVudCAgICAgICAgID0gZGF0YS5uZXh0X2J0bjtcbiAgICAgICAgXHRcdHRoaXMuY2FsbGJhY2sgICAgICAgICAgID0gZGF0YS5jYWxsYmFjaztcbiAgICAgICAgXHRcdHRoaXMudmlkZW9MaW5rICAgICAgICAgID0gZGF0YS52aWRlb19saW5rO1xuXG4gICAgICAgIFx0XHRpZihkYXRhLnZpZGVvID09PSAwKSB7XG4gICAgICAgIFx0XHRcdHRoaXMuaXNWaWRlb0xpbmsgPSBmYWxzZTtcbiAgICAgICAgXHRcdH0gZWxzZSB7XG4gICAgICAgIFx0XHRcdHRoaXMuaXNWaWRlb0xpbmsgPSB0cnVlO1xuICAgICAgICBcdFx0fVxuXG4gICAgICAgIFx0XHR0aGlzLmlzUGFnZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBcdFx0dGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIFx0fSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuXHR9XG5cblx0c3RhcnQoKSB7XG5cdFx0bGV0IHN1YlVybCA9ICcnO1xuXHRcdGlmKHRoaXMuY2FsbGJhY2sgPT09ICd2aW5fcGhvdG8nKSB7XG5cdFx0XHRzdWJVcmwgPSAnaWRlbnRpZnknO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdWJVcmwgPSAnLycgKyB0aGlzLmNhbGxiYWNrO1xuXHRcdH1cblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3N1YlVybCwgdGhpcy5zbHVnSWRdKTtcblx0fVxuXG5cdHBsYXllcigpIHtcblx0XHR0aGlzLl9wbGF5ZXJNb2RhbC5vcGVuRGlhbG9nKCcnLCB0aGlzLl92aWV3Q29udGFpbmVyKTtcblx0fVxufVxuIl19
