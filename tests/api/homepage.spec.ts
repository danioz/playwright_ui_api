import { expect, test } from '@playwright/test';
import HttpStatusCode from '../../support/http-status-code';

test('HomePage status should be 200', async ({ request, baseURL }) => {
  const response = await request.get(baseURL!);

  expect(response.status()).toBe(HttpStatusCode.OK);
});
