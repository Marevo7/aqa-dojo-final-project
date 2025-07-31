import { test } from './fixtures/baseFixture'
import { Locator, expect } from '@playwright/test'
import { setupStealth } from '../utils/stealth-utils'

test(
	'Add some products to basket and try to create new user',
	{ tag: '@medium level' },
	async ({
		page,
		registrationPage,
		basketPage,
		startPage,
		searchResultPage,
		searchComponents,
		headerComponents,
		productCartComponents,
	}) => {
		await setupStealth(page)
		await page.goto('/')
		await startPage.selectCountry(page, 'ua')
		await startPage.selectLanguage(page, 'en')
		await test.step('Open start page and go to search page', async () => {
			await startPage.goToStore()
			await headerComponents.goToSearchButton.click()
			await page.waitForTimeout(2000)
		})

		await test.step('Input product title and search for it', async () => {
			await searchComponents.searchInput.fill('z1975')
			await searchComponents.searchInput.press('Enter')
			await page.waitForTimeout(2000)
		})

		await test.step('Add all available sizes of 1 product to a basket', async () => {
			for (let i = 0; i < 3; i++) {
				await searchResultPage.addToBasketButton.nth(1).click()
			}
			await page.waitForTimeout(2000)

			const sizes = await productCartComponents.sizeInStock.all()

			if (sizes.length > 0) {
				await sizes[0].click()
				await searchResultPage.closeModalProductAddedToBasket()
				for (let i = 1; i < sizes.length; i++) {
					await searchResultPage.addToBasketButton.nth(1).click()
					await sizes[i].click()
					await searchResultPage.productAddedModalWindowCloseButton.waitFor({
						state: 'visible',
					})
					await searchResultPage.closeModalProductAddedToBasket()
					await page.waitForTimeout(500)
				}
			} else {
				console.log('Sizes are not found')
			}
		})

		await test.step('Go to basket and remove every 2nd product', async () => {
			await headerComponents.basket.click()
			await page.waitForTimeout(2000)
			const removeButtons = basketPage.productQtyDecrease
			const count = await removeButtons.count()
			for (let i = count - 1; i >= 0; i--) {
				if ((i + 1) % 2 === 0) {
					await removeButtons.nth(i).click()
					await page.waitForTimeout(500)
				}
			}
			await basketPage.continueShopping()
		})

		await test.step('Go to registration page and validate inputs', async () => {
			await basketPage.goToRegistrationPage()
			const registrationInputs: Locator[] = [
				registrationPage.emailInput,
				registrationPage.passwordInput,
				registrationPage.firstNameInput,
				registrationPage.lastNameInput,
			]
			for (const input of registrationInputs) {
				await input.click()
				await page.click('body', { position: { x: 0, y: 0 } })
			}
			expect(registrationPage.inputError).toHaveCount(4)
			for (const input of registrationInputs) {
				await input.fill(
					'testtesttesttesttesttesttesttesttesttesttesttesttesttesttest60'
				)
				await page.click('body', { position: { x: 0, y: 0 } })
			}
			expect(registrationPage.inputError).toHaveCount(4)
		})
	}
)
