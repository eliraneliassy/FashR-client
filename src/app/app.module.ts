import { AuthGuardService } from './services/auth-guard.service';
import { SuggestionsService } from './services/suggestions-service.service';
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
import { UserItemsComponent } from './user-items/user-items.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SingleItemComponent,
    UserItemsComponent,
    InfiniteScrollDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)

  ],
  providers: [AuthService, UserManagerService, FeedService, SuggestionsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
