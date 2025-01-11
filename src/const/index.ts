const isLocal = import.meta.env.MODE === 'development'
const baseUrlDev = 'http://localhost:4321'
export const URL_API_ENDPOINT = isLocal
	? `${baseUrlDev}/api/partidos`
	: `${import.meta.env.SITE}/api/partidos`
