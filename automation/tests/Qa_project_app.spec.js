// @ts-check
import { test, expect } from '@playwright/test';

test('Browser login validation', async ({ page }) => {
   await page.goto('http://localhost:5173/')
   await expect(page).toHaveURL('http://localhost:5173/');
   await page.locator('#UserName').fill('usertest@gmail.com');
   await page.locator('#Password').fill('user123@#');
   await page.locator('button[type="submit"]').click();
   await page.locator('#root h1').waitFor();
   const title = await page.locator('#root h1').textContent();
   console.log(title);

});