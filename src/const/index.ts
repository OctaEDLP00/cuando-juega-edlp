const isLocal = import.meta.env.MODE === 'development'
const baseUrlDev = 'http://localhost:4321'
export const URL_API_ENDPOINT = (year: string) => isLocal ? `${baseUrlDev}/api/${year}/partidos` : `${import.meta.env.SITE}/api/${year}/partidos`
