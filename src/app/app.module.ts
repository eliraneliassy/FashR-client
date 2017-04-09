import { SocialManagerService } from './services/social-manager.service';
import { SharedModule } from './shared/shared/shared.module';
import { UsersModule } from './pages/users/users.module';
import { AuthGuardService } from './services/auth-guard.service';
import { SuggestionsService } from './services/suggestions-service.service';
import { FeedService } from './services/feed-service.service';
import { UserManagerService } from './services/user-manager-service.service';
import { myFirebaseConfig, myFirebaseAuthConfig } from './config/fireBaseConfig';
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
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './components/tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)

  ],
  providers: [AuthService, UserManagerService, FeedService, SocialManagerService, SuggestionsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
