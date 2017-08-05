import { Subscription } from 'rxjs/Rx';
import { AuthService } from './../../services/auth-service.service';
import { FeedService } from './../../services/feed-service.service';
import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'fash-r-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth: boolean = false;
 
  constructor(private feedService: FeedService,
    private auth: AuthService) {
   
      this.auth.isAuthenticated.subscribe((res) => {
        this.isAuth = res;
    })

  }


  items: any = [];
  page: number = 0;
  isLoad: boolean = false;


  ngOnInit() {

    this.feedService.getFeed(this.page)
      .subscribe((res) => {
        this.items = res.slice(0, 8);

      })
      
  }

   

}
