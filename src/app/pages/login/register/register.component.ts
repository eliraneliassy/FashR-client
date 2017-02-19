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

  ngOnInit() {
  }

  onSubmit(user: UserRegisterModel){
    
    this.auth.createUser(user);
  }

}
