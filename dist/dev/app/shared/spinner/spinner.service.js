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
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/share');
var SpinnerService = (function () {
    function SpinnerService() {
        this.status = new Subject_1.Subject();
        this._type = 0;
        this._active = false;
    }
    SpinnerService.prototype.set_active = function (v, t) {
        this._active = v;
        this._type = t;
        this.status.next({ status: v, type: t });
    };
    SpinnerService.prototype.start = function (type) {
        if (type === void 0) { type = 0; }
        this.set_active(true, type);
    };
    SpinnerService.prototype.stop = function () {
        this.set_active(false, 0);
    };
    SpinnerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SpinnerService);
    return SpinnerService;
}());
exports.SpinnerService = SpinnerService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx3QkFBd0IsY0FBYyxDQUFDLENBQUE7QUFDdkMsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBR2pDO0lBQUE7UUFDUyxXQUFNLEdBQW9CLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3ZDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQWVuQyxDQUFDO0lBYlEsbUNBQVUsR0FBakIsVUFBa0IsQ0FBVSxFQUFFLENBQVM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxJQUFnQjtRQUFoQixvQkFBZ0IsR0FBaEIsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBbEJIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFtQmIscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHNCQUFjLGlCQWtCMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlIHtcbiAgcHVibGljIHN0YXR1czogU3ViamVjdDxPYmplY3Q+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfdHlwZTogbnVtYmVyID0gMDsgLy8gZGVmYXVsdCBzcGlubmVyXG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzZXRfYWN0aXZlKHY6IGJvb2xlYW4sIHQ6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHY7XG4gICAgdGhpcy5fdHlwZSA9IHQ7XG4gICAgdGhpcy5zdGF0dXMubmV4dCh7c3RhdHVzOiB2LCB0eXBlOiB0fSk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQodHlwZTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuc2V0X2FjdGl2ZSh0cnVlLCB0eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0X2FjdGl2ZShmYWxzZSwgMCk7XG4gIH1cbn1cbiJdfQ==
