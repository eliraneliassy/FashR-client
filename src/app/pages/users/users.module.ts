import { FormsModule } from '@angular/forms';
import { UpdateProfilePictureComponent } from './update-profile-picture/update-profile-picture.component';
import { CountoDirective } from '../../directives/counto.directive';
import { SharedModule } from './../../shared/shared/shared.module';
import { AppModule } from './../../app.module';
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
    FormsModule
  ],
  declarations: [
    UserPageComponent, 
    UsersComponent,
    UserItemsComponent,
    CountoDirective,
    UpdateProfilePictureComponent
    ]
  ,
  entryComponents:[UpdateProfilePictureComponent]
})
export class UsersModule { }