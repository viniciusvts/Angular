import { DataBidingPage } from './app.po';

describe('data-biding App', () => {
  let page: DataBidingPage;

  beforeEach(() => {
    page = new DataBidingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
