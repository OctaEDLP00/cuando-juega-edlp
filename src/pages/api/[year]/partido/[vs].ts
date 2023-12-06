import { fetchAPI } from '@utils/fetchAPI'
import { type APIRoute } from 'astro'
import { URL_API_ENDPOINT } from '../../../../const'

export const GET: APIRoute = async ({ params }) => {
  const { year, vs: VS } = params
  const json = await fetchAPI(URL_API_ENDPOINT(year))
  return new Response(
    JSON.stringify(
      json.find(
        ({ vs }) => vs.toLowerCase().replaceAll(' ', '-') === VS.toLowerCase().replace(' ', '-')
      )
    )
  )
}
