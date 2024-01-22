import { URL_API_ENDPOINT } from '@const/index'
import { fetchAPI } from '@utils/fetchAPI'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params }) => {
  const { vs: VS } = params
  const json = await fetchAPI(URL_API_ENDPOINT)
  const versus = json.find(({ vs }) => {
    const sanitizeVs = (arg: string) => arg.replace(' ', '')
    const vsSanitized = sanitizeVs(vs)
    return vsSanitized.toLowerCase() === VS.toLowerCase()
  })
  return new Response(JSON.stringify(versus))
}
