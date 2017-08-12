import { environment } from '../../environments/environment';
import { UserManagerService } from './user-manager-service.service';
import { UserLoginModel, UserRegisterModel } from './../models/userLoginModel';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from 'firebase/app';



@Injectable()
export class AuthService {

    isAuthenticated = new BehaviorSubject(false);
    isLoggedIn(): Observable<boolean> {
        return this.isAuthenticated.asObservable();
    }


    getUser(): Observable<firebase.User> {
        return this.user;
    }

    private setAuth() {
        this.isAuthenticated.next(true);
    }

    public user: Observable<firebase.User>;


    constructor(
        public af: AngularFireAuth,
        private router: Router,
        private userManager: UserManagerService

    ) {
        this.user = this.af.authState;
        this.user.subscribe((res)=>{
            if(res){
                this.isAuthenticated.next(true);
                
            }
        })
    }

    logout() {
        return this.af.auth.signOut().then((res)=>{
            this.isAuthenticated.next(false);
            this.router.navigate(['/']);
        });
        
    }

    googleLogin() {
        return new Promise((resolve, reject) => {
            this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(res => {
                    debugger
                    this.setAuth();
                    return resolve(res);
                })
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

    passwordLogin(user: UserLoginModel) {
         return this.af.auth.signInWithEmailAndPassword(user.user, user.password).then
         (()=>{
             this.setAuth();
         });
    }

    createUser(user: UserRegisterModel) {
        let uid;
        return this.af.auth.createUserWithEmailAndPassword(user.email, user.password)
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
                            callBackUrl: environment.appURLs.apiURL + "/savenewuseritems/" + uid
                        }).subscribe((redirectUrl)=>{
                            window.location.replace(redirectUrl);
                        })
                    }
                    );
            })
            
    }

}
