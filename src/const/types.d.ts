import {
	COPA_TYPE,
	COPA_TYPE_WITHOUT_SPACES,
	FECHA_TYPE,
	FOOTBALL_STADIUM,
	REL_TYPE,
	TARGET_TYPE
} from './variables'

// Types Definitions

interface ImgProps {
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
type DateType =
	| `${number}-${number}-${number}T${number}:${number}`
	| `${number}-${number}-${number}T${number}:${number}:${number}`

type Fecha = typeof FECHA_TYPE[keyof typeof FECHA_TYPE]
type Copa = typeof COPA_TYPE[keyof typeof COPA_TYPE]
type CopaWithoutSpaces = typeof COPA_TYPE_WITHOUT_SPACES[keyof typeof COPA_TYPE_WITHOUT_SPACES]
type Rel = typeof REL_TYPE[keyof typeof REL_TYPE]
type Target = typeof TARGET_TYPE[keyof typeof TARGET_TYPE]

interface ILinkProps {
	href: string
	target: Target
	rel: Rel
}

interface INetworkSocial extends ILinkProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	IconComponent: any
	disabled?: boolean | undefined
}

interface KonamiProps {
	code: Array<string>
	keyPressed: string
	onFinishTime?: number
	onSucces: () => void
	onFinish?: () => void
}

interface KonamiState {
	[key: string]: number
}

type FootballStadium = (typeof FOOTBALL_STADIUM)[keyof typeof FOOTBALL_STADIUM]

interface FootballTeam {
	img: ImgProps
	/**
	 * The *`rawVs`* string property is a symbolic string of the property *`vs`*,
	 * written ***without spaces*** and ***all its letter in lowercase***
	 * @example vs: Defensa y Justicia -> rawVs: defensayjusticia
	 */
	rawVs: string
	footballStadium: FootballStadium | null
	vs: string
}

interface IPartidos {
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

interface INotification {
	body?: string
	date: DateType
	icon?: string
	notificationMsg?: string
}

type INotificationWithoutDate = Omit<INotification, 'date'>

export type {
	Copa,
	CopaWithoutSpaces, DateType, Fecha, ImgProps, INetworkSocial, INotification, INotificationWithoutDate, IPartidos, KonamiProps, KonamiState, Rel, Target
}

