import { useState, useEffect } from 'react'
import { getRemainingTime } from '@utils/getRemainingTime'
import { fillZeros } from '@utils/fillZeros'

export const useRemaningTime = (targetDate: Date | null) => {
  if (targetDate === null) return
  const [remainingDate, setRemainingDate] = useState(getRemainingTime(targetDate))

  const { days, hours, minutes, seconds } = remainingDate
  const continueCountdown = days === 0 && hours === 0 && minutes === 0 && seconds === 0

  useEffect(() => {
    const timer =
      !continueCountdown &&
      setInterval(() => {
        setRemainingDate(getRemainingTime(targetDate!))
      }, 1000)

    if (continueCountdown) clearInterval(timer)

    return () => clearInterval(timer)
  }, [continueCountdown])

  return { ...fillZeros(remainingDate) }
}
