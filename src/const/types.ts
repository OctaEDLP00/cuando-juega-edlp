const FECHA_TYPE = {
	FINAL: 'final',
	SEMIFINAL: 'semifinal',
	'4tos': '4tos',
	'8avos': '8vos',
	'16avos': '16avos',
	'32avos': '32avos',
	'64avos': '64avos',
	UNICA: 'unica',
	FASE_GRUPOS: 'fase de grupos'
} as const

const COPA_TYPE = {
	COPA_LIGA: 'Copa de La Liga',
	TORNEO_LIGA: 'Torneo de La Liga',
	LIBERATDORES: 'Copa Libertadores',
	SUDAMERICANA: 'Copa Sudamericana',
	COPA_ARGENTINA: 'Copa Argentina',
	NOCHE_DEL_LEON: 'Noche del León',
	SUPERCOPA_ARGENTINA: 'Supercopa Argentina'
} as const

const COPA_TYPE_WITHOUT_SPACES = {
	COPA_LIGA: 'copa-de-la-liga',
	TORNEO_LIGA: 'torneo-de-la-liga',
	LIBERATDORES: 'copa-libertadores',
	SUDAMERICANA: 'copa-sudamericana',
	COPA_ARGENTINA: 'copa-argentina',
	NOCHE_DEL_LEON: 'noche-del-león',
	SUPERCOPA_ARGENTINA: 'supercopa-argentina'
} as const

export const REL_TYPE = {
	NOOPENERNOREFERRER: 'noopener noreferrer',
	NOOPENER: 'noopener',
	NOREFERRER: 'noreferrer',
} as const

export const TARGET_TYPE = {
	BLANK: '_blank',
	PARENT: '_parent',
	SELF: '_self',
	TOP: '_top'
} as const

// Types Definitions

export interface ImgProps {
	alt: string
	height?: string | number
	src: string
	width?: string | number
}

/**
 * El formato es de tipo Fecha
 * que lleva los siguientes valores
 * `año`-`mes`-`dia`T`hora`:`minutos` ó
 * `año`-`mes`-`dia`T`hora`:`minutos:segundos`
*/
export type DateType =
	| `${number}-${number}-${number}T${number}:${number}`
	| `${number}-${number}-${number}T${number}:${number}:${number}`

export type Fecha = typeof FECHA_TYPE[keyof typeof FECHA_TYPE]
export type Copa = typeof COPA_TYPE[keyof typeof COPA_TYPE]
export type CopaWithoutSpaces = typeof COPA_TYPE_WITHOUT_SPACES[keyof typeof COPA_TYPE_WITHOUT_SPACES]
export type Rel = typeof REL_TYPE[keyof typeof REL_TYPE]
export type Target = typeof TARGET_TYPE[keyof typeof TARGET_TYPE]

interface ILinkProps {
	href: string
	target: Target
	rel: Rel
}

export interface INetworkSocial extends ILinkProps {
	IconComponent: any
	disabled?: boolean | undefined
}

export interface KonamiProps {
	code: Array<string>
	keyPressed: string
	onFinishTime?: number
	onSucces: () => void
	onFinish?: () => void
}

export interface KonamiState {
	[key: string]: number
}

interface FootballTeam {
	img: ImgProps
	/**
	 * The *`rawVs`* string property is a symbolic string of the property *`vs`*,
	 * written ***without spaces*** and ***all its letter in lowercase***
	 * @example vs: Defensa y Justicia -> rawVs: defensayjusticia
	 */
	rawVs: string
	footballStadium: string | null
	vs: string
}

export interface IPartidos {
	copa: Copa
	date: DateType | null
	fecha: Fecha | number
	footballTeam: FootballTeam
	/**
	 * If it is boolean this will be treated as follows,
	 * If the match is *`local`* the property will have a *`false`* value, otherwise it will be *`true`*
	 */
	isSuspended?: boolean
	isVisitor?: boolean | null
}

export interface INotification {
	body?: string
	date: DateType
	icon?: string
	notificationMsg?: string
}

export type INotificationWithoutDate = Omit<INotification, 'date'>
