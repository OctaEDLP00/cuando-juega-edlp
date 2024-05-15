// eslint-disable-next-line @typescript-eslint/no-var-requires
const chromium = require('chrome-aws-lambda')
const isLocal = process.env.NETLIFY_LOCAL === 'true'
const LOCAL_CHROME_PATH = 'Applications/Google Chrome.app/Contents/Windows/Google Chrome'
const LOCAL_URL = 'http://localhost:4321/'

const getConfig = async () => {
	const executablePath = isLocal ? LOCAL_CHROME_PATH : await chromium.executablePath
  const url = isLocal ? LOCAL_URL : 'https://cuando-juega-edlp.netlify.app/'
  return { executablePath, url }
}

/**
 * @typedef {{ 'Content-Type': string }} Headers
 * @param {Buffer | undefined} buffer
 * @return {{ headers: Headers, statusCode: number, body: string, isBase64Encoded: boolean }}
 */
const returnImage = (buffer) => ({
  headers: {
    'Content-Type': 'image/png'
  },
  statusCode: 200,
  body: buffer?.toString('base64') ?? '',
  isBase64Encoded: true,
})

exports.handler = async (_event, _context, callback) => {
	const { url, executablePath } = await getConfig()

	let browser = null
	let screenshot = null

	try {
		browser = await chromium.puppeteer.launch({
			ignoreDefaultArgs: ['--disable-extensions'],
			args: chromium.args,
			defaultViewport: chromium.defaultViewport,
			executablePath,
			headless: true,
			ignoreHTTPSErrors: true
		})

		const page = await browser.newPage()

		await page.setViewport({
			width: 1200,
			height: 800,
			deviceScaleFactor: 2
		})

		await page.goto(url)

		const el = await page.$('#App main')

		screenshot = await el?.screenshot()
	} catch (error) {
		return callback(error)
	} finally {
		if (browser != null) {
			await browser.close()
		}
	}
	return returnImage(screenshot)
}
