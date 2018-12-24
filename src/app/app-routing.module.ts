import { HaywalzComponent } from './haywalz/haywalz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import { ViewMemoriesComponent } from './view-memories/view-memories.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'add-memory',
    component: AddMemoryComponent
  },
  {
    path: 'view-memories',
    component: ViewMemoriesComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'haywalz',
    component: HaywalzComponent
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];
const configProd = {
  issuer: 'https://dev-901629.oktapreview.com/oauth2/default',
  redirectUri: 'https://ethanrussell.me/implicit/callback',
  clientId: '0oai5wwr64zB6q2A40h7'
};
const configDev = {
  issuer: 'https://dev-901629.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oai5wwr64zB6q2A40h7'
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled'
    }),
    OktaAuthModule.initAuth(configProd)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
