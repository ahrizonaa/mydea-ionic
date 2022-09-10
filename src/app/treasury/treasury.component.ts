import { AuthService } from './../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  EffectCoverflow,
  Parallax,
  EffectCreative,
} from 'swiper';

SwiperCore.use([
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
  EffectCoverflow,
  Parallax,
  EffectCreative,
]);

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.scss'],
})
export class TreasuryComponent {
  cards: any[] = [
    {
      name: 'Microsoft Office',
      link: '',
      img: '../../assets/images/cards/office.png',
      user: 'missahrizona@outlook.com',
      pass: 'familypass123',
    },
    {
      name: 'Adobe Creative Cloud',
      link: '',
      img: '../../assets/images/cards/adobe.png',
      user: 'markus.anthony.garcia@gmail.com',
      pass: 'familypass123',
    },
    {
      name: 'Netflix',
      link: '',
      img: '../../assets/images/cards/netflix.webp',
      iframe: true,
      user: 'markus.anthony.garcia@gmail.com',
      pass: 'familypass123',
    },
    {
      name: 'Hulu',
      link: '',
      img: '../../assets/images/cards/hulu.jpg',
      iframe: true,
      user: 'markus.anthony.garcia@gmail.com',
      pass: 'familypass123',
    },
    {
      name: 'Disney+',
      link: '',
      img: '../../assets/images/cards/disney.jpg',
      iframe: true,
      user: 'markus.anthony.garcia@gmail.com',
      pass: 'familypass123',
    },
    {
      name: 'HBO Max',
      link: '',
      img: '../../assets/images/cards/hbo-max.png',
      iframe: true,
      user: 'markus.anthony.garcia@gmail.com',
      pass: 'familypass123',
    },
    {
      name: 'Amazon Prime',
      link: '',
      img: '../../assets/images/cards/amazon.jpg',
      iframe: true,
      user: 'markus.anthony.garcia@gmail.com',
      pass: 'familypass123',
    },
    {
      name: 'Apple TV+',
      link: '',
      img: '../../assets/images/cards/apple.jpg',
      invite: true,
    },
    {
      name: 'Spotify',
      link: '',
      img: '../../assets/images/cards/spotify.webp',
      invite: true,
    },
    {
      name: 'Disney Dreamlight Valley',
      link: '',
      img: '../../assets/images/cards/disney-dreamlight.jpg',
      invite: true,
    },
    {
      name: 'Call of Duty Modern Warfare 2',
      link: '',
      img: '../../assets/images/cards/mw2.jpg',
      invite: true,
    },
  ];

  constructor(private http: HttpClient, private auth: AuthService) {}

  acceptClicked(perk: any) {
    this.http
      .post('https://mydeas.vercel.app/api/perks/accept', {
        user: this.auth.user.displayname,
        perk: perk,
      })
      .subscribe({
        next: (result: any) => {
          console.log(result);
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {},
      });
  }

  slideChanged(event: any) {}
}
