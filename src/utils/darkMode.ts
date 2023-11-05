/*
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

let selectedTheme = systemTheme

const setTheme = (theme: string) => {
  selectedTheme = theme
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

window.onload = () => {
  const themeSelect = document.getElementById('darkLightMode') as HTMLSelectElement
  setTheme(selectedTheme)

  const changeTheme = () => {
    const themeSelectedValue = themeSelect.value
    localStorage.setItem('theme', themeSelectedValue)
    setTheme(themeSelectedValue)
  }

  themeSelect.addEventListener('change', changeTheme)

  const localStorageTheme = localStorage.getItem('theme')
  if (localStorageTheme) {
    // console.log(localStorageTheme)
    themeSelect.value = localStorageTheme
    setTheme(localStorageTheme)
  }
}
*/
