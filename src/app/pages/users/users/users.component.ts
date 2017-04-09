import { AuthService } from './../../../services/auth-service.service';
import { Subscription } from 'rxjs/Rx';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
  constructor(
    private userM: UserManagerService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe((res) => {
      if (res.uid != undefined) {
        this.sub = this.userM.getAllUsersProfile(res.uid)
        .subscribe((res) => {
          this.users = res;
          console.log(this.users)
        })
      }
   


    })

  }

}
