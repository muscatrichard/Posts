import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Post } from '../../posts/models/post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class PostsApiService {

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Post[]> {
    return this.http.get(URL)
      .map(response => response.json());
  }
}
