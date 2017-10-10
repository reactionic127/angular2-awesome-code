import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { IdentifyComponent } from './identify.component';
import { DotSliderModule }   from '../utilities/dot-slider/dot-slider.module';
import { FileUploadModule }  from 'ng2-file-upload';
import { SelectModule }      from 'angular2-select';
import { FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    imports: [
    	CommonModule,
    	RouterModule,
    	DotSliderModule,
    	FormsModule,
    	FileUploadModule,
    	ReactiveFormsModule,
        SelectModule
    ],
    declarations: [IdentifyComponent],
    exports: [IdentifyComponent, RouterModule]
})

export class IdentifyModule { }
