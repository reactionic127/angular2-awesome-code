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
var data_service_1 = require('../../core/data.service');
var model_1 = require('../../core/model');
var event_service_1 = require('../../core/event.service');
var index_1 = require('../../shared/index');
var ImageMapComponent = (function () {
    function ImageMapComponent(el, router, _dataService, _eventService, renderer) {
        this.el = el;
        this.router = router;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this.renderer = renderer;
        this.clickOnImage = new core_1.EventEmitter();
        this.doneAutoPart = new core_1.EventEmitter();
        this.selectAutoPart = new core_1.EventEmitter();
        this.loadImage = new core_1.EventEmitter();
        this.eventSwitchLocation = new core_1.EventEmitter();
        this.initMarkList = new core_1.EventEmitter();
        this.previousRegionIndex = -1;
        this.currentSPIndex = -1;
        this.currentDamageIndex = -1;
        this.isLoadFont = false;
        this.isOutlineMethod = false;
        this.bIsColumnMethod = false;
        this.bIsSelected = false;
        this.bIsLocation = false;
        this.nMapH = 0;
        this.nMapW = 0;
        this.nDescW = 0;
        this.nSelectedSection = 0;
        this.nLeftSlideCounter = 0;
        this.nCenterSlideCounter = 0;
        this.nRightSlideCounter = 0;
        this.leftSliders = [];
        this.rightSliders = [];
        this.arrLocations = [];
    }
    ImageMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapImgLaod = false;
        this.strApiUrl = index_1.Config.API;
        this.selectedPolygonList = [];
        if (this.mapData) {
            this.mappingData(this.mapData);
            this.imageMapId = this.uuid('0123456789abcdef');
            this.imageId = this.imageMapId + '_image_map';
            this.imageCanvasId = this.imageMapId + '_image_canvas';
            this.effectCanvasId = this.imageMapId + '_effect_canvas';
        }
        else {
            console.log('Please refresh again to mapping image.');
        }
        if (!this.bPreShowDamages) {
            this._eventService.registerEvent('nex_severity_event', this, function (args) {
                _this.clickOnImage.emit({ value: _this.mapList[_this.currentSPIndex]['data'], id: _this.currentSPIndex });
            });
        }
        else {
            this._eventService.registerEvent('take_damage_screenshot', this, function (args) {
                var data = args[0];
                _this.sendScreenshot(data['slug'], data['autoPartId']);
            });
        }
    };
    ImageMapComponent.prototype.ngOnChanges = function () {
        this.mappingData(this.mapData);
    };
    ImageMapComponent.prototype.ngOnDestroy = function () {
        if (!this.bPreShowDamages) {
            this._eventService.unregisterEvent('nex_severity_event', this);
        }
        else {
            this._eventService.unregisterEvent('take_damage_screenshot', this);
        }
    };
    ImageMapComponent.prototype.roundRect = function (ctx, x, y, width, height, radius, fill, stroke) {
        if (radius === void 0) { radius = 5; }
        if (stroke === void 0) { stroke = true; }
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (stroke) {
            ctx.stroke();
        }
        if (fill) {
            ctx.fill();
        }
    };
    ImageMapComponent.prototype.drawPlusIcon = function (x, y, bigSize, detail, detailText, checked, iconUrl) {
        if (detail === void 0) { detail = false; }
        if (detailText === void 0) { detailText = ''; }
        if (checked === void 0) { checked = false; }
        if (iconUrl === void 0) { iconUrl = ''; }
        var ctx = this.mapCanvas.getContext('2d');
        var metrics = ctx.measureText(detailText);
        var detailTextWidth = metrics.width;
        var imgStartX = x * this.canvasToimageRateW;
        var imgStartY = y * this.canvasToimageRateH;
        var bLeftSituation = false;
        if (this.mapCanvas.width / 2 > imgStartX) {
            bLeftSituation = true;
        }
        else {
            bLeftSituation = false;
        }
        ctx.strokeStyle = '#017bff';
        ctx.fillStyle = 'rgba(255,255,255,1.0)';
        if (!detail) {
            this.roundRect(ctx, imgStartX, imgStartY, 20, 20, 10, true);
        }
        else {
            if (!bLeftSituation) {
                this.roundRect(ctx, (imgStartX - detailTextWidth - 10), imgStartY, detailTextWidth + 30, 20, 10, true);
                ctx.fillStyle = '#017bff';
                ctx.font = '12px';
                ctx.fillText(detailText, (imgStartX + 8 - detailTextWidth - 10), imgStartY + 14);
            }
            else {
                this.roundRect(ctx, imgStartX, imgStartY, detailTextWidth + 30, 20, 10, true);
                ctx.fillStyle = '#017bff';
                ctx.font = '12px';
                ctx.fillText(detailText, imgStartX + 18, imgStartY + 14);
            }
        }
        if (iconUrl && iconUrl !== '') {
            var ctxImg_1 = this.mapCanvas.getContext('2d');
            var imgW_1 = 14, imgH_1 = 14;
            var circleSize = 20;
            var spaceSize_1 = (circleSize - imgW_1) / 2;
            var img_1 = new Image();
            img_1.src = iconUrl;
            var that_1 = this;
            img_1.onload = function () {
                ctxImg_1.globalAlpha = 1;
                ctxImg_1.drawImage(img_1, imgStartX + spaceSize_1, imgStartY + spaceSize_1, imgW_1, imgH_1);
                that_1.mapImgLaod = true;
            };
            img_1.onerror = function () {
                console.log('This image url is invalid: ' + img_1.src);
            };
        }
        else {
            var fontawesomeSize = ctx.measureText('\uF067').width;
            ctx.fillStyle = '#017bff';
            ctx.font = '10px FontAwesome';
            this.checkReady(ctx, imgStartX, imgStartY, checked, fontawesomeSize);
        }
    };
    ImageMapComponent.prototype.checkReady = function (ctx, imgStartX, imgStartY, checked, fontawesomeSize, count) {
        var _this = this;
        if (count === void 0) { count = 0; }
        var currentFontawesomeSize = ctx.measureText('\uF067').width;
        if (count > 20) {
            console.log('Time out to load the font awesome.');
        }
        else if (!this.isLoadFont && currentFontawesomeSize === fontawesomeSize) {
            count++;
            setTimeout(function () { return _this.checkReady(ctx, imgStartX, imgStartY, checked, currentFontawesomeSize, count); }, 100);
        }
        else {
            if (!checked) {
                ctx.fillText('\uF067', imgStartX + 6, imgStartY + 15);
            }
            else {
                ctx.fillText('\uF00C', imgStartX + 6, imgStartY + 15);
            }
            this.isLoadFont = true;
        }
    };
    ImageMapComponent.prototype.mappingData = function (res) {
        var arrSelectedMapList = [];
        if (this.bPreShowDamages) {
            var mapList = res.data.map;
            this.mapImg = res.data.img;
            this.imgSrc = this.strApiUrl + this.mapImg;
            this.mapList = [];
            var indexCounter = 0;
            var _loop_1 = function(item) {
                var parentPolygon = [];
                var parentObject = {};
                var polygonIndex;
                parentObject['parentData'] = mapList[item];
                mapList[item].Coordinates.split(',').forEach(function (e, i) {
                    if (i % 2 === 0) {
                        polygonIndex = i / 2;
                        parentPolygon[polygonIndex] = new model_1.CoordiateModel();
                        parentPolygon[polygonIndex].x = parseInt(e);
                    }
                    else {
                        parentPolygon[polygonIndex].y = parseInt(e);
                    }
                });
                parentObject['parentPolygons'] = parentPolygon;
                parentObject['index'] = indexCounter;
                if (mapList[item]['Title'] === 'Bound Box' && mapList[item]['child']) {
                    parentObject['child'] = [];
                    var _loop_2 = function(childItem) {
                        var childNewItem = {};
                        indexCounter++;
                        var childPolygon = [];
                        var childPolygonIndex;
                        mapList[item]['child'][childItem].Coordinates.split(',').forEach(function (childE, childI) {
                            if (childI % 2 === 0) {
                                childPolygonIndex = childI / 2;
                                childPolygon[childPolygonIndex] = new model_1.CoordiateModel();
                                childPolygon[childPolygonIndex].x = parseInt(childE);
                            }
                            else {
                                childPolygon[childPolygonIndex].y = parseInt(childE);
                            }
                        });
                        childNewItem['data'] = mapList[item]['child'][childItem];
                        childNewItem['polygons'] = childPolygon;
                        childNewItem['index'] = indexCounter;
                        parentObject['child'].push(childNewItem);
                    };
                    for (var childItem in mapList[item]['child']) {
                        _loop_2(childItem);
                    }
                    if (mapList[item]['sub']) {
                        parentObject['sub'] = [];
                        var _loop_3 = function(subItem) {
                            var subNewItem = {};
                            var subPolygon = [];
                            var subPolygonIndex;
                            mapList[item]['sub'][subItem].Coordinates.split(',').forEach(function (subE, subI) {
                                if (subI % 2 === 0) {
                                    subPolygonIndex = subI / 2;
                                    subPolygon[subPolygonIndex] = new model_1.CoordiateModel();
                                    subPolygon[subPolygonIndex].x = parseInt(subE);
                                }
                                else {
                                    subPolygon[subPolygonIndex].y = parseInt(subE);
                                }
                            });
                            subNewItem['data'] = mapList[item]['sub'][subItem];
                            subNewItem['polygons'] = subPolygon;
                            parentObject['sub'].push(subNewItem);
                        };
                        for (var subItem in mapList[item]['sub']) {
                            _loop_3(subItem);
                        }
                    }
                }
                this_1.mapList.push(parentObject);
                indexCounter++;
            };
            var this_1 = this;
            for (var item in mapList) {
                _loop_1(item);
            }
        }
        else {
            if (res.data.hasOwnProperty('locations') && res.data['locations'].length > 0) {
                this.arrLocations = res.data['locations'];
                this.bIsLocation = true;
            }
            else {
                this.bIsLocation = false;
            }
            if (res['data']['method'] === 'outline') {
                this.isOutlineMethod = true;
                this.mapList = [];
                var mapList = res.data.map;
                this.mapImg = res.data.img;
                this.imgSrc = this.strApiUrl + this.mapImg;
                var nListIndex = 0;
                var _loop_4 = function(item) {
                    var marker = [];
                    var polygon = [];
                    var polygonIndex;
                    mapList[item].Coordinates.split(',').forEach(function (e, i) {
                        marker.push(parseInt(e));
                        if (i % 2 === 0) {
                            polygonIndex = i / 2;
                            polygon[polygonIndex] = new model_1.CoordiateModel();
                            polygon[polygonIndex].x = parseInt(e);
                        }
                        else {
                            polygon[polygonIndex].y = parseInt(e);
                        }
                    });
                    this_2.mapList.push({
                        polygon: polygon,
                        data: mapList[item],
                        index: nListIndex,
                        selected: (mapList[item]['complete'] === 1) ? true : false
                    });
                    nListIndex++;
                };
                var this_2 = this;
                for (var item in mapList) {
                    _loop_4(item);
                }
            }
            else if (res['data']['method'] === 'columns') {
                arrSelectedMapList = [];
                this.mapList = [];
                var mapList = res.data.map;
                this.mapImg = res.data.img;
                this.imgSrc = this.strApiUrl + this.mapImg;
                var nListIndex = 0;
                var _loop_5 = function(item) {
                    var marker = [];
                    var polygon = [];
                    var polygonIndex;
                    mapList[item].Coordinates.split(',').forEach(function (e, i) {
                        marker.push(parseInt(e));
                        if (i % 2 === 0) {
                            polygonIndex = i / 2;
                            polygon[polygonIndex] = new model_1.CoordiateModel();
                            polygon[polygonIndex].x = parseInt(e);
                        }
                        else {
                            polygon[polygonIndex].y = parseInt(e);
                        }
                    });
                    this_3.mapList.push({
                        polygon: polygon,
                        data: mapList[item],
                        index: nListIndex,
                        selected: (mapList[item]['complete'] === 1) ? true : false
                    });
                    if (mapList[item]['complete'] === 1) {
                        arrSelectedMapList.push({
                            value: mapList[item],
                            id: nListIndex
                        });
                    }
                    nListIndex++;
                };
                var this_3 = this;
                for (var item in mapList) {
                    _loop_5(item);
                }
                this.isOutlineMethod = true;
                this.bIsColumnMethod = true;
            }
            else {
                this.isOutlineMethod = false;
                this.mapList = [];
                var mapList = res.data.top_map;
                var nListIndex = 0;
                for (var item in mapList) {
                    this.mapList.push({
                        data: mapList[item],
                        index: nListIndex,
                        selected: (mapList[item]['complete'] === 1) ? true : false
                    });
                    nListIndex++;
                }
                this.mapImg = res.data.top_img;
                this.imgSrc = this.strApiUrl + this.mapImg;
            }
        }
        this.mapImgLaod = true;
        if (this.mapList) {
            this.loadCarImage();
            if (this.bIsColumnMethod) {
                this.initMarkList.emit(arrSelectedMapList);
            }
            if (!this.bPreShowDamages && this.bIsColumnMethod) {
                this.getSliderData();
            }
        }
        else {
            console.log('The map list data is not loaded.');
        }
    };
    ImageMapComponent.prototype.getSliderData = function () {
        var _this = this;
        this.leftSliders = [];
        this.rightSliders = [];
        switch (this.nSelectedSection) {
            case 0:
                this.leftSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'left');
                });
                break;
            case 1:
                this.leftSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'left');
                });
                this.rightSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'right');
                });
                break;
            case 2:
                this.rightSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'right');
                });
                break;
            default:
                console.log('The slider type is not existed');
                break;
        }
    };
    ImageMapComponent.prototype.loadImg = function () {
        this.loadImage.emit();
    };
    ImageMapComponent.prototype.uuid = function (key) {
        if (key === void 0) { key = '0123456789abcdef'; }
        var chars = key.split('');
        var uuid = [], rnd = Math.random, r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }
        return uuid.join('');
    };
    ImageMapComponent.prototype.drawAllDamageArea = function () {
        var ctx = this.mapCanvas.getContext('2d');
        ctx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
        if (this.bPreShowDamages) {
            var style = void 0;
            if (this.mapData.data.overlapAlpha &&
                this.mapData.data.overlapColor) {
                style = {
                    bgColor: this.mapData.data.overlapColor,
                    borderColor: 'black',
                    bgOpacity: this.mapData.data.overlapAlpha,
                    borderWidth: 2
                };
            }
            else {
                style = {
                    bgColor: 'blue',
                    borderColor: 'black',
                    bgOpacity: 0.1,
                    borderWidth: 2
                };
            }
            this.drawDamagePolygons(this.mapCanvas, style);
        }
        else {
            if (this.isOutlineMethod) {
                this.updateCheckMark();
            }
            else {
                this.drawDamageIcons(this.isLoadFont);
            }
        }
    };
    ImageMapComponent.prototype.checkPolygonIndex = function (index) {
        for (var i = 0; i < this.selectedPolygonList.length; i++) {
            if (this.selectedPolygonList[i]['id'] === index) {
                return true;
            }
        }
        return false;
    };
    ImageMapComponent.prototype.drawDamagePolygons = function (canvas, style) {
        var selectedStyle;
        if (this.mapData.data.highlightAlpha &&
            this.mapData.data.highlightColor) {
            selectedStyle = {
                bgColor: this.mapData.data.highlightColor,
                borderColor: this.mapStyle.borderColor,
                bgOpacity: this.mapData.data.highlightAlpha,
                borderWidth: this.mapStyle.borderWidth
            };
        }
        else {
            selectedStyle = {
                bgColor: this.mapStyle.bgColor,
                borderColor: this.mapStyle.borderColor,
                bgOpacity: this.mapStyle.bgOpacity,
                borderWidth: this.mapStyle.borderWidth
            };
        }
        var ctx = canvas.getContext('2d');
        var canvasStyle;
        for (var i = 0; i < this.mapList.length; i++) {
            var item = this.mapList[i];
            if (item['parentData']['Title'] === 'Bound Box') {
                ctx.save();
                ctx.beginPath();
                for (var c = 0; c < item['parentPolygons'].length; c++) {
                    if (c === 0) {
                        ctx.moveTo(item['parentPolygons'][c]['x'] * this.canvasToimageRateW, item['parentPolygons'][c]['y'] * this.canvasToimageRateH);
                    }
                    else {
                        ctx.lineTo(item['parentPolygons'][c]['x'] * this.canvasToimageRateW, item['parentPolygons'][c]['y'] * this.canvasToimageRateH);
                    }
                }
                ctx.closePath();
                ctx.globalAlpha = 1.0;
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.clip();
                for (var j = 0; j < item['child'].length; j++) {
                    var bSelected = this.checkPolygonIndex(item['child'][j]['index']);
                    if (bSelected) {
                        canvasStyle = selectedStyle;
                    }
                    else {
                        canvasStyle = style;
                    }
                    this.drawPolygons(this.mapCanvas, item['child'][j]['polygons'], canvasStyle);
                }
                ctx.restore();
            }
            else {
                var bSelected = this.checkPolygonIndex(item['index']);
                if (bSelected) {
                    canvasStyle = selectedStyle;
                }
                else {
                    canvasStyle = style;
                }
                this.drawPolygons(this.mapCanvas, item['parentPolygons'], canvasStyle);
            }
        }
    };
    ImageMapComponent.prototype.loadCarImage = function (nCount) {
        var _this = this;
        if (nCount === void 0) { nCount = 0; }
        this.mapCanvas = document.getElementById(this.imageCanvasId);
        this.effectCanvas = document.getElementById(this.effectCanvasId);
        var $img = document.getElementById(this.imageId);
        if (nCount > 30) {
            console.log('Timeout to load the image!');
        }
        else if (!this.mapCanvas) {
            nCount++;
            setTimeout(function () { return _this.loadCarImage(); }, 100);
        }
        else {
            if (this.mapContainer) {
                var nMapElementW = this.mapContainer.nativeElement.offsetWidth;
                if (this.bPreShowDamages) {
                    this.nMapH = this.mapProperties.y / this.mapProperties.x * nMapElementW;
                    if (this.nMapH > 300) {
                        this.nMapH = 300;
                        this.nMapW = this.mapProperties.x / this.mapProperties.y * this.nMapH;
                    }
                    else {
                        this.nMapW = nMapElementW;
                    }
                }
                else {
                    var nScale = 1;
                    if (this.bIsColumnMethod) {
                        nScale = 0.9;
                    }
                    this.nMapH = this.mapContainer.nativeElement.offsetHeight * nScale;
                    this.nMapW = this.mapProperties.x / this.mapProperties.y * this.nMapH;
                    if (nMapElementW < this.nMapW) {
                        this.nMapW = nMapElementW * nScale;
                        this.nMapH = this.mapProperties.y / this.mapProperties.x * this.nMapW;
                    }
                }
            }
            this.mapCanvas.width = this.nMapW;
            this.mapCanvas.height = this.nMapH;
            this.effectCanvas.width = this.nMapW;
            this.effectCanvas.height = this.nMapH;
            this.canvasToimageRateW = this.nMapW / this.mapProperties.x;
            this.canvasToimageRateH = this.nMapH / this.mapProperties.y;
            var that_2 = this;
            var img_2 = new Image();
            img_2.src = this.strApiUrl + this.mapImg;
            img_2.onload = function () {
                $img.width = that_2.mapProperties.x;
                $img.height = that_2.mapProperties.y;
                that_2.canvasToimageRateW = that_2.mapCanvas.width / img_2.width;
                that_2.canvasToimageRateH = that_2.mapCanvas.height / img_2.height;
                that_2.drawAllDamageArea();
            };
            img_2.onerror = function () {
                console.log('This image url is invalid: ' + img_2.src);
            };
        }
    };
    ImageMapComponent.prototype.isPointInPoly = function (poly, pt) {
        var inside = false;
        var x = pt.x;
        var y = pt.y;
        for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            var xi = poly[i].x, yi = poly[i].y;
            var xj = poly[j].x, yj = poly[j].y;
            var intersect = ((yi > y) !== (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect)
                inside = !inside;
        }
        return inside;
    };
    ImageMapComponent.prototype.getCurrentPosition = function (mousePoint) {
        var mousePointOnRate = new model_1.CoordiateModel();
        mousePointOnRate.x = mousePoint.x / this.canvasToimageRateW;
        mousePointOnRate.y = mousePoint.y / this.canvasToimageRateH;
        if (this.bPreShowDamages) {
            for (var i = 0; i < this.mapList.length; i++) {
                var item = this.mapList[i];
                if (item['parentData']['Title'] === 'Bound Box') {
                    for (var j = 0; j < item['child'].length; j++) {
                        if (this.isPointInPoly(item['child'][j]['polygons'], mousePointOnRate)) {
                            if (this.isPointInPoly(item['parentPolygons'], mousePointOnRate)) {
                                return item['child'][j]['index'];
                            }
                            else {
                                return -1;
                            }
                        }
                    }
                }
                else {
                    if (this.isPointInPoly(item['parentPolygons'], mousePointOnRate)) {
                        return item['index'];
                    }
                }
            }
        }
        else {
            if (this.isOutlineMethod) {
                var mousePointOnRate_1 = new model_1.CoordiateModel();
                mousePointOnRate_1.x = mousePoint.x / this.canvasToimageRateW;
                mousePointOnRate_1.y = mousePoint.y / this.canvasToimageRateH;
                for (var i = 0; i < this.mapList.length; i++) {
                    if (this.isPointInPoly(this.mapList[i]['polygon'], mousePointOnRate_1)) {
                        return i;
                    }
                }
                return -1;
            }
            else {
                for (var i = 0; i < this.mapList.length; i++) {
                    if (this.mapList[i]['data'].hasOwnProperty('x') && this.mapList[i]['data'].hasOwnProperty('y')) {
                        var pt = this.mapList[i]['data'];
                        var xRightDeviation = 20;
                        var yRightDeviation = 20;
                        var xOppositeDeviation = 0;
                        if (this.currentDamageIndex === i) {
                            var startX = pt['x'] * this.canvasToimageRateW;
                            var ctx = this.mapCanvas.getContext('2d');
                            var metrics = ctx.measureText(pt['Part']);
                            var detailTextWidth = metrics.width;
                            if (this.mapCanvas.width / 2 < startX) {
                                xOppositeDeviation -= detailTextWidth;
                                xOppositeDeviation -= 10;
                            }
                            else {
                                xRightDeviation += detailTextWidth;
                                xRightDeviation += 10;
                            }
                        }
                        if ((pt['x'] + xOppositeDeviation) <= mousePointOnRate.x &&
                            pt['y'] <= mousePointOnRate.y &&
                            (pt['x'] + xRightDeviation) >= mousePointOnRate.x &&
                            (pt['y'] + yRightDeviation) >= mousePointOnRate.y) {
                            return i;
                        }
                    }
                    else {
                        console.log('X and Y of the map list is not existed');
                    }
                }
            }
        }
        return -1;
    };
    ImageMapComponent.prototype.drawPolygons = function (canvas, polygon, style) {
        var ctx = canvas.getContext('2d');
        if (!polygon) {
            console.log('Not ready to draw polygon.');
            return;
        }
        for (var i = 0; i < polygon.length; i++) {
            if (i === 0) {
                ctx.beginPath();
                ctx.moveTo(polygon[i].x * this.canvasToimageRateW, polygon[i].y * this.canvasToimageRateH);
            }
            else {
                ctx.lineTo(polygon[i].x * this.canvasToimageRateW, polygon[i].y * this.canvasToimageRateH);
            }
        }
        ctx.closePath();
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = style.borderColor;
        ctx.lineWidth = style.borderWidth;
        ctx.stroke();
        ctx.globalAlpha = style.bgOpacity;
        ctx.fillStyle = style.bgColor;
        ctx.fill();
    };
    ImageMapComponent.prototype.getPolygonData = function (index) {
        for (var i = 0; i < this.mapList.length; i++) {
            var item = this.mapList[i];
            if (item['parentData'] && item['parentData']['Title'] === 'Bound Box') {
                for (var j = 0; j < item['child'].length; j++) {
                    if (item['child'][j]['index'] === index) {
                        return item['child'][j]['polygons'];
                    }
                }
            }
            else {
                if (item['index'] === index) {
                    return item['parentPolygons'];
                }
            }
        }
        return null;
    };
    ImageMapComponent.prototype.updatePolygon = function (polygon) {
        this.selectedPolygonList = polygon;
        this.drawAllDamageArea();
    };
    ImageMapComponent.prototype.getCheckMarkPostion = function (polygonId) {
        var position = new model_1.CoordiateModel();
        var sx = 0, sy = 0, sL = 0;
        var polygons = this.mapList[polygonId]['polygon'];
        for (var i = 0; i < polygons.length; i++) {
            var x0 = void 0, y0 = void 0, x1 = void 0, y1 = void 0;
            if (i === 0) {
                x0 = polygons[polygons.length - 1].x;
                y0 = polygons[polygons.length - 1].y;
            }
            else {
                x0 = polygons[i - 1].x;
                y0 = polygons[i - 1].y;
            }
            x1 = polygons[i].x;
            y1 = polygons[i].y;
            var L = Math.pow(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2), 0.5);
            sx += (x0 + x1) / 2 * L;
            sy += (y0 + y1) / 2 * L;
            sL += L;
        }
        position.x = sx / sL;
        position.y = sy / sL;
        return position;
    };
    ImageMapComponent.prototype.drawCheckMark = function (polygonId) {
        if (!this.isOutlineMethod) {
            return;
        }
        var polygonPostion = this.getCheckMarkPostion(polygonId);
        var imgSrc = 'assets/img/checkmark.png';
        var ctxImg = this.mapCanvas.getContext('2d');
        var imgW = 16, imgH = 16;
        var imgStartX = polygonPostion.x * this.canvasToimageRateW - imgW / 2;
        var imgStartY = polygonPostion.y * this.canvasToimageRateH - imgH / 2;
        var img = new Image();
        img.src = imgSrc;
        var that = this;
        img.onload = function () {
            ctxImg.globalAlpha = 1;
            ctxImg.drawImage(img, imgStartX, imgStartY, imgW, imgH);
            that.mapImgLaod = true;
        };
        img.onerror = function () {
            console.log('This image url is invalid: ' + img.src);
        };
    };
    ImageMapComponent.prototype.drawDamageIcons = function (isLoadFont) {
        if (isLoadFont === void 0) { isLoadFont = false; }
        var apiUrl = this.strApiUrl;
        for (var i = 0; i < this.mapList.length; i++) {
            var bDetail = false;
            var strDetail = '';
            var bChecked = false;
            var iconUrl = '';
            var iconObj = this.mapList[i]['data'];
            if (i === this.currentDamageIndex) {
                bDetail = true;
                if (iconObj.hasOwnProperty('Part')) {
                    strDetail = iconObj['Part'];
                }
            }
            if (iconObj.hasOwnProperty('Icon')) {
                iconUrl = apiUrl + iconObj['Icon'];
            }
            if (iconObj['data'] && iconObj['data']['complete'] === 1) {
                bChecked = true;
            }
            this.drawPlusIcon(iconObj.x, iconObj.y, false, bDetail, strDetail, bChecked, iconUrl);
        }
    };
    ImageMapComponent.prototype.getDamageData = function (index) {
        for (var i = 0; i < this.mapList.length; i++) {
            var item = this.mapList[i];
            if (item['parentData'] && item['parentData']['Title'] === 'Bound Box') {
                for (var j = 0; j < item['child'].length; j++) {
                    if (index === item['child'][j]['index']) {
                        var returnData = {};
                        returnData['data'] = item['child'][j]['data'];
                        if (item['sub']) {
                            var arrIntersects = [];
                            for (var c = 0; c < item['sub'].length; c++) {
                                if (this.checkIntersectionOfPolygons(item['child'][j]['polygons'], item['sub'][c]['polygons'])) {
                                    if (item['sub'][c]['data']['id']) {
                                        arrIntersects.push(item['sub'][c]['data']['id']);
                                    }
                                }
                            }
                            console.log(arrIntersects);
                            if (arrIntersects.length > 0) {
                                returnData['intersect'] = arrIntersects;
                            }
                        }
                        return returnData;
                    }
                }
            }
            else {
                if (index === item['index']) {
                    return {
                        data: item['parentData']
                    };
                }
            }
        }
        return null;
    };
    ImageMapComponent.prototype.canvasClick = function (event) {
        event = event || window.event;
        var currentP = new model_1.CoordiateModel();
        currentP.x = event.offsetX;
        currentP.y = event.offsetY;
        var currentSelectedInd = this.getCurrentPosition(currentP);
        console.log('currentSelectedInd: ' + currentSelectedInd);
        if (currentSelectedInd < 0) {
            console.log('There is no image for the Current Position');
        }
        else {
            if (!this.bPreShowDamages) {
                if (this.bIsColumnMethod) {
                    if (this.mapList[currentSelectedInd]['data']['complete'] === 1) {
                        this.clickOnImage.emit({ value: this.mapList[currentSelectedInd]['data'], id: currentSelectedInd });
                        return;
                    }
                    if (this.currentSPIndex === currentSelectedInd) {
                        this.mapList[this.currentSPIndex]['selected'] = this.mapList[this.currentSPIndex]['selected'] ? false : true;
                        var ctx = this.mapCanvas.getContext('2d');
                        ctx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
                        this.drawAllDamageArea();
                        if (this.mapList[this.currentSPIndex]['selected']) {
                            this.selectAutoPart.emit({
                                status: true,
                                desc: this.mapList[this.currentSPIndex]['data']['AutoPart'],
                                side: this.mapList[this.currentSPIndex]['data']['side']
                            });
                        }
                        else {
                            this.selectAutoPart.emit({ status: false });
                        }
                        return;
                    }
                }
                if (this.bIsSelected) {
                    this.mapList[this.currentSPIndex]['selected'] = false;
                }
                this.currentSPIndex = currentSelectedInd;
                if (this.isOutlineMethod) {
                    if (!this.bIsColumnMethod) {
                        this.clickOnImage.emit({ value: this.mapList[currentSelectedInd]['data'], id: currentSelectedInd });
                    }
                    else {
                        this.updateSelectionUI();
                    }
                }
                else {
                    if (currentSelectedInd === this.currentDamageIndex) {
                        this.clickOnImage.emit({ value: this.mapList[currentSelectedInd], id: currentSelectedInd });
                    }
                    else {
                        this.currentDamageIndex = currentSelectedInd;
                        this.drawDamageIcons();
                    }
                }
                this.bIsSelected = true;
            }
            else {
                var damageData = this.getDamageData(currentSelectedInd);
                if (damageData) {
                    console.log(damageData);
                    this.clickOnImage.emit({ value: damageData, id: currentSelectedInd });
                }
                else {
                    console.log('Can not find the damage data with the index');
                }
            }
        }
    };
    ImageMapComponent.prototype.updateSelectionUI = function () {
        this.mapList[this.currentSPIndex]['selected'] = true;
        var nSection = parseInt(this.mapList[this.currentSPIndex]['data']['section']);
        this.onChangeSlider(nSection);
        this.selectAutoPart.emit({
            status: true,
            desc: this.mapList[this.currentSPIndex]['data']['AutoPart'],
            side: this.mapList[this.currentSPIndex]['data']['side']
        });
    };
    ImageMapComponent.prototype.displayCheckMark = function () {
        this.mapList[this.currentSPIndex]['data']['complete'] = 1;
        this.mapList[this.currentSPIndex]['selected'] = true;
        this.bIsSelected = false;
        this.currentDamageIndex = -1;
        this.drawAllDamageArea();
        this.doneAutoPart.emit();
    };
    ImageMapComponent.prototype.updateCheckMark = function () {
        for (var i = 0; i < this.mapList.length; i++) {
            if (this.mapList[i]['selected'] || this.mapList[i]['data'] && this.mapList[i]['data']['complete'] === 1) {
                var style = {
                    bgColor: 'rgb(255, 232, 125)',
                    borderColor: 'transparent',
                    bgOpacity: 0.65,
                    borderWidth: 0
                };
                this.drawPolygons(this.mapCanvas, this.mapList[i]['polygon'], style);
            }
            if (this.mapList[i]['data'] && this.mapList[i]['data']['complete'] === 1) {
                this.drawCheckMark(i);
            }
        }
        this.getSlideCounts();
    };
    ImageMapComponent.prototype.deleteCheckMark = function (markId) {
        this.mapList[markId]['data']['complete'] = 0;
        this.mapList[markId]['selected'] = false;
    };
    ImageMapComponent.prototype.checkIntersectionOfPolygons = function (fstPolygon, sndPolygon) {
        var result = false;
        result = this.checkPointsInsidePolygon(fstPolygon, sndPolygon);
        if (!result) {
            result = this.checkPointsInsidePolygon(sndPolygon, fstPolygon);
        }
        return result;
    };
    ImageMapComponent.prototype.checkPointsInsidePolygon = function (points, polygon) {
        for (var i = 0; i < points.length; i++) {
            if (this.isPointInPoly(polygon, points[i])) {
                return true;
            }
        }
        return false;
    };
    ImageMapComponent.prototype.getSlideCounts = function () {
        var selectedLefts = this.mapList.filter(function (item) {
            return (item.data.complete === 1) && (item.data.section === 0);
        });
        this.nLeftSlideCounter = selectedLefts.length;
        var selectedCenters = this.mapList.filter(function (item) {
            return (item.data.complete === 1) && (item.data.section === 1);
        });
        this.nCenterSlideCounter = selectedCenters.length;
        var selectedRights = this.mapList.filter(function (item) {
            return (item.data.complete === 1) && (item.data.section === 2);
        });
        this.nRightSlideCounter = selectedRights.length;
    };
    ImageMapComponent.prototype.sendScreenshot = function (strSlug, strAutoPartId) {
        if (strSlug) {
            var postData = {
                code: 200,
                data: {
                    slug: strSlug,
                    img: this.mapCanvas.toDataURL('image/png'),
                    width: this.mapCanvas.width,
                    height: this.mapCanvas.height,
                    url: this.imgSrc,
                    autoPartId: strAutoPartId
                }
            };
            this._dataService.post('v1/data/snapshotupload', postData)
                .subscribe(function (res) {
                console.log('Success to upload the screenshot.');
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
        else {
            console.log('To send a screenshot, there is no slug.');
        }
    };
    ImageMapComponent.prototype.onChangeSlider = function (nSlider) {
        this.nSelectedSection = nSlider;
        this.getSliderData();
        this.loadCarImage();
    };
    ImageMapComponent.prototype.onSlider = function (nSlider) {
        if (this.mapList[nSlider]['data']['complete'] === 1) {
            this.clickOnImage.emit({ value: this.mapList[nSlider]['data'], id: nSlider });
            return;
        }
        if (this.currentSPIndex === nSlider) {
            this.mapList[this.currentSPIndex]['selected'] = this.mapList[this.currentSPIndex]['selected'] ? false : true;
            var ctx = this.mapCanvas.getContext('2d');
            ctx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
            this.drawAllDamageArea();
            if (this.mapList[this.currentSPIndex]['selected']) {
                this.selectAutoPart.emit({
                    status: true,
                    desc: this.mapList[this.currentSPIndex]['data']['AutoPart'],
                    side: this.mapList[this.currentSPIndex]['data']['side']
                });
            }
            else {
                this.selectAutoPart.emit({ status: false });
            }
            return;
        }
        if (this.bIsSelected) {
            this.mapList[this.currentSPIndex]['selected'] = false;
        }
        this.currentSPIndex = nSlider;
        this.updateSelectionUI();
        this.bIsSelected = true;
    };
    ImageMapComponent.prototype.onSelectLocation = function (strLocation) {
        this.eventSwitchLocation.emit(strLocation);
    };
    __decorate([
        core_1.Input('mapData'), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "mapData", void 0);
    __decorate([
        core_1.Input('mapProperties'), 
        __metadata('design:type', model_1.CoordiateModel)
    ], ImageMapComponent.prototype, "mapProperties", void 0);
    __decorate([
        core_1.Input('mapStyle'), 
        __metadata('design:type', model_1.CanvasStyleModel)
    ], ImageMapComponent.prototype, "mapStyle", void 0);
    __decorate([
        core_1.Input('bCarmap'), 
        __metadata('design:type', Boolean)
    ], ImageMapComponent.prototype, "bCarmap", void 0);
    __decorate([
        core_1.Input('bPreShowDamages'), 
        __metadata('design:type', Boolean)
    ], ImageMapComponent.prototype, "bPreShowDamages", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "clickOnImage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "doneAutoPart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "selectAutoPart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "loadImage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "eventSwitchLocation", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "initMarkList", void 0);
    __decorate([
        core_1.ViewChild('mapContainer'), 
        __metadata('design:type', Object)
    ], ImageMapComponent.prototype, "mapContainer", void 0);
    ImageMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'image-map',
            templateUrl: 'image-map.component.html',
            styleUrls: ['image-map.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, data_service_1.DataService, event_service_1.EventService, core_1.Renderer])
    ], ImageMapComponent);
    return ImageMapComponent;
}());
exports.ImageMapComponent = ImageMapComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsaXRpZXMvaW1hZ2UtbWFwL2ltYWdlLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQVU4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCw2QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUN4RCxzQkFDOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNoRCw4QkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN6RCxzQkFBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQWVuRDtJQW1ERSwyQkFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzVCLFFBQWtCO1FBSmpCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWxEakIsaUJBQVksR0FBVSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN6QyxpQkFBWSxHQUFVLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQVEsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDekMsY0FBUyxHQUFhLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pDLGlCQUFZLEdBQVUsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFrQm5ELHdCQUFtQixHQUFXLENBQUMsQ0FBQyxDQUFDO1FBNkIvQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FB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QUFDO0lBdnhDRDtRQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O3NEQUFBO0lBQ2pCO1FBQUMsWUFBSyxDQUFDLGVBQWUsQ0FBQzs7NERBQUE7SUFDdkI7UUFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOzt1REFBQTtJQUNsQjtRQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O3NEQUFBO0lBQ2pCO1FBQUMsWUFBSyxDQUFDLGlCQUFpQixDQUFDOzs4REFBQTtJQUN6QjtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7NkRBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7a0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFFVDtRQUFDLGdCQUFTLENBQUMsY0FBYyxDQUFDOzsyREFBQTtJQXBCNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7eUJBQUE7SUEyeENGLHdCQUFDO0FBQUQsQ0F6eENBLEFBeXhDQyxJQUFBO0FBenhDWSx5QkFBaUIsb0JBeXhDN0IsQ0FBQSIsImZpbGUiOiJhcHAvdXRpbGl0aWVzL2ltYWdlLW1hcC9pbWFnZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIgfSAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9ICAgZnJvbSAnLi4vLi4vY29yZS9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29vcmRpYXRlTW9kZWwsXG4gIENhbnZhc1N0eWxlTW9kZWwgfSAgICAgZnJvbSAnLi4vLi4vY29yZS9tb2RlbCc7XG4gaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZyB9ICAgICAgICBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuZGVjbGFyZSBsZXQgJDogYW55O1xuXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBJbWFnZU1hcENvbXBvbmVudC5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdpbWFnZS1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJ2ltYWdlLW1hcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbWFnZS1tYXAuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VNYXBDb21wb25lbnQgaW1wbGVtZW50cyAgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnbWFwRGF0YScpIG1hcERhdGE6IE9iamVjdDtcbiAgQElucHV0KCdtYXBQcm9wZXJ0aWVzJykgbWFwUHJvcGVydGllczogQ29vcmRpYXRlTW9kZWw7XG4gIEBJbnB1dCgnbWFwU3R5bGUnKSBtYXBTdHlsZTogQ2FudmFzU3R5bGVNb2RlbDtcbiAgQElucHV0KCdiQ2FybWFwJykgYkNhcm1hcDogYm9vbGVhbjtcbiAgQElucHV0KCdiUHJlU2hvd0RhbWFnZXMnKSBiUHJlU2hvd0RhbWFnZXM6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBjbGlja09uSW1hZ2UgICAgICAgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZG9uZUF1dG9QYXJ0ICAgICAgICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdEF1dG9QYXJ0ICAgICAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2FkSW1hZ2UgICAgICAgICAgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXZlbnRTd2l0Y2hMb2NhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGluaXRNYXJrTGlzdCAgICAgICAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnbWFwQ29udGFpbmVyJykgbWFwQ29udGFpbmVyOiBhbnk7XG5cbiAgbWFwTGlzdDogYW55W107XG4gIGxlZnRTbGlkZXJzOiBhbnlbXTtcbiAgcmlnaHRTbGlkZXJzOiBhbnlbXTtcbiAgc2VsZWN0ZWRQb2x5Z29uTGlzdDogYW55W107XG4gIG1hcEltZzogc3RyaW5nO1xuICBtYXBJbWdMYW9kOiBib29sZWFuO1xuICBpc0xvYWRGb250OiBib29sZWFuO1xuICBpc091dGxpbmVNZXRob2Q6IGJvb2xlYW47XG4gIGJJc0NvbHVtbk1ldGhvZDogYm9vbGVhbjtcbiAgYklzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGJJc0xvY2F0aW9uOiBib29sZWFuO1xuXG4gIG1hcENhbnZhczogYW55O1xuICBlZmZlY3RDYW52YXM6IGFueTtcbiAgcHJldmlvdXNSZWdpb25JbmRleDogbnVtYmVyID0gLTE7XG4gIGNhbnZhc1RvaW1hZ2VSYXRlVzogbnVtYmVyO1xuICBjYW52YXNUb2ltYWdlUmF0ZUg6IG51bWJlcjtcbiAgY3VycmVudFNQSW5kZXg6IG51bWJlcjsgLy8gY3VycmVudCBzZWxlY3RlZCBwb2x5Z29uIGluZGV4XG4gIGN1cnJlbnREYW1hZ2VJbmRleDogbnVtYmVyO1xuICBuTWFwSDogbnVtYmVyO1xuICBuTWFwVzogbnVtYmVyO1xuICBuRGVzY1c6IG51bWJlcjtcbiAgblNlbGVjdGVkU2VjdGlvbjogbnVtYmVyO1xuICBuTGVmdFNsaWRlQ291bnRlcjogbnVtYmVyO1xuICBuQ2VudGVyU2xpZGVDb3VudGVyOiBudW1iZXI7XG4gIG5SaWdodFNsaWRlQ291bnRlcjogbnVtYmVyO1xuXG4gIGltYWdlTWFwSWQ6IHN0cmluZztcbiAgaW1hZ2VJZDogc3RyaW5nO1xuICBpbWFnZUNhbnZhc0lkOiBzdHJpbmc7XG4gIGVmZmVjdENhbnZhc0lkOiBzdHJpbmc7XG4gIGltZ1NyYzogc3RyaW5nO1xuICBzdHJBcGlVcmw6IHN0cmluZztcblxuICBhcnJMb2NhdGlvbnM6IE9iamVjdFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXG4gIFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgKSB7XG4gICAgdGhpcy5jdXJyZW50U1BJbmRleCA9IC0xO1xuICAgIHRoaXMuY3VycmVudERhbWFnZUluZGV4ID0gLTE7XG4gICAgdGhpcy5pc0xvYWRGb250ID0gZmFsc2U7XG4gICAgdGhpcy5pc091dGxpbmVNZXRob2QgPSBmYWxzZTtcbiAgICB0aGlzLmJJc0NvbHVtbk1ldGhvZCA9IGZhbHNlO1xuICAgIHRoaXMuYklzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJJc0xvY2F0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5uTWFwSCA9IDA7XG4gICAgdGhpcy5uTWFwVyA9IDA7XG4gICAgdGhpcy5uRGVzY1cgPSAwO1xuICAgIHRoaXMublNlbGVjdGVkU2VjdGlvbiA9IDA7XG4gICAgdGhpcy5uTGVmdFNsaWRlQ291bnRlciA9IDA7XG4gICAgdGhpcy5uQ2VudGVyU2xpZGVDb3VudGVyID0gMDtcbiAgICB0aGlzLm5SaWdodFNsaWRlQ291bnRlciA9IDA7XG5cbiAgICB0aGlzLmxlZnRTbGlkZXJzID0gW107XG4gICAgdGhpcy5yaWdodFNsaWRlcnMgPSBbXTtcbiAgICB0aGlzLmFyckxvY2F0aW9ucyA9IFtdO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXBJbWdMYW9kID0gZmFsc2U7XG4gICAgdGhpcy5zdHJBcGlVcmwgPUNvbmZpZy5BUEk7XG4gICAgdGhpcy5zZWxlY3RlZFBvbHlnb25MaXN0ID0gW107XG4gICAgaWYodGhpcy5tYXBEYXRhKSB7XG4gICAgICB0aGlzLm1hcHBpbmdEYXRhKHRoaXMubWFwRGF0YSk7XG4gICAgICB0aGlzLmltYWdlTWFwSWQgPSB0aGlzLnV1aWQoJzAxMjM0NTY3ODlhYmNkZWYnKTtcbiAgICAgIHRoaXMuaW1hZ2VJZCA9IHRoaXMuaW1hZ2VNYXBJZCArICdfaW1hZ2VfbWFwJztcbiAgICAgIHRoaXMuaW1hZ2VDYW52YXNJZCA9IHRoaXMuaW1hZ2VNYXBJZCArICdfaW1hZ2VfY2FudmFzJztcbiAgICAgIHRoaXMuZWZmZWN0Q2FudmFzSWQgPSB0aGlzLmltYWdlTWFwSWQgKyAnX2VmZmVjdF9jYW52YXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnUGxlYXNlIHJlZnJlc2ggYWdhaW4gdG8gbWFwcGluZyBpbWFnZS4nKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5iUHJlU2hvd0RhbWFnZXMpIHtcbiAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5yZWdpc3RlckV2ZW50KCduZXhfc2V2ZXJpdHlfZXZlbnQnLCB0aGlzLCAoYXJnczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPbkltYWdlLmVtaXQoe3ZhbHVlOiB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXSwgaWQ6IHRoaXMuY3VycmVudFNQSW5kZXh9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ldmVudFNlcnZpY2UucmVnaXN0ZXJFdmVudCgndGFrZV9kYW1hZ2Vfc2NyZWVuc2hvdCcsIHRoaXMsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBhcmdzWzBdO1xuICAgICAgICB0aGlzLnNlbmRTY3JlZW5zaG90KGRhdGFbJ3NsdWcnXSwgZGF0YVsnYXV0b1BhcnRJZCddKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMubWFwcGluZ0RhdGEodGhpcy5tYXBEYXRhKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKCF0aGlzLmJQcmVTaG93RGFtYWdlcykge1xuICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJFdmVudCgnbmV4X3NldmVyaXR5X2V2ZW50JywgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V2ZW50U2VydmljZS51bnJlZ2lzdGVyRXZlbnQoJ3Rha2VfZGFtYWdlX3NjcmVlbnNob3QnLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhd3MgYSByb3VuZGVkIHJlY3RhbmdsZSB1c2luZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY2FudmFzLiBcbiAgICogSWYgeW91IG9taXQgdGhlIGxhc3QgdGhyZWUgcGFyYW1zLCBpdCB3aWxsIGRyYXcgYSByZWN0YW5nbGUgXG4gICAqIG91dGxpbmUgd2l0aCBhIDUgcGl4ZWwgYm9yZGVyIHJhZGl1cyBcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxuICAgKiBAcGFyYW0ge051bWJlcn0geCBUaGUgdG9wIGxlZnQgeCBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSB0b3AgbGVmdCB5IGNvb3JkaW5hdGUgXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJlY3RhbmdsZSBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1cyBUaGUgY29ybmVyIHJhZGl1cy4gRGVmYXVsdHMgdG8gNTtcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaWxsIFdoZXRoZXIgdG8gZmlsbCB0aGUgcmVjdGFuZ2xlLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBzdHJva2UgV2hldGhlciB0byBzdHJva2UgdGhlIHJlY3RhbmdsZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIHJvdW5kUmVjdChjdHg6IGFueSwgeDogbnVtYmVyLCB5Om51bWJlciwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyLCByYWRpdXM6bnVtYmVyPTUsIGZpbGw6IGJvb2xlYW4sIHN0cm9rZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBpZiAoc3Ryb2tlKSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGlmIChmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdQbHVzSWNvbihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGJpZ1NpemU6IGJvb2xlYW4sXG4gICAgZGV0YWlsOiBib29sZWFuID0gZmFsc2UsXG4gICAgZGV0YWlsVGV4dDogc3RyaW5nID0gJycsXG4gICAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIGljb25Vcmw6IHN0cmluZyA9ICcnKSB7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5tYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dChkZXRhaWxUZXh0KTtcbiAgICBsZXQgZGV0YWlsVGV4dFdpZHRoID0gbWV0cmljcy53aWR0aDtcblxuICAgIGxldCBpbWdTdGFydFggPSB4ICogdGhpcy5jYW52YXNUb2ltYWdlUmF0ZVc7XG4gICAgbGV0IGltZ1N0YXJ0WSA9IHkgKiB0aGlzLmNhbnZhc1RvaW1hZ2VSYXRlSDtcblxuICAgIGxldCBiTGVmdFNpdHVhdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYodGhpcy5tYXBDYW52YXMud2lkdGgvMiA+IGltZ1N0YXJ0WCkge1xuICAgICAgYkxlZnRTaXR1YXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBiTGVmdFNpdHVhdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDE3YmZmJztcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMS4wKSc7XG4gICAgaWYoIWRldGFpbCkge1xuICAgICAgdGhpcy5yb3VuZFJlY3QoY3R4LCBpbWdTdGFydFgsIGltZ1N0YXJ0WSwgMjAsIDIwLCAxMCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYoIWJMZWZ0U2l0dWF0aW9uKSB7XG4gICAgICAgIHRoaXMucm91bmRSZWN0KGN0eCwgKGltZ1N0YXJ0WC1kZXRhaWxUZXh0V2lkdGgtMTApLCBpbWdTdGFydFksIGRldGFpbFRleHRXaWR0aCszMCwgMjAsIDEwLCB0cnVlKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDE3YmZmJztcbiAgICAgICAgY3R4LmZvbnQ9JzEycHgnO1xuICAgICAgICBjdHguZmlsbFRleHQoZGV0YWlsVGV4dCwgKGltZ1N0YXJ0WCArIDggLSBkZXRhaWxUZXh0V2lkdGggLSAxMCksIGltZ1N0YXJ0WSsxNCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdW5kUmVjdChjdHgsIGltZ1N0YXJ0WCwgaW1nU3RhcnRZLCBkZXRhaWxUZXh0V2lkdGgrMzAsIDIwLCAxMCwgdHJ1ZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAxN2JmZic7XG4gICAgICAgIGN0eC5mb250PScxMnB4JztcbiAgICAgICAgY3R4LmZpbGxUZXh0KGRldGFpbFRleHQsIGltZ1N0YXJ0WCsxOCwgaW1nU3RhcnRZKzE0KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmKGljb25VcmwgJiYgaWNvblVybCAhPT0gJycpIHtcblxuICAgICAgbGV0IGN0eEltZyA9IHRoaXMubWFwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBsZXQgaW1nVyA9IDE0LCBpbWdIID0gMTQ7XG4gICAgICBsZXQgY2lyY2xlU2l6ZSA9IDIwO1xuICAgICAgbGV0IHNwYWNlU2l6ZSA9IChjaXJjbGVTaXplIC0gaW1nVykgLyAyO1xuXG4gICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaWNvblVybDtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY3R4SW1nLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY3R4SW1nLmRyYXdJbWFnZShpbWcsIGltZ1N0YXJ0WCArIHNwYWNlU2l6ZSwgaW1nU3RhcnRZICsgc3BhY2VTaXplLCBpbWdXLCBpbWdIKTtcbiAgICAgICAgdGhhdC5tYXBJbWdMYW9kID0gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGltYWdlIHVybCBpcyBpbnZhbGlkOiAnICsgaW1nLnNyYyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZm9udGF3ZXNvbWVTaXplID0gY3R4Lm1lYXN1cmVUZXh0KCdcXHVGMDY3Jykud2lkdGg7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMwMTdiZmYnO1xuICAgICAgY3R4LmZvbnQ9JzEwcHggRm9udEF3ZXNvbWUnO1xuICAgICAgdGhpcy5jaGVja1JlYWR5KGN0eCwgaW1nU3RhcnRYLCBpbWdTdGFydFksIGNoZWNrZWQsIGZvbnRhd2Vzb21lU2l6ZSk7XG4gICAgfVxuXG4gIH1cblxuICBjaGVja1JlYWR5KFxuICAgIGN0eDogYW55LFxuICAgIGltZ1N0YXJ0WDogbnVtYmVyLFxuICAgIGltZ1N0YXJ0WTogbnVtYmVyLFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gICAgZm9udGF3ZXNvbWVTaXplOiBudW1iZXIsXG4gICAgY291bnQ6IG51bWJlciA9IDApIHtcbiAgICBsZXQgY3VycmVudEZvbnRhd2Vzb21lU2l6ZSA9IGN0eC5tZWFzdXJlVGV4dCgnXFx1RjA2NycpLndpZHRoO1xuXG4gICAgaWYoY291bnQgPiAyMCkge1xuICAgICAgY29uc29sZS5sb2coJ1RpbWUgb3V0IHRvIGxvYWQgdGhlIGZvbnQgYXdlc29tZS4nKTtcbiAgICB9IGVsc2UgaWYoIXRoaXMuaXNMb2FkRm9udCAmJiBjdXJyZW50Rm9udGF3ZXNvbWVTaXplID09PSBmb250YXdlc29tZVNpemUpIHtcbiAgICAgIGNvdW50ICsrO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrUmVhZHkoY3R4LCBpbWdTdGFydFgsIGltZ1N0YXJ0WSwgY2hlY2tlZCwgY3VycmVudEZvbnRhd2Vzb21lU2l6ZSwgY291bnQpLCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighY2hlY2tlZCkge1xuICAgICAgICBjdHguZmlsbFRleHQoJ1xcdUYwNjcnLCBpbWdTdGFydFgrNiwgaW1nU3RhcnRZKzE1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5maWxsVGV4dCgnXFx1RjAwQycsIGltZ1N0YXJ0WCs2LCBpbWdTdGFydFkrMTUpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc0xvYWRGb250ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuXG4gIC8qXG4gIG1hcHBpbmcgYmFjayBlbmQgZGF0YSB0byBsb2NhbCB2YXJpYWJsZVxuICAqL1xuICBtYXBwaW5nRGF0YShyZXM6YW55KSB7XG4gICAgbGV0IGFyclNlbGVjdGVkTWFwTGlzdDogYW55W10gPSBbXTtcblxuICAgIGlmKHRoaXMuYlByZVNob3dEYW1hZ2VzKSB7IC8vIGRhbWFnZSBtb2RhbFxuXG4gICAgICBsZXQgbWFwTGlzdCA9IHJlcy5kYXRhLm1hcDtcbiAgICAgIHRoaXMubWFwSW1nID0gcmVzLmRhdGEuaW1nO1xuICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLnN0ckFwaVVybCArIHRoaXMubWFwSW1nO1xuICAgICAgdGhpcy5tYXBMaXN0ID0gW107XG4gICAgICBsZXQgaW5kZXhDb3VudGVyID0gMDtcblxuICAgICAgLy8gY2F0Y2ggY29vcmRpbmF0ZXMgZnJvbSBhcGlcbiAgICAgIGZvcihsZXQgaXRlbSBpbiBtYXBMaXN0KSB7XG4gICAgICAgIGxldCBwYXJlbnRQb2x5Z29uOiBDb29yZGlhdGVNb2RlbFtdID0gW107XG4gICAgICAgIGxldCBwYXJlbnRPYmplY3QgPSA8YW55Pnt9O1xuICAgICAgICBsZXQgcG9seWdvbkluZGV4OiBudW1iZXI7XG4gICAgICAgIHBhcmVudE9iamVjdFsncGFyZW50RGF0YSddID0gbWFwTGlzdFtpdGVtXTtcblxuICAgICAgICBtYXBMaXN0W2l0ZW1dLkNvb3JkaW5hdGVzLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbihlOiBhbnksIGk6IG51bWJlcikge1xuICAgICAgICAgIGlmKGklMiA9PT0gMCkge1xuICAgICAgICAgICAgcG9seWdvbkluZGV4ID0gaS8yO1xuICAgICAgICAgICAgcGFyZW50UG9seWdvbltwb2x5Z29uSW5kZXhdID0gbmV3IENvb3JkaWF0ZU1vZGVsKCk7XG4gICAgICAgICAgICBwYXJlbnRQb2x5Z29uW3BvbHlnb25JbmRleF0ueCA9IHBhcnNlSW50KGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRQb2x5Z29uW3BvbHlnb25JbmRleF0ueSA9IHBhcnNlSW50KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyZW50T2JqZWN0WydwYXJlbnRQb2x5Z29ucyddID0gcGFyZW50UG9seWdvbjtcbiAgICAgICAgcGFyZW50T2JqZWN0WydpbmRleCddID0gaW5kZXhDb3VudGVyO1xuXG4gICAgICAgIGlmKG1hcExpc3RbaXRlbV1bJ1RpdGxlJ109PT0nQm91bmQgQm94JyAmJiBtYXBMaXN0W2l0ZW1dWydjaGlsZCddKSB7IC8vIGJvdW5kaW5nIGJveFxuICAgICAgICAgIHBhcmVudE9iamVjdFsnY2hpbGQnXSA9IFtdO1xuXG4gICAgICAgICAgZm9yKGxldCBjaGlsZEl0ZW0gaW4gbWFwTGlzdFtpdGVtXVsnY2hpbGQnXSkge1xuICAgICAgICAgICAgbGV0IGNoaWxkTmV3SXRlbSA9IDxhbnk+e307XG4gICAgICAgICAgICBpbmRleENvdW50ZXIgKys7XG4gICAgICAgICAgICBsZXQgY2hpbGRQb2x5Z29uOiBDb29yZGlhdGVNb2RlbFtdID0gW107XG4gICAgICAgICAgICBsZXQgY2hpbGRQb2x5Z29uSW5kZXg6IG51bWJlcjtcblxuICAgICAgICAgICAgbWFwTGlzdFtpdGVtXVsnY2hpbGQnXVtjaGlsZEl0ZW1dLkNvb3JkaW5hdGVzLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbihjaGlsZEU6IGFueSwgY2hpbGRJOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgaWYoY2hpbGRJJTIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjaGlsZFBvbHlnb25JbmRleCA9IGNoaWxkSS8yO1xuICAgICAgICAgICAgICAgIGNoaWxkUG9seWdvbltjaGlsZFBvbHlnb25JbmRleF0gPSBuZXcgQ29vcmRpYXRlTW9kZWwoKTtcbiAgICAgICAgICAgICAgICBjaGlsZFBvbHlnb25bY2hpbGRQb2x5Z29uSW5kZXhdLnggPSBwYXJzZUludChjaGlsZEUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkUG9seWdvbltjaGlsZFBvbHlnb25JbmRleF0ueSA9IHBhcnNlSW50KGNoaWxkRSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjaGlsZE5ld0l0ZW1bJ2RhdGEnXSA9IG1hcExpc3RbaXRlbV1bJ2NoaWxkJ11bY2hpbGRJdGVtXTtcbiAgICAgICAgICAgIGNoaWxkTmV3SXRlbVsncG9seWdvbnMnXSA9IGNoaWxkUG9seWdvbjtcbiAgICAgICAgICAgIGNoaWxkTmV3SXRlbVsnaW5kZXgnXSA9IGluZGV4Q291bnRlcjtcbiAgICAgICAgICAgIHBhcmVudE9iamVjdFsnY2hpbGQnXS5wdXNoKGNoaWxkTmV3SXRlbSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihtYXBMaXN0W2l0ZW1dWydzdWInXSkge1xuICAgICAgICAgICAgcGFyZW50T2JqZWN0WydzdWInXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IHN1Ykl0ZW0gaW4gbWFwTGlzdFtpdGVtXVsnc3ViJ10pIHtcbiAgICAgICAgICAgICAgbGV0IHN1Yk5ld0l0ZW0gPSA8YW55Pnt9O1xuICAgICAgICAgICAgICBsZXQgc3ViUG9seWdvbjogQ29vcmRpYXRlTW9kZWxbXSA9IFtdO1xuICAgICAgICAgICAgICBsZXQgc3ViUG9seWdvbkluZGV4OiBudW1iZXI7XG5cbiAgICAgICAgICAgICAgbWFwTGlzdFtpdGVtXVsnc3ViJ11bc3ViSXRlbV0uQ29vcmRpbmF0ZXMuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uKHN1YkU6IGFueSwgc3ViSTogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaWYoc3ViSSUyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBzdWJQb2x5Z29uSW5kZXggPSBzdWJJLzI7XG4gICAgICAgICAgICAgICAgICBzdWJQb2x5Z29uW3N1YlBvbHlnb25JbmRleF0gPSBuZXcgQ29vcmRpYXRlTW9kZWwoKTtcbiAgICAgICAgICAgICAgICAgIHN1YlBvbHlnb25bc3ViUG9seWdvbkluZGV4XS54ID0gcGFyc2VJbnQoc3ViRSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN1YlBvbHlnb25bc3ViUG9seWdvbkluZGV4XS55ID0gcGFyc2VJbnQoc3ViRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBzdWJOZXdJdGVtWydkYXRhJ10gPSBtYXBMaXN0W2l0ZW1dWydzdWInXVtzdWJJdGVtXTtcbiAgICAgICAgICAgICAgc3ViTmV3SXRlbVsncG9seWdvbnMnXSA9IHN1YlBvbHlnb247XG4gICAgICAgICAgICAgIHBhcmVudE9iamVjdFsnc3ViJ10ucHVzaChzdWJOZXdJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwTGlzdC5wdXNoKHBhcmVudE9iamVjdCk7XG4gICAgICAgIGluZGV4Q291bnRlciArKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYocmVzLmRhdGEuaGFzT3duUHJvcGVydHkoJ2xvY2F0aW9ucycpICYmIHJlcy5kYXRhWydsb2NhdGlvbnMnXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYXJyTG9jYXRpb25zID0gcmVzLmRhdGFbJ2xvY2F0aW9ucyddO1xuICAgICAgICB0aGlzLmJJc0xvY2F0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYklzTG9jYXRpb24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYocmVzWydkYXRhJ11bJ21ldGhvZCddPT09ICdvdXRsaW5lJykge1xuICAgICAgICB0aGlzLmlzT3V0bGluZU1ldGhvZCA9IHRydWU7XG4gICAgICAgIHRoaXMubWFwTGlzdCA9IFtdO1xuICAgICAgICBsZXQgbWFwTGlzdCA9IHJlcy5kYXRhLm1hcDtcbiAgICAgICAgdGhpcy5tYXBJbWcgPSByZXMuZGF0YS5pbWc7XG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5zdHJBcGlVcmwgKyB0aGlzLm1hcEltZztcbiAgICAgICAgbGV0IG5MaXN0SW5kZXggPSAwO1xuXG4gICAgICAgIC8vIGNhdGNoIGNvb3JkaW5hdGVzIGZyb20gYXBpXG4gICAgICAgIGZvcihsZXQgaXRlbSBpbiBtYXBMaXN0KSB7XG4gICAgICAgICAgbGV0IG1hcmtlcjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICBsZXQgcG9seWdvbjogQ29vcmRpYXRlTW9kZWxbXSA9IFtdO1xuICAgICAgICAgIGxldCBwb2x5Z29uSW5kZXg6IG51bWJlcjtcblxuICAgICAgICAgIG1hcExpc3RbaXRlbV0uQ29vcmRpbmF0ZXMuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uKGU6IGFueSwgaTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXJrZXIucHVzaChwYXJzZUludChlKSk7XG4gICAgICAgICAgICBpZihpJTIgPT09IDApIHtcbiAgICAgICAgICAgICAgcG9seWdvbkluZGV4ID0gaS8yO1xuICAgICAgICAgICAgICBwb2x5Z29uW3BvbHlnb25JbmRleF0gPSBuZXcgQ29vcmRpYXRlTW9kZWwoKTtcbiAgICAgICAgICAgICAgcG9seWdvbltwb2x5Z29uSW5kZXhdLnggPSBwYXJzZUludChlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBvbHlnb25bcG9seWdvbkluZGV4XS55ID0gcGFyc2VJbnQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLm1hcExpc3QucHVzaCh7XG4gICAgICAgICAgICBwb2x5Z29uOiBwb2x5Z29uLFxuICAgICAgICAgICAgZGF0YTogbWFwTGlzdFtpdGVtXSxcbiAgICAgICAgICAgIGluZGV4OiBuTGlzdEluZGV4LFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IChtYXBMaXN0W2l0ZW1dWydjb21wbGV0ZSddID09PSAxKSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbkxpc3RJbmRleCArKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKHJlc1snZGF0YSddWydtZXRob2QnXT09PSAnY29sdW1ucycpIHtcbiAgICAgICAgYXJyU2VsZWN0ZWRNYXBMaXN0ID0gW107XG4gICAgICAgIHRoaXMubWFwTGlzdCA9IFtdO1xuICAgICAgICBsZXQgbWFwTGlzdCA9IHJlcy5kYXRhLm1hcDtcbiAgICAgICAgdGhpcy5tYXBJbWcgPSByZXMuZGF0YS5pbWc7XG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5zdHJBcGlVcmwgKyB0aGlzLm1hcEltZztcbiAgICAgICAgbGV0IG5MaXN0SW5kZXggPSAwO1xuICAgICAgICAvLyBjYXRjaCBjb29yZGluYXRlcyBmcm9tIGFwaVxuICAgICAgICBmb3IobGV0IGl0ZW0gaW4gbWFwTGlzdCkge1xuICAgICAgICAgIGxldCBtYXJrZXI6IG51bWJlcltdID0gW107XG4gICAgICAgICAgbGV0IHBvbHlnb246IENvb3JkaWF0ZU1vZGVsW10gPSBbXTtcbiAgICAgICAgICBsZXQgcG9seWdvbkluZGV4OiBudW1iZXI7XG5cbiAgICAgICAgICBtYXBMaXN0W2l0ZW1dLkNvb3JkaW5hdGVzLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbihlOiBhbnksIGk6IG51bWJlcikge1xuICAgICAgICAgICAgbWFya2VyLnB1c2gocGFyc2VJbnQoZSkpO1xuICAgICAgICAgICAgaWYoaSUyID09PSAwKSB7XG4gICAgICAgICAgICAgIHBvbHlnb25JbmRleCA9IGkvMjtcbiAgICAgICAgICAgICAgcG9seWdvbltwb2x5Z29uSW5kZXhdID0gbmV3IENvb3JkaWF0ZU1vZGVsKCk7XG4gICAgICAgICAgICAgIHBvbHlnb25bcG9seWdvbkluZGV4XS54ID0gcGFyc2VJbnQoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2x5Z29uW3BvbHlnb25JbmRleF0ueSA9IHBhcnNlSW50KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5tYXBMaXN0LnB1c2goe1xuICAgICAgICAgICAgcG9seWdvbjogcG9seWdvbixcbiAgICAgICAgICAgIGRhdGE6IG1hcExpc3RbaXRlbV0sXG4gICAgICAgICAgICBpbmRleDogbkxpc3RJbmRleCxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAobWFwTGlzdFtpdGVtXVsnY29tcGxldGUnXSA9PT0gMSkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmKG1hcExpc3RbaXRlbV1bJ2NvbXBsZXRlJ10gPT09IDEpIHtcbiAgICAgICAgICAgIGFyclNlbGVjdGVkTWFwTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1hcExpc3RbaXRlbV0sXG4gICAgICAgICAgICAgIGlkOiBuTGlzdEluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuTGlzdEluZGV4ICsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPdXRsaW5lTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iSXNDb2x1bW5NZXRob2QgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc091dGxpbmVNZXRob2QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXBMaXN0ID0gW107XG4gICAgICAgIGxldCBtYXBMaXN0ID0gcmVzLmRhdGEudG9wX21hcDtcbiAgICAgICAgbGV0IG5MaXN0SW5kZXggPSAwO1xuXG4gICAgICAgIGZvcihsZXQgaXRlbSBpbiBtYXBMaXN0KSB7XG4gICAgICAgICAgdGhpcy5tYXBMaXN0LnB1c2goe1xuICAgICAgICAgICAgZGF0YTogbWFwTGlzdFtpdGVtXSxcbiAgICAgICAgICAgIGluZGV4OiBuTGlzdEluZGV4LFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IChtYXBMaXN0W2l0ZW1dWydjb21wbGV0ZSddID09PSAxKSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbkxpc3RJbmRleCArKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwSW1nID0gcmVzLmRhdGEudG9wX2ltZztcbiAgICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLnN0ckFwaVVybCArIHRoaXMubWFwSW1nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubWFwSW1nTGFvZCA9IHRydWU7XG5cbiAgICBpZih0aGlzLm1hcExpc3QpIHtcbiAgICAgIHRoaXMubG9hZENhckltYWdlKCk7XG5cbiAgICAgIGlmKHRoaXMuYklzQ29sdW1uTWV0aG9kKSB7XG4gICAgICAgIHRoaXMuaW5pdE1hcmtMaXN0LmVtaXQoYXJyU2VsZWN0ZWRNYXBMaXN0KTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuYlByZVNob3dEYW1hZ2VzICYmIHRoaXMuYklzQ29sdW1uTWV0aG9kKSB7XG4gICAgICAgIHRoaXMuZ2V0U2xpZGVyRGF0YSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIG1hcCBsaXN0IGRhdGEgaXMgbm90IGxvYWRlZC4nKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldFNsaWRlckRhdGEoKSB7XG4gICAgdGhpcy5sZWZ0U2xpZGVycyA9IFtdO1xuICAgIHRoaXMucmlnaHRTbGlkZXJzID0gW107XG5cbiAgICBzd2l0Y2ggKHRoaXMublNlbGVjdGVkU2VjdGlvbikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAvLyBkcml2ZXIgc2xpZGVyXG4gICAgICAgIHRoaXMubGVmdFNsaWRlcnMgPSB0aGlzLm1hcExpc3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKGl0ZW0uZGF0YS5zZWN0aW9uID09PSB0aGlzLm5TZWxlY3RlZFNlY3Rpb24pICYmIChpdGVtLmRhdGEuc2lkZSA9PT0gJ2xlZnQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIGNlbnRlclxuICAgICAgICB0aGlzLmxlZnRTbGlkZXJzID0gdGhpcy5tYXBMaXN0LmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChpdGVtLmRhdGEuc2VjdGlvbiA9PT0gdGhpcy5uU2VsZWN0ZWRTZWN0aW9uKSAmJiAoaXRlbS5kYXRhLnNpZGUgPT09ICdsZWZ0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmlnaHRTbGlkZXJzID0gdGhpcy5tYXBMaXN0LmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChpdGVtLmRhdGEuc2VjdGlvbiA9PT0gdGhpcy5uU2VsZWN0ZWRTZWN0aW9uKSAmJiAoaXRlbS5kYXRhLnNpZGUgPT09ICdyaWdodCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgLy8gcGFzc2VuZ2VyIHNsaWRlclxuICAgICAgICB0aGlzLnJpZ2h0U2xpZGVycyA9IHRoaXMubWFwTGlzdC5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoaXRlbS5kYXRhLnNlY3Rpb24gPT09IHRoaXMublNlbGVjdGVkU2VjdGlvbikgJiYgKGl0ZW0uZGF0YS5zaWRlID09PSAncmlnaHQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZygnVGhlIHNsaWRlciB0eXBlIGlzIG5vdCBleGlzdGVkJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWcoKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UuZW1pdCgpO1xuICB9XG5cbiAgLypcbiAgY3JlYXRlIGlkXG4gICovXG4gIHV1aWQoa2V5OiBzdHJpbmcgPSAnMDEyMzQ1Njc4OWFiY2RlZicpIHtcbiAgICB2YXIgY2hhcnMgPSBrZXkuc3BsaXQoJycpO1xuXG4gICAgbGV0IHV1aWQ6IGFueVtdID0gW10sIHJuZCA9IE1hdGgucmFuZG9tLCByOiBhbnk7XG4gICAgdXVpZFs4XSA9IHV1aWRbMTNdID0gdXVpZFsxOF0gPSB1dWlkWzIzXSA9ICctJztcbiAgICB1dWlkWzE0XSA9ICc0JzsgLy8gdmVyc2lvbiA0XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgIGlmICghdXVpZFtpXSkge1xuICAgICAgICByID0gMCB8IHJuZCgpKjE2O1xuICAgICAgICB1dWlkW2ldID0gY2hhcnNbKGkgPT09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHIgJiAweGZdO1xuICAgICAgfVxuICAgIH1cblxuICAgcmV0dXJuIHV1aWQuam9pbignJyk7XG4gIH1cblxuICAvLysrK1xuXG4gIC8vIGNoZWNrUG9seWdvblNpemUocG9seWdvbkxpc3Q6IENvb3JkaWF0ZU1vZGVsW10pIHtcbiAgLy8gICBsZXQgbWluID0gcG9seWdvbkxpc3RbMF0ueCArIHBvbHlnb25MaXN0WzBdLnk7XG4gIC8vICAgbGV0IG1heCA9IHBvbHlnb25MaXN0WzBdLnggKyBwb2x5Z29uTGlzdFswXS55O1xuICAvLyAgIGxldCBtaW5JZCA9IDA7XG4gIC8vICAgbGV0IG1heElkID0gMDtcblxuICAvLyAgIGZvcihsZXQgaT0wOyBpPHBvbHlnb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBpZihtaW4gPiAocG9seWdvbkxpc3RbaV0ueCArIHBvbHlnb25MaXN0W2ldLnkpKSB7XG4gIC8vICAgICAgIG1pbiA9IHBvbHlnb25MaXN0W2ldLnggKyBwb2x5Z29uTGlzdFtpXS55O1xuICAvLyAgICAgICBtaW5JZCA9IGk7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGlmKG1heCA8IChwb2x5Z29uTGlzdFtpXS54ICsgcG9seWdvbkxpc3RbaV0ueSkpIHtcbiAgLy8gICAgICAgbWF4ID0gcG9seWdvbkxpc3RbaV0ueCArIHBvbHlnb25MaXN0W2ldLnk7XG4gIC8vICAgICAgIG1heElkID0gaTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICBpZihtYXgtbWluID4gODApIHtcbiAgLy8gICAgIHJldHVybiB0cnVlO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICByZXR1cm4gZmFsc2U7XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICAvLysrK1xuXG4gIC8qXG4gIGRyYXcgYWxsIGRhbWFnZSBhcmVhXG4gICovXG4gIGRyYXdBbGxEYW1hZ2VBcmVhKCkge1xuICAgIGxldCBjdHggPSB0aGlzLm1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5tYXBDYW52YXMud2lkdGgsIHRoaXMubWFwQ2FudmFzLmhlaWdodCk7XG5cbiAgICBpZih0aGlzLmJQcmVTaG93RGFtYWdlcykgeyAvL2RhbWFnZSBtb2RhbFxuICAgICAgbGV0IHN0eWxlOiBPYmplY3Q7XG5cbiAgICAgIGlmKCh0aGlzLm1hcERhdGEgYXMgYW55KS5kYXRhLm92ZXJsYXBBbHBoYSAmJlxuICAgICAgICAodGhpcy5tYXBEYXRhIGFzIGFueSkuZGF0YS5vdmVybGFwQ29sb3IpIHtcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgYmdDb2xvcjogKHRoaXMubWFwRGF0YSBhcyBhbnkpLmRhdGEub3ZlcmxhcENvbG9yLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgIGJnT3BhY2l0eTogKHRoaXMubWFwRGF0YSBhcyBhbnkpLmRhdGEub3ZlcmxhcEFscGhhLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICBiZ0NvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgYmdPcGFjaXR5OiAwLjEsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmF3RGFtYWdlUG9seWdvbnModGhpcy5tYXBDYW52YXMsIHN0eWxlKTtcbiAgICB9IGVsc2UgeyAvL291dGxpbmUsIGNvbHVtbiBhbmQgaWNvbiBtZXRob2RzXG4gICAgICBpZih0aGlzLmlzT3V0bGluZU1ldGhvZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrTWFyaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3RGFtYWdlSWNvbnModGhpcy5pc0xvYWRGb250KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICBjaGVjayBpZiB0aGUgY3VycmVudCBpbmRleCBpcyBpbnNpZGUgdGhlIHNlbGVjdGVkIHBvbHlnb24gbGlzdFxuICAqL1xuICBjaGVja1BvbHlnb25JbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5zZWxlY3RlZFBvbHlnb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0aGlzLnNlbGVjdGVkUG9seWdvbkxpc3RbaV1bJ2lkJ10gPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qXG4gIGRyYXcgZW50aXJlIGRhbWFnZSBwb2x5Z29ucyB3aXRoIGxpbWl0ZWQgcnVsZVxuICAqL1xuICBkcmF3RGFtYWdlUG9seWdvbnMoXG4gICAgY2FudmFzOiBhbnksXG4gICAgc3R5bGU6IE9iamVjdFxuICApIHtcbiAgICBsZXQgc2VsZWN0ZWRTdHlsZTogT2JqZWN0O1xuXG4gICAgaWYoKHRoaXMubWFwRGF0YSBhcyBhbnkpLmRhdGEuaGlnaGxpZ2h0QWxwaGEgJiZcbiAgICAgICh0aGlzLm1hcERhdGEgYXMgYW55KS5kYXRhLmhpZ2hsaWdodENvbG9yKSB7XG4gICAgICBzZWxlY3RlZFN0eWxlID0ge1xuICAgICAgICBiZ0NvbG9yOiAodGhpcy5tYXBEYXRhIGFzIGFueSkuZGF0YS5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMubWFwU3R5bGUuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJnT3BhY2l0eTogKHRoaXMubWFwRGF0YSBhcyBhbnkpLmRhdGEuaGlnaGxpZ2h0QWxwaGEsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLm1hcFN0eWxlLmJvcmRlcldpZHRoXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0eWxlID0ge1xuICAgICAgICBiZ0NvbG9yOiB0aGlzLm1hcFN0eWxlLmJnQ29sb3IsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLm1hcFN0eWxlLmJvcmRlckNvbG9yLFxuICAgICAgICBiZ09wYWNpdHk6IHRoaXMubWFwU3R5bGUuYmdPcGFjaXR5LFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5tYXBTdHlsZS5ib3JkZXJXaWR0aFxuICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBjYW52YXNTdHlsZTogT2JqZWN0O1xuXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5tYXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMubWFwTGlzdFtpXTtcbiAgICAgIGlmKGl0ZW1bJ3BhcmVudERhdGEnXVsnVGl0bGUnXSA9PT0gJ0JvdW5kIEJveCcpIHtcbiAgICAgICAgLy8gc2F2ZSB0aGUgdW5jbGlwcGVkIGNvbnRleHRcbiAgICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgICAvLyBkZWZpbmUgdGhlIHBhdGggdGhhdCB3aWxsIGJlIGNsaXBwZWQgdG9cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IobGV0IGM9MDsgYzxpdGVtWydwYXJlbnRQb2x5Z29ucyddLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgaWYoYyA9PT0gMCkge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhpdGVtWydwYXJlbnRQb2x5Z29ucyddW2NdWyd4J10qdGhpcy5jYW52YXNUb2ltYWdlUmF0ZVcsIGl0ZW1bJ3BhcmVudFBvbHlnb25zJ11bY11bJ3knXSp0aGlzLmNhbnZhc1RvaW1hZ2VSYXRlSCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oaXRlbVsncGFyZW50UG9seWdvbnMnXVtjXVsneCddKnRoaXMuY2FudmFzVG9pbWFnZVJhdGVXLCBpdGVtWydwYXJlbnRQb2x5Z29ucyddW2NdWyd5J10qdGhpcy5jYW52YXNUb2ltYWdlUmF0ZUgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAvLyBzdHJva2UgdGhlIHBhdGhcbiAgICAgICAgLy8gaGFsZiBvZiB0aGUgc3Ryb2tlIGlzIG91dHNpZGUgdGhlIHBhdGhcbiAgICAgICAgLy8gdGhlIG91dHNpZGUgc3Ryb2tlIHdpbGwgc3Vydml2ZSB0aGUgY2xpcHBpbmcgdGhhdCBmb2xsb3dzXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlPSAnYmxhY2snO1xuICAgICAgICBjdHgubGluZVdpZHRoPTI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBtYWtlIHRoZSBjdXJyZW50IHBhdGggYSBjbGlwcGluZyBwYXRoXG4gICAgICAgIGN0eC5jbGlwKCk7XG5cbiAgICAgICAgLy8gZHJhdyB0aGUgaW1hZ2Ugd2hpY2ggd2lsbCBiZSBjbGlwcGVkIGV4Y2VwdCBpbiB0aGUgY2xpcHBpbmcgcGF0aFxuICAgICAgICBmb3IobGV0IGo9MDsgajxpdGVtWydjaGlsZCddLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGJTZWxlY3RlZCA9IHRoaXMuY2hlY2tQb2x5Z29uSW5kZXgoaXRlbVsnY2hpbGQnXVtqXVsnaW5kZXgnXSk7XG5cbiAgICAgICAgICBpZihiU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNhbnZhc1N0eWxlID0gc2VsZWN0ZWRTdHlsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRyYXdQb2x5Z29ucyh0aGlzLm1hcENhbnZhcywgaXRlbVsnY2hpbGQnXVtqXVsncG9seWdvbnMnXSwgY2FudmFzU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzdG9yZSB0aGUgdW5jbGlwcGVkIGNvbnRleHQgKD09dW5kbyB0aGUgY2xpcHBpbmcgcGF0aClcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBiU2VsZWN0ZWQgPSB0aGlzLmNoZWNrUG9seWdvbkluZGV4KGl0ZW1bJ2luZGV4J10pO1xuXG4gICAgICAgIGlmKGJTZWxlY3RlZCkge1xuICAgICAgICAgIGNhbnZhc1N0eWxlID0gc2VsZWN0ZWRTdHlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYW52YXNTdHlsZSA9IHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3UG9seWdvbnModGhpcy5tYXBDYW52YXMsIGl0ZW1bJ3BhcmVudFBvbHlnb25zJ10sIGNhbnZhc1N0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICBsb2FkIGJhY2tncm91bmQgY2FyIGltYWdlIHRvIGNhbnZhc1xuICAqL1xuICBsb2FkQ2FySW1hZ2UobkNvdW50OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy5tYXBDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmltYWdlQ2FudmFzSWQpO1xuICAgIHRoaXMuZWZmZWN0Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lZmZlY3RDYW52YXNJZCk7XG4gICAgbGV0ICRpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmltYWdlSWQpO1xuXG4gICAgaWYobkNvdW50ID4gMzApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaW1lb3V0IHRvIGxvYWQgdGhlIGltYWdlIScpO1xuICAgIH0gZWxzZSBpZighdGhpcy5tYXBDYW52YXMpIHtcbiAgICAgIG5Db3VudCArKztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkQ2FySW1hZ2UoKSwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5tYXBDb250YWluZXIpIHtcbiAgICAgICAgbGV0IG5NYXBFbGVtZW50VyA9IHRoaXMubWFwQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgaWYodGhpcy5iUHJlU2hvd0RhbWFnZXMpIHsgLy8gZGFtYWdlIG1vZGFsXG4gICAgICAgICAgdGhpcy5uTWFwSCA9IHRoaXMubWFwUHJvcGVydGllcy55IC8gdGhpcy5tYXBQcm9wZXJ0aWVzLnggKiBuTWFwRWxlbWVudFc7XG5cbiAgICAgICAgICBpZih0aGlzLm5NYXBIID4gMzAwKSB7XG4gICAgICAgICAgICB0aGlzLm5NYXBIID0gMzAwO1xuICAgICAgICAgICAgdGhpcy5uTWFwVyA9IHRoaXMubWFwUHJvcGVydGllcy54IC8gdGhpcy5tYXBQcm9wZXJ0aWVzLnkgKiB0aGlzLm5NYXBIO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5NYXBXID0gbk1hcEVsZW1lbnRXO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgblNjYWxlID0gMTtcbiAgICAgICAgICBpZih0aGlzLmJJc0NvbHVtbk1ldGhvZCkge1xuICAgICAgICAgICAgblNjYWxlID0gMC45O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm5NYXBIID0gdGhpcy5tYXBDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKiBuU2NhbGU7XG4gICAgICAgICAgdGhpcy5uTWFwVyA9IHRoaXMubWFwUHJvcGVydGllcy54IC8gdGhpcy5tYXBQcm9wZXJ0aWVzLnkgKiB0aGlzLm5NYXBIO1xuXG4gICAgICAgICAgaWYobk1hcEVsZW1lbnRXIDwgdGhpcy5uTWFwVykge1xuICAgICAgICAgICAgdGhpcy5uTWFwVyA9IG5NYXBFbGVtZW50VyAqIG5TY2FsZTtcbiAgICAgICAgICAgIHRoaXMubk1hcEggPSB0aGlzLm1hcFByb3BlcnRpZXMueSAvIHRoaXMubWFwUHJvcGVydGllcy54ICogdGhpcy5uTWFwVztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXBDYW52YXMud2lkdGggICAgID0gdGhpcy5uTWFwVztcbiAgICAgIHRoaXMubWFwQ2FudmFzLmhlaWdodCAgICA9IHRoaXMubk1hcEg7XG4gICAgICB0aGlzLmVmZmVjdENhbnZhcy53aWR0aCAgPSB0aGlzLm5NYXBXO1xuICAgICAgdGhpcy5lZmZlY3RDYW52YXMuaGVpZ2h0ID0gdGhpcy5uTWFwSDtcbiAgICAgIHRoaXMuY2FudmFzVG9pbWFnZVJhdGVXID0gdGhpcy5uTWFwVyAvIHRoaXMubWFwUHJvcGVydGllcy54O1xuICAgICAgdGhpcy5jYW52YXNUb2ltYWdlUmF0ZUggPSB0aGlzLm5NYXBIIC8gdGhpcy5tYXBQcm9wZXJ0aWVzLnk7XG5cbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSB0aGlzLnN0ckFwaVVybCsgdGhpcy5tYXBJbWc7XG5cbiAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgKCRpbWcgYXMgYW55KS53aWR0aCA9IHRoYXQubWFwUHJvcGVydGllcy54O1xuICAgICAgICAoJGltZyBhcyBhbnkpLmhlaWdodCA9IHRoYXQubWFwUHJvcGVydGllcy55O1xuICAgICAgICB0aGF0LmNhbnZhc1RvaW1hZ2VSYXRlVyA9IHRoYXQubWFwQ2FudmFzLndpZHRoIC8gaW1nLndpZHRoO1xuICAgICAgICB0aGF0LmNhbnZhc1RvaW1hZ2VSYXRlSCA9IHRoYXQubWFwQ2FudmFzLmhlaWdodCAvIGltZy5oZWlnaHQ7XG5cbiAgICAgICAgdGhhdC5kcmF3QWxsRGFtYWdlQXJlYSgpO1xuICAgICAgfTtcblxuICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaW1hZ2UgdXJsIGlzIGludmFsaWQ6ICcgKyBpbWcuc3JjKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLypcbiAgY2hlY2sgaWYgcG9pbnQgaXMgaW5zaWRlIHBvbHlnb25cbiAgcGFyYW1zOlxuICAtIHBvbHk6IHRoZSBjb29yZGluYXRlIGFycmF5IHdoZXJlIHRoZSBwb2x5Z29uIGlzIGNvdmVyZWRcbiAgLSBwdDogdGhlIGNvb3JkaW5hdGUgd2hpY2ggaXMgb24gY3VycmVudCBtb3VzZVxuICByZXR1cm46XG4gIHRydWUgb3IgZmFsc2Ugd2hpY2ggcG9pbnQgaXMgaW4gcG9seWdvblxuICAqL1xuICBpc1BvaW50SW5Qb2x5KHBvbHk6IENvb3JkaWF0ZU1vZGVsW10sIHB0OiBDb29yZGlhdGVNb2RlbCkge1xuXG4gICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuXG4gICAgbGV0IHggPSBwdC54O1xuICAgIGxldCB5ID0gcHQueTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gcG9seS5sZW5ndGggLSAxOyBpIDwgcG9seS5sZW5ndGg7IGogPSBpKyspIHtcbiAgICAgIHZhciB4aSA9IHBvbHlbaV0ueCwgeWkgPSBwb2x5W2ldLnk7XG4gICAgICB2YXIgeGogPSBwb2x5W2pdLngsIHlqID0gcG9seVtqXS55O1xuXG4gICAgICB2YXIgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSlcbiAgICAgICAgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcbiAgICAgICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zaWRlO1xuICB9XG5cbiAgLypcbiAgZ2V0IHRoZSBwb3NpdGlvbiAoaW5kZXgpIGluIGRhbWFnZSBhcnJheVxuICBwYXJhbXM6XG4gIC0gbW91c2VQb2ludDogdGhlIGN1cnJlbnQgbW91c2UgcG9pbnQgY29vcmRpbmF0ZVxuICByZXR1cm46XG4gIGluZGV4IHdoaWNoIGlzIGdsb2JhbCBwb2x5Z29uTGlzdCBhcnJheSBpbmRleFxuICAqL1xuICBnZXRDdXJyZW50UG9zaXRpb24obW91c2VQb2ludDogQ29vcmRpYXRlTW9kZWwpIHtcbiAgICBsZXQgbW91c2VQb2ludE9uUmF0ZSA9IG5ldyBDb29yZGlhdGVNb2RlbCgpO1xuICAgIG1vdXNlUG9pbnRPblJhdGUueCA9IG1vdXNlUG9pbnQueCAvIHRoaXMuY2FudmFzVG9pbWFnZVJhdGVXO1xuICAgIG1vdXNlUG9pbnRPblJhdGUueSA9IG1vdXNlUG9pbnQueSAvIHRoaXMuY2FudmFzVG9pbWFnZVJhdGVIO1xuXG4gICAgaWYodGhpcy5iUHJlU2hvd0RhbWFnZXMpIHsgLy8gZGFtYWdlIHBvcHVwIG1vZGFsXG4gICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm1hcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm1hcExpc3RbaV07XG4gICAgICAgIGlmKGl0ZW1bJ3BhcmVudERhdGEnXVsnVGl0bGUnXSA9PT0gJ0JvdW5kIEJveCcpIHtcbiAgICAgICAgICBmb3IobGV0IGo9MDsgajxpdGVtWydjaGlsZCddLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuaXNQb2ludEluUG9seShpdGVtWydjaGlsZCddW2pdWydwb2x5Z29ucyddLCBtb3VzZVBvaW50T25SYXRlKSkge1xuICAgICAgICAgICAgICBpZih0aGlzLmlzUG9pbnRJblBvbHkoaXRlbVsncGFyZW50UG9seWdvbnMnXSwgbW91c2VQb2ludE9uUmF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVsnY2hpbGQnXVtqXVsnaW5kZXgnXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYodGhpcy5pc1BvaW50SW5Qb2x5KGl0ZW1bJ3BhcmVudFBvbHlnb25zJ10sIG1vdXNlUG9pbnRPblJhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVsnaW5kZXgnXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5pc091dGxpbmVNZXRob2QpIHtcbiAgICAgICAgbGV0IG1vdXNlUG9pbnRPblJhdGUgPSBuZXcgQ29vcmRpYXRlTW9kZWwoKTtcbiAgICAgICAgbW91c2VQb2ludE9uUmF0ZS54ID0gbW91c2VQb2ludC54IC8gdGhpcy5jYW52YXNUb2ltYWdlUmF0ZVc7XG4gICAgICAgIG1vdXNlUG9pbnRPblJhdGUueSA9IG1vdXNlUG9pbnQueSAvIHRoaXMuY2FudmFzVG9pbWFnZVJhdGVIO1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubWFwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKHRoaXMuaXNQb2ludEluUG9seSh0aGlzLm1hcExpc3RbaV1bJ3BvbHlnb24nXSwgbW91c2VQb2ludE9uUmF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm1hcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZih0aGlzLm1hcExpc3RbaV1bJ2RhdGEnXS5oYXNPd25Qcm9wZXJ0eSgneCcpICYmIHRoaXMubWFwTGlzdFtpXVsnZGF0YSddLmhhc093blByb3BlcnR5KCd5JykpIHtcbiAgICAgICAgICAgIGxldCBwdCA9IHRoaXMubWFwTGlzdFtpXVsnZGF0YSddO1xuICAgICAgICAgICAgbGV0IHhSaWdodERldmlhdGlvbiA9IDIwO1xuICAgICAgICAgICAgbGV0IHlSaWdodERldmlhdGlvbiA9IDIwO1xuICAgICAgICAgICAgbGV0IHhPcHBvc2l0ZURldmlhdGlvbiA9IDA7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudERhbWFnZUluZGV4ID09PSBpKSB7XG4gICAgICAgICAgICAgIGxldCBzdGFydFggPSBwdFsneCddICogdGhpcy5jYW52YXNUb2ltYWdlUmF0ZVc7XG4gICAgICAgICAgICAgIGxldCBjdHggPSB0aGlzLm1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICB2YXIgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dChwdFsnUGFydCddKTtcbiAgICAgICAgICAgICAgbGV0IGRldGFpbFRleHRXaWR0aCA9IG1ldHJpY3Mud2lkdGg7XG5cbiAgICAgICAgICAgICAgaWYodGhpcy5tYXBDYW52YXMud2lkdGgvMiA8IHN0YXJ0WCkge1xuICAgICAgICAgICAgICAgIHhPcHBvc2l0ZURldmlhdGlvbiAtPSBkZXRhaWxUZXh0V2lkdGg7XG4gICAgICAgICAgICAgICAgeE9wcG9zaXRlRGV2aWF0aW9uIC09IDEwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHhSaWdodERldmlhdGlvbiArPSBkZXRhaWxUZXh0V2lkdGg7XG4gICAgICAgICAgICAgICAgeFJpZ2h0RGV2aWF0aW9uICs9IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKChwdFsneCddICsgeE9wcG9zaXRlRGV2aWF0aW9uKSA8PSBtb3VzZVBvaW50T25SYXRlLnggJiZcbiAgICAgICAgICAgICAgcHRbJ3knXSA8PSBtb3VzZVBvaW50T25SYXRlLnkgJiZcbiAgICAgICAgICAgICAgKHB0Wyd4J10gKyB4UmlnaHREZXZpYXRpb24pID49IG1vdXNlUG9pbnRPblJhdGUueCAmJlxuICAgICAgICAgICAgICAocHRbJ3knXSArIHlSaWdodERldmlhdGlvbikgPj0gbW91c2VQb2ludE9uUmF0ZS55KSB7XG4gICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIGFuZCBZIG9mIHRoZSBtYXAgbGlzdCBpcyBub3QgZXhpc3RlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qXG4gIGRyYXcgdGhlIHBvbHlnb24gaW50byBjYW52YXNcbiAgcGFyYW1zOlxuICAtIGNvb3JkaW5hdGU6IHRoZSBjb29yZGluYXRlIGFycmF5IHdoaWNoIGNvdmVyIHRoZSBwb2x5Z29uXG4gIC0gYmdDb2xvcjogdGhlIHBvbHlnb24gYmFja2dyb3VuZFxuICAqL1xuICBkcmF3UG9seWdvbnMoY2FudmFzOiBhbnksXG4gICAgcG9seWdvbjogQ29vcmRpYXRlTW9kZWxbXSxcbiAgICBzdHlsZTogT2JqZWN0KSB7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgaWYoIXBvbHlnb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgcmVhZHkgdG8gZHJhdyBwb2x5Z29uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgaT0wOyBpPHBvbHlnb24ubGVuZ3RoOyBpICsrKSB7XG4gICAgICBpZihpPT09MCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9seWdvbltpXS54KnRoaXMuY2FudmFzVG9pbWFnZVJhdGVXLCBwb2x5Z29uW2ldLnkqdGhpcy5jYW52YXNUb2ltYWdlUmF0ZUgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmxpbmVUbyhwb2x5Z29uW2ldLngqdGhpcy5jYW52YXNUb2ltYWdlUmF0ZVcsIHBvbHlnb25baV0ueSp0aGlzLmNhbnZhc1RvaW1hZ2VSYXRlSCk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgY3R4LnN0cm9rZVN0eWxlPSAoc3R5bGUgYXMgYW55KS5ib3JkZXJDb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gKHN0eWxlIGFzIGFueSkuYm9yZGVyV2lkdGg7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IChzdHlsZSBhcyBhbnkpLmJnT3BhY2l0eTtcbiAgICBjdHguZmlsbFN0eWxlID0gKHN0eWxlIGFzIGFueSkuYmdDb2xvcjtcbiAgICAvLyBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgLypcbiAgZ2V0IHBvbHlnb24gZGF0YSB3aXRoIGlkIGluIHRoZSBtYXAgbGlzdFxuICAqL1xuICBnZXRQb2x5Z29uRGF0YShpbmRleDogbnVtYmVyKSB7XG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5tYXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMubWFwTGlzdFtpXTtcbiAgICAgIGlmKGl0ZW1bJ3BhcmVudERhdGEnXSAmJiBpdGVtWydwYXJlbnREYXRhJ11bJ1RpdGxlJ10gPT09ICdCb3VuZCBCb3gnKSB7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPGl0ZW1bJ2NoaWxkJ10ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZihpdGVtWydjaGlsZCddW2pdWydpbmRleCddID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bJ2NoaWxkJ11bal1bJ3BvbHlnb25zJ107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihpdGVtWydpbmRleCddID09PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBpdGVtWydwYXJlbnRQb2x5Z29ucyddO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICBkZWxldGUgcG9seWdvblxuICAqL1xuICB1cGRhdGVQb2x5Z29uKHBvbHlnb246IGFueVtdKSB7XG4gICAgdGhpcy5zZWxlY3RlZFBvbHlnb25MaXN0ID0gcG9seWdvbjtcbiAgICB0aGlzLmRyYXdBbGxEYW1hZ2VBcmVhKCk7XG4gIH1cblxuICAvKlxuICBnZXQgY2hlY2ttYXJrIHBvc3Rpb25cbiAgKi9cbiAgZ2V0Q2hlY2tNYXJrUG9zdGlvbihwb2x5Z29uSWQ6IG51bWJlcikge1xuICAgIGxldCBwb3NpdGlvbiA9IG5ldyBDb29yZGlhdGVNb2RlbCgpO1xuICAgIGxldCBzeCA9IDAsXG4gICAgc3kgPSAwLFxuICAgIHNMID0gMDtcbiAgICBsZXQgcG9seWdvbnM6IENvb3JkaWF0ZU1vZGVsW10gPSB0aGlzLm1hcExpc3RbcG9seWdvbklkXVsncG9seWdvbiddO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBvbHlnb25zLmxlbmd0aDsgaSArKykge1xuICAgICAgbGV0IHgwOiBudW1iZXIsIHkwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkxOiBudW1iZXI7XG4gICAgICBpZihpPT09MCkge1xuICAgICAgICB4MCA9IHBvbHlnb25zW3BvbHlnb25zLmxlbmd0aC0xXS54O1xuICAgICAgICB5MCA9IHBvbHlnb25zW3BvbHlnb25zLmxlbmd0aC0xXS55O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeDAgPSBwb2x5Z29uc1tpLTFdLng7XG4gICAgICAgIHkwID0gcG9seWdvbnNbaS0xXS55O1xuICAgICAgfVxuXG4gICAgICB4MSA9IHBvbHlnb25zW2ldLng7XG4gICAgICB5MSA9IHBvbHlnb25zW2ldLnk7XG4gICAgICBsZXQgTCA9IE1hdGgucG93KE1hdGgucG93KCh4MSAtIHgwKSwgMikgKyBNYXRoLnBvdygoeTEgLSB5MCksIDIpLCAwLjUpO1xuICAgICAgc3ggKz0gKHgwICsgeDEpLzIgKiBMO1xuICAgICAgc3kgKz0gKHkwICsgeTEpLzIgKiBMO1xuICAgICAgc0wgKz0gTDtcbiAgICB9XG4gICAgcG9zaXRpb24ueCA9IHN4IC8gc0w7XG4gICAgcG9zaXRpb24ueSA9IHN5IC8gc0w7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICAgLypcbiAgZHJhdyBjaGVja21hcmtcbiAgKi9cbiAgZHJhd0NoZWNrTWFyayhwb2x5Z29uSWQ6IG51bWJlcikge1xuICAgIGlmKCF0aGlzLmlzT3V0bGluZU1ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb2x5Z29uUG9zdGlvbjogQ29vcmRpYXRlTW9kZWwgPSB0aGlzLmdldENoZWNrTWFya1Bvc3Rpb24ocG9seWdvbklkKTtcblxuICAgIGxldCBpbWdTcmMgPSAnYXNzZXRzL2ltZy9jaGVja21hcmsucG5nJztcbiAgICBsZXQgY3R4SW1nID0gdGhpcy5tYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgaW1nVyA9IDE2LCBpbWdIID0gMTY7XG4gICAgbGV0IGltZ1N0YXJ0WCA9IHBvbHlnb25Qb3N0aW9uLnggKiB0aGlzLmNhbnZhc1RvaW1hZ2VSYXRlVyAtIGltZ1cvMjtcbiAgICBsZXQgaW1nU3RhcnRZID0gcG9seWdvblBvc3Rpb24ueSAqIHRoaXMuY2FudmFzVG9pbWFnZVJhdGVIIC0gaW1nSC8yO1xuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHhJbWcuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgY3R4SW1nLmRyYXdJbWFnZShpbWcsIGltZ1N0YXJ0WCwgaW1nU3RhcnRZLCBpbWdXLCBpbWdIKTtcbiAgICAgIHRoYXQubWFwSW1nTGFvZCA9IHRydWU7XG4gICAgfTtcblxuICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhpcyBpbWFnZSB1cmwgaXMgaW52YWxpZDogJyArIGltZy5zcmMpO1xuICAgIH07XG4gIH1cblxuICAvKlxuICBkcmF3IGFsbCBoaW50IHBsdXMgaWNvbnNcbiAgKi9cbiAgZHJhd0RhbWFnZUljb25zKGlzTG9hZEZvbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGxldCBhcGlVcmwgPSB0aGlzLnN0ckFwaVVybDtcblxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubWFwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbGV0IHN0YXR1cyA9IHRoaXMuY2hlY2tQb2x5Z29uU2l6ZSh0aGlzLnBvbHlnb25MaXN0W2ldKTtcbiAgICAgIGxldCBiRGV0YWlsID0gZmFsc2U7XG4gICAgICBsZXQgc3RyRGV0YWlsID0gJyc7XG4gICAgICBsZXQgYkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGxldCBpY29uVXJsID0gJyc7XG4gICAgICBsZXQgaWNvbk9iaiA9IHRoaXMubWFwTGlzdFtpXVsnZGF0YSddO1xuXG4gICAgICBpZiggaT09PXRoaXMuY3VycmVudERhbWFnZUluZGV4ICkge1xuICAgICAgICBiRGV0YWlsID0gdHJ1ZTtcbiAgICAgICAgaWYoIGljb25PYmouaGFzT3duUHJvcGVydHkoJ1BhcnQnKSApIHtcbiAgICAgICAgICBzdHJEZXRhaWwgPSBpY29uT2JqWydQYXJ0J107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIGljb25PYmouaGFzT3duUHJvcGVydHkoJ0ljb24nKSApIHtcbiAgICAgICAgaWNvblVybCA9IGFwaVVybCArIGljb25PYmpbJ0ljb24nXTtcbiAgICAgIH1cblxuICAgICAgaWYoaWNvbk9ialsnZGF0YSddICYmIGljb25PYmpbJ2RhdGEnXVsnY29tcGxldGUnXSA9PT0gMSkge1xuICAgICAgICBiQ2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhd1BsdXNJY29uKGljb25PYmoueCwgaWNvbk9iai55LCBmYWxzZSwgYkRldGFpbCwgc3RyRGV0YWlsLCBiQ2hlY2tlZCwgaWNvblVybCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgZ2V0IHRoZSBkYW1hZ2UgZGF0YSB3aXRoIGluZGV4XG4gICovXG4gIGdldERhbWFnZURhdGEoaW5kZXg6IG51bWJlcikge1xuXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5tYXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMubWFwTGlzdFtpXTtcbiAgICAgIGlmKGl0ZW1bJ3BhcmVudERhdGEnXSAmJiBpdGVtWydwYXJlbnREYXRhJ11bJ1RpdGxlJ10gPT09ICdCb3VuZCBCb3gnKSB7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPGl0ZW1bJ2NoaWxkJ10ubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgIGlmKGluZGV4ID09PSBpdGVtWydjaGlsZCddW2pdWydpbmRleCddKSB7XG4gICAgICAgICAgICBsZXQgcmV0dXJuRGF0YSA9IDxhbnk+e307XG4gICAgICAgICAgICByZXR1cm5EYXRhWydkYXRhJ10gPSBpdGVtWydjaGlsZCddW2pdWydkYXRhJ107XG4gICAgICAgICAgICBpZihpdGVtWydzdWInXSkge1xuICAgICAgICAgICAgICBsZXQgYXJySW50ZXJzZWN0czogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgICBmb3IobGV0IGM9MDsgYzxpdGVtWydzdWInXS5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLmNoZWNrSW50ZXJzZWN0aW9uT2ZQb2x5Z29ucyhpdGVtWydjaGlsZCddW2pdWydwb2x5Z29ucyddLCBpdGVtWydzdWInXVtjXVsncG9seWdvbnMnXSkgKSB7XG4gICAgICAgICAgICAgICAgICBpZihpdGVtWydzdWInXVtjXVsnZGF0YSddWydpZCddKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyckludGVyc2VjdHMucHVzaChpdGVtWydzdWInXVtjXVsnZGF0YSddWydpZCddKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJySW50ZXJzZWN0cyk7XG4gICAgICAgICAgICAgIGlmKGFyckludGVyc2VjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybkRhdGFbJ2ludGVyc2VjdCddID0gYXJySW50ZXJzZWN0cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihpbmRleCA9PT0gaXRlbVsnaW5kZXgnXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBpdGVtWydwYXJlbnREYXRhJ11cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKm5leF9zZXZlcml0eV9ldmVudFxuICBjbGljayBldmVudCBvbiBjYW52YXNcbiAgKi9cbiAgY2FudmFzQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGxldCBjdXJyZW50UCA9IG5ldyBDb29yZGlhdGVNb2RlbCgpO1xuXG4gICAgY3VycmVudFAueCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgY3VycmVudFAueSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgbGV0IGN1cnJlbnRTZWxlY3RlZEluZCA9IHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKGN1cnJlbnRQKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudFNlbGVjdGVkSW5kOiAnK2N1cnJlbnRTZWxlY3RlZEluZCk7XG5cbiAgICBpZihjdXJyZW50U2VsZWN0ZWRJbmQ8MCkge1xuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIGltYWdlIGZvciB0aGUgQ3VycmVudCBQb3NpdGlvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighdGhpcy5iUHJlU2hvd0RhbWFnZXMpIHsgLy8gYmlyZGV5ZSB2aWV3XG4gICAgICAgIGlmKHRoaXMuYklzQ29sdW1uTWV0aG9kKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBwYW5lbCBpcyBhbHJlYWR5IGNvbXBsZXRlZFxuICAgICAgICAgIGlmKHRoaXMubWFwTGlzdFtjdXJyZW50U2VsZWN0ZWRJbmRdWydkYXRhJ11bJ2NvbXBsZXRlJ10gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkltYWdlLmVtaXQoe3ZhbHVlOiB0aGlzLm1hcExpc3RbY3VycmVudFNlbGVjdGVkSW5kXVsnZGF0YSddLCBpZDogY3VycmVudFNlbGVjdGVkSW5kfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYodGhpcy5jdXJyZW50U1BJbmRleCA9PT0gY3VycmVudFNlbGVjdGVkSW5kKSB7XG4gICAgICAgICAgICB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ3NlbGVjdGVkJ10gPSB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ3NlbGVjdGVkJ10gPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICBsZXQgY3R4ID0gdGhpcy5tYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5tYXBDYW52YXMud2lkdGgsIHRoaXMubWFwQ2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdBbGxEYW1hZ2VBcmVhKCk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMubWFwTGlzdFt0aGlzLmN1cnJlbnRTUEluZGV4XVsnc2VsZWN0ZWQnXSkge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdEF1dG9QYXJ0LmVtaXQoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXNjOiB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXVsnQXV0b1BhcnQnXSxcbiAgICAgICAgICAgICAgICBzaWRlOiB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXVsnc2lkZSddXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBdXRvUGFydC5lbWl0KHtzdGF0dXM6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5iSXNTZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMubWFwTGlzdFt0aGlzLmN1cnJlbnRTUEluZGV4XVsnc2VsZWN0ZWQnXSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U1BJbmRleCA9IGN1cnJlbnRTZWxlY3RlZEluZDtcblxuICAgICAgICBpZih0aGlzLmlzT3V0bGluZU1ldGhvZCkge1xuICAgICAgICAgIGlmKCF0aGlzLmJJc0NvbHVtbk1ldGhvZCkgeyAvLyBjb2x1bW4gbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmNsaWNrT25JbWFnZS5lbWl0KHt2YWx1ZTogdGhpcy5tYXBMaXN0W2N1cnJlbnRTZWxlY3RlZEluZF1bJ2RhdGEnXSwgaWQ6IGN1cnJlbnRTZWxlY3RlZEluZH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvblVJKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmKGN1cnJlbnRTZWxlY3RlZEluZCA9PT0gdGhpcy5jdXJyZW50RGFtYWdlSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkltYWdlLmVtaXQoe3ZhbHVlOiB0aGlzLm1hcExpc3RbY3VycmVudFNlbGVjdGVkSW5kXSwgaWQ6IGN1cnJlbnRTZWxlY3RlZEluZH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYW1hZ2VJbmRleCA9IGN1cnJlbnRTZWxlY3RlZEluZDtcbiAgICAgICAgICAgIHRoaXMuZHJhd0RhbWFnZUljb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iSXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGFtYWdlRGF0YSA9IHRoaXMuZ2V0RGFtYWdlRGF0YShjdXJyZW50U2VsZWN0ZWRJbmQpO1xuICAgICAgICBpZihkYW1hZ2VEYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGFtYWdlRGF0YSk7XG4gICAgICAgICAgdGhpcy5jbGlja09uSW1hZ2UuZW1pdCh7dmFsdWU6IGRhbWFnZURhdGEsIGlkOiBjdXJyZW50U2VsZWN0ZWRJbmR9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ2FuIG5vdCBmaW5kIHRoZSBkYW1hZ2UgZGF0YSB3aXRoIHRoZSBpbmRleCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VsZWN0aW9uVUkoKSB7XG4gICAgdGhpcy5tYXBMaXN0W3RoaXMuY3VycmVudFNQSW5kZXhdWydzZWxlY3RlZCddID0gdHJ1ZTtcbiAgICBsZXQgblNlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXVsnc2VjdGlvbiddKTtcbiAgICB0aGlzLm9uQ2hhbmdlU2xpZGVyKG5TZWN0aW9uKTtcbiAgICB0aGlzLnNlbGVjdEF1dG9QYXJ0LmVtaXQoe1xuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgZGVzYzogdGhpcy5tYXBMaXN0W3RoaXMuY3VycmVudFNQSW5kZXhdWydkYXRhJ11bJ0F1dG9QYXJ0J10sXG4gICAgICBzaWRlOiB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXVsnc2lkZSddXG4gICAgfSk7XG4gIH1cblxuICAvKlxuICBkaXNwbGF5IGNoZWNrTWFya1xuICAqL1xuICBkaXNwbGF5Q2hlY2tNYXJrKCkge1xuICAgIHRoaXMubWFwTGlzdFt0aGlzLmN1cnJlbnRTUEluZGV4XVsnZGF0YSddWydjb21wbGV0ZSddID0gMTtcbiAgICB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ3NlbGVjdGVkJ10gPSB0cnVlO1xuICAgIHRoaXMuYklzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnREYW1hZ2VJbmRleCA9IC0xO1xuICAgIHRoaXMuZHJhd0FsbERhbWFnZUFyZWEoKTtcbiAgICB0aGlzLmRvbmVBdXRvUGFydC5lbWl0KCk7XG4gIH1cblxuICAvKlxuICB1cGRhdGUgY2hlY2sgbWFyayB3aXRoIGxpc3RcbiAgKi9cbiAgdXBkYXRlQ2hlY2tNYXJrKCkge1xuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubWFwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYodGhpcy5tYXBMaXN0W2ldWydzZWxlY3RlZCddIHx8IHRoaXMubWFwTGlzdFtpXVsnZGF0YSddICYmIHRoaXMubWFwTGlzdFtpXVsnZGF0YSddWydjb21wbGV0ZSddID09PSAxKSB7IC8vIGRyYXcgdGhlIHNlbGVjdGVkIHBvbHlnb25cbiAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgIGJnQ29sb3I6ICdyZ2IoMjU1LCAyMzIsIDEyNSknLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGJnT3BhY2l0eTogMC42NSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZHJhd1BvbHlnb25zKHRoaXMubWFwQ2FudmFzLCB0aGlzLm1hcExpc3RbaV1bJ3BvbHlnb24nXSwgc3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLm1hcExpc3RbaV1bJ2RhdGEnXSAmJiB0aGlzLm1hcExpc3RbaV1bJ2RhdGEnXVsnY29tcGxldGUnXSA9PT0gMSkgeyAvLyBkcmF3IGNoZWNrIG1hcmtcbiAgICAgICAgdGhpcy5kcmF3Q2hlY2tNYXJrKGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZ2V0U2xpZGVDb3VudHMoKTtcbiAgfVxuXG4gIC8qXG4gIGRlbGV0ZSB0aGUgY2hlY2sgbWFya1xuICAqL1xuICBkZWxldGVDaGVja01hcmsobWFya0lkOiBudW1iZXIpIHtcbiAgICB0aGlzLm1hcExpc3RbbWFya0lkXVsnZGF0YSddWydjb21wbGV0ZSddID0gMDtcbiAgICB0aGlzLm1hcExpc3RbbWFya0lkXVsnc2VsZWN0ZWQnXSA9IGZhbHNlO1xuICB9XG5cbiAgY2hlY2tJbnRlcnNlY3Rpb25PZlBvbHlnb25zKGZzdFBvbHlnb246Q29vcmRpYXRlTW9kZWxbXSwgc25kUG9seWdvbjpDb29yZGlhdGVNb2RlbFtdKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgcmVzdWx0ID0gdGhpcy5jaGVja1BvaW50c0luc2lkZVBvbHlnb24oZnN0UG9seWdvbiwgc25kUG9seWdvbik7XG5cbiAgICBpZighcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmNoZWNrUG9pbnRzSW5zaWRlUG9seWdvbihzbmRQb2x5Z29uLCBmc3RQb2x5Z29uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2hlY2tQb2ludHNJbnNpZGVQb2x5Z29uKHBvaW50czpDb29yZGlhdGVNb2RlbFtdLCBwb2x5Z29uOkNvb3JkaWF0ZU1vZGVsW10pIHtcbiAgICBmb3IobGV0IGk9MDsgaTxwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKCB0aGlzLmlzUG9pbnRJblBvbHkocG9seWdvbiwgcG9pbnRzW2ldKSApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2xpZGVDb3VudHMoKSB7XG4gICAgbGV0IHNlbGVjdGVkTGVmdHMgPSB0aGlzLm1hcExpc3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoaXRlbS5kYXRhLmNvbXBsZXRlID09PSAxKSAmJiAoaXRlbS5kYXRhLnNlY3Rpb24gPT09IDApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uTGVmdFNsaWRlQ291bnRlciA9IHNlbGVjdGVkTGVmdHMubGVuZ3RoO1xuXG4gICAgbGV0IHNlbGVjdGVkQ2VudGVycyA9IHRoaXMubWFwTGlzdC5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChpdGVtLmRhdGEuY29tcGxldGUgPT09IDEpICYmIChpdGVtLmRhdGEuc2VjdGlvbiA9PT0gMSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5DZW50ZXJTbGlkZUNvdW50ZXIgPSBzZWxlY3RlZENlbnRlcnMubGVuZ3RoO1xuXG4gICAgbGV0IHNlbGVjdGVkUmlnaHRzID0gdGhpcy5tYXBMaXN0LmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKGl0ZW0uZGF0YS5jb21wbGV0ZSA9PT0gMSkgJiYgKGl0ZW0uZGF0YS5zZWN0aW9uID09PSAyKTtcbiAgICB9KTtcblxuICAgIHRoaXMublJpZ2h0U2xpZGVDb3VudGVyID0gc2VsZWN0ZWRSaWdodHMubGVuZ3RoO1xuICB9XG5cbiAgc2VuZFNjcmVlbnNob3Qoc3RyU2x1Zzogc3RyaW5nLCBzdHJBdXRvUGFydElkOiBzdHJpbmcpIHtcbiAgICBpZihzdHJTbHVnKSB7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNsdWc6IHN0clNsdWcsXG4gICAgICAgICAgaW1nOiB0aGlzLm1hcENhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLm1hcENhbnZhcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMubWFwQ2FudmFzLmhlaWdodCxcbiAgICAgICAgICB1cmw6IHRoaXMuaW1nU3JjLFxuICAgICAgICAgIGF1dG9QYXJ0SWQ6IHN0ckF1dG9QYXJ0SWRcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdCgndjEvZGF0YS9zbmFwc2hvdHVwbG9hZCcsIHBvc3REYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzIHRvIHVwbG9hZCB0aGUgc2NyZWVuc2hvdC4nKTtcbiAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBicmFuZHMnLCBlcnJvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnVG8gc2VuZCBhIHNjcmVlbnNob3QsIHRoZXJlIGlzIG5vIHNsdWcuJyk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VTbGlkZXIoblNsaWRlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5uU2VsZWN0ZWRTZWN0aW9uID0gblNsaWRlcjtcbiAgICB0aGlzLmdldFNsaWRlckRhdGEoKTtcbiAgICB0aGlzLmxvYWRDYXJJbWFnZSgpO1xuICB9XG5cbiAgb25TbGlkZXIoblNsaWRlcjogbnVtYmVyKSB7XG4gICAgLy8gY2hlY2sgaWYgdGhpcyBwYW5lbCBpcyBhbHJlYWR5IGNvbXBsZXRlZFxuICAgIGlmKHRoaXMubWFwTGlzdFtuU2xpZGVyXVsnZGF0YSddWydjb21wbGV0ZSddID09PSAxKSB7XG4gICAgICB0aGlzLmNsaWNrT25JbWFnZS5lbWl0KHt2YWx1ZTogdGhpcy5tYXBMaXN0W25TbGlkZXJdWydkYXRhJ10sIGlkOiBuU2xpZGVyfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYodGhpcy5jdXJyZW50U1BJbmRleCA9PT0gblNsaWRlcikge1xuICAgICAgdGhpcy5tYXBMaXN0W3RoaXMuY3VycmVudFNQSW5kZXhdWydzZWxlY3RlZCddPSB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ3NlbGVjdGVkJ10gPyBmYWxzZSA6IHRydWU7XG4gICAgICBsZXQgY3R4ID0gdGhpcy5tYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5tYXBDYW52YXMud2lkdGgsIHRoaXMubWFwQ2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLmRyYXdBbGxEYW1hZ2VBcmVhKCk7XG5cbiAgICAgIGlmKHRoaXMubWFwTGlzdFt0aGlzLmN1cnJlbnRTUEluZGV4XVsnc2VsZWN0ZWQnXSkge1xuICAgICAgICB0aGlzLnNlbGVjdEF1dG9QYXJ0LmVtaXQoe1xuICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICBkZXNjOiB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXVsnQXV0b1BhcnQnXSxcbiAgICAgICAgICBzaWRlOiB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ2RhdGEnXVsnc2lkZSddXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBdXRvUGFydC5lbWl0KHtzdGF0dXM6IGZhbHNlfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZih0aGlzLmJJc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLm1hcExpc3RbdGhpcy5jdXJyZW50U1BJbmRleF1bJ3NlbGVjdGVkJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRTUEluZGV4ID0gblNsaWRlcjtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvblVJKCk7XG4gICAgdGhpcy5iSXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBvblNlbGVjdExvY2F0aW9uKHN0ckxvY2F0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmV2ZW50U3dpdGNoTG9jYXRpb24uZW1pdChzdHJMb2NhdGlvbik7XG4gIH1cbn1cbiJdfQ==
