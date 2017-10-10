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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var data_service_1 = require('../core/data.service');
var event_service_1 = require('../core/event.service');
var index_2 = require('../shared/index');
var capture_modal_service_1 = require('../core/modal/capture/capture.modal.service');
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var IdentifyComponent = (function () {
    function IdentifyComponent(route, _dataService, _eventService, router, _spinner, _captureModel, _viewContainer) {
        this.route = route;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this.router = router;
        this._spinner = _spinner;
        this._captureModel = _captureModel;
        this._viewContainer = _viewContainer;
        this.strBackendApi = index_1.Config.API;
        this.nTotoalStep = 0;
        this.nCurrentStep = 0;
        this.nYearID = -1;
        this.nMakeID = -1;
        this.nModelID = -1;
        this.nCategoryID = -1;
        this.nModalType = -1;
        this.arrStrPages = ['identify', 'identify_retry', 'identify_odometer', 'confirm_odometer'];
        this.arrStrMaualCallbacks = ['manualVin', 'manualOdomter'];
        this.bIsTakePhoto = false;
        this.bIsVinModal = false;
        this.bIsMakeDisabled = true;
        this.bIsModelDisabled = true;
        this.bIsCategoryDisabled = true;
        this.bIsVinErrorAlert = false;
        this.bIsYearsLoad = false;
        this.arrYears = [];
        this.arrMakes = [];
        this.arrModels = [];
        this.arrCategories = [];
    }
    IdentifyComponent.prototype.getEventData = function (data) {
        this.nTotoalStep = data.steps.totalStep;
        this.nCurrentStep = data.steps.currentStep;
        this.strLiveHelpIcon = this.strBackendApi + data.liveHelp.icon;
        this.strHelpIcon = this.strBackendApi + data.help.icon;
        var logoIcon = this.strBackendApi + data.ui.logo;
        this.strTitle = data.title;
        this.strDesc = data.desc;
        this.strImg = this.strBackendApi + data.img;
        this.strBtnName = data.button;
        this.strCallback = data.callback;
        if (this.strCurrentPageName === this.arrStrPages[0] || this.strCurrentPageName === this.arrStrPages[1]) {
            this.strBtnName = data.button;
            this.bIsTakePhoto = true;
        }
        else {
            if (data.take && data.take.on === 1) {
                this.strBtnName = data.take.button;
                this.bIsTakePhoto = true;
            }
            else {
                this.bIsTakePhoto = false;
            }
        }
        if (this.strCurrentPageName === this.arrStrPages[3]) {
            this.strConfirmMsg = data.message;
            this.strConfirmValue = data.miles;
        }
        if (data.liveHelp && data.liveHelp.on === 1) {
            this.bIsLiveHelpStatus = true;
        }
        else {
            this.bIsLiveHelpStatus = false;
        }
        if (data.help && data.help.on === 1) {
            this.bIsHelpStatus = true;
        }
        else {
            this.bIsHelpStatus = false;
        }
        if (data.find && data.find.on === 1) {
            this.bIsFindBtn = true;
            this.strFindBtn = data.find.button;
        }
        else {
            this.bIsFindBtn = false;
        }
        if (data.manual && data.manual.on === 1) {
            this.bIsManualBtn = true;
            this.strManualBtn = data.manual.button;
            this.strManualBtnCallback = data.manual.callback;
        }
        else {
            this.bIsManualBtn = false;
        }
        this._eventService.emit('load_topbar_data', {
            helpIcon: this.strHelpIcon,
            helpStatus: this.bIsHelpStatus,
            liveHelpIcon: this.strLiveHelpIcon,
            liveHelpStatus: this.bIsLiveHelpStatus,
            logoIcon: logoIcon,
            helpLink: data.help.link
        });
        this.bIsPageLoading = true;
        this.loadDescElement();
        this._spinner.stop();
    };
    IdentifyComponent.prototype.loadDescElement = function (nCount) {
        var _this = this;
        if (nCount === void 0) { nCount = 0; }
        if (nCount > 50) {
            console.log('Timeout to load the desc element');
        }
        else if (!this.descElement) {
            nCount++;
            setTimeout(function () { return _this.loadDescElement(nCount); }, 100);
        }
        else {
            this.descElement.nativeElement.innerHTML = this.strDesc;
            var url = this.strBackendApi + '/v1/data/' + this.strCallback;
            var postData_1;
            switch (this.strCurrentPageName) {
                case this.arrStrPages[0]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            type: 'VIN'
                        }
                    };
                    break;
                case this.arrStrPages[1]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            type: 'VIN'
                        }
                    };
                    break;
                case this.arrStrPages[2]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            type: 'Odometer'
                        }
                    };
                    break;
                case this.arrStrPages[3]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            miles: this.strConfirmValue
                        }
                    };
                    break;
            }
            this.uploader = new ng2_file_upload_1.FileUploader({ url: url });
            this.uploader.onBuildItemForm = function (fileItem, form) {
                form.append('data', JSON.stringify(postData_1));
            };
            this.uploader.onAfterAddingFile = function (fileItem) {
                fileItem.withCredentials = false;
                fileItem.upload();
                _this.openUploadProgressBar();
            };
        }
    };
    IdentifyComponent.prototype.openUploadProgressBar = function () {
        var _this = this;
        this._captureModel.openDialog(this.uploader, this._viewContainer)
            .then(function (dialog) {
            dialog.result.then(function (returnData) {
                if (returnData) {
                    if (returnData.code === 200) {
                        _this.manageData(returnData);
                    }
                    else {
                        console.log('To take a photo is raised the error.');
                    }
                }
            });
        });
    };
    IdentifyComponent.prototype.initForm = function () {
        this.getVehicleForm = new forms_1.FormGroup({
            year: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            make: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            model: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            category: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ])
        });
    };
    IdentifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bIsPageLoading = false;
        this._spinner.start();
        this.paramSub = this.route.params.subscribe(function (params) {
            _this.strSlug = params['id'];
            _this.strCurrentPageName = _this.router.url.split('/')[1];
            var url;
            switch (_this.strCurrentPageName) {
                case _this.arrStrPages[0]:
                    url = '/v1/data/requestvin';
                    break;
                case _this.arrStrPages[1]:
                    url = '/v1/data/vinretry';
                    break;
                case _this.arrStrPages[2]:
                    url = '/v1/data/requestodometer';
                    break;
                case _this.arrStrPages[3]:
                    url = '/v1/data/confirmodometer';
                    break;
            }
            _this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    slug: _this.strSlug
                }
            };
            _this._dataService.post(url, postData)
                .subscribe(function (res) {
                _this.getEventData(res.data);
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
        this._dataService.get('v1/vehicle/years')
            .subscribe(function (res) {
            _this.arrYears = [];
            for (var key in res.data.years) {
                var value = parseInt(res.data.years[key]);
                _this.arrYears.push({ value: key, label: value });
            }
            _this.arrYears.sort(function (a, b) {
                return parseInt(b.label) - parseInt(a.label);
            });
            _this.bIsYearsLoad = true;
            _this.initForm();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    IdentifyComponent.prototype.ngOnDestroy = function () {
        this.paramSub.unsubscribe();
    };
    IdentifyComponent.prototype.manageData = function (res) {
        var that = this;
        switch (res.data.callback) {
            case 'vinretry':
                that.router.navigate([("/" + this.arrStrPages[1]), res.data.slug]);
                break;
            case 'requestodometer':
                that.router.navigate([("/" + this.arrStrPages[2]), res.data.slug]);
                break;
            case 'confirmodometer':
                that.router.navigate([("/" + this.arrStrPages[3]), res.data.slug]);
                break;
            case 'getclaim':
                that.router.navigate(['/vehicle', res.data.slug]);
                break;
        }
    };
    IdentifyComponent.prototype.confirmMileage = function () {
        var _this = this;
        this._spinner.start();
        var postData = {
            code: 200,
            data: {
                miles: this.strConfirmValue,
                slug: this.strSlug
            }
        };
        this._dataService.post('v1/data/confirmodometersubmit', postData)
            .subscribe(function (res) {
            _this._spinner.stop();
            _this.manageData(res);
        }, function (error) {
            console.error('Unable to fetch brands', error);
            _this._spinner.stop();
        });
    };
    IdentifyComponent.prototype.findBtn = function () {
        this.bIsVinModal = this.bIsVinModal ? false : true;
        this.nModalType = 0;
    };
    IdentifyComponent.prototype.onYearsSelected = function (event) {
        var _this = this;
        var year = event.value;
        this.arrMakes = [];
        this.arrModels = [];
        this.bIsMakeDisabled = true;
        this.bIsModelDisabled = true;
        this.bIsCategoryDisabled = true;
        this.nYearID = year;
        if (year === -1) {
            this.bIsMakeDisabled = true;
        }
        else {
            this._spinner.start();
            var strClaimUrl = 'v1/vehicle/makesfromdata?year=' + year;
            this._dataService.get(strClaimUrl)
                .subscribe(function (res) {
                _this.bIsMakeDisabled = false;
                _this.arrMakes = res.data.map(function (item) {
                    return { value: item.make, label: item.make };
                });
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    IdentifyComponent.prototype.onMakesSelected = function (event) {
        var _this = this;
        var make = event.value;
        this.arrModels = [];
        this.bIsModelDisabled = true;
        this.bIsCategoryDisabled = true;
        if (parseInt(make) === -1) {
            this.arrModels = [];
            this.nModelID = -1;
            this.bIsModelDisabled = true;
            this.bIsCategoryDisabled = true;
            return;
        }
        this._spinner.start();
        var strClaimUrl = 'v1/vehicle/modelsfromdata?year=' + this.nYearID;
        strClaimUrl += '&make=';
        strClaimUrl += make;
        this._dataService.get(strClaimUrl)
            .subscribe(function (res) {
            _this.arrModels = res.data.map(function (item) {
                return { value: item.model, label: item.model };
            });
            _this.nMakeID = make;
            _this.bIsModelDisabled = false;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    IdentifyComponent.prototype.onModelsSelected = function (event) {
        var _this = this;
        var model = event.value;
        this.arrCategories = [];
        this.bIsCategoryDisabled = true;
        if (parseInt(model) === -1) {
            this.arrCategories = [];
            this.nCategoryID = -1;
            this.bIsCategoryDisabled = true;
            return;
        }
        this._spinner.start();
        var strClaimUrl = 'v1/vehicle/stylesfromdata?year=' + this.nYearID;
        strClaimUrl += '&make=';
        strClaimUrl += this.nMakeID;
        strClaimUrl += '&model=';
        strClaimUrl += model;
        this._dataService.get(strClaimUrl)
            .subscribe(function (res) {
            _this.arrCategories = res.data.map(function (item) {
                return { value: item.vehicleId, label: item.style };
            });
            _this.nModelID = model;
            _this.bIsCategoryDisabled = false;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    IdentifyComponent.prototype.onCategoriesSelected = function (event) {
        var category = event.value;
        if (parseInt(category) === -1) {
            return;
        }
        this.nCategoryID = category;
    };
    IdentifyComponent.prototype.alertError = function (text, time) {
        this.bIsVinErrorAlert = true;
        this.strErrorAlert = text;
        var that = this;
        setTimeout(function () { that.bIsVinErrorAlert = false; }, time);
    };
    IdentifyComponent.prototype.showVehicle = function () {
        var _this = this;
        if (!this.getVehicleForm.valid) {
            this.alertError('Please select all the fields.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    AutoYear: this.getVehicleForm['value']['year'],
                    AutoID: this.nCategoryID,
                    slug: this.strSlug
                }
            };
            this._dataService.post('v1/data/savevehicle', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this.manageData(res);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
            });
        }
    };
    IdentifyComponent.prototype.manualBtn = function (strCallback) {
        if (strCallback === this.arrStrMaualCallbacks[0]) {
            this.nModalType = 1;
            this.getVinForm = new forms_1.FormGroup({
                vincode: new forms_1.FormControl(null, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(17),
                    forms_1.Validators.maxLength(17)
                ])
            });
        }
        else {
            this.nModalType = 2;
            this.getMilesForm = new forms_1.FormGroup({
                mileage: new forms_1.FormControl(null, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[0-9]*')
                ])
            });
        }
        this.bIsVinModal = true;
    };
    IdentifyComponent.prototype.goWithMiles = function () {
        var _this = this;
        if (!this.getMilesForm.valid) {
            this.alertError('The mileage must be numberic.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    miles: this.getMilesForm['value']['mileage'],
                    slug: this.strSlug
                }
            };
            this._dataService.post('v1/data/confirmodometersubmit', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this.router.navigate(['/vehicle', res.data.slug]);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
            });
        }
    };
    IdentifyComponent.prototype.goWithVin = function () {
        var _this = this;
        if (!this.getVinForm.valid || (/^[a-zA-Z0-9]*$/.test(this.getVinForm['value']['vincode'])) === false) {
            this.alertError('Vincode should be alphanumberic and length should be 17.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    AutoVIN: this.getVinForm['value']['vincode'],
                    slug: this.strSlug
                }
            };
            this._dataService.post('v1/data/savevehicle', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this.manageData(res);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
            });
        }
    };
    IdentifyComponent.prototype.onVin = function () {
        this.nModalType = 0;
    };
    __decorate([
        core_1.ViewChild('descElement'), 
        __metadata('design:type', Object)
    ], IdentifyComponent.prototype, "descElement", void 0);
    __decorate([
        core_1.ViewChild('takePhoto'), 
        __metadata('design:type', core_1.ElementRef)
    ], IdentifyComponent.prototype, "takePhoto", void 0);
    IdentifyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-identify',
            templateUrl: 'identify.component.html',
            styleUrls: ['identify.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, data_service_1.DataService, event_service_1.EventService, router_1.Router, index_2.SpinnerService, capture_modal_service_1.CaptureModelService, core_1.ViewContainerRef])
    ], IdentifyComponent);
    return IdentifyComponent;
}());
exports.IdentifyComponent = IdentifyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pZGVudGlmeS9pZGVudGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQU1PLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHNCQUdPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsc0JBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsNkJBQXVDLHNCQUFzQixDQUFDLENBQUE7QUFDOUQsOEJBQXVDLHVCQUF1QixDQUFDLENBQUE7QUFDL0Qsc0JBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsc0NBQXVDLDZDQUE2QyxDQUFDLENBQUE7QUFDckYsZ0NBQXVDLGlDQUFpQyxDQUFDLENBQUE7QUFZekU7SUF5REUsMkJBQW9CLEtBQXFCLEVBQy9CLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzNCLE1BQWMsRUFDZCxRQUF3QixFQUN4QixhQUFrQyxFQUNsQyxjQUFnQztRQU50QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUV4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQU0sQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFD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QkFDVCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQ25CO2FBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQztpQkFDcEQsU0FBUyxDQUFDLFVBQUMsR0FBUTtnQkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUUsVUFBQyxLQUFVO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBdGdCRDtRQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDOzswREFBQTtJQUN6QjtRQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOzt3REFBQTtJQXpEekI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzs7eUJBQUE7SUEyakJGLHdCQUFDO0FBQUQsQ0F6akJBLEFBeWpCQyxJQUFBO0FBempCWSx5QkFBaUIsb0JBeWpCN0IsQ0FBQSIsImZpbGUiOiJhcHAvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxuICBGb3JtQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICAgICAgICAgICBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9ICAgICAgICAgICBmcm9tICcuLi9jb3JlL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDYXB0dXJlTW9kZWxTZXJ2aWNlIH0gICAgZnJvbSAnLi4vY29yZS9tb2RhbC9jYXB0dXJlL2NhcHR1cmUubW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSAgICAgICAgICAgZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBJZGVudGlmeUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaWRlbnRpZnknLFxuICB0ZW1wbGF0ZVVybDogJ2lkZW50aWZ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lkZW50aWZ5LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIElkZW50aWZ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBuVG90b2FsU3RlcDogbnVtYmVyO1xuICBuQ3VycmVudFN0ZXA6IG51bWJlcjtcbiAgblllYXJJRDogbnVtYmVyO1xuICBuTWFrZUlEOiBudW1iZXI7XG4gIG5Nb2RlbElEOiBudW1iZXI7XG4gIG5DYXRlZ29yeUlEOiBudW1iZXI7XG4gIG5Nb2RhbFR5cGU6IG51bWJlcjsgLy8gMDogZ2V0IHZlaGljbGUsIDE6Z2V0IHZpblxuXG4gIHN0ckhlbHBJY29uOiBzdHJpbmc7XG4gIHN0ckxpdmVIZWxwSWNvbjogc3RyaW5nO1xuICBzdHJTbHVnOiBzdHJpbmc7XG4gIHN0ckJhY2tlbmRBcGk6IHN0cmluZztcbiAgc3RyVGl0bGU6IHN0cmluZztcbiAgc3RyRGVzYzogc3RyaW5nO1xuICBzdHJJbWc6IHN0cmluZztcbiAgc3RyQnRuTmFtZTogc3RyaW5nO1xuICBzdHJGaW5kQnRuOiBzdHJpbmc7XG4gIHN0ck1hbnVhbEJ0bjogc3RyaW5nO1xuICBzdHJDdXJyZW50UGFnZU5hbWU6IHN0cmluZztcbiAgc3RyQ2FsbGJhY2s6IHN0cmluZztcbiAgc3RyQ29uZmlybU1zZzogc3RyaW5nO1xuICBzdHJDb25maXJtVmFsdWU6IHN0cmluZztcbiAgc3RyRXJyb3JBbGVydDogc3RyaW5nO1xuICBzdHJNYW51YWxCdG5DYWxsYmFjazogc3RyaW5nO1xuXG5cbiAgYXJyU3RyUGFnZXM6IHN0cmluZ1tdO1xuICBhcnJTdHJNYXVhbENhbGxiYWNrczogc3RyaW5nW107XG4gIGFyclllYXJzOiBhbnlbXTtcbiAgYXJyTWFrZXM6IGFueVtdO1xuICBhcnJNb2RlbHM6IGFueVtdO1xuICBhcnJDYXRlZ29yaWVzOiBhbnlbXTtcblxuICBiSXNIZWxwU3RhdHVzOiBib29sZWFuO1xuICBiSXNMaXZlSGVscFN0YXR1czogYm9vbGVhbjtcbiAgYklzUGFnZUxvYWRpbmc6IGJvb2xlYW47XG4gIGJJc0ZpbmRCdG46IGJvb2xlYW47XG4gIGJJc01hbnVhbEJ0bjogYm9vbGVhbjtcbiAgYklzVGFrZVBob3RvOiBib29sZWFuO1xuICBiSXNWaW5Nb2RhbDogYm9vbGVhbjtcbiAgYklzTWFrZURpc2FibGVkOiBib29sZWFuO1xuICBiSXNNb2RlbERpc2FibGVkOiBib29sZWFuO1xuICBiSXNWaW5FcnJvckFsZXJ0OiBib29sZWFuO1xuICBiSXNDYXRlZ29yeURpc2FibGVkOiBib29sZWFuO1xuICBiSXNZZWFyc0xvYWQ6IGJvb2xlYW47XG5cbiAgcGFyYW1TdWI6IGFueTtcblxuICBAVmlld0NoaWxkKCdkZXNjRWxlbWVudCcpIGRlc2NFbGVtZW50OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ3Rha2VQaG90bycpIHRha2VQaG90bzogRWxlbWVudFJlZjtcbiAgdXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcblxuICBnZXRWZWhpY2xlRm9ybTogRm9ybUdyb3VwO1xuICBnZXRWaW5Gb3JtOiBGb3JtR3JvdXA7XG4gIGdldE1pbGVzRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3NwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NhcHR1cmVNb2RlbDogQ2FwdHVyZU1vZGVsU2VydmljZSxcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG5cbiAgICB0aGlzLnN0ckJhY2tlbmRBcGkgPSBDb25maWcuQVBJO1xuICAgIHRoaXMublRvdG9hbFN0ZXAgICA9IDA7XG4gICAgdGhpcy5uQ3VycmVudFN0ZXAgID0gMDtcbiAgICB0aGlzLm5ZZWFySUQgICAgICAgPSAtMTtcbiAgICB0aGlzLm5NYWtlSUQgICAgICAgPSAtMTtcbiAgICB0aGlzLm5Nb2RlbElEICAgICAgPSAtMTtcbiAgICB0aGlzLm5DYXRlZ29yeUlEICAgPSAtMTtcbiAgICB0aGlzLm5Nb2RhbFR5cGUgICAgPSAtMTtcblxuICAgIHRoaXMuYXJyU3RyUGFnZXMgICAgICA9IFsnaWRlbnRpZnknLCAnaWRlbnRpZnlfcmV0cnknLCAnaWRlbnRpZnlfb2RvbWV0ZXInLCAnY29uZmlybV9vZG9tZXRlciddO1xuICAgIHRoaXMuYXJyU3RyTWF1YWxDYWxsYmFja3MgPSBbJ21hbnVhbFZpbicsICdtYW51YWxPZG9tdGVyJ107XG4gICAgdGhpcy5iSXNUYWtlUGhvdG8gICAgICAgID0gZmFsc2U7XG4gICAgdGhpcy5iSXNWaW5Nb2RhbCAgICAgICAgID0gZmFsc2U7XG4gICAgdGhpcy5iSXNNYWtlRGlzYWJsZWQgICAgID0gdHJ1ZTtcbiAgICB0aGlzLmJJc01vZGVsRGlzYWJsZWQgICAgPSB0cnVlO1xuICAgIHRoaXMuYklzQ2F0ZWdvcnlEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5iSXNWaW5FcnJvckFsZXJ0ICAgID0gZmFsc2U7XG4gICAgdGhpcy5iSXNZZWFyc0xvYWQgICAgICAgID0gZmFsc2U7XG5cbiAgICB0aGlzLmFyclllYXJzID0gW107XG4gICAgdGhpcy5hcnJNYWtlcyA9IFtdO1xuICAgIHRoaXMuYXJyTW9kZWxzID0gW107XG4gICAgdGhpcy5hcnJDYXRlZ29yaWVzID0gW107XG4gIH1cblxuICBnZXRFdmVudERhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5uVG90b2FsU3RlcCAgICAgPSBkYXRhLnN0ZXBzLnRvdGFsU3RlcDtcbiAgICB0aGlzLm5DdXJyZW50U3RlcCAgICA9IGRhdGEuc3RlcHMuY3VycmVudFN0ZXA7XG4gICAgdGhpcy5zdHJMaXZlSGVscEljb24gPSB0aGlzLnN0ckJhY2tlbmRBcGkgKyBkYXRhLmxpdmVIZWxwLmljb247XG4gICAgdGhpcy5zdHJIZWxwSWNvbiAgICAgPSB0aGlzLnN0ckJhY2tlbmRBcGkgKyBkYXRhLmhlbHAuaWNvbjtcbiAgICBsZXQgbG9nb0ljb24gICAgICAgICA9IHRoaXMuc3RyQmFja2VuZEFwaSArIGRhdGEudWkubG9nbztcbiAgICB0aGlzLnN0clRpdGxlICAgICAgICA9IGRhdGEudGl0bGU7XG4gICAgdGhpcy5zdHJEZXNjICAgICAgICAgPSBkYXRhLmRlc2M7XG4gICAgdGhpcy5zdHJJbWcgICAgICAgICAgPSB0aGlzLnN0ckJhY2tlbmRBcGkgKyBkYXRhLmltZztcbiAgICB0aGlzLnN0ckJ0bk5hbWUgICAgICA9IGRhdGEuYnV0dG9uO1xuICAgIHRoaXMuc3RyQ2FsbGJhY2sgICAgID0gZGF0YS5jYWxsYmFjaztcblxuICAgIGlmKHRoaXMuc3RyQ3VycmVudFBhZ2VOYW1lID09PSB0aGlzLmFyclN0clBhZ2VzWzBdIHx8IHRoaXMuc3RyQ3VycmVudFBhZ2VOYW1lID09PSB0aGlzLmFyclN0clBhZ2VzWzFdKSB7XG4gICAgICB0aGlzLnN0ckJ0bk5hbWUgPSBkYXRhLmJ1dHRvbjtcbiAgICAgIHRoaXMuYklzVGFrZVBob3RvID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoZGF0YS50YWtlICYmIGRhdGEudGFrZS5vbiA9PT0gMSkge1xuICAgICAgICB0aGlzLnN0ckJ0bk5hbWUgPSBkYXRhLnRha2UuYnV0dG9uO1xuICAgICAgICB0aGlzLmJJc1Rha2VQaG90byA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJJc1Rha2VQaG90byA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMuc3RyQ3VycmVudFBhZ2VOYW1lID09PSB0aGlzLmFyclN0clBhZ2VzWzNdKSB7XG4gICAgICB0aGlzLnN0ckNvbmZpcm1Nc2cgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICB0aGlzLnN0ckNvbmZpcm1WYWx1ZSA9IGRhdGEubWlsZXM7XG4gICAgfVxuXG4gICAgaWYoZGF0YS5saXZlSGVscCAmJiBkYXRhLmxpdmVIZWxwLm9uID09PSAxKSB7XG4gICAgICB0aGlzLmJJc0xpdmVIZWxwU3RhdHVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iSXNMaXZlSGVscFN0YXR1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGRhdGEuaGVscCAmJiBkYXRhLmhlbHAub24gPT09IDEpIHtcbiAgICAgIHRoaXMuYklzSGVscFN0YXR1cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYklzSGVscFN0YXR1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGRhdGEuZmluZCAmJiBkYXRhLmZpbmQub24gPT09IDEpIHtcbiAgICAgIHRoaXMuYklzRmluZEJ0biA9IHRydWU7XG4gICAgICB0aGlzLnN0ckZpbmRCdG4gPSBkYXRhLmZpbmQuYnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJJc0ZpbmRCdG4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihkYXRhLm1hbnVhbCAmJiBkYXRhLm1hbnVhbC5vbiA9PT0gMSkge1xuICAgICAgdGhpcy5iSXNNYW51YWxCdG4gPSB0cnVlO1xuICAgICAgdGhpcy5zdHJNYW51YWxCdG4gPSBkYXRhLm1hbnVhbC5idXR0b247XG4gICAgICB0aGlzLnN0ck1hbnVhbEJ0bkNhbGxiYWNrID0gZGF0YS5tYW51YWwuY2FsbGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYklzTWFudWFsQnRuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRTZXJ2aWNlLmVtaXQoJ2xvYWRfdG9wYmFyX2RhdGEnLCB7XG4gICAgICBoZWxwSWNvbjogICAgICAgdGhpcy5zdHJIZWxwSWNvbixcbiAgICAgIGhlbHBTdGF0dXM6ICAgICB0aGlzLmJJc0hlbHBTdGF0dXMsXG4gICAgICBsaXZlSGVscEljb246ICAgdGhpcy5zdHJMaXZlSGVscEljb24sXG4gICAgICBsaXZlSGVscFN0YXR1czogdGhpcy5iSXNMaXZlSGVscFN0YXR1cyxcbiAgICAgIGxvZ29JY29uOiAgICAgICBsb2dvSWNvbixcbiAgICAgIGhlbHBMaW5rOiAgICAgICBkYXRhLmhlbHAubGlua1xuICAgIH0pO1xuICAgIHRoaXMuYklzUGFnZUxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZERlc2NFbGVtZW50KCk7XG4gICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gIH1cblxuICBsb2FkRGVzY0VsZW1lbnQobkNvdW50OiBudW1iZXI9MCkge1xuICAgIGlmKG5Db3VudCA+IDUwKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGltZW91dCB0byBsb2FkIHRoZSBkZXNjIGVsZW1lbnQnKTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuZGVzY0VsZW1lbnQpIHtcbiAgICAgIG5Db3VudCArKztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkRGVzY0VsZW1lbnQobkNvdW50KSwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNjRWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuc3RyRGVzYztcblxuICAgICAgbGV0IHVybCA9IHRoaXMuc3RyQmFja2VuZEFwaSArICcvdjEvZGF0YS8nICsgdGhpcy5zdHJDYWxsYmFjaztcbiAgICAgIGxldCBwb3N0RGF0YTogT2JqZWN0O1xuXG4gICAgICBzd2l0Y2ggKHRoaXMuc3RyQ3VycmVudFBhZ2VOYW1lKSB7XG4gICAgICAgIGNhc2UgdGhpcy5hcnJTdHJQYWdlc1swXTpcbiAgICAgICAgICBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgc2x1ZzogdGhpcy5zdHJTbHVnLFxuICAgICAgICAgICAgICB0eXBlOiAnVklOJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0aGlzLmFyclN0clBhZ2VzWzFdOlxuICAgICAgICAgIHBvc3REYXRhID0ge1xuICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBzbHVnOiB0aGlzLnN0clNsdWcsXG4gICAgICAgICAgICAgIHR5cGU6ICdWSU4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHRoaXMuYXJyU3RyUGFnZXNbMl06XG4gICAgICAgICAgcG9zdERhdGEgPSB7XG4gICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHNsdWc6IHRoaXMuc3RyU2x1ZyxcbiAgICAgICAgICAgICAgdHlwZTogJ09kb21ldGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0aGlzLmFyclN0clBhZ2VzWzNdOlxuICAgICAgICAgIHBvc3REYXRhID0ge1xuICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBzbHVnOiB0aGlzLnN0clNsdWcsXG4gICAgICAgICAgICAgIG1pbGVzOiB0aGlzLnN0ckNvbmZpcm1WYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IHVybH0pO1xuXG4gICAgICB0aGlzLnVwbG9hZGVyLm9uQnVpbGRJdGVtRm9ybSA9IChmaWxlSXRlbTogYW55LCBmb3JtOiBhbnkpID0+IHtcbiAgICAgICAgZm9ybS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy51cGxvYWRlci5vbkFmdGVyQWRkaW5nRmlsZSA9IChmaWxlSXRlbSkgPT4ge1xuICAgICAgICBmaWxlSXRlbS53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgICAgZmlsZUl0ZW0udXBsb2FkKCk7XG4gICAgICAgIHRoaXMub3BlblVwbG9hZFByb2dyZXNzQmFyKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIG9wZW5VcGxvYWRQcm9ncmVzc0JhcigpIHtcbiAgICB0aGlzLl9jYXB0dXJlTW9kZWwub3BlbkRpYWxvZyh0aGlzLnVwbG9hZGVyLCB0aGlzLl92aWV3Q29udGFpbmVyKVxuICAgICAgLnRoZW4oKGRpYWxvZzogYW55KSA9PiB7XG4gICAgICAgIGRpYWxvZy5yZXN1bHQudGhlbigocmV0dXJuRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYocmV0dXJuRGF0YSkge1xuICAgICAgICAgICAgaWYocmV0dXJuRGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VEYXRhKHJldHVybkRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvIHRha2UgYSBwaG90byBpcyByYWlzZWQgdGhlIGVycm9yLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGluaXRGb3JtKCkge1xuICAgIHRoaXMuZ2V0VmVoaWNsZUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHllYXI6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgIDxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZFxuICAgICAgXSksXG4gICAgICBtYWtlOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1xuICAgICAgICA8YW55PlZhbGlkYXRvcnMucmVxdWlyZWRcbiAgICAgIF0pLFxuICAgICAgbW9kZWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgIDxhbnk+VmFsaWRhdG9ycy5yZXF1aXJlZFxuICAgICAgXSksXG4gICAgICBjYXRlZ29yeTogbmV3IEZvcm1Db250cm9sKG51bGwsIFtcbiAgICAgICAgPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkXG4gICAgICBdKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iSXNQYWdlTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3NwaW5uZXIuc3RhcnQoKTtcbiAgICB0aGlzLnBhcmFtU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+IHtcbiAgICAgIHRoaXMuc3RyU2x1ZyA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuc3RyQ3VycmVudFBhZ2VOYW1lID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KCcvJylbMV07XG4gICAgICBsZXQgdXJsOiBzdHJpbmc7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5zdHJDdXJyZW50UGFnZU5hbWUpIHtcbiAgICAgICAgY2FzZSB0aGlzLmFyclN0clBhZ2VzWzBdOlxuICAgICAgICAgIHVybCA9ICcvdjEvZGF0YS9yZXF1ZXN0dmluJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHRoaXMuYXJyU3RyUGFnZXNbMV06XG4gICAgICAgICAgdXJsID0gJy92MS9kYXRhL3ZpbnJldHJ5JztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHRoaXMuYXJyU3RyUGFnZXNbMl06XG4gICAgICAgICAgdXJsID0gJy92MS9kYXRhL3JlcXVlc3RvZG9tZXRlcic7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0aGlzLmFyclN0clBhZ2VzWzNdOlxuICAgICAgICAgIHVybCA9ICcvdjEvZGF0YS9jb25maXJtb2RvbWV0ZXInO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNsdWc6IHRoaXMuc3RyU2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KHVybCwgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRFdmVudERhdGEocmVzLmRhdGEpO1xuICAgICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKSk7XG5cbiAgICB9KTtcblxuICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldCgndjEvdmVoaWNsZS95ZWFycycpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmFyclllYXJzID0gW107XG4gICAgICAgIGZvcihsZXQga2V5IGluIHJlcy5kYXRhLnllYXJzKSB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQocmVzLmRhdGEueWVhcnNba2V5XSk7XG4gICAgICAgICAgdGhpcy5hcnJZZWFycy5wdXNoKHt2YWx1ZToga2V5LCBsYWJlbDogdmFsdWV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXJyWWVhcnMuc29ydChmdW5jdGlvbihhOiBhbnksIGI6IGFueSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludChiLmxhYmVsKSAtIHBhcnNlSW50KGEubGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJJc1llYXJzTG9hZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5wYXJhbVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbWFuYWdlRGF0YShyZXM6IGFueSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIHN3aXRjaCAocmVzLmRhdGEuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ3ZpbnJldHJ5JzpcbiAgICAgICAgdGhhdC5yb3V0ZXIubmF2aWdhdGUoW2AvJHt0aGlzLmFyclN0clBhZ2VzWzFdfWAsIHJlcy5kYXRhLnNsdWddKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JlcXVlc3RvZG9tZXRlcic6XG4gICAgICAgIHRoYXQucm91dGVyLm5hdmlnYXRlKFtgLyR7dGhpcy5hcnJTdHJQYWdlc1syXX1gLCByZXMuZGF0YS5zbHVnXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjb25maXJtb2RvbWV0ZXInOlxuICAgICAgICB0aGF0LnJvdXRlci5uYXZpZ2F0ZShbYC8ke3RoaXMuYXJyU3RyUGFnZXNbM119YCwgcmVzLmRhdGEuc2x1Z10pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZ2V0Y2xhaW0nOlxuICAgICAgICB0aGF0LnJvdXRlci5uYXZpZ2F0ZShbJy92ZWhpY2xlJywgcmVzLmRhdGEuc2x1Z10pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25maXJtTWlsZWFnZSgpIHtcbiAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgZGF0YToge1xuICAgICAgICBtaWxlczogdGhpcy5zdHJDb25maXJtVmFsdWUsXG4gICAgICAgIHNsdWc6IHRoaXMuc3RyU2x1Z1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL2NvbmZpcm1vZG9tZXRlcnN1Ym1pdCcsIHBvc3REYXRhKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIHRoaXMubWFuYWdlRGF0YShyZXMpO1xuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKTtcbiAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZpbmRCdG4oKSB7XG4gICAgdGhpcy5iSXNWaW5Nb2RhbCA9IHRoaXMuYklzVmluTW9kYWwgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpcy5uTW9kYWxUeXBlID0gMDtcbiAgfVxuXG4gIG9uWWVhcnNTZWxlY3RlZChldmVudDogYW55KSB7XG4gICAgbGV0IHllYXIgPSAoZXZlbnQgYXMgYW55KS52YWx1ZTtcbiAgICB0aGlzLmFyck1ha2VzID0gW107XG4gICAgdGhpcy5hcnJNb2RlbHMgPSBbXTtcbiAgICB0aGlzLmJJc01ha2VEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5iSXNNb2RlbERpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJJc0NhdGVnb3J5RGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5uWWVhcklEID0geWVhcjtcbiAgICBpZih5ZWFyID09PSAtMSkge1xuICAgICAgdGhpcy5iSXNNYWtlRGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICBsZXQgc3RyQ2xhaW1VcmwgPSAndjEvdmVoaWNsZS9tYWtlc2Zyb21kYXRhP3llYXI9JyArIHllYXI7XG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXQoc3RyQ2xhaW1VcmwpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5iSXNNYWtlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFyck1ha2VzID0gcmVzLmRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IGl0ZW0ubWFrZSwgbGFiZWw6IGl0ZW0ubWFrZX07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWFrZXNTZWxlY3RlZChldmVudDogYW55KSB7XG4gICAgbGV0IG1ha2UgPSAoZXZlbnQgYXMgYW55KS52YWx1ZTtcbiAgICB0aGlzLmFyck1vZGVscyA9IFtdO1xuICAgIHRoaXMuYklzTW9kZWxEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5iSXNDYXRlZ29yeURpc2FibGVkID0gdHJ1ZTtcblxuICAgIGlmKHBhcnNlSW50KG1ha2UpID09PSAtMSkge1xuICAgICAgdGhpcy5hcnJNb2RlbHMgPSBbXTtcbiAgICAgIHRoaXMubk1vZGVsSUQgPSAtMTtcbiAgICAgIHRoaXMuYklzTW9kZWxEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmJJc0NhdGVnb3J5RGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgbGV0IHN0ckNsYWltVXJsID0gJ3YxL3ZlaGljbGUvbW9kZWxzZnJvbWRhdGE/eWVhcj0nICsgdGhpcy5uWWVhcklEO1xuICAgIHN0ckNsYWltVXJsICs9ICcmbWFrZT0nO1xuICAgIHN0ckNsYWltVXJsICs9IG1ha2U7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0KHN0ckNsYWltVXJsKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5hcnJNb2RlbHMgPSByZXMuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7dmFsdWU6IGl0ZW0ubW9kZWwsIGxhYmVsOiBpdGVtLm1vZGVsfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubk1ha2VJRCA9IG1ha2U7XG4gICAgICAgIHRoaXMuYklzTW9kZWxEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcbiAgfVxuXG4gIG9uTW9kZWxzU2VsZWN0ZWQoZXZlbnQ6IGFueSkge1xuICAgIGxldCBtb2RlbCA9IChldmVudCBhcyBhbnkpLnZhbHVlO1xuICAgIHRoaXMuYXJyQ2F0ZWdvcmllcyA9IFtdO1xuICAgIHRoaXMuYklzQ2F0ZWdvcnlEaXNhYmxlZCA9IHRydWU7XG5cbiAgICBpZihwYXJzZUludChtb2RlbCkgPT09IC0xKSB7XG4gICAgICB0aGlzLmFyckNhdGVnb3JpZXMgPSBbXTtcbiAgICAgIHRoaXMubkNhdGVnb3J5SUQgICA9IC0xO1xuICAgICAgdGhpcy5iSXNDYXRlZ29yeURpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3Bpbm5lci5zdGFydCgpO1xuICAgIGxldCBzdHJDbGFpbVVybCA9ICd2MS92ZWhpY2xlL3N0eWxlc2Zyb21kYXRhP3llYXI9JyArIHRoaXMublllYXJJRDtcbiAgICBzdHJDbGFpbVVybCArPSAnJm1ha2U9JztcbiAgICBzdHJDbGFpbVVybCArPSB0aGlzLm5NYWtlSUQ7XG4gICAgc3RyQ2xhaW1VcmwgKz0gJyZtb2RlbD0nO1xuICAgIHN0ckNsYWltVXJsICs9IG1vZGVsO1xuXG4gICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0KHN0ckNsYWltVXJsKVxuICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLmFyckNhdGVnb3JpZXMgPSByZXMuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBpdGVtLnZlaGljbGVJZCwgbGFiZWw6IGl0ZW0uc3R5bGV9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLm5Nb2RlbElEID0gbW9kZWw7XG4gICAgICB0aGlzLmJJc0NhdGVnb3J5RGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcbiAgfVxuXG4gIG9uQ2F0ZWdvcmllc1NlbGVjdGVkKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgY2F0ZWdvcnkgPSAoZXZlbnQgYXMgYW55KS52YWx1ZTtcbiAgICBpZihwYXJzZUludChjYXRlZ29yeSkgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubkNhdGVnb3J5SUQgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGFsZXJ0RXJyb3IodGV4dDogc3RyaW5nLCB0aW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLmJJc1ZpbkVycm9yQWxlcnQgPSB0cnVlO1xuICAgIHRoaXMuc3RyRXJyb3JBbGVydCA9IHRleHQ7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGF0LmJJc1ZpbkVycm9yQWxlcnQgPSBmYWxzZTsgfSwgdGltZSk7XG4gIH1cblxuICBzaG93VmVoaWNsZSgpIHtcbiAgICBpZighdGhpcy5nZXRWZWhpY2xlRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5hbGVydEVycm9yKCdQbGVhc2Ugc2VsZWN0IGFsbCB0aGUgZmllbGRzLicsIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIEF1dG9ZZWFyOiB0aGlzLmdldFZlaGljbGVGb3JtWyd2YWx1ZSddWyd5ZWFyJ10sXG4gICAgICAgICAgQXV0b0lEOiB0aGlzLm5DYXRlZ29yeUlELFxuICAgICAgICAgIHNsdWc6IHRoaXMuc3RyU2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL3NhdmV2ZWhpY2xlJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5tYW5hZ2VEYXRhKHJlcyk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKTtcbiAgICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBtYW51YWxCdG4oc3RyQ2FsbGJhY2s6IHN0cmluZykge1xuICAgIGlmKHN0ckNhbGxiYWNrID09PSB0aGlzLmFyclN0ck1hdWFsQ2FsbGJhY2tzWzBdKSB7XG4gICAgICB0aGlzLm5Nb2RhbFR5cGUgPSAxO1xuICAgICAgdGhpcy5nZXRWaW5Gb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIHZpbmNvZGU6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgICAgPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIDxhbnk+VmFsaWRhdG9ycy5taW5MZW5ndGgoMTcpLFxuICAgICAgICAgIDxhbnk+VmFsaWRhdG9ycy5tYXhMZW5ndGgoMTcpXG4gICAgICAgIF0pXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uTW9kYWxUeXBlID0gMjtcbiAgICAgIHRoaXMuZ2V0TWlsZXNGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIG1pbGVhZ2U6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgICAgPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIDxhbnk+VmFsaWRhdG9ycy5wYXR0ZXJuKCdbMC05XSonKVxuICAgICAgICBdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5iSXNWaW5Nb2RhbCA9IHRydWU7XG5cbiAgfVxuXG4gIGdvV2l0aE1pbGVzKCkge1xuICAgIGlmKCF0aGlzLmdldE1pbGVzRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5hbGVydEVycm9yKCdUaGUgbWlsZWFnZSBtdXN0IGJlIG51bWJlcmljLicsIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1pbGVzOiB0aGlzLmdldE1pbGVzRm9ybVsndmFsdWUnXVsnbWlsZWFnZSddLFxuICAgICAgICAgIHNsdWc6IHRoaXMuc3RyU2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL2NvbmZpcm1vZG9tZXRlcnN1Ym1pdCcsIHBvc3REYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3ZlaGljbGUnLCByZXMuZGF0YS5zbHVnXSk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKTtcbiAgICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ29XaXRoVmluKCkge1xuICAgIGlmKCF0aGlzLmdldFZpbkZvcm0udmFsaWQgfHwgKC9eW2EtekEtWjAtOV0qJC8udGVzdCh0aGlzLmdldFZpbkZvcm1bJ3ZhbHVlJ11bJ3ZpbmNvZGUnXSkpID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5hbGVydEVycm9yKCdWaW5jb2RlIHNob3VsZCBiZSBhbHBoYW51bWJlcmljIGFuZCBsZW5ndGggc2hvdWxkIGJlIDE3LicsIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIEF1dG9WSU46IHRoaXMuZ2V0VmluRm9ybVsndmFsdWUnXVsndmluY29kZSddLFxuICAgICAgICAgIHNsdWc6IHRoaXMuc3RyU2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0KCd2MS9kYXRhL3NhdmV2ZWhpY2xlJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5fc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5tYW5hZ2VEYXRhKHJlcyk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGJyYW5kcycsIGVycm9yKTtcbiAgICAgICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25WaW4oKSB7XG4gICAgdGhpcy5uTW9kYWxUeXBlID0gMDtcbiAgfVxuXG59XG4iXX0=
