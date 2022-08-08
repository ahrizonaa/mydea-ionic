import { ThemeSwitcherService } from './../services/theme-switcher.service';
import { GlobalsService } from './../services/globals.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import * as _ from 'lodash';
import { ToastController } from '@ionic/angular';
import { AppAssistant } from './child-classes/AppAssistant';

import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  EffectCoverflow,
} from 'swiper';

SwiperCore.use([
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  EffectCoverflow,
]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('refresher', { read: ElementRef }) refresher: ElementRef;

  fab: HTMLIonFabElement;

  constructor(
    public globals: GlobalsService,
    public themeService: ThemeSwitcherService,
    public toast: ToastController,
    public apps: AppAssistant
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.fab = document.getElementById('fab') as HTMLIonFabElement;
    this.apps.setRefresherViewChild(this.refresher);
    // get all apps from monogdb
    //this.apps.refresh(false);
  }

  getSize(element: any) {
    element.style.maxHeight =
      element.style.maxHeight === '1000px' ? '0px' : '1000px';
  }

  screenClicked(event: any) {
    this.apps.deleting = false;
    if (this.fab != null) {
      this.fab.close();
    }
  }
}
