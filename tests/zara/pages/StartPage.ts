import { test, expect, Locator, Page } from '@playwright/test'
export class StartPage {
	page: Page
	acceptCookiesButton: Locator
	rejectCookiesButton: Locator
	continueButton: Locator

	constructor(page: Page) {
		this.acceptCookiesButton = page.locator(
			'button#onetrust-accept-btn-handler'
		)
		this.rejectCookiesButton = page.locator(
			'button#onetrust-reject-all-handler'
		)
		this.continueButton = page.locator('button[data-qa-action="go-to-store"]')
	}
	async acceptCookies() {
		await this.acceptCookiesButton.click()
	}
	async rejectCookies() {
		await this.rejectCookiesButton.click()
	}
	async goToStore() {
		await this.continueButton.click()
	}
}
