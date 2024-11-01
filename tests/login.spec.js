const {test, expect} = require('@playwright/test');

test('Login Negative', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const title = await page.title();
    expect(title).toBe('OrangeHRM');

    
    
    const negativeCases = [
        { username: '', password: 'admin123' },     
        { username: 'Admin', password: '' },         
        { username: 'WrongUser', password: 'admin123' }, 
        { username: 'Admin', password: 'WrongPass' }     
    ];

    for (const caseData of negativeCases) {
        await page.getByPlaceholder('Username').fill(caseData.username);
        await page.getByPlaceholder('Password').fill(caseData.password);
        await page.getByRole('button', { name: 'Login' }).click();
        
    // const element = page.locator('Invalid credentials');
    // await expect(element).toHaveCount(2);
    await page.reload();
    }
})

test('Login Positive', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await expect(page.getByRole('button')).toContainText('Login');

  //const element = page.locator('heading', { name: 'Dashboard' });
  //await expect(element).toHaveCount(2);
})