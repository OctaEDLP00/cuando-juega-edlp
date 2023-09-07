import confetti from 'canvas-confetti'
import { toast } from 'wc-toast'

let konamiCode: Array<string> = []
const secretCode: ReadonlyArray<string> = ['e', 'd', 'l', 'p', '9', '1', '1']

const { success } = toast

const isMobileDevice = (): boolean => window.innerWidth <= 768

const shakeScreen = () => {
  document.body.style.animation = 'shake .5s linear'
  setTimeout(() => { document.body.style.animation = '' }, 500)
}

const activateEasterEgg = () => {
  success('Easter egg desbloqueado!', { duration: 2000 })
  confetti({
    colors: ['#f00', '#fff'],
    shapes: ['circle'],
    ticks: 500,
    particleCount: 100
  })
}
const activateEasterEggMobile = () => {
  success('Easter egg desbloqueado!', { duration: 2000 })
  confetti({
    colors: ['#f00', '#fff'],
    shapes: ['circle'],
    ticks: 500,
    particleCount: 100
  })
}

const EasterEgg = (e: KeyboardEvent) => {
  konamiCode.push(e.key)
  konamiCode = konamiCode.slice(-secretCode.length)

  if (JSON.stringify(konamiCode) === JSON.stringify(secretCode)) {
    if (isMobileDevice()) {
      shakeScreen()
      activateEasterEggMobile()
    }
    if (!isMobileDevice()) activateEasterEgg()
  }
}

window.addEventListener('keydown', EasterEgg)
