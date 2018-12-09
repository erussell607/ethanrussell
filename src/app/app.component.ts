import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment as env } from './../environments//environment';
import { OktaAuthService } from '@okta/okta-angular';
import { Store, select } from '@ngrx/store';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  routeAnimations,
  AppState,
  selectIsAuthenticated
} from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  title = 'Ethan Russell';
  stickyHeader$: Observable<boolean>;
  logo = require('../assets/logo.png');
  theme$: Observable<string>;

  envName = env.envName;
  version = env.versions.app;

  year = new Date().getFullYear();
  // isAuthenticated$: Observable<boolean>;
  isAuthenticated: boolean;

  navigation = [
    { link: 'about', label: 'About' },
    { link: 'add-memory', label: 'Add Feature' },
    { link: 'view-memories', label: 'View Features' },
    { link: 'contact', label: 'Contact' }
  ];
  navigationSideMenu = [...this.navigation];

  constructor(public oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }

  onLoginClick() {
    alert('Login');
    // this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    alert('Logout');
    // this.store.dispatch(new ActionAuthLogout());
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.loginRedirect('/about');
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
