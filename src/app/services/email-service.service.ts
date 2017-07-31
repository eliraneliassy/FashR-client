import { environment } from './../../environments/environment';
import { ContactUs } from './../models/contactUs';
import { helpers } from './helpers';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

  sendContactUsEMail(contactUs : ContactUs){

    const body = helpers.formatBody(contactUs);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({headers : headers});

    return this.http.post(environment.appURLs.apiURL + "/email/contactus",body,options)
  }

}
