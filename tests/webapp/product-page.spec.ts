import { expect, test } from '@playwright/test';
import { ProductPage } from '../../pages/product-page';
import Tag from '../../support/tag';
import { NetworkRequestHandler } from '../../support/networkRequestHandler';

test.describe('Product page', () => {
  let productPage: ProductPage;
  let networkRequestHandler: NetworkRequestHandler;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    networkRequestHandler = new NetworkRequestHandler(page);
  });

  test(`Add product to cart.${Tag.TAG_SECTION}${Tag.SMOKE_TEST}${Tag.ALL}`, async ({ page }) => {
    await page.goto(productPage.productUrl);
    await productPage.size.filter({ hasText: '28' }).click();
    await productPage.color.nth(2).click();
    await productPage.addToCart.click();
    await productPage.checkAddToCartMessage();
  });

  test(`Check the subtotal price of the cart${Tag.TAG_SECTION}${Tag.SMOKE_TEST}${Tag.ALL}`, async ({ page }) => {
    const quatityOfProducts = await productPage.getRandomNumber(1, 10);
    await page.goto(productPage.productUrl);
    const productPrice = await productPage.getProductPrice();
    if (productPrice) {
      const subtotalPriceOfProducts = parseInt(productPrice) * quatityOfProducts;
      await productPage.size.filter({ hasText: '28' }).click();
      await productPage.color.nth(1).click();
      await productPage.quantityOfProducts.fill(quatityOfProducts.toString());
      await productPage.addToCart.click();

      const basketPrice = await networkRequestHandler.getSubtotalAmountFromResponse(productPage.updateCartRequestUrl);
      await expect(subtotalPriceOfProducts.toString()).toBe(basketPrice);
    } else {
      throw new Error('Product price is not available.');
    }
  });
});
