import { defineConfig } from "astro/config"
import netlify from "@astrojs/netlify"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.evanfreeze.com",
  adapter: netlify(),
  integrations: [react()],
})
