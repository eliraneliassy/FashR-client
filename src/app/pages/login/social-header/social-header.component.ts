import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private userManager: UserManagerService,
    private router: Router) {

  }
  error = {
    'err': false,
    'msg': ""
  }

  race : boolean = false;


  ngOnInit() {
  }

  private fetchSocialUser(res) {
    debugger
    let user = {
      displayName: res.user.providerData[0].displayName,
      userName: res.user.uid,
      providerId: res.user.providerData[0].providerId,
      userEmail: res.user.providerData[0].email,
      imageUrl: res.user.providerData[0].photoURL,
      callBackUrl: environment.appURLs.apiURL + "/savenewuseritems/" + res.user.uid,

    }

    return user;
  }

  checkIfRegisterOrSignIn(res: any) {
    this.userManager.userExist(res.user.uid)
      .subscribe((isUser) => {
        debugger
        let val = JSON.parse(isUser);
        if (!this.race && !val) {
          let user = this.fetchSocialUser(res);
          this.userManager.registerToSlice(user)
          .subscribe((redirectUrl)=>{
                this.race=true;
              window.location.href = redirectUrl;
          })
        }
        else {
          this.router.navigate(["/feed"]);
        }
      })
  }

  googleLogin() {
    this.authService.googleLogin()
      .then((res: any) => {
        debugger
        this.checkIfRegisterOrSignIn(res)
      },
      (rej) => {
        this.error = { err: true, msg: rej.message }
      });
  }

  fbLogin() {
    this.authService.facebookLogin()
      .then((res) => {
        this.checkIfRegisterOrSignIn(res)
      },
      (rej) => {
        this.error = { err: true, msg: rej.message }
      })

  }

  twitterLogin() {
    this.authService.twitterLogin()
      .then((res) => {
        this.checkIfRegisterOrSignIn(res)
      },
      (rej) => {
        this.error = { err: true, msg: rej.message }
      })
  }





}
