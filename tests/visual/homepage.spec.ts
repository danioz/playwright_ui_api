import { expect, test } from '@playwright/test';
import Tag from '../../support/tag';
import { HomePage } from '../../pages/home-page';
import { HeaderPage } from '../../pages/header-page';
import { FooterPage } from '../../pages/footer-page';

test(`Check if homepage has all elements ${Tag.TAG_SECTION}${Tag.VISUAL}${Tag.ALL}`, async ({ page }) => {
  const homePage = new HomePage(page);
  const headerPage = new HeaderPage(page);
  const footerPage = new FooterPage(page);
  const timeout = 10_000;
  const elementsToBeVisible = [headerPage.header, footerPage.footer, homePage.promoWidget, homePage.productList];

  await page.goto(homePage.homePageUrl, { waitUntil: 'networkidle' });
  for (const elementToBeVisible of elementsToBeVisible) {
    await expect(elementToBeVisible).toBeVisible({ timeout });
  }
  expect(await page.screenshot({ animations: 'disabled', mask: [homePage.adBlock] })).toMatchSnapshot('homePage.png');
});
