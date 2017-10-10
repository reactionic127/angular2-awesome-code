import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { DotSliderModule } from '../utilities/dot-slider/dot-slider.module';

import { ImgComponent }    from './img.component';
import { PhotoComponent }  from './photo.component';

@NgModule({
    imports: [
    	CommonModule,
    	RouterModule,
    	DotSliderModule
    ],
    declarations: [
    	PhotoComponent,
    	ImgComponent
    ],
    exports: [PhotoComponent, RouterModule]
})

export class PhotoModule { }
