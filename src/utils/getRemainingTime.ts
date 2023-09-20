import { alwaysPositive } from './alwaysPositive'

const { floor, ceil } = Math

export const getRemainingTime = (targetDate: Date) => {
  const currentDate = new Date().getTime()
  const diff = targetDate.getTime() - currentDate
  const days = alwaysPositive(floor(diff / (1000 * 60 * 60 * 24)));
  const hours = alwaysPositive(floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = alwaysPositive(ceil((diff % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = alwaysPositive(floor((diff % (1000 * 60)) / 1000));
  return { days, hours, minutes, seconds }
}
