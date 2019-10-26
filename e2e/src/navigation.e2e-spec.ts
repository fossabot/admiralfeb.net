import { by, browser, element } from 'protractor';

describe('Navigation tests', () => {

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  describe('Redirects', () => {

    it('/ should redirect to /home', async () => {
      await browser.get('/');
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual('http://localhost:4200/home');
    });

    it('/code should redirect to /code/_/main', async () => {
      await browser.get('/code');
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual('http://localhost:4200/code/_/main');
    });

    it('/code/_ should redirect to /code/_/main', async () => {
      await browser.get('/code/_');
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual('http://localhost:4200/code/_/main');
    });

    it('/wishlist should redirect to /wishlist/_/main', async () => {
      await browser.get('/wishlist');
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual('http://localhost:4200/wishlist/_/main');
    });

    it('/wishlist/_ should redirect to /wishlist/_/main', async () => {
      await browser.get('/wishlist/_');
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual('http://localhost:4200/wishlist/_/main');
    });
  });
});
