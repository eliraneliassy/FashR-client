import { environment } from './../../environments/environment';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SocialManagerService {

  constructor(private http: Http) { 
    
  }

  follow(userName: string, followedUserName: string){
    return this.http.get(environment.appURLs.apiURL+ "/social/follow?userName=" + userName + "&followedUserName="+ followedUserName)
    .map((res)=> res)
  }

  unFollow(userName:string, followedUserName:string){
      return this.http.get(environment.appURLs.apiURL+ "/social/unfollow?userName=" + userName + "&followedUserName="+ followedUserName)
    .map((res)=> res)
  }

  getFollowers(userName: string){
    return this.http.get(environment.appURLs.apiURL + "/social/getfollowersusers/" + userName)
    .map((res)=>res.json())
  }

  getFollowings(userName : string){
     return this.http.get(environment.appURLs.apiURL + "/social/getfollowingusers/" + userName)
    .map((res)=>res.json())
  }

}
