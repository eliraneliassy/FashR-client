import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { HomeComponent } from './pages/home/home.component';


const myFirebaseConfig = {
  apiKey: 'AIzaSyCq7LVXElTjRI_89E7R097Zx3r-Tug2rjY',
  authDomain: 'fashr-58a5e.firebaseapp.com',
  databaseURL: 'https://fashr-58a5e.firebaseio.com',
  storageBucket: 'fashr-58a5e.appspot.com',
  messagingSenderId: '888483281021'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
  remember: 'default'
};

// const firebaseAuthConfig = {
//   method: AuthMethods.Popup,
//   remember: 'default'
// };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
