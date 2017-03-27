import { FeedService } from './../../services/feed-service.service';
import { Component, OnInit, HostListener, Inject } from '@angular/core';


@Component({
  selector: 'fash-r-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private feedService : FeedService) { }

  items: any =[];
  page: number = 0;
   max = (window.screen.height);

  
    
@HostListener("window:scroll", ['$event'])
onWindowScroll(event) {
 console.log(event);
 let pos = (document.documentElement.scrollTop || document.body.scrollTop);
  
   //console.log(pos);
  
 if(pos == this.max)   {
  console.log(10);
 }
    
    
}

  ngOnInit() {
     console.log(this.max);
    this.feedService.getFeed()
      .subscribe((res)=>{
        //debugger
        this.items = res;
        console.log(this.items)
      })
  }

}
