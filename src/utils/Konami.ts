interface KonamiProps {
	code: Array<string>
	keyPressed: string
	onFinishTime?: number
	onSucces: () => void
	onFinish?: () => void
}

interface KonamiState {
	[key: string]: number
}

const konamiState: KonamiState = {}

/**
 * @description
 * This function is a simple implementation of the Konami code.
 *
 * @param {Array<string>} code The Konami code
 * @param {string} keyPressed The key pressed by the user
 * @param {number} onFinishTime The time to wait before calling onFinish
 * @param {Function} onSucces The function to call when the Konami code is successfully entered
 * @param {Function} onFinish The function to call when the Konami code is not successfully entered
 * @returns {void}
 */
export function Konami({ code, keyPressed, onFinishTime, onSucces, onFinish }: KonamiProps): void {
	const codeKey = code.join('-')
	const konamiCodePosition = konamiState[codeKey] || 0

	const actualKey = keyPressed.toLowerCase()
	const actualCode = code[konamiCodePosition].toLowerCase()

	if (actualKey !== actualCode) {
		if (onFinish) onFinish()
		konamiState[codeKey] = 0
		return
	}

	const nextPosition = konamiCodePosition + 1

	if (nextPosition === code.length) {
		onSucces()
		konamiState[codeKey] = 0

		if (onFinishTime && onFinish) {
			setTimeout(
				() => {
					onFinish()
				},
				onFinishTime ?? 1000
			)
		}
	} else {
		konamiState[codeKey] = nextPosition
	}
}
