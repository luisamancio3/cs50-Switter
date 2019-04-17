// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyAsxmIPz83QMqzcbHI1QisWMy7rAut31uU",
    authDomain: "cs50-97648.firebaseapp.com",
    databaseURL: "https://cs50-97648.firebaseio.com",
    projectId: "cs50-97648",
    storageBucket: "cs50-97648.appspot.com",
    messagingSenderId: "307428226184"
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
