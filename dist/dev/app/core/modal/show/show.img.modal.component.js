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
var index_1 = require('../../../shared/index');
var angular2_modal_1 = require('angular2-modal');
var router_1 = require('@angular/router');
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var ShowImgWindowModalComponent = (function () {
    function ShowImgWindowModalComponent(dialog, renderer, router) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.router = router;
        this.STATUSES = ['selecting', 'uploading', 'done'];
        this.context = dialog.context;
        this.imgURL = this.context.imgURL;
        this.title = this.context.title;
        this.isSuccessResult = false;
        this.currentStatus = this.STATUSES[0];
        this.backendApi = index_1.Config.API;
    }
    ShowImgWindowModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.backendApi + "/v1/data/fileupload" });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('data', JSON.stringify(_this.context.postData));
        };
        this.uploader.onProgressItem = function (fileItem, progress) {
            if (_this.currentStatus === _this.STATUSES[1]) {
                _this.renderer.setElementStyle(_this.fileProgress.nativeElement, 'width', progress + '%');
            }
        };
        this.uploader.onCompleteItem = function (item, res, status, headers) {
            _this.currentStatus = _this.STATUSES[2];
            if (status === 500) {
                _this.endBtnString = 'Fail to upload';
                _this.isSuccessResult = false;
                _this.photoURL = null;
            }
            else {
                res = JSON.parse(res);
                _this.photoURL = res.data.path;
                _this.endBtnString = 'Done!';
                _this.isSuccessResult = true;
            }
        };
        this.uploader.onAfterAddingFile = function (fileItem) {
            fileItem.withCredentials = false;
            fileItem.upload();
            _this.currentStatus = _this.STATUSES[1];
        };
    };
    ShowImgWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    ShowImgWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    ShowImgWindowModalComponent.prototype.onClose = function () {
        this.dialog.close({ status: true, url: this.photoURL });
    };
    ShowImgWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close({ status: false });
    };
    __decorate([
        core_1.ViewChild('fileUpload'), 
        __metadata('design:type', core_1.ElementRef)
    ], ShowImgWindowModalComponent.prototype, "fileUpload", void 0);
    __decorate([
        core_1.ViewChild('fileProgress'), 
        __metadata('design:type', core_1.ElementRef)
    ], ShowImgWindowModalComponent.prototype, "fileProgress", void 0);
    ShowImgWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'show.img.modal.component.html',
            styleUrls: ['show.img.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, core_1.Renderer, router_1.Router])
    ], ShowImgWindowModalComponent);
    return ShowImgWindowModalComponent;
}());
exports.ShowImgWindowModalComponent = ShowImgWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL21vZGFsL3Nob3cvc2hvdy5pbWcubW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFLUSxlQUFlLENBQUMsQ0FBQTtBQUN4QixzQkFBMEMsdUJBQXVCLENBQUMsQ0FBQTtBQUNsRSwrQkFBMEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzRCx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBMEMsaUNBQWlDLENBQUMsQ0FBQTtBQVM1RTtJQWlCSSxxQ0FBbUIsTUFBc0MsRUFDN0MsUUFBa0IsRUFDbEIsTUFBYztRQUZQLFdBQU0sR0FBTixNQUFNLENBQWdDO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRWhDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQU0sQ0FBQyxHQUFHLENBQUM7SUFDakMsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFBQSxpQkFrQ0M7UUFqQ0csSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDhCQUFZLENBQUMsRUFBQyxHQUFHLEVBQUssSUFBSSxDQUFDLFVBQVUsd0JBQXFCLEVBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFR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Qzs7bUNBQUE7SUFxRkYsa0NBQUM7QUFBRCxDQXBGQSxBQW9GQyxJQUFBO0FBcEZZLG1DQUEyQiw4QkFvRnZDLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvbW9kYWwvc2hvdy9zaG93LmltZy5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFJlbmRlcmVyXG59ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGlhbG9nUmVmLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcbmltcG9ydCB7IFNob3dJbWdNb2RhbENvbnRlbnQgfSAgICAgICBmcm9tICcuL3Nob3ctaW1nLW1vZGFsLWNvbnRlbnQnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSAgICAgICAgICAgICAgZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdtb2RhbC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3Nob3cuaW1nLm1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2hvdy5pbWcubW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3dJbWdXaW5kb3dNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE1vZGFsQ29tcG9uZW50PFNob3dJbWdNb2RhbENvbnRlbnQ+LCBPbkluaXQge1xuICAgIGNvbnRleHQ6IFNob3dJbWdNb2RhbENvbnRlbnQ7XG4gICAgaW1nVVJMOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBiYWNrZW5kQXBpOiBzdHJpbmc7XG4gICAgY3VycmVudFN0YXR1czogc3RyaW5nO1xuICAgIGVuZEJ0blN0cmluZzogc3RyaW5nO1xuICAgIHBob3RvVVJMOiBzdHJpbmc7XG5cbiAgICBpc1N1Y2Nlc3NSZXN1bHQ6IGJvb2xlYW47XG5cbiAgICBTVEFUVVNFUzogc3RyaW5nW107XG5cbiAgICB1cGxvYWRlcjogRmlsZVVwbG9hZGVyO1xuICAgIEBWaWV3Q2hpbGQoJ2ZpbGVVcGxvYWQnKSBmaWxlVXBsb2FkOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2ZpbGVQcm9ncmVzcycpIGZpbGVQcm9ncmVzczogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZjxTaG93SW1nTW9kYWxDb250ZW50PixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5TVEFUVVNFUyA9IFsnc2VsZWN0aW5nJywgJ3VwbG9hZGluZycsICdkb25lJ107XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZGlhbG9nLmNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW1nVVJMID0gdGhpcy5jb250ZXh0LmltZ1VSTDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuY29udGV4dC50aXRsZTtcblxuICAgICAgICB0aGlzLmlzU3VjY2Vzc1Jlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXR1cyA9IHRoaXMuU1RBVFVTRVNbMF07XG5cbiAgICAgICAgdGhpcy5iYWNrZW5kQXBpID0gQ29uZmlnLkFQSTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoe3VybDogYCR7dGhpcy5iYWNrZW5kQXBpfS92MS9kYXRhL2ZpbGV1cGxvYWRgfSk7XG4gICAgICAgIHRoaXMudXBsb2FkZXIub25BZnRlckFkZGluZ0ZpbGUgPSAoZmlsZSk9PiB7IGZpbGUud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7IH07XG5cbiAgICAgICAgdGhpcy51cGxvYWRlci5vbkJ1aWxkSXRlbUZvcm0gPSAoZmlsZUl0ZW06IGFueSwgZm9ybTogYW55KSA9PiB7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGV4dC5wb3N0RGF0YSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBsb2FkZXIub25Qcm9ncmVzc0l0ZW0gPSAoZmlsZUl0ZW06IGFueSwgcHJvZ3Jlc3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50U3RhdHVzID09PSB0aGlzLlNUQVRVU0VTWzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5maWxlUHJvZ3Jlc3MubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgcHJvZ3Jlc3MgKyAnJScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBsb2FkZXIub25Db21wbGV0ZUl0ZW0gPSAoaXRlbTogYW55LCByZXM6IGFueSwgc3RhdHVzOiBhbnksIGhlYWRlcnM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdHVzID0gdGhpcy5TVEFUVVNFU1syXTtcblxuICAgICAgICAgICAgaWYoc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEJ0blN0cmluZyA9ICdGYWlsIHRvIHVwbG9hZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Y2Nlc3NSZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvVVJMID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG9VUkwgPSByZXMuZGF0YS5wYXRoO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kQnRuU3RyaW5nID0gJ0RvbmUhJztcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VjY2Vzc1Jlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGxvYWRlci5vbkFmdGVyQWRkaW5nRmlsZSA9IChmaWxlSXRlbSkgPT4ge1xuICAgICAgICAgICAgZmlsZUl0ZW0ud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICAgICAgICBmaWxlSXRlbS51cGxvYWQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXR1cyA9IHRoaXMuU1RBVFVTRVNbMV07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYmVmb3JlRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJlZm9yZUNsb3NlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2Uoe3N0YXR1czogdHJ1ZSwgdXJsOiB0aGlzLnBob3RvVVJMfSk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKHtzdGF0dXM6IGZhbHNlfSk7XG4gICAgfVxufVxuIl19
