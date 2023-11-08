import { Handler } from '@netlify/functions'
import { chromium, type Page } from 'playwright'

const returnImage = (buffer) => ({
  headers: {
    'Content-Type': 'image/jpg'
  },
  statusCode: 200,
  body: buffer.toString('base64'),
  isBase64Encoded: true,
})

const handler: Handler = async (event) => {
  const url = 'https://cuando-juega-edlp.netlify.app'
  const browser = await chromium.launch({
    headless: true
  })
  const page: Page = await browser.newPage()
  await page.setViewportSize({
    width: 1200,
    height: 800
  })
  await page.goto(url)
  const el = await page.$('#App')
  const screenshot = await el.screenshot()
  await browser.close()
  return returnImage(screenshot)
}

export {
  handler
}
