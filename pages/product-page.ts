import { Page, expect } from '@playwright/test';
import { AbstractPage } from 'support/abstractPage';

export class ProductPage extends AbstractPage {
  readonly size = this.page.locator('.size .swatch-option.text');
  readonly color = this.page.locator('.color .swatch-option');
  readonly addToCart = this.page.locator('#product-addtocart-button');
  readonly addToCartMessage = this.page.locator('.page.messages .message-success');
  readonly productTitle = this.page.locator('.page-title .base');
  readonly productPrice = this.page.locator('.product-info-main .price-wrapper');
  readonly quantityOfProducts = this.page.locator('#qty');
  readonly productUrl = 'https://magento.softwaretestingboard.com/ina-compression-short.html';
  readonly updateCartRequestUrl = /\/\?sections=cart.*&force_new_section_timestamp=true/;

  constructor(page: Page) {
    super(page);
  }

  async getAddToCartMessage(): Promise<string> {
    const productTitle = await this.productTitle.innerText();
    return `You added ${productTitle} to your shopping cart.`;
  }

  async checkAddToCartMessage() {
    expect(await this.addToCartMessage.innerText()).toContain(await this.getAddToCartMessage());
  }

  async getProductPrice(): Promise<string> {
    return (await this.productPrice.getAttribute('data-price-amount'))!;
  }
}
