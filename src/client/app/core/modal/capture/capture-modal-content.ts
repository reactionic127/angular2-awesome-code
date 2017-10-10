import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CaptureModalContent extends BSModalContext {
    constructor(public uploader: any) {
        super();
    }
}
