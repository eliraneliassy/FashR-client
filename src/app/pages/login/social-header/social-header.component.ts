import { Observable } from 'rxjs';
import { UserLoginModel } from './../../../models/userLoginModel';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-social-header',
  templateUrl: './social-header.component.html',
  styleUrls: ['./social-header.component.scss']
})
export class SocialHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { 
    
  }
  error = {
    'err': false,
    'msg': ""
  }

  
  ngOnInit() {
  }

  googleLogin() {
    this.authService.googleLogin();
  }

  fbLogin() {
    this.authService.facebookLogin()
    .catch((err)=>{
      this.error= {err: true, msg: err.message}
      console.log(this.error);
    });

  }

  twitterLogin() {
    this.authService.twitterLogin();
  }

  passwordLogin(user: UserLoginModel) {
    this.authService.passwordLogin(user);
  }




}
