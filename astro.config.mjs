import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import pageInsight from "astro-page-insight"
import sitemap from "@astrojs/sitemap"
import netlify from "@astrojs/netlify"
import sentry from "@sentry/astro"
import spotlightjs from "@spotlightjs/astro"

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    pageInsight(),
    sitemap(),
    sentry({
      dsn: "https://f89c82e01644247c0542cedbcef9b6f1@o4507927506911232.ingest.us.sentry.io/4507927651483648",
      sourceMapsUploadOptions: {
        project: "imla",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    spotlightjs(),
  ],
  output: "hybrid",
  adapter: netlify(),
  site: "https://imla.io",
})
