import { AngularDesignAndTemplatingPage } from './app.po';

describe('angular-design-and-templating App', () => {
  let page: AngularDesignAndTemplatingPage;

  beforeEach(() => {
    page = new AngularDesignAndTemplatingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
