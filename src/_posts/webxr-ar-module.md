---
title: "Experiment with AR and A-Frame"
date: 2019-12-31
layout: blog
image:
  src: ar-comic.gif
author: "Klaus Weidner and Diego Marcos"
---

**Google Chrome and Oculus Browser are now shipping WebXR enabled by default for VR headsets**. The Web magic doesn't stop there. **AR is also coming** to the [standard](https://immersive-web.github.io/webxr-ar-module/) and you can **experiment today** on [Android ARCore compatible devices](https://developers.google.com/ar/discover/supported-devices) and [Chrome 79 or newer](https://chromereleases.googleblog.com/2019/12/chrome-for-android-update_17.html).

Enable the experimental [WebXR AR module](https://immersive-web.github.io/webxr-ar-module/) in `chrome://flags` and make sure your page is served over HTTPS. [A-Frame 1.0.3 or newer](https://github.com/aframevr/aframe/releases) automatically detects AR and shows the new `Enter AR` button:

![button image](/images/blog/ar-vr-buttons.png)

<!-- more -->

Build a scene in the same way than you do for VR. Just make sure that the background doesn't block the camera view 🙂

```html
<a-scene>
  <a-assets timeout="30000">
    <a-asset-item id="spinosaurus" src="dino-model.glb"></a-asset-item>
  </a-assets>

  <a-camera position="0 1.2 0"></a-camera>

  <!-- 2D environment omitted for simplicity -->

  <a-entity id="dino" position="-1 0 -3" scale="0.5 0.5 0.5">
    <a-entity position="0 2.15 0" rotation="0 55 0"
              gltf-model="#spinosaurus"
              animation-mixer
              shadow="cast: true; receive: false"></a-entity>
  </a-entity>

  <!-- Lights configuration omitted for simplicity -->
</a-scene>
```

[Try now on your ARCore phone](https://xr-spinosaurus.glitch.me/) and check out the [source code](https://glitch.com/edit/#!/xr-spinosaurus?path=index.html:1:0)

![dino AR](/images/blog/dino-ar.gif)

## What about interactions?

When entering immersive mode, regular [user DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events) are disabled. There are two ongoing efforts to enable interactivity in AR experiences:

**[Hit Test](https://github.com/immersive-web/hit-test)**

Developers will be able to cast rays into the real world and retrieve a list of intersection points against the real world understanding. A ray might be triggered by user input like touches or mouse clicks to for instance, place or move virtual objects in the real world.

**[DOM Overlay layer](https://github.com/immersive-web/dom-overlays/blob/master/explainer.md)**

When entering AR or VR mode, only WebGL content and the real world or camera image are rendered on screen. DOM layers will allow overlaying HTML elements to present for instance 2D UIs, instructions or contextual information associated to virtual or real world objects.

**[Join our discord channel](https://discordapp.com/invite/tGYjkYr)**. The community will love to see what you make.

If you'd like to continue to support us, please **[subscribe to the A-Frame
newsletter](https://aframe.io/subscribe/)** where we'll not only provide
updates and showcase community projects, but requests for testing and user
feedback support every now and then to keep us going in this grassroots
project.
