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
var Observable_1 = require('rxjs/Observable');
var index_1 = require('../shared/index');
require('rxjs/add/operator/map');
require('rxjs/add/operator/share');
require('rxjs/add/operator/catch');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.host = index_1.Config.API + '/';
    }
    DataService.prototype.get = function (url, jsonOption) {
        if (jsonOption === void 0) { jsonOption = true; }
        var getObservable = null;
        if (getObservable === null) {
            if (jsonOption) {
                getObservable = this.http.get(this.host + url, this._getJsonOptions())
                    .share()
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            }
            else {
                getObservable = this.http.get(this.host + url, this._getJsonOptions())
                    .share()
                    .catch(this.handleError);
            }
        }
        return getObservable;
    };
    DataService.prototype.post = function (url, data) {
        var postObservable = null;
        var postData = 'data=' + JSON.stringify(data);
        if (postObservable === null) {
            postObservable = this.http.post(this.host + url, postData, this._getJsonOptions())
                .share()
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        return postObservable;
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService.prototype._getJsonOptions = function () {
        var jsonHeaders = new http_1.Headers();
        jsonHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        return new http_1.RequestOptions({ headers: jsonHeaders });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxzQkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQztJQUtJLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLGNBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFVBQTBCO1FBQTFCLDBCQUEwQixHQUExQixpQkFBMEI7UUFDMUMsSUFBSSxhQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDakUsS0FBSyxFQUFFO3FCQUNQLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7cUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQ2pFLEtBQUssRUFBRTtxQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDUixDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN0QixDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFTO1FBQzFCLElBQUksY0FBYyxHQUFRLElBQUksQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxPQUFPLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDL0UsS0FBSyxFQUFFO2lCQUNQLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7aUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQVVPLGlDQUFXLEdBQWxCLFVBQW1CLEtBQWU7UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRVUscUNBQWUsR0FBdkI7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFeEUsTUFBTSxDQUFDLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUF6REw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTBEYixrQkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksbUJBQVcsY0F5RHZCLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAgIC8vIHByaXZhdGUgYXV0aEhlYWRlcnM6IGFueTtcbiAgICAvLyBwcml2YXRlIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zO1xuICAgIHB1YmxpYyBob3N0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgIHRoaXMuaG9zdCA9IENvbmZpZy5BUEkgKyAnLyc7XG4gICAgfVxuXG4gICAgZ2V0KHVybDogc3RyaW5nLCBqc29uT3B0aW9uOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIFx0bGV0IGdldE9ic2VydmFibGU6IGFueSA9IG51bGw7XG4gICAgXHRpZiAoZ2V0T2JzZXJ2YWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaWYoanNvbk9wdGlvbikge1xuICAgICAgICAgICAgICAgIGdldE9ic2VydmFibGUgPSB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCArIHVybCwgdGhpcy5fZ2V0SnNvbk9wdGlvbnMoKSlcbiAgICAgICAgICAgICAgICAgICAgLnNoYXJlKClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRPYnNlcnZhYmxlID0gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QgKyB1cmwsIHRoaXMuX2dldEpzb25PcHRpb25zKCkpXG4gICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICBcdH1cbiAgICBcdHJldHVybiBnZXRPYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSk6IE9ic2VydmFibGU8T2JqZWN0PiB7XG4gICAgXHRsZXQgcG9zdE9ic2VydmFibGU6IGFueSA9IG51bGw7XG4gICAgXHRsZXQgcG9zdERhdGEgPSAnZGF0YT0nICsgIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIFx0aWYgKHBvc3RPYnNlcnZhYmxlID09PSBudWxsKSB7XG5cdCAgICAgICAgcG9zdE9ic2VydmFibGUgPSB0aGlzLmh0dHAucG9zdCh0aGlzLmhvc3QgKyB1cmwsIHBvc3REYXRhLCB0aGlzLl9nZXRKc29uT3B0aW9ucygpKVxuXHQgICAgICAgICAgLnNoYXJlKClcblx0ICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdCAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gcG9zdE9ic2VydmFibGU7XG4gICAgfVxuXG4gICAgLy8gcHV0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAvLyAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaG9zdCArIHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMuX2dldEpzb25PcHRpb25zKCkpO1xuICAgIC8vIH1cblxuICAgIC8vIGRlbGV0ZSh1cmw6IHN0cmluZykge1xuICAgIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5ob3N0ICsgdXJsLCB0aGlzLl9nZXRKc29uT3B0aW9ucygpKTtcbiAgICAvLyB9XG5cbiAgICAgcHVibGljIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuXHQgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cdCAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuXHR9XG5cbiAgICBwcml2YXRlIF9nZXRKc29uT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGpzb25IZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAganNvbkhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGpzb25IZWFkZXJzIH0pO1xuICAgIH1cbn1cbiJdfQ==
