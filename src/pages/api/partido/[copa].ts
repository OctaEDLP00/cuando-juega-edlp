import { partidos } from '@const/partidos'
import { type APIRoute } from 'astro'

type Copa = "copa-de-la-liga" | "copa-libertadores" | "copa-sudamericana" | "copa-argentina" | "noche-del-león" | "supercopa-argentina" | "torneo-de-la-liga"

export const GET: APIRoute = ({ params }) => {
	const { copa } = params as { copa: Copa }
	const partidoPorCopa = partidos.filter(({ copa: COPA }) => COPA.replaceAll(' ', '-').toLowerCase() === copa)
	return new Response(JSON.stringify(partidoPorCopa))
}
