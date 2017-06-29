import { FeedService } from './../../services/feed-service.service';
import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef  } from '@angular/core';


@Component({
  selector: 'fash-r-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private feedService : FeedService ) { }

  items: any =[];
  page: number = 0;
  isLoad: boolean = false;


  ngOnInit() {
   
    this.feedService.getFeed(this.page)
      .subscribe((res)=>{
        this.items = res.slice(0,8);

      })
  }

  loadMore(event){
    
    if(event){
      this.page++;
      this.isLoad = true;
      this.feedService.getFeed(this.page).subscribe((res)=>{
        if(res == null){
          this.isLoad = true;
        }
        this.items = this.items.concat(res);
        console.log(this.items)
        this.isLoad=false;
      })
    }
  }


}
