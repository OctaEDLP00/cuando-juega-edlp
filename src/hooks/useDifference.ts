import { useState, useEffect } from 'react'
import { calcularDiferencia } from '@utils/DiferenciaHoraria'
import { IPromise } from 'src/types/main'

export function useDifference(timestamp: number) {

  const [difference, setDifference] = useState<IPromise>({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const calcular = async () => {
    const {
      days,
      hours,
      minutes,
      seconds
    } = await calcularDiferencia(timestamp)

    setDifference({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  useEffect(() => {
    calcular()
  }, [difference.days, difference.hours, difference.minutes, difference.seconds])

  return {
    difference
  }
}
