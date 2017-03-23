import { FeedService } from './services/feed-service.service';
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
import { SingleItemComponent } from './single-item/single-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SingleItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)

  ],
  providers: [AuthService, UserManagerService, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
