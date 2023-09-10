import { IPartidos } from "../types/main"
import { error, log } from "./console"
import { URL_API_ENDPOINT_2023 } from '../const'

interface Options extends RequestInit { }

export const fetchAPI = async (url: string, options?: Options) => {
  try {
    const response = await fetch(url, options)
    const json = await response.json()
    return json
  } catch (e) {
    error(e.message)
  }
}
