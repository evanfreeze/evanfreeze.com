import { defineConfig } from "astro/config"
import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.evanfreeze.com",
  adapter: netlify(),
  integrations: [],
})
