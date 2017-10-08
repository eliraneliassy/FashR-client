import { AuthService } from './../../../services/auth-service.service';
import { FeedService } from './../../../services/feed-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  isLoad: boolean = false;
  page: number = 0;
  items = [];
  userName : string;
  loading : boolean = true;
  
  constructor(private feedService: FeedService,private authService : AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe((user)=>{
      this.userName = user.uid;
      this.getFeed(this.userName);

    })
  }

  private getFeed(userName : string) {
    this.feedService.getFeed(0, userName)
      .subscribe((res) => {
        this.loading = false;
        this.items = res;
      })
  }

    loadMore(event) {
    if(this.isLoad == true){
      return;
    }
    if (event) {
      this.page++;
      this.isLoad = true;
      this.feedService.getFeed(this.page, this.userName).subscribe((res) => {
        if (res == null) {
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


}
