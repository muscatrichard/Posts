import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    {path: '', loadChildren:'app/posts/posts.module#PostsModule'}
];