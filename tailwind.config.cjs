/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
	content: [
    './src/**/*.{astro,js,jsx,md,mdx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      CCPL: ['Cascadia Code PL', ...defaultTheme.fontFamily.mono]
    }
	}
}
