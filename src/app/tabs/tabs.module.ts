import { SettingsModule } from './../settings/settings.module';
import { TreasuryModule } from './../treasury/treasury.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { LogoComponent } from '../logo/logo.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    LogoComponent,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
