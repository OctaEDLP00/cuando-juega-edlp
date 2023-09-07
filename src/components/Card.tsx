import { IPartidos } from '../types/main'
import { useRemaningTime } from '@hooks/useRemainingTime'
import { renderTimeRemaining } from '@components/renderTimeRemaining'

export default function Card({ timestamp, copa, vs, img }: IPartidos) {
  const { days, hours, minutes, seconds } = useRemaningTime(new Date(timestamp))

  return (
    <div className='bg-[#8b0000] text-white flex flex-col dark:bg-white dark:text-[#8b0000] rounded-lg shadow-md dark:shadow-red-400 dark:shadow-md overflow-hidden items-center gap-4 text-center p-4 max-w-xs md:max-w-xs md:my-0 md:mx-auto'>
      <picture>
        <img
          loading='lazy'
          className='object-contain w-16 h-16'
          src={img}
          alt={`Escudo del equipo ${vs}`}
        />
      </picture>
      <h2 className='mx-0 my-2'>
        <a href={`/${vs.replace(' ', '-')}`}>{vs}</a>
      </h2>
      <p className='text-sm'>{copa}</p>
      {
        timestamp === null && (
          <div id='spans' className='dark:bg-[#f0f0f0] bg-red-600 text-white dark:text-black p-2 flex flex-col justify-center w-full'>
            <span className='text-center'>Horario a definir!</span>
          </div>
        )
      }
      {timestamp !== null && renderTimeRemaining({ days, hours, minutes, seconds })}
    </div>
  )
}




