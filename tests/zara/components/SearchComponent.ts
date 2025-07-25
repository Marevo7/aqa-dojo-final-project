import { test, expect, Locator, Page } from '@playwright/test'

export class SearchComponent {
	page: Page
	searchInput: Locator
	womanFilter: Locator
	manFilter: Locator
	kidsFilter: Locator
	searchClearButton: Locator

	constructor(page: Page) {
		this.searchInput = page.locator('input#search-home-form-combo-input')
		this.womanFilter = page
			.locator('button[data-qa-action="search-section-change"]')
			.nth(0)
		this.manFilter = page
			.locator('button[data-qa-action="search-section-change"]')
			.nth(1)
		this.kidsFilter = page
			.locator('button[data-qa-action="search-section-change"]')
			.nth(2)
		this.searchClearButton = page.locator('div#search-clear')
	}
}
