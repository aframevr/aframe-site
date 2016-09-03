---
title: A-Frame v0.3.0 - Walk in a Web Page
author: twitter|andgokevin|Kevin Ngo
date: 2016-08-16 10:00:00
layout: blog
image:
  src: v0.3.0-roomscale.gif
---

[webvr1.0]: https://w3c.github.io/webvr/

A-Frame **v0.3.0** has dropped! With support for the **[new WebVR 1.0
API][webvr1.0]**, we aim higher towards state-of-the-art VR. With room-scale
tracking, we can walk in a web page, and with tracked controller support, we
can reach out into the world.

<!-- more -->

[latestbuild]: https://aframe.io/releases/0.3.0/aframe.min.js

Grab the latest build at [`https://aframe.io/releases/0.3.0/aframe.min.js`]
[latestbuild] or `npm install aframe`.

## What's New?

**WebVR 1.0** support is the highlight of this release. This includes:

- Better **room-scale** support to be able to walk/dash/duck/jump in a web
  page with the HTC Vive.
- Hitting **90 frames per second** due to being able to push content directly to the headset
  display rather than mirroring a desktop display. This also allows us to have different
  content on the desktop display than the headset, opening the door for asynchronous gameplay
  and spectator modes.

As a corollary, A-Frame now supports **tracked controllers** with the HTC Vive.
Tracked controllers go hand-in-hand with room-scale. Grab an HTC Vive and the
[experimental WebVR-enabled Chromium build](https://webvr.info/get-chrome/)
(which currently supports the Vive) and try out the [basic hand controls
demo](https://aframe.io/aframe/examples/showcase/tracked-controls/) or [ball
throw](https://bryik.github.io/aframe-ball-throw/).

[![A-Frame Ball Throw Demo](../../images/awoa/ball-throw.gif)](https://bryik.github.io/aframe-ball-throw/)

[inspectordemo]: https://aframe.io/aframe-inspector/example/

We are also releasing the much-anticipated **A-Frame Inspector** ([view
demo][inspectordemo]). The current primary purpose of the Inspector is to
serve as a complementary tool for inspecting and tweaking scenes alongside
code; it is more akin to your favorite browser's DOM Inspector rather than
an end-to-end tool such as Unity. The easiest way to try out the A-Frame
Inspector is to press `<ctrl> + <alt> + i` on any A-Frame scene using v0.3.0.

![A-Frame Inspector Demo](../../images/blog/v0.3.0-inspector.gif)

Other noteworthy changes include significant performance improvements,
improved support for multiple scenes embedded within a single web page,
and support for multiple instances of components of the same type.

[releasenotes]: https://github.com/aframevr/aframe/releases/tag/v0.3.0

Check out the [release notes][releasenotes] for the complete changelog, which
includes a list of possible breaking changes.

## What Have People Built?

[github]: https://github.com/aframevr/aframe
[slack]: https://aframevr-slack.herokuapp.com
[webvr-slack]: https://webvr-slack.herokuapp.com

A-Frame's popularity has grown immensely, leading it to be the WebVR framework
of choice. In less than a year, the [GitHub repository][github] has over **2800
stargazers and 60 contributors**. There are over **1200 members** on the
[A-Frame Slack channel][slack].

[blog]: https://aframe.io

We started producing weekly roundups with the *[A Week of A-Frame][blog]*
series to showcase community content, components, and contributions.

[don]: https://github.com/donmccurdy/aframe-extras

In the last four months, we have featured over **150 high quality scenes**:

<div class="post__projects">
  <a href="https://sandbox.donmccurdy.com/vr/island/"
     title="MagicaVoxel Island"
     style="background-image: url(../../images/awoa/island.gif)"></a>
  <a href="https://ngokevin.github.io/aframe-audio-visualizer-components/spectrum/"
     title="Audio Visualizer"
     style="background-image: url(../../images/awoa/audio-visualizer-components-update.gif)"></a>
  <a href="http://tbaloo.com/tumbvr/madeinhexels"
     title="TumbVR"
     style="background-image: url(../../images/awoa/tumbvr.jpg)"></a>
  <a href="https://musicpua.firebaseapp.com/"
     title="Virtual Symphony"
     style="background-image: url(../../images/awoa/virtual-symphony-2.gif)"></a>
  <a href="http://www.skyislandsvr.com/pages/SadIsland.html"
     title="Sad Island"
     style="background-image: url(../../images/awoa/sad-island.jpg)"></a>
  <a href="https://shopifyvr.myshopify.com/pages/virtual-reality"
     title="Shopify VR"
     style="background-image: url(../../images/awoa/shopify.jpg)"></a>
</div>

[altspace]: https://github.com/AltspaceVR/aframe-altspace-component
[bmfont]: https://github.com/bryik/aframe-bmfont-text-component
[cubemap]: https://github.com/bryik/aframe-cubemap-component
[extras]: https://github.com/donmccurdy/aframe-extras
[gif]: https://github.com/mayognaise/aframe-gif-shader
[gltf]: https://github.com/xirvr/aframe-gltf
[grid]: https://github.com/dbradleyfl/aframe-gridhelper
[html]: https://github.com/mayognaise/aframe-html-shader
[k-frame]: https://github.com/ngokevin/k-frame
[leap]: https://github.com/openleap/aframe-leap-hands
[lsystem]: https://github.com/nylki/aframe-lsystem-component
[particle]: https://github.com/IdeaSpaceVR/aframe-particle-system-component
[stereocube]: https://github.com/wallabyway/aframe-stereocube
[vidcontrols]: https://github.com/oscarmarinmiro/aframe-video-controls
[terrain]: https://github.com/andreasplesch/aframe-heightgrid-component
[webvrcontroller]: https://github.com/richardanaya/aframe-webvr-controller

...and nearly **50 community components**:

- **Component Packs:** [aframe-extras][extras] by [Don McCurdy][don] enables
  additional **controls**, **physics**, and loaders. [k-frame][k-frame]
  enables **audio visualizations**, **multi-user**, **templating**, layout, text,
  and improved animations.
- **Geometries:** [Procedural geometries][lsystem], [Bitmap font text][bmfont],
  [terrains][terrain], [oceans][extras], and [grids][grid].
- **Materials:** [GIF][gif], [HTML][html], [cubemaps][cubemap],
  [stereo cubemaps][stereocube], and [video controls][vidcontrols].
- **Miscellaneous:** [Leap Motion controls][leap], [Vive controls][webvrcontroller],
  [AltSpaceVR integration][altspace], [glTF][gltf], and [particle systems][particle].

There have even been a couple of **augmented reality** prototypes:

![A-Frame Augmented Reality with Argon Browser](../../images/awoa/argon.gif)

## What's Next?

[blender]: https://www.blender.org/
[magicavoxel]: https://ephtracy.github.io/

We want to make it **easier to get started** with A-Frame. This includes a
refreshed homepage with new example scenes that act as starter kits. These
examples will be accompanied with free assets, guides, and workflow tutorials
on how to use A-Frame alongside tools such as [MagicaVoxel][magicavoxel] and
[Blender][blender].

We are also excited to improve the component discovery and consumption process
to have an easy place to find great community components. We'll also be
thinking about asset curation and discovery which should sound great if you've
ever had trouble finding free 3D models.

[roadmap]: https://github.com/aframevr/aframe/blob/master/ROADMAP.md

Check out the [official roadmap][roadmap] for what we currently have planned
over the next several months.

![v0.3.0](../../images/blog/v0.3.0.png)
