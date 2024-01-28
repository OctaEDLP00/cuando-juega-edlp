import { TRemainingTime } from '@/types/main'

export function RenderTimeRemaining({ days, hours, minutes, seconds }: TRemainingTime<string>) {
  if (Number(days) === 0 && Number(hours) === 0 && Number(minutes) === 0 && Number(seconds) === 0) {
    return <span className='text-center'>Ya empezó!</span>
  }

  if (Number(days) !== 0) {
    return <span className='text-center'>
      {
        Number(days) === 1
          ? (<>{days} Día {hours}:{minutes}:{seconds}</>)
          : (<>{days} Dias {hours}:{minutes}:{seconds}</>)
      }
    </span>
  }

  if (Number(hours) >= 0 && Number(minutes) >= 0 && Number(seconds) !== 0) {
    return <span className='text-center'>
      {hours}:{minutes}:{seconds}
    </span>
  }
}
