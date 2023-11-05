const isLocal = import.meta.env.MODE === 'development'
const baseUrlDev = 'http://localhost:4321'
export const URL_API_ENDPOINT_2023 = isLocal ? `${baseUrlDev}/api/2023/partidos` : `${import.meta.env.SITE}/api/2023/partidos`
