import { UserManagerService } from './services/user-manager-service.service';
import { myFirebaseConfig,myFirebaseAuthConfig } from './config/fireBaseConfig';
import { AuthService } from './services/auth-service.service';
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
  providers: [AuthService, UserManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
