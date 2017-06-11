import { EvsappPage } from './app.po';

describe('evsapp App', () => {
  let page: EvsappPage;

  beforeEach(() => {
    page = new EvsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
