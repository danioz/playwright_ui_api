import { expect, test } from '@playwright/test';
import { MainMenu } from '../../pages/main-menu-page';
import { GearPage } from 'pages/gear-page';
import Tag from '../../support/tag';
import { HomePage } from 'pages/home-page';

test.describe('Gear page', () => {
  let mainMenu: MainMenu;
  let gearPage: GearPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    mainMenu = new MainMenu(page);
    gearPage = new GearPage(page);
    homePage = new HomePage(page);
    await page.goto(homePage.homePageUrl);
  });

  test(`Click Gear option from main menu.${Tag.TAG_SECTION}${Tag.SMOKE_TEST}${Tag.ALL}`, async ({ page, isMobile }) => {
    if (isMobile) {
      await mainMenu.mobileOpenAllGear();
    } else await mainMenu.gearOption.click();
    expect(await gearPage.breadcrumb.innerText()).toEqual('Gear');
    await expect(page).toHaveURL(gearPage.gearUrl);
    expect(await gearPage.bagsCategory, 'Bags category was not visible.').toBeVisible();
    expect(await gearPage.fitnessEquipmentCategory, 'Fitness Equipment category was not visible.').toBeVisible();
    expect(await gearPage.watchesCategory, 'Watches category was not visible.').toBeVisible();
  });

  test(`Gear submenu options check.${Tag.TAG_SECTION}${Tag.SMOKE_TEST}${Tag.ALL}`, async ({ isMobile }) => {
    if (isMobile) {
      await mainMenu.mobileOpenGearSubmenu();
    } else await mainMenu.gearOption.hover();
    const allGear = isMobile ? mainMenu.mobileAllGear : mainMenu.gearOption;
    expect(await allGear.getAttribute('class')).toContain('ui-state-focus');
    expect(await mainMenu.submenuBags).toBeVisible();
    expect(await mainMenu.submenuFitnessEquipment).toBeVisible();
    expect(await mainMenu.submenuWatches).toBeVisible();
  });
});
