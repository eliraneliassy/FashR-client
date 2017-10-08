import { Router } from '@angular/router';
import { UserLoginModel } from './../../../models/userLoginModel';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public notCorrent : boolean = false;
  errMsg : string = "";

  constructor(private auth:AuthService,
  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(userlogin: UserLoginModel){
    debugger
    this.auth.passwordLogin(userlogin)
    .then((res)=>{debugger; 
        this.router.navigate(['/feed']);
      },
     (rej)=>{
       debugger
      this.notCorrent = true;
      this.errMsg = rej.message;
    })
    
  }


}
