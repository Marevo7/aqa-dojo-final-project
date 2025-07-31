import { test, expect, Locator, Page } from '@playwright/test'

export class RegistrationPage {
	page: Page
	emailInput: Locator
	passwordInput: Locator
	firstNameInput: Locator
	lastNameInput: Locator
	inputError: Locator
	constructor(page: Page) {
		this.emailInput = page.locator('input[data-qa-input-qualifier="email"]')
		this.passwordInput = page.locator(
			'input[data-qa-input-qualifier="password"]'
		)
		this.firstNameInput = page.locator(
			'input[data-qa-input-qualifier="firstName"]'
		)
		this.lastNameInput = page.locator(
			'input[data-qa-input-qualifier="lastName"]'
		)
		this.inputError = page.locator('div.form-input-error')
	}
}
