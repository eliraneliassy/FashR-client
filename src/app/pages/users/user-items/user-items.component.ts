import { FeedService } from './../../../services/feed-service.service';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { AuthService } from './../../../services/auth-service.service';

import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'fash-r-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit, OnDestroy, OnChanges {
 


  constructor(private feedService: FeedService,
    private authService: AuthService,
    private userM: UserManagerService) { }

  items: any = [];
  page: number = 0;
  isLoad: boolean = false;
  //user: any;
  @Input() userId: string;


  loadMore(event) {

    if (event) {
      this.page++;
      this.isLoad = true;
      this.feedService.getUsersFeed(this.userId, this.page).subscribe((res) => {
        if (res == null) {
          this.isLoad = true;
        }
        if (this.items != null) {
          this.items = this.items.concat(res);
          console.log(this.items)
          this.isLoad = false;
        }
      })
    }
  }

  ngOnInit() {
    // this.authService.user.subscribe(user => {
    //   if (user) {
    //     this.userM.getUser(user.uid).subscribe((res) => {
    //       if (res != null) {
    //         this.firebaseUser = res;
    //       }
    //     })

    //     this.userId = user;
    //     this.feedService.getUsersFeed(user.uid, 0)
    //       .subscribe((res) => {
    //         this.items = res;
    //       })

    //   }
    // });


   this.getFeed();
  }


     ngOnChanges(changes: SimpleChanges): void {
      this.items = [];
      this.getFeed();
      
    }

    private getFeed(){
         this.feedService.getUsersFeed(this.userId, 0)
      .subscribe((res) => {
        this.items = res;
      })
    }


  ngOnDestroy(): void {

  }

}
