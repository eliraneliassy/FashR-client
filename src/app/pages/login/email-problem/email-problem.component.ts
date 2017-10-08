import { UserManagerService } from '../../../services/user-manager-service.service';
import { AuthService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-problem',
  templateUrl: './email-problem.component.html',
  styleUrls: ['./email-problem.component.scss']
})
export class EmailProblemComponent implements OnInit {

  constructor(private authSerivce: AuthService, private userManager: UserManagerService) { }

  user = null;
  disable : boolean = false;

  ngOnInit() {
    this.authSerivce.getUser()
    .subscribe((user)=>{
      this.user = user;
    })
  }

  getLink(){
    this.disable = true;
    this.userManager.linkAccount(this.user.uid)
    .subscribe((redirectUrl)=>{
      window.location.replace(redirectUrl);
    })
    
  }

}
