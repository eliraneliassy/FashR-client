import { SocialManagerService } from './../../../services/social-manager.service';
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
 

  users: any = [];
  currentUser : any;
  sub: Subscription;
  intermediate = 0;
  intermediate1= 0;

  counts : ICounts = {
    itemsCount : 0,
    usersCount : 0
  };

  isLoading: boolean = false;
  page: number = 0;

  
  constructor(
    private userM: UserManagerService,
    private authService: AuthService,
    private appService: AppService,
    private socialService : SocialManagerService
  ) {

   }

  

  ngOnInit() {
    this.authService.getUser().subscribe((res) => {
      if (res.uid != undefined) {
        this.currentUser = res;
        this.sub = this.userM.getAllUsersProfile(res.uid,this.page)
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

  loadMore(event) {
    debugger
    if(this.isLoading == true){
      return;
    }
    if (event) {
      this.page++;
      this.isLoading = true;
      this.userM.getAllUsersProfile(this.currentUser.uid,this.page).subscribe((res) => {
        if (res == null || res.length == 0) {
          this.isLoading = true;
          return;
        }
        if (this.users != null) {
          let newUsers = this.normailzeUsersDisplayNames(res);
          this.users = this.users.concat(res);
          this.isLoading = false;
        }
      })
    }
  }

  follow(user, index){
    this.socialService.follow(this.currentUser.uid, user.userDeatiles.userName)
    .subscribe(()=>{
      let newUser = user;
      newUser.isFollowed = true;
      this.users[index] = newUser;
    })
  }

  unFollow(user, index){
    this.socialService.unFollow(this.currentUser.uid, user.userDeatiles.userName)
    .subscribe(()=>{
      let newUser = user;
      newUser.isFollowed = false;
      this.users[index] = newUser;
    })
  }

  normailzeUsersDisplayNames(users){
    let newUsers = users;
    newUsers.forEach(element => {
      if (isNullOrUndefined(element.userDeatiles.displayName)) {
        element.userDeatiles.displayName =
          element.userDeatiles.firstName + " " + element.userDeatiles.lastName;
      }
    });

    return newUsers;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  

}
