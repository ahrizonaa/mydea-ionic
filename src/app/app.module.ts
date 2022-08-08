import { HttpInterceptorService } from './services/http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorComponent } from './error/error.component';
import { IonicModule } from '@ionic/angular';
import { AppAssistant } from './portfolio/child-classes/AppAssistant';
import { FeaturelistComponent } from './portfolio/child-classes/featurelist/featurelist.component';
import { TimelineComponent } from './portfolio/child-classes/timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { TelCardComponent } from './login/child-classes/tel-card/tel-card.component';
import { DisplaynameCardComponent } from './login/child-classes/displayname-card/displayname-card.component';
import { SmscodeCardComponent } from './login/child-classes/smscode-card/smscode-card.component';
import { GreetingCardComponent } from './login/child-classes/greeting-card/greeting-card.component';
import { LogoComponent } from './logo/logo.component';
import { ToggleLink } from './portfolio/child-classes/togglelink';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LazyImgDirective } from './directives/lazy-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    TelCardComponent,
    DisplaynameCardComponent,
    SmscodeCardComponent,
    GreetingCardComponent,
    SplashscreenComponent,
    LazyImgDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LogoComponent,
    IonicModule.forRoot({
      rippleEffect: true,
    }),
  ],
  providers: [
    AppAssistant,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
