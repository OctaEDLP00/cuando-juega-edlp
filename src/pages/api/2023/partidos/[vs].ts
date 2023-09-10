import { log } from '@utils/console'
import { fetchAPI } from '@utils/fetchAPI'
import { URL_API_ENDPOINT_2023 } from '../../../../const'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params }) => {
  const { vs: VS } = params
  const json = await fetchAPI(URL_API_ENDPOINT_2023)
  return new Response(JSON.stringify(json.find(({ vs }) => vs.replace(' ', '-') === VS.replace(' ', '-'))))
}
