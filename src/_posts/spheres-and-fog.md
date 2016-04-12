---
title: Sense of Scale with Spheres and Fog
date: 2015-12-18
author: twitter|joshcarpenter|Josh Carpenter
layout: blog
image:
  href: https://aframe.io/examples/showcase/spheres-and-fog/
  src: spheres-and-fog.jpg
---

[spheres]: https://aframe.io/examples/showcase/spheres-and-fog/

I like the [Spheres and Fog example][spheres] because it explores the sense of scale within virtual reality more than our other early examples. A series of spheres in the scene vary from 0.15 to 30 meters in radius, and a fog on `<a-scene>` amplifies the sense of size and distance:

```html
<a-scene fog="type: linear; color: #AAB; far: 30; near: 0">
```

<!-- more -->

The soft shadows under each sphere are faked with images. In Photoshop I created a circular gradient that fades from opaque to transparent. I applied this image as a child object of each sphere:

```html
<a-sphere position="-3 0 0" translate="0 1.75 0" radius="1.75" color="#7BC8A4" roughness="0.2">
  <a-image src="../_images/radial-shadow-3.png" rotation="-90 0 0" scale="1.75 1.75 1.75"></a-image>
</a-sphere>
```

I rotated the images -90 degrees on the x-axis so that they lie flat, and then used scale to adjust their sizes to fit the proportions of their parent sphere.

To make each sphere appear to sit on ground &mdash; neither too high nor too low &mdash; I used a translate value on each sphere, where the Y value was equal to the sphere radius:

```html
<a-sphere position="-15 0 5" translate="0 3 0" radius="3" color="#ECECEC">
```

The translate component in A-Frame shifts the geometry of a primitive (or geometry component on an entity, if you're using entities and components) relative to the object position. The position remains the same, but the visible geometry moves relative to it. This enabled me to use the keep each sphere's position at 0 on the y-axis, matching my mental model of the spheres being balls sitting on the ground. It would arguably have been more concise to achieve the same visual effect by using y-axis positions instead of translate, but I found this approach felt better.
