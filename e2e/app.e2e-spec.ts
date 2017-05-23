import { MyFoodAppgPage } from './app.po';

describe('my-food-appg App', () => {
  let page: MyFoodAppgPage;

  beforeEach(() => {
    page = new MyFoodAppgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
