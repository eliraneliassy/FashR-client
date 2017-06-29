import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'fash-r-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item : any;
  private imageurl;
  constructor(private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {
    this.imageurl = this.sanitizer.bypassSecurityTrustStyle(this.item.imageUrl);

  }

}
