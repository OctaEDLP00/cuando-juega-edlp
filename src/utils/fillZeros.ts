import { mapValues } from './mapValues'
import { TRemainingTime } from '../types/main'

export const fillZeros = (remainingDate: TRemainingTime<number>) => {
  return mapValues(remainingDate, (value) => `${value}`.padStart(2, '0')) as TRemainingTime<string>
}
