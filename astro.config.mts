import { defineConfig } from 'astro/config'
// Integrations
import tailwindcss from '@tailwindcss/vite'
// Adapter
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	site: 'https://cuando-juega-edlp.netlify.app',
	devToolbar: { enabled: false },
	vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
	adapter: netlify()
})

// { edgeMiddleware: true }
