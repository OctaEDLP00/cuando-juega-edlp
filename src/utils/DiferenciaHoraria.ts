import { IPromise } from '../types/main'

export async function calcularDiferencia(fechaHora: number) {
  return new Promise<IPromise>((resolve, reject) => {
    const fechaPartido = new Date(fechaHora)
    const interval = setInterval(() => {
      const now = new Date()
      const diferenciaEnMilisegundos = fechaPartido - now

      if (diferenciaEnMilisegundos <= 0) {
        clearInterval(interval)
        resolve({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }

      const diferenciaDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24))
      const diferenciaRestante = diferenciaEnMilisegundos - (diferenciaDias * 1000 * 60 * 60 * 24)
      const diferenciaDate = new Date(diferenciaRestante)

      const hours = diferenciaDate.getUTCHours()
      const minutes = diferenciaDate.getUTCMinutes()
      const seconds = diferenciaDate.getUTCSeconds()

      resolve({
        days: diferenciaDias,
        hours,
        minutes,
        seconds
      })
    }, 1000)
  })
}
