import { environment } from '../../environments/environment';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  constructor(private http: Http) { 
    
  }

  getFeed(page: number, userName : string){
    return this.http.get(environment.appURLs.apiURL + "/feed?page=" + page + "&userName=" + userName)
    .map((res) => res.json());
  }

  getUsersFeed(username: string, page:number, self : boolean){
    return this.http.get(environment.appURLs.apiURL + "/feed/user?userId=" + username + "&page=" + page + "&self=" + self)
    .map((res) => res.json());
  }

  changeItemVisibility(itemId: string, visibility: boolean){
    return this.http.get(environment.appURLs.apiURL + "/feed/changeproductvisibility?productId="+ itemId + "&visibility=" + visibility)
  }

}
