import { SharedModule } from './../../shared/shared/shared.module';
import { AppModule } from './../../app.module';
import { InfiniteScrollDirective } from './../../directives/infinite-scroll.directive';
import { UserItemsComponent } from './user-items/user-items.component';

import { userRouting } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  imports: [
    CommonModule,
    userRouting,
    SharedModule,
  ],
  declarations: [
    UserPageComponent, 
    UsersComponent,
    UserItemsComponent,
    ]
})
export class UsersModule { }