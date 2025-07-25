import { test, expect, Locator, Page } from '@playwright/test'

export class ProductCartComponents {
	page: Page
	sizeInStock: Locator
	constructor(page: Page) {
		this.sizeInStock = page.locator('[data-qa-action="size-in-stock"]')
	}
}
