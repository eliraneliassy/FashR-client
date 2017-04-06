import { Subscription } from 'rxjs/Rx';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }


  users : any = [];
  sub : Subscription;
  constructor(
    private userM : UserManagerService
  ) { }

  ngOnInit() {
    this.sub = this.userM.getAllusers()
    .subscribe((res)=>
    {
      this.users = res;
      console.log(this.users)
    })
  }



}
