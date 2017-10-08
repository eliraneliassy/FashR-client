import { EmailProblemComponent } from './email-problem/email-problem.component';
import { EmailnotsupportedComponent } from './emailnotsupported/emailnotsupported.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const LOGIN_ROUTER : Routes = [
    {path:'', children: [
        {path:'',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'emailnotsupported',component:EmailnotsupportedComponent},
        {path:'permission-denied',component:EmailProblemComponent},
    ]}
];

export const loginRouting = RouterModule.forChild(LOGIN_ROUTER);
