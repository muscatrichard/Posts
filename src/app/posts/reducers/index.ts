import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPosts from './posts';
import * as fromRoot from '../../reducers';

export interface PostsState {
    posts: fromPosts.State;
}

export interface State extends fromRoot.State {
    'posts': PostsState;
}

export const reducers = {
    posts: fromPosts.reducer
};

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPostEntitiesState = createSelector(
    getPostsState,
    (state: PostsState) => state.posts
);

export const getPosts = createSelector(
    getPostEntitiesState,
    fromPosts.getPosts
);

export const getSelectedPost = createSelector(
    getPostEntitiesState,
    fromPosts.getSelectedPost
);

export const getIsPostSelected = createSelector(
    getPostEntitiesState,
    fromPosts.getIsPostSelected
);

export const getPostsLoading = createSelector(
    getPostEntitiesState,
    fromPosts.getLoading
);
export const getPostsLoaded = createSelector(
    getPostEntitiesState,
    fromPosts.getLoaded
);
