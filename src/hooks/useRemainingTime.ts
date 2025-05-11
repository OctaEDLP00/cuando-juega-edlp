import { fillZeros } from '~/utils/fillZeros'
import { getRemainingTime } from '~/utils/getRemainingTime'
import { useEffect, useState } from 'react'

export const useRemainingTime = (targetDate: Date | null) => {
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

		if (continueCountdown) {
			// @ts-ignore
			clearInterval(timer)
		}

		// @ts-ignore
    return () => clearInterval(timer)
  }, [continueCountdown, targetDate])

  return { ...fillZeros(remainingDate) }
}
