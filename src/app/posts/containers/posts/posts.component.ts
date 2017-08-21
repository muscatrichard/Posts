import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post';
import * as fromPosts from '../../reducers';
import * as posts from '../../actions/posts';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>
  constructor(private store: Store<fromPosts.State>) {
    this.posts$ = store.select(fromPosts.getPosts);
  }

  ngOnInit() {
    this.store.dispatch(new posts.LoadAction());
  }

}
