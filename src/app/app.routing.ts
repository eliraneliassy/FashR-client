import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES :Routes = [
    {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);