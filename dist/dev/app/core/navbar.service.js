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
var NavbarService = (function () {
    function NavbarService() {
        this.subject = new Subject_1.Subject();
    }
    NavbarService.prototype.setData = function (data) {
        this.subject.next(data);
    };
    NavbarService.prototype.getEvent = function () {
        return this.subject.asObservable();
    };
    NavbarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NavbarService);
    return NavbarService;
}());
exports.NavbarService = NavbarService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL25hdmJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0Msd0JBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBR3ZDO0lBQUE7UUFDQyxZQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFTLENBQUM7SUFTaEMsQ0FBQztJQVBBLCtCQUFPLEdBQVAsVUFBUSxJQUFXO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ08sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQVZMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFXYixvQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvbmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmJhclNlcnZpY2Uge1xuXHRzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55W10+KCk7XG5cblx0c2V0RGF0YShkYXRhOiBhbnlbXSkge1xuXHRcdHRoaXMuc3ViamVjdC5uZXh0KGRhdGEpO1xuXHR9XG5cblx0Z2V0RXZlbnQoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbn1cbiJdfQ==
