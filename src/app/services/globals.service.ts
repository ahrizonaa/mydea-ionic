import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

declare const window: Window;

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public platform: Platform
  ) {
    console.log(this.api);
    this.iframe = (() => {
      try {
        if (window.self !== window.top) {
          let html = this.document.querySelector('html') as HTMLHtmlElement;

          html.setAttribute('style', 'font-size: 3.5vw !important');
        }
        return false;
      } catch (e) {
        return true;
      }
    })();
  }

  backgroundImage$: BehaviorSubject<string> = new BehaviorSubject('');

  iframe: boolean;

  readonly api =
    window.location.href.indexOf('localhost') != -1
      ? 'http://localhost:8080'
      : 'https://mydeas.vercel.app/api';
}
