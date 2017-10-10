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
var EventService = (function () {
    function EventService() {
        var _this = this;
        this.listeners = {};
        this.subject = new core_1.EventEmitter();
        this.eventObserver = this.subject.asObservable();
        this.eventObserver.subscribe(function (_a) {
            var name = _a.name, args = _a.args;
            if (_this.listeners[name]) {
                for (var _i = 0, _b = _this.listeners[name]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    listener.callback(args);
                }
            }
        });
    }
    EventService.prototype.registerEvent = function (eventName, eventListener, callback) {
        if (!this.listeners[eventName])
            this.listeners[eventName] = [];
        var eventExist = false;
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var listener = _a[_i];
            if (listener.eventListener.constructor.name === eventListener.constructor.name) {
                eventExist = true;
                break;
            }
        }
        if (!eventExist) {
            this.listeners[eventName].push({ eventListener: eventListener, callback: callback });
        }
    };
    EventService.prototype.unregisterEvent = function (eventName, eventListener) {
        if (this.listeners[eventName]) {
            for (var i = 0; i < this.listeners[eventName].length; i++) {
                if (this.listeners[eventName][i].eventListener.constructor.name === eventListener.constructor.name) {
                    this.listeners[eventName].splice(i, 1);
                    break;
                }
            }
        }
    };
    EventService.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.subject.next({ name: name, args: args });
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQUksRUFBQyxVQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUF6REw7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQTBEYixtQkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksb0JBQVksZUF5RHhCLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0YWJsZSxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudExpc3RlbnIgZXh0ZW5kcyBPbkRlc3Ryb3kge1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdmVudFNlcnZpY2Uge1xuXG5cbiAgICBwcml2YXRlIGxpc3RlbmVycyA9IDxhbnk+e307XG4gICAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHByaXZhdGUgZXZlbnRPYnNlcnZlciA9IHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5ldmVudE9ic2VydmVyLnN1YnNjcmliZSgoe25hbWUsYXJnc30pID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgIGZvcihsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnNbbmFtZV0pXG4gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGFyZ3MpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50KGV2ZW50TmFtZTpzdHJpbmcsZXZlbnRMaXN0ZW5lcjpJRXZlbnRMaXN0ZW5yLGNhbGxiYWNrOmFueSkge1xuXG4gICAgICAgIGlmKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKVxuICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcblxuICAgICAgICBsZXQgZXZlbnRFeGlzdCA9IGZhbHNlO1xuICAgICAgICBmb3IobGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pXG4gICAgICAgIHtcblxuICAgICAgICAgICAgaWYobGlzdGVuZXIuZXZlbnRMaXN0ZW5lci5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudExpc3RlbmVyLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBldmVudEV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFldmVudEV4aXN0KSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goe2V2ZW50TGlzdGVuZXIsY2FsbGJhY2t9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lOnN0cmluZyxldmVudExpc3RlbmVyOklFdmVudExpc3RlbnIpIHtcblxuICAgICAgICBpZih0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV1baV0uZXZlbnRMaXN0ZW5lci5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudExpc3RlbmVyLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZW1pdChuYW1lOnN0cmluZywuLi5hcmdzOmFueVtdKSB7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHtuYW1lLGFyZ3N9KTtcbiAgICB9XG59XG4iXX0=
