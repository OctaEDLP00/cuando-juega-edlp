import { URL_API_ENDPOINT } from '@const/index'
import { fetchAPI } from '@utils/fetchAPI'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params }) => {
  const { visitor: vis } = params as { visitor: 'local' | 'visitante' }
  console.log({ vis })
  const json = await fetchAPI(URL_API_ENDPOINT)
  const paritdoByVisitor = json.filter(({ isVisitor }) =>
    (vis === 'local') && isVisitor === false ||
    (vis === 'visitante') && isVisitor === true
  )

  return new Response(JSON.stringify(paritdoByVisitor))
}
