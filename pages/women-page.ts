import { Page } from '@playwright/test';
import { AbstractPage } from 'support/abstractPage';

export class WomenPage extends AbstractPage {
  readonly womenMenuLabel = this.page.getByRole('menuitem', { name: ' Women' });
  readonly titleHeading = this.page.locator('#page-title-heading');
  readonly itemCategory = this.page.locator('li.item.category20');
  readonly womenTopsMenuLabel = this.page.locator('.nav-2-1');
  readonly womenBottomsMenuLabel = this.page.locator('.nav-2-2');
  readonly womenJacketsMenuLabel = this.page.locator('.nav-2-1-1');
  readonly womenHoodiesAndSweatshirtsMenuLabel = this.page.locator('.nav-2-1-2');
  readonly womenTeesMenuLabel = this.page.locator('.nav-2-1-3');
  readonly womenBrasAndTanksMenuLabel = this.page.locator('.nav-2-1-4');
  readonly womenPantsMenuLabel = this.page.locator('.nav-2-2-1');
  readonly womenShortsMenuLabel = this.page.locator('.nav-2-2-2');
  readonly womenUrl = './women.html';

  constructor(page: Page) {
    super(page);
  }
}
