import { fetchAPI } from '@utils/fetchAPI'
import { type APIRoute } from 'astro'
import { URL_API_ENDPOINT_2023 } from '../../../../const'

export const GET: APIRoute = async ({ params }) => {
  const { vs: VS } = params
  const json = await fetchAPI(URL_API_ENDPOINT_2023)
  return new Response(
    JSON.stringify(
      json.find(({ vs }) => vs.toLowerCase().replace(' ', '-') === VS.toLowerCase().replace(' ', '-'))
    )
  )
}
