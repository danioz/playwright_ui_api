import { Page, test } from '@playwright/test';

export class KeyboardSteps {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async pressKeyboardButton(button: string) {
    await test.step(`I press ${button} button on keyboard`, async () => {
      await this.page.keyboard.press(button, { delay: 200 });
    });
  }
}
