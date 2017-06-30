import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './../../directives/infinite-scroll.directive';
import { NgModule } from '@angular/core';
import { SingleItemComponent } from "app/components/single-item/single-item.component";

@NgModule({
  imports:[CommonModule],
  declarations: [InfiniteScrollDirective, SingleItemComponent],
  exports: [InfiniteScrollDirective,
    SingleItemComponent
  ]
})
export class SharedModule { }
