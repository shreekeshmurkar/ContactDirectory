import { ContactDirectoryPage } from './app.po';

describe('contact-directory App', function() {
  let page: ContactDirectoryPage;

  beforeEach(() => {
    page = new ContactDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
