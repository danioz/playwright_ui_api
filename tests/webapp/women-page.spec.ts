import { expect, test } from '@playwright/test';
import { WomenPage } from '../../pages/women-page';
import Tag from '../../support/tag';
import { MainMenu } from 'pages/main-menu-page';
import { HomePage } from 'pages/home-page';

test.describe('Women page', () => {
  let womenPage: WomenPage;
  let mainMenu: MainMenu;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    womenPage = new WomenPage(page);
    mainMenu = new MainMenu(page);
    homePage = new HomePage(page);
  });

  test(`Verify if you are on Women page.${Tag.SMOKE_TEST}${Tag.ALL}`, async ({ page, isMobile }) => {
    await page.goto(homePage.homePageUrl);
    if (isMobile) {
      await mainMenu.mobileOpenAllWomen();
    } else await mainMenu.womenOption.click();
    await expect(page).toHaveURL(womenPage.womenUrl);
    await expect(page).toHaveTitle('Women');
    await expect(mainMenu.womenOption).toHaveClass(/active/);
    expect(await womenPage.titleHeading.innerText()).toContain('Women');
    expect(await womenPage.itemCategory.innerText()).toContain('Women');
  });

  test(`Hover Women Label and verify categories.${Tag.SMOKE_TEST}${Tag.ALL}`, async ({ page, isMobile }) => {
    await page.goto(homePage.homePageUrl);
    if (isMobile) {
      await mainMenu.mobileOpenWomenSubmenu();
    } else await womenPage.womenMenuLabel.hover();
    await expect(womenPage.womenTopsMenuLabel).toBeInViewport();
    expect(await womenPage.womenTopsMenuLabel.innerText()).toContain('Tops');
    await expect(womenPage.womenBottomsMenuLabel).toBeInViewport();
    expect(await womenPage.womenBottomsMenuLabel.innerText()).toContain('Bottoms');
    await womenPage.womenTopsMenuLabel.hover();
    expect(await womenPage.womenJacketsMenuLabel).toBeInViewport();
    expect(await womenPage.womenJacketsMenuLabel.innerText()).toContain('Jackets');
    expect(await womenPage.womenHoodiesAndSweatshirtsMenuLabel).toBeInViewport();
    expect(await womenPage.womenHoodiesAndSweatshirtsMenuLabel.innerText()).toContain('Hoodies & Sweatshirts');
    expect(await womenPage.womenTeesMenuLabel).toBeInViewport();
    expect(await womenPage.womenTeesMenuLabel.innerText()).toContain('Tees');
    expect(await womenPage.womenBrasAndTanksMenuLabel).toBeInViewport();
    expect(await womenPage.womenBrasAndTanksMenuLabel.innerText()).toContain('Bras & Tanks');
    await womenPage.womenBottomsMenuLabel.hover();
    expect(await womenPage.womenPantsMenuLabel).toBeInViewport();
    expect(await womenPage.womenPantsMenuLabel.innerText()).toContain('Pants');
    expect(await womenPage.womenShortsMenuLabel).toBeInViewport();
    expect(await womenPage.womenShortsMenuLabel.innerText()).toContain('Shorts');
  });
});
