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
var data_service_1 = require('../core/data.service');
var store_service_1 = require('../core/store.service');
var event_service_1 = require('../core/event.service');
var navbar_service_1 = require('../core/navbar.service');
var index_2 = require('../shared/index');
var disclaimer_modal_service_1 = require('./modal/disclaimer.modal.service');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var EstimateComponent = (function () {
    function EstimateComponent(_dataService, _storeService, activeRoute, _eventService, _router, _navbarService, _viewContainer, _disclaimerModal, _spinner, modal) {
        this._dataService = _dataService;
        this._storeService = _storeService;
        this.activeRoute = activeRoute;
        this._eventService = _eventService;
        this._router = _router;
        this._navbarService = _navbarService;
        this._viewContainer = _viewContainer;
        this._disclaimerModal = _disclaimerModal;
        this._spinner = _spinner;
        this.modal = modal;
        this.loading = false;
        this.isDotSlider = false;
        this.isButtons = false;
        this.estimateData = '';
        this._spinner.start();
        this.backendApi = index_1.Config.API;
        modal.overlay.defaultViewContainer = _viewContainer;
    }
    EstimateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.slug = params['id'];
            _this._storeService.set('slugID', _this.slug);
            var postData = {
                code: 200,
                data: {
                    slug: _this.slug
                }
            };
            _this._dataService.post('v1/estimate/estimate ', postData)
                .subscribe(function (res) {
                var data = res.data;
                console.log(data);
                if (data.steps) {
                    _this.isDotSlider = true;
                }
                else {
                    _this.isDotSlider = false;
                }
                var helpIcon = _this.backendApi + data.help.icon;
                var liveHelpIcon = _this.backendApi + data.liveHelp.icon;
                var logoIcon = _this.backendApi + data.ui.logo;
                var helpStatus, liveHelpStatus;
                if (data.liveHelp.on === 1) {
                    liveHelpStatus = true;
                }
                else {
                    liveHelpStatus = false;
                }
                if (data.help.on === 1) {
                    helpStatus = true;
                }
                else {
                    helpStatus = false;
                }
                if (data.hasOwnProperty('action')) {
                    _this.isButtons = true;
                }
                else {
                    _this.isButtons = false;
                }
                _this._eventService.emit('load_topbar_data', {
                    helpIcon: helpIcon,
                    helpStatus: helpStatus,
                    liveHelpIcon: liveHelpIcon,
                    liveHelpStatus: liveHelpStatus,
                    logoIcon: logoIcon,
                    helpLink: data.help.link
                });
                var estimateDataUrl = res.data.estimateHtml;
                var isShowEstimateModal = res.data.showDisclaimer;
                var strDisclaimer = res.data.disclaimer;
                _this._dataService.get(estimateDataUrl, false)
                    .subscribe(function (res) {
                    _this.estimateData = res._body;
                    _this.init();
                    _this.loading = true;
                    if (isShowEstimateModal) {
                        _this._disclaimerModal.openDialog(strDisclaimer, _this._viewContainer);
                    }
                    _this._spinner.stop();
                }, function (error) { return console.error('Unable to fetch brands', error); });
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    EstimateComponent.prototype.init = function (counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        if (counter > 50) {
            console.log('Fail to load the estimate element.');
        }
        else if ($('.estimate-body').length <= 0) {
            counter++;
            setTimeout(function () { return _this.init(counter); }, 50);
        }
        else {
            $('.estimate-body').html(this.estimateData);
        }
    };
    EstimateComponent.prototype.next = function () {
        this._router.navigate(['/next', this.slug]);
    };
    EstimateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-estimate',
            templateUrl: 'estimate.component.html',
            styleUrls: ['estimate.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, store_service_1.StoreService, router_1.ActivatedRoute, event_service_1.EventService, router_1.Router, navbar_service_1.NavbarService, core_1.ViewContainerRef, disclaimer_modal_service_1.DisclaimerModelService, index_2.SpinnerService, bootstrap_1.Modal])
    ], EstimateComponent);
    return EstimateComponent;
}());
exports.EstimateComponent = EstimateComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lc3RpbWF0ZS9lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUVnQixlQUFlLENBQUMsQ0FBQTtBQUNoQyx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCw2QkFBdUMsc0JBQXNCLENBQUMsQ0FBQTtBQUM5RCw4QkFBdUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMvRCw4QkFBdUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMvRCwrQkFBdUMsd0JBQXdCLENBQUMsQ0FBQTtBQUNoRSxzQkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCx5Q0FBdUMsa0NBQWtDLENBQUMsQ0FBQTtBQUMxRSwwQkFBdUMsa0NBQWtDLENBQUMsQ0FBQTtBQVkxRTtJQVdDLDJCQUFvQixZQUF5QixFQUNsQyxhQUEyQixFQUMzQixXQUEyQixFQUMzQixhQUEyQixFQUMzQixPQUFlLEVBQ2YsY0FBNkIsRUFDN0IsY0FBZ0MsRUFDaEMsZ0JBQXdDLEVBQ3hDLFFBQXdCLEVBQ3hCLEtBQVk7UUFUSCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO1FBQ3hDLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENB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QixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLEVBQUcsQ0FBQztZQUNYLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBbEIsQ0FBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUF2SEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzs7eUJBQUE7SUFtSEYsd0JBQUM7QUFBRCxDQWxIQSxBQWtIQyxJQUFBO0FBbEhZLHlCQUFpQixvQkFrSDdCLENBQUEiLCJmaWxlIjoiYXBwL2VzdGltYXRlL2VzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9ICAgICAgICAgICBmcm9tICcuLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gICAgICAgICAgIGZyb20gJy4uL2NvcmUvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gICAgICAgICAgZnJvbSAnLi4vY29yZS9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IERpc2NsYWltZXJNb2RlbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsL2Rpc2NsYWltZXIubW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbCB9ICAgICAgICAgICAgICAgICAgZnJvbSAnYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXAnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgRXN0aW1hdGVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWVzdGltYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICdlc3RpbWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydlc3RpbWF0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXN0aW1hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRlc3RpbWF0ZURhdGE6IHN0cmluZztcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgaXNEb3RTbGlkZXI6IGJvb2xlYW47XG4gIGlzQnV0dG9uczogYm9vbGVhbjtcblxuICBzbHVnOiBzdHJpbmc7XG4gIGJhY2tlbmRBcGk6IHN0cmluZztcbiAgdG90YWxTdGVwOiBudW1iZXI7XG4gIGN1cnJlbnRTdGVwOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX25hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9kaXNjbGFpbWVyTW9kYWw6IERpc2NsYWltZXJNb2RlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc3Bpbm5lcjogU3Bpbm5lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWwpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzRG90U2xpZGVyID0gZmFsc2U7XG4gICAgdGhpcy5pc0J1dHRvbnMgPSBmYWxzZTtcbiAgICB0aGlzLmVzdGltYXRlRGF0YSA9ICcnO1xuICAgIHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgICB0aGlzLmJhY2tlbmRBcGkgPSBDb25maWcuQVBJO1xuICAgIG1vZGFsLm92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSBfdmlld0NvbnRhaW5lcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGFjdGl2ZVJvdXRlIHBhcmFtXG4gICAgdGhpcy5hY3RpdmVSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+IHtcbiAgICAgIHRoaXMuc2x1ZyA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuX3N0b3JlU2VydmljZS5zZXQoJ3NsdWdJRCcsIHRoaXMuc2x1Zyk7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNsdWc6IHRoaXMuc2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9lc3RpbWF0ZS9lc3RpbWF0ZSAnLCBwb3N0RGF0YSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEuc3RlcHMpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb3RTbGlkZXIgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRG90U2xpZGVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBoZWxwSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEuaGVscC5pY29uO1xuICAgICAgICAgIGxldCBsaXZlSGVscEljb24gPSB0aGlzLmJhY2tlbmRBcGkgKyBkYXRhLmxpdmVIZWxwLmljb247XG4gICAgICAgICAgbGV0IGxvZ29JY29uID0gdGhpcy5iYWNrZW5kQXBpICsgZGF0YS51aS5sb2dvO1xuICAgICAgICAgIGxldCBoZWxwU3RhdHVzOiBib29sZWFuLCBsaXZlSGVscFN0YXR1czogYm9vbGVhbjtcbiAgICAgICAgICBpZihkYXRhLmxpdmVIZWxwLm9uID09PSAxKSB7XG4gICAgICAgICAgICBsaXZlSGVscFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpdmVIZWxwU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoZGF0YS5oZWxwLm9uID09PSAxKSB7XG4gICAgICAgICAgICBoZWxwU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVscFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ2FjdGlvbicpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQnV0dG9ucyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNCdXR0b25zID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmVtaXQoJ2xvYWRfdG9wYmFyX2RhdGEnLCB7XG4gICAgICAgICAgICBoZWxwSWNvbjogaGVscEljb24sXG4gICAgICAgICAgICBoZWxwU3RhdHVzOiBoZWxwU3RhdHVzLFxuICAgICAgICAgICAgbGl2ZUhlbHBJY29uOiBsaXZlSGVscEljb24sXG4gICAgICAgICAgICBsaXZlSGVscFN0YXR1czogbGl2ZUhlbHBTdGF0dXMsXG4gICAgICAgICAgICBsb2dvSWNvbjogbG9nb0ljb24sXG4gICAgICAgICAgICBoZWxwTGluazogZGF0YS5oZWxwLmxpbmtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxldCBlc3RpbWF0ZURhdGFVcmwgPSByZXMuZGF0YS5lc3RpbWF0ZUh0bWw7XG4gICAgICAgICAgbGV0IGlzU2hvd0VzdGltYXRlTW9kYWwgPSByZXMuZGF0YS5zaG93RGlzY2xhaW1lcjtcbiAgICAgICAgICBsZXQgc3RyRGlzY2xhaW1lciA9IHJlcy5kYXRhLmRpc2NsYWltZXI7XG5cbiAgICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXQoZXN0aW1hdGVEYXRhVXJsLCBmYWxzZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXN0aW1hdGVEYXRhID0gcmVzLl9ib2R5O1xuICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaWYoaXNTaG93RXN0aW1hdGVNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc2NsYWltZXJNb2RhbC5vcGVuRGlhbG9nKHN0ckRpc2NsYWltZXIsIHRoaXMuX3ZpZXdDb250YWluZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KGNvdW50ZXI6IG51bWJlciA9IDApIHtcbiAgICBpZihjb3VudGVyID4gNTApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGYWlsIHRvIGxvYWQgdGhlIGVzdGltYXRlIGVsZW1lbnQuJyk7XG4gICAgfSBlbHNlIGlmKCQoJy5lc3RpbWF0ZS1ib2R5JykubGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvdW50ZXIgKys7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdChjb3VudGVyKSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuZXN0aW1hdGUtYm9keScpLmh0bWwodGhpcy5lc3RpbWF0ZURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL25leHQnLCB0aGlzLnNsdWddKTtcbiAgfVxufVxuIl19
