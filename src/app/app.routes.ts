import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    {path: '', loadChildren:'./posts/posts.module#PostsModule'}
];