import { test, expect, Locator, Page } from '@playwright/test'

export class BasketPage {
	page: Page
	productQtyDecrease: Locator
	continueButton: Locator
	registrationButton: Locator
	constructor(page: Page) {
		this.productQtyDecrease = page.locator(
			'div[data-qa-id="remove-order-item-unit"]'
		)
		this.continueButton = page.locator('button[data-qa-id="shop-continue"]')
		this.registrationButton = page.locator(
			'button[data-qa-id="logon-view-alternate-button"]'
		)
	}
	async decreaseQtyOfProduct() {
		this.productQtyDecrease.click()
	}
	async continueShopping() {
		this.continueButton.click()
	}
	async goToRegistrationPage() {
		this.registrationButton.click()
	}
}
