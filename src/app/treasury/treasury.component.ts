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
export class TreasuryComponent implements OnInit {
  perks: any[] = [];

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit(): void {
    this.http
      .get('https://mydeas.vercel.app/api/perks/fetch')
      .subscribe((result: any) => {
        this.perks = result.map((perk: any) => {
          perk.img = `../../assets/perks/${perk.img}`;
          return perk;
        });
      });
  }

  acceptClicked(perk: any) {
    this.http
      .post('https://mydeas.vercel.app/api/perks/accept', {
        user: this.auth.user.displayname,
        perk: perk,
      })
      .subscribe({
        next: (result: any) => {
          this.http
            .post('https://mydeas.vercel.app/api/user/perk', {
              _id: this.auth.user._id,
              perk: perk,
            })
            .subscribe({
              next: (result: any) => {},
              error: (err: any) => {},
            });
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {},
      });
  }

  slideChanged(event: any) {}
}
