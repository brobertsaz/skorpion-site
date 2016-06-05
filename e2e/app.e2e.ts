import { SkorpionSitePage } from './app.po';

describe('skorpion-site App', function() {
  let page: SkorpionSitePage;

  beforeEach(() => {
    page = new SkorpionSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('skorpion-site works!');
  });
});
