import { PostsPage } from './app.po';

describe('posts App', () => {
  let page: PostsPage;

  beforeEach(() => {
    page = new PostsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
