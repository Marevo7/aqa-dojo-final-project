import { test, expect, Locator, Page } from '@playwright/test'
export class HeaderComponents {
	page: Page
	goToSearchButton: Locator
	startSession: Locator
	help: Locator
	basket: Locator

	constructor(page: Page) {
		this.goToSearchButton = page.locator(
			'a[data-qa-id="header-search-text-link"]'
		)
		this.startSession = page.locator('a[data-qa-id="layout-header-user-logon"]')
		this.help = page.locator('a[data-qa-id="notify-help-center-click"]')
		this.basket = page.locator('a[data-qa-id="layout-header-go-to-cart"]')
	}
}
