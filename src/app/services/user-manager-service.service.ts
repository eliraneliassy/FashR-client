import { AngularFire } from 'angularfire2';
import { AuthService } from './auth-service.service';
import { AppConfig } from './../config/appConfig';
import { SliceRegistation } from './../models/sliceRegistration';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagerService {

  user : any = {};

  constructor(private http: Http,
  private firebaseService: AngularFire) { 
    
  }

  static formatBody(data: Object) {
        let result = [];

        Object.keys(data).forEach((k: string) => {
            result.push(`${k}=${encodeURIComponent(data[k])}`);
        });

        return result.join('&');
    }

    getUser(uid : string){
      return this.http.get(AppConfig.apiURL + "/users/user?userName=" + uid)
        .map((res) => res.json())
        
    }

    getAllusers(){
      return this.http.get(AppConfig.apiURL + "/users/")
      .map((res)=> res.json())
    }

    getAllUsersProfile(userName: string){
      return this.http.get(AppConfig.apiURL + "/app/usersprofile/" + userName)
      .map((res)=> res.json())
    }
   

    getUserProfileDetails(userName : string){
      return this.http.get(AppConfig.apiURL+ "/users/userprofile?userName=" + userName).
      map((res)=>res.json())
    }

    checkIfFolow(userName : string, followedUserName : string){
      
    }

  registerToSlice(user: SliceRegistation){
    const body = UserManagerService.formatBody(user);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });


    this.http.post(AppConfig.apiURL + "/users" ,body,options)
    .map((res)=> res.text())
    .subscribe((redirectUrl) => {
      window.location.replace(redirectUrl);
    });

    
    
  }

}
