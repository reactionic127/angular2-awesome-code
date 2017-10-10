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
var StoreService = (function () {
    function StoreService() {
    }
    StoreService.prototype.get = function (name) {
        return localStorage.getItem(name);
    };
    StoreService.prototype.getObject = function (name) {
        var retrievedObject = localStorage.getItem(name);
        return JSON.parse(retrievedObject);
    };
    StoreService.prototype.getTempData = function () {
        return this.tempData;
    };
    StoreService.prototype.set = function (name, value) {
        localStorage.setItem(name, value);
    };
    StoreService.prototype.setObject = function (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    };
    StoreService.prototype.setTempData = function (value) {
        this.tempData = value;
    };
    StoreService.prototype.removeItem = function (name) {
        localStorage.removeItem(name);
    };
    StoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUkzQztJQUFBO0lBK0JBLENBQUM7SUE1QkMsMEJBQUcsR0FBSCxVQUFJLElBQVk7UUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQVk7UUFDcEIsSUFBSSxlQUFlLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLEtBQWE7UUFDN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsS0FBYTtRQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUEvQkg7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQWdDYixtQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksb0JBQVksZUErQnhCLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcbiAgdGVtcERhdGE6IGFueTtcblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICB9XG5cbiAgZ2V0T2JqZWN0KG5hbWU6IHN0cmluZykge1xuICAgIHZhciByZXRyaWV2ZWRPYmplY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXRyaWV2ZWRPYmplY3QpO1xuICB9XG5cbiAgZ2V0VGVtcERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcERhdGE7XG4gIH1cblxuICBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgc2V0T2JqZWN0KG5hbWU6IHN0cmluZywgdmFsdWU6IE9iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBzZXRUZW1wRGF0YSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy50ZW1wRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShuYW1lOiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcbiAgfVxufVxuIl19
