import { type ICardPartidos } from "@/types/main"
import { error } from "./console"

export const fetchAPI = async (url: string): Promise<Array<ICardPartidos>> => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    error(e.message)
  }
}
