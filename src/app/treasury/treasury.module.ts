import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreasuryRoutingModule } from './treasury-routing.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TreasuryRoutingModule,
    SwiperModule,
  ],
  declarations: [],
})
export class TreasuryModule {}
