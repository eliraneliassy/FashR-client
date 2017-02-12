import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const LOGIN_ROUTER : Routes = [
    {path:'', children: [
        {path:'',component:LoginComponent},
        {path:'register',component:RegisterComponent},
    ]}
];

export const loginRouting = RouterModule.forChild(LOGIN_ROUTER);
