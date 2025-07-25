import { test as base } from '@playwright/test'
import { RegistrationPage } from '../../zara/pages/RegistrationPage'
import { BasketPage } from '../../zara/pages/BasketPage'
import { StartPage } from '../../zara/pages/StartPage'
import { SearchResultPage } from '../../zara/pages/SearchResultPage'
import { SearchComponent } from '../../zara/components/SearchComponent'
import { HeaderComponents } from '../../zara/components/HeaderComponents'
import { ProductCartComponents } from '../../zara/components/ProductCartComponents'
type Pages = {
	registrationPage: RegistrationPage
	basketPage: BasketPage
	startPage: StartPage
	searchResultPage: SearchResultPage
	searchComponents: SearchComponent
	headerComponents: HeaderComponents
	productCartComponents: ProductCartComponents
}

export const test = base.extend<Pages>({
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
