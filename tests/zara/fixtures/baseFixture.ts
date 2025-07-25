import { test as base } from '@playwright/test'
import { RegistrationPage } from '../pages/RegistrationPage'
import { BasketPage } from '../pages/BasketPage'
import { StartPage } from '../pages/StartPage'
import { SearchResultPage } from '../pages/SearchResultPage'
import { SearchComponent } from '../components/SearchComponent'
import { HeaderComponents } from '../components/HeaderComponents'
import { ProductCartComponents } from '../components/ProductCartComponents'
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
