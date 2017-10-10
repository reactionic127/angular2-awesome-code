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
var common_1 = require('@angular/common');
var welcome_component_1 = require('./welcome.component');
var player_modal_component_1 = require('./modal/player.modal.component');
var player_modal_service_1 = require('./modal/player.modal.service');
var core_2 = require('videogular2/core');
var controls_1 = require('videogular2/controls');
var buffering_1 = require('videogular2/buffering');
var overlay_play_1 = require('videogular2/overlay-play');
var streaming_1 = require('videogular2/streaming');
var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_2.VgCoreModule,
                controls_1.VgControlsModule,
                buffering_1.VgBufferingModule,
                overlay_play_1.VgOverlayPlayModule,
                streaming_1.VgStreamingModule
            ],
            declarations: [welcome_component_1.WelcomeComponent,
                player_modal_component_1.PlayerWindowModalComponent],
            exports: [welcome_component_1.WelcomeComponent],
            providers: [player_modal_service_1.PlayerModelService],
            entryComponents: [
                player_modal_component_1.PlayerWindowModalComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93ZWxjb21lL3dlbGNvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFDN0Qsa0NBQTJDLHFCQUFxQixDQUFDLENBQUE7QUFDakUsdUNBQTJDLGdDQUFnQyxDQUFDLENBQUE7QUFDNUUscUNBQTJDLDhCQUE4QixDQUFDLENBQUE7QUFDMUUscUJBQTJDLGtCQUFrQixDQUFDLENBQUE7QUFDOUQseUJBQTJDLHNCQUFzQixDQUFDLENBQUE7QUFDbEUsMEJBQTJDLHVCQUF1QixDQUFDLENBQUE7QUFDbkUsNkJBQTJDLDBCQUEwQixDQUFDLENBQUE7QUFDdEUsMEJBQTJDLHVCQUF1QixDQUFDLENBQUE7QUFvQm5FO0lBQUE7SUFBNkIsQ0FBQztJQWxCOUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7Z0JBQ1osbUJBQVk7Z0JBQ1osMkJBQWdCO2dCQUNoQiw2QkFBaUI7Z0JBQ2pCLGtDQUFtQjtnQkFDbkIsNkJBQWlCO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFLENBQUMsb0NBQWdCO2dCQUMvQixtREFBMEIsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztZQUMvQixlQUFlLEVBQUU7Z0JBQ2hCLG1EQUEwQjthQUMxQjtTQUNKLENBQUM7O3FCQUFBO0lBRTJCLG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixxQkFBYSxnQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC93ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSAgICAgICAgICAgZnJvbSAnLi93ZWxjb21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF5ZXJXaW5kb3dNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvcGxheWVyLm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF5ZXJNb2RlbFNlcnZpY2UgfSAgICAgICAgIGZyb20gJy4vbW9kYWwvcGxheWVyLm1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmdDb3JlTW9kdWxlIH0gICAgICAgICAgICAgICBmcm9tICd2aWRlb2d1bGFyMi9jb3JlJztcbmltcG9ydCB7IFZnQ29udHJvbHNNb2R1bGUgfSAgICAgICAgICAgZnJvbSAndmlkZW9ndWxhcjIvY29udHJvbHMnO1xuaW1wb3J0IHsgVmdCdWZmZXJpbmdNb2R1bGUgfSAgICAgICAgICBmcm9tICd2aWRlb2d1bGFyMi9idWZmZXJpbmcnO1xuaW1wb3J0IHsgVmdPdmVybGF5UGxheU1vZHVsZSB9ICAgICAgICBmcm9tICd2aWRlb2d1bGFyMi9vdmVybGF5LXBsYXknO1xuaW1wb3J0IHsgVmdTdHJlYW1pbmdNb2R1bGUgfSAgICAgICAgICBmcm9tICd2aWRlb2d1bGFyMi9zdHJlYW1pbmcnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICBcdENvbW1vbk1vZHVsZSxcbiAgICBcdFZnQ29yZU1vZHVsZSxcbiAgICBcdFZnQ29udHJvbHNNb2R1bGUsXG4gICAgXHRWZ0J1ZmZlcmluZ01vZHVsZSxcbiAgICBcdFZnT3ZlcmxheVBsYXlNb2R1bGUsXG4gICAgXHRWZ1N0cmVhbWluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbV2VsY29tZUNvbXBvbmVudCxcbiAgICBQbGF5ZXJXaW5kb3dNb2RhbENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1dlbGNvbWVDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1BsYXllck1vZGVsU2VydmljZV0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgXHRQbGF5ZXJXaW5kb3dNb2RhbENvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWxjb21lTW9kdWxlIHsgfVxuIl19
