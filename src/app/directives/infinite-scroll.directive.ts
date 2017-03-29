import { Directive, ElementRef, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';

export const DISTANCE_CONFIG : number = 200;


@Directive({
  selector: '[appInfiniteScroll]'
})

export class InfiniteScrollDirective {

  @Output() loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isInLoad : boolean = false;

  constructor() { }
  getDistFromBottom () {
  
  var scrollPosition = window.pageYOffset;
  var windowSize     = window.innerHeight;
  var bodyHeight     = document.body.offsetHeight;

  return Math.max(bodyHeight - (scrollPosition + windowSize), 0);

}

  @HostListener("window:scroll", ['$event'])
    onWindowScroll(event) {
      if(this.isInLoad)
        return;

      var distance = this.getDistFromBottom();
      if(distance < DISTANCE_CONFIG){
          this.loadMore.emit(true);
          this.isInLoad = true;

        }
  
}

}
