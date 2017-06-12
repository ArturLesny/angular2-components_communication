import { Angular2TestIoComponentPage } from './app.po';

describe('angular2-test-io-component App', () => {
  let page: Angular2TestIoComponentPage;

  beforeEach(() => {
    page = new Angular2TestIoComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
