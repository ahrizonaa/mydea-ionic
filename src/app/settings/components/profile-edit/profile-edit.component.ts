import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(public auth: AuthService) {}

  ngAfterViewInit(): void {
    console.log(this.displayNameInput);
    this.displayNameInput.nativeElement.focus();
  }

  saveDisplayName() {
    this.modified = false;
    this.auth.saveDisplayName().subscribe((res: any) => {
      console.log(res);
      this.modified = false;
    });
    this.modified = true;
  }
}
