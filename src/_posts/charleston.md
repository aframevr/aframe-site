---
title: WebVR Tour of Public Projects in Charleston, SC
date: 2015-12-21
author: twitter|jaspar|Jason Emory Parker
layout: blog
image:
  href: http://data.postandcourier.com/vr/chs/
  src: charleston.jpg
---

> Jason Emory Parker is an interactive editor at [The Post & Courier](http://www.postandcourier.com/). Jason used A-Frame to create a **[VR tour](http://data.postandcourier.com/vr/chs/)** of some of the major Charleston, SC public projects completed under Mayor Joseph Riley's 40-year term. Below is his experience.

I created this project mainly as an experiment to get some idea of what A-Frame was capable of. I had recently completed another project for The Post and Courier which used a 3D model of the city of Charleston to show a few major public projects that had been completed during the 40-year tenure of the city's outgoing mayor, Joe Riley.

<!-- more -->

The main city model is displayed in a `<a-sky>` primitive.

```html
<a-sky id="pano" src="vr-1.jpg" rotation="0 -60 0" radius="5000" color="#fff"></a-sky>
```

The source image is an equirectangular projection rendered in [Blender3D](https://www.blender.org/). This can be configured under Lens tab in Camera Settings. Change the lens to panorama and the type to equirectangular.

The Post and Courier logo, graphic key, credits, and buttons are `<a-image>` primitives. These could be built in any graphics editor.

To add some interactivity to the project so we need to add a camera with a cursor.

```html
<a-entity camera look-controls="enabled: true" wasd-controls="enabled: false">
  <a-entity position="0 0 -0.5"
            geometry="primitive: ring; radiusOuter: 0.010; radiusInner: 0.007"
            material="color: #4CC3D9; shader: flat; transparent: true; opacity: 0.5"
            cursor="fuse: true; maxDistance: 500; timeout: 1000"></a-entity>
</a-entity>
```

Setting the fuse to `true` causes click events to be fired when the cursor gazes on an object.

I added some buttons to the project and positioned them accordingly. I used the `<a-mouseenter>` and `<a-mouseleave>` tags to make the buttons change opacity when the cursor "hovers" over them.

```html
<a-image id="downtown" height="12" width="56" src="downtown-button.png"
         position="120 -20 -200" rotation="0 -30 0" opacity="0.5" visible="true">
  <a-mouseenter opacity="1"></a-mouseenter>
  <a-mouseleave opacity="0.5"></a-mouseleave>
</a-image>
```

When this element fires a click, we should change the sky's source image in order to "move" the user downtown. We also need to hide this button, make sure other buttons are visible and adjust their positions. This is accomplished with some simple JavaScript.

```js
var sky = document.querySelector('#pano');
var disland = document.querySelector('#disland');
var downtown = document.querySelector('#downtown');

downtown.addEventListener('click', function() {
  sky.setAttribute('src', 'vr-downtown.jpg');
  this.setAttribute('visible', 'false');
  disland.setAttribute('visible', 'true');
  disland.setAttribute('position', '-20 -20 200');
  disland.setAttribute('rotation', '0 180 0');
});
```

Using these basic ingredients, I was able to complete this project in just a few hours. While the project itself is quite modest, I'm fairly impressed with what I could accomplish so quickly with A-Frame.

Two things that could improve projects like this are more animation and some sort of loading indicator while the sky source image changes. I intend to explore how to accomplish this next.
