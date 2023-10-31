import { Page } from '@playwright/test';

export class GearPage {
  readonly breadcrumb = this.page.locator('.breadcrumbs strong');
  readonly bagsCategory = this.page.locator('#narrow-by-list2 a[href$="/bags.html"]');
  readonly fitnessEquipmentCategory = this.page.locator('#narrow-by-list2 a[href$="/fitness-equipment.html"]');
  readonly watchesCategory = this.page.locator('#narrow-by-list2 a[href$="/watches.html"]');
  readonly gearUrl = './gear.html';

  constructor(public readonly page: Page) {}
}
