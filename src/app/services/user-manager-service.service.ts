import { AppConfig } from './../config/appConfig';
import { SliceRegistation } from './../models/sliceRegistration';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagerService {

  constructor(private http: Http) { }

  registerToSlice(user: SliceRegistation){

    this.http.post(AppConfig.apiURL + "/register" ,user)
    .map((res)=> res.json())
    .subscribe((res) => window.location.replace(res));
    
  }

}
