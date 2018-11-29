// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const packageJson = require('../../package.json');

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyCs9vE-Nug-lUGzhDXm1pa22DsE3vmA7mg',
    authDomain: 'ethanrussell-bc629.firebaseapp.com',
    databaseURL: 'https://ethanrussell-bc629.firebaseio.com',
    projectId: 'ethanrussell-bc629',
    storageBucket: 'ethanrussell-bc629.appspot.com',
    messagingSenderId: '300279173143'
  },
  appName: 'Ethan Russell',
  envName: 'DEV',
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
