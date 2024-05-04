// eslint-disable-next-line @typescript-eslint/no-var-requires
const { chromium } = require('playwright')

const isLocal = process.env.NETLIFY_LOCAL === 'true'

const LOCAL_CHROME_PATH = 'Applications/Google Chrome.app/Contents/Windows/Google Chrome'
const LOCAL_URL = 'http://localhost:4321/'

const getConfig = async () => {
  const executablePath = isLocal ? LOCAL_CHROME_PATH : chromium.executablePath
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

/** @type {import('@netlify/functions').Handler} */
exports.handler = async (_event) => {
	const { url, executablePath } = await getConfig()

	/** @type {import('playwright').Browser} */
  const browser = await chromium.launch({
    executablePath,
    headless: true,
  })

  /** @type {import('playwright').Page} */
  const page = await browser.newPage()

  await page.setViewportSize({
    width: 1200,
    height: 800,
  })
  await page.goto(url)

	const el = await page.$('#App main')
	const screenshot = await el?.screenshot()
  await browser.close()
  return returnImage(screenshot)
}
