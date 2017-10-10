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
var event_service_1 = require('../../core/event.service');
var data_service_1 = require('../../core/data.service');
var display_modal_service_1 = require('../../core/modal/display/display.modal.service');
var spinner_service_1 = require('../spinner/spinner.service');
var ToolbarComponent = (function () {
    function ToolbarComponent(_dataService, _eventService, _displayModal, _viewContainer, _spinner) {
        var _this = this;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._displayModal = _displayModal;
        this._viewContainer = _viewContainer;
        this._spinner = _spinner;
        this.isPageLoading = false;
        this.isDropDown = false;
        this._eventService.registerEvent('load_topbar_data', this, function (args) {
            var data = args[0];
            _this.isHelp = data.helpStatus;
            _this.isLiveHelp = data.liveHelpStatus;
            _this.helpIcon = data.helpIcon;
            _this.liveHelpIcon = data.liveHelpIcon;
            _this.logoIcon = data.logoIcon;
            _this.isPageLoading = true;
            _this.helpLinks = data.helpLink;
        });
    }
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this._eventService.unregisterEvent('load_topbar_data', this);
    };
    ToolbarComponent.prototype.drop = function () {
        this.isDropDown = this.isDropDown ? false : true;
    };
    ToolbarComponent.prototype.displayLink = function (link) {
        var _this = this;
        this._spinner.start();
        this.drop();
        this._dataService.get(link, false)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this._spinner.stop();
                _this._displayModal.openDialog(res._body, _this._viewContainer);
            }
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: ['toolbar.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, event_service_1.EventService, display_modal_service_1.DisplayModelService, core_1.ViewContainerRef, spinner_service_1.SpinnerService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBSU8sZUFBZSxDQUFDLENBQUE7QUFDdkIsOEJBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0QsNkJBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQsc0NBQW9DLGdEQUFnRCxDQUFDLENBQUE7QUFDckYsZ0NBQW9DLDRCQUE0QixDQUFDLENBQUE7QUFnQmpFO0lBWUMsMEJBQ1MsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsYUFBa0MsRUFDbEMsY0FBZ0MsRUFDaEMsUUFBd0I7UUFqQmxDLGlCQXFEQztRQXhDUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBRWhDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxVQUFDLElBQVM7WUFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM5QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksSUFBWTtRQUF4QixpQkFVQztRQVRBLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUN2QixTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ2xCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0QsQ0FBQztRQUNILENBQUMsRUFBRSxVQUFDLEtBQVUsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBMURGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O3dCQUFBO0lBc0RGLHVCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJEWSx3QkFBZ0IsbUJBcUQ1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T25EZXN0cm95LFxuXHRWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gICAgICAgIGZyb20gJy4uLy4uL2NvcmUvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi4vLi4vY29yZS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlzcGxheU1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvbW9kYWwvZGlzcGxheS9kaXNwbGF5Lm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSAgICAgIGZyb20gJy4uL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRMaXN0ZW5yIGV4dGVuZHMgT25EZXN0cm95IHtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSB0b29sYmFyIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgSUV2ZW50TGlzdGVuciwgT25EZXN0cm95IHtcblx0aXNQYWdlTG9hZGluZzogYm9vbGVhbjtcblx0aXNIZWxwOiBib29sZWFuO1xuXHRpc0xpdmVIZWxwOiBib29sZWFuO1xuXHRpc0Ryb3BEb3duOiBib29sZWFuO1xuXG5cdGhlbHBJY29uOiBzdHJpbmc7XG5cdGxpdmVIZWxwSWNvbjogc3RyaW5nO1xuXHRsb2dvSWNvbjogc3RyaW5nO1xuXG5cdGhlbHBMaW5rczogT2JqZWN0W107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2Rpc3BsYXlNb2RhbDogRGlzcGxheU1vZGVsU2VydmljZSxcblx0XHRwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgX3NwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlXG5cdFx0KSB7XG5cdFx0dGhpcy5pc1BhZ2VMb2FkaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5pc0Ryb3BEb3duID0gZmFsc2U7XG5cblx0XHR0aGlzLl9ldmVudFNlcnZpY2UucmVnaXN0ZXJFdmVudCgnbG9hZF90b3BiYXJfZGF0YScsIHRoaXMsIChhcmdzOiBhbnkpID0+IHtcblx0XHRcdGxldCBkYXRhID0gYXJnc1swXTtcblx0XHRcdHRoaXMuaXNIZWxwID0gZGF0YS5oZWxwU3RhdHVzO1xuXHRcdFx0dGhpcy5pc0xpdmVIZWxwID0gZGF0YS5saXZlSGVscFN0YXR1cztcblx0XHRcdHRoaXMuaGVscEljb24gPSBkYXRhLmhlbHBJY29uO1xuXHRcdFx0dGhpcy5saXZlSGVscEljb24gPSBkYXRhLmxpdmVIZWxwSWNvbjtcblx0XHRcdHRoaXMubG9nb0ljb24gPSBkYXRhLmxvZ29JY29uO1xuXHRcdFx0dGhpcy5pc1BhZ2VMb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMuaGVscExpbmtzID0gZGF0YS5oZWxwTGluaztcblx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuX2V2ZW50U2VydmljZS51bnJlZ2lzdGVyRXZlbnQoJ2xvYWRfdG9wYmFyX2RhdGEnLCB0aGlzKTtcblx0fVxuXG5cdGRyb3AoKSB7XG5cdFx0dGhpcy5pc0Ryb3BEb3duID0gdGhpcy5pc0Ryb3BEb3duID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0ZGlzcGxheUxpbmsobGluazogc3RyaW5nKSB7XG5cdFx0dGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuXHRcdHRoaXMuZHJvcCgpO1xuXHRcdHRoaXMuX2RhdGFTZXJ2aWNlLmdldChsaW5rLCBmYWxzZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICBcdHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgICAgICBcdHRoaXMuX2Rpc3BsYXlNb2RhbC5vcGVuRGlhbG9nKHJlcy5fYm9keSwgdGhpcy5fdmlld0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcblx0fVxufVxuXG4iXX0=
