import type { IPartidos } from '@const/types.d'
import { error } from './console'

export async function fetchAPI(url: string): Promise<Array<IPartidos>> {
  try {
    const response = await fetch(url)
		const json = await response.json() as Array<IPartidos>
		return json
  } catch (e) {
    error(e.message)
  }
}
