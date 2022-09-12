import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input } from '@angular/core';

import SwiperCore, { EffectCards } from 'swiper';
import { HashLocationStrategy } from '@angular/common';
import { GlobalsService } from 'src/app/services/globals.service';

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-poster-slider',
  templateUrl: './poster-slider.component.html',
  styleUrls: ['./poster-slider.component.css'],
})
export class PosterSliderComponent {
  @Input() cards: any[];

  constructor(
    public auth: AuthService,
    private api: ApiService,
    private toast: ToastController,
    private globals: GlobalsService
  ) {}

  slideClicked(bgIdx: number) {
    this.api
      .post('settings/save', {
        user: this.auth.user,
        settings: { bgindex: bgIdx },
      })
      .subscribe(async (res) => {
        this.auth.user.settings.bgindex = bgIdx;
        this.globals.backgroundImage$.next(this.formatBgImgCss(bgIdx));
        let toast = await this.toast.create({
          message: 'Stylish!',
          duration: 2000,
        });
        toast.present();
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
