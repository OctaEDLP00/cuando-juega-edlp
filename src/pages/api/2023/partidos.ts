import { partidos } from '@const/partidos'
import { type APIRoute } from 'astro'

export const GET: APIRoute = () => new Response(JSON.stringify(partidos))
