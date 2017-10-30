import { CraigslistAngularPage } from './app.po';

describe('craigslist-angular App', () => {
  let page: CraigslistAngularPage;

  beforeEach(() => {
    page = new CraigslistAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
