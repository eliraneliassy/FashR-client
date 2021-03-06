import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SuggestionsService {

  constructor(private http: Http) { 

  }

  getSuggestions(term: string){
    return this.http.get(environment.appURLs.apiURL + "/suggestions?term=" + term)
    .map((res) => res.json())
  }

}
