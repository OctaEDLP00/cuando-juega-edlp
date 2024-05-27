// eslint-disable-next-line @typescript-eslint/no-var-requires
const { chromium: playwright } = require('playwright-core')
const chromium = require('@sparticuz/chromium')

const isLocal = process.env.NETLIFY_LOCAL === 'true'
const LOCAL_CHROMIUM_PATH = process.env.LOCAL_CHROMIUM_PATH
const LOCAL_URL = process.env.LOCAL_URL

async function getConfig () {
	const executablePath = isLocal ? LOCAL_CHROMIUM_PATH : await chromium.executablePath()
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
		args: [
			...chromium.args,
			'--disable-extensions',
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--no-sandbox'
		],
		executablePath,
		headless: true
	})
	const page = await browser.newPage()
	await page.setViewportSize({ width: 1200, height: 800 })
	await page.goto(url, { waitUntil: 'networkidle' })
	const el = await page.$('#App')
	if (!el) throw new Error('Element not found')
	const screenshot = await el.screenshot()
	await browser.close()
	return returnImage(screenshot)
}
