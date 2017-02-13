import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  

  

}
