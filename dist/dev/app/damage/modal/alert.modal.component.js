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
var angular2_modal_1 = require('angular2-modal');
var router_1 = require('@angular/router');
var index_1 = require('../../shared/index');
var AlertWindowModalComponent = (function () {
    function AlertWindowModalComponent(dialog, element, router) {
        this.dialog = dialog;
        this.element = element;
        this.router = router;
        this.context = dialog.context;
        if (dialog.context.nType === 0) {
            this.modalType = false;
            this.strDescription = this.context.alertData.data.popupIntro.description;
            this.strImgUrl = index_1.Config.API + this.context.alertData.data.popupIntro.image;
        }
        else {
            this.doneBtnObject = {};
            this.moreBtnObject = {};
            this.modalType = true;
            var moreDdamageData = this.context.alertData.data.popupMoreDamage;
            this.strTitle = moreDdamageData['title'];
            this.strDescription = moreDdamageData['description'];
            this.strSlug = this.context.alertData.slug;
            this.strImgUrl = index_1.Config.API + moreDdamageData.image;
            this.doneBtnObject['label'] = moreDdamageData['done_button']['button'];
            this.doneBtnObject['style'] = {
                color: moreDdamageData['done_button']['color'],
                background: moreDdamageData['done_button']['background_color']
            };
            this.doneBtnObject['on'] = moreDdamageData['done_button']['on'];
            this.moreBtnObject['label'] = moreDdamageData['more_button']['button'];
            this.moreBtnObject['style'] = {
                color: moreDdamageData['more_button']['color'],
                background: moreDdamageData['more_button']['background_color']
            };
            this.moreBtnObject['on'] = moreDdamageData['more_button']['on'];
        }
    }
    AlertWindowModalComponent.prototype.ngOnInit = function () {
        this.initStyle();
    };
    AlertWindowModalComponent.prototype.initStyle = function (count) {
        var _this = this;
        if (count === void 0) { count = 0; }
        var $modalBody = $('.damage-alert-modal .modal-body');
        if (count > 50) {
            console.log('Fail to load the alert modal .');
        }
        else if ($modalBody.length <= 0) {
            count++;
            setTimeout(function () { return _this.initStyle(count); }, 50);
        }
        else {
            var modalPadding = parseInt($modalBody.css('padding-top'));
            var modalWidth = $('.damage-alert-modal').width();
            this.circleImgLeft = modalWidth / 2 - 25 - modalPadding;
            this.handImgLeft = modalWidth / 2 - 10 - modalPadding;
        }
    };
    AlertWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    AlertWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    AlertWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    AlertWindowModalComponent.prototype.next = function () {
        this.dialog.close();
        this.router.navigate(['/photo', this.strSlug]);
    };
    AlertWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'alert.modal.component.html',
            styleUrls: ['alert.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, core_1.ElementRef, router_1.Router])
    ], AlertWindowModalComponent);
    return AlertWindowModalComponent;
}());
exports.AlertWindowModalComponent = AlertWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvbW9kYWwvYWxlcnQubW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFFc0IsZUFBZSxDQUFDLENBQUE7QUFDdEMsK0JBQzBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsc0JBQWtDLG9CQUFvQixDQUFDLENBQUE7QUFTdkQ7SUFlSSxtQ0FBbUIsTUFBb0MsRUFDM0MsT0FBbUIsRUFDbkIsTUFBYztRQUZQLFdBQU0sR0FBTixNQUFNLENBQThCO1FBQzNDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMvRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFRLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFRLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lB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QUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHdDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUF6Rkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzs7aUNBQUE7SUFxRkYsZ0NBQUM7QUFBRCxDQXBGQSxBQW9GQyxJQUFBO0FBcEZZLGlDQUF5Qiw0QkFvRnJDLENBQUEiLCJmaWxlIjoiYXBwL2RhbWFnZS9tb2RhbC9hbGVydC5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ1JlZixcbiAgICBNb2RhbENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcbmltcG9ydCB7IEFsZXJ0TW9kYWxDb250ZW50IH0gZnJvbSAnLi9hbGVydC1tb2RhbC1jb250ZW50JztcbmltcG9ydCB7IFJvdXRlciB9ICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnYWxlcnQubW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydhbGVydC5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRXaW5kb3dNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE1vZGFsQ29tcG9uZW50PEFsZXJ0TW9kYWxDb250ZW50PiwgT25Jbml0IHtcbiAgICBjb250ZXh0OiBBbGVydE1vZGFsQ29udGVudDtcbiAgICBwcm9kdWN0SWQ6IGFueTtcbiAgICBtb2RhbFR5cGU6IGJvb2xlYW47XG4gICAgc3RyU2x1Zzogc3RyaW5nO1xuICAgIGF2YWlsYWJsZU1vZGFsQ2xhc3M6IHN0cmluZztcbiAgICBzdHJEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHN0ckltZ1VybDogc3RyaW5nO1xuICAgIHN0clRpdGxlOiBzdHJpbmc7XG4gICAgZG9uZUJ0bk9iamVjdDogT2JqZWN0O1xuICAgIG1vcmVCdG5PYmplY3Q6IE9iamVjdDtcblxuICAgIGNpcmNsZUltZ0xlZnQ6IG51bWJlcjtcbiAgICBoYW5kSW1nTGVmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogRGlhbG9nUmVmPEFsZXJ0TW9kYWxDb250ZW50PixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRpYWxvZy5jb250ZXh0O1xuICAgICAgICBpZihkaWFsb2cuY29udGV4dC5uVHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbFR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RyRGVzY3JpcHRpb24gPSB0aGlzLmNvbnRleHQuYWxlcnREYXRhLmRhdGEucG9wdXBJbnRyby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc3RySW1nVXJsID0gQ29uZmlnLkFQSSArIHRoaXMuY29udGV4dC5hbGVydERhdGEuZGF0YS5wb3B1cEludHJvLmltYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb25lQnRuT2JqZWN0ID0gPGFueT57fTtcbiAgICAgICAgICAgIHRoaXMubW9yZUJ0bk9iamVjdCA9IDxhbnk+e307XG4gICAgICAgICAgICB0aGlzLm1vZGFsVHlwZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbW9yZURkYW1hZ2VEYXRhID0gdGhpcy5jb250ZXh0LmFsZXJ0RGF0YS5kYXRhLnBvcHVwTW9yZURhbWFnZTtcbiAgICAgICAgICAgIHRoaXMuc3RyVGl0bGUgPSBtb3JlRGRhbWFnZURhdGFbJ3RpdGxlJ107XG4gICAgICAgICAgICB0aGlzLnN0ckRlc2NyaXB0aW9uID0gbW9yZURkYW1hZ2VEYXRhWydkZXNjcmlwdGlvbiddO1xuICAgICAgICAgICAgdGhpcy5zdHJTbHVnID0gdGhpcy5jb250ZXh0LmFsZXJ0RGF0YS5zbHVnO1xuICAgICAgICAgICAgdGhpcy5zdHJJbWdVcmwgPSBDb25maWcuQVBJICsgbW9yZURkYW1hZ2VEYXRhLmltYWdlO1xuICAgICAgICAgICAgKHRoaXMuZG9uZUJ0bk9iamVjdCBhcyBhbnkpWydsYWJlbCddID0gbW9yZURkYW1hZ2VEYXRhWydkb25lX2J1dHRvbiddWydidXR0b24nXTtcbiAgICAgICAgICAgICh0aGlzLmRvbmVCdG5PYmplY3QgYXMgYW55KVsnc3R5bGUnXSA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbW9yZURkYW1hZ2VEYXRhWydkb25lX2J1dHRvbiddWydjb2xvciddLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1vcmVEZGFtYWdlRGF0YVsnZG9uZV9idXR0b24nXVsnYmFja2dyb3VuZF9jb2xvciddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgKHRoaXMuZG9uZUJ0bk9iamVjdCBhcyBhbnkpWydvbiddID0gbW9yZURkYW1hZ2VEYXRhWydkb25lX2J1dHRvbiddWydvbiddO1xuXG4gICAgICAgICAgICAodGhpcy5tb3JlQnRuT2JqZWN0IGFzIGFueSlbJ2xhYmVsJ10gPSBtb3JlRGRhbWFnZURhdGFbJ21vcmVfYnV0dG9uJ11bJ2J1dHRvbiddO1xuICAgICAgICAgICAgKHRoaXMubW9yZUJ0bk9iamVjdCBhcyBhbnkpWydzdHlsZSddID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBtb3JlRGRhbWFnZURhdGFbJ21vcmVfYnV0dG9uJ11bJ2NvbG9yJ10sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbW9yZURkYW1hZ2VEYXRhWydtb3JlX2J1dHRvbiddWydiYWNrZ3JvdW5kX2NvbG9yJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAodGhpcy5tb3JlQnRuT2JqZWN0IGFzIGFueSlbJ29uJ10gPSBtb3JlRGRhbWFnZURhdGFbJ21vcmVfYnV0dG9uJ11bJ29uJ107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0U3R5bGUoKTtcbiAgICB9XG5cbiAgICBpbml0U3R5bGUoY291bnQ6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0ICRtb2RhbEJvZHkgPSAkKCcuZGFtYWdlLWFsZXJ0LW1vZGFsIC5tb2RhbC1ib2R5Jyk7XG5cbiAgICAgICAgaWYoY291bnQgPiA1MCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gbG9hZCB0aGUgYWxlcnQgbW9kYWwgLicpO1xuICAgICAgICB9IGVsc2UgaWYoJG1vZGFsQm9keS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdFN0eWxlKGNvdW50KSwgNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1vZGFsUGFkZGluZyA9IHBhcnNlSW50KCRtb2RhbEJvZHkuY3NzKCdwYWRkaW5nLXRvcCcpKTtcbiAgICAgICAgICAgIGxldCBtb2RhbFdpZHRoID0gJCgnLmRhbWFnZS1hbGVydC1tb2RhbCcpLndpZHRoKCk7XG4gICAgICAgICAgICB0aGlzLmNpcmNsZUltZ0xlZnQgPSBtb2RhbFdpZHRoIC8gMiAtIDI1IC0gbW9kYWxQYWRkaW5nO1xuICAgICAgICAgICAgdGhpcy5oYW5kSW1nTGVmdCA9IG1vZGFsV2lkdGggLyAyIC0gMTAgLSBtb2RhbFBhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWZvcmVEaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYmVmb3JlQ2xvc2UoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9waG90bycsIHRoaXMuc3RyU2x1Z10pO1xuICAgIH1cbn1cbiJdfQ==
