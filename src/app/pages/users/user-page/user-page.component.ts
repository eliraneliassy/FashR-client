import { UpdateProfilePictureComponent } from '../update-profile-picture/update-profile-picture.component';
import { MdDialog } from '@angular/material';
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
  user : any ={};

  self: boolean = false;
  mouseOvered: boolean = false;


  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private userM: UserManagerService,
    private socialM: SocialManagerService,
    private dialog : MdDialog
  ) {

  }

  private loadUserDetails() {
    let currentUser;
    this.authService.user.subscribe((res) => {
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
    this.self = false;
  }

  profilePictureUpdate(){
    if(this.self == false){
      return;
    }
    let dialogRef = this.dialog.open(UpdateProfilePictureComponent);
    dialogRef.componentInstance.userName = this.userId;
     dialogRef.afterClosed().subscribe(result => {
       if(result.s3Url != ""){
        this.user.userDeatiles.imageUrl = result.s3Url;
       }
      else{
        this.user.userDeatiles.imageUrl = result.demoUrl;
      }
      
    });
  }

  checkSelfProfile():void{
    if(this.self){
      this.mouseOvered = true;
    }
    else{
      this.mouseOvered = false;
    }
  }





}
