import { type APIRoute } from 'astro'

export const GET: APIRoute = () => new Response(
  JSON.stringify(
    [
      {
        copa: "Torneo Binance",
        date: "2023-11-05T20:30:00",
        vs: "DyJ",
        img: "/assets/DyJ.webp"
      },
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
  )
)

