import { Locator, test } from '@playwright/test';

export class MouseSteps {
  async clickOnElement(element: Locator, forceClick = false, clickCount = 1) {
    await test.step(`I click ${clickCount} time on ${element} element`, async () => {
      await element.click({
        force: forceClick,
        delay: 200,
        timeout: 5000,
        clickCount: clickCount,
      });
    });
  }
}
