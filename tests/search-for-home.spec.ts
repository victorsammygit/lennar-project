import { expect, test, } from '@playwright/test';
import { URL } from '../constants';

test('Search for move-in ready home in Dallas', async ({page}) => {
    await page.goto(URL);
    await expect(page).toHaveURL(/assignment--lennar.netlify/);

    const cookieAccept = page.getByRole('button', { name: 'I accept' });
    await cookieAccept.click();
    
    await page.getByTestId('search-bar-homepage').fill('Dallas');
    await page.getByTestId('search-bar-result-cities-regions-0').click();

    await page.getByText(/\d+ available homes/).click();
    await expect(page.getByText('Move-in ready').first()).toBeVisible();

})