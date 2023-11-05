import { Handler } from '@netlify/functions'
import { chromium, type Page } from 'playwright'

const isLocal = import.meta.env.MODE === 'development'
const LOCAL_CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const LOCAL_URL = 'http://localhost:4321'

const getConfig = async () => {
  const executablePath = isLocal ? LOCAL_CHROME_PATH : await chromium.executablePath
  const url = isLocal ? LOCAL_URL : import.meta.env.SITE
  return { executablePath, url }
}

const returnImage = (buffer) => ({
  headers: {
    'Content-Type': 'image/jpg'
  },
  statusCode: 200,
  body: buffer.toString('base64'),
  isBase64Encoded: true,
})

export const handler: Handler = async (event) => {

  const browser = await chromium.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  })

  const { executablePath, url } = await getConfig()

  const page: Page = await browser.newPage()

  await page.setViewport({
    width: 1200,
    height: 800,
    deviceScaleFactor: 2
  })

  await page.goto(url)

  const el = await page.$('body')

  const screenshot = await el.screenshot()

  await browser.close()

  return returnImage(screenshot)
}
