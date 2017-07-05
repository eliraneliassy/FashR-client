import { AboutUsComponent } from './about-us/about-us.component';
import { SayHelloComponent } from './say-hello/say-hello.component';

import { Routes, RouterModule } from '@angular/router';

const STATIC_ROUTES : Routes = [
    {path:'', children: [
        {path:'contact',component:SayHelloComponent},
        {path:'about',component:AboutUsComponent},
    ]}
];

export const staticRouting = RouterModule.forChild(STATIC_ROUTES);
