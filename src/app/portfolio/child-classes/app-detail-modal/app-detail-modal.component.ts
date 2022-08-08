import { AppAssistant } from './../AppAssistant';
import { Component, OnInit } from '@angular/core';

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
  selector: 'app-app-detail-modal',
  templateUrl: './app-detail-modal.component.html',
  styleUrls: ['./app-detail-modal.component.scss'],
})
export class AppDetailModalComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor(public apps: AppAssistant) {}

  ngOnInit(): void {}
}
