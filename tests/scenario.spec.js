const {test, expect} = require('@playwright/test');
test.use({ viewport: null });

test('Search Jaket', async ({page}) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByPlaceholder('Search entire store here...').fill('jaket');
  await expect(page.getByText('Jaket For Men')).toBeVisible();
  await expect(page.getByText('jakets for men')).toBeVisible();
  await expect(page.getByText('jaket for women')).toBeVisible();
})
test('Filtering Price Function', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByPlaceholder('Search entire store here...').fill('jaket');
    await page.getByRole('option', { name: 'Jaket For Men' }).click();
    await page.getByRole('link', { name: ' Set Ascending Direction' }).click();
    await expect(page.getByText('$39.00')).toBeVisible();
    
})
test('Add to Cart', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByPlaceholder('Search entire store here...').fill('jaket');
    await page.getByRole('option', { name: 'Jaket For Men' }).click();
    await page.getByRole('link', { name: ' Set Ascending Direction' }).click();
    await page.locator('li').filter({ hasText: 'Bolo Sport Watch Rating: 67%' }).locator('button').click();
    await expect(page.getByRole('link', { name: ' My Cart 1 1 items' })).toBeVisible();
    await page.getByRole('link', { name: ' My Cart 1 1 items' }).click();
    //updateCart
    await page.getByRole('link', { name: 'View and Edit Cart' }).click();
    await page.getByRole('spinbutton', { name: 'Qty' }).click();
    await page.getByRole('spinbutton', { name: 'Qty' }).fill('2');
    await page.getByRole('button', { name: 'Update Shopping Cart' }).click();
    await page.getByRole('link', { name: ' My Cart 2 2 items' }).click();
    await expect(page.getByRole('link', { name: ' My Cart 2 2 items' })).toBeVisible();
})