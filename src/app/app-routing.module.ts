import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'portfolio', component: PortfolioComponent },
      // {
      //   path: 'treasury',
      //   component: TreasuryComponent,
      // },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  {
    path: 'splash',
    component: SplashscreenComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
