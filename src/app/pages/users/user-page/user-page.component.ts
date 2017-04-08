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
  user: any = {};

  follow : boolean = false;


  constructor(private route: ActivatedRoute,
   private authService: AuthService, 
   private userM: UserManagerService,
   private socialM : SocialManagerService
  ) { }



  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];

    this.userM.getUserProfileDetails(this.userId)
      .subscribe((res) => {
        if (res != null) {
          this.user = res;
        }
      })

    this.paramsSubscription =
      this.route.params
        .subscribe((params: Params) => {
          this.userId = params['id'];
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

  Follow(){
    this.socialM.follow(this.authService.user, this.userId)
    .subscribe(()=>{
      this.follow = true;
    });
    
    
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }





}
