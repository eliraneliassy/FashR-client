import { FeedComponent } from './feed/feed.component';


import { Routes, RouterModule } from '@angular/router';

const FEED_ROUTER : Routes = [
    {path:'', children: [
        {path:'',component:FeedComponent},
        
    ]}
];

export const feedRouting = RouterModule.forChild(FEED_ROUTER);
