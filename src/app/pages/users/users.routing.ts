import { UsersComponent } from './users/users.component';
import { UserPageComponent } from './user-page/user-page.component';

import { Routes, RouterModule } from '@angular/router';

const USERS_ROUTER : Routes = [
    {path:'', children: [
        {path:'',component:UsersComponent},
        {path:':id',component:UserPageComponent},
    ]}
];

export const userRouting = RouterModule.forChild(USERS_ROUTER);
