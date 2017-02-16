import { UserLoginModel } from './../models/userLoginModel';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Injectable()
export class AuthService {

    user = {};
    constructor(
        public af: AngularFire
    ) {
        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
                console.log("auth");
                console.log(user);
            }
            else {
                // user not logged in
                this.user = {};
                console.log("not auth");

            }
        });
    }

    googleLogin() {
        this.af.auth.login({
            method: AuthMethods.Popup,
            provider: AuthProviders.Google
        });
    }

    facebookLogin() {
        this.af.auth.login({
            method: AuthMethods.Popup,
            provider: AuthProviders.Facebook
        });
    }

    twitterLogin() {
        this.af.auth.login({
            method: AuthMethods.Popup,
            provider: AuthProviders.Twitter
        });
    }

    passwordLogin(user: UserLoginModel) {
        this.af.auth.login({ email: user.user, password: user.password },
            {
                method: AuthMethods.Password,
                provider: AuthProviders.Password
            });
    }

    logout() {
        this.af.auth.logout();
    }



}
