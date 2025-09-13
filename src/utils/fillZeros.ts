import { mapValues } from './mapValues'

type TRemainingTime<T> = {
  days: T
  hours: T
  minutes: T
  seconds: T
}

export const fillZeros = (remainingDate: TRemainingTime<number>) => {
  return mapValues(remainingDate, (value: string) =>
    `${value}`.padStart(2, '0'),
  ) as TRemainingTime<string>
}
