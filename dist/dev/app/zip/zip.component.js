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
var ZipComponent = (function () {
    function ZipComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ZipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.profile_slug = params['profile_slug'];
        });
        this.user = {
            zipcode: '',
            email: ''
        };
    };
    ZipComponent.prototype.next = function (form) {
        if (form.value.zipcode) {
            this.router.navigate(['/vehicle_model/ps', this.profile_slug,
                form.value.zipcode]);
        }
        else {
            alert('Please insert zipcode.');
        }
    };
    ZipComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-zip',
            templateUrl: 'zip.component.html',
            styleUrls: ['zip.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], ZipComponent);
    return ZipComponent;
}());
exports.ZipComponent = ZipComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC96aXAvemlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBV3pEO0lBSUMsc0JBQW9CLE1BQWMsRUFDekIsS0FBcUI7UUFEVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUcsQ0FBQztJQUVsQywrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLElBQUksR0FBRztZQUNQLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO0lBQ04sQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxJQUFTO1FBQ2IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFFLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztJQS9CRjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDOztvQkFBQTtJQTJCRixtQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksb0JBQVksZUEwQnhCLENBQUEiLCJmaWxlIjoiYXBwL3ppcC96aXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgWmlwQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC16aXAnLFxuICB0ZW1wbGF0ZVVybDogJ3ppcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd6aXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFppcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHVzZXI6IGFueTtcblx0cHJvZmlsZV9zbHVnOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zPT4ge1xuXHQgICAgICB0aGlzLnByb2ZpbGVfc2x1ZyA9IHBhcmFtc1sncHJvZmlsZV9zbHVnJ107XG5cdCAgICB9KTtcblxuXHRcdHRoaXMudXNlciA9IHtcblx0ICAgICAgemlwY29kZTogJycsXG5cdCAgICAgIGVtYWlsOiAnJ1xuXHQgICAgfTtcblx0fVxuXG5cdG5leHQoZm9ybTogYW55KSB7XG5cdFx0aWYoZm9ybS52YWx1ZS56aXBjb2RlKSB7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWycvdmVoaWNsZV9tb2RlbC9wcycsIHRoaXMucHJvZmlsZV9zbHVnLFxuXHRcdFx0XHRmb3JtLnZhbHVlLnppcGNvZGVdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWxlcnQoJ1BsZWFzZSBpbnNlcnQgemlwY29kZS4nKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
