import { Routes } from '@angular/router';
import { PostsComponent } from './containers/posts/posts.component';
import { PostDetailContainerComponent } from './containers/post-detail-container/post-detail-container.component';
import { PostExistsGuard } from './guards/post-exists';
export const PostsRoutes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    {
        path: 'posts', component: PostsComponent,
        children: [
            {
                path: ':postId',
                component: PostDetailContainerComponent,
                canActivate: [PostExistsGuard]
            }]
    }
];