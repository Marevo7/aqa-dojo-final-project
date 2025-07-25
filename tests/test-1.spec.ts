import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('https://www.zara.com/ua/')
	await page
		.getByRole('button', { name: 'Відхилити необов’язкові файли cookie' })
		.click()
	await page.getByRole('link', { name: 'Пошук' }).click()
	await page
		.getByRole('searchbox', { name: 'Введення тексту для пошуку' })
		.click()
	await page
		.getByRole('searchbox', { name: 'Введення тексту для пошуку' })
		.fill('z1975')
	await page
		.getByRole('searchbox', { name: 'Введення тексту для пошуку' })
		.press('Enter')
	await expect(
		page.locator('.product-add-to-cart__button').nth(1)
	).toBeVisible()
	for (let i = 0; i < 3; i++) {
		await page.locator('.product-add-to-cart__button').nth(1).click()
	}
	//await page.locator('.product-add-to-cart__button').nth(1).click()
	await page.getByRole('button', { name: '32' }).click()
	await page.getByRole('button', { name: 'Закрити' }).click()
	await page.locator('.product-add-to-cart__button').first().click()
	await page.getByRole('button', { name: '34' }).click()
	await page.getByRole('button', { name: 'Закрити' }).click()
	await page.locator('.product-add-to-cart__button').first().click()
	await page.getByRole('button', { name: '36' }).click()
	await page.getByRole('button', { name: 'Закрити' }).click()
})
