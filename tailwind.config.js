const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: [ './src/**/*.{astro,js,jsx,md,mdx,ts,tsx}' ],
  theme: {
    fontFamily: {
      CCPL: ['Cascadia Code PL', ...defaultTheme.fontFamily.mono]
    }
	}
}
