import { fetchAPI } from '@utils/fetchAPI'
import { type APIRoute } from 'astro'
import { URL_API_ENDPOINT_2023 } from 'src/const'

export const POST: APIRoute = async ({ params, request }) => {
  const { vs: VS } = params
  const equipo = await fetchAPI(URL_API_ENDPOINT_2023)
  equipo.find(({ vs }) => vs.replace(' ', '-') === VS.replace(' ', '-'))
  return new Response(JSON.stringify(equipo))
}
