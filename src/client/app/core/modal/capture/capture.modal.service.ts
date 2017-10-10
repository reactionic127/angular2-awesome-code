import { Injectable, ViewContainerRef } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CaptureWindowModalComponent } from './capture.modal.component';
import { overlayConfigFactory } from 'angular2-modal';

@Injectable()
export class CaptureModelService {
    constructor(public modal: Modal) {}

    openDialog(uploader: any, viewContainer:ViewContainerRef) {
    	this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(CaptureWindowModalComponent, overlayConfigFactory({uploader: uploader}, BSModalContext));
    };
}
