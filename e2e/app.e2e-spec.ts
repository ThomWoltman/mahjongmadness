import { MahjongMadnessPage } from './app.po';

describe('mahjong-madness App', () => {
  let page: MahjongMadnessPage;

  beforeEach(() => {
    page = new MahjongMadnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
