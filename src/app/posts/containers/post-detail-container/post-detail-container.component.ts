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

  constructor(private store: Store<fromPosts.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params.subscribe(params =>
      store.dispatch(new posts.SelectAction(params.postId))
    );
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
    this.store.dispatch(new posts.DeselectAction())
  }
}
