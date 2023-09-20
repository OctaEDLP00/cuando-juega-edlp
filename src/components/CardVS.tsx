import { IPartidosVS } from '../types/main'
import { useRemaningTime } from '@hooks/useRemainingTime'
import { renderTimeRemaining } from '@components/renderTimeRemaining'

export default function CardVS({ timestamp }: IPartidosVS) {
  const { days, hours, minutes, seconds } = useRemaningTime(new Date(timestamp))

  return (
    <>
      {
        timestamp === null ? (
          <div
            id='spans'
            className='dark:bg-[#f0f0f0] bg-red-600 text-white dark:text-black p-2 flex flex-col justify-center w-full'
          >
            <span className='text-center'>Sin horario!</span>
          </div>
        ) : renderTimeRemaining({ days, hours, minutes, seconds })
      }
    </>
  )
}

