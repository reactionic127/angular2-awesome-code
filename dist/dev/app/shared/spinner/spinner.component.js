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
var spinner_service_1 = require('./spinner.service');
var SpinnerComponent = (function () {
    function SpinnerComponent(spinner) {
        var _this = this;
        spinner.status.subscribe(function (result) {
            _this.active = result.status;
            _this.type = result.type;
        });
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        this.setLoadGiftStyle();
    };
    SpinnerComponent.prototype.setLoadGiftStyle = function (count) {
        var _this = this;
        if (count === void 0) { count = 0; }
        if (count > 50) {
            console.log('Fail to load the loading gift');
        }
        else if ($('.loading-spinner').length <= 0) {
            count++;
            setTimeout(function () { return _this.setLoadGiftStyle(count); }, 50);
        }
        else {
            var left = '';
            var top_1 = '';
            if (this.type === 0) {
                left = '-25px';
                top_1 = '-25px';
            }
            else {
                left = '-100px';
                top_1 = '-25px';
            }
            $('.loading-spinner').css('margin-left', left);
            $('.loading-spinner').css('margin-top', top_1);
        }
    };
    SpinnerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'spinner-component',
            templateUrl: 'spinner.component.html',
            styleUrls: ['spinner.component.css'],
        }), 
        __metadata('design:paramtypes', [spinner_service_1.SpinnerService])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBU25EO0lBSUUsMEJBQW1CLE9BQXVCO1FBSjVDLGlCQW1DQztRQTlCRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBSSxNQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUksTUFBYyxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFlO1FBQWhDLGlCQW1CQztRQW5CZ0IscUJBQWUsR0FBZixTQUFlO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsS0FBSyxFQUFHLENBQUM7WUFDVCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLEtBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ2YsS0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNoQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsS0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNoQixDQUFDO1lBQ0QsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBeENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzs7d0JBQUE7SUFvQ0YsdUJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHdCQUFnQixtQkFtQzVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzcGlubmVyLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzcGlubmVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gIHB1YmxpYyB0eXBlOiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlKSB7XG4gICAgc3Bpbm5lci5zdGF0dXMuc3Vic2NyaWJlKChyZXN1bHQ6IE9iamVjdCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSAocmVzdWx0IGFzIGFueSkuc3RhdHVzO1xuICAgICAgdGhpcy50eXBlID0gKHJlc3VsdCBhcyBhbnkpLnR5cGU7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldExvYWRHaWZ0U3R5bGUoKTtcbiAgfVxuXG4gIHNldExvYWRHaWZ0U3R5bGUoY291bnQ6IG51bWJlcj0wKSB7XG4gICAgaWYoY291bnQgPiA1MCkge1xuICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gbG9hZCB0aGUgbG9hZGluZyBnaWZ0Jyk7XG4gICAgfSBlbHNlIGlmKCQoJy5sb2FkaW5nLXNwaW5uZXInKS5sZW5ndGggPD0gMCkge1xuICAgICAgY291bnQgKys7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0TG9hZEdpZnRTdHlsZShjb3VudCksIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGxlZnQgPSAnJztcbiAgICAgIGxldCB0b3AgPSAnJztcbiAgICAgIGlmKHRoaXMudHlwZSA9PT0gMCkge1xuICAgICAgICBsZWZ0ID0gJy0yNXB4JztcbiAgICAgICAgdG9wID0gJy0yNXB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSAnLTEwMHB4JztcbiAgICAgICAgdG9wID0gJy0yNXB4JztcbiAgICAgIH1cbiAgICAgICQoJy5sb2FkaW5nLXNwaW5uZXInKS5jc3MoJ21hcmdpbi1sZWZ0JywgbGVmdCk7XG4gICAgICAkKCcubG9hZGluZy1zcGlubmVyJykuY3NzKCdtYXJnaW4tdG9wJywgdG9wKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
