import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify({
    functionPerRoute: true,
    edgeMiddleware: true,
    dist: new URL('./dist/', import.meta.url)
  })
})
