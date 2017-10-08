


import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FeedService } from './../../../services/feed-service.service';
import { UserManagerService } from './../../../services/user-manager-service.service';
import { AuthService } from './../../../services/auth-service.service';

import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'fash-r-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit, OnDestroy {

  constructor(private feedService: FeedService,
    private authService: AuthService,
    private userM: UserManagerService,
    private router : Router,
    private route: ActivatedRoute) { }

  items: any = [];
  page: number = 0;
  isLoad: boolean = false;
  userId : string;
  @Input() userIdEvent: EventEmitter<string>;
  @Input() selfEvent : EventEmitter<boolean>;

  @Input() userInformation : EventEmitter<object>;
  self : boolean = false;



  loadMore(event) {
    if(this.isLoad == true){
      return;
    }
    if (event) {
      this.page++;
      this.isLoad = true;
        this.feedService.getUsersFeed(this.userId, this.page,this.self).subscribe((res) => {
          if (res == null || res.length == 0) {
            this.isLoad = true;
            return;
          }
          if (this.items != null) {
            this.items = this.items.concat(res);
            this.isLoad = false;
          }
        })  
      
    }
  }

  ngOnInit() {
    this.items = [];

    this.userInformation.subscribe((res:any)=>{
      this.self = res.isSelf;
      this.userId = res.userId;
      this.getFeed(this.self)
    })
    
  }

  private getFeed(isSelf: boolean) {
    this.items = [];
    this.feedService.getUsersFeed(this.userId, 0, isSelf)
      .subscribe((res) => {
        this.items = res;
      })
  }


  ngOnDestroy(): void {
    
  }

}
