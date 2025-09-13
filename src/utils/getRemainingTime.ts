import { alwaysPositive } from './alwaysPositive'

const { floor } = Math

export const getRemainingTime = (targetDate: Date) => {
  const currentDate = new Date()
	const diff = targetDate.getTime() - currentDate.getTime()
  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    }
  }

  const days = alwaysPositive(
    floor(diff / (1000 * 60 * 60 * 24))
  )
  const hours = alwaysPositive(
    floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  )
  const minutes = alwaysPositive(
    floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  )
  const seconds = alwaysPositive(floor((diff % (1000 * 60)) / 1000))
	return {
    days,
    hours,
    minutes,
    seconds,
    expired: false,
  }
}
