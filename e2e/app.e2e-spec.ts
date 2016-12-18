import { ExitPage } from './app.po';

describe('exit App', function() {
  let page: ExitPage;

  beforeEach(() => {
    page = new ExitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
