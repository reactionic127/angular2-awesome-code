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
var LevelSliderComponent = (function () {
    function LevelSliderComponent(elRef) {
        this.elRef = elRef;
        this.STARTCOLOR = [255, 177, 0];
        this.ENDCOLOR = [255, 0, 0];
        this.onLChange = new core_1.EventEmitter();
        this.isLoading = false;
    }
    LevelSliderComponent.prototype.ngOnChanges = function () {
        this.makeLevelBar();
    };
    LevelSliderComponent.prototype.makeLevelBar = function () {
        var totalWidth = this.damageLevelScreen.nativeElement.offsetWidth;
        var total = this.max - this.min;
        total++;
        var marginWidth = 2;
        this.barWidth = (totalWidth - total * marginWidth) / total;
        this.values = [];
        this.colors = [];
        this.gradients = [];
        for (var i = 0; i <= total; i++) {
            var color = this.generateColor(i, total);
            console.log(color);
            this.colors.push(color);
        }
        for (var i = this.min; i <= this.max; i++) {
            this.values.push(i);
            var gradient = this.generateBarStyle(i);
            this.gradients.push(gradient);
        }
        this.isLoading = true;
    };
    LevelSliderComponent.prototype.generateColor = function (currentValue, total) {
        var r, g, b, rw, gw, bw;
        rw = (this.STARTCOLOR[0] - this.ENDCOLOR[0]) / total;
        gw = (this.STARTCOLOR[1] - this.ENDCOLOR[1]) / total;
        bw = (this.STARTCOLOR[2] - this.ENDCOLOR[2]) / total;
        r = this.STARTCOLOR[0] - rw * currentValue;
        g = this.STARTCOLOR[1] - gw * currentValue;
        b = this.STARTCOLOR[2] - bw * currentValue;
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        var color = 'rgb(' + r;
        color += ',';
        color += g;
        color += ',';
        color += b;
        color += ')';
        return color;
    };
    LevelSliderComponent.prototype.generateBarStyle = function (index) {
        index = index - this.min;
        var style = 'linear-gradient(to right,';
        style += this.colors[index];
        style += ',';
        style += this.colors[index + 1];
        style += ')';
        return style;
    };
    LevelSliderComponent.prototype.selectChart = function (value) {
        this.onLChange.emit({ value: value });
        this.selectValue = value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LevelSliderComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LevelSliderComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LevelSliderComponent.prototype, "selectValue", void 0);
    __decorate([
        core_1.ViewChild('damageLevelScreen'), 
        __metadata('design:type', core_1.ElementRef)
    ], LevelSliderComponent.prototype, "damageLevelScreen", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LevelSliderComponent.prototype, "onLChange", void 0);
    LevelSliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'level-slider',
            templateUrl: 'level-slider.component.html',
            styleUrls: ['level-slider.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LevelSliderComponent);
    return LevelSliderComponent;
}());
exports.LevelSliderComponent = LevelSliderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsaXRpZXMvbGV2ZWwtc2xpZGVyL2xldmVsLXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQU9zQixlQUFlLENBQUMsQ0FBQTtBQWN0QztJQW1CRSw4QkFBb0IsS0FBZ0I7UUFBaEIsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUxwQyxlQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFYixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFHdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxFQUFHLENBQUM7UUFDVCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUMsV0FBVyxDQUFDLEdBQUMsS0FBSyxDQUFDO1FBRXZELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRyxFQUFFLENB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Q0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUF6RkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBQ1I7UUFBQyxnQkFBUyxDQUFDLG1CQUFtQixDQUFDOzttRUFBQTtJQWEvQjtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUF4Qlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7NEJBQUE7SUE2RkYsMkJBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLDRCQUFvQix1QkEyRmhDLENBQUEiLCJmaWxlIjoiYXBwL3V0aWxpdGllcy9sZXZlbC1zbGlkZXIvbGV2ZWwtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgJDogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSW1hZ2VNYXBDb21wb25lbnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbGV2ZWwtc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdsZXZlbC1zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGV2ZWwtc2xpZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExldmVsU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xuICBASW5wdXQoKSBzZWxlY3RWYWx1ZTogbnVtYmVyO1xuICBAVmlld0NoaWxkKCdkYW1hZ2VMZXZlbFNjcmVlbicpIGRhbWFnZUxldmVsU2NyZWVuOiBFbGVtZW50UmVmO1xuXG4gIHZhbHVlczogbnVtYmVyW107XG4gIGJhcldpZHRoOiBudW1iZXI7XG5cbiAgY29sb3JzOiBzdHJpbmdbXTtcbiAgZ3JhZGllbnRzOiBzdHJpbmdbXTtcblxuICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgU1RBUlRDT0xPUiA9IFsyNTUsIDE3NywgMF07XG4gIEVORENPTE9SID0gWzI1NSwgMCwgMF07XG5cbiAgQE91dHB1dCgpIG9uTENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOkVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5tYWtlTGV2ZWxCYXIoKTtcbiAgfVxuXG4gIG1ha2VMZXZlbEJhcigpIHtcbiAgICBsZXQgdG90YWxXaWR0aCA9IHRoaXMuZGFtYWdlTGV2ZWxTY3JlZW4ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgdG90YWwgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuICAgIHRvdGFsICsrO1xuICAgIGxldCBtYXJnaW5XaWR0aCA9IDI7XG4gICAgdGhpcy5iYXJXaWR0aCA9ICh0b3RhbFdpZHRoIC0gdG90YWwqbWFyZ2luV2lkdGgpL3RvdGFsO1xuXG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB0aGlzLmNvbG9ycyA9IFtdO1xuICAgIHRoaXMuZ3JhZGllbnRzID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRvdGFsOyBpICsrKSB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLmdlbmVyYXRlQ29sb3IoaSx0b3RhbCk7XG4gICAgICBjb25zb2xlLmxvZyhjb2xvcik7XG4gICAgICB0aGlzLmNvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSB0aGlzLm1pbjsgaSA8PSB0aGlzLm1heDsgaSArKykge1xuICAgICAgdGhpcy52YWx1ZXMucHVzaChpKTtcbiAgICAgIGxldCBncmFkaWVudCA9IHRoaXMuZ2VuZXJhdGVCYXJTdHlsZShpKTtcbiAgICAgIHRoaXMuZ3JhZGllbnRzLnB1c2goZ3JhZGllbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGdlbmVyYXRlQ29sb3IoY3VycmVudFZhbHVlOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpIHtcbiAgICBsZXQgcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgcnc6IG51bWJlciwgZ3c6IG51bWJlciwgYnc6IG51bWJlcjtcbiAgICBydyA9ICh0aGlzLlNUQVJUQ09MT1JbMF0gLSB0aGlzLkVORENPTE9SWzBdKSAvIHRvdGFsO1xuICAgIGd3ID0gKHRoaXMuU1RBUlRDT0xPUlsxXSAtIHRoaXMuRU5EQ09MT1JbMV0pIC8gdG90YWw7XG4gICAgYncgPSAodGhpcy5TVEFSVENPTE9SWzJdIC0gdGhpcy5FTkRDT0xPUlsyXSkgLyB0b3RhbDtcblxuICAgIHIgPSB0aGlzLlNUQVJUQ09MT1JbMF0gLSBydyAqIGN1cnJlbnRWYWx1ZTtcbiAgICBnID0gdGhpcy5TVEFSVENPTE9SWzFdIC0gZ3cgKiBjdXJyZW50VmFsdWU7XG4gICAgYiA9IHRoaXMuU1RBUlRDT0xPUlsyXSAtIGJ3ICogY3VycmVudFZhbHVlO1xuXG4gICAgciA9IE1hdGguZmxvb3Iocik7XG4gICAgZyA9IE1hdGguZmxvb3IoZyk7XG4gICAgYiA9IE1hdGguZmxvb3IoYik7XG5cbiAgICBsZXQgY29sb3IgPSAncmdiKCcgKyByO1xuICAgIGNvbG9yICs9ICcsJztcbiAgICBjb2xvciArPSBnO1xuICAgIGNvbG9yICs9ICcsJztcbiAgICBjb2xvciArPSBiO1xuICAgIGNvbG9yICs9ICcpJztcblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGdlbmVyYXRlQmFyU3R5bGUoaW5kZXg6IG51bWJlcikge1xuICAgIGluZGV4ID0gaW5kZXggLSB0aGlzLm1pbjtcbiAgICBsZXQgc3R5bGUgPSAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCc7XG4gICAgc3R5bGUgKz0gIHRoaXMuY29sb3JzW2luZGV4XTtcbiAgICBzdHlsZSArPSAgJywnO1xuICAgIHN0eWxlICs9ICB0aGlzLmNvbG9yc1tpbmRleCsxXTtcbiAgICBzdHlsZSArPSAgJyknO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHNlbGVjdENoYXJ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLm9uTENoYW5nZS5lbWl0KHt2YWx1ZTogdmFsdWV9KTtcbiAgICB0aGlzLnNlbGVjdFZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==
