---
title: A-Frame Tips - Screenshot
author: twitter|dmarcos|Diego Marcos
date: 2016-12-23 10:00:00
layout: blog
---

<script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>

Did you know that [A-Frame 0.4.0](http://localhost:4000/blog/aframe-v0.4.0/) lets you take a screenshot of any scene? Press `<alt> + <ctrl> + s` to take a regular screenshot or `<alt> + <ctrl> + <shift> + s` to capture an equirectangular panorama. The latter is very handy to create scene previews so users can take a quick peek without having to wait for the whole experience to load. You could create a gallery of content that presents a grid of interactive previews without the overhead of initializing every single scene. This is what it takes to create a preview of the A-Frame [Anime UI example](https://aframe.io/aframe/examples/showcase/anime-UI/) based on an image generated with `<alt> + <ctrl> + <shift> + s`:

  ```html
  <a-scene embedded style="height:400px; width: 100%; margin: auto;">
     <a-sky src="/images/anime-ui-pano.png"></a-sky>
  </a-scene>
  ```

 And this the result:

<a-scene embedded style="height:400px; width: 100%; margin: auto;">
   <a-sky src="/images/anime-ui-pano.png"></a-sky>
</a-scene>

