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
var alert_modal_service_1 = require('./modal/alert.modal.service');
var data_service_1 = require('../core/data.service');
var store_service_1 = require('../core/store.service');
var event_service_1 = require('../core/event.service');
var index_1 = require('../shared/index');
var DamageComponent = (function () {
    function DamageComponent(activeRoute, router, _storeService, _eventService, _viewContainer, _alertModelService, _dataService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this._storeService = _storeService;
        this._eventService = _eventService;
        this._viewContainer = _viewContainer;
        this._alertModelService = _alertModelService;
        this._dataService = _dataService;
        this.bIsNext = false;
        this.isLoading = false;
        this.bIsSeverity = false;
        this.bIsStart = false;
    }
    DamageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendApi = index_1.Config.API;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.slug = params['id'];
            _this.loadData('exterior');
        });
    };
    DamageComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    DamageComponent.prototype.loadData = function (strLocation) {
        var _this = this;
        var postData = {
            code: 200,
            data: {
                slug: this.slug,
                location: strLocation
            }
        };
        this._dataService.post('v1/data/birdseyeauto', postData)
            .subscribe(function (res) {
            _this.mapData = res;
            if (!_this.bIsStart) {
                _this._alertModelService.openDialog(0, res, _this._viewContainer);
            }
            _this.totoalStep = res.data.steps.totalStep;
            _this.currentStep = res.data.steps.currentStep;
            var helpIcon = _this.backendApi + res.data.help.icon;
            var liveHelpIcon = _this.backendApi + res.data.liveHelp.icon;
            var logoIcon = _this.backendApi + res.data.ui.logo;
            var helpStatus, liveHelpStatus;
            if (res.data.liveHelp.on === 1) {
                liveHelpStatus = true;
            }
            else {
                liveHelpStatus = false;
            }
            if (res.data.help.on === 1) {
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
                helpLink: res.data.help.link
            });
            _this.isLoading = true;
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    DamageComponent.prototype.eventChangeLocation = function (event) {
        this.bIsStart = true;
        this.isLoading = false;
        this.loadData(event);
    };
    DamageComponent.prototype.checkNextAbility = function ($event) {
        if ($event) {
            this._alertModelService.openDialog(1, this.mapData, this._viewContainer);
            this.bIsNext = true;
            this.bIsSeverity = false;
        }
    };
    DamageComponent.prototype.initEventData = function (event) {
        this.waitNextArea(event);
    };
    DamageComponent.prototype.waitNextArea = function (isAvailable, nCount) {
        var _this = this;
        if (nCount === void 0) { nCount = 0; }
        if (nCount > 50) {
            console.log('Time out to wait the next area in the damage page.');
        }
        else if (!this.nextAreaElement) {
            nCount++;
            setTimeout(function () { return _this.waitNextArea(isAvailable, nCount); }, 100);
        }
        else {
            this.bIsNext = isAvailable;
        }
    };
    DamageComponent.prototype.next = function () {
        this.router.navigate(['/photo', this.slug]);
    };
    DamageComponent.prototype.showNextSeverity = function (event) {
        this.bIsSeverity = event['status'];
        if (this.bIsSeverity) {
            this.strBtnDesc = event['desc'] + " (" + event['side'] + ")";
        }
    };
    DamageComponent.prototype.onNextSeverity = function () {
        this._eventService.emit('nex_severity_event');
    };
    __decorate([
        core_1.Input('product'), 
        __metadata('design:type', Object)
    ], DamageComponent.prototype, "product", void 0);
    __decorate([
        core_1.ViewChild('nextAreaElement'), 
        __metadata('design:type', Object)
    ], DamageComponent.prototype, "nextAreaElement", void 0);
    DamageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-damage',
            templateUrl: 'damage.component.html',
            styleUrls: ['damage.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, store_service_1.StoreService, event_service_1.EventService, core_1.ViewContainerRef, alert_modal_service_1.AlertModelService, data_service_1.DataService])
    ], DamageComponent);
    return DamageComponent;
}());
exports.DamageComponent = DamageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvZGFtYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBSzBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELG9DQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2hFLDZCQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3pELDhCQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDhCQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELHNCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBYXREO0lBbUJDLHlCQUNXLFdBQTJCLEVBQzNCLE1BQWMsRUFDZCxhQUEyQixFQUMzQixhQUEyQixFQUMzQixjQUFnQyxFQUNoQyxrQkFBcUMsRUFDckMsWUFBeUI7UUFOekIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUYsa0NBQVEsR0FBUjtRQUFBLGlCQU9FO1FBTkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFNLENBQUMsR0FBRyxDQUFDO1FBRTdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNqRCxLQUFJ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TyxHQUFHLFdBQVcsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLEtBQVU7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBSSxLQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBTyxLQUFhLENBQUMsTUFBTSxDQUFDLFVBQU0sS0FBYSxDQUFDLE1BQU0sQ0FBQyxNQUFHLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBekhEO1FBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0RBQUE7SUFDakI7UUFBQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzs0REFBQTtJQXhCL0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzs7dUJBQUE7SUE0SUYsc0JBQUM7QUFBRCxDQTFJQSxBQTBJQyxJQUFBO0FBMUlZLHVCQUFlLGtCQTBJM0IsQ0FBQSIsImZpbGUiOiJhcHAvZGFtYWdlL2RhbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsZXJ0TW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC9hbGVydC5tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gICAgICAgZnJvbSAnLi4vY29yZS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gICAgICBmcm9tICcuLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gICAgICBmcm9tICcuLi9jb3JlL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnIH0gICAgICAgICAgICAgIGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBEYW1hZ2VDb21wb25lbnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtZGFtYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGFtYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0c2x1Zzogc3RyaW5nO1xuICBzdHJCdG5EZXNjOiBzdHJpbmc7XG4gIGJhY2tlbmRBcGk6IHN0cmluZztcblxuXHRzdWI6IGFueTtcbiAgX21vZGFsOiBhbnk7XG4gIG1hcERhdGE6IGFueTtcblxuICBiSXNOZXh0OiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGJJc1NldmVyaXR5OiBib29sZWFuO1xuICBiSXNTdGFydDogYm9vbGVhbjtcblxuICB0b3RvYWxTdGVwOiBudW1iZXI7XG4gIGN1cnJlbnRTdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZHVjdCcpIHByb2R1Y3Q6IGFueTtcbiAgQFZpZXdDaGlsZCgnbmV4dEFyZWFFbGVtZW50JykgbmV4dEFyZWFFbGVtZW50OiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmVSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9zdG9yZVNlcnZpY2U6IFN0b3JlU2VydmljZSxcbiAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2FsZXJ0TW9kZWxTZXJ2aWNlOiBBbGVydE1vZGVsU2VydmljZSxcbiAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuYklzTmV4dCA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5iSXNTZXZlcml0eSA9IGZhbHNlO1xuICAgIHRoaXMuYklzU3RhcnQgPSBmYWxzZTtcbiAgfVxuXG5cdG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFja2VuZEFwaSA9IENvbmZpZy5BUEk7XG4gICAgLy8gYWN0aXZlUm91dGUgcGFyYW1cbiAgICB0aGlzLnN1YiA9IHRoaXMuYWN0aXZlUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PiB7XG4gICAgICB0aGlzLnNsdWcgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLmxvYWREYXRhKCdleHRlcmlvcicpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZERhdGEoc3RyTG9jYXRpb246IHN0cmluZykge1xuICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxuICAgICAgICBsb2NhdGlvbjogc3RyTG9jYXRpb25cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdCgndjEvZGF0YS9iaXJkc2V5ZWF1dG8nLCBwb3N0RGF0YSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IHJlcztcbiAgICAgICAgaWYoIXRoaXMuYklzU3RhcnQpIHtcbiAgICAgICAgICB0aGlzLl9hbGVydE1vZGVsU2VydmljZS5vcGVuRGlhbG9nKDAsIHJlcywgdGhpcy5fdmlld0NvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdG9hbFN0ZXAgPSByZXMuZGF0YS5zdGVwcy50b3RhbFN0ZXA7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSByZXMuZGF0YS5zdGVwcy5jdXJyZW50U3RlcDtcbiAgICAgICAgbGV0IGhlbHBJY29uID0gdGhpcy5iYWNrZW5kQXBpICsgcmVzLmRhdGEuaGVscC5pY29uO1xuICAgICAgICBsZXQgbGl2ZUhlbHBJY29uID0gdGhpcy5iYWNrZW5kQXBpICsgcmVzLmRhdGEubGl2ZUhlbHAuaWNvbjtcbiAgICAgICAgbGV0IGxvZ29JY29uID0gdGhpcy5iYWNrZW5kQXBpICsgcmVzLmRhdGEudWkubG9nbztcbiAgICAgICAgbGV0IGhlbHBTdGF0dXM6IGJvb2xlYW4sIGxpdmVIZWxwU3RhdHVzOiBib29sZWFuO1xuICAgICAgICBpZihyZXMuZGF0YS5saXZlSGVscC5vbiA9PT0gMSkge1xuICAgICAgICAgIGxpdmVIZWxwU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXZlSGVscFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVzLmRhdGEuaGVscC5vbiA9PT0gMSkge1xuICAgICAgICAgIGhlbHBTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlbHBTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5lbWl0KCdsb2FkX3RvcGJhcl9kYXRhJywge1xuICAgICAgICAgIGhlbHBJY29uOiBoZWxwSWNvbixcbiAgICAgICAgICBoZWxwU3RhdHVzOiBoZWxwU3RhdHVzLFxuICAgICAgICAgIGxpdmVIZWxwSWNvbjogbGl2ZUhlbHBJY29uLFxuICAgICAgICAgIGxpdmVIZWxwU3RhdHVzOiBsaXZlSGVscFN0YXR1cyxcbiAgICAgICAgICBsb2dvSWNvbjogbG9nb0ljb24sXG4gICAgICAgICAgaGVscExpbms6IHJlcy5kYXRhLmhlbHAubGlua1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICB9XG5cbiAgZXZlbnRDaGFuZ2VMb2NhdGlvbihldmVudDogYW55KSB7XG4gICAgdGhpcy5iSXNTdGFydCA9IHRydWU7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWREYXRhKGV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrTmV4dEFiaWxpdHkoJGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLl9hbGVydE1vZGVsU2VydmljZS5vcGVuRGlhbG9nKDEsIHRoaXMubWFwRGF0YSwgdGhpcy5fdmlld0NvbnRhaW5lcik7XG4gICAgICB0aGlzLmJJc05leHQgPSB0cnVlO1xuICAgICAgdGhpcy5iSXNTZXZlcml0eSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGluaXRFdmVudERhdGEoZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLndhaXROZXh0QXJlYShldmVudCk7XG4gIH1cblxuICB3YWl0TmV4dEFyZWEoaXNBdmFpbGFibGU6IGJvb2xlYW4sIG5Db3VudDogbnVtYmVyID0gMCkge1xuICAgIGlmKG5Db3VudCA+IDUwKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGltZSBvdXQgdG8gd2FpdCB0aGUgbmV4dCBhcmVhIGluIHRoZSBkYW1hZ2UgcGFnZS4nKTtcbiAgICB9IGVsc2UgaWYoIXRoaXMubmV4dEFyZWFFbGVtZW50KSB7XG4gICAgICBuQ291bnQgKys7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FpdE5leHRBcmVhKGlzQXZhaWxhYmxlLCBuQ291bnQpLCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJJc05leHQgPSBpc0F2YWlsYWJsZTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Bob3RvJywgdGhpcy5zbHVnXSk7XG4gIH1cblxuICBzaG93TmV4dFNldmVyaXR5KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmJJc1NldmVyaXR5ID0gKGV2ZW50IGFzIGFueSlbJ3N0YXR1cyddO1xuICAgIGlmKHRoaXMuYklzU2V2ZXJpdHkpIHtcbiAgICAgIHRoaXMuc3RyQnRuRGVzYyA9IGAkeyhldmVudCBhcyBhbnkpWydkZXNjJ119ICgkeyhldmVudCBhcyBhbnkpWydzaWRlJ119KWA7XG4gICAgfVxuICB9XG5cbiAgb25OZXh0U2V2ZXJpdHkoKSB7XG4gICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmVtaXQoJ25leF9zZXZlcml0eV9ldmVudCcpO1xuICB9XG59XG4iXX0=
