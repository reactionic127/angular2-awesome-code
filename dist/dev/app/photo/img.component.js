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
var http_1 = require('@angular/http');
var index_1 = require('../shared/index');
var data_service_1 = require('../core/data.service');
var event_service_1 = require('../core/event.service');
var store_service_1 = require('../core/store.service');
var index_2 = require('../shared/index');
var upload_modal_service_1 = require('../core/modal/upload/upload.modal.service');
var show_img_modal_service_1 = require('../core/modal/show/show.img.modal.service');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var ImgComponent = (function () {
    function ImgComponent(http, el, _dataService, _eventService, _spinner, _storeService, _uploadModelService, _showImgModelService, _viewContainer, modal) {
        this.http = http;
        this.el = el;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._spinner = _spinner;
        this._storeService = _storeService;
        this._uploadModelService = _uploadModelService;
        this._showImgModelService = _showImgModelService;
        this._viewContainer = _viewContainer;
        this.modal = modal;
        this.loadData = new core_1.EventEmitter();
        this.checkStep = new core_1.EventEmitter();
        this.uploadStatus = [];
        this.photoRequires = [];
        this.isAccordionOpened = [];
        this.host = 'http://ve-.local/';
        this._spinner.start();
        this.URL = this.host + 'v1/data/fileupload';
        this.imgList = [];
        this.backendApi = index_1.Config.API;
        this.selectedItem = -1;
        modal.overlay.defaultViewContainer = _viewContainer;
    }
    ImgComponent.prototype.ngOnInit = function () {
        var _this = this;
        var postData = {
            code: 200,
            data: {
                slug: this.slugId
            }
        };
        this._dataService.post('v1/data/photosrequested', postData)
            .subscribe(function (res) {
            console.log(res);
            var data = res.data;
            var helpIcon = _this.backendApi + data.help.icon;
            var liveHelpIcon = _this.backendApi + data.liveHelp.icon;
            var logoIcon = _this.backendApi + data.ui.logo;
            var helpStatus, liveHelpStatus;
            if (data.liveHelp.on === 1) {
                liveHelpStatus = true;
            }
            else {
                liveHelpStatus = false;
            }
            if (data.help.on === 1) {
                helpStatus = true;
            }
            else {
                helpStatus = false;
            }
            _this._eventService.emit('load_topbar_data', {
                helpIcon: helpIcon,
                helpStatus: helpStatus,
                liveHelpIcon: liveHelpIcon,
                liveHelpStatus: liveHelpStatus,
                logoIcon: logoIcon,
                helpLink: data.help.link
            });
            _this.loadData.emit({
                totalStep: data.steps.totalStep,
                currentStep: data.steps.currentStep
            });
            _this.host = _this._dataService.host;
            _this.imgList = res.data.photos.map(function (item) {
                item.uploadedImgUrl = '';
                item.uploaded = false;
                item.uploadStatus = false;
                return item;
            });
            _this.checkNextStep();
            _this.slugId = res.data.slug;
            for (var i = 0; i < _this.imgList.length; i++) {
                _this.uploadStatus[i] = 0;
                _this.isAccordionOpened[i] = false;
                if (parseInt(_this.imgList[i].required) === 1) {
                    _this.photoRequires[i] = 1;
                }
                else {
                    _this.photoRequires[i] = 0;
                }
            }
            _this._spinner.stop();
            _this.isAccordionOpened[0] = true;
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    ImgComponent.prototype.checkNextStep = function () {
        var isNext = true;
        for (var i = 0; i < this.imgList.length; i++) {
            if (this.imgList[i].required) {
                isNext = false;
                break;
            }
        }
        this.checkStep.emit(isNext);
    };
    ImgComponent.prototype.clearAccordion = function () {
        for (var i = 0; i < this.isAccordionOpened.length; i++) {
            this.isAccordionOpened[i] = false;
        }
    };
    ImgComponent.prototype.openUploadModal = function (index) {
        var _this = this;
        this.selectedItem = index;
        var data = this.imgList[index];
        if (!data.hasOwnProperty('id')) {
            console.log('id property does not exist');
            return;
        }
        var postData = {
            code: 200,
            data: {
                slug: this.slugId,
                UserID: 0,
                PhotoID: data.id
            }
        };
        if (data.uploaded) {
            var title = data.text;
            var imgUrl = this.backendApi + data.uploadedImgUrl;
            this._showImgModelService.openDialog(title, imgUrl, postData, this._viewContainer)
                .then(function (dialog) {
                dialog.result.then(function (returnData) {
                    if (returnData.status) {
                        _this.imgList[index].uploadedImgUrl = returnData.url;
                    }
                });
            });
        }
        else {
            this._uploadModelService.openDialog(this.imgList, index, postData, this._viewContainer)
                .then(function (dialog) {
                dialog.result.then(function (returnData) {
                    _this.checkNextStep();
                });
            });
        }
    };
    __decorate([
        core_1.Input('slugId'), 
        __metadata('design:type', String)
    ], ImgComponent.prototype, "slugId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImgComponent.prototype, "loadData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImgComponent.prototype, "checkStep", void 0);
    ImgComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'image-location',
            templateUrl: 'img.component.html',
            styleUrls: ['img.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, core_1.ElementRef, data_service_1.DataService, event_service_1.EventService, index_2.SpinnerService, store_service_1.StoreService, upload_modal_service_1.UploadModelService, show_img_modal_service_1.ShowImgModelService, core_1.ViewContainerRef, bootstrap_1.Modal])
    ], ImgComponent);
    return ImgComponent;
}());
exports.ImgComponent = ImgComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O29CQUFBO0lBd0tGLG1CQUFDO0FBQUQsQ0F0S0EsQUFzS0MsSUFBQTtBQXRLWSxvQkFBWSxlQXNLeEIsQ0FBQSIsImZpbGUiOiJhcHAvcGhvdG8vaW1nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIElucHV0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9ICAgICAgICBmcm9tICcuLi9jb3JlL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gICAgICAgIGZyb20gJy4uL2NvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICAgICAgZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IFVwbG9hZE1vZGVsU2VydmljZSB9ICBmcm9tICcuLi9jb3JlL21vZGFsL3VwbG9hZC91cGxvYWQubW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBTaG93SW1nTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9tb2RhbC9zaG93L3Nob3cuaW1nLm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kYWwgfSAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcbmRlY2xhcmUgbGV0ICQ6IGFueTtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBDYXJNYXBDb21wb25lbnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnaW1hZ2UtbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ2ltZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbWcuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSW1nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW1nTGlzdDogT2JqZWN0W107XG4gIEBJbnB1dCgnc2x1Z0lkJykgc2x1Z0lkOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBsb2FkRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoZWNrU3RlcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBVUkw6IHN0cmluZztcbiAgYmFja2VuZEFwaTogc3RyaW5nO1xuXG4gIHNlbGVjdGVkSXRlbTogbnVtYmVyO1xuXG4gIHVwbG9hZFN0YXR1czogbnVtYmVyW10gPSBbXTtcbiAgcGhvdG9SZXF1aXJlczogbnVtYmVyW10gPSBbXTsgLy8gcmVxdWlyZWQgcGhvdG8gYXJyYXlcbiAgaXNBY2NvcmRpb25PcGVuZWQ6IGJvb2xlYW5bXSA9IFtdO1xuICBob3N0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3VwbG9hZE1vZGVsU2VydmljZTogVXBsb2FkTW9kZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3Nob3dJbWdNb2RlbFNlcnZpY2U6IFNob3dJbWdNb2RlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbFxuKSB7XG5cblxudGhpcy5ob3N0ID0gJ2h0dHA6Ly92ZS0ubG9jYWwvJztcblxuICAgIHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgICB0aGlzLlVSTCA9IHRoaXMuaG9zdCArICd2MS9kYXRhL2ZpbGV1cGxvYWQnO1xuICAgIHRoaXMuaW1nTGlzdCA9IFtdO1xuICAgIHRoaXMuYmFja2VuZEFwaSA9IENvbmZpZy5BUEk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSAtMTtcbiAgICBtb2RhbC5vdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gX3ZpZXdDb250YWluZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNsdWc6IHRoaXMuc2x1Z0lkXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3QoJ3YxL2RhdGEvcGhvdG9zcmVxdWVzdGVkJywgcG9zdERhdGEpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge2NvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGxldCBoZWxwSWNvbiA9IHRoaXMuYmFja2VuZEFwaSArIGRhdGEuaGVscC5pY29uO1xuICAgICAgICBsZXQgbGl2ZUhlbHBJY29uID0gdGhpcy5iYWNrZW5kQXBpICsgZGF0YS5saXZlSGVscC5pY29uO1xuICAgICAgICBsZXQgbG9nb0ljb24gPSB0aGlzLmJhY2tlbmRBcGkgKyBkYXRhLnVpLmxvZ287XG4gICAgICAgIGxldCBoZWxwU3RhdHVzOiBib29sZWFuLCBsaXZlSGVscFN0YXR1czogYm9vbGVhbjtcbiAgICAgICAgaWYoZGF0YS5saXZlSGVscC5vbiA9PT0gMSkge1xuICAgICAgICAgIGxpdmVIZWxwU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXZlSGVscFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGF0YS5oZWxwLm9uID09PSAxKSB7XG4gICAgICAgICAgaGVscFN0YXR1cyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVscFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmVtaXQoJ2xvYWRfdG9wYmFyX2RhdGEnLCB7XG4gICAgICAgICAgaGVscEljb246IGhlbHBJY29uLFxuICAgICAgICAgIGhlbHBTdGF0dXM6IGhlbHBTdGF0dXMsXG4gICAgICAgICAgbGl2ZUhlbHBJY29uOiBsaXZlSGVscEljb24sXG4gICAgICAgICAgbGl2ZUhlbHBTdGF0dXM6IGxpdmVIZWxwU3RhdHVzLFxuICAgICAgICAgIGxvZ29JY29uOiBsb2dvSWNvbixcbiAgICAgICAgICBoZWxwTGluazogZGF0YS5oZWxwLmxpbmtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YS5lbWl0KHtcbiAgICAgICAgICB0b3RhbFN0ZXA6IGRhdGEuc3RlcHMudG90YWxTdGVwLFxuICAgICAgICAgIGN1cnJlbnRTdGVwOiBkYXRhLnN0ZXBzLmN1cnJlbnRTdGVwXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBnZXQgdGhlIHNsdWdcbiAgICAgICAgdGhpcy5ob3N0ID0gdGhpcy5fZGF0YVNlcnZpY2UuaG9zdDtcbiAgICAgICAgdGhpcy5pbWdMaXN0ID0gcmVzLmRhdGEucGhvdG9zLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgaXRlbS51cGxvYWRlZEltZ1VybCA9ICcnO1xuICAgICAgICAgIGl0ZW0udXBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICBpdGVtLnVwbG9hZFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoZWNrTmV4dFN0ZXAoKTtcblxuICAgICAgICB0aGlzLnNsdWdJZCA9IHJlcy5kYXRhLnNsdWc7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuaW1nTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMudXBsb2FkU3RhdHVzW2ldID0gMDtcbiAgICAgICAgICB0aGlzLmlzQWNjb3JkaW9uT3BlbmVkW2ldID0gZmFsc2U7XG4gICAgICAgICAgaWYocGFyc2VJbnQoKHRoaXMuaW1nTGlzdFtpXSBhcyBhbnkpLnJlcXVpcmVkKSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5waG90b1JlcXVpcmVzW2ldID0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5waG90b1JlcXVpcmVzW2ldID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIHRoaXMuaXNBY2NvcmRpb25PcGVuZWRbMF0gPSB0cnVlO1xuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICB9XG5cbiAgY2hlY2tOZXh0U3RlcCgpIHtcbiAgICBsZXQgaXNOZXh0ID0gdHJ1ZTtcblxuICAgIGZvcihsZXQgaT0wOyBpPCB0aGlzLmltZ0xpc3QubGVuZ3RoOyBpICsrKSB7XG4gICAgICBpZigodGhpcy5pbWdMaXN0W2ldIGFzIGFueSkucmVxdWlyZWQpIHtcbiAgICAgICAgaXNOZXh0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoZWNrU3RlcC5lbWl0KGlzTmV4dCk7XG4gIH1cblxuICAvKlxuICBjbGVhciBvcGVuZWQgYWNjb3JkaW9uIGFycmF5XG4gICovXG4gIGNsZWFyQWNjb3JkaW9uKCkge1xuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuaXNBY2NvcmRpb25PcGVuZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaXNBY2NvcmRpb25PcGVuZWRbaV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuVXBsb2FkTW9kYWwoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaW5kZXg7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmltZ0xpc3RbaW5kZXhdO1xuICAgIGlmKCFkYXRhLmhhc093blByb3BlcnR5KCdpZCcpKSB7XG4gICAgICBjb25zb2xlLmxvZygnaWQgcHJvcGVydHkgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNsdWc6IHRoaXMuc2x1Z0lkLFxuICAgICAgICBVc2VySUQ6IDAsXG4gICAgICAgIFBob3RvSUQ6IChkYXRhIGFzIGFueSkuaWRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoKGRhdGEgYXMgYW55KS51cGxvYWRlZCkge1xuICAgICAgbGV0IHRpdGxlID0gKGRhdGEgYXMgYW55KS50ZXh0O1xuICAgICAgbGV0IGltZ1VybCA9IHRoaXMuYmFja2VuZEFwaSArIChkYXRhIGFzIGFueSkudXBsb2FkZWRJbWdVcmw7XG4gICAgICB0aGlzLl9zaG93SW1nTW9kZWxTZXJ2aWNlLm9wZW5EaWFsb2codGl0bGUsIGltZ1VybCwgcG9zdERhdGEsIHRoaXMuX3ZpZXdDb250YWluZXIpXG4gICAgICAgIC50aGVuKChkaWFsb2c6IGFueSkgPT4ge1xuICAgICAgICAgIGRpYWxvZy5yZXN1bHQudGhlbigocmV0dXJuRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZigocmV0dXJuRGF0YSBhcyBhbnkpLnN0YXR1cykge1xuICAgICAgICAgICAgICAodGhpcy5pbWdMaXN0W2luZGV4XSBhcyBhbnkpLnVwbG9hZGVkSW1nVXJsID0gKHJldHVybkRhdGEgYXMgYW55KS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwbG9hZE1vZGVsU2VydmljZS5vcGVuRGlhbG9nKHRoaXMuaW1nTGlzdCwgaW5kZXgsIHBvc3REYXRhLCB0aGlzLl92aWV3Q29udGFpbmVyKVxuICAgICAgICAudGhlbihkaWFsb2cgPT4ge1xuICAgICAgICAgIGRpYWxvZy5yZXN1bHQudGhlbihyZXR1cm5EYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0U3RlcCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
