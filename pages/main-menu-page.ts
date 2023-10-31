import { expect, Page } from '@playwright/test';

export class MainMenu {
  readonly mobileMenu = this.page.locator('.header .action.nav-toggle');
  readonly mobileAllGear = this.page.locator('.nav-4 .ui-menu-item.all-category a');
  readonly gearOption = this.page.locator('#ui-id-6');
  readonly womenOption = this.page.locator('.nav-2');
  readonly mobileAllWomen = this.page.locator('.nav-2 .ui-menu-item.all-category');
  readonly submenuBags = this.page.locator('#ui-id-25');
  readonly submenuFitnessEquipment = this.page.locator('#ui-id-26');
  readonly submenuWatches = this.page.locator('#ui-id-27');

  constructor(public readonly page: Page) {}

  async mobileOpenAllGear() {
    await this.mobileOpenGearSubmenu();
    await this.mobileAllGear.click();
  }

  async mobileOpenAllWomen() {
    await this.mobileOpenWomenSubmenu();
    await this.mobileAllWomen.click();
  }

  async mobileOpenWomenSubmenu() {
    await expect(async () => {
      await this.mobileMenu.click();
      await this.womenOption.click({ timeout: 1000 });
    }).toPass({ timeout: 10_000 });
  }

  async mobileOpenGearSubmenu() {
    await expect(async () => {
      await this.mobileMenu.click();
      await this.gearOption.click({ timeout: 1000 });
    }).toPass({
      timeout: 10_000,
    });
  }
}
