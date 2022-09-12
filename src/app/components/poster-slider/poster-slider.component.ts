import { ApiService } from 'src/app/services/api.service';
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

  constructor(public auth: AuthService, private api: ApiService) {}

  slideClicked(bgIdx: number) {
    this.api
      .post('settings/save', {
        user: this.auth.user,
        settings: { bgindex: bgIdx },
      })
      .subscribe((res) => {
        this.auth.user.settings.bgindex = bgIdx;
      });
  }

  formatBgImgCss(i: number): string {
    const str = `url('../../assets/images/backgrounds/bg-${i}.jpg')`;
    return str;
  }

  getImgUrl(i: number): string {
    return `../../assets/images/backgrounds/bg-${i}.jpg`;
  }
}
