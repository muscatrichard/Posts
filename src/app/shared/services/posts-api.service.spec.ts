import { TestBed, inject } from '@angular/core/testing';

import { PostsApiService } from './posts-api.service';

describe('PostsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsApiService]
    });
  });

  it('should be created', inject([PostsApiService], (service: PostsApiService) => {
    expect(service).toBeTruthy();
  }));
});
