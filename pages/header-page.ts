import { Locator, Page } from '@playwright/test';
import { AbstractPage } from '../support/abstractPage';

export class HeaderPage extends AbstractPage {
  readonly header: Locator;
  readonly nav: Locator;

  constructor(page: Page) {
    super();
    this.header = page.locator('.page-header');
    this.nav = page.locator('.nav-sections');
  }
}
