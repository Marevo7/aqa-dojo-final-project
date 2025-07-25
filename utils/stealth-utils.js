export async function setupStealth(page) {
	await page.addInitScript(() => {
		// Delete navigator.webdriver
		Object.defineProperty(navigator, 'webdriver', {
			get: () => undefined,
		})

		// Mask chrome runtime
		if (window.chrome && window.chrome.runtime) {
			delete window.chrome.runtime.onConnect
			delete window.chrome.runtime.onMessage
		}
		// Plugin emulation
		Object.defineProperty(navigator, 'plugins', {
			get: () => [
				{
					0: {
						type: 'application/x-google-chrome-pdf',
						suffixes: 'pdf',
						description: 'Chrome PDF Plugin',
					},
					description: 'Chrome PDF Plugin',
					filename: 'internal-pdf-viewer',
					length: 1,
					name: 'Chrome PDF Plugin',
				},
				{
					0: {
						type: 'application/pdf',
						suffixes: 'pdf',
						description: 'Chrome PDF Viewer',
					},
					description: 'Chrome PDF Viewer',
					filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai',
					length: 1,
					name: 'Chrome PDF Viewer',
				},
			],
		})
	})

	Object.defineProperty(navigator, 'languages', {
		get: () => ['en-US', 'en'],
	})

	const randomDelay = () => Math.floor(Math.random() * 1000) + 500
	await page.waitForTimeout(randomDelay())
}
