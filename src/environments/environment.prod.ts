const packageJson = require('../../package.json');

export const environment = {
  production: true,
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
  envName: 'PROD',
  test: false,
  i18nPrefix: '/ethan-russell',
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
