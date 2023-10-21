import { expect, test, } from '@playwright/test';
import { HOMESITE, NAME, PHONENUM, USERNAME } from '../constants';

test('Navigate to specific homesite', async ({page}) => {
   
    await page.goto(HOMESITE);

    await expect(page.getByTestId('test').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule a tour' })).toBeVisible();


    const cookieAccept = page.getByRole('button', { name: 'I accept' });
    if (cookieAccept) {
        await cookieAccept.click();
    }

    await page.getByRole('link', { name: 'Schedule a tour' }).click();

    await page.waitForLoadState('domcontentloaded', { timeout: 15000 });
    await page.waitForLoadState('load', { timeout: 30000 });
    
    await page.getByLabel('Full name').click();
    await page.getByLabel('Full name').fill(NAME);

    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill(USERNAME);

    await page.getByLabel('Phone Number').click();
    await page.getByLabel('Phone Number').fill(PHONENUM);

    await page.locator('div').filter({ hasText: /^Select a state$/ }).nth(3).click();

    await page.getByText('Texas').click();

    await page.getByTestId('form-submit-button').click();

    await expect(page.getByText(/Thank you!/)).toBeVisible();

})