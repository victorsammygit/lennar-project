import { expect, test, } from '@playwright/test';
import { navigateToSignInOption } from '../helpers/helpers';
import { PASSWORD } from '../constants';

test('Sign Up', async ({page}) => {
    await navigateToSignInOption(page);

    await expect(page.getByText('Sign in to your account')).toBeVisible();

    await page.getByRole('link', { name: 'Get started' }).click();
    
    await page.getByTestId('email').fill('sammy.escoto@gmail.com')

    await page.getByTestId('sign-submit-button').click();
      
    /**
     * The best practice would be to either read from a .env file
     * or generate the password and store it somewhere (AWS Secrets Manager)
     */
    
    await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
    
    await page.getByLabel('Confirm new password').fill(PASSWORD);


})