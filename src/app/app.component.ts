import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment as env } from './../environments//environment';
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
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ethan Russell';
  stickyHeader$: Observable<boolean>;
  logo = require('../assets/logo.png');
  theme$: Observable<string>;

  envName = env.envName;
  version = env.versions.app;

  year = new Date().getFullYear();
  isAuthenticated$: Observable<boolean>;

  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'add-memory', label: 'Add Memory' },
    { link: 'view-memories', label: 'View Memory' },
    { link: 'about', label: 'About' },
    { link: 'contact', label: 'Contact' }
  ];
  navigationSideMenu = [...this.navigation];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }
}
