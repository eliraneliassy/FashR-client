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
  isLogedIn: boolean = false;
  

  constructor(private auth:AuthService, 
  private router : Router) {
    if(this.auth.user){
      this.isLogedIn = true;
    }
  }    
  ngOnInit() {
    
  }

  logout(){
    this.auth.logout();
    this.isLogedIn = false;
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
