import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './services/app-service.service';
import { CommonModule } from '@angular/common';
import { environment } from './../environments/environment';

import { SocialManagerService } from './services/social-manager.service';
import { SharedModule } from './shared/shared/shared.module';
import { UsersModule } from './pages/users/users.module';
import { AuthGuardService } from './services/auth-guard.service';
import { SuggestionsService } from './services/suggestions-service.service';
import { FeedService } from './services/feed-service.service';
import { UserManagerService } from './services/user-manager-service.service';
import { AuthService } from './services/auth-service.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FooterComponent } from './layout/footer/footer.component';



import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CountoDirective } from './directives/counto.directive';

import {MdDialogModule} from '@angular/material';
import { ClickOutsideDirective } from './directives/click-outside.directive';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TabsComponent,
    FooterComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, UserManagerService, FeedService, SocialManagerService, SuggestionsService, AuthGuardService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
