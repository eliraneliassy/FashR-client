import { AppConfig } from './../config/appConfig';
import { UserManagerService } from './user-manager-service.service';
import { Router } from '@angular/router';
import { UserLoginModel, UserRegisterModel } from './../models/userLoginModel';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AuthService {

    isAuthenticated = new BehaviorSubject(false);
    isLoggedIn(): Observable<boolean> {
        return this.isAuthenticated.asObservable();
    }

    user: any = new BehaviorSubject({});
    getUser(): Observable<any> {
        return this.user.asObservable();
    }


    constructor(
        public af: AngularFire,
        private router: Router,
        private userManager: UserManagerService

    ) {
        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user.next(user);
                this.isAuthenticated.next(true);
            }
            else {
                // user not logged in
                this.user.next({});
                this.isAuthenticated.next(false);

            }
        });
    }

    logout() {
        this.af.auth.logout().then(res => this.isAuthenticated.next(false));
    }

    private setAuth() {
        this.isAuthenticated.next(true);

    }

    googleLogin() {
        return new Promise((resolve, reject) => {
            this.af.auth.login({
                method: AuthMethods.Popup,
                provider: AuthProviders.Google
            }).then(res => {
                this.setAuth();
                return resolve(res);
            })
                .catch((err) => {
                    debugger
                    console.log(err);
                    return reject(err);
                });
        })

    }

    facebookLogin() {
        return new Promise((resolve, reject) => {
            this.af.auth.login({
                method: AuthMethods.Popup,
                provider: AuthProviders.Facebook
            }).then((res) => {
                this.setAuth()
                return resolve(res);
            })
                .catch((err) => {
                    console.log(err);
                    return reject(err);
                });
        })

    }

    twitterLogin() {
        return new Promise((resolve, reject) => {
            this.af.auth.login({
                method: AuthMethods.Popup,
                provider: AuthProviders.Twitter
            }).then((res) => {
                this.setAuth()
                return resolve(res);
            })
                .catch((err) => {
                    console.log(err);
                    return reject(err);
                });
        })

    }

    passwordLogin(user: UserLoginModel): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            return this.af.auth.login({ email: user.user, password: user.password },
                {
                    method: AuthMethods.Password,
                    provider: AuthProviders.Password
                })
                .then(res => {
                    this.setAuth();
                    return resolve();
                })
                .catch(() => reject());
        });
    }

    createUser(user: UserRegisterModel) {
        let uid;
        this.af.auth.createUser({
            // Create user
            email: user.email,
            password: user.password
        })
            .then((res) => {
                uid = res.uid;
                this.passwordLogin(
                    {
                        user: user.email,
                        password: user.password
                    }).then(() => {
                        this.userManager.registerToSlice({
                            userName: uid,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userEmail: user.email,
                            callBackUrl: AppConfig.apiURL + "/savenewuseritems/" + uid
                        })
                    }
                    );
            })
            .catch((err: any) => {
                debugger; console.log(err.message);
                if (err.code == "auth/email-already-in-use")
                    return "err:email-already-in-use";
                else
                    return "err";
            })
    }

}
