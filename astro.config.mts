import { defineConfig } from 'astro/config'
// Integrations
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
// Adapter
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	site: 'https://cuando-juega-edlp.netlify.app',
	devToolbar: { enabled: false },
  integrations: [react()],
	vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
	adapter: netlify()
})

// { edgeMiddleware: true }
