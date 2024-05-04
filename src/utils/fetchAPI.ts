import { error } from "./console"
import { COPA_TYPE, FECHA_TYPE } from '@const/types'

/**
 * El formato es de tipo Fecha
 * que lleva los siguientes valores
 * `año`-`mes`-`dia`T`hora`:`minutos` ó
 * `año`-`mes`-`dia`T`hora`:`minutos:segundos`
*/
type DateType =
	`${number}-${number}-${number}T${number}:${number}`
	| `${number}-${number}-${number}T${number}:${number}:${number}`
type Fecha = typeof FECHA_TYPE[keyof typeof FECHA_TYPE]
type Copa = typeof COPA_TYPE[keyof typeof COPA_TYPE]

interface ImgProps {
	alt: string
	height?: string | number
	src: string
	width?: string | number
}

interface IPartidos {
	copa: Copa
	date: DateType | null
	fecha: Fecha | number,
	img: ImgProps
	isSuspended?: boolean
	isVisitor?: boolean | null
	rawVs: string
	vs: string
}

export const fetchAPI = async (url: string): Promise<Array<IPartidos>> => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    error(e.message)
  }
}
