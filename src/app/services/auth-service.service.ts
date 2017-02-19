import { AppConfig } from './../config/appConfig';
import { UserManagerService } from './user-manager-service.service';
import { Router } from '@angular/router';
import { UserLoginModel, UserRegisterModel } from './../models/userLoginModel';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AuthService {

    user : any = {};
    isAuthenticated = new BehaviorSubject(false);

    isLoggedIn(): Observable<boolean> {
        return this.isAuthenticated.asObservable();
    }


    constructor(
        public af: AngularFire,
        private router : Router,
        private userManager : UserManagerService
    ) {
        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
                this.isAuthenticated.next(true);
                console.log("auth");
                console.log(user);
            }
            else {
                // user not logged in
                this.user = {};
                this.isAuthenticated.next(false);
                console.log("not auth");

            }
        });
    }

    logout() {
        this.af.auth.logout().then(res => this.isAuthenticated.next(false));
    }

    private setAuth(){
        this.isAuthenticated.next(true);
        this.router.navigate(["/"]);
        
    }

    googleLogin() {
        this.af.auth.login({
            method: AuthMethods.Popup,
            provider: AuthProviders.Google
        }).then(res => this.setAuth());
    }

    facebookLogin() {
        this.af.auth.login({
            method: AuthMethods.Popup,
            provider: AuthProviders.Facebook
        }).then(res => this.setAuth());
    }

    twitterLogin() {
        this.af.auth.login({
            method: AuthMethods.Popup,
            provider: AuthProviders.Twitter
        }).then(res => this.setAuth());
    }

    passwordLogin(user: UserLoginModel) {
        this.af.auth.login({ email: user.user, password: user.password },
            {
                method: AuthMethods.Password,
                provider: AuthProviders.Password
            }).then(res => this.setAuth());
    }

    createUser(user: UserRegisterModel) {
        debugger
        this.af.auth.createUser({
            // Create user
            email: user.email,
            password: user.password
        })
        .then(()=> console.log("sad"))
        .catch((err)=> {
            debugger; console.log(err)
        })
        .then(()=> {
            this.passwordLogin(
            {
                user: user.email,
                password: user.password
            });
            this.userManager.registerToSlice({
                userName : this.user.uid,
                firstName : user.firstName,
                lastName : user.lastName,
                userEmail : user.email,
                callBackUrl: AppConfig.homePage
            
            })

        })
    }




}
