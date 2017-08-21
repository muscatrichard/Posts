import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import * as fromPosts from '../reducers';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getPostsLoaded, getPosts } from '../reducers/index';

@Injectable()

export class PostExistsGuard implements CanActivate {
    constructor(
        public store: Store<fromPosts.State>
    ) { }


    waitForPostsToLoad(): Observable<boolean> {
        return this.store
            .select(fromPosts.getPostsLoaded)
            .filter(loaded => loaded)
            .take(1);
    }


    postExists(id: string): Observable<boolean> {
        return this.store
            .select(fromPosts.getPosts)
            .map(posts => !!(_.first( _.filter(posts, {id: +(id)}))))
            .take(1);
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.waitForPostsToLoad().switchMap(() =>
          this.postExists(route.params['postId'])
        );
      }

}