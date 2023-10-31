import { Page, expect } from '@playwright/test';
import { AbstractPage } from 'support/abstractPage';

export class HomePage extends AbstractPage {
  readonly homePageUrl = '/';
  readonly promoWidget = this.page.locator('.blocks-promo');
  readonly productList = this.page.locator('.block-products-list');
  readonly adBlock = this.page.locator('.adsbygoogle');
  readonly logo = this.page.locator('.header.content > a');
  readonly navigation = this.page.locator('.menu > nav');
  readonly signIn = this.page.locator('.li:nth-child(3) > a');
  readonly logIn = this.page.locator('.li.authorization-link');
  readonly hotSellers = this.page.locator('.block-products-list.grid');
  readonly footer = this.page.locator('.page-wrapper > .footer > div');

  constructor(public readonly page: Page) {
    super(page);
  }

  async checkHomePage() {
    const elementsToBeVisible = [
      this.promoWidget,
      this.productList,
      this.navigation,
      this.hotSellers,
      this.logo,
      this.signIn,
      this.logIn,
    ];

    for (const elementToBeVisible of elementsToBeVisible) {
      expect(elementToBeVisible).toBeVisible;
      console.log(elementToBeVisible);
    }
  }
}
