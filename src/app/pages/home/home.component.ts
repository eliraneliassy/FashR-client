import { FeedService } from './../../services/feed-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private feedService : FeedService) { }

  items: any =[];

  ngOnInit() {
    this.feedService.getFeed()
      .subscribe((res)=>{
        this.items = res;
        console.log(this.items)
      })
  }

}
