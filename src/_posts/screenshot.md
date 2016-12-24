---
title: "Taking Screenshots in A-Frame"
author: twitter|dmarcos|Diego Marcos
date: 2016-12-23 10:00:00
layout: blog
image:
  src: screenshot.png
---

Did you know that [A-Frame v0.4.0](/blog/aframe-v0.4.0/) lets you take a
screenshot of any scene? Press `<ctrl> + <alt> + s` to take a regular
screenshot or `<ctrl> + <alt> + <shift> + s` to capture an equirectangular
panorama.

The latter is very handy to create scene previews so users can take a quick
peek without having to wait for the whole experience to load. You could create
a gallery of content that presents a grid of interactive previews without the
overhead of initializing every single scene.

<!-- more -->

Below is what it takes to create a preview of the A-Frame [Anime UI
example](https://aframe.io/aframe/examples/showcase/anime-UI/) based on an
image generated with `<ctrl> + <alt> + <shift> + s`:

```html
<a-scene embedded style="height:400px; width: 100%; margin: auto;">
   <a-sky src="/images/blog/screenshot.png"></a-sky>
</a-scene>
```

And below is the result! The example looks like the normal example, but it's
actually a skysphere:

<script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
<a-scene embedded style="height:400px; width: 100%; margin: auto;">
  <a-sky src="/images/blog/screenshot.png"></a-sky>
</a-scene>
