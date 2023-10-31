import { expect, test } from '@playwright/test';
import Tag from '../../support/tag';
import { HomePage } from '../../pages/home-page';
import { HeaderPage } from '../../pages/header-page';
import { FooterPage } from '../../pages/footer-page';

test.describe('Home page', () => {
  let homePage: HomePage;
  let headerPage: HeaderPage;
  let footerPage: FooterPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    headerPage = new HeaderPage(page);
    footerPage = new FooterPage(page);
  });

  test(`Check if homepage has all elements ${Tag.TAG_SECTION}${Tag.ALL}`, async ({ page }) => {
    await page.goto(homePage.homePageUrl, { waitUntil: 'networkidle' });

    expect(headerPage.header.isVisible(), 'header page is visible');

    expect(footerPage.footer.isVisible(), 'footer page is visible');

    await homePage.checkHomePage();
  });
});
