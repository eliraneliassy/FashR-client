import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { feedRouting } from "app/pages/feed/feed.routing";

@NgModule({
  imports: [
    CommonModule,
    feedRouting,
    SharedModule
  ],
  declarations: [FeedComponent]
})
export class FeedModule { }
