import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { PostsApiService } from '../../shared/services/posts-api.service';
import * as posts from '../actions/posts';
import { Post } from '../models/post';

@Injectable()
export class PostsEffects {
    @Effect()
    loadPosts$: Observable<Action> = this.actions$
        .ofType(posts.LOAD)
        .switchMap(() =>
            this.postsApiService.getAll()
                .map((response: Post[]) => new posts.LoadSuccessAction(response))
                .catch(error => of(new posts.LoadFailAction(error)))
        );

    constructor(
        private actions$: Actions,
        private postsApiService: PostsApiService
    ) { }
}