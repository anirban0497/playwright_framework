import { test, expect,Page} from '@playwright/test';

let mypage: Page;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    mypage = await context.newPage();

    await mypage.goto('https://www.saucedemo.com/');

});

test.afterAll(async ({browser}) => {
}); 


test('Login with valid credentials', async ({ }) => {
  
  await mypage.locator('[data-test="username"]').click();
  expect(mypage.locator('[data-test="username"]')).toBeVisible();
  expect(mypage.locator('[data-test="username"]')).toBeEnabled();
  expect(mypage.locator('[data-test="username"]')).toBeEmpty();
  await mypage.locator('[data-test="username"]').fill('standard_user');
  await mypage.locator('[data-test="username"]').press('Tab');
  await mypage.locator('[data-test="password"]').fill('secret_sauce');
  await mypage.locator('[data-test="password"]').press('Tab');
  await mypage.locator('[data-test="login-button"]').press('Enter');
});



test('Add items to cart with standard user', async ({  }) => {
  await mypage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await mypage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await mypage.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await mypage.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await mypage.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await mypage.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  await mypage.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
  await mypage.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await mypage.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await mypage.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await mypage.locator('[data-test="shopping-cart-link"]').click();
});




test('Complete checkout processs', async ({ }) => {
  await mypage.locator('[data-test="checkout"]').click();
  await mypage.locator('[data-test="firstName"]').click();
  await mypage.locator('[data-test="firstName"]').fill('anirban');
  await mypage.locator('[data-test="firstName"]').press('Tab');
  await mypage.locator('[data-test="lastName"]').fill('sikdar');
  await mypage.locator('[data-test="lastName"]').press('Tab');
  await mypage.locator('[data-test="postalCode"]').fill('abc@gmail.com');
  await mypage.locator('[data-test="continue"]').click();
  await mypage.locator('[data-test="item-quantity"]').nth(1).click();
  await mypage.locator('[data-test="finish"]').click();
  await mypage.locator('[data-test="back-to-products"]').click();
});


test('Logout', async ({  }) => {
  await mypage.getByRole('button', { name: 'Open Menu' }).click();
  await mypage.locator('[data-test="logout-sidebar-link"]').click();
});