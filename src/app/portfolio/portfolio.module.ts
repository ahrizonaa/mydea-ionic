import { AppDetailModalComponent } from './child-classes/app-detail-modal/app-detail-modal.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { FabContentsComponent } from './child-classes/fab-contents/fab-contents.component';
import { CreateappModalComponent } from './child-classes/createapp-modal/createapp-modal.component';
import { DeleteModalComponent } from './child-classes/delete-modal/delete-modal.component';
import { SwiperModule } from 'swiper/angular';
import { FeaturelistComponent } from './child-classes/featurelist/featurelist.component';
import { ToggleLink } from './child-classes/togglelink';
import { TimelineComponent } from './child-classes/timeline/timeline.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PortfolioRoutingModule,
    DeleteModalComponent,
    SwiperModule,
  ],
  declarations: [
    PortfolioComponent,
    FabContentsComponent,
    CreateappModalComponent,
    AppDetailModalComponent,
    FeaturelistComponent,
    ToggleLink,
    TimelineComponent,
  ],
})
export class PortfolioModule {}
