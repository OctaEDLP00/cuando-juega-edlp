import { IPartidos } from "../types/main"
import { error } from "./console"

interface Options extends RequestInit { }

export const fetchAPI = async (url: string, options?: Options) => {
  try {
    const response = await fetch(url, options)
    const json = response.json()
    return json as Array<IPartidos>
  } catch (e) {
    error(e.message)
  }
}
