---
title: "A-Painter: Paint in VR in Your Browser"
author: twitter|fernandojsg|Fernando Serrano
date: 2016-09-20 12:00:00
layout: blog
image:
  src: a-painter/logo.jpg
---

[painter]: https://aframe.io/a-painter
[preview]: https://aframe.io/a-painter/?url=https://ucarecdn.com/3e089e07-be62-48e1-9f12-9a284c249e77/
[webvrinfo]: https://webvr.info

>  Want to start painting now? Head to <a href="https://aframe.io/a-painter"><strong>https://aframe.io/a-painter</strong></a>!
>
>  <small class="subintro">Make sure you have a <a href="https://webvr.info/get-chrome/">WebVR-enabled browser</a>. In Chromium, enable the flags for <code>chrome://flags/#enable-webvr</code> and <code>chrome://flags/#enable-gamepad-extensions</code>). <a href="https://blog.mozvr.com/experimental-htc-vive-support-in-firefox-nightly/">Firefox support</a> is coming soon.</small>
>
> <small class="subintro">(Don’t have a headset? No problem &ndash; you can still <a href="https://aframe.io/a-painter/?url=https://ucarecdn.com/3e089e07-be62-48e1-9f12-9a284c249e77/">view paintings from any device</a>!)</small>

![Looped recording of drawing in A-Painter](/images/blog/a-painter/apainter_painting.gif)

We on the [Mozilla VR](https://mozvr.com/) team are hardcore fans of [Tilt
Brush](https://www.tiltbrush.com/). It's a wonderful example of the power of VR
as an expressive medium. In the last few weeks, we have been experimenting with
our own Web-based interpretation of Tilt Brush. We wanted to show how easy is
to produce and share your creations on the Web across platforms with no
software installations.

<!-- more -->

![Screenshot of Mozilla VR fox in A-Painter](/images/blog/a-painter/foxlogo-1.png)

To browse paintings, you just need a browser with WebGL, but to fulfill your
artistic urges you need a system with hand-tracked controllers. Today, that
means only with the HTC Vive on Windows (though we hope this changes soon!).

## What Can I Do With A-Painter Today?

- Paint in 3D using hand-tracked motion controllers. Use both hands to paint!
- Share drawings with the world simply by copying and pasting a URL.
- View 3D drawings anywhere both with and without a headset.
- Paint on top of other people's drawings and make them your own.
- Drag and drop images and [`OBJ`
  models](https://aframe.io/docs/0.3.0/introduction/faq.html#where-can-i-find-assets)
  from your desktop to the browser, for a template or starting point to paint
  over.
- Save and load local binary files of your drawings.
- Over 30 brushes with a custom [A-Painter Brush
  API](https://github.com/aframevr/a-painter#brush-api) to easily create new
  ones.

## How to Play With It

It's easy! Go to the [**A-Painter web site**][painter] with a [WebVR-enabled
browser][webvrinfo], and put on your HTC Vive headset. Grab your controllers,
hold the trigger button, and start painting!

### Controls

![Diagram of A-Painter controls](/images/blog/a-painter/controller_tooltips_medium.jpg)

- **Trigger**: Hold down to paint (it's pressure sensitive).
- **Thumbpad**: Slide up and down to change the brush size.
- **Grip**: Squeeze to undo the latest stroke.
- **Menu Button**: Press to toggle the main menu.

Once you open the main menu, you can modify the color, size, and brush type by
pointing the other controller to the desired option and clicking using the
trigger (and the controller being used to point and click is the one is the one
that receives the new settings).

![Diagram of A-Painter menu options](/images/blog/a-painter/menu.jpg)

- **Color history**: The latest seven colors used will be saved in these swatches.
- **Clear**: Clears the painting. Use with care!
- **Save**: The whole painting will be saved and uploaded to a server in a
  binary format, and outside of VR (but still in your browser) you will get a
  URL that you can use to share your painting and resume your work later.
- **Copy**: The current brush settings (type, color, and size) of the
  controller holding the menu will be transferred to the pointing controller.

![Looped recording of changing brush options in A-Painter menu](/images/blog/a-painter/apainter_menuc.gif)

## A-Painter is Extensible

To create a new brush, implement the following interface, and register it by
calling `AFRAME.registerBrush(brushName, definition, options)`.

And from within your `AFRAME.registerBrush` call, define the following:

```javascript
BrushInterface.prototype = {
  addPoint: function (position, orientation, pointerPosition, pressure, timestamp) {},
  tick: function (time, delta) {}
};
```

The only required method to implement is **addPoint**. With **addPoint**, you
should do something with the point, orientation, and pressure data returned
from the controller (i.e., create or modify a geometry), and return *true* if
you've added something to the scene and `false` otherwise. If you want to add
dynamic behavior, implement the **tick** method, which will be called on every
frame.

Here is the code for a custom `spheres` brush:

```javascript
/* global AFRAME, THREE */

AFRAME.registerBrush(
  // Name of brush.
  'spheres',

  // Methods for brush definition.
  {
    init: function (color, width) {
      // Initialize the material based on the stroke color.
      this.material = new THREE.MeshStandardMaterial({
        color: this.data.color,
        roughness: 0.5,
        metalness: 0.5,
        side: THREE.DoubleSide,
        shading: THREE.FlatShading
      });
      this.geometry = new THREE.IcosahedronGeometry(1, 0);
    },

    // This method is called every time we need to add a point
    // to our stroke. It should return `true` if the point is
    // added correctly and `false` otherwise.
    addPoint: function (position, orientation, pointerPosition,
                        pressure, timestamp) {
      // Create a new sphere mesh to insert at the given position.
      var sphere = new THREE.Mesh(this.geometry, this.material);

      // The scale is determined by the trigger pressure.
      var scale = this.data.size / 2 * pressure;
      sphere.scale.set(scale, scale, scale);
      sphere.initialScale = sphere.scale.clone();

      // Generate a random phase to be used in the tick animation.
      sphere.phase = Math.random() * Math.PI * 2;

      // Set the position and orientation of the sphere to match
      // the controllers.
      sphere.position.copy(pointerPosition);
      sphere.rotation.copy(orientation);

      // Add the sphere to the `object3D`.
      this.object3D.add(sphere);

      // Return `true`, since we've correctly added a new point (sphere).
      return true;
    },

    // This method is called on every frame.
    tick: function (time, delta) {
      for (var i = 0; i < this.object3D.children.length; i++) {
        var sphere = this.object3D.children[i];
        // Calculate the sine value based on the time and the phase for
        // this sphere, and use it to scale the geometry.
        var sin = (Math.sin(sphere.phase + time / 500.0) + 1) / 2 + 0.1;
        sphere.scale.copy(sphere.initialScale).multiplyScalar(sin);
      }
    },
  },

  // Additional options for this brush.
  {
    thumbnail: 'brushes/thumb_spheres.gif',
    spacing: 0.01
  }
);
```

![Looped recording of walking around in a painting with the custom `spheres` brush in A-Painter](/images/blog/a-painter/spheres-brush.gif)

[**Read more about creating custom brushes.**](https://github.com/aframevr/a-painter#brush-api)

## Perhaps we could...

While developing this tool, we got plenty of interesting ideas to implement.
The future of A-Painter depends on you and its general acceptance and feedback,
but here are some ideas of features we would like to add:

- More and better tools, such as a color picker and eraser
- More and better brushes
- Save screenshots and `GIF` animations
- Audio-reactive brushes
- Multi-user painters and spectators
- Import [`glTF`](https://github.com/KhronosGroup/glTF) models
- Export to standard 3D file formats, such as `OBJ` and `glTF`
- Dedicated web site with gallery of users' submissions
- Post-processing filters
- Performance optimizations to existing brushes

And, of course if you have an idea, issue, or want to contribute directly to
the codebase, please feel free to join us at **https://github.com/aframevr/a-painter**.
