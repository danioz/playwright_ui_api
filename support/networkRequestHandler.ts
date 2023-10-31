import { Page } from '@playwright/test';
export class NetworkRequestHandler {
  constructor(readonly page: Page) {}

  async getResponseBody(requestName: RegExp) {
    const response = await (await this.page.waitForRequest(requestName)).response();
    const responseBody = await response?.json();
    return responseBody;
  }

  async getSubtotalAmountFromResponse(requestName: RegExp): Promise<string> {
    const price = (await this.getResponseBody(requestName)).cart.subtotalAmount;
    return parseInt(price).toFixed(0);
  }
}
