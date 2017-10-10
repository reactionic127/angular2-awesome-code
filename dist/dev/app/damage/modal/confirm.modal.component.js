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
var data_service_1 = require('../../core/data.service');
var store_service_1 = require('../../core/store.service');
var ConfirmWindowModalComponent = (function () {
    function ConfirmWindowModalComponent(dialog, _storeService, _dataService) {
        this.dialog = dialog;
        this._storeService = _storeService;
        this._dataService = _dataService;
        this.carmapHandler = dialog.context.carmapHandler;
        this.imgMap = dialog.context.carmapHandler.carImgMap;
        this.markList = dialog.context.carmapHandler.markList;
        this.markId = dialog.context.markId;
    }
    ConfirmWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    ConfirmWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    ConfirmWindowModalComponent.prototype.Cancel = function () {
        this.dialog.close();
    };
    ConfirmWindowModalComponent.prototype.DeleteMark = function () {
        var _this = this;
        var deletedId = this.markList[this.markId].id;
        var postData = {
            code: 200,
            data: {
                slug: this.carmapHandler.slug,
                autoPartID: deletedId
            }
        };
        this._dataService.post('v1/data/autopartremove', postData)
            .subscribe(function (res) {
            _this.markList.splice(_this.markId, 1);
            _this.imgMap.deleteCheckMark(deletedId);
            _this.imgMap.updatePolygon(_this.markList);
            _this.carmapHandler.doneAutoPart(_this.markList);
            _this.dialog.close();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    ConfirmWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'confirm.modal.component.html',
            styleUrls: ['confirm.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, store_service_1.StoreService, data_service_1.DataService])
    ], ConfirmWindowModalComponent);
    return ConfirmWindowModalComponent;
}());
exports.ConfirmWindowModalComponent = ConfirmWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvbW9kYWwvY29uZmlybS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQywrQkFBMEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUczRCw2QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCw4QkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQVN6RDtJQU9JLHFDQUFtQixNQUFzQyxFQUMvQyxhQUEyQixFQUMzQixZQUF5QjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFnQztRQUMvQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFDLE9BQWUsQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUVELG1EQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsNENBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdEQUFVLEdBQVY7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLElBQUksUUFBUSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTtnQkFDN0IsVUFBVSxFQUFFLFNBQVM7YUFDdEI7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDO2FBQ3ZELFNBQVMsQ0FBQyxVQUFDLEdBQVE7WUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLFVBQUMsS0FBVSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFwREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzs7bUNBQUE7SUFnREYsa0NBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBL0NZLG1DQUEyQiw4QkErQ3ZDLENBQUEiLCJmaWxlIjoiYXBwL2RhbWFnZS9tb2RhbC9jb25maXJtLm1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nUmVmLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcbmltcG9ydCB7IENvbmZpcm1Nb2RhbENvbnRlbnQgfSBmcm9tICcuL2NvbmZpcm0tbW9kYWwtY29udGVudCc7XG5pbXBvcnQgeyBDYXJNYXBDb21wb25lbnQgfSBmcm9tICcuLi9jYXJtYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gIGZyb20gJy4uLy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9ICBmcm9tICcuLi8uLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdjb25maXJtLm1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY29uZmlybS5tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybVdpbmRvd01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgTW9kYWxDb21wb25lbnQ8Q29uZmlybU1vZGFsQ29udGVudD4ge1xuICAgIGNvbnRleHQ6IENvbmZpcm1Nb2RhbENvbnRlbnQ7XG4gICAgY2FybWFwSGFuZGxlcjogQ2FyTWFwQ29tcG9uZW50O1xuICAgIGltZ01hcDogYW55O1xuICAgIG1hcmtMaXN0OiBhbnlbXTtcbiAgICBtYXJrSWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZjxDb25maXJtTW9kYWxDb250ZW50PixcbiAgICAgIHByaXZhdGUgX3N0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmNhcm1hcEhhbmRsZXIgPSBkaWFsb2cuY29udGV4dC5jYXJtYXBIYW5kbGVyO1xuICAgICAgdGhpcy5pbWdNYXAgPSBkaWFsb2cuY29udGV4dC5jYXJtYXBIYW5kbGVyLmNhckltZ01hcDtcbiAgICAgIHRoaXMubWFya0xpc3QgPSBkaWFsb2cuY29udGV4dC5jYXJtYXBIYW5kbGVyLm1hcmtMaXN0O1xuICAgICAgdGhpcy5tYXJrSWQgPSAoZGlhbG9nLmNvbnRleHQgYXMgYW55KS5tYXJrSWQ7XG4gICAgfVxuXG4gICAgYmVmb3JlRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJlZm9yZUNsb3NlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgIH1cblxuICAgIERlbGV0ZU1hcmsoKSB7XG4gICAgICBsZXQgZGVsZXRlZElkID0gdGhpcy5tYXJrTGlzdFt0aGlzLm1hcmtJZF0uaWQ7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNsdWc6IHRoaXMuY2FybWFwSGFuZGxlci5zbHVnLFxuICAgICAgICAgIGF1dG9QYXJ0SUQ6IGRlbGV0ZWRJZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL2F1dG9wYXJ0cmVtb3ZlJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrTGlzdC5zcGxpY2UodGhpcy5tYXJrSWQsIDEpO1xuICAgICAgICAgIHRoaXMuaW1nTWFwLmRlbGV0ZUNoZWNrTWFyayhkZWxldGVkSWQpO1xuICAgICAgICAgIHRoaXMuaW1nTWFwLnVwZGF0ZVBvbHlnb24odGhpcy5tYXJrTGlzdCk7XG4gICAgICAgICAgdGhpcy5jYXJtYXBIYW5kbGVyLmRvbmVBdXRvUGFydCh0aGlzLm1hcmtMaXN0KTtcbiAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG4gICAgfVxufVxuIl19
