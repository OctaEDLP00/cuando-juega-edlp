import { TRemainingTime } from '../types/main'

export function renderTimeRemaining({ days, hours, minutes, seconds }: TRemainingTime<number | string>) {
  if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
    return (
      <div id='spans' className='dark:bg-[#f0f0f0] bg-red-600 text-white dark:text-black p-2 flex flex-col justify-center w-full'>
        <span className='text-center'>Ya empezó!</span>
      </div>
    )
  }

  if (days !== '00') {
    return (
      <div
        id='spans'
        className='dark:bg-[#f0f0f0] bg-red-600 text-white dark:text-black p-2 flex flex-col justify-center w-full'
      >
        <span className='text-center'>{days} Days {hours}:{minutes}:{seconds}</span>
      </div>
    )
  }

  if (days === '00' && hours !== '00' && minutes !== '00' && seconds !== '00') {
    return (
      <div id='spans' className='dark:bg-[#f0f0f0] bg-red-600 text-white dark:text-black p-2 flex flex-col justify-center w-full'>
        <span className='text-center'>
          {hours}:{minutes}:{seconds}
        </span>
      </div>
    )
  }
}
