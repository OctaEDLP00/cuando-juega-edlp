import { type Partidos } from '@/types/main'
import { useRemainingTime } from '@hooks/useRemainingTime'
import { cn } from '@utils/cn'
import { RenderTimeRemaining } from './RenderTimeRemaining.tsx'

export default function Card({ date, copa }: Partidos) {
  const { days, hours, minutes, seconds } = useRemainingTime(new Date(date))
  return (
    date === null ? (
      <div id='info' className={`${cn(copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]', copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]')} rounded-b-md py-2 px-4 flex flex-col justify-center w-full`}>
        <span className='text-center uppercase'>
          Sin info
        </span>
      </div>
    ) : (
        <div id='info' className={`${cn(copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]', copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]')} rounded-b-md py-2 px-4 flex flex-col justify-center w-full`}>
        {
          RenderTimeRemaining({ days, hours, minutes, seconds })
        }
      </div>
    )
  )
}




