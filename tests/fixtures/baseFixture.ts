import { test as base, chromium, Browser } from '@playwright/test'
import { RegistrationPage } from '../../zara/pages/RegistrationPage'
import { BasketPage } from '../../zara/pages/BasketPage'
import { StartPage } from '../../zara/pages/StartPage'
import { SearchResultPage } from '../../zara/pages/SearchResultPage'
import { SearchComponent } from '../../zara/components/SearchComponent'
import { HeaderComponents } from '../../zara/components/HeaderComponents'
import { ProductCartComponents } from '../../zara/components/ProductCartComponents'
import fs from 'fs'

const storageStatePath = 'utils/storageState.json'

type Pages = {
	registrationPage: RegistrationPage
	basketPage: BasketPage
	startPage: StartPage
	searchResultPage: SearchResultPage
	searchComponents: SearchComponent
	headerComponents: HeaderComponents
	productCartComponents: ProductCartComponents
	storageState?: string
}

export const test = base.extend<Pages>({
	storageState: async ({ browser }, use) => {
		if (process.env.CREATE_STORAGE !== 'true') {
			await use(undefined)
			return
		}

		if (!fs.existsSync(storageStatePath)) {
			const context = await browser.newContext()
			const page = await context.newPage()
			await page.goto('https://www.zara.com')
			const startPage = new StartPage(page)
			await startPage.acceptCookies()
			await context.storageState({ path: storageStatePath })
			await context.close()
		}
		await use(storageStatePath)
	},

	registrationPage: async ({ page }, use) => {
		const registrationPage = new RegistrationPage(page)
		await use(registrationPage)
	},
	basketPage: async ({ page }, use) => {
		const basketPage = new BasketPage(page)
		await use(basketPage)
	},
	startPage: async ({ page }, use) => {
		const startPage = new StartPage(page)
		await use(startPage)
	},
	searchResultPage: async ({ page }, use) => {
		const searchResultPage = new SearchResultPage(page)
		await use(searchResultPage)
	},
	searchComponents: async ({ page }, use) => {
		const searchComponents = new SearchComponent(page)
		await use(searchComponents)
	},
	headerComponents: async ({ page }, use) => {
		const headerComponents = new HeaderComponents(page)
		await use(headerComponents)
	},
	productCartComponents: async ({ page }, use) => {
		const productCartComponents = new ProductCartComponents(page)
		await use(productCartComponents)
	},
})
