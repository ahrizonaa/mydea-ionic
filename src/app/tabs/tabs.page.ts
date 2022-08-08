import { GlobalsService } from 'src/app/services/globals.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterViewInit {
  @ViewChild('ionTabs') ionTabs: IonTabs;

  tabsactive: boolean[] = [true, false, false];
  backgroundImage = 'url(../assets/images/backgrounds/bg-0.jpg';
  constructor(public auth: AuthService, public globals: GlobalsService) {}

  ngOnInit(): void {
    this.globals.backgroundImage$.subscribe((val: string) => {
      if (!val) {
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
