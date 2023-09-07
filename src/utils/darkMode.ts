import { $id } from "./Dom"

const { getItem, setItem } = window.localStorage || globalThis.localStorage

let selectedTheme = 'light'

const setTheme = (theme: string) => {
  selectedTheme = theme
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

window.onload = () => {
  const themeSelected = $id('darkLightMode') as HTMLSelectElement
  setTheme(selectedTheme)

  themeSelected.addEventListener('change', () => {
    const themeSelectedValue = themeSelected.value
    setTheme(themeSelectedValue)
    localStorage.setItem('theme', themeSelectedValue)
  })

  const localStorageTheme = localStorage.getItem('theme')
  if (localStorageTheme) {
    setTheme(localStorageTheme)
    themeSelected.value = localStorageTheme
  }
}
