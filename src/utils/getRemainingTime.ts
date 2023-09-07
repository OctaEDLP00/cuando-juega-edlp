import { localeDate } from './localeDate'
import { alwaysPositive } from './alwaysPositive'

const { floor } = Math

export const getRemainingTime = (targetDate: Date) => {
  // const currentDate = localeDate()
  // const diff = targetDate.getTime() - currentDate.getTime()

  const currentDate = new Date();
  const timeZoneOffset = currentDate.getTimezoneOffset(); // Obtener la diferencia de minutos con respecto a UTC
  const targetDateWithOffset = new Date(targetDate.getTime() - timeZoneOffset * 60000);

  const diff = targetDateWithOffset.getTime() - currentDate.getTime();
  const days = alwaysPositive(floor(diff / (1000 * 60 * 60 * 24)))
  const hours = alwaysPositive(floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  const minutes = alwaysPositive(floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
  const seconds = alwaysPositive(floor((diff % (1000 * 60)) / 1000))
  return { days, hours, minutes, seconds }
}
