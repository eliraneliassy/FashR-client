import { MdDialogModule, MdInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './../../directives/infinite-scroll.directive';
import { NgModule } from '@angular/core';
import { SingleItemComponent } from "app/components/single-item/single-item.component";

@NgModule({
  imports:[CommonModule, RouterModule, MdDialogModule,MdInputModule],
  declarations: [InfiniteScrollDirective, SingleItemComponent],
  exports: [InfiniteScrollDirective,
    SingleItemComponent,
    MdDialogModule,
    MdInputModule,
    
  ]
})
export class SharedModule { }
