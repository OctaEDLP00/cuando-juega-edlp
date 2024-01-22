// import { REL, TARGET } from './enum'

/**
 * @type Fecha
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 * @description posible values `final` | `semifinal` | `4tos` | `8avos` | `32avos` | `64avos`
 */
type Fecha =
  'final'
  | 'semifinal'
  | '4tos'
  | '8avos'
  | '16avos'
  | '32avos'
  | '64avos'
  | 'única'

/**
 * @type TimeType
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 * @description `yyyy-mm-ddT00:00:00` format type
*/
type TimeType =
  `${number}-${number}-${number}T${number}:${number}:${number}`

/**
 * @type Target
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
type Target =
  '_blank'
  | '_parent'
  | '_self'
  | '_top'

/**
 * @type Rel
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
*/
type Rel =
  'noopener noreferrer'
  | 'noopener'
  | 'noreferrer'

type Partidos = Omit<IPartidos, 'key' | 'vs' | 'img' | 'rawVs' | 'isVisitor' | 'fecha'>

/**
 * @type CopaType
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 * @description
 *  Posible values:
 *  `Copa de La Liga`
 *  `Copa Libertadores`
 *  `Copa Sudamericana`
 *  `Copa Argentina`
 *  `Noche del León`
 */
type CopaType =
  'Copa de La Liga'
  | 'Copa Libertadores'
  | 'Copa Sudamericana'
  | 'Copa Argentina'
  | 'Noche del León'


/**
 * @interface IPartidos
 * @property {CopaType} copa
 * @property {TimeType | null} date
 * @property {string} vs
 * @property {string} rawVs
 * @property {string} img image is URL `(http|https)` or same project url path `/path/subpath/file.extension`
 * @property {Fecha | number} fecha
 * @property {boolean} isVisitor
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
export interface IPartidos {
  copa: CopaType,
  date: TimeType | null,
  vs: string,
  img: string,
  fecha: Fecha | number,
  isVisitor?: boolean | null
}

export interface INetworkSocial extends ILinkProps {
  IconComponent: any
  disabled?: boolean
}

/**
 * @type {T} TRemainingTime
 * @property {T} days
 * @property {T} hours
 * @property {T} minutes
 * @property {T} seconds
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
export type TRemainingTime<T> = {
  days: T
  hours: T
  minutes: T
  seconds: T
}

/**
 * @interface IPromise
 * @property {string | number} days
 * @property {string | number} hours
 * @property {string | number} minutes
 * @property {string | number} seconds
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
export interface IPromise {
  days: string | number
  hours: string | number
  minutes: string | number
  seconds: string | number
}

export interface Components {
  name: string
  ComponentDoc: any
}

// componentes

/**
 * @interface ILinkProps
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
export interface ILinkProps {
  href: string
  target?: Target
  rel?: Rel
  className?: string
}

/**
 * @interface ILayoutProps
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
export interface ILayoutProps {
  title: string
}

/*

@interface ICardProps
@Author [OctaEDLP00](https://github.com/OctaEDLP00)

export interface ICardProps {
  vs: string
}
*/

/**
 * @interface ICardPartidos
 * @extends Partidos
 * @property {string} key
 * @Author [OctaEDLP00](https://github.com/OctaEDLP00)
 */
export interface ICardPartidos extends IPartidos {
  key?: string
}

export interface IMetaProps {
  title: string
  image: string
  description: string
}

export interface IBadgeProps {
  isVisitor: boolean
}

export interface ICardProps {
  img: string
  vs: string
  isVisitor: boolean
  copa: CopaType
  fecha: Fecha | number
  rawVs: string
  date: TimeType
}

export interface IBuiltWithProps {
  href: string
  target?: Target
  rel?: Rel | string
}
