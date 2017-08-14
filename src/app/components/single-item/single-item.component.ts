import { isNullOrUndefined } from 'util';
import { NavigationExtras, Router } from '@angular/router';
import { UserManagerService } from './../../services/user-manager-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'fash-r-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item : any;
  @Input() bottom: boolean = false;
  @Input() userDetails : boolean = false;
  private imageurl;
  user = {
    userName: "",
    displayName: ""
  };

  starthover : boolean = false;

  constructor(private sanitizer: DomSanitizer,
  private userM : UserManagerService,
  private router: Router) { 
    
  }

  ngOnInit() {
    this.imageurl = this.sanitizer.bypassSecurityTrustStyle(this.item.imageUrl);
    console.log(this.item);

  }

  goToUser(){
    this.router.navigate(['users',this.item.userName]);
  }

  goToProduct(){
    if(this.item.productUrl == null){
      return;
    }
    window.open(this.item.productUrl,"_blank");
  }

}
