import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import * as fromPosts from '../../reducers';
import { Post } from '../../models/post';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post$: Observable<Post>;

  constructor(private store: Store<fromPosts.State>) {
    this.post$ = store.select(fromPosts.getSelectedPost);
  }
}
