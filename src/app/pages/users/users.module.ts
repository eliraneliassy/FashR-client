import { userRouting } from './users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersComponent } from './users/users.component';
import { MdTabsModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    userRouting,
    MdTabsModule
    
  ],
  declarations: [UserPageComponent, UsersComponent]
})
export class UsersModule { }
