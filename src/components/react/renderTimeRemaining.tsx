import { TRemainingTime } from '../../types/main'

export function renderTimeRemaining({ days, hours, minutes, seconds }: TRemainingTime<string>) {
  if (Number(days) === 0 && Number(hours) === 0 && Number(minutes) === 0 && Number(seconds) === 0) {
    return <span className='text-center'>Ya empezó!</span>
  }

  if (Number(days) !== 0) {
    return <span>
      {
        Number(days) === 1 ? (
          <>
            {Number(days).toString()} Día {hours}:{minutes}:{seconds}
          </>
        ) : (
          <>
            {Number(days).toString()} Dias {hours}:{minutes}:{seconds}
          </>
        )
      }
    </span>
  }

  if (Number(days) === 0 && Number(hours) !== 0 && Number(minutes) !== 0 && Number(seconds) !== 0) {
    return <span className='text-center'>
      {hours}:{minutes}:{seconds}
    </span>
  }
}
