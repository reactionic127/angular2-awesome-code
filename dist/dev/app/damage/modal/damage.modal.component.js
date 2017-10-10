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
var data_service_1 = require('../../core/data.service');
var store_service_1 = require('../../core/store.service');
var event_service_1 = require('../../core/event.service');
var damage_location_component_1 = require('../damage-location.component');
var index_1 = require('../../shared/index');
var DamageWindowModalComponent = (function () {
    function DamageWindowModalComponent(dialog, _dataService, _storeService, route, _spinner, _rootNode, _eventService) {
        this.dialog = dialog;
        this._dataService = _dataService;
        this._storeService = _storeService;
        this.route = route;
        this._spinner = _spinner;
        this._rootNode = _rootNode;
        this._eventService = _eventService;
        this.onClose = new core_1.EventEmitter();
        this.imgLoadCount = 0;
        this.loadImgTotal = 0;
        this.modalE = null;
        this.val = 2;
        this.isChecked = true;
        this.damageQuestionData = {
            answer: '',
            message: '',
            callback: ''
        };
        this.context = dialog.context;
        this.autoPartID = dialog.context.autoPartID;
        this.imageMap = dialog.context.carMap.carImgMap;
        this.questionType = 0;
        this.levelMin = 0;
        this.levelMax = 0;
        this.questionOption = -1;
        this.damageLevel = -1;
        this.selectedLevel = -1;
        this.previousQuestionType = -1;
        this.damageLocation = [];
        this.helperContent = '';
        this.damageData = {};
        this.selectedDamageLocation = false;
    }
    DamageWindowModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalE = $(this._rootNode.nativeElement).closest('.modal');
        this.hideModal();
        this.route.params.subscribe(function (params) {
            _this.slug = params['id'];
            var postData = {
                code: 200,
                data: {
                    slug: _this.slug,
                    autoPartID: _this.autoPartID
                }
            };
            _this._dataService.post('v1/data/autopart', postData)
                .subscribe(function (res) {
                _this.host = _this._dataService.host;
                if (res.data.callback === 'saveautopartquestion') {
                    _this.damageQuestionData = res.data;
                    if (_this.damageQuestionData.answer[0].img) {
                        _this.isTextQuestionType = false;
                        _this.selectedQuestionId = -1;
                    }
                    else {
                        _this.isTextQuestionType = true;
                    }
                    _this.questionType = 3;
                }
                else {
                    _this.damageList = res.data.option;
                    _this.selectedImg = _this.damageList[0];
                    _this.modalHeader = res.data.header;
                    _this.modalDescription = res.data.desc;
                    _this.questionType = 1;
                    _this.loadImgTotal = _this.damageList.length;
                    var answers = res.data.option.map(function (element) {
                        return element.answer;
                    });
                    var result = _this.getMinMax(answers);
                    _this.levelMin = result[0];
                    _this.levelMax = result[1];
                    _this.selectedLevel = parseInt(res.data.selected);
                    _this.displayCurrentStep(_this.selectedLevel);
                }
                _this.showModal();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    DamageWindowModalComponent.prototype.getMinMax = function (data) {
        var max = Math.max.apply(Math, data);
        var min = Math.min.apply(Math, data);
        return [min, max];
    };
    DamageWindowModalComponent.prototype.hideModal = function (count) {
        if (count === void 0) { count = 0; }
        if (this.modalE.length <= 0) {
            count++;
            var that_1 = this;
            setTimeout(function () {
                that_1.hideModal(count);
            });
        }
        else if (count > 50) {
            console.log('Fail to loading the modal.');
        }
        else {
            this._spinner.start();
            this.modalE.hide();
        }
    };
    DamageWindowModalComponent.prototype.showModal = function () {
        this.modalE.show();
        this._spinner.stop();
    };
    DamageWindowModalComponent.prototype.closeModal = function () {
        this.context.carMap.markList.splice(-1, 1);
        this.dialog.close();
    };
    DamageWindowModalComponent.prototype.onChangeSlider = function (event) {
        this.displayCurrentStep(event.value);
    };
    DamageWindowModalComponent.prototype.displayCurrentStep = function (level, count) {
        if (count === void 0) { count = 0; }
        this.selectedLevel = level;
        var stepClass = '#damage_modal .step';
        var availableStepClass = stepClass + '.step';
        availableStepClass += level;
        if ($(stepClass).length <= 0) {
            count++;
            var that_2 = this;
            setTimeout(function () {
                that_2.displayCurrentStep(level, count);
            }, 50);
        }
        else if (count > 50) {
            console.log('Fail to loading the step damage images.');
        }
        else {
            $(stepClass).hide();
            $(availableStepClass).show();
        }
    };
    DamageWindowModalComponent.prototype.nextLevel = function (level) {
        level++;
        if (level > this.loadImgTotal) {
            level = this.levelMin;
        }
        else {
            level += this.levelMin;
        }
        this.displayCurrentStep(level);
    };
    DamageWindowModalComponent.prototype.previousLevel = function (level) {
        level--;
        if (level < 0) {
            level = this.levelMax;
        }
        else {
            level += this.levelMin;
        }
        this.displayCurrentStep(level);
    };
    DamageWindowModalComponent.prototype.helper = function () {
        this.previousQuestionType = this.questionType;
        this.questionType = 4;
        console.log(this.selectedLevel);
        this.helperContent = this.damageList[this.selectedLevel - 1].help;
    };
    DamageWindowModalComponent.prototype.closeHelper = function (questionType) {
        if (questionType === void 0) { questionType = 0; }
        if (questionType === 0) {
            this.questionType = this.previousQuestionType;
        }
        else {
            this.questionType = questionType;
        }
        this.displayCurrentStep(this.selectedLevel);
    };
    DamageWindowModalComponent.prototype.loadImg = function () {
        this.imgLoadCount++;
        if (this.imgLoadCount >= this.loadImgTotal) {
            this.imgLoadCount = 0;
        }
    };
    DamageWindowModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DamageWindowModalComponent.prototype.beforeClose = function () {
        return false;
    };
    DamageWindowModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    DamageWindowModalComponent.prototype.clickDoorDamage = function (door, index) {
        console.log(index);
        this.selectedImg = door;
        this.damageLevel = door.answer;
        $('.autopart-area > .step').css('border', 'none');
        this.previousQuestionType = this.questionType;
        this.questionType = 5;
    };
    DamageWindowModalComponent.prototype.damageFinalized = function () {
        var _this = this;
        this.hideModal();
        this.questionType = 0;
        var postData = {
            code: 200,
            data: {
                slug: this.slug,
                autoPartID: this.autoPartID,
                damageLevel: this.damageLevel
            }
        };
        this._dataService.post('v1/data/savedamagelevel', postData)
            .subscribe(function (res) {
            if (res.data.callback === 'saveautopartquestion') {
                if (res.data.message === 'No more questions.') {
                    _this.dialog.close();
                    _this.waitForDMClose(1);
                }
                else {
                    _this.questionType = 3;
                }
            }
            else {
                _this.questionType = 2;
                _this.damageData = res;
                _this.modalHeader = res.data.header;
                _this.modalDescription = res.data.desc;
                _this.host = _this._dataService.host;
            }
            _this.showModal();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    DamageWindowModalComponent.prototype.insertAnswerToList = function ($event) {
        for (var i = 0; i < this.damageLocation.length; i++) {
            if ($event.id === this.damageLocation[i].id) {
                this.damageLocation.splice(i, 1);
                return false;
            }
        }
        this.damageLocation.push($event);
        return true;
    };
    DamageWindowModalComponent.prototype.getLocationAnswer = function ($event) {
        this.insertAnswerToList($event);
        this.myDamageLocation.updateLocation(this.damageLocation);
        if (this.damageLocation.length > 0) {
            this.selectedDamageLocation = true;
        }
        else {
            this.selectedDamageLocation = false;
        }
    };
    DamageWindowModalComponent.prototype.damageAreaFinalized = function () {
        var _this = this;
        this.hideModal();
        var damageLocationAnswerArray = [];
        for (var i = 0; i < this.damageLocation.length; i++) {
            var resItem = {};
            resItem['id'] = this.damageLocation[i].answer['data']['Answer'];
            if (this.damageLocation[i].answer['intersect']) {
                resItem['intersects'] = this.damageLocation[i].answer['intersect'];
            }
            damageLocationAnswerArray.push(resItem);
        }
        var postData = {
            code: 200,
            data: {
                slug: this.slug,
                autoPartId: this.autoPartID,
                damageLocation: damageLocationAnswerArray
            }
        };
        this._dataService.post('v1/data/savedamagelocation', postData)
            .subscribe(function (res) {
            _this.damageQuestionData = res.data;
            if (_this.damageQuestionData.message === 'No more questions.') {
                _this.dialog.close();
                _this.waitForDMClose(0);
            }
            else {
                _this.questionType = 3;
                if (_this.damageQuestionData.answer[0].img) {
                    _this.isTextQuestionType = false;
                    _this.selectedQuestionId = -1;
                }
                else {
                    _this.isTextQuestionType = true;
                }
                _this.questions = res.data.answer;
            }
            _this._eventService.emit('take_damage_screenshot', {
                slug: res.data.slug,
                autoPartId: _this.autoPartID
            });
            _this.showModal();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    DamageWindowModalComponent.prototype.waitForDMClose = function (nType, count) {
        var _this = this;
        if (count === void 0) { count = 0; }
        if (count > 30) {
            console.log('Timeout to wait for the damage modal close event');
        }
        else if (!this.context.carMap._damageModelService.bClose) {
            count++;
            setTimeout(function () { return _this.waitForDMClose(nType, count); }, 50);
        }
        else {
            if (nType === 0) {
                this.imageMap.displayCheckMark();
            }
            else {
                this.imageMap.updatePolygon(this.context.carMap.markList);
                this.imageMap.displayCheckMark();
            }
        }
    };
    DamageWindowModalComponent.prototype.selectAnswer = function (id) {
        this.questionOption = id;
        this.selectedQuestionId = id;
    };
    DamageWindowModalComponent.prototype.onChangeState = function (event) {
        if (event.currentValue) {
            this.questionOption = this.getQuestionId('yes');
        }
        else {
            this.questionOption = this.getQuestionId('no');
        }
    };
    DamageWindowModalComponent.prototype.getQuestionId = function (state) {
        var answerList = this.damageQuestionData.answer.filter(function (e) {
            return e.text.toLowerCase() === state;
        });
        return answerList[0].id;
    };
    DamageWindowModalComponent.prototype.damageQuestionsFinalized = function (funcName) {
        var _this = this;
        this.hideModal();
        this.questionType = 0;
        var postData = {
            code: 200,
            data: {
                slug: this.slug,
                autoPartId: this.autoPartID,
                questionId: this.damageQuestionData.questionId,
                answerId: this.questionOption,
                claimDamageQuestionId: this.damageQuestionData.claimDamageQuestionId
            }
        };
        this._dataService.post('v1/data/saveautopartquestion', postData)
            .subscribe(function (res) {
            _this.showModal();
            _this.damageQuestionData = res.data;
            if (_this.damageQuestionData.message === 'No more questions.') {
                _this.dialog.close();
                _this.waitForDMClose(1);
            }
            else {
                _this.questionType = 3;
                _this.questionOption = -1;
            }
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DamageWindowModalComponent.prototype, "onClose", void 0);
    __decorate([
        core_1.ViewChild(damage_location_component_1.DamageLocationComponent), 
        __metadata('design:type', damage_location_component_1.DamageLocationComponent)
    ], DamageWindowModalComponent.prototype, "myDamageLocation", void 0);
    DamageWindowModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-content',
            templateUrl: 'damage.modal.component.html',
            styleUrls: ['damage.modal.component.css']
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, data_service_1.DataService, store_service_1.StoreService, router_1.ActivatedRoute, index_1.SpinnerService, core_1.ElementRef, event_service_1.EventService])
    ], DamageWindowModalComponent);
    return DamageWindowModalComponent;
}());
exports.DamageWindowModalComponent = DamageWindowModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYW1hZ2UvbW9kYWwvZGFtYWdlLm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBS2dCLGVBQWUsQ0FBQyxDQUFBO0FBQ2hDLCtCQUEwQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNELHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFELDZCQUF3Qyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2xFLDhCQUF3QywwQkFBMEIsQ0FBQyxDQUFBO0FBQ25FLDhCQUF3QywwQkFBMEIsQ0FBQyxDQUFBO0FBRW5FLDBDQUF3Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3ZFLHNCQUF3QyxvQkFBb0IsQ0FBQyxDQUFBO0FBVTdEO0lBb0NJLG9DQUNTLE1BQXFDLEVBQ3BDLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzNCLEtBQXFCLEVBQ3JCLFFBQXdCLEVBQ3hCLFNBQXFCLEVBQ3JCLGFBQTJCO1FBTjVCLFdBQU0sR0FBTixNQUFNLENBQStCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUExQzNCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUF5QjFELGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFLbkIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBV3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRztZQUN4QixNQUFNLEVBQUMsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0Ys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LE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUE5YUQ7UUFBQyxhQUFNLEVBQUU7OytEQUFBO0lBQ1Q7UUFBQyxnQkFBUyxDQUFDLG1EQUF1QixDQUFDOzt3RUFBQTtJQVR2QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztrQ0FBQTtJQWtiRixpQ0FBQztBQUFELENBaGJBLEFBZ2JDLElBQUE7QUFoYlksa0NBQTBCLDZCQWdidEMsQ0FBQSIsImZpbGUiOiJhcHAvZGFtYWdlL21vZGFsL2RhbWFnZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nUmVmLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gICAgICAgICAgICAgZnJvbSAnLi4vLi4vY29yZS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi8uLi9jb3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi8uLi9jb3JlL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFtYWdlTW9kYWxDb250ZW50IH0gICAgICBmcm9tICcuL2RhbWFnZS1tb2RhbC1jb250ZW50JztcbmltcG9ydCB7IERhbWFnZUxvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGFtYWdlLWxvY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9ICAgICAgICAgIGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2RhbWFnZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYW1hZ2UubW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFtYWdlV2luZG93TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBNb2RhbENvbXBvbmVudDxEYW1hZ2VNb2RhbENvbnRlbnQ+LCBPbkluaXQge1xuICAgIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAVmlld0NoaWxkKERhbWFnZUxvY2F0aW9uQ29tcG9uZW50KSBteURhbWFnZUxvY2F0aW9uOiBEYW1hZ2VMb2NhdGlvbkNvbXBvbmVudDtcbiAgICBjb250ZXh0OiBEYW1hZ2VNb2RhbENvbnRlbnQ7XG4gICAgYXV0b1BhcnRJRDogbnVtYmVyO1xuICAgIGRhbWFnZUxpc3Q6IE9iamVjdFtdO1xuICAgIGRhbWFnZURhdGE6IE9iamVjdDtcbiAgICBzZWxlY3RlZEltZzogYW55O1xuICAgIHF1ZXN0aW9uVHlwZTogbnVtYmVyOyAvLyBxdWVzdGlvbiB0eXBlIGluIHBvcCBtb2RhbFxuICAgIGxldmVsTWluOiBudW1iZXI7XG4gICAgbGV2ZWxNYXg6IG51bWJlcjtcbiAgICBkYW1hZ2VRdWVzdGlvbkRhdGE6IGFueTtcbiAgICBkYW1hZ2VMZXZlbDogbnVtYmVyO1xuICAgIHF1ZXN0aW9uT3B0aW9uOiBudW1iZXI7XG4gICAgc2VsZWN0ZWRRdWVzdGlvbklkOiBudW1iZXI7XG5cblxuICAgIG1vZGFsSGVhZGVyOiBzdHJpbmc7XG4gICAgbW9kYWxEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHF1ZXN0aW9uczogc3RyaW5nW107XG4gICAgaXNUZXh0UXVlc3Rpb25UeXBlOiBib29sZWFuO1xuXG4gICAgaW1hZ2VNYXA6IGFueTtcbiAgICBkYW1hZ2VMb2NhdGlvbjogbnVtYmVyW107XG4gICAgaG9zdDogYW55O1xuICAgIHNlbGVjdGVkRGFtYWdlTG9jYXRpb246IGJvb2xlYW47XG4gICAgaW1nTG9hZENvdW50OiBudW1iZXIgPSAwO1xuICAgIGxvYWRJbWdUb3RhbDogbnVtYmVyID0gMDtcbiAgICBtb2RhbEU6IGFueSA9IG51bGw7XG4gICAgcHJldmlvdXNRdWVzdGlvblR5cGU6IG51bWJlcjsgLy8gcHJldmlvdXMgcXVlc3Rpb24gdHlwZVxuICAgIGhlbHBlckNvbnRlbnQ6IHN0cmluZzsgLy8gaGVscGVyIGNvbnRlbnRcbiAgICBzZWxlY3RlZExldmVsOiBudW1iZXI7IC8vIHRoZSBsZXZlbCBzZWxlY3RlZCBieSBjbGlja2luZyB0aGUgZGFtYWdlIGltYWdlXG4gICAgc2x1Zzogc3RyaW5nO1xuICAgIHZhbDogbnVtYmVyID0gMjtcbiAgICBpc0NoZWNrZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZjxEYW1hZ2VNb2RhbENvbnRlbnQ+LFxuICAgICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgX3NwaW5uZXI6IFNwaW5uZXJTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfcm9vdE5vZGU6IEVsZW1lbnRSZWYsXG4gICAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZVxuICAgICkge1xuICAgICAgdGhpcy5kYW1hZ2VRdWVzdGlvbkRhdGEgPSB7XG4gICAgICAgIGFuc3dlcjonJyxcbiAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIGNhbGxiYWNrOiAnJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuY29udGV4dCAgICAgICAgICAgICAgICA9IGRpYWxvZy5jb250ZXh0O1xuICAgICAgdGhpcy5hdXRvUGFydElEICAgICAgICAgICAgID0gZGlhbG9nLmNvbnRleHQuYXV0b1BhcnRJRDtcbiAgICAgIHRoaXMuaW1hZ2VNYXAgICAgICAgICAgICAgICA9IGRpYWxvZy5jb250ZXh0LmNhck1hcC5jYXJJbWdNYXA7XG4gICAgICB0aGlzLnF1ZXN0aW9uVHlwZSAgICAgICAgICAgPSAwO1xuICAgICAgdGhpcy5sZXZlbE1pbiAgICAgICAgICAgICAgID0gMDtcbiAgICAgIHRoaXMubGV2ZWxNYXggICAgICAgICAgICAgICA9IDA7XG4gICAgICB0aGlzLnF1ZXN0aW9uT3B0aW9uICAgICAgICAgPSAtMTtcbiAgICAgIHRoaXMuZGFtYWdlTGV2ZWwgICAgICAgICAgICA9IC0xO1xuICAgICAgdGhpcy5zZWxlY3RlZExldmVsICAgICAgICAgID0gLTE7XG4gICAgICB0aGlzLnByZXZpb3VzUXVlc3Rpb25UeXBlICAgPSAtMTtcbiAgICAgIHRoaXMuZGFtYWdlTG9jYXRpb24gICAgICAgICA9IFtdO1xuICAgICAgdGhpcy5oZWxwZXJDb250ZW50ICAgICAgICAgID0gJyc7XG4gICAgICB0aGlzLmRhbWFnZURhdGEgICAgICAgICAgICAgPSB7fTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYW1hZ2VMb2NhdGlvbiA9ZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLm1vZGFsRSA9ICQodGhpcy5fcm9vdE5vZGUubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJyk7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zPT4ge1xuICAgICAgICB0aGlzLnNsdWcgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxuICAgICAgICAgICAgYXV0b1BhcnRJRDogdGhpcy5hdXRvUGFydElEXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3QoJ3YxL2RhdGEvYXV0b3BhcnQnLCBwb3N0RGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0ID0gdGhpcy5fZGF0YVNlcnZpY2UuaG9zdDtcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmNhbGxiYWNrID09PSAnc2F2ZWF1dG9wYXJ0cXVlc3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGFtYWdlUXVlc3Rpb25EYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgIGlmKCh0aGlzLmRhbWFnZVF1ZXN0aW9uRGF0YSBhcyBhbnkpLmFuc3dlclswXS5pbWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGV4dFF1ZXN0aW9uVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvbklkID0gLTE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RleHRRdWVzdGlvblR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25UeXBlID0gMztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGlzdCA9IHJlcy5kYXRhLm9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEltZyA9IHRoaXMuZGFtYWdlTGlzdFswXTtcbiAgICAgICAgICAgICAgdGhpcy5tb2RhbEhlYWRlciA9IHJlcy5kYXRhLmhlYWRlcjtcbiAgICAgICAgICAgICAgdGhpcy5tb2RhbERlc2NyaXB0aW9uID0gcmVzLmRhdGEuZGVzYztcbiAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvblR5cGUgPSAxO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRJbWdUb3RhbCA9IHRoaXMuZGFtYWdlTGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGxldCBhbnN3ZXJzID0gcmVzLmRhdGEub3B0aW9uLm1hcCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYW5zd2VyO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0TWluTWF4KGFuc3dlcnMpO1xuICAgICAgICAgICAgICB0aGlzLmxldmVsTWluID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgICB0aGlzLmxldmVsTWF4ID0gcmVzdWx0WzFdO1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTGV2ZWwgPSBwYXJzZUludChyZXMuZGF0YS5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheUN1cnJlbnRTdGVwKHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRNaW5NYXgoZGF0YTogbnVtYmVyW10pIHtcbiAgICAgIGxldCBtYXggPSBNYXRoLm1heC5hcHBseShNYXRoLCBkYXRhKTtcbiAgICAgIGxldCBtaW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLCBkYXRhKTtcbiAgICAgIHJldHVybiBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGhpZGVNb2RhbChjb3VudD0wKSB7XG4gICAgICBpZih0aGlzLm1vZGFsRS5sZW5ndGggPD0gMCkge1xuICAgICAgICBjb3VudCArKztcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoYXQuaGlkZU1vZGFsKGNvdW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYoY291bnQ+NTApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gbG9hZGluZyB0aGUgbW9kYWwuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zcGlubmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubW9kYWxFLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKSB7XG4gICAgICB0aGlzLm1vZGFsRS5zaG93KCk7XG4gICAgICB0aGlzLl9zcGlubmVyLnN0b3AoKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgdGhpcy5jb250ZXh0LmNhck1hcC5tYXJrTGlzdC5zcGxpY2UoLTEsIDEpO1xuICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVNsaWRlcihldmVudDogYW55KSB7XG4gICAgICB0aGlzLmRpc3BsYXlDdXJyZW50U3RlcCgoZXZlbnQgYXMgYW55KS52YWx1ZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICBkaXNwbGF5IGF2YWlsYWJsZSBzdGVwXG4gICAgcGFyYW1zOlxuICAgIC0gbGV2ZWw6IGRhbWFnZSBsZXZlbChjb3VudGVyKSBcbiAgICAqL1xuICAgIGRpc3BsYXlDdXJyZW50U3RlcChsZXZlbDogbnVtYmVyLCBjb3VudDogbnVtYmVyID0gMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZExldmVsID0gbGV2ZWw7XG4gICAgICBsZXQgc3RlcENsYXNzID0gJyNkYW1hZ2VfbW9kYWwgLnN0ZXAnO1xuICAgICAgbGV0IGF2YWlsYWJsZVN0ZXBDbGFzcyA9IHN0ZXBDbGFzcyArICcuc3RlcCc7XG4gICAgICBhdmFpbGFibGVTdGVwQ2xhc3MgKz0gbGV2ZWw7XG4gICAgICBpZigkKHN0ZXBDbGFzcykubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgY291bnQgKys7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGF0LmRpc3BsYXlDdXJyZW50U3RlcChsZXZlbCwgY291bnQpO1xuICAgICAgICB9LCA1MCk7XG4gICAgICB9IGVsc2UgaWYoY291bnQ+NTApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gbG9hZGluZyB0aGUgc3RlcCBkYW1hZ2UgaW1hZ2VzLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChzdGVwQ2xhc3MpLmhpZGUoKTtcbiAgICAgICAgJChhdmFpbGFibGVTdGVwQ2xhc3MpLnNob3coKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8qXG4gICAgZ28gdG8gbmV4dCBsZXZlbCBvZiBkYW1hZ2VkIGltYWdlc1xuICAgIHBhcmFtczpcbiAgICAtIGxldmVsOiBkYW1hZ2UgbGV2ZWwgXG4gICAgKi9cbiAgICBuZXh0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgICAgbGV2ZWwgKys7XG4gICAgICBpZihsZXZlbCA+IHRoaXMubG9hZEltZ1RvdGFsKSB7XG4gICAgICAgIGxldmVsID0gdGhpcy5sZXZlbE1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsICs9IHRoaXMubGV2ZWxNaW47XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BsYXlDdXJyZW50U3RlcChsZXZlbCk7XG4gICAgfVxuXG4gICAgLypcbiAgICBnbyB0byBwcmV2aW91cyBsZXZlbCBvZiBkYW1hZ2VkIGltYWdlc1xuICAgIHBhcmFtczpcbiAgICAtIGxldmVsOiBkYW1hZ2UgbGV2ZWwgXG4gICAgKi9cbiAgICBwcmV2aW91c0xldmVsKGxldmVsOiBudW1iZXIpIHtcbiAgICAgIGxldmVsIC0tO1xuICAgICAgaWYobGV2ZWwgPCAwKSB7XG4gICAgICAgIGxldmVsID0gdGhpcy5sZXZlbE1heDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsICs9IHRoaXMubGV2ZWxNaW47XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BsYXlDdXJyZW50U3RlcChsZXZlbCk7XG4gICAgfVxuXG4gICAgLypcbiAgICBzaG93IGhlbHBlciB0ZXh0XG4gICAgcGFyYW1zOlxuICAgIC0gbGV2ZWw6IGRhbWFnZSBsZXZlbCBcbiAgICAqL1xuICAgIGhlbHBlcigpIHtcbiAgICAgIHRoaXMucHJldmlvdXNRdWVzdGlvblR5cGUgPSB0aGlzLnF1ZXN0aW9uVHlwZTtcbiAgICAgIHRoaXMucXVlc3Rpb25UeXBlID0gNDtjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgICAgdGhpcy5oZWxwZXJDb250ZW50ID0gKHRoaXMuZGFtYWdlTGlzdFt0aGlzLnNlbGVjdGVkTGV2ZWwtMV0gYXMgYW55KS5oZWxwO1xuICAgIH1cblxuICAgIC8qXG4gICAgY2xvc2UgaGVscGVyIG1vZGFsXG4gICAgcGFyYW1zOlxuICAgIC0gcXVlc3Rpb25UeXBlOiBwcmV2aW91cyBxdWVzdGlvbiB0eXBlIFxuICAgICovXG4gICAgY2xvc2VIZWxwZXIocXVlc3Rpb25UeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICBpZihxdWVzdGlvblR5cGUgPT09IDApIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvblR5cGUgPSB0aGlzLnByZXZpb3VzUXVlc3Rpb25UeXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvblR5cGUgPSBxdWVzdGlvblR5cGU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGxheUN1cnJlbnRTdGVwKHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgfVxuXG4gICAgbG9hZEltZygpIHtcbiAgICAgIHRoaXMuaW1nTG9hZENvdW50ICsrO1xuICAgICAgaWYodGhpcy5pbWdMb2FkQ291bnQgPj0gdGhpcy5sb2FkSW1nVG90YWwpIHtcbiAgICAgICAgdGhpcy5pbWdMb2FkQ291bnQgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJlZm9yZURpc21pc3MoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYmVmb3JlQ2xvc2UoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNsaWNrRG9vckRhbWFnZShkb29yOiBPYmplY3QsIGluZGV4OiBudW1iZXIpIHtjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW1nID0gZG9vcjtcblxuICAgICAgdGhpcy5kYW1hZ2VMZXZlbCA9IChkb29yIGFzIGFueSkuYW5zd2VyO1xuICAgICAgJCgnLmF1dG9wYXJ0LWFyZWEgPiAuc3RlcCcpLmNzcygnYm9yZGVyJywgJ25vbmUnKTtcbiAgICAgIHRoaXMucHJldmlvdXNRdWVzdGlvblR5cGUgPSB0aGlzLnF1ZXN0aW9uVHlwZTtcbiAgICAgIHRoaXMucXVlc3Rpb25UeXBlID0gNTtcbiAgICB9XG5cbiAgICBkYW1hZ2VGaW5hbGl6ZWQoKSB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy5xdWVzdGlvblR5cGUgPSAwO1xuICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgICAgYXV0b1BhcnRJRDogdGhpcy5hdXRvUGFydElELFxuICAgICAgICAgIGRhbWFnZUxldmVsOiB0aGlzLmRhbWFnZUxldmVsXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3QoJ3YxL2RhdGEvc2F2ZWRhbWFnZWxldmVsJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgaWYocmVzLmRhdGEuY2FsbGJhY2sgPT09ICdzYXZlYXV0b3BhcnRxdWVzdGlvbicpIHtcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdObyBtb3JlIHF1ZXN0aW9ucy4nKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgIHRoaXMud2FpdEZvckRNQ2xvc2UoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uVHlwZSA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25UeXBlID0gMjtcbiAgICAgICAgICAgIHRoaXMuZGFtYWdlRGF0YSA9IHJlcztcbiAgICAgICAgICAgIHRoaXMubW9kYWxIZWFkZXIgPSByZXMuZGF0YS5oZWFkZXI7XG4gICAgICAgICAgICB0aGlzLm1vZGFsRGVzY3JpcHRpb24gPSByZXMuZGF0YS5kZXNjO1xuICAgICAgICAgICAgdGhpcy5ob3N0ID0gdGhpcy5fZGF0YVNlcnZpY2UuaG9zdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaG93TW9kYWwoKTtcbiAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgaW5zZXJ0IHRoZSBhbnN3ZXIgdG8gdGhlIGxpc3RcbiAgICAqL1xuICAgIGluc2VydEFuc3dlclRvTGlzdCgkZXZlbnQ6IGFueSkge1xuICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kYW1hZ2VMb2NhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZigkZXZlbnQuaWQgPT09ICh0aGlzLmRhbWFnZUxvY2F0aW9uW2ldIGFzIGFueSkuaWQpIHtcbiAgICAgICAgICB0aGlzLmRhbWFnZUxvY2F0aW9uLnNwbGljZShpLCAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5kYW1hZ2VMb2NhdGlvbi5wdXNoKCRldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGdldCBhbnN3ZXIgYnkgY2xpY2tpbmcgYW5zd2VyXG4gICAgKi9cbiAgICBnZXRMb2NhdGlvbkFuc3dlcigkZXZlbnQ6IGFueSkge1xuICAgICAgdGhpcy5pbnNlcnRBbnN3ZXJUb0xpc3QoJGV2ZW50KTtcbiAgICAgIHRoaXMubXlEYW1hZ2VMb2NhdGlvbi51cGRhdGVMb2NhdGlvbih0aGlzLmRhbWFnZUxvY2F0aW9uKTtcblxuICAgICAgaWYodGhpcy5kYW1hZ2VMb2NhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYW1hZ2VMb2NhdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGFtYWdlTG9jYXRpb24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYW1hZ2VBcmVhRmluYWxpemVkKCkge1xuICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICAgIC8vIHRoaXMucXVlc3Rpb25UeXBlID0gMDtcbiAgICAgIGxldCBkYW1hZ2VMb2NhdGlvbkFuc3dlckFycmF5OiBhbnlbXSA9IFtdO1xuICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kYW1hZ2VMb2NhdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVzSXRlbSA9IDxhbnk+e307XG4gICAgICAgIHJlc0l0ZW1bJ2lkJ10gPSAodGhpcy5kYW1hZ2VMb2NhdGlvbltpXSBhcyBhbnkpLmFuc3dlclsnZGF0YSddWydBbnN3ZXInXTtcbiAgICAgICAgaWYoKHRoaXMuZGFtYWdlTG9jYXRpb25baV0gYXMgYW55KS5hbnN3ZXJbJ2ludGVyc2VjdCddKSB7XG4gICAgICAgICAgcmVzSXRlbVsnaW50ZXJzZWN0cyddID0gKHRoaXMuZGFtYWdlTG9jYXRpb25baV0gYXMgYW55KS5hbnN3ZXJbJ2ludGVyc2VjdCddO1xuICAgICAgICB9XG4gICAgICAgIGRhbWFnZUxvY2F0aW9uQW5zd2VyQXJyYXkucHVzaChyZXNJdGVtKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgICAgYXV0b1BhcnRJZDogdGhpcy5hdXRvUGFydElELFxuICAgICAgICAgIGRhbWFnZUxvY2F0aW9uOiBkYW1hZ2VMb2NhdGlvbkFuc3dlckFycmF5XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3QoJ3YxL2RhdGEvc2F2ZWRhbWFnZWxvY2F0aW9uJywgcG9zdERhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5kYW1hZ2VRdWVzdGlvbkRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICBpZih0aGlzLmRhbWFnZVF1ZXN0aW9uRGF0YS5tZXNzYWdlID09PSAnTm8gbW9yZSBxdWVzdGlvbnMuJykge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMud2FpdEZvckRNQ2xvc2UoMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25UeXBlID0gMztcbiAgICAgICAgICAgIGlmKCh0aGlzLmRhbWFnZVF1ZXN0aW9uRGF0YSBhcyBhbnkpLmFuc3dlclswXS5pbWcpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1RleHRRdWVzdGlvblR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFF1ZXN0aW9uSWQgPSAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNUZXh0UXVlc3Rpb25UeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0gcmVzLmRhdGEuYW5zd2VyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5lbWl0KCd0YWtlX2RhbWFnZV9zY3JlZW5zaG90Jywge1xuICAgICAgICAgICAgc2x1ZzogcmVzLmRhdGEuc2x1ZyxcbiAgICAgICAgICAgIGF1dG9QYXJ0SWQ6IHRoaXMuYXV0b1BhcnRJRFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICAvLyB3YWl0IGZvciBjbG9zaW5nIHRoZSBkYW1hZ2UgbW9kYWxcbiAgICB3YWl0Rm9yRE1DbG9zZShuVHlwZTpudW1iZXIsIGNvdW50OiBudW1iZXIgPSAwKSB7XG4gICAgICBpZihjb3VudCA+IDMwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lb3V0IHRvIHdhaXQgZm9yIHRoZSBkYW1hZ2UgbW9kYWwgY2xvc2UgZXZlbnQnKTtcbiAgICAgIH0gZWxzZSBpZighdGhpcy5jb250ZXh0LmNhck1hcC5fZGFtYWdlTW9kZWxTZXJ2aWNlLmJDbG9zZSkge1xuICAgICAgICBjb3VudCArKztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhaXRGb3JETUNsb3NlKG5UeXBlLCBjb3VudCksIDUwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKG5UeXBlID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZU1hcC5kaXNwbGF5Q2hlY2tNYXJrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWFnZU1hcC51cGRhdGVQb2x5Z29uKHRoaXMuY29udGV4dC5jYXJNYXAubWFya0xpc3QpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VNYXAuZGlzcGxheUNoZWNrTWFyaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0QW5zd2VyKGlkOiBhbnkpIHtcbiAgICAgIHRoaXMucXVlc3Rpb25PcHRpb24gPSBpZDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvbklkID0gaWQ7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VTdGF0ZShldmVudDogYW55KSB7XG4gICAgICBpZigoZXZlbnQgYXMgYW55KS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbk9wdGlvbiA9IHRoaXMuZ2V0UXVlc3Rpb25JZCgneWVzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uT3B0aW9uID0gdGhpcy5nZXRRdWVzdGlvbklkKCdubycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldFF1ZXN0aW9uSWQoc3RhdGU6IHN0cmluZykge1xuICAgICAgbGV0IGFuc3dlckxpc3QgPSAodGhpcy5kYW1hZ2VRdWVzdGlvbkRhdGEgYXMgYW55KS5hbnN3ZXIuZmlsdGVyKGZ1bmN0aW9uKGU6IGFueSkge1xuICAgICAgICByZXR1cm4gZS50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IHN0YXRlO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoYW5zd2VyTGlzdFswXSBhcyBhbnkpLmlkO1xuICAgIH1cblxuICAgIGRhbWFnZVF1ZXN0aW9uc0ZpbmFsaXplZChmdW5jTmFtZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy5xdWVzdGlvblR5cGUgPSAwO1xuICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgICAgYXV0b1BhcnRJZDogdGhpcy5hdXRvUGFydElELFxuICAgICAgICAgIHF1ZXN0aW9uSWQ6IHRoaXMuZGFtYWdlUXVlc3Rpb25EYXRhLnF1ZXN0aW9uSWQsXG4gICAgICAgICAgYW5zd2VySWQ6IHRoaXMucXVlc3Rpb25PcHRpb24sXG4gICAgICAgICAgY2xhaW1EYW1hZ2VRdWVzdGlvbklkOiB0aGlzLmRhbWFnZVF1ZXN0aW9uRGF0YS5jbGFpbURhbWFnZVF1ZXN0aW9uSWRcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdCgndjEvZGF0YS9zYXZlYXV0b3BhcnRxdWVzdGlvbicsIHBvc3REYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgICAgICAgdGhpcy5kYW1hZ2VRdWVzdGlvbkRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICBpZih0aGlzLmRhbWFnZVF1ZXN0aW9uRGF0YS5tZXNzYWdlID09PSAnTm8gbW9yZSBxdWVzdGlvbnMuJykge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMud2FpdEZvckRNQ2xvc2UoMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25UeXBlID0gMztcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25PcHRpb24gPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYnJhbmRzJywgZXJyb3IpKTtcbiAgICB9XG59XG4iXX0=
