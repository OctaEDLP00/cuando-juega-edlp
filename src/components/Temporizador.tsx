import { useRemainingTime } from '@hooks/useRemainingTime'
import { cn } from '@utils/cn'
import { RenderTimeRemaining } from './RenderTimeRemaining.tsx'
import { COPA_TYPE, FECHA_TYPE } from '../const/types'

/**
 * El formato es de tipo Fecha
 * que lleva los siguientes valores
 * `año`-`mes`-`dia`T`hora`:`minutos` ó
 * `año`-`mes`-`dia`T`hora`:`minutos:segundos`
*/
type DateType =
	`${number}-${number}-${number}T${number}:${number}`
	| `${number}-${number}-${number}T${number}:${number}:${number}`
type Fecha = typeof FECHA_TYPE[keyof typeof FECHA_TYPE]
type Copa = typeof COPA_TYPE[keyof typeof COPA_TYPE]

interface ImgProps {
	src: string
	alt: string
	height?: string | number
	width?: string | number
}

interface IPartidos {
	copa: Copa
	date: DateType | null
	fecha: Fecha | number
	img: ImgProps
	isSuspended?: boolean
	isVisitor?: boolean | null
	rawVs: string
	vs: string
}

type Partidos = Omit<
	IPartidos,
	'vs'
	| 'img'
	| 'isVisitor'
	| 'fecha'
	| 'isVisitor'
	| 'rawVs'
>

export default function Card({ date, copa, isSuspended }: Partidos) {
  const { days, hours, minutes, seconds } = useRemainingTime(new Date(date))

	if (date === null) {
		return (
			<div id='info' className={`${cn(copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]', copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]', copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]', copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]')} rounded-b-md py-2 px-4 flex flex-col justify-center w-full`}>
        <span className='text-center uppercase'>
          Sin info
        </span>
      </div>
		)
	}

	/*
	if (Number(days) >= 16 && hours === '00' && minutes === '00' && seconds === '00') {
		return (
			<div id='info' className={`${cn(copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]', copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]', copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]', copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]')} rounded-b-md py-2 px-4 flex flex-col justify-center w-full`}>
				<span className='text-center uppercase'>
					{days} restantes
				</span>
			</div>
		)
	}
	*/

	if ((date === null || date !== null) && isSuspended && isSuspended !== null) {
		return (
			<div id='info' className={`${cn(copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]', copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]', copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[rgb(74,160,44)]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]', copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]')} rounded-b-md py-2 px-4 flex flex-col justify-center w-full`}>
				<span className='text-center uppercase'>
					Suspendido
				</span>
      </div>
    )
	}

	return (
		<div id='info' className={`${cn(copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]', copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]', copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]', copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]', copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]', copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]', copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]')} rounded-b-md py-2 px-4 flex flex-col justify-center w-full h-auto`}>{RenderTimeRemaining({ days, hours, minutes, seconds })}</div>
  )
}




