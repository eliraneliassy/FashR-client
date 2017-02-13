import { UserLoginModel } from './../../../models/userLoginModel';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-social-header',
  templateUrl: './social-header.component.html',
  styleUrls: ['./social-header.component.scss']
})
export class SocialHeaderComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  googleLogin(){
    this.authService.googleLogin();
  }

  fbLogin(){
    this.authService.facebookLogin();
  }

  twitterLogin(){
    this.authService.twitterLogin();
  }

  passwordLogin(user : UserLoginModel){
    this.authService.passwordLogin(user);
  }


  

}
