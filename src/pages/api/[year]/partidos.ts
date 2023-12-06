import { partidos } from '@const/partidos'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params }) => {
  if (params.year === '2023') new Response(JSON.stringify(partidos))
  throw Error('Año invalido', { cause: 'Año no encontrado o incorrecto' })
}
