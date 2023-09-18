import { type Context } from 'netlify:edge'

export default async function (request: Request, context: Context) {

  const response = await context.next()
  const page = await response.text()

  const regex = /COUNTRYNAME/i
  const countryName = context.geo?.country?.name ?? "somewhere in the world"

  const updatePage = page.replace(regex, countryName)
  return new Response(updatePage, response)
}
