import { AuthService } from './../../services/auth-service.service';
import { FeedService } from '../../services/feed-service.service';
import { isNullOrUndefined } from 'util';
import { NavigationExtras, Router } from '@angular/router';
import { UserManagerService } from './../../services/user-manager-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'fash-r-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item: any;
  @Input() bottom: boolean = false;
  @Input() userDetails: boolean = false;
  @Input() self: boolean = false;
  
  mouseInside: boolean = false; 
  public imageurl;



  constructor(private sanitizer: DomSanitizer,
    private userM: UserManagerService,
    private router: Router,
  private feedManager : FeedService,
private authService : AuthService) {

  }

  ngOnInit() {
    this.imageurl = this.sanitizer.bypassSecurityTrustStyle(this.item.imageUrl);
    this.authService.getUser().subscribe((user: firebase.User)=>{
      if(this.item.userName == user.uid){
        this.self = true;
      }
    })

  }

  goToUser() {
    this.router.navigate(['users', this.item.userName]);
  }

  goToProduct() {
    if (this.item.productUrl == null) {
      if (this.item.merchantData.websiteUrl == null) {
        return; 
      }
      else {
        window.open(this.item.merchantData.websiteUrl, "_blank");
      }
    }
    window.open(this.item.productUrl, "_blank");
  }

  mouseEnter(){
    if(!this.self){
      return;
    }
    this.mouseInside = true;
  }

  mouseLeave(){
    if(!this.self){
      return;
    }
    this.mouseInside = false;
  }

  hideItem(){
      this.feedManager.changeItemVisibility(this.item.href, false)
      .subscribe(()=>{
        this.item.productVisibility = false;
      })
  }

  showItem(){
    this.feedManager.changeItemVisibility(this.item.href, true)
    .subscribe(()=>{
      this.item.productVisibility = true;
    })
  }



}
