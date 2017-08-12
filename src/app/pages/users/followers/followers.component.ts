import { isNullOrUndefined } from 'util';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocialManagerService } from '../../../services/social-manager.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataSource } from "@angular/cdk/table";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit, OnDestroy {

  constructor(private socialManagerService: SocialManagerService) {

  }

  @Input() user;
  @Input() isFollowers: boolean;
  followers: any = [];

  ngOnInit() {
    if (this.isFollowers) {
      
      this.socialManagerService.getFollowers(this.user.userDeatiles.userName)
        .subscribe((res: any) => {
          if (res != null && res.length > 0) {
            this.followers = this.followers.concat(res);
            this.followers.forEach(element => {
              if (isNullOrUndefined(element.displayName)) {
                element.displayName =
                  element.firstName + " " + element.lastName;
              }
            });
          }
        })
    }

    else {
      this.socialManagerService.getFollowings(this.user.userDeatiles.userName)
        .subscribe((res: any) => {
          if (res != null && res.length > 0) {
            this.followers = res;
            this.followers.forEach(element => {
              
              if (isNullOrUndefined(element.displayName)) {
                element.displayName =
                  element.firstName + " " + element.lastName;
              }
            });
          }

        })
    }

  }

    public ngOnDestroy(): void {
        this.followers = [];
    }
}
