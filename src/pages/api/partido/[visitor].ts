import { partidos } from '@const/partidos'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params }) => {
	const { visitor } = params as { visitor: 'local' | 'visitante' }
	if (!typeof visitor) {
		return new Response(JSON.stringify({
			error: `argument ${visitor} is not valid`,
			type: ["the visitor argument is only of type 'local' or 'visitante'"]
		}))
	}

	const paritdoByVisitor = partidos.filter(({ isVisitor }) =>
		(visitor === 'local') && isVisitor === false ||
		(visitor === 'visitante') && isVisitor === true
  )

  return new Response(JSON.stringify(paritdoByVisitor))
}
