// eslint-disable-next-line @typescript-eslint/no-var-requires
const { chromium: playwright } = require('playwright-core')
const chromium = require('@sparticuz/chromium')

const isLocal = process.env.NETLIFY_LOCAL === 'true'
const LOCAL_CHROME_PATH = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
const LOCAL_URL = 'http://localhost:4321/'

async function getConfig () {
	const executablePath = isLocal ? LOCAL_CHROME_PATH : await chromium.executablePath()
	const url = isLocal ? LOCAL_URL : 'https://cuando-juega-edlp.netlify.app/'
	return { executablePath, url }
}

/**
 * @typedef {{ 'Content-Type': string }} Headers
 * @param {Buffer | string | void} buffer
 * @return {{ headers: Headers, statusCode: number, body: string, isBase64Encoded: boolean }}
 */
function returnImage (buffer) {
	return {
		headers: {
			'Content-Type': 'image/png'
		},
		statusCode: 200,
		body: buffer.toString('base64'),
		isBase64Encoded: true
	}
}

/**
 * @param {function} _callback
 * @param {any} _context
 * @param {any} _event
 */
exports.handler = async function (_event, _context, _callback) {
	const { url, executablePath } = await getConfig()
	const browser = await playwright.launch({
		executablePath,
		headless: true
	})
	const context = await browser.newContext()
	const page = await context.newPage()
	await page.setViewportSize({ width: 1200, height: 800 })
	await page.goto(url)
	const el = await page.$('#App main')
	const screenshot = await el?.screenshot()
	await browser.close()
	return returnImage(screenshot)
}
