import { useRemainingTime } from '@hooks/useRemainingTime'
import { renderTimeRemaining } from '@react/renderTimeRemainingCardVS'
import { cn } from '@utils/cn'
import { IPartidos } from '../../types/main'

type PartidosVS = Omit<IPartidos, 'key' | 'vs' | 'img'>

export default function CardVS({ copa, date }: PartidosVS) {
  const { days, hours, minutes, seconds } = useRemainingTime(new Date(date))

  return (
    <>
      {
        date === null ? (
          <div id='spans' className={`${cn(copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Torneo Binance' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]')} rounded-md py-2 px-4 flex flex-col justify-center w-full`}>
            <span className='text-center text-3xl'>Sin horario!</span>
          </div>
        ) : (
          <div id='spans' className={`${cn(copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Torneo Binance' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]')} rounded-md py-2 px-4 flex flex-col justify-center w-full`}>
            {
              renderTimeRemaining({ days, hours, minutes, seconds })
            }
          </div>
        )
      }
    </>
  )
}

