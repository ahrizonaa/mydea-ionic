import { DeleteModalComponent } from './portfolio/child-classes/delete-modal/delete-modal.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorComponent } from './error/error.component';
import { IonicModule, IonicRouteStrategy, IonTabs } from '@ionic/angular';
import { AppAssistant } from './portfolio/child-classes/AppAssistant';
import { LoginComponent } from './login/login.component';
import { TelCardComponent } from './login/child-classes/tel-card/tel-card.component';
import { DisplaynameCardComponent } from './login/child-classes/displayname-card/displayname-card.component';
import { SmscodeCardComponent } from './login/child-classes/smscode-card/smscode-card.component';
import { GreetingCardComponent } from './login/child-classes/greeting-card/greeting-card.component';
import { LogoComponent } from './logo/logo.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { SettingsComponent } from './settings/settings.component';
import { RouteReuseStrategy } from '@angular/router';
import { FabContentsComponent } from './portfolio/child-classes/fab-contents/fab-contents.component';
import { CreateappModalComponent } from './portfolio/child-classes/createapp-modal/createapp-modal.component';
import { AppDetailModalComponent } from './portfolio/child-classes/app-detail-modal/app-detail-modal.component';
import { TabsPage } from './tabs/tabs.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    PortfolioComponent,
    TreasuryComponent,
    SettingsComponent,
    FabContentsComponent,
    DeleteModalComponent,
    CreateappModalComponent,
    AppDetailModalComponent,
    TabsPage,
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
    FontAwesomeModule,
  ],
  exports: [IonicModule],
  providers: [
    AppAssistant,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
