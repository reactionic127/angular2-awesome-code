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
var model_1 = require('../core/model');
var index_1 = require('../shared/index');
var router_1 = require('@angular/router');
var data_service_1 = require('../core/data.service');
var damage_modal_service_1 = require('./modal/damage.modal.service');
var event_service_1 = require('../core/event.service');
var image_map_component_1 = require('../utilities/image-map/image-map.component');
var confirm_modal_service_1 = require('./modal/confirm.modal.service');
var CarMapComponent = (function () {
    function CarMapComponent(el, router, renderer, _dataService, _eventService, _viewContainer, _damageModelService, _confirmModelService) {
        this.el = el;
        this.router = router;
        this.renderer = renderer;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._viewContainer = _viewContainer;
        this._damageModelService = _damageModelService;
        this._confirmModelService = _confirmModelService;
        this.checkBookMark = new core_1.EventEmitter();
        this.showNextSeverity = new core_1.EventEmitter();
        this.eventChangeLocation = new core_1.EventEmitter();
        this.initEventData = new core_1.EventEmitter();
        this.backendApi = index_1.Config.API;
    }
    CarMapComponent.prototype.ngOnInit = function () { };
    CarMapComponent.prototype.ngOnChanges = function () {
        this.initComponent();
    };
    CarMapComponent.prototype.initComponent = function () {
        this.carMapProperties = new model_1.CoordiateModel();
        this.carMapStyle = new model_1.CanvasStyleModel();
        this.carMapProperties.x = 0;
        this.carMapProperties.y = 0;
        this.carMapStyle.bgColor = 'red';
        this.carMapStyle.bgOpacity = 0.6;
        this.carMapStyle.borderColor = 'black';
        this.carMapStyle.borderWidth = 1;
        this.carMapStyle.bgOverColor = 'blue';
        this.carMapStyle.bgOverOpacity = 0.6;
        this.carMapStyle.borderOverColor = 'black';
        this.carMapStyle.borderOverWidth = 1;
        this.markList = [];
        this.setData(this.mapData);
    };
    CarMapComponent.prototype.setData = function (res) {
        this.carMapProperties.x = res.data.width;
        this.carMapProperties.y = res.data.height;
    };
    CarMapComponent.prototype.insertMarkToList = function ($event) {
        for (var i = 0; i < this.markList.length; i++) {
            if ($event.id === this.markList[i].id) {
                return i;
            }
        }
        this.markList.push($event);
        return -1;
    };
    CarMapComponent.prototype.initMarkList = function (event) {
        if (event.length > 0) {
            this.markList = event;
            this.initEventData.emit(true);
        }
        else {
            this.markList = [];
            this.initEventData.emit(false);
        }
    };
    CarMapComponent.prototype.clickOnImage = function ($event) {
        var check = this.insertMarkToList($event);
        if (check !== -1) {
            this._confirmModelService.openDialog(this, check, this._viewContainer);
            return;
        }
        var value = $event.value;
        var autoPartId = value.AutoPartID;
        this._damageModelService.openDialog(autoPartId, this, this._viewContainer);
    };
    CarMapComponent.prototype.doneAutoPart = function (list) {
        if (list === void 0) { list = this.markList; }
        if (list.length > 0) {
            this.checkBookMark.emit(true);
        }
        else {
            this.checkBookMark.emit(false);
        }
    };
    CarMapComponent.prototype.selectAutoPart = function (event) {
        this.showNextSeverity.emit(event);
    };
    CarMapComponent.prototype.eventSwitchLocation = function (event) {
        this.eventChangeLocation.emit(event);
    };
    __decorate([
        core_1.ViewChild(image_map_component_1.ImageMapComponent), 
        __metadata('design:type', image_map_component_1.ImageMapComponent)
    ], CarMapComponent.prototype, "carImgMap", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CarMapComponent.prototype, "checkBookMark", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CarMapComponent.prototype, "showNextSeverity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CarMapComponent.prototype, "eventChangeLocation", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CarMapComponent.prototype, "initEventData", void 0);
    __decorate([
        core_1.Input('slug'), 
        __metadata('design:type', String)
    ], CarMapComponent.prototype, "slug", void 0);
    __decorate([
        core_1.Input('mapData'), 
        __metadata('design:type', Object)
    ], CarMapComponent.prototype, "mapData", void 0);
    CarMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'car-map',
            templateUrl: 'carmap.component.html',
            styleUrls: ['carmap.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, core_1.Renderer, data_service_1.DataService, event_service_1.EventService, core_1.ViewContainerRef, damage_modal_service_1.DamageModelService, confirm_modal_service_1.ConfirmModelService])
    ], CarMapComponent);
    return CarMapComponent;
}());
exports.CarMapComponent = CarMapComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvY2FybWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBVTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHNCQUMyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxzQkFBb0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RCx1QkFBb0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RCw2QkFBb0Msc0JBQXNCLENBQUMsQ0FBQTtBQUMzRCxxQ0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUNuRSw4QkFBb0MsdUJBQXVCLENBQUMsQ0FBQTtBQUM1RCxvQ0FBb0MsNENBQTRDLENBQUMsQ0FBQTtBQUNqRixzQ0FBb0MsK0JBQStCLENBQUMsQ0FBQTtBQWNwRTtJQWNFLHlCQUNVLEVBQWMsRUFDZCxNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsY0FBZ0MsRUFDaEMsbUJBQXVDLEVBQ3ZDLG9CQUF5QztRQVB6QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQXBCekMsa0JBQWEsR0FBUyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBTSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN6QyxrQkFBYSxHQUFTLElBQUksbUJBQVksRUFBRSxDQUFDO1FBbUJqRCxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQU0sQ0FBQyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVE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U0FBUyxDQUFDOztvREFBQTtJQWRuQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQXFIRixzQkFBQztBQUFELENBbkhBLEFBbUhDLElBQUE7QUFuSFksdUJBQWUsa0JBbUgzQixDQUFBIiwiZmlsZSI6ImFwcC9kYW1hZ2UvY2FybWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29yZGlhdGVNb2RlbCAsXG4gIENhbnZhc1N0eWxlTW9kZWwgfSAgZnJvbSAnLi4vY29yZS9tb2RlbCc7XG5cbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi4vY29yZS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFtYWdlTW9kZWxTZXJ2aWNlIH0gIGZyb20gJy4vbW9kYWwvZGFtYWdlLm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gICAgICAgIGZyb20gJy4uL2NvcmUvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZU1hcENvbXBvbmVudCB9ICAgZnJvbSAnLi4vdXRpbGl0aWVzL2ltYWdlLW1hcC9pbWFnZS1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1Nb2RlbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsL2NvbmZpcm0ubW9kYWwuc2VydmljZSc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBDYXJNYXBDb21wb25lbnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY2FyLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FybWFwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nhcm1hcC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoSW1hZ2VNYXBDb21wb25lbnQpIGNhckltZ01hcDpJbWFnZU1hcENvbXBvbmVudDtcbiAgQE91dHB1dCgpIGNoZWNrQm9va01hcmsgICAgICAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzaG93TmV4dFNldmVyaXR5ICAgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXZlbnRDaGFuZ2VMb2NhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGluaXRFdmVudERhdGEgICAgICAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgnc2x1ZycpIHNsdWc6IHN0cmluZztcbiAgQElucHV0KCdtYXBEYXRhJykgbWFwRGF0YTogYW55O1xuXG4gIGJhY2tlbmRBcGk6IHN0cmluZztcbiAgY2FyTWFwUHJvcGVydGllczogQ29vcmRpYXRlTW9kZWw7XG4gIGNhck1hcFN0eWxlOiBDYW52YXNTdHlsZU1vZGVsO1xuICBtYXJrTGlzdDogYW55W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2RhbWFnZU1vZGVsU2VydmljZTogRGFtYWdlTW9kZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NvbmZpcm1Nb2RlbFNlcnZpY2U6IENvbmZpcm1Nb2RlbFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5iYWNrZW5kQXBpID0gQ29uZmlnLkFQSTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmluaXRDb21wb25lbnQoKTtcbiAgfVxuXG4gIGluaXRDb21wb25lbnQoKSB7XG4gICAgdGhpcy5jYXJNYXBQcm9wZXJ0aWVzID0gbmV3IENvb3JkaWF0ZU1vZGVsKCk7XG4gICAgdGhpcy5jYXJNYXBTdHlsZSA9IG5ldyBDYW52YXNTdHlsZU1vZGVsKCk7XG4gICAgdGhpcy5jYXJNYXBQcm9wZXJ0aWVzLnggPSAwO1xuICAgIHRoaXMuY2FyTWFwUHJvcGVydGllcy55ID0gMDtcblxuICAgIHRoaXMuY2FyTWFwU3R5bGUuYmdDb2xvciA9ICdyZWQnO1xuICAgIHRoaXMuY2FyTWFwU3R5bGUuYmdPcGFjaXR5ID0gMC42O1xuICAgIHRoaXMuY2FyTWFwU3R5bGUuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgIHRoaXMuY2FyTWFwU3R5bGUuYm9yZGVyV2lkdGggPSAxO1xuICAgIHRoaXMuY2FyTWFwU3R5bGUuYmdPdmVyQ29sb3IgPSAnYmx1ZSc7XG4gICAgdGhpcy5jYXJNYXBTdHlsZS5iZ092ZXJPcGFjaXR5ID0gMC42O1xuICAgIHRoaXMuY2FyTWFwU3R5bGUuYm9yZGVyT3ZlckNvbG9yID0gJ2JsYWNrJztcbiAgICB0aGlzLmNhck1hcFN0eWxlLmJvcmRlck92ZXJXaWR0aCA9IDE7XG4gICAgdGhpcy5tYXJrTGlzdCA9IFtdO1xuICAgIHRoaXMuc2V0RGF0YSh0aGlzLm1hcERhdGEpO1xuICB9XG5cbiAgLypcbiAgc2V0IGJhY2tlbmQgZGF0YSB0byBsb2NhbCB2YXJpYWJsZXNcbiAgKi9cbiAgc2V0RGF0YShyZXM6IGFueSkge1xuICAgIHRoaXMuY2FyTWFwUHJvcGVydGllcy54ID0gcmVzLmRhdGEud2lkdGg7XG4gICAgdGhpcy5jYXJNYXBQcm9wZXJ0aWVzLnkgPSByZXMuZGF0YS5oZWlnaHQ7XG4gIH1cblxuICAvKlxuICBpbnNlcnQgdGhlIG1hcmsgdG8gdGhlIGxpc3RcbiAgKi9cbiAgaW5zZXJ0TWFya1RvTGlzdCgkZXZlbnQ6IGFueSkge1xuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubWFya0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKCRldmVudC5pZCA9PT0gdGhpcy5tYXJrTGlzdFtpXS5pZCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1hcmtMaXN0LnB1c2goJGV2ZW50KTtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKlxuICBpbml0IG1hcmsgbGlzdCBmcm9tIHRoZSBhcGlcbiAgKi9cbiAgaW5pdE1hcmtMaXN0KGV2ZW50OiBhbnkpIHtcbiAgICBpZihldmVudC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm1hcmtMaXN0ID0gZXZlbnQ7XG4gICAgICB0aGlzLmluaXRFdmVudERhdGEuZW1pdCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXJrTGlzdCA9IFtdO1xuICAgICAgdGhpcy5pbml0RXZlbnREYXRhLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gIGNsaWNrIGV2ZW50IG9uIGNhbnZhc1xuICAqL1xuICBjbGlja09uSW1hZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgY2hlY2sgPSB0aGlzLmluc2VydE1hcmtUb0xpc3QoJGV2ZW50KTtcbiAgICBpZihjaGVjayAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2NvbmZpcm1Nb2RlbFNlcnZpY2Uub3BlbkRpYWxvZyh0aGlzLCBjaGVjaywgdGhpcy5fdmlld0NvbnRhaW5lcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9ICgkZXZlbnQgYXMgYW55KS52YWx1ZTtcbiAgICBsZXQgYXV0b1BhcnRJZCA9ICh2YWx1ZSBhcyBhbnkpLkF1dG9QYXJ0SUQ7XG4gICAgdGhpcy5fZGFtYWdlTW9kZWxTZXJ2aWNlLm9wZW5EaWFsb2coYXV0b1BhcnRJZCwgdGhpcywgdGhpcy5fdmlld0NvbnRhaW5lcik7XG4gIH1cblxuICBkb25lQXV0b1BhcnQobGlzdCA9IHRoaXMubWFya0xpc3QpIHtcbiAgICBpZihsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hlY2tCb29rTWFyay5lbWl0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrQm9va01hcmsuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QXV0b1BhcnQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2hvd05leHRTZXZlcml0eS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGV2ZW50U3dpdGNoTG9jYXRpb24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZXZlbnRDaGFuZ2VMb2NhdGlvbi5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19
