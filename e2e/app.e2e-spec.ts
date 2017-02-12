import { FashRClientPage } from './app.po';

describe('fash-r-client App', function() {
  let page: FashRClientPage;

  beforeEach(() => {
    page = new FashRClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fashR works!');
  });
});
