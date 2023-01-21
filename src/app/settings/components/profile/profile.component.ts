import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Photo } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { UserData } from 'src/app/login/child-classes/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { FotoService } from 'src/app/services/foto.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('profileImg') profileImg: any;
  pfp = '../../../assets/svg/avatar.svg';
  profileImgEdit: HTMLElement;

  constructor(
    private html: Renderer2,
    private d: DispatcherService,
    private foto: FotoService,
    public auth: AuthService,
    private api: ApiService
  ) {
    this.pfp = '../../assets/svg/avatar.svg';
    this.renderProfileImgEditBtn();
  }

  ngOnInit(): void {
    this.d.user$.subscribe((user: UserData) => {
      if (user.settings !== undefined && user.settings.pfp) {
        this.pfp = user.settings.pfp;
      }
    });
  }

  ngAfterViewInit(): void {
    this.profileImg.el.shadowRoot.appendChild(this.profileImgEdit);
  }

  async takePicture() {
    const image: Photo = await this.foto.capture();

    this.saveProfilePic(image);
  }

  editDisplayName(): void {
    this.d.profileNav$.next('Edit Display Name');
  }

  saveProfilePic(image: Photo) {
    console.log(image);
    this.api
      .post('user', { base64String: image.base64String, action: 'profilepic' })
      .subscribe((res: any) => {
        console.log(res);
        this.auth.user.settings.pfp = res.imgHostingUrl;
        this.pfp = res.imgHostingUrl || '';
        this.api
          .post('settings/save', {
            user: this.auth.user,
            settings: { pfp: res.imgHostingUrl },
          })
          .subscribe();
      });
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
