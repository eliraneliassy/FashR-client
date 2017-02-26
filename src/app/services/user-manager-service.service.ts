import { AppConfig } from './../config/appConfig';
import { SliceRegistation } from './../models/sliceRegistration';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagerService {

  constructor(private http: Http) { }

  static formatBody(data: Object) {
        let result = [];

        Object.keys(data).forEach((k: string) => {
            result.push(`${k}=${encodeURIComponent(data[k])}`);
        });

        return result.join('&');
    }

  registerToSlice(user: SliceRegistation){
    const body = UserManagerService.formatBody(user);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });


    this.http.post(AppConfig.apiURL + "/users" ,body,options)
    .toPromise()
    .then ((res) => {
      debugger
      console.log(res.json()._body);
      window.location.replace(res.json()._body)
    });
    
  }

}
