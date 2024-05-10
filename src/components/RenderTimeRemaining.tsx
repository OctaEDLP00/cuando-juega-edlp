type TRemainingTime<T> = {
	days: T
	hours: T
	minutes: T
	seconds: T
}

export function RenderTimeRemaining({ days, hours, minutes, seconds }: TRemainingTime<string>) {
	const daysNumber = Number(days)
	const hoursNumber = Number(hours)
	const minutesNumber = Number(minutes)
	const secondsNumber = Number(seconds)

	if (
		daysNumber === 0
		&& hoursNumber === 0
		&& minutesNumber === 0
		&& secondsNumber === 0
	) return (
		<span className='text-center'>Ya empezó!</span>
	)

	if (daysNumber !== 0) {
		return (
			<span className='text-center'>
				{
					daysNumber === 1
						? (<>{days} Día {hours}:{minutes}:{seconds}</>)
						: (<>{days} Dias {hours}:{minutes}:{seconds}</>)
				}
			</span>
		)
	}

	if (daysNumber === 0 && hoursNumber >= 0 && minutesNumber >= 0 && secondsNumber >= 0) {
		return <span className='text-center'>
			{hours}:{minutes}:{seconds}
		</span>
	}
}
