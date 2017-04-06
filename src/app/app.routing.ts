import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule' },
    {path:'404' , component: NotFoundComponent},
    {path:'**', redirectTo:'/404'}

];

export const routing = RouterModule.forRoot(APP_ROUTES);