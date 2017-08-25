import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SocailUserRegisterModel } from './../models/userLoginModel';
import { AuthService } from './auth-service.service';
import { SliceRegistation } from './../models/sliceRegistration';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagerService {

  user: any = {};

  constructor(private http: Http) {

  }

  static formatBody(data: Object) {
    let result = [];

    Object.keys(data).forEach((k: string) => {
      result.push(`${k}=${encodeURIComponent(data[k])}`);
    });

    return result.join('&');
  }

  getUser(uid: string) {
    return this.http.get(environment.appURLs.apiURL + "/users/getuser?userName=" + uid)
      .map((res) => res.json())

  }

  getAllusers() {
    return this.http.get(environment.appURLs.apiURL + "/users/")
      .map((res) => res.json())
  }

  getAllUsersProfile(userName: string, page : number) {
    return this.http.get(environment.appURLs.apiURL + "/app/usersprofile/" + userName + "?page=" + page)
      .map((res) => res.json())
  }


  getUserProfileDetails(userName: string, currentUserName: string) {
    return this.http.get(environment.appURLs.apiURL + "/users/userprofile/" + userName + "?followedUserName=" + currentUserName).
      map((res) => res.json())
  }

  checkIfFolow(userName: string, followedUserName: string) {

  }

  registerToSlice(user: SliceRegistation) {
    const body = UserManagerService.formatBody(user);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(environment.appURLs.apiURL + "/users", body, options)
      .map((res) => res.text())
      

  }

  // updateProfilePicture(userName: string, imageUrl: string, file: File) {
  //   var obj = {
  //     "userName": userName,
  //     "imageUrl": imageUrl,
  //     "file": file
  //   };

  //   let body = UserManagerService.formatBody(obj);

  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.patch(environment.appURLs.apiURL + "/users/updateprofilepicture", body, options);

  // }

  updateProfilePicture(form: FormData) {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.appURLs.apiURL + "/users/updateprofilepicture", form, options)

  }

  userExist(userName) {
    debugger
    return this.http.get(environment.appURLs.apiURL + "/users/userexist?userName=" + userName)
    .map(res=>res.text())
  }

}
