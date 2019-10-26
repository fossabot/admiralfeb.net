import { by, browser, element } from 'protractor';
import { HomePage } from './pages';

describe('Home Page tests', () => {
  const homePage = new HomePage();

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await homePage.getPage();
  });

  it('should have the correct title', async () => {
    const title = await homePage.getPageTitle();
    expect(title).toEqual(`Admiralfeb's Website`);
  });
});
