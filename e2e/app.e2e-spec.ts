import { TICompanionPage } from './app.po';

describe('ticompanion App', () => {
  let page: TICompanionPage;

  beforeEach(() => {
    page = new TICompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
