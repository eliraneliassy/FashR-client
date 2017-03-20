import { UserRegisterModel } from './../../../models/userLoginModel';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }
  passwordValid = true;
  userNameExist = false;
  ngOnInit() {
  }

  onSubmit(user: UserRegisterModel){
    if(user.password !== user.confirmPassword){
      this.passwordValid = false;
      return;
    }
    this.auth.createUser(user);
  }

}
