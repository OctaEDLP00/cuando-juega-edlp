export const isLocal = globalThis.process.env.IS_PROD ?? true
export const LOCAL_URL_API_ENDPOINT_2023 = 'http://localhost:4321/api/2023/partidos'
export const PROD_URL_API_ENDPOINT_2023 = 'https://cuando-juega-edlp.vercel.app/api/2023/partidos'
export const useURL = isLocal ? LOCAL_URL_API_ENDPOINT_2023 : PROD_URL_API_ENDPOINT_2023
