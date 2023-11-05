import { type IPartidos } from "src/types/main"
import { error } from "./console"

export const fetchAPI = async (url: string): Promise<Array<IPartidos>> => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    error(e.message)
  }
}
