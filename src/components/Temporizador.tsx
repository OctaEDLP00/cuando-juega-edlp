import { useRemainingTime } from '~/hooks/useRemainingTime'
import { cn } from '~/utils/cn'
import type { DateType, Copa } from '../const/types.d'
import { RenderTimeRemaining } from './RenderTimeRemaining'

interface Partidos {
	date: DateType |  null
	copa: Copa,
	isSuspended: boolean | null | undefined
}

export default function Temporizador({ date, copa, isSuspended }: Partidos) {
	const { ...formatedDate } = useRemainingTime(new Date(date ?? Date.now()))

	if (date === null) {
		return (
			<div id='info' className={
				`${cn(
					copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]',
					copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]',
					copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]',
					copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]',
					copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]',
					copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]',
					copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]',
					copa === 'Trofeo de Campeones' && 'bg-[#575757] dark:bg-[#c4c4c4]',
					copa === 'Torneo Apertura' && 'bg-[#019e64] dark:bg-[#00ffa2]',
					copa === 'Torneo Clausura' && 'bg-[#970138] dark:bg-[#ff005d]'
				)} rounded-b-md py-2 px-4 flex flex-col justify-center w-full
				`
			}>
        <span className='text-center uppercase'>
          Sin info
        </span>
      </div>
		)
	}

	if ((date === null || date !== null) && isSuspended && isSuspended !== null) {
		return (
			<div id='info' className={
				`${cn(
					copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]',
					copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]',
					copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]',
					copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]',
					copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[rgb(74,160,44)]',
					copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]',
					copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]',
					copa === 'Trofeo de Campeones' && 'bg-[#575757] dark:bg-[#c4c4c4]',
					copa === 'Torneo Apertura' && 'bg-[#019e64] dark:bg-[#00ffa2]',
					copa === 'Torneo Clausura' && 'bg-[#970138] dark:bg-[#ff005d]'
				)} rounded-b-md py-2 px-4 flex flex-col justify-center w-full
				`
			}>
				<span className='text-center uppercase'>
					Suspendido
				</span>
      </div>
    )
	}

	return (
		<div id='info' className={
			`${cn(
				copa === 'Torneo de La Liga' && 'bg-[#1c4b88] dark:bg-[#4394ff]',
				copa === 'Noche del León' && 'bg-[#3730A3] dark:bg-[#6366F1]',
				copa === 'Copa Argentina' && 'bg-[#FF5722] dark:bg-[#FF9800]',
				copa === 'Copa de La Liga' && 'bg-[#09798C] dark:bg-[#0BBAD9]',
				copa === 'Copa Libertadores' && 'bg-[#007848] dark:bg-[#4AA02C]',
				copa === 'Copa Sudamericana' && 'bg-[#A10102] dark:bg-[#FF1010]',
				copa === 'Supercopa Argentina' && 'bg-[#8b1578] dark:bg-[#B93CA5]',
				copa === 'Trofeo de Campeones' && 'bg-[#575757] dark:bg-[#c4c4c4]',
				copa === 'Torneo Apertura' && 'bg-[#019e64] dark:bg-[#00ffa2]',
				copa === 'Torneo Clausura' && 'bg-[#970138] dark:bg-[#ff005d]'
			)} rounded-b-md py-2 px-4 flex flex-col justify-center w-full h-auto
			`
		}>{RenderTimeRemaining(formatedDate)}</div>
  )
}




