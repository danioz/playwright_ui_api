import { Page } from '@playwright/test';

export class AbstractPage {
  constructor(public readonly page: Page) {}
  async getRandomNumber(min: number, max: number): Promise<number> {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1) + min);

    return randomNumber;
  }
}
