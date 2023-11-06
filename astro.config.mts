import { defineConfig } from 'astro/config'
// Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
// Adapter
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://cuando-juega-edlp.netlify.app',
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify({
    functionPerRoute: true,
    dist: new URL('./dist/', import.meta.url)
  })
})
