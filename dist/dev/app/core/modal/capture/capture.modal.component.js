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
var CaptureWindowModalComponent = (function () {
    function CaptureWindowModalComponent(dialog, renderer, router) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.router = router;
        this.arrStrSTATUSES = ['uploading', 'done'];
        this.bIsSuccessResult = false;
        this.strCurrentStatus = this.arrStrSTATUSES[0];
        this.context = dialog.context;
    }
    CaptureWindowModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uploader = this.context.uploader;
        uploader.onProgressAll = function (progress) {
            if (_this.strCurrentStatus === _this.arrStrSTATUSES[0]) {
                _this.renderer.setElementStyle(_this.fileProgress.nativeElement, 'width', progress + '%');
            }
        };
        uploader.onCompleteItem = function (item, res, status, headers) {
            res = JSON.parse(res);
            if (status === 500) {
                _this.bIsSuccessResult = false;
                _this.strResult = 'Fail to upload';
            }
            else {
                _this.bIsSuccessResult = true;
                _this.strResult = 'Success';
            }
            _this.strCurrentStatus = _this.arrStrSTATUSES[1];
            var that = _this;
            setTimeout(function () {
                that.dialog.close(res);
            }, 1000);
        };
    };
    CaptureWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    CaptureWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    CaptureWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    __decorate([
        core_1.ViewChild('fileProgress'), 
        __metadata('design:type', core_1.ElementRef)
    ], CaptureWindowModalComponent.prototype, "fileProgress", void 0);
    CaptureWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'capture.modal.component.html',
            styleUrls: ['capture.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, core_1.Renderer, router_1.Router])
    ], CaptureWindowModalComponent);
    return CaptureWindowModalComponent;
}());
exports.CaptureWindowModalComponent = CaptureWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL2NhcHR1cmUvY2FwdHVyZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQU1RLGVBQWUsQ0FBQyxDQUFBO0FBQ3hCLHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELCtCQUEwQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVTNEO0lBU0kscUNBQW1CLE1BQXNDLEVBQzdDLFFBQWtCLEVBQ2xCLE1BQWM7UUFGUCxXQUFNLEdBQU4sTUFBTSxDQUFnQztRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUFBLGlCQTJCQztRQTFCRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUVyQyxRQUFRLENBQUMsYUFBYSxHQUFHLFVBQUMsUUFBYTtZQUNuQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDNUYsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLFFBQVEsQ0FBQyxjQUFjLEdBQUcsVUFBQyxJQUFTLEVBQUUsR0FBUSxFQUFFLE1BQVcsRUFBRSxPQUFZO1lBQ3JFLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXRCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixLQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMvQixDQUFDO1lBRUQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0MsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO1lBQ2hCLFVBQVUsQ0FBQztnQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsbURBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbEREO1FBQUMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7O3FFQUFBO0lBYjlCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7O21DQUFBO0lBMkRGLGtDQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQTtBQTFEWSxtQ0FBMkIsOEJBMER2QyxDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL21vZGFsL2NhcHR1cmUvY2FwdHVyZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBSZW5kZXJlcixcbiAgICBPbkluaXRcbn0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaWFsb2dSZWYsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xuaW1wb3J0IHsgQ2FwdHVyZU1vZGFsQ29udGVudCB9ICAgICAgIGZyb20gJy4vY2FwdHVyZS1tb2RhbC1jb250ZW50JztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnY2FwdHVyZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2NhcHR1cmUubW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcHR1cmVXaW5kb3dNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE1vZGFsQ29tcG9uZW50PENhcHR1cmVNb2RhbENvbnRlbnQ+LCBPbkluaXQge1xuICAgIGNvbnRleHQ6IENhcHR1cmVNb2RhbENvbnRlbnQ7XG4gICAgYXJyU3RyU1RBVFVTRVM6IHN0cmluZ1tdO1xuICAgIHN0ckN1cnJlbnRTdGF0dXM6IHN0cmluZztcbiAgICBzdHJSZXN1bHQ6IHN0cmluZztcblxuICAgIGJJc1N1Y2Nlc3NSZXN1bHQ6IGJvb2xlYW47XG4gICAgQFZpZXdDaGlsZCgnZmlsZVByb2dyZXNzJykgZmlsZVByb2dyZXNzOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogRGlhbG9nUmVmPENhcHR1cmVNb2RhbENvbnRlbnQ+LFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmFyclN0clNUQVRVU0VTID0gIFsndXBsb2FkaW5nJywgJ2RvbmUnXTtcbiAgICAgICAgdGhpcy5iSXNTdWNjZXNzUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RyQ3VycmVudFN0YXR1cyA9IHRoaXMuYXJyU3RyU1RBVFVTRVNbMF07XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRpYWxvZy5jb250ZXh0O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgdXBsb2FkZXIgPSB0aGlzLmNvbnRleHQudXBsb2FkZXI7XG5cbiAgICAgICAgdXBsb2FkZXIub25Qcm9ncmVzc0FsbCA9IChwcm9ncmVzczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnN0ckN1cnJlbnRTdGF0dXMgPT09IHRoaXMuYXJyU3RyU1RBVFVTRVNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmZpbGVQcm9ncmVzcy5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBwcm9ncmVzcyArICclJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdXBsb2FkZXIub25Db21wbGV0ZUl0ZW0gPSAoaXRlbTogYW55LCByZXM6IGFueSwgc3RhdHVzOiBhbnksIGhlYWRlcnM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXMpO1xuXG4gICAgICAgICAgICBpZihzdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYklzU3VjY2Vzc1Jlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyUmVzdWx0ID0gJ0ZhaWwgdG8gdXBsb2FkJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iSXNTdWNjZXNzUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0clJlc3VsdCA9ICdTdWNjZXNzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdHJDdXJyZW50U3RhdHVzID0gdGhpcy5hcnJTdHJTVEFUVVNFU1sxXTtcblxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5kaWFsb2cuY2xvc2UocmVzKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGJlZm9yZURpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiZWZvcmVDbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgIH1cbn1cbiJdfQ==
