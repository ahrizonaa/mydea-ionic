import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
})
export class LogoComponent implements OnInit, AfterViewInit {
  @Input() width: string;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
