import { environment } from '../../environments/environment';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  constructor(private http: Http) { 
    
  }

  getFeed(page: number){
    return this.http.get(environment.appURLs.apiURL + "/feed?page=" + page)
    .map((res) => res.json());
  }

  getUsersFeed(username: string, page:number){
    return this.http.get(environment.appURLs.apiURL + "/feed/user?userId=" + username + "&page=" + page)
    .map((res) => res.json());
  }

}
