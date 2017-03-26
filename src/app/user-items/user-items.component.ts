import { AuthService } from './../services/auth-service.service';
import { FeedService } from './../services/feed-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fash-r-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit {

  constructor(private feedService : FeedService,
  private authService: AuthService) { }

  items : any = [];
  

  ngOnInit() {
    this.authService.af.auth.subscribe(user=>{
      if(user){
        //debugger
      this.feedService.getUsersFeed(user.uid)
      .subscribe((res)=>{
       
        this.items = res;
        console.log(this.items)
       
      })
      }
    });
     
      
    
    
  }

}
