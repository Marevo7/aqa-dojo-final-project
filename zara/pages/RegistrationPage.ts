import { test, expect, Locator, Page } from '@playwright/test'

export class RegistrationPage {
	page: Page
	emailInput: Locator
	passwordInput: Locator
	firstNameInput: Locator
	lastNameInput: Locator
	emailInputError: Locator
	passwordInputError: Locator
	firstNameInputError: Locator
	lastNameInputError: Locator
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
		this.emailInputError = page.locator('div#form-input__desc-email46')
		this.passwordInputError = page.locator('div#form-input__desc-password50')
		this.firstNameInputError = page.locator('div#form-input__desc-firstName54')
		this.lastNameInputError = page.locator('div#form-input__desc-lastName58')
	}
}
