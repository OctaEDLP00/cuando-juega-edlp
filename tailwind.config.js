const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: [ './src/**/*.{astro,js,jsx,md,mdx,ts,tsx}' ],
  theme: {
    extend: {
      skew: {
        '45': '45deg',
        '90': '90deg',
        '135': '135deg',
        '180': '180deg',
        '225': '225deg',
        '270': '270deg'
      }
		},
		fontFamily: {
      CCPL: ['Cascadia Code PL', ...defaultTheme.fontFamily.mono]
    }
	}
}
