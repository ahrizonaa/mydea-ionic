import { AuthService } from 'src/app/services/auth.service';
import { Component, Input } from '@angular/core';

import SwiperCore, { EffectCards } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-poster-slider',
  templateUrl: './poster-slider.component.html',
  styleUrls: ['./poster-slider.component.css'],
})
export class PosterSliderComponent {
  @Input() cards: any[];

  constructor(public auth: AuthService) {}

  formatBgImgCss(i: number): string {
    const str = `url('../../assets/images/backgrounds/bg-${i + 1}.jpg')`;
    return str;
  }

  getImgUrl(i: number): string {
    return `../../assets/images/backgrounds/bg-${i + 1}.jpg`;
  }
}
