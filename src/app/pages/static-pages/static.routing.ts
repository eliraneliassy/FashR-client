import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SayHelloComponent } from './say-hello/say-hello.component';

import { Routes, RouterModule } from '@angular/router';

const STATIC_ROUTES : Routes = [
    {path:'', children: [
        {path:'contact',component:SayHelloComponent},
        {path:'about',component:AboutUsComponent},
        {path:'meettheteam',component:MeetTheTeamComponent},
        {path:'faq',component:FaqComponent},
        {path:'terms',component:TermsComponent},
    ]}
];

export const staticRouting = RouterModule.forChild(STATIC_ROUTES);
