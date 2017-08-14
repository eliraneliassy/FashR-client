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

  loading : boolean = true;
  
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFeed();
  }

  private getFeed() {
    this.feedService.getFeed(0)
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
      this.feedService.getFeed(this.page).subscribe((res) => {
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
