"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var toolbar_component_1 = require('./toolbar.component');
var event_service_1 = require('../../core/event.service');
var data_service_1 = require('../../core/data.service');
var display_modal_service_1 = require('../../core/modal/display/display.modal.service');
var spinner_service_1 = require('../spinner/spinner.service');
var testing_2 = require('@angular/http/testing');
function main() {
    describe('Toolbar component', function () {
        var fixture;
        var tbInstance;
        var mockDataService;
        var mockModalService;
        var mockData = {
            _body: 'body',
            status: 200
        };
        var mockModalData = {
            result: Promise.resolve(true)
        };
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    http_1.HttpModule
                ],
                providers: [
                    core_1.ViewContainerRef,
                    event_service_1.EventService,
                    { provide: data_service_1.DataService, useValue: new MockDataService() },
                    spinner_service_1.SpinnerService,
                    { provide: display_modal_service_1.DisplayModelService, useValue: new MockModalService() },
                    testing_2.MockBackend,
                    http_1.BaseRequestOptions,
                    {
                        provide: http_1.Http,
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                        useFactory: function (backend, defaultOptions) {
                            return new http_1.Http(backend, defaultOptions);
                        }
                    }
                ],
                declarations: [
                    toolbar_component_1.ToolbarComponent
                ]
            }).compileComponents()
                .then(function () {
                fixture = testing_1.TestBed.createComponent(toolbar_component_1.ToolbarComponent);
                tbInstance = fixture.debugElement.componentInstance;
                mockDataService = fixture.debugElement.injector.get(data_service_1.DataService);
                spyOn(mockDataService, 'get').and.callThrough();
                mockDataService.returnValue = mockData;
                spyOn(mockDataService, 'post').and.callThrough();
                mockDataService.returnValue = mockData;
                mockModalService = fixture.debugElement.injector.get(display_modal_service_1.DisplayModelService);
                spyOn(mockModalService, 'openDialog').and.callThrough();
                mockModalService.returnValue = mockModalData;
            });
        }));
        it('displayLink function should work', testing_1.async(function () {
            tbInstance.displayLink();
            expect(tbInstance._displayModal.openDialog).toHaveBeenCalled();
        }));
    });
}
exports.main = main;
var MockDataService = (function () {
    function MockDataService() {
    }
    MockDataService.prototype.get = function (url, b) {
        var _this = this;
        if (url === void 0) { url = ''; }
        if (b === void 0) { b = false; }
        return Rx_1.Observable.create(function (observer) {
            observer.next(_this.returnValue);
            observer.complete();
        });
    };
    MockDataService.prototype.post = function (url, postdata) {
        var _this = this;
        if (url === void 0) { url = ''; }
        if (postdata === void 0) { postdata = {}; }
        return Rx_1.Observable.create(function (observer) {
            observer.next(_this.returnValue);
            observer.complete();
        });
    };
    return MockDataService;
}());
var MockModalService = (function () {
    function MockModalService() {
    }
    MockModalService.prototype.openDialog = function (displayData, viewContainer) {
        return Promise.resolve(this.returnValue);
    };
    return MockModalService;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zcGVjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBR08sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixxQkFJTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixxQkFFTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFFckMsa0NBQW9DLHFCQUFxQixDQUFDLENBQUE7QUFDMUQsOEJBQW9DLDBCQUEwQixDQUFDLENBQUE7QUFDL0QsNkJBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQsc0NBQW9DLGdEQUFnRCxDQUFDLENBQUE7QUFDckYsZ0NBQW9DLDRCQUE0QixDQUFDLENBQUE7QUFFakUsd0JBQTRCLHVCQUF1QixDQUFDLENBQUE7QUFFcEQ7SUFDRyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDN0IsSUFBSSxPQUFZLENBQUM7UUFDakIsSUFBSSxVQUFlLENBQUM7UUFDcEIsSUFBSSxlQUFvQixDQUFDO1FBQ3pCLElBQUksZ0JBQXFCLENBQUM7UUFFMUIsSUFBSSxRQUFRLEdBQUk7WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUVGLElBQUksYUFBYSxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUM5QixDQUFDO1FBRUYsVUFBVSxDQUFDLGVBQUssQ0FBQztZQUVmLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRTtvQkFDUCxpQkFBVTtpQkFDWDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsdUJBQWdCO29CQUNoQiw0QkFBWTtvQkFDWixFQUFFLE9BQU8sRUFBRSwwQkFBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLGVBQWUsRUFBRSxFQUFFO29CQUN6RCxnQ0FBYztvQkFDZCxFQUFFLE9BQU8sRUFBRSwyQ0FBbUIsRUFBRSxRQUFRLEVB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QU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXN5bmMsXG4gIFRlc3RCZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7XG4gIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgSHR0cCwgSHR0cE1vZHVsZSxcbiAgWEhSQmFja2VuZFxufSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7XG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSAgICBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9ICAgICAgICBmcm9tICcuLi8uLi9jb3JlL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4uLy4uL2NvcmUvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IERpc3BsYXlNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL21vZGFsL2Rpc3BsYXkvZGlzcGxheS5tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gICAgICBmcm9tICcuLi9zcGlubmVyL3NwaW5uZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IE1vY2tCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICBkZXNjcmliZSgnVG9vbGJhciBjb21wb25lbnQnLCAoKSA9PiB7XG4gICAgbGV0IGZpeHR1cmU6IGFueTtcbiAgICBsZXQgdGJJbnN0YW5jZTogYW55O1xuICAgIGxldCBtb2NrRGF0YVNlcnZpY2U6IGFueTtcbiAgICBsZXQgbW9ja01vZGFsU2VydmljZTogYW55O1xuXG4gICAgbGV0IG1vY2tEYXRhID0gIHtcbiAgICAgIF9ib2R5OiAnYm9keScsXG4gICAgICBzdGF0dXM6IDIwMFxuICAgIH07XG5cbiAgICBsZXQgbW9ja01vZGFsRGF0YSA9IHtcbiAgICAgIHJlc3VsdDogUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgfTtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuXG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgSHR0cE1vZHVsZVxuICAgICAgICBdLFxuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgIEV2ZW50U2VydmljZSxcbiAgICAgICAgICB7IHByb3ZpZGU6IERhdGFTZXJ2aWNlLCB1c2VWYWx1ZTogbmV3IE1vY2tEYXRhU2VydmljZSgpIH0sXG4gICAgICAgICAgU3Bpbm5lclNlcnZpY2UsXG4gICAgICAgICAgeyBwcm92aWRlOiBEaXNwbGF5TW9kZWxTZXJ2aWNlLCB1c2VWYWx1ZTogbmV3IE1vY2tNb2RhbFNlcnZpY2UoKSB9LFxuICAgICAgICAgIE1vY2tCYWNrZW5kLFxuICAgICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxuICAgICAgICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTpcbiAgICAgICAgICAgICAgKGJhY2tlbmQ6IFhIUkJhY2tlbmQsIGRlZmF1bHRPcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICBUb29sYmFyQ29tcG9uZW50XG4gICAgICAgIF1cbiAgICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFRvb2xiYXJDb21wb25lbnQpO1xuICAgICAgICB0Ykluc3RhbmNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuY29tcG9uZW50SW5zdGFuY2U7XG5cbiAgICAgICAgbW9ja0RhdGFTZXJ2aWNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuaW5qZWN0b3IuZ2V0KERhdGFTZXJ2aWNlKSBhcyBNb2NrRGF0YVNlcnZpY2U7XG4gICAgICAgIHNweU9uKG1vY2tEYXRhU2VydmljZSwgJ2dldCcpLmFuZC5jYWxsVGhyb3VnaCgpO1xuICAgICAgICBtb2NrRGF0YVNlcnZpY2UucmV0dXJuVmFsdWUgPSBtb2NrRGF0YTtcblxuICAgICAgICBzcHlPbihtb2NrRGF0YVNlcnZpY2UsICdwb3N0JykuYW5kLmNhbGxUaHJvdWdoKCk7XG4gICAgICAgIG1vY2tEYXRhU2VydmljZS5yZXR1cm5WYWx1ZSA9IG1vY2tEYXRhO1xuXG4gICAgICAgIG1vY2tNb2RhbFNlcnZpY2UgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5pbmplY3Rvci5nZXQoRGlzcGxheU1vZGVsU2VydmljZSkgYXMgTW9ja01vZGFsU2VydmljZTtcbiAgICAgICAgc3B5T24obW9ja01vZGFsU2VydmljZSwgJ29wZW5EaWFsb2cnKS5hbmQuY2FsbFRocm91Z2goKTtcbiAgICAgICAgbW9ja01vZGFsU2VydmljZS5yZXR1cm5WYWx1ZSA9IG1vY2tNb2RhbERhdGE7XG4gICAgICB9KTtcbiAgICB9KSk7XG5cbiAgICBpdCgnZGlzcGxheUxpbmsgZnVuY3Rpb24gc2hvdWxkIHdvcmsnLFxuICAgICAgYXN5bmMoKCkgPT4ge1xuICAgICAgICB0Ykluc3RhbmNlLmRpc3BsYXlMaW5rKCk7XG4gICAgICAgIGV4cGVjdCh0Ykluc3RhbmNlLl9kaXNwbGF5TW9kYWwub3BlbkRpYWxvZykudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgfSkpO1xuXG4gIH0pO1xufVxuXG5jbGFzcyBNb2NrRGF0YVNlcnZpY2Uge1xuXG4gIHJldHVyblZhbHVlOiBPYmplY3Q7XG5cbiAgZ2V0KHVybDpzdHJpbmc9JycsIGI6IGJvb2xlYW49ZmFsc2UpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnJldHVyblZhbHVlKTtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwb3N0KHVybDpzdHJpbmc9JycsIHBvc3RkYXRhOiBhbnk9e30pOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnJldHVyblZhbHVlKTtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgTW9ja01vZGFsU2VydmljZSB7XG4gIHJldHVyblZhbHVlOiBPYmplY3Q7XG5cbiAgb3BlbkRpYWxvZyhkaXNwbGF5RGF0YTogc3RyaW5nLCB2aWV3Q29udGFpbmVyOlZpZXdDb250YWluZXJSZWYpOiBQcm9taXNlPE9iamVjdD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXR1cm5WYWx1ZSk7XG4gIH1cbn1cbiJdfQ==
