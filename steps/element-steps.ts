import { expect, Locator, test } from '@playwright/test';

export class ElementSteps {
  async expectElementBeInViewport(element: Locator) {
    await test.step(`I check if ${element} is in viewport`, async () => {
      await expect(element).toBeInViewport();
    });
  }
}
