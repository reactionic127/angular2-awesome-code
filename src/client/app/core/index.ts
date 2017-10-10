import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { DataService }         from './data.service';
import { StoreService }        from './store.service';
import { NavbarService }       from './navbar.service';
import { EventService }        from './event.service';
import { DisplayWindowModalComponent } from './modal/display/display.modal.component';
import { CaptureWindowModalComponent } from './modal/capture/capture.modal.component';
import { UploadWindowModalComponent }  from './modal/upload/upload.modal.component';
import { ShowImgWindowModalComponent } from './modal/show/show.img.modal.component';

import { DisplayModelService } from './modal/display/display.modal.service';
import { CaptureModelService } from './modal/capture/capture.modal.service';
import { UploadModelService }  from './modal/upload/upload.modal.service';
import { ShowImgModelService } from './modal/show/show.img.modal.service';

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    imports: [
      CommonModule,
      FileUploadModule
    ],
    providers: [
      DataService,
      StoreService,
      NavbarService,
      EventService,
      DisplayModelService,
      CaptureModelService,
      UploadModelService,
      ShowImgModelService
    ],
    declarations: [
    	DisplayWindowModalComponent,
      CaptureWindowModalComponent,
      UploadWindowModalComponent,
      ShowImgWindowModalComponent
    ],
    entryComponents: [
    	DisplayWindowModalComponent,
      CaptureWindowModalComponent,
      UploadWindowModalComponent,
      ShowImgWindowModalComponent
    ]
})

export class ServiceModule { }
