import confetti from 'canvas-confetti'
import Toastify from 'toastify-js'
let konamiCode: Array<string> = []
const secretCode: ReadonlyArray<string> = ['e', 'd', 'l', 'p', '9', '1', '1']
const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
export const isMobileDevice = (): boolean => mobile.test(navigator.userAgent)

const activateEasterEgg = () => {
  const toast = Toastify({
    selector: document.querySelector('#App'),
    text: '✔ ✅ Easter egg desbloqueado!',
    duration: 3000,
    gravity: 'bottom',
    style: {
      background: 'linear-gradient(to right, #0e03c7, #058eaa)'
    }
  })
  toast.showToast()
  confetti({
    colors: ['#f00', '#fff'],
    shapes: ['circle', 'square', 'star'],
    ticks: 300,
    particleCount: 400,
    origin: {
      y: 0.2
    }
  })
}

const EventListenerFn = (e: KeyboardEvent) => {
  konamiCode.push(e.key.toLowerCase())
  konamiCode.splice(-secretCode.length - 1, konamiCode.length - secretCode.length)

  if (JSON.stringify(konamiCode) === JSON.stringify(secretCode)) {
    activateEasterEgg()
  }
}

if (!isMobileDevice()) window.addEventListener('keydown', EventListenerFn)
