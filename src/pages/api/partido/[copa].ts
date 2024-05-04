import { partidos } from '@const/partidos'
import { type APIRoute } from 'astro'

type COPA = "copa-de-la-liga" | "copa-libertadores" | "copa-sudamericana" | "copa-argentina" | "noche-del-león" | "supercopa-argentina"

export const GET: APIRoute = ({ params }) => {
	const { copa } = params as { copa: COPA }
	const paritdoPorCopa = partidos.filter((partido) => {
		return partido.copa.replaceAll(' ', '-').toLowerCase() === copa
	})
	return new Response(JSON.stringify(paritdoPorCopa))
}
