import { partidos } from '@const/partidos'
import { type CopaWithoutSpaces as Copa } from '@const/types.d'
import { type APIContext } from 'astro'

export async function GET({ params }: APIContext) {
	const { copa } = params as { copa: Copa }
	const partidoPorCopa = partidos.filter(({ copa: COPA }) => COPA.replaceAll(' ', '-').toLowerCase() === copa)
	return new Response(JSON.stringify(partidoPorCopa))
}
