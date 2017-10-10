import { Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModelService } from './modal/alert.modal.service';
import { DataService }       from '../core/data.service';
import { StoreService }      from '../core/store.service';
import { EventService }      from '../core/event.service';
import { Config }              from '../shared/index';

/**
 * This class represents the lazy loaded DamageComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-damage',
  templateUrl: 'damage.component.html',
  styleUrls: ['damage.component.css']
})

export class DamageComponent implements OnInit, OnDestroy {
	slug: string;
  strBtnDesc: string;
  backendApi: string;

	sub: any;
  _modal: any;
  mapData: any;

  bIsNext: boolean;
  isLoading: boolean;
  bIsSeverity: boolean;
  bIsStart: boolean;

  totoalStep: number;
  currentStep: number;
  @Input('product') product: any;
  @ViewChild('nextAreaElement') nextAreaElement: any;

	constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private _storeService: StoreService,
    private _eventService: EventService,
    private _viewContainer: ViewContainerRef,
    private _alertModelService: AlertModelService,
    private _dataService: DataService,
  ) {
    this.bIsNext = false;
    this.isLoading = false;
    this.bIsSeverity = false;
    this.bIsStart = false;
  }

	ngOnInit() {
    this.backendApi = Config.API;
    // activeRoute param
    this.sub = this.activeRoute.params.subscribe(params=> {
      this.slug = params['id'];
      this.loadData('exterior');
    });
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  loadData(strLocation: string) {
    let postData = {
      code: 200,
      data: {
        slug: this.slug,
        location: strLocation
      }
    };

    this._dataService.post('v1/data/birdseyeauto', postData)
      .subscribe((res: any) => {
        this.mapData = res;
        if(!this.bIsStart) {
          this._alertModelService.openDialog(0, res, this._viewContainer);
        }

        this.totoalStep = res.data.steps.totalStep;
        this.currentStep = res.data.steps.currentStep;
        let helpIcon = this.backendApi + res.data.help.icon;
        let liveHelpIcon = this.backendApi + res.data.liveHelp.icon;
        let logoIcon = this.backendApi + res.data.ui.logo;
        let helpStatus: boolean, liveHelpStatus: boolean;
        if(res.data.liveHelp.on === 1) {
          liveHelpStatus = true;
        } else {
          liveHelpStatus = false;
        }

        if(res.data.help.on === 1) {
          helpStatus = true;
        } else {
          helpStatus = false;
        }

        this._eventService.emit('load_topbar_data', {
          helpIcon: helpIcon,
          helpStatus: helpStatus,
          liveHelpIcon: liveHelpIcon,
          liveHelpStatus: liveHelpStatus,
          logoIcon: logoIcon,
          helpLink: res.data.help.link
        });
        this.isLoading = true;
      }, (error: any) => console.error('Unable to fetch brands', error));
  }

  eventChangeLocation(event: any) {
    this.bIsStart = true;
    this.isLoading = false;
    this.loadData(event);
  }

  checkNextAbility($event: any) {
    if ($event) {
      this._alertModelService.openDialog(1, this.mapData, this._viewContainer);
      this.bIsNext = true;
      this.bIsSeverity = false;
    }
  }

  initEventData(event: boolean) {
    this.waitNextArea(event);
  }

  waitNextArea(isAvailable: boolean, nCount: number = 0) {
    if(nCount > 50) {
      console.log('Time out to wait the next area in the damage page.');
    } else if(!this.nextAreaElement) {
      nCount ++;
      setTimeout(() => this.waitNextArea(isAvailable, nCount), 100);
    } else {
      this.bIsNext = isAvailable;
    }
  }

  next() {
    this.router.navigate(['/photo', this.slug]);
  }

  showNextSeverity(event: any) {
    this.bIsSeverity = (event as any)['status'];
    if(this.bIsSeverity) {
      this.strBtnDesc = `${(event as any)['desc']} (${(event as any)['side']})`;
    }
  }

  onNextSeverity() {
    this._eventService.emit('nex_severity_event');
  }
}
