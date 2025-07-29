import { test, expect, Locator, Page } from '@playwright/test'
import { SearchComponent } from '../components/SearchComponent'

export class SearchResultPage {
	page: Page
	searchComponents: SearchComponent
	productCards: Locator
	productTitle: Locator
	productPrice: Locator
	productImage: Locator
	filtersButton: Locator
	viewOption2: Locator
	viewOption3: Locator
	accessibilityWidgetButton: Locator
	addToBasketButton: Locator
	addToWishListButton: Locator
	productAddedModalWindowCloseButton: Locator
	constructor(page: Page) {
		this.page = page
		this.searchComponents = new SearchComponent(page)
		this.productCards = page.locator(
			'products-category-grid-media-carousel-item'
		)
		this.productImage = page.locator('img[data-qa-qualifier="media-image"]')
		this.productPrice = page.locator('span.money-amount__main')
		this.productTitle = page.locator('h3')
		this.filtersButton = page.locator('button[data-qa-action="filters-button"]')
		this.viewOption2 = page
			.locator('button[data-qa-action="view-option-selector-button"]')
			.nth(0)
		this.viewOption3 = page
			.locator('button[data-qa-action="view-option-selector-button"]')
			.nth(1)
		this.accessibilityWidgetButton = page.locator(
			'button[data-qa-action="accessibility-widget-button-click"]'
		)
		this.addToBasketButton = page.locator(
			'button[data-qa-action="product-grid-open-size-selector"]'
		)
		this.addToWishListButton = page.locator(
			'button[data-qa-action="add-to-wishlist"]'
		)
		this.productAddedModalWindowCloseButton = page.locator(
			'button.zds-dialog-icon-button.zds-dialog-close-button.zds-drawer-close-button'
		)
	}
	async openFilters() {
		await this.filtersButton.click()
	}
	async changeViewTo2() {
		await this.viewOption2.click()
	}
	async changeViewTo3() {
		await this.viewOption3.click()
	}
	async clearSearchInput() {
		await this.page
			.locator('svg[data-qa-action="search-products-form-clear"]')
			.click()
	}
	async addToBasket() {
		await this.addToBasketButton.click()
	}
	async addToWishList() {
		await this.addToWishListButton.click()
	}
	async filterByWoman() {
		await this.searchComponents.womanFilter.click()
	}
	async filterByMan() {
		await this.searchComponents.manFilter.click()
	}
	async filterByKids() {
		await this.searchComponents.kidsFilter.click()
	}
	async closeModalProductAddedToBasket() {
		await this.productAddedModalWindowCloseButton.click()
	}
}
