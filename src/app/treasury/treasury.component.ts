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
import { LibService } from '../services/lib.service';

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

  constructor(
    private http: HttpClient,
    public auth: AuthService,
    public lib: LibService
  ) {}

  ngOnInit(): void {
    this.http
      .get('https://mydeas.vercel.app/api/perks/fetch')
      .subscribe((result: any) => {
        this.perks = result.map((perk: any) => {
          if (this.auth.user.perks) {
            let userperk = this.auth.user.perks[perk._id];
            if (userperk != undefined) {
              perk.accepted = userperk.accepted;
              perk.fullfilled = userperk.fullfilled;
            }
          }

          perk.img = `../../assets/images/perks/${perk.img}`;
          return perk;
        });
      });
  }

  acceptClicked(evt: any, perk: any) {
    perk.accepted = true;
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
              next: (result: any) => {
                this.auth.user.perks[perk._id] = perk;
                this.auth.user.perks[perk._id].accepted = true;
              },
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
