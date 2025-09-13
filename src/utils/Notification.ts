import type { DateType, INotification, INotificationWithoutDate } from '~/const/types.d'
import Toastify from 'toastify-js'
import { getRemainingTime } from './getRemainingTime'

function checkMatchNotification(date: DateType): boolean {
  const targetDate = new Date(date)
  const { days, hours, minutes, seconds } = getRemainingTime(targetDate)
  return days === 0 && hours === 0 && minutes === 0 && seconds === 0
}

export default function requestNotification({ icon, notificationMsg, body, date }: INotification) {
  Notification.requestPermission()
    .then(permission => {
      if (permission === 'granted') {
        if (checkMatchNotification(date)) {
          showNotification({ notificationMsg, body, icon })
          Toastify({
            selector: document.querySelector('#App')!,
            text: '✔ Permiso Avtivado',
            duration: 5000,
            gravity: 'bottom',
            style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' },
          }).showToast()
        }
      }

      if (permission === 'denied') {
        Toastify({
          selector: document.querySelector('#App')!,
          text: 'Activa el perimiso de notificaciones para avisarte cuando empiece el partido',
          duration: 5000,
          gravity: 'bottom',
          style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' },
        }).showToast()
      }

      if (permission === 'default') {
        Toastify({
          selector: document.querySelector('#App')!,
          text: 'Esta web te pedira permiso para mostrar notificaciones',
          duration: 5000,
          gravity: 'bottom',
          style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' },
        }).showToast()
      }
    })
    .catch(error => {
      console.error('Error al solicitar permiso de notificación:', error)
      Toastify({
        selector: document.querySelector('#App')!,
        text: 'Error al solicitar permiso de notificación',
        duration: 5000,
        gravity: 'bottom',
        style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' },
      }).showToast()
    })
}

function showNotification({ icon, notificationMsg, body }: INotificationWithoutDate) {
  return new Notification(notificationMsg ?? 'El partido ya comenzo!!', {
    body: body ?? '¡No te lo pierdas!',
    icon: icon ?? '/assets/favicon.webp',
  })
}
