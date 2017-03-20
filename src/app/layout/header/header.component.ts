import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './../../pages/login/login/login.component';
import { AuthService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fash-r-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLogedIn : Observable<boolean>;

  constructor(private auth:AuthService, 
              private router : Router,
              private http: Http) {
    this.isLogedIn = this.auth.isLoggedIn();
    
  }    
  ngOnInit() {
    
  }

  logout(){
    this.auth.logout();
    
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
