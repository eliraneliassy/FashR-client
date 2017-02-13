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

  constructor(private auth:AuthService, 
  private router : Router) { }
  isLogin: boolean = true;
  ngOnInit() {
    if(!this.auth.user)
      this.isLogin = false;
  }

  logout(){
    this.auth.logout();
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
