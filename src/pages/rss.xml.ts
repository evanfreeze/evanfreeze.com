import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "Evan Freeze's Blog",
    description: "Random musings about web dev, productivity, and other stuff.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  })
}
