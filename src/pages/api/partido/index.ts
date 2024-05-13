import { partidos } from '@const/partidos'
import { type APIContext } from 'astro'

export async function GET({ url }: APIContext) {
	const team = url.searchParams.get('team')
	const matchVersus = partidos.find(({ rawVs }) => {
		return team === rawVs
	})
	return new Response(JSON.stringify(matchVersus))
}
