import { EssboardFrontedPage } from './app.po';

describe('essboard-fronted App', function() {
  let page: EssboardFrontedPage;

  beforeEach(() => {
    page = new EssboardFrontedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
