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
var image_map_component_1 = require('../utilities/image-map/image-map.component');
var DamageLocationComponent = (function () {
    function DamageLocationComponent() {
        this.getAnswerId = new core_1.EventEmitter();
        this.loadImage = new core_1.EventEmitter();
    }
    DamageLocationComponent.prototype.ngOnInit = function () {
        this.locationMapData = this.damageLocationData;
        this.locationMapProperties = new model_1.CoordiateModel();
        this.locationMapProperties.x = 270;
        this.locationMapProperties.y = 257;
        this.locationLoading = true;
        this.locationMapStyle = new model_1.CanvasStyleModel();
        this.locationMapStyle.bgColor = 'blue';
        this.locationMapStyle.bgOpacity = 0.75;
        this.locationMapStyle.borderColor = 'black';
        this.locationMapStyle.borderWidth = 2;
        this.locationMapStyle.bgOverColor = 'blue';
        this.locationMapStyle.bgOverOpacity = 0.5;
        this.locationMapStyle.borderOverColor = 'black';
        this.locationMapStyle.borderOverWidth = 2;
    };
    DamageLocationComponent.prototype.clickOnImage = function ($event) {
        var value = $event.value;
        var id = $event.id;
        this.getAnswerId.emit({
            answer: value,
            id: id
        });
    };
    DamageLocationComponent.prototype.updateLocation = function (locationList) {
        this.myImgMapHandler.updatePolygon(locationList);
    };
    DamageLocationComponent.prototype.loadedImage = function () {
        this.loadImage.emit();
    };
    __decorate([
        core_1.ViewChild(image_map_component_1.ImageMapComponent), 
        __metadata('design:type', image_map_component_1.ImageMapComponent)
    ], DamageLocationComponent.prototype, "myImgMapHandler", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DamageLocationComponent.prototype, "damageLocationData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DamageLocationComponent.prototype, "getAnswerId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DamageLocationComponent.prototype, "loadImage", void 0);
    DamageLocationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'damage-location',
            templateUrl: 'damage-location.component.html',
            styleUrls: ['damage-location.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DamageLocationComponent);
    return DamageLocationComponent;
}());
exports.DamageLocationComponent = DamageLocationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvZGFtYWdlLWxvY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBS2dCLGVBQWUsQ0FBQyxDQUFBO0FBQ2hDLHNCQUFrRCxlQUFlLENBQUMsQ0FBQTtBQUNsRSxvQ0FBbUMsNENBQTRDLENBQUMsQ0FBQTtBQWFoRjtJQUFBO1FBR1ksZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUE2QzNDLENBQUM7SUF2Q0MsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQy9DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHNCQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx3QkFBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFLRCw4Q0FBWSxHQUFaLFVBQWEsTUFBVztRQUN0QixJQUFJLEtBQUssR0FBSSxNQUFjLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksRUFBRSxHQUFJLE1BQWMsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUFFLEtBQUs7WUFDYixFQUFFLEVBQUUsRUFBRTtTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxnREFBYyxHQUFkLFVBQWUsWUFBbUI7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUEvQ0Q7UUFBQyxnQkFBUyxDQUFDLHVDQUFpQixDQUFDOztvRUFBQTtJQUM3QjtRQUFDLFlBQUssRUFBRTs7dUVBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7Z0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7OERBQUE7SUFYWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7OytCQUFBO0lBbURGLDhCQUFDO0FBQUQsQ0FqREEsQUFpREMsSUFBQTtBQWpEWSwrQkFBdUIsMEJBaURuQyxDQUFBIiwiZmlsZSI6ImFwcC9kYW1hZ2UvZGFtYWdlLWxvY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29vcmRpYXRlTW9kZWwsIENhbnZhc1N0eWxlTW9kZWwgfSAgZnJvbSAnLi4vY29yZS9tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZU1hcENvbXBvbmVudCB9ICBmcm9tICcuLi91dGlsaXRpZXMvaW1hZ2UtbWFwL2ltYWdlLW1hcC5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQ2FyTWFwQ29tcG9uZW50LlxuICovXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2RhbWFnZS1sb2NhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnZGFtYWdlLWxvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhbWFnZS1sb2NhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYW1hZ2VMb2NhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoSW1hZ2VNYXBDb21wb25lbnQpIG15SW1nTWFwSGFuZGxlcjogSW1hZ2VNYXBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGRhbWFnZUxvY2F0aW9uRGF0YTogT2JqZWN0O1xuICBAT3V0cHV0KCkgZ2V0QW5zd2VySWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2FkSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGxvY2F0aW9uTWFwRGF0YTogT2JqZWN0O1xuICBsb2NhdGlvbk1hcFByb3BlcnRpZXM6IENvb3JkaWF0ZU1vZGVsO1xuICBsb2NhdGlvbk1hcFN0eWxlOiBDYW52YXNTdHlsZU1vZGVsO1xuICBsb2NhdGlvbkxvYWRpbmc6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2NhdGlvbk1hcERhdGEgPSB0aGlzLmRhbWFnZUxvY2F0aW9uRGF0YTtcbiAgICB0aGlzLmxvY2F0aW9uTWFwUHJvcGVydGllcyA9IG5ldyBDb29yZGlhdGVNb2RlbCgpO1xuICAgIHRoaXMubG9jYXRpb25NYXBQcm9wZXJ0aWVzLnggPSAyNzA7XG4gICAgdGhpcy5sb2NhdGlvbk1hcFByb3BlcnRpZXMueSA9IDI1NztcbiAgICB0aGlzLmxvY2F0aW9uTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2NhdGlvbk1hcFN0eWxlID0gbmV3IENhbnZhc1N0eWxlTW9kZWwoKTtcbiAgICB0aGlzLmxvY2F0aW9uTWFwU3R5bGUuYmdDb2xvciA9ICdibHVlJztcbiAgICB0aGlzLmxvY2F0aW9uTWFwU3R5bGUuYmdPcGFjaXR5ID0gMC43NTtcbiAgICB0aGlzLmxvY2F0aW9uTWFwU3R5bGUuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgIHRoaXMubG9jYXRpb25NYXBTdHlsZS5ib3JkZXJXaWR0aCA9IDI7XG4gICAgdGhpcy5sb2NhdGlvbk1hcFN0eWxlLmJnT3ZlckNvbG9yID0gJ2JsdWUnO1xuICAgIHRoaXMubG9jYXRpb25NYXBTdHlsZS5iZ092ZXJPcGFjaXR5ID0gMC41O1xuICAgIHRoaXMubG9jYXRpb25NYXBTdHlsZS5ib3JkZXJPdmVyQ29sb3IgPSAnYmxhY2snO1xuICAgIHRoaXMubG9jYXRpb25NYXBTdHlsZS5ib3JkZXJPdmVyV2lkdGggPSAyO1xuICB9XG5cbiAgLypcbiAgY2xpY2sgZXZlbnQgb24gY2FudmFzXG4gICovXG4gIGNsaWNrT25JbWFnZSgkZXZlbnQ6IGFueSkge1xuICAgIGxldCB2YWx1ZSA9ICgkZXZlbnQgYXMgYW55KS52YWx1ZTtcbiAgICBsZXQgaWQgPSAoJGV2ZW50IGFzIGFueSkuaWQ7XG4gICAgdGhpcy5nZXRBbnN3ZXJJZC5lbWl0KHtcbiAgICAgIGFuc3dlcjogdmFsdWUsXG4gICAgICBpZDogaWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gIGRlbGV0ZSB0aGUgc2VsZWN0IGxvY2F0aW9uXG4gICovXG4gIHVwZGF0ZUxvY2F0aW9uKGxvY2F0aW9uTGlzdDogYW55W10pIHtcbiAgICB0aGlzLm15SW1nTWFwSGFuZGxlci51cGRhdGVQb2x5Z29uKGxvY2F0aW9uTGlzdCk7XG4gIH1cblxuICBsb2FkZWRJbWFnZSgpIHtcbiAgICB0aGlzLmxvYWRJbWFnZS5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==
