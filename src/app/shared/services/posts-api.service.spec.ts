import { TestBed, inject } from '@angular/core/testing';
import { PostsApiService } from './posts-api.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Post } from '../../posts/models/post';


describe('PostsApiService', () => {
  let service: PostsApiService = null;
  let mockBackend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        PostsApiService
      ]
    });
  });

  beforeEach(inject([PostsApiService, MockBackend], (_service: PostsApiService, _mockbackend: MockBackend) => {
    service = _service;
    mockBackend = _mockbackend;
  }));

  const mockedResponse = [
    {
      userId: 1,
      id: 1,
      title: "title1",
      body: "body1"
    },
    {
      userId: 2,
      id: 2,
      title: "title2",
      body: "body2"
    }
  ];

  const url = 'https://jsonplaceholder.typicode.com/posts'


  it('should call api and return mocked response', () => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const responseOptions = new ResponseOptions({
        body: JSON.stringify(mockedResponse)
      });
      connection.mockRespond(new Response(responseOptions));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(url);
    });
    service.getAll().subscribe(response => {
      expect(response).toEqual(mockedResponse);
    });
  });

});
