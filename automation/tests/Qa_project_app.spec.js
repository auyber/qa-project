// @ts-check
import { test } from '@playwright/test';

test('Browser login validation', async ({ page }) => {
  await page.goto('http://localhost:5173/');
});