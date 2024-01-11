import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: "Evan Freeze's Blog",
        description: 'Random musings about web dev, productivity, and other stuff.',
        site: context.site,
        // @ts-expect-error RSSFeedItem wants `link` but Astro auto-generates it
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    });
}
