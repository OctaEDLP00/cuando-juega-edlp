import { error } from './console'
import type { IPartidos } from '@const/types'

export async function fetchAPI(url: string): Promise<Array<IPartidos>> {
  try {
    const response = await fetch(url)
		const json = await response.json() as Array<IPartidos>
		return json
  } catch (e) {
    error(e.message)
  }
}
