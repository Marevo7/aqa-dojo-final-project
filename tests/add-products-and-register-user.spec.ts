import { test, expect, Locator } from '@playwright/test'
import { SearchResultPage } from '../zara/pages/SearchResultPage'
import { SearchComponent } from '../zara/components/SearchComponent'
import { HeaderComponents } from '../zara/components/HeaderComponents'
import { ProductCartComponents } from '../zara/components/ProductCartComponents'
import { RegistrationPage } from '../zara/pages/RegistrationPage'
import { BasketPage } from '../zara/pages/BasketPage'
import { StartPage } from '../zara/pages/StartPage'
import { setupStealth } from '../utils/stealth-utils'

test(
	'Add some products to basket and try to create new user',
	{ tag: '@medium level' },
	async ({ page }) => {
		const headerComponent = new HeaderComponents(page)
		const searchComponent = new SearchComponent(page)
		const search = new SearchResultPage(page)
		const productCartComponents = new ProductCartComponents(page)
		const registrationPage = new RegistrationPage(page)
		const basketPage = new BasketPage(page)
		const startPage = new StartPage(page)
		await setupStealth(page)
		await page.goto('https://www.zara.com')
		//await startPage.acceptCookies()
		await startPage.goToStore()
		await headerComponent.goToSearchButton.click()
		await page.waitForTimeout(2000)
		await searchComponent.searchInput.fill('z1975')
		await searchComponent.searchInput.press('Enter')
		await page.waitForTimeout(2000)
		await search.addToBasketButton.nth(1).waitFor({ state: 'visible' })
		for (let i = 0; i < 3; i++) {
			await search.addToBasketButton.nth(1).click()
		}
		await page.waitForTimeout(2000)

		const sizes = await productCartComponents.sizeInStock.all()

		if (sizes.length > 0) {
			await sizes[0].click()
			await search.closeModalProductAddedToBasket()
			for (let i = 1; i < sizes.length; i++) {
				await search.addToBasketButton.nth(1).waitFor({ state: 'visible' })
				await search.addToBasketButton.nth(1).click()
				await sizes[i].click()
				await search.closeModalProductAddedToBasket()
			}
		} else {
			console.log('Size are not found')
		}
		await headerComponent.basket.click()
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
		await basketPage.goToRegistrationPage()
		const registrationInputs: Locator[] = [
			registrationPage.emailInput,
			registrationPage.passwordInput,
			registrationPage.firstNameInput,
			registrationPage.lastNameInput,
		]
		const formInputErrors: Locator[] = [
			registrationPage.emailInputError,
			registrationPage.passwordInputError,
			registrationPage.firstNameInputError,
			registrationPage.passwordInputError,
		]
		for (const input of registrationInputs) {
			await input.click()
		}
		for (const error of formInputErrors) {
			await expect(error).toBeVisible()
		}
		for (const input of registrationInputs) {
			await input.fill(
				'testtesttesttesttesttesttesttesttesttesttesttesttesttesttest60'
			)
		}
		for (const error of formInputErrors) {
			await expect(error).toBeVisible()
		}
	}
)
