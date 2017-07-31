import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor(private http: Http) {
    
   }

   countItemsAndUsers(){
     return this.http.get(environment.appURLs.apiURL + "/users/countItemsAndUsers")
    .map((res)=> res.json())
   }

}
