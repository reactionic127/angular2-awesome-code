import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  Output,
  OnInit,
  OnChanges,
  Renderer,
  EventEmitter,
  ViewContainerRef } from '@angular/core';

import { CoordiateModel ,
  CanvasStyleModel }  from '../core/model';

import { Config }              from '../shared/index';
import { Router }              from '@angular/router';
import { DataService }         from '../core/data.service';
import { DamageModelService }  from './modal/damage.modal.service';
import { EventService }        from '../core/event.service';
import { ImageMapComponent }   from '../utilities/image-map/image-map.component';
import { ConfirmModelService } from './modal/confirm.modal.service';
declare var $: any;

/**
 * This class represents the lazy loaded CarMapComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'car-map',
  templateUrl: 'carmap.component.html',
  styleUrls: ['carmap.component.css']
})

export class CarMapComponent implements OnInit, OnChanges {
  @ViewChild(ImageMapComponent) carImgMap:ImageMapComponent;
  @Output() checkBookMark       = new EventEmitter();
  @Output() showNextSeverity    = new EventEmitter();
  @Output() eventChangeLocation = new EventEmitter();
  @Output() initEventData       = new EventEmitter();
  @Input('slug') slug: string;
  @Input('mapData') mapData: any;

  backendApi: string;
  carMapProperties: CoordiateModel;
  carMapStyle: CanvasStyleModel;
  markList: any[];

  constructor(
    private el: ElementRef,
    private router: Router,
    private renderer: Renderer,
    private _dataService: DataService,
    private _eventService: EventService,
    private _viewContainer: ViewContainerRef,
    private _damageModelService: DamageModelService,
    private _confirmModelService: ConfirmModelService
  ) {
    this.backendApi = Config.API;
  }

  ngOnInit() {}

  ngOnChanges() {
    this.initComponent();
  }

  initComponent() {
    this.carMapProperties = new CoordiateModel();
    this.carMapStyle = new CanvasStyleModel();
    this.carMapProperties.x = 0;
    this.carMapProperties.y = 0;

    this.carMapStyle.bgColor = 'red';
    this.carMapStyle.bgOpacity = 0.6;
    this.carMapStyle.borderColor = 'black';
    this.carMapStyle.borderWidth = 1;
    this.carMapStyle.bgOverColor = 'blue';
    this.carMapStyle.bgOverOpacity = 0.6;
    this.carMapStyle.borderOverColor = 'black';
    this.carMapStyle.borderOverWidth = 1;
    this.markList = [];
    this.setData(this.mapData);
  }

  /*
  set backend data to local variables
  */
  setData(res: any) {
    this.carMapProperties.x = res.data.width;
    this.carMapProperties.y = res.data.height;
  }

  /*
  insert the mark to the list
  */
  insertMarkToList($event: any) {
    for(let i=0; i<this.markList.length; i++) {
      if($event.id === this.markList[i].id) {
        return i;
      }
    }

    this.markList.push($event);
    return -1;
  }

  /*
  init mark list from the api
  */
  initMarkList(event: any) {
    if(event.length > 0) {
      this.markList = event;
      this.initEventData.emit(true);
    } else {
      this.markList = [];
      this.initEventData.emit(false);
    }
  }

  /*
  click event on canvas
  */
  clickOnImage($event: any) {
    let check = this.insertMarkToList($event);
    if(check !== -1) {
      this._confirmModelService.openDialog(this, check, this._viewContainer);
      return;
    }
    let value = ($event as any).value;
    let autoPartId = (value as any).AutoPartID;
    this._damageModelService.openDialog(autoPartId, this, this._viewContainer);
  }

  doneAutoPart(list = this.markList) {
    if(list.length > 0) {
      this.checkBookMark.emit(true);
    } else {
      this.checkBookMark.emit(false);
    }
  }

  selectAutoPart(event: any) {
    this.showNextSeverity.emit(event);
  }

  eventSwitchLocation(event: any) {
    this.eventChangeLocation.emit(event);
  }
}
