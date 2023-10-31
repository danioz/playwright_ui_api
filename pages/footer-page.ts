import { Locator, Page } from '@playwright/test';
import { AbstractPage } from '../support/abstractPage';

export class FooterPage extends AbstractPage {
  readonly footer: Locator;

  constructor(page: Page) {
    super();
    this.footer = page.locator('.page-footer');
  }
}
