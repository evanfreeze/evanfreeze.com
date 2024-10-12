import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const posts = await getCollection("posts")

  return rss({
    title: "Evan Freeze's Blog",
    description: "Random musings about web dev, productivity, and other stuff.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  })
}
