import { Component,
    OnInit,
    ElementRef } from '@angular/core';
import { DialogRef,
    ModalComponent } from 'angular2-modal';
import { AlertModalContent } from './alert-modal-content';
import { Router }            from '@angular/router';
import { Config }            from '../../shared/index';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'modal-content',
    templateUrl: 'alert.modal.component.html',
    styleUrls: ['alert.modal.component.css']
})
export class AlertWindowModalComponent implements ModalComponent<AlertModalContent>, OnInit {
    context: AlertModalContent;
    productId: any;
    modalType: boolean;
    strSlug: string;
    availableModalClass: string;
    strDescription: string;
    strImgUrl: string;
    strTitle: string;
    doneBtnObject: Object;
    moreBtnObject: Object;

    circleImgLeft: number;
    handImgLeft: number;

    constructor(public dialog: DialogRef<AlertModalContent>,
        private element: ElementRef,
        private router: Router) {
        this.context = dialog.context;
        if(dialog.context.nType === 0) {
            this.modalType = false;
            this.strDescription = this.context.alertData.data.popupIntro.description;
            this.strImgUrl = Config.API + this.context.alertData.data.popupIntro.image;
        } else {
            this.doneBtnObject = <any>{};
            this.moreBtnObject = <any>{};
            this.modalType = true;
            let moreDdamageData = this.context.alertData.data.popupMoreDamage;
            this.strTitle = moreDdamageData['title'];
            this.strDescription = moreDdamageData['description'];
            this.strSlug = this.context.alertData.slug;
            this.strImgUrl = Config.API + moreDdamageData.image;
            (this.doneBtnObject as any)['label'] = moreDdamageData['done_button']['button'];
            (this.doneBtnObject as any)['style'] = {
                color: moreDdamageData['done_button']['color'],
                background: moreDdamageData['done_button']['background_color']
            };
            (this.doneBtnObject as any)['on'] = moreDdamageData['done_button']['on'];

            (this.moreBtnObject as any)['label'] = moreDdamageData['more_button']['button'];
            (this.moreBtnObject as any)['style'] = {
                color: moreDdamageData['more_button']['color'],
                background: moreDdamageData['more_button']['background_color']
            };
            (this.moreBtnObject as any)['on'] = moreDdamageData['more_button']['on'];
        }
    }

    ngOnInit() {
        this.initStyle();
    }

    initStyle(count: number = 0) {
        let $modalBody = $('.damage-alert-modal .modal-body');

        if(count > 50) {
            console.log('Fail to load the alert modal .');
        } else if($modalBody.length <= 0) {
            count ++;
            setTimeout(() => this.initStyle(count), 50);
        } else {
            let modalPadding = parseInt($modalBody.css('padding-top'));
            let modalWidth = $('.damage-alert-modal').width();
            this.circleImgLeft = modalWidth / 2 - 25 - modalPadding;
            this.handImgLeft = modalWidth / 2 - 10 - modalPadding;
        }
    }

    beforeDismiss() {
        return false;
    }

    beforeClose() {
        return false;
    }

    onCancel() {
        this.dialog.close();
    }

    next() {
        this.dialog.close();
        this.router.navigate(['/photo', this.strSlug]);
    }
}
