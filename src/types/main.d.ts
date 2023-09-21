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

// Json Interfaces
export interface IPartidos {
  key?: string
  copa: string
  timestamp: number | null
  vs: string
  img: string
}
export interface IPartidosVS {
  key?: string
  copa?: string
  timestamp: number | null
  vs?: string
  img?: string
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
