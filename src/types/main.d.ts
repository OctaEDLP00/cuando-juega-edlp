import { REL, TARGET } from './enum'

// Web Interfaces
export interface ILayoutProps {
  title: string
}
export interface IButtonProps {
  className: string
  href: string
  target?: string
}
export interface IPagesProps { }
export interface ICardProps {
  vs: string
}
export interface IMainSpecialProps {
  className?: string
}
export interface IHeaderProps {
  className?: string
}

export interface ILinkProps {
  href: string
  target?: TARGET
  rel?: REL | string
}

// Json Interfaces
export type TimeType = `${number}-${number}-${number}T${number}:${number}:${number}`
export type CopaType =
  "Torneo Binance" |
  "Copa Libertadores" |
  "Copa Sudamericana" |
  "Copa Argentina"

export interface IPartidos {
  key?: string
  copa: CopaType
  date: TimeType | null
  vs: string
  img: string

}
export interface IPromise {
  days: string | number
  hours: string | number
  minutes: string | number
  seconds: string | number
}
export type TRemainingTime<T> = {
  days: T
  hours: T
  minutes: T
  seconds: T
}
