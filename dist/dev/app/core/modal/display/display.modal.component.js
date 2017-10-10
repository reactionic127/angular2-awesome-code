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
var angular2_modal_1 = require('angular2-modal');
var DisplayWindowModalComponent = (function () {
    function DisplayWindowModalComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.context = dialog.context;
        this.displayData = this.context.displayData;
        this.loadData();
    }
    DisplayWindowModalComponent.prototype.loadData = function (counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        if (counter > 50) {
            console.log('Fail to load the display data');
        }
        else if ($('.display-wrapper .display-body').length <= 0) {
            counter++;
            setTimeout(function () { return _this.loadData(counter); }, 50);
        }
        else {
            $('.display-wrapper .display-body').html(this.displayData);
        }
    };
    DisplayWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DisplayWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    DisplayWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    DisplayWindowModalComponent.prototype.gotoHome = function () {
        this.dialog.close();
        this.router.navigate(['/']);
    };
    DisplayWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'display.modal.component.html',
            styleUrls: ['display.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, router_1.Router])
    ], DisplayWindowModalComponent);
    return DisplayWindowModalComponent;
}());
exports.DisplayWindowModalComponent = DisplayWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL2Rpc3BsYXkvZGlzcGxheS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUNRLGVBQWUsQ0FBQyxDQUFBO0FBQ3hCLHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELCtCQUEwQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVTNEO0lBSUkscUNBQW1CLE1BQXNDLEVBQzdDLE1BQWM7UUFEUCxXQUFNLEdBQU4sTUFBTSxDQUFnQztRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLE9BQW1CO1FBQTVCLGlCQVNDO1FBVFEsdUJBQW1CLEdBQW5CLFdBQW1CO1FBQ3hCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxFQUFHLENBQUM7WUFDWCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0wsQ0FBQztJQUVELG1EQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBM0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7O21DQUFBO0lBdUNGLGtDQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSxtQ0FBMkIsOEJBc0N2QyxDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL21vZGFsL2Rpc3BsYXkvZGlzcGxheS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRcbn0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaWFsb2dSZWYsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xuaW1wb3J0IHsgRGlzcGxheU1vZGFsQ29udGVudCB9ICAgIGZyb20gJy4vZGlzcGxheS1tb2RhbC1jb250ZW50JztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlzcGxheS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2Rpc3BsYXkubW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpc3BsYXlXaW5kb3dNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE1vZGFsQ29tcG9uZW50PERpc3BsYXlNb2RhbENvbnRlbnQ+IHtcbiAgICBjb250ZXh0OiBEaXNwbGF5TW9kYWxDb250ZW50O1xuICAgIGRpc3BsYXlEYXRhOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBEaWFsb2dSZWY8RGlzcGxheU1vZGFsQ29udGVudD4sXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZGlhbG9nLmNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmNvbnRleHQuZGlzcGxheURhdGE7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBsb2FkRGF0YShjb3VudGVyOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmKGNvdW50ZXIgPiA1MCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gbG9hZCB0aGUgZGlzcGxheSBkYXRhJyk7XG4gICAgICAgIH0gZWxzZSBpZigkKCcuZGlzcGxheS13cmFwcGVyIC5kaXNwbGF5LWJvZHknKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY291bnRlciArKztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkRGF0YShjb3VudGVyKSwgNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmRpc3BsYXktd3JhcHBlciAuZGlzcGxheS1ib2R5JykuaHRtbCh0aGlzLmRpc3BsYXlEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJlZm9yZURpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiZWZvcmVDbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGdvdG9Ib21lKCkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfVxufVxuIl19
