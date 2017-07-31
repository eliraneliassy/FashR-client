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
  private user;

  constructor(private sanitizer: DomSanitizer,
  private userM : UserManagerService) { 
    
  }

  ngOnInit() {
    this.imageurl = this.sanitizer.bypassSecurityTrustStyle(this.item.imageUrl);
    if(this.userDetails == true){
      this.userM.getUser(this.item.userName)
      .subscribe((res)=>{
        this.user = res;
      })
    }

  }

}
