import { AuthProviders, AuthMethods } from 'angularfire2';


export const myFirebaseConfig = {
  apiKey: 'AIzaSyCq7LVXElTjRI_89E7R097Zx3r-Tug2rjY',
  authDomain: 'fashr-58a5e.firebaseapp.com',
  databaseURL: 'https://fashr-58a5e.firebaseio.com',
  storageBucket: 'fashr-58a5e.appspot.com',
  messagingSenderId: '888483281021'
};

export const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
  remember: 'default'
};


// const firebaseAuthConfig = {
//   method: AuthMethods.Popup,
//   remember: 'default'
// };