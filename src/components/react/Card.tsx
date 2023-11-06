import { useRemainingTime } from '@hooks/useRemainingTime'
import { renderTimeRemaining } from '@react/renderTimeRemaining'
import { cn } from '@utils/cn'
import { IPartidos } from '../../types/main'

export default function Card({ date, copa, vs, img }: IPartidos) {
  const { days, hours, minutes, seconds } = useRemainingTime(new Date(date))

  return (
    <div className={`${cn(copa === 'Copa Argentina' && 'bg-[#FF9800] shadow-lg shadow-[#FF5722] dark:shadow-[#FF9800] dark:bg-[#FF5722]', copa === 'Torneo Binance' && 'bg-[#0BBAD9] shadow-lg shadow-[#09798C] dark:shadow-[#0BBAD9] dark:bg-[#09798C]', copa === 'Copa Libertadores' && 'bg-[#4AA02C] shadow-[#007848] shadow-lg dark:shadow-[#4AA02C] dark:bg-[#007848]', copa === 'Copa Sudamericana' && 'bg-[#FF1010] shadow-lg dark:shadow-[#FF1010] dark:bg-[#A10102] shadow-[#A10102]')} flex flex-col rounded-lg items-center gap-4 text-center p-4 md:max-w-screen-xl max-w-screen-xl md:my-0`}>
      <picture>
        <img
          loading='lazy'
          className='object-contain w-16 h-16'
          src={img}
          alt={`Escudo del equipo ${vs}`}
        />
      </picture>
      <h2 className='mx-0 my-2'>
        <a className='transition-color hover:text-[#f00]' href={`/${vs.replace(' ', '-')}`}>{vs}</a>
      </h2>
      <p className='text-sm'>{copa}</p>
      {
        date === null ? (
          <div id='spans' className={`${cn(copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Torneo Binance' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]')} rounded-md py-2 px-4 flex flex-col justify-center w-full`}>
            <span className='text-center'>
              S/hora
            </span>
          </div>
        ) : (
            <div id='spans' className={`${cn(copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Torneo Binance' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]')} rounded-md py-2 px-4 flex flex-col justify-center h-full w-full`}>
            {
              renderTimeRemaining({ days, hours, minutes, seconds })
            }
          </div>
        )
      }
    </div>
  )
}




