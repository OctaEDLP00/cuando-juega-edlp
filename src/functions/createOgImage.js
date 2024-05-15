// eslint-disable-next-line @typescript-eslint/no-var-requires
const chromium = require('chrome-aws-lambda')
const isLocal = process.env.NETLIFY_LOCAL === 'true'
const LOCAL_CHROME_PATH = 'Applications/Google Chrome.app/Contents/Windows/Google Chrome'
const LOCAL_URL = 'http://localhost:4321/'

const getConfig = async () => {
	const executablePath = isLocal ? LOCAL_CHROME_PATH : Chromium.path
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

exports.handler = async (_event) => {
	const { url, executablePath } = await getConfig()

	const browser = await chromium.puppeteer.launch({
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
  })
  await page.goto(url)

	const el = await page.$('#App main')
	const screenshot = await el?.screenshot()
  await browser.close()
  return returnImage(screenshot)
}
