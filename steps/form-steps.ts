import { Locator, test } from '@playwright/test';

export class FormSteps {
  async fillTextFieldWithText(textField: Locator, text: string) {
    await test.step(`I fill ${textField} with text [${text}]`, async () => {
      await textField.fill(text);
    });
  }
}
