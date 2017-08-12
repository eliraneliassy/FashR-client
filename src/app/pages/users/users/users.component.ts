import { isNullOrUndefined } from 'util';
import * as console from 'console';
import { element } from 'protractor';
import { AppService } from './../../../services/app-service.service';
import { AuthService } from './../../../services/auth-service.service';
import { Subscription } from 'rxjs/Rx';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


export interface ICounts{
    itemsCount : number,
    usersCount : number
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  users: any = [];
  sub: Subscription;
  intermediate = 0;
  intermediate1= 0;

  counts : ICounts = {
    itemsCount : 0,
    usersCount : 0
  };

  
  constructor(
    private userM: UserManagerService,
    private authService: AuthService,
    private appService: AppService
  ) {

   }

  ngOnInit() {
    this.authService.getUser().subscribe((res) => {
      if (res.uid != undefined) {
        this.sub = this.userM.getAllUsersProfile(res.uid)
          .subscribe((res) => {
            this.users = res;
            this.users.forEach(element => {
              if (isNullOrUndefined(element.userDeatiles.displayName)) {
                element.userDeatiles.displayName =
                  element.userDeatiles.firstName + " " + element.userDeatiles.lastName;
              }
            });
          })

      }

    })

    this.appService.countItemsAndUsers()
    .subscribe((res : ICounts)=>{
      this.counts = res;
    })

    

  }

}
