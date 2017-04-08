import { AppConfig } from './../config/appConfig';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SocialManagerService {

  constructor(private http: Http) { 
    
  }

  follow(userName: string, followedUserName: string){
    return this.http.get(AppConfig.apiURL+ "/social/follow?userName=" + userName + "&followedUserName="+ followedUserName)
    .map((res)=> res)
  }

}
