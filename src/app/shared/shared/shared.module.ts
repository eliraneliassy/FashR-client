import { MdDialogModule, MdTableModule, MdInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './../../directives/infinite-scroll.directive';
import { NgModule } from '@angular/core';
import { SingleItemComponent } from "app/components/single-item/single-item.component";
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
  imports:[CommonModule, RouterModule, MdDialogModule,MdTableModule,MdInputModule],
  declarations: [InfiniteScrollDirective, SingleItemComponent],
  exports: [InfiniteScrollDirective,
    SingleItemComponent,
    MdDialogModule,
    MdTableModule,
    MdInputModule,
    CdkTableModule 
  ]
})
export class SharedModule { }
