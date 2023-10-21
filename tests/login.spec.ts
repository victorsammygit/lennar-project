import { test, } from '@playwright/test';
import { navigateToSignInOption } from '../helpers/helpers';
import { PASSWORD } from '../constants';

test('Log in', async ({page}) => {

    await navigateToSignInOption(page);

    await page.getByPlaceholder(' ').fill('sammy.escoto@gmail.com');

    await page.getByRole('button', { name: 'Continue' }).click();
    
    await page.getByPlaceholder(' ').fill(PASSWORD);

    await page.getByRole('button', { name: 'Continue' }).click();
})
