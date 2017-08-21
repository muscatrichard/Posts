import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import * as fromPosts from '../../reducers';
import * as posts from '../../actions/posts';

@Component({
  selector: 'app-post-detail-container',
  templateUrl: './post-detail-container.component.html',
  styleUrls: ['./post-detail-container.component.scss']
})
export class PostDetailContainerComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store<fromPosts.State>, route: ActivatedRoute) { 
    // console.log('postdetailcontainer');
     this.actionsSubscription = route.params.subscribe(params => store.dispatch(new posts.SelectAction(params.postId)));
    // this.actionsSubscription = route.params.map(params => new posts.SelectAction(params.postId))
    // .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
