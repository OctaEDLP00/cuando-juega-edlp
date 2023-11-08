import { type CopaType, type TimeType } from '../types/main'

interface Partidos { copa: CopaType, date: TimeType | null, vs: string, img: string }

export const partidos: Array<Partidos> = [
  {
    copa: "Torneo Binance",
    date: "2023-11-12T19:00:00",
    vs: "Central Cba",
    img: "/assets/CentralCba.webp"
  },
  {
    copa: "Copa Argentina",
    date: null,
    vs: "Boca Juniors",
    img: "/assets/BocaJrs.webp"
  },
  {
    copa: "Torneo Binance",
    date: null,
    vs: "Lanus",
    img: "/assets/Lanus.webp"
  }
]
