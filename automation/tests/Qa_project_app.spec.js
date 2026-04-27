// @ts-check
import { test, expect } from '@playwright/test';

test('Browser login validation', async ({ page }) => {
   await page.goto('http://localhost:5173/')
   await expect(page).toHaveURL('http://localhost:5173/');
   await 
});