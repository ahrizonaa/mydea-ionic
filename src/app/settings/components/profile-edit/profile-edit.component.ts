import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit, AfterViewInit {
  @ViewChild('displayNameInput', { read: IonInput }) displayNameInput: IonInput;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.displayNameInput);
    this.displayNameInput.setFocus();
  }
}
