import { Page, expect } from "@playwright/test";
import { URL } from "../constants";

export async function navigateToSignInOption(page: Page) {
    await page.goto(URL);
    await expect(page).toHaveURL(/assignment--lennar.netlify/);

    const cookieAccept = page.getByRole('button', { name: 'I accept' });
    await cookieAccept.click();

    await page.getByLabel('open-panel').and(page.getByTestId('header-menu')).click();

    await page.getByRole('link', { name: 'Sign in or create' }).click();

    if (cookieAccept) {
        await cookieAccept.click();
        await page.getByLabel('open-panel').and(page.getByTestId('header-menu')).click();
        await page.getByRole('link', { name: 'Sign in or create' }).click();
        await expect(page.getByText('Sign in to your account', {exact: true})).toBeVisible();
    }
}