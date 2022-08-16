import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DispatcherService } from 'src/app/services/dispatcher.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements AfterViewInit {
  @ViewChild('displayNameInput', { read: ElementRef })
  displayNameInput: ElementRef;
  showClear: boolean = true;
  modified: boolean = false;
  saving: boolean = false;
  constructor(
    public auth: AuthService,
    private toast: ToastController,
    public d: DispatcherService
  ) {}

  ngAfterViewInit(): void {
    this.displayNameInput.nativeElement.focus();
  }

  saveDisplayName() {
    this.saving = true;
    this.auth.saveDisplayName().subscribe((res: any) => {
      this.saving = false;
      this.modified = false;
      if (res.modifiedCount != 1) {
        this.presentToast(
          "Whoop's something went wrong.  This one's on us.",
          2000
        );
      } else {
        this.presentToast(
          `Can't wait to start calling you ${this.auth.user.displayname}!`,
          2000
        );
        this.d.profileNav$.next('Back');
      }
    });
  }

  async presentToast(msg: string, dur: number) {
    const toast = await this.toast.create({
      message: msg,
      duration: dur,
    });
    toast.present();
  }
}
