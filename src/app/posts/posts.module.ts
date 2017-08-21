import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './containers/posts/posts.component';
import { PostsRoutes } from './posts.routes';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/index';
import { PostsEffects } from './effects/posts';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { PostDetailContainerComponent } from './containers/post-detail-container/post-detail-container.component';
import { PostExistsGuard } from './guards/post-exists';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(PostsRoutes),
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ],
  declarations: [PostsListComponent, PostDetailComponent, PostsComponent, PostComponent, PostDetailContainerComponent],
  providers: [PostExistsGuard]
})
export class PostsModule { }
