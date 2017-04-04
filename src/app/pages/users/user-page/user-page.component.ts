import { Subscription } from 'rxjs/Rx';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, OnDestroy {
 
  user : {id: string};
  paramsSubscription : Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id : this.route.snapshot.params['id']
    }

    this.paramsSubscription =
     this.route.params
      .subscribe((params: Params)=>{
        this.user.id = params['id'];
      })
  }

     ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
    }



  

}
