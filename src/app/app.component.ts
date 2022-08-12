import { Router } from '@angular/router';
import { GlobalsService } from './services/globals.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isReloading = false;

  constructor(
    public globals: GlobalsService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.debug('APP COMPONENT');
    this.router.navigate(['splash']);
    this.auth.initUser();
  }

  reload() {
    setTimeout(() => (this.isReloading = false), 10);
    setTimeout(() => (this.isReloading = true), 20);
  }
}
