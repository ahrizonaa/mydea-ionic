import { LibService } from './../services/lib.service';
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

import {
  Animation,
  AnimationController,
  DomController,
  IonImg,
  IonNav,
} from '@ionic/angular';
import * as _ from 'lodash';
import { GlobalsService } from '../services/globals.service';
import { Photo } from '@capacitor/camera';
import { UserData } from '../login/child-classes/User';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, AfterViewInit {
  @ViewChild('profileImg') profileImg: any;
  @ViewChild('ionNav', { read: IonNav }) ionNav: IonNav;
  @ViewChild('profileCard', { read: ElementRef }) profileCard: ElementRef;
  bgs: number[] = Array.from(new Array(16).keys());
  bgImage = 'url(../../assets/images/bg-1.jpg)';
  pfp = 'url(../../assets/svg/avatar.svg)';
  profileImgEdit: HTMLElement;
  profileRoot: any;
  profileEdit: any;
  profileCardHeight: string = 'auto';
  profileCardMaxHeight: string = '35vh';

  constructor(
    public auth: AuthService,
    public globals: GlobalsService,
    public foto: FotoService,
    public api: ApiService,
    public d: DispatcherService,
    private html: Renderer2,
    public lib: LibService
  ) {
    this.pfp = 'url(../../assets/svg/avatar.svg)';
    this.renderProfileImgEditBtn();
    this.profileRoot = ProfileComponent;
    this.profileEdit = ProfileEditComponent;
  }
  // ngAfterViewInit(): void {
  //   this.profileImg.el.shadowRoot.appendChild(this.profileImgEdit);
  // }
  // ngOnInit(): void {
  //   this.d.user$.subscribe((user: UserData) => {
  //     if (user.settings !== undefined && user.settings.pfp) {
  //       this.pfp = user.settings.pfp;
  //     }
  //   });
  // }

  ngAfterViewInit() {
    setTimeout(() => {
      let el = document.querySelector(
        'app-profile > div'
      ) as HTMLElement | null;
      let height = el == null ? 'auto' : `${el.offsetHeight}px`;
      console.debug(height);
      this.profileCardMaxHeight = '100vh';
      this.profileCardHeight = height;
    }, 100);
  }

  ngOnInit(): void {
    this.d.profileNav$.subscribe((nav: string) => {
      if (nav == 'Edit Display Name') {
        this.ionNav.push(this.profileEdit);
        console.debug(this.ionNav);
      }
    });
  }

  setBackgroundImage(idx: number) {
    this.api
      .post('/api/settings/save', {
        user: this.auth.user,
        settings: { bgindex: idx + 1 },
      })
      .subscribe();
    this.globals.backgroundImage$.next(
      `url(../assets/images/backgrounds/bg-${idx + 1}.jpg)`
    );
  }

  formatBgImgCss(i: number): string {
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

  renderProfileImgEditBtn() {
    this.profileImgEdit = this.html.createElement('ion-text');
    this.profileImgEdit.innerHTML = 'Edit';
    this.profileImgEdit.style.position = 'absolute';
    this.profileImgEdit.style.bottom = '5px';
    this.profileImgEdit.style.textAlign = 'center';
    this.profileImgEdit.style.width = '100%';
    this.profileImgEdit.style.color = 'rgb(66, 140, 255)';
    this.profileImgEdit.style.fontSize = '1rem';
    this.profileImgEdit.style.fontWeight = 'normal';
  }
}
