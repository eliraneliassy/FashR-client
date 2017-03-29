import { AppConfig } from './../config/appConfig';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  constructor(private http: Http) { 
    
  }

  getFeed(page: number){
    return this.http.get(AppConfig.apiURL + "/feed?page=" + page)
    .map((res) => res.json());
  }

  getUsersFeed(username: string, page:number){
    return this.http.get(AppConfig.apiURL + "/feed/user?userId=" + username + "&page=" + page)
    .map((res) => res.json());
  }

}
