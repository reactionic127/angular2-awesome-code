import { inject, TestBed, async } from '@angular/core/testing';
import { CaptureModelService } from './capture.modal.service';
import { ViewContainerRef } from '@angular/core';

import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

export function main() {
  describe('Capture modal service', () => {
    let captureModelService: CaptureModelService = null;
    let viewRef: any;

    beforeEach(() => {
      const MODAL_PROVIDERS = [
        Modal,
        Overlay,
        { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
      ];

      TestBed.configureTestingModule({
        providers: [
          CaptureModelService,
          MODAL_PROVIDERS
        ],
        imports: [
          ModalModule.forRoot(),
          BootstrapModalModule
        ],
      }).compileComponents();
    });

    beforeEach(inject([CaptureModelService], (modalService: CaptureModelService, view: ViewContainerRef) => {
      captureModelService = modalService;
      viewRef = view;
    }));

    it('openDialog function should work',
      async(() => {
        spyOn((<any>captureModelService).modal, 'open');
        captureModelService.openDialog('', viewRef);
        expect((<any>captureModelService).modal.open).toHaveBeenCalled();
      }));
  });
}
