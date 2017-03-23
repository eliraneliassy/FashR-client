import { AppConfig } from './../config/appConfig';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  constructor(private http: Http) { 
    
  }

  getFeed(){
    return this.http.get(AppConfig.apiURL + "/feed/")
    .map((res) => res.json());
  }

  getUsersFeed(username: string){
    return this.http.get(AppConfig.apiURL + "feed/" + username)
    .map((res) => res.json());
  }

}
