import { partidos } from '@const/partidos'
import { type APIRoute } from 'astro'
import { sanitizeVs } from '@utils/index'

export const GET: APIRoute = ({ params }) => {
	const { versus } = params
	const matchVersus = partidos.find(({ vs }) => sanitizeVs(vs) === versus)
	return new Response(JSON.stringify(matchVersus))
}
