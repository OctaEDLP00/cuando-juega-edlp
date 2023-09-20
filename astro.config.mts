import { defineConfig } from 'astro/config'
// Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
//Plguins
import remarkRehypePL from 'remark-rehype'
// Adapter
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    mdx()
  ],
  output: 'server',
  adapter: vercel({
    speedInsights: {
      enabled: true
    },
    webAnalytics: {
      enabled: true
    },
    functionPerRoute: false,
    imageService: true,
    edgeMiddleware: true
  })
});
