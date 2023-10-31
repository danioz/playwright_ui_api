import { expect, Locator, Page, test } from '@playwright/test';

export class ScreenshotSteps {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async performElementScreenshot(element: Locator, snapshotName: string) {
    await test.step(`I make a visual verification of ${element} element`, async () => {
      expect
        .soft(await element.screenshot({ animations: 'disabled' }))
        .toMatchSnapshot(snapshotName, { maxDiffPixelRatio: 0.7 });
    });
  }

  async performPageScreenshot(snapshotName: string, element?: Locator) {
    await test.step(`I make a visual verification of page`, async () => {
      element
        ? expect
            .soft(await this.page.screenshot({ animations: 'disabled', mask: [element] }))
            .toMatchSnapshot(snapshotName, { maxDiffPixelRatio: 0.7 })
        : expect
            .soft(await this.page.screenshot({ animations: 'disabled' }))
            .toMatchSnapshot(snapshotName, { maxDiffPixelRatio: 0.7 });
    });
  }
}
