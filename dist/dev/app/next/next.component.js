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
var NextComponent = (function () {
    function NextComponent(_dataService, _storeService, activeRoute, _eventService, _navbarService, _viewContainer, _spinner) {
        this._dataService = _dataService;
        this._storeService = _storeService;
        this.activeRoute = activeRoute;
        this._eventService = _eventService;
        this._navbarService = _navbarService;
        this._viewContainer = _viewContainer;
        this._spinner = _spinner;
        this.loading = false;
        this.backendApi = index_1.Config.API;
        this._spinner.start();
    }
    NextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.slug = params['slug'];
            _this._storeService.set('slugID', _this.slug);
            var postData = {
                code: 200,
                data: {
                    slug: _this.slug
                }
            };
            _this._dataService.post('v1/estimate/next ', postData)
                .subscribe(function (res) {
                console.log(res);
                var data = res.data;
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
                _this._eventService.emit('load_topbar_data', {
                    helpIcon: helpIcon,
                    helpStatus: helpStatus,
                    liveHelpIcon: liveHelpIcon,
                    liveHelpStatus: liveHelpStatus,
                    logoIcon: logoIcon,
                    helpLink: data.help.link
                });
                _this._storeService.setObject('load_topbar_data', {
                    helpIcon: helpIcon,
                    helpStatus: helpStatus,
                    liveHelpIcon: liveHelpIcon,
                    liveHelpStatus: liveHelpStatus,
                    logoIcon: logoIcon,
                    helpLink: data.help.link
                });
                var estimateDataUrl = res.data.estimateHtml;
                var actionButtons = res.data.action.btns;
                _this._navbarService.setData(actionButtons);
                _this._dataService.get(estimateDataUrl, false)
                    .subscribe(function (res) {
                    _this.estimateData = res._body;
                    _this.loading = true;
                    _this.renderNextBodyElement();
                    _this._spinner.stop();
                }, function (error) { return console.error('Unable to fetch brands', error); });
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    NextComponent.prototype.renderNextBodyElement = function (counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        if (counter > 50) {
            console.log('Fail to load the next body element.');
        }
        else if ($('.next-wrapper .next-body').length <= 0) {
            counter++;
            setTimeout(function () { return _this.renderNextBodyElement(counter); }, 50);
        }
        else {
            $('.next-wrapper .next-body').html(this.estimateData);
        }
    };
    NextComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-next',
            templateUrl: 'next.component.html',
            styleUrls: ['next.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, store_service_1.StoreService, router_1.ActivatedRoute, event_service_1.EventService, navbar_service_1.NavbarService, core_1.ViewContainerRef, index_2.SpinnerService])
    ], NextComponent);
    return NextComponent;
}());
exports.NextComponent = NextComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZXh0L25leHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFFZ0IsZUFBZSxDQUFDLENBQUE7QUFDaEMsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsc0JBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsNkJBQXVDLHNCQUFzQixDQUFDLENBQUE7QUFDOUQsOEJBQXVDLHVCQUF1QixDQUFDLENBQUE7QUFDL0QsOEJBQXVDLHVCQUF1QixDQUFDLENBQUE7QUFDL0QsK0JBQXVDLHdCQUF3QixDQUFDLENBQUE7QUFDaEUsc0JBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFZekQ7SUFNQyx1QkFBb0IsWUFBeUIsRUFDbEMsYUFBMkIsRUFDM0IsV0FBMkIsRUFDM0IsYUFBMkIsRUFDM0IsY0FBNkIsRUFDN0IsY0FBZ0MsRUFDaEMsUUFBd0I7UUFOZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBTSxDQUFDLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBK0RDO1FBN0RDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdEMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLGFBQWEs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ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9ICAgICAgICAgICBmcm9tICcuLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gICAgICAgICAgIGZyb20gJy4uL2NvcmUvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gICAgICAgICAgZnJvbSAnLi4vY29yZS9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIE5leHRDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLW5leHQnLFxuICB0ZW1wbGF0ZVVybDogJ25leHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmV4dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVzdGltYXRlRGF0YTogYW55O1xuICBiYWNrZW5kQXBpOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmVSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSxcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3NwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5iYWNrZW5kQXBpID0gQ29uZmlnLkFQSTtcblxuICAgIHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGFjdGl2ZVJvdXRlIHBhcmFtXG4gICAgdGhpcy5hY3RpdmVSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+IHtcbiAgICAgIHRoaXMuc2x1ZyA9IHBhcmFtc1snc2x1ZyddO1xuICAgICAgdGhpcy5fc3RvcmVTZXJ2aWNlLnNldCgnc2x1Z0lEJywgdGhpcy5zbHVnKTtcbiAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2x1ZzogdGhpcy5zbHVnXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3QoJ3YxL2VzdGltYXRlL25leHQgJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7Y29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgIGxldCBoZWxwSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEuaGVscC5pY29uO1xuICAgICAgICAgIGxldCBsaXZlSGVscEljb24gPSB0aGlzLmJhY2tlbmRBcGkgKyBkYXRhLmxpdmVIZWxwLmljb247XG4gICAgICAgICAgbGV0IGxvZ29JY29uID0gdGhpcy5iYWNrZW5kQXBpICsgZGF0YS51aS5sb2dvO1xuICAgICAgICAgIGxldCBoZWxwU3RhdHVzOiBib29sZWFuLCBsaXZlSGVscFN0YXR1czogYm9vbGVhbjtcbiAgICAgICAgICBpZihkYXRhLmxpdmVIZWxwLm9uID09PSAxKSB7XG4gICAgICAgICAgICBsaXZlSGVscFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpdmVIZWxwU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoZGF0YS5oZWxwLm9uID09PSAxKSB7XG4gICAgICAgICAgICBoZWxwU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVscFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5lbWl0KCdsb2FkX3RvcGJhcl9kYXRhJywge1xuICAgICAgICAgICAgaGVscEljb246IGhlbHBJY29uLFxuICAgICAgICAgICAgaGVscFN0YXR1czogaGVscFN0YXR1cyxcbiAgICAgICAgICAgIGxpdmVIZWxwSWNvbjogbGl2ZUhlbHBJY29uLFxuICAgICAgICAgICAgbGl2ZUhlbHBTdGF0dXM6IGxpdmVIZWxwU3RhdHVzLFxuICAgICAgICAgICAgbG9nb0ljb246IGxvZ29JY29uLFxuICAgICAgICAgICAgaGVscExpbms6IGRhdGEuaGVscC5saW5rXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLl9zdG9yZVNlcnZpY2Uuc2V0T2JqZWN0KCdsb2FkX3RvcGJhcl9kYXRhJyx7XG4gICAgICAgICAgICBoZWxwSWNvbjogaGVscEljb24sXG4gICAgICAgICAgICBoZWxwU3RhdHVzOiBoZWxwU3RhdHVzLFxuICAgICAgICAgICAgbGl2ZUhlbHBJY29uOiBsaXZlSGVscEljb24sXG4gICAgICAgICAgICBsaXZlSGVscFN0YXR1czogbGl2ZUhlbHBTdGF0dXMsXG4gICAgICAgICAgICBsb2dvSWNvbjogbG9nb0ljb24sXG4gICAgICAgICAgICBoZWxwTGluazogZGF0YS5oZWxwLmxpbmtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxldCBlc3RpbWF0ZURhdGFVcmwgPSByZXMuZGF0YS5lc3RpbWF0ZUh0bWw7XG4gICAgICAgICAgbGV0IGFjdGlvbkJ1dHRvbnMgPSByZXMuZGF0YS5hY3Rpb24uYnRucztcbiAgICAgICAgICB0aGlzLl9uYXZiYXJTZXJ2aWNlLnNldERhdGEoYWN0aW9uQnV0dG9ucyk7XG5cbiAgICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXQoZXN0aW1hdGVEYXRhVXJsLCBmYWxzZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXN0aW1hdGVEYXRhID0gcmVzLl9ib2R5O1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlck5leHRCb2R5RWxlbWVudCgpO1xuICAgICAgICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcblxuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJOZXh0Qm9keUVsZW1lbnQoY291bnRlcjogbnVtYmVyID0gMCkge1xuICAgIGlmKGNvdW50ZXIgPiA1MCkge1xuICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gbG9hZCB0aGUgbmV4dCBib2R5IGVsZW1lbnQuJyk7XG4gICAgfSBlbHNlIGlmKCQoJy5uZXh0LXdyYXBwZXIgLm5leHQtYm9keScpLmxlbmd0aCA8PSAwKSB7XG4gICAgICBjb3VudGVyICsrO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlck5leHRCb2R5RWxlbWVudChjb3VudGVyKSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmV4dC13cmFwcGVyIC5uZXh0LWJvZHknKS5odG1sKHRoaXMuZXN0aW1hdGVEYXRhKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
