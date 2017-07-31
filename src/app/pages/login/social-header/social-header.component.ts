import { environment } from '../../../../environments/environment';
import { SliceRegistation } from './../../../models/sliceRegistration';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { Observable } from 'rxjs';
import { UserLoginModel, UserRegisterModel, SocailUserRegisterModel } from './../../../models/userLoginModel';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-social-header',
  templateUrl: './social-header.component.html',
  styleUrls: ['./social-header.component.scss']
})
export class SocialHeaderComponent implements OnInit {

  constructor(private authService: AuthService, private userManager: UserManagerService) {

  }
  error = {
    'err': false,
    'msg': ""
  }


  ngOnInit() {
  }

  private fetchSocialUser(res) {
    let user = {
      displayName: res.auth.providerData[0].displayName,
      userName: res.uid,
      providerId: res.provider,
      userEmail: res.auth.providerData[0].email,
      imageUrl: res.auth.providerData[0].photoURL,
      callBackUrl: environment.appURLs.apiURL + "/savenewuseritems/" + res.uid,

    }

    return user;
  }

  googleLogin() {
    this.authService.googleLogin()
      .then((res: any) => {
        let user = this.fetchSocialUser(res);
        this.userManager.registerToSlice(user);
      })
      .catch((err) => {
        this.error = { err: true, msg: err.message }
        console.log(this.error);
      });;
  }

  fbLogin() {
    this.authService.facebookLogin()
      .then((res) => {
        let user = this.fetchSocialUser(res);
        this.userManager.registerToSlice(user);
      })
      .catch((err) => {
        this.error = { err: true, msg: err.message }
        console.log(this.error);
      });

  }

  twitterLogin() {
    this.authService.twitterLogin().then((res) => {
        let user = this.fetchSocialUser(res);
        this.userManager.registerToSlice(user);
      })
       .catch((err) => {
        this.error = { err: true, msg: err.message }
        console.log(this.error);
      });
  }





}
