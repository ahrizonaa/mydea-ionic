import { DispatcherService } from './../services/dispatcher.service';
import { ApiService } from './../services/api.service';
import { FotoService } from './../services/foto.service';
import { AuthService } from 'src/app/services/auth.service';

import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

import { Animation, AnimationController, IonImg } from '@ionic/angular';
import * as _ from 'lodash';
import { GlobalsService } from '../services/globals.service';
import { Photo } from '@capacitor/camera';
import { UserData } from '../login/child-classes/User';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, AfterViewInit {
  @ViewChild('profileImg') profileImg: any;

  //bgs: number[][] = _.chunk(Array.from(new Array(16).keys()), 3);
  bgs: number[] = Array.from(new Array(16).keys());
  bgImage = 'url(../../assets/images/bg-1.jpg)';
  pfp = 'url(../../assets/svg/avatar.svg)';
  displayName: any;

  constructor(
    public auth: AuthService,
    public globals: GlobalsService,
    public foto: FotoService,
    public api: ApiService,
    public d: DispatcherService,
    private html: Renderer2
  ) {
    this.pfp = 'url(../../assets/svg/avatar.svg)';
    this.displayName = html.createElement('ion-text');
    this.displayName.innerHTML = 'Edit';
    this.displayName.style.position = 'absolute';
    this.displayName.style.bottom = '5px';
    this.displayName.style.textAlign = 'center';
    this.displayName.style.width = '100%';
    this.displayName.style.color = 'rgb(66, 140, 255)';
    this.displayName.style.fontSize = '1rem';
    this.displayName.style.fontWeight = 'normal';
  }
  ngAfterViewInit(): void {
    console.log(this.profileImg);
    this.profileImg.el.shadowRoot.appendChild(this.displayName);
  }
  ngOnInit(): void {
    this.d.user$.subscribe((user: UserData) => {
      if (user.settings !== undefined && user.settings.pfp) {
        this.pfp = user.settings.pfp;
      }
    });
  }

  setBackgroundImage(idx: number) {
    this.api
      .post('settings/save', {
        user: this.auth.user,
        settings: { bgindex: idx + 1 },
      })
      .subscribe();
    this.globals.backgroundImage$.next(
      `url(../assets/images/backgrounds/bg-${idx + 1}.jpg)`
    );
  }

  formatBgImgCss(i: number) {
    const str = `url('../../assets/images/backgrounds/bg-${i + 1}.jpg')`;
    return str;
  }

  async takePicture() {
    const image: Photo = await this.foto.capture();

    this.saveProfilePic(image);
  }

  saveProfilePic(image: Photo) {
    this.auth.user.settings.pfp = image.dataUrl;
    this.pfp = image.dataUrl || '';

    this.api
      .post('settings/save', {
        user: this.auth.user,
        settings: { pfp: image.dataUrl },
      })
      .subscribe();
  }
}
