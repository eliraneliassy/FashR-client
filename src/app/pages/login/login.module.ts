import { loginRouting } from './login.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SocialHeaderComponent } from './social-header/social-header.component';

@NgModule({
  imports: [
    CommonModule,
    loginRouting
  ],
  declarations: [LoginComponent, RegisterComponent, SocialHeaderComponent]
})
export class LoginModule { }
