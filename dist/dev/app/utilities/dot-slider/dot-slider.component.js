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
var DotSliderComponent = (function () {
    function DotSliderComponent(el) {
        this.sliderCounters = [];
        this.sliderBgColors = [];
        this.el = el;
        this.isPageLoading = false;
    }
    DotSliderComponent.prototype.ngOnInit = function () {
        this.isPageLoading = false;
        if (this.sliderCount && this.currentSliderCounter) {
            this.isPageLoading = true;
            this.initSlider(this.sliderCount, this.currentSliderCounter);
        }
    };
    DotSliderComponent.prototype.ngOnChanges = function () {
        console.log(this.currentSliderCounter, this.sliderCount);
        this.isPageLoading = false;
        if (this.sliderCount && this.currentSliderCounter) {
            this.isPageLoading = true;
            this.initSlider(this.sliderCount, this.currentSliderCounter);
        }
    };
    DotSliderComponent.prototype.initSlider = function (totalCount, currentCouter) {
        var sliderW = this.el.nativeElement.querySelector('.dot-wrapper').offsetWidth;
        var stepW = sliderW / (totalCount - 1);
        var eleLeft = -6;
        for (var i = 0; i < totalCount; i++) {
            this.sliderCounters[i] = eleLeft + stepW * i;
            if (currentCouter > i) {
                this.sliderBgColors[i] = '#3497fd';
            }
            else {
                this.sliderBgColors[i] = '';
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DotSliderComponent.prototype, "sliderCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DotSliderComponent.prototype, "currentSliderCounter", void 0);
    DotSliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dot-slider',
            templateUrl: 'dot-slider.component.html',
            styleUrls: ['dot-slider.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DotSliderComponent);
    return DotSliderComponent;
}());
exports.DotSliderComponent = DotSliderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsaXRpZXMvZG90LXNsaWRlci9kb3Qtc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBS3NCLGVBQWUsQ0FBQyxDQUFBO0FBY3RDO0lBVUksNEJBQVksRUFBYztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFBZSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxVQUFrQixFQUFFLGFBQXFCO1FBQ2hELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDOUUsSUFBSSxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDdkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQTdDRDtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0VBQUE7SUFUWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDOzswQkFBQTtJQWlERix5QkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1ksMEJBQWtCLHFCQStDOUIsQ0FBQSIsImZpbGUiOiJhcHAvdXRpbGl0aWVzL2RvdC1zbGlkZXIvZG90LXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0ICQ6IGFueTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIERvdFNsaWRlckNvbXBvbmVudC5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZG90LXNsaWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdkb3Qtc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZG90LXNsaWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEb3RTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgc2xpZGVyQ291bnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBjdXJyZW50U2xpZGVyQ291bnRlcjogbnVtYmVyO1xuXG4gICAgaXNQYWdlTG9hZGluZzogYm9vbGVhbjtcblxuICAgIHNsaWRlckNvdW50ZXJzOiBudW1iZXJbXTtcbiAgICBzbGlkZXJCZ0NvbG9yczogc3RyaW5nW107XG4gICAgZWw6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnNsaWRlckNvdW50ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2xpZGVyQmdDb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmlzUGFnZUxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc1BhZ2VMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMuc2xpZGVyQ291bnQgJiYgdGhpcy5jdXJyZW50U2xpZGVyQ291bnRlcikge1xuICAgICAgICAgICAgdGhpcy5pc1BhZ2VMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNsaWRlcih0aGlzLnNsaWRlckNvdW50LCB0aGlzLmN1cnJlbnRTbGlkZXJDb3VudGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge2NvbnNvbGUubG9nKHRoaXMuY3VycmVudFNsaWRlckNvdW50ZXIsIHRoaXMuc2xpZGVyQ291bnQpO1xuICAgICAgICB0aGlzLmlzUGFnZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5zbGlkZXJDb3VudCAmJiB0aGlzLmN1cnJlbnRTbGlkZXJDb3VudGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlzUGFnZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbml0U2xpZGVyKHRoaXMuc2xpZGVyQ291bnQsIHRoaXMuY3VycmVudFNsaWRlckNvdW50ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFNsaWRlcih0b3RhbENvdW50OiBudW1iZXIsIGN1cnJlbnRDb3V0ZXI6IG51bWJlcikge1xuICAgICAgICBsZXQgc2xpZGVyVyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZG90LXdyYXBwZXInKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHN0ZXBXID0gc2xpZGVyVyAvICh0b3RhbENvdW50LTEpO1xuXG4gICAgICAgIGxldCBlbGVMZWZ0ID0gLTY7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRvdGFsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJDb3VudGVyc1tpXSA9IGVsZUxlZnQgKyBzdGVwVyAqIGk7XG4gICAgICAgICAgICBpZihjdXJyZW50Q291dGVyID4gaSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyQmdDb2xvcnNbaV0gPSAnIzM0OTdmZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyQmdDb2xvcnNbaV0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
