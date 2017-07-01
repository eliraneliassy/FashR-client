import { AppConfig } from './../config/appConfig';
import { UserManagerService } from './user-manager-service.service';
import { Router } from '@angular/router';
import { UserLoginModel, UserRegisterModel } from './../models/userLoginModel';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from 'firebase/app';



@Injectable()
export class AuthService {

    isAuthenticated = new BehaviorSubject(false);
    isLoggedIn(): Observable<boolean> {
        return this.isAuthenticated.asObservable();
    }

    // user: any = new BehaviorSubject({});
    getUser(): Observable<firebase.User> {
        return this.user;
    }

    private user: Observable<firebase.User>;


    constructor(
        public af: AngularFireAuth,
        private router: Router,
        private userManager: UserManagerService

    ) {
        this.user = this.af.authState;
    }

    logout() {
        this.af.auth.signOut();
    }

    private setAuth() {
        this.isAuthenticated.next(true);

    }

    googleLogin() {
        return new Promise((resolve, reject) => {
            this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(res => {
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
            this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then((res) => {
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
            this.af.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
                .then((res) => {
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
            return this.af.auth.signInWithEmailAndPassword(user.user, user.password)
                .then(res => {
                    this.setAuth();
                    return resolve();
                })
                .catch(() => reject());
        });
    }

    createUser(user: UserRegisterModel) {
        let uid;
        this.af.auth.createUserWithEmailAndPassword(user.email, user.password)
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
