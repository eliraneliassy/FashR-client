import { UserManagerService } from './../../services/user-manager-service.service';
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
  firebase_user : any;
  user:any;
  

  constructor(private auth:AuthService, 
              private router : Router,
              private http: Http,
              private userService: UserManagerService) {

    this.isLogedIn = this.auth.isLoggedIn();
    this.auth.getUser().subscribe((res)=> {
      this.firebase_user = res;
      debugger

      this.user = userService.getCurrentUser(this.firebase_user.uid);
      console.log(this.user);
    });
    
  }    
  ngOnInit() {
    console.log(this.user)
  }

  logout(){
    this.auth.logout();
    
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
