---
title: Introducing A-Frame v0.1.0
author: twitter|joshcarpenter|Josh Carpenter
date: 2015-12-16 11:00:00
layout: blog
image:
  src: introducing-aframe.png
---

> Today, the MozVR team has released the first version of A-Frame: an open source framework for creating WebVR experiences with markup.

A-Frame makes it easy for web developers to create virtual reality experiences that work across desktop, iPhone, Android, and the Oculus Rift.

We created A-Frame to make it easier to create VR web experiences. WebVR has shipped in builds of Firefox and Chromium since the summer of 2014, but creating content for it has required knowing WebGL. The WebGL scene is unbelievably talented and has created many mind-blowing VR experiences in the last year, but they are a small subset of the full web dev community. There are millions of talented developers who do not know WebGL. What if each of them could create and share VR experiences on the open web?

<!-- more -->

A-Frame is designed to be familiar to those web developers. It wraps the power of WebGL in HTML custom elements, so creating a high performance VR experience is as simple as:

```html
<!doctype html>
<html>
  <head>
    <script src="https://aframe.io/releases/0.1.2/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-sky src="https://aframe.io/aframe/examples/_skies/lake.jpg"></a-sky>
      <a-model src="https://aframe.io/aframe/examples/showcase-composite/sculpture.dae" position="0 0 -2"></a-model>
      <a-image src="https://aframe.io/aframe/examples/showcase-composite/portland.png" width="1" height="0.35" position="-2 1.2 1"></a-image>
    </a-scene>
  </body>
</html>
```

A-Frame ships with powerful and concise "primitives" for common use cases such as 360-degree videos, images, models, skies, and more. Primitives make it easy to block out a scene in minutes. Primitives can also be combined with lighting, animation, sound and interactivity. For the full list of primitives included in A-Frame v0.1.0, see the [A-Frame documentation](../../../../../docs/primitives/).

For users who want deeper control and flexibility, A-Frame is built on an entity-component system which provides accessible components for lighting, materials, re-usable assets, and more. This pattern is common in the game development world, and is the backbone of A-Frame. Visit the [A-Frame documentation](../../../../../docs/core/) to learn more about the entity-component system.

A-Frame is ultimately just the DOM, so developers can also manipulate it with standard JavaScript methods, such as:

```js
var scene = document.querySelector('a-scene');
var cube = document.createElement('a-cube');
cube.setAttribute('color', 'red');
scene.appendChild(cube);
```

A-Frame is new. The 0.1 version has several known issues (Android rendering textures as black, for example), and the API will change over the next few months as we get feedback and open source contributions. Our hope is that early adopters find it as fun as we do, and join us in improving A-Frame over time.

To get started with A-Frame, visit [aframe.io](https://aframe.io/), [view the examples](../../../../../examples/) and [grab the code](../../../../../docs/guide/). The [FAQ](../../../../../faq/) provides additional details.

To discuss A-Frame with our team and fellow developers, hop into the [A-Frame Slack channel](https://aframevr-slack.herokuapp.com/). Feedback is welcomed at [@aframevr](https://twitter.com/aframevr/). As are [bug reports](https://github.com/aframevr/aframe/issues/) and [pull requests](https://github.com/aframevr/aframe/). For the latest overall WebVR setup instructions, visit [MozVR.com](http://mozvr.com/).

Special thanks to the A-Frame team for several months of hard work getting v0.1.0 out the door:

* [Casey Yee](https://twitter.com/whoyee)
* [Chris Van Wiemeersch](https://twitter.com/cvanw)
* [Diego Marcos](https://twitter.com/dmarcos)
* [Fernando Serrano](https://twitter.com/fernandojsg)
* [Josh Carpenter](https://twitter.com/joshcarpenter)
* [Kevin Ngo](https://twitter.com/ngokevin_)
* [Kip Gilbert](https://twitter.com/kearwoodgilbert)

Thanks also to WebVR friends and colleagues who have provided key underlying components of A-Frame:

* [Boris Smus](https://twitter.com/borismus) – [WebVR Polyfill](https://github.com/borismus/webvr-polyfill)
* [Ricardo Cabello](https://twitter.com/mrdoob) – [Three.js](http://threejs.org/)

And lastly to the growing list of other WebVR tools, many of which have informed and inspired A-Frame.

* Declarative: [GLAM](http://tparisi.github.io/glam/) ([Tony Parisi](https://twitter.com/auradeluxe)), [SceneVR](http://www.scenevr.com/) ([Ben Nolan](https://twitter.com/bnolan)), [VRCollab](http://vrcollab.com/) ([Tee Jia Hen](https://twitter.com/wizztjh) and team)
* JavaScript: [Three.js](http://threejs.org/), [WebVR Polyfill](https://github.com/borismus/webvr-polyfill)
* WYSIWYG: [Vizor](http://vizor.io/), [PlayCanvas](https://playcanvas.com/)
