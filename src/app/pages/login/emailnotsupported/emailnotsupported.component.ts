import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailnotsupported',
  templateUrl: './emailnotsupported.component.html',
  styleUrls: ['./emailnotsupported.component.scss']
})
export class EmailnotsupportedComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  paramsSubscription : Subscription;
  userId : string;

  ngOnInit() {
    this.paramsSubscription =
    this.router.params
      .subscribe((params: Params) => {
        this.userId = params['id'];
      });

  }

}
