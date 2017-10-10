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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var zip_component_1 = require('./zip.component');
var ZipModule = (function () {
    function ZipModule() {
    }
    ZipModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                forms_1.FormsModule],
            declarations: [zip_component_1.ZipComponent],
            exports: [zip_component_1.ZipComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ZipModule);
    return ZipModule;
}());
exports.ZipModule = ZipModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC96aXAvemlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBUy9DO0lBQUE7SUFBeUIsQ0FBQztJQVAxQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZO2dCQUN0QixtQkFBVyxDQUFDO1lBQ1osWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvemlwL3ppcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgWmlwQ29tcG9uZW50IH0gZnJvbSAnLi96aXAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtaaXBDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtaaXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgWmlwTW9kdWxlIHsgfVxuIl19
