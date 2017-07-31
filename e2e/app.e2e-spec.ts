import { AngularTestsPage } from './app.po';

describe('angular-tests App', () => {
  let page: AngularTestsPage;

  beforeEach(() => {
    page = new AngularTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
