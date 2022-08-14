import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
} from '@angular/core';

import Swiper, { EffectCreative, Parallax } from 'swiper';

@Component({
  selector: 'app-poster-slider',
  templateUrl: './poster-slider.component.html',
  styleUrls: ['./poster-slider.component.css'],
})
export class PosterSliderComponent implements AfterViewInit {
  @Input() cards: any[];
  @ViewChild('swiper') swiper: any;

  creativeEffect: any;
  constructor() {
    this.creativeEffect = {
      limitProgress: 3,
      perspective: true,
      shadowPerProgress: true,
      prev: {
        shadow: true,
        translate: ['-15%', 0, -200],
      },
      next: {
        translate: [this.calcNextOffset(), 0, 0],
      },
    };
  }
  ngAfterViewInit() {
    console.log(this.swiper);
    this.swiper.modules = [Parallax, EffectCreative];
  }

  formatBgImgCss(i: number): string {
    const str = `url('../../assets/images/backgrounds/bg-${i + 1}.jpg')`;
    return str;
  }

  getImgUrl(i: number): string {
    return `../../assets/images/backgrounds/bg-${i + 1}.jpg`;
  }

  calcNextOffset(): string {
    if (this.swiper == undefined) return;
    const parentWidth = this.swiper.nativeElement.parentElement.offsetWidth;
    const swiperWidth = this.swiper.nativeElement.offsetWidth;
    let nextOffset =
      (parentWidth - (parentWidth - swiperWidth) / 2) / swiperWidth;
    nextOffset = Math.max(nextOffset, 1);
    return `${nextOffset * 100}%`;
  }
}
