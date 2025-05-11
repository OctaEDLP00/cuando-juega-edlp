import { partidos } from '~/const/partidos'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async () => new Response(JSON.stringify(partidos))
