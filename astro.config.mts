import { defineConfig } from 'astro/config'
// Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
// Adapter
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	site: 'https://cuando-juega-edlp.netlify.app',
	devToolbar: { enabled: false },
  integrations: [react(), tailwind()],
  output: 'server',
	adapter: netlify()
})

// { edgeMiddleware: true }
