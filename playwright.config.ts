import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: 'https://www.zara.com',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
		video: 'retain-on-failure',
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				userAgent:
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
				viewport: { width: 1920, height: 1080 },
				extraHTTPHeaders: {
					Accept:
						'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
					'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8',
					'Accept-Encoding': 'gzip, deflate, br',
					'Cache-Control': 'max-age=0',
					DNT: '1',
					Connection: 'keep-alive',
					'Sec-Ch-Ua':
						'"Not_A Brand";v="8", "Chromium";v="121", "Google Chrome";v="121"',
					'Sec-Ch-Ua-Mobile': '?0',
					'Sec-Ch-Ua-Platform': '"Windows"',
					'Sec-Fetch-Dest': 'document',
					'Sec-Fetch-Mode': 'navigate',
					'Sec-Fetch-Site': 'none',
					'Sec-Fetch-User': '?1',
					'Upgrade-Insecure-Requests': '1',
				},
				launchOptions: {
					args: [
						'--no-sandbox',
						'--disable-setuid-sandbox',
						'--disable-dev-shm-usage',

						'--disable-blink-features=AutomationControlled',
						'--disable-features=VizDisplayCompositor',
						'--disable-extensions',
						'--disable-plugins-discovery',
						'--disable-web-security',
						'--disable-features=TranslateUI',
						'--disable-ipc-flooding-protection',

						'--no-first-run',
						'--no-service-autorun',
						'--password-store=basic',
						'--use-mock-keychain',
						'--disable-component-extensions-with-background-pages',
						'--disable-default-apps',
						'--mute-audio',
						'--no-default-browser-check',
						'--autoplay-policy=user-gesture-required',
						'--disable-background-timer-throttling',
						'--disable-renderer-backgrounding',
						'--disable-backgrounding-occluded-windows',
						'--disable-client-side-phishing-detection',
						'--disable-sync',
						'--metrics-recording-only',
						'--no-report-upload',
						'--allow-running-insecure-content',
						'--disable-webgl',
						'--disable-threaded-animation',
						'--disable-threaded-scrolling',
						'--disable-in-process-stack-traces',
						'--disable-histogram-customizer',
						'--disable-gl-extensions',
						'--disable-composited-antialiasing',
						'--disable-canvas-aa',
						'--disable-3d-apis',
						'--disable-accelerated-2d-canvas',
						'--disable-accelerated-jpeg-decoding',
						'--disable-accelerated-mjpeg-decode',
						'--disable-app-list-dismiss-on-blur',
						'--disable-accelerated-video-decode',
						'--num-raster-threads=1',
					],
				},
			},
		},

		{
			name: 'firefox',
			use: {
				//...devices['Desktop Firefox'],
				browserName: 'firefox',
				userAgent:
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
				viewport: { width: 1920, height: 1080 },
				extraHTTPHeaders: {
					Accept:
						'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
					'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8',
					'Accept-Encoding': 'gzip, deflate, br',
					'Cache-Control': 'max-age=0',
					DNT: '1',
					Connection: 'keep-alive',
					'Sec-Ch-Ua':
						'"Not_A Brand";v="8", "Chromium";v="121", "Google Chrome";v="121"',
					'Sec-Ch-Ua-Mobile': '?0',
					'Sec-Ch-Ua-Platform': '"Windows"',
					'Sec-Fetch-Dest': 'document',
					'Sec-Fetch-Mode': 'navigate',
					'Sec-Fetch-Site': 'none',
					'Sec-Fetch-User': '?1',
					'Upgrade-Insecure-Requests': '1',
				},
				launchOptions: {
					args: [
						'--no-sandbox',
						'--disable-setuid-sandbox',
						'--disable-dev-shm-usage',

						'--disable-blink-features=AutomationControlled',
						'--disable-features=VizDisplayCompositor',
						'--disable-extensions',
						'--disable-plugins-discovery',
						'--disable-web-security',
						'--disable-features=TranslateUI',
						'--disable-ipc-flooding-protection',

						'--no-first-run',
						'--no-service-autorun',
						'--password-store=basic',
						'--use-mock-keychain',
						'--disable-component-extensions-with-background-pages',
						'--disable-default-apps',
						'--mute-audio',
						'--no-default-browser-check',
						'--autoplay-policy=user-gesture-required',
						'--disable-background-timer-throttling',
						'--disable-renderer-backgrounding',
						'--disable-backgrounding-occluded-windows',
						'--disable-client-side-phishing-detection',
						'--disable-sync',
						'--metrics-recording-only',
						'--no-report-upload',
						'--allow-running-insecure-content',
						'--disable-webgl',
						'--disable-threaded-animation',
						'--disable-threaded-scrolling',
						'--disable-in-process-stack-traces',
						'--disable-histogram-customizer',
						'--disable-gl-extensions',
						'--disable-composited-antialiasing',
						'--disable-canvas-aa',
						'--disable-3d-apis',
						'--disable-accelerated-2d-canvas',
						'--disable-accelerated-jpeg-decoding',
						'--disable-accelerated-mjpeg-decode',
						'--disable-app-list-dismiss-on-blur',
						'--disable-accelerated-video-decode',
						'--num-raster-threads=1',
					],
				},
			},
		},

		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari'],
				userAgent:
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
				viewport: { width: 1920, height: 1080 },
				extraHTTPHeaders: {
					Accept:
						'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
					'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8',
					'Accept-Encoding': 'gzip, deflate, br',
					'Cache-Control': 'max-age=0',
					DNT: '1',
					Connection: 'keep-alive',
					'Sec-Ch-Ua':
						'"Not_A Brand";v="8", "Chromium";v="121", "Google Chrome";v="121"',
					'Sec-Ch-Ua-Mobile': '?0',
					'Sec-Ch-Ua-Platform': '"Windows"',
					'Sec-Fetch-Dest': 'document',
					'Sec-Fetch-Mode': 'navigate',
					'Sec-Fetch-Site': 'none',
					'Sec-Fetch-User': '?1',
					'Upgrade-Insecure-Requests': '1',
				},
				launchOptions: {
					args: [
						'--no-sandbox',
						'--disable-setuid-sandbox',
						'--disable-dev-shm-usage',

						'--disable-blink-features=AutomationControlled',
						'--disable-features=VizDisplayCompositor',
						'--disable-extensions',
						'--disable-plugins-discovery',
						'--disable-web-security',
						'--disable-features=TranslateUI',
						'--disable-ipc-flooding-protection',

						'--no-first-run',
						'--no-service-autorun',
						'--password-store=basic',
						'--use-mock-keychain',
						'--disable-component-extensions-with-background-pages',
						'--disable-default-apps',
						'--mute-audio',
						'--no-default-browser-check',
						'--autoplay-policy=user-gesture-required',
						'--disable-background-timer-throttling',
						'--disable-renderer-backgrounding',
						'--disable-backgrounding-occluded-windows',
						'--disable-client-side-phishing-detection',
						'--disable-sync',
						'--metrics-recording-only',
						'--no-report-upload',
						'--allow-running-insecure-content',
						'--disable-webgl',
						'--disable-threaded-animation',
						'--disable-threaded-scrolling',
						'--disable-in-process-stack-traces',
						'--disable-histogram-customizer',
						'--disable-gl-extensions',
						'--disable-composited-antialiasing',
						'--disable-canvas-aa',
						'--disable-3d-apis',
						'--disable-accelerated-2d-canvas',
						'--disable-accelerated-jpeg-decoding',
						'--disable-accelerated-mjpeg-decode',
						'--disable-app-list-dismiss-on-blur',
						'--disable-accelerated-video-decode',
						'--num-raster-threads=1',
					],
				},
			},
		},

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://localhost:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
})
