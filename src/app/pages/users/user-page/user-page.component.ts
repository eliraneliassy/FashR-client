import { SocialManagerService } from './../../../services/social-manager.service';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { AuthService } from './../../../services/auth-service.service';
import { Subscription } from 'rxjs/Rx';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  userId: string;
  paramsSubscription: Subscription;
  user: any = {
    'userDeatiles': {
      'imageUrl': 'http://www.expogeorgia.ge/wp-content/uploads/2015/09/anonymous-user.png'
    }
  };

  self: boolean = false;


  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private userM: UserManagerService,
    private socialM: SocialManagerService

  ) {

  }

  private loadUserDetails() {
    let currentUser;
    this.authService.user.subscribe((res) => {
      debugger
      if (res != null && res.uid != undefined) {
        currentUser = res.uid;
        if(res.uid == this.userId){
          this.self = true;
        }
        this.userM.getUserProfileDetails(this.userId, currentUser)
          .subscribe((res) => {
            if (res != null) {
              this.user = res;
            }
          })

      }

    })

  }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.loadUserDetails();

    this.paramsSubscription =
      this.route.params
        .subscribe((params: Params) => {
          this.userId = params['id'];
          this.loadUserDetails();
        });



    //   this.authService.user.subscribe(user => {
    //   if (user.uid != undefined) {
    //     this.userM.getUserProfileDetails(user.uid)
    //     .subscribe((res) => {
    //       if (res != null) {
    //        this.user = res;
    //        console.log(this.user)
    //       }
    //     })
    //   }
    // });


  }

  follow() {
    let user = this.authService.getUser()
      .subscribe((res) => {
        this.socialM.follow(res.uid, this.userId)
          .subscribe(() => {
            this.user.isFollowed = true;
            this.user.countFollowers++;
          })
      })
  }

  unFollow(){
     let user = this.authService.getUser()
      .subscribe((res) => {
        this.socialM.unFollow(res.uid, this.userId)
          .subscribe(() => {
            this.user.isFollowed = false;
            this.user.countFollowers--;
          })
      })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }





}
