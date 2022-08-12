import { GlobalsService } from 'src/app/services/globals.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTreasureChest } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterViewInit {
  @ViewChild('ionTabs') ionTabs: IonTabs;
  faTreasureChest = faTreasureChest;

  tabsactive: boolean[] = [true, false, false];
  backgroundImage = 'url(../assets/images/backgrounds/bg-0.jpg';
  constructor(public auth: AuthService, public globals: GlobalsService) {}

  ngOnInit(): void {
    this.globals.backgroundImage$.subscribe((val: string) => {
      console.debug('TABS PAGE', val);
      if (!val) {
        console.debug('TABS PAGE', 'NO VAL');
        return;
      }
      this.backgroundImage = val;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelector('app-logo svg')?.classList.add('active');
    });
  }
}
