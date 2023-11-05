/*
import confetti from 'canvas-confetti'
import Toastify from 'toastify-js'

let konamiCode: Array<string> = []
const secretCode: ReadonlyArray<string> = ['e', 'd', 'l', 'p', '9', '1', '1']
const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
const easterEggButton = document.getElementById('easterEggButton')

export const isMobileDevice = (): boolean => mobile.test(navigator.userAgent)
const shakeScreen = () => {
  document.body.style.animation = 'shake .5s linear'
  setTimeout(() => { document.body.style.animation = '' }, 500)
}
const activateEasterEgg = () => {
  Toastify({
    selector: document.querySelector('#app'),
    text: 'Easter egg desbloqueado!',
    duration: 3000,
    gravity: 'bottom',
    style: {
      background: 'linear - gradient(to right, #0e03c7, #058eaa)'
    }
  }).showToast()
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

const EasterEggDevice = (inputCode: string) => {
  if (inputCode.toLowerCase() === secretCode.join('')) {
    activateEasterEgg()
    shakeScreen()
  }
}

easterEggButton.addEventListener('click', () => {
  if (isMobileDevice()) {
    const userInput = prompt('Para activar el Easter Egg, ingrese el código Konami:')
    if (userInput) EasterEggDevice(userInput)
  }
})

if (!isMobileDevice()) {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    konamiCode.push(e.key.toLowerCase())
    konamiCode.splice(-secretCode.length - 1, konamiCode.length - secretCode.length)

    if (JSON.stringify(konamiCode) === JSON.stringify(secretCode)) {
      activateEasterEgg()
    }
  })
}
*/
