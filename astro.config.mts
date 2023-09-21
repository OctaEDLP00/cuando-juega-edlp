import { defineConfig } from 'astro/config'
// Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
// Adapter
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  domain: 'https://cuando-juega-edlp.vercel.app',
  integrations: [
    react(),
    tailwind()
  ],
  output: 'server',
  adapter: vercel({
    imageService: true,
    edgeMiddleware: true,
    functionPerRoute: false,
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    },
    devImageService: 'squoosh',
    imagesConfig: {
      domains: ['https://squoosh.app'],
      sizes: [240, 320, 1280],
      formats: ['image/webp'],
      remotePatterns: []
    }
  })
})
