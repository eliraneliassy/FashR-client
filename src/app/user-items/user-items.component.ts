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

 items: any =[];
  page: number = 0;
  isLoad: boolean = false;
  user: any;
  
  loadMore(event){
    
    if(event){
      this.page++;
      this.isLoad = true;
      this.feedService.getUsersFeed(this.user.uid, this.page).subscribe((res)=>{
        if(res == null){
          this.isLoad = true;
        }
        this.items = this.items.concat(res);
        console.log(this.items)
        this.isLoad=false;
      })
    }
  }

  ngOnInit() {
    this.authService.user.subscribe(user=>{
      if(user){
        //debugger
        this.user = user;
      this.feedService.getUsersFeed(user.uid,0)
      .subscribe((res)=>{
       
        this.items = res;
        console.log(this.items)
       
      })
      }
    });
     
      
    
    
  }

}
