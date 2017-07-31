import { AppConfig } from './../app/config/appConfig';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyCq7LVXElTjRI_89E7R097Zx3r-Tug2rjY",
    authDomain: "fashr-58a5e.firebaseapp.com",
    databaseURL: "https://fashr-58a5e.firebaseio.com",
    projectId: "fashr-58a5e",
    storageBucket: "fashr-58a5e.appspot.com",
    messagingSenderId: "888483281021"
  },
  appURLs : AppConfig
};
