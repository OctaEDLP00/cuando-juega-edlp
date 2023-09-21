import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params, request }) => {
  const partidos = [
    {
      copa: "Torneo Binance 2023",
      timestamp: 1696179600000,
      vs: "Gimnasia",
      img: "/assets/Gimnasia.png"
    },
    {
      copa: "Torneo Binance 2023",
      timestamp: 1696705200000,
      vs: "Godoy Cruz",
      img: "/assets/GodoyCruz.svg"
    },
    {
      copa: "Torneo Binance 2023",
      timestamp: null,
      vs: "Sarmiento",
      img: "/assets/Sarmiento.png"
    },
    {
      copa: "Torneo Binance 2023",
      timestamp: null,
      vs: "DyJ",
      img: "/assets/DyJ.png"
    },
    {
      copa: "Torneo Binance 2023",
      timestamp: null,
      vs: "Lanus",
      img: "/assets/Lanus.png"
    }
  ]

  return new Response(JSON.stringify(partidos))
}
