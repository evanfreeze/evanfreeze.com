---
layout: ../../layouts/BlogPostLayout.astro
title: The Wave of Declarative UI
description: It seems like all the major app platforms are riding it
pubDate: January 20, 2024
---

Over the last few weeks, I've spent a large chunk of time diving into [Jetpack Compose](https://developer.android.com/jetpack/compose), which is the latest and greatest™ way of building Android apps. What struck me almost immediately is how similar it is conceptually to Swift UI. I've used Swift UI a fair amount building [ReadRate](https://www.readrate.app) and even more time using React on the web.

All of these frameworks (what does that word even mean anymore) are leaning fully into the idea that your UI should be delcaractive — focused on _what_ should be on screen and not _how_ it should get there. The main idea being you declare "state" and your UI is just the result of calling a function with that state as an argument (more or less). If you follow the patterns correctly, it's essentially impossible for the UI to get out-of-sync with your state. This "eliminates an entire class of bugs" as people are fond of saying.

I dig it. It makes intuitive sense to my brain and I build apps and websites significantly faster when working like this. I remember the jQuery days on the web. I remember `document.getElementById` calls everywhere (before `document.querySelector` was even a thing). I sometimes feel nostalgic for a time when every update to my UI meant I explicitly called a function, it was so much harder and slower. I gave up on so many projects because they felt too daunting. Ideas never saw the light of day because I couldn't be bothered to power through the tedium.

There's been a lot of hand-wringing about React lately (rightly so) but I think it's easy to lose sight of what it brought us — this entire declarative paradigm. It's been fascinating to watch Apple and whoever runs Android (Google, I guess?) move in a more React-y direction with their app development frameworks. It's great to see them take different approaches to solving the various problems that come from this way of building apps (learning lessons from React along the way). It's funny what kinds of optimizations you can make when you have a compiler. I can see why the React team is working on one and why Svetle chose to go that direction.

The bottom line for me is I have a lot more fun working this way. I'm excited to see how the next generation of frameworks build on these foundations.
