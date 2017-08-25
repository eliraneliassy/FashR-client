import { EmailnotsupportedComponent } from './emailnotsupported/emailnotsupported.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { loginRouting } from './login.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SocialHeaderComponent } from './social-header/social-header.component';

@NgModule({
  imports: [
    CommonModule,
    loginRouting,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent, SocialHeaderComponent, EmailnotsupportedComponent]
})
export class LoginModule { }
