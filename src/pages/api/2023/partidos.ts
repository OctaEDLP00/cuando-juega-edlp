import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify([
      {
        copa: "Torneo Binance 2023",
        timestamp: 1695245400000,
        vs: "San Lorenzo",
        img: "/assets/SanLorenzo.png"
      },
      {
        copa: "Torneo Binance 2023",
        timestamp: null,
        vs: "Gimnasia",
        img: "/assets/Gimnasia.png"
      },
      {
        copa: "Torneo Binance 2023",
        timestamp: null,
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
    ])
  )
}
