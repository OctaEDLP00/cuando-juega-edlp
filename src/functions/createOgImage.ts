// @ts-nocheck
import { Handler } from '@netlify/functions'
import { chromium, Page } from 'playwright'

const handler: Handler = async (event) => {
  try {
    const { queryStringParameters: { url } } = event

    if (url) {
      const browser = await chromium.launch()
      const page: Page = await browser.newPage()
      await page.goto(url, { waitUntil: 'networkidle' })

      const bodyHandle = await page.$('body')
      const imageBuffer = await bodyHandle.screenshot()
      await browser.close()

      return {
        statusCode: 200,
        body: imageBuffer.toString('base64'),
        isBase64Encoded: true,
        headers: {
          'Content-Type': 'image/jpg'
        }
      }
    }
  } catch (err) {
    const { message } = err
    return {
      statusCode: 500,
      body: JSON.stringify({ errorMsg: message })
    }
  }
}

export {
  handler
}
