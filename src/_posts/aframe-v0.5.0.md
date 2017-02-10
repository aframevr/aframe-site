---
title: A-Frame v0.5.0 - Features & Tools
date: 2017-02-09 10:00:00
layout: blog
image:
  src: v0.5.0.gif
---

Give A-Frame a high five for the release of **v0.5.0**! This release pulls in
highly-awaited components from the ecosystem such as text and glTF, addresses
several large WebVR Polyfill bugs for smartphones, comes with a slew of
enhancements and bug fixes, and enables upcoming motion capture tools.

## What's New?

[mattdesl]: https://twitter.com/mattdesl
[three-bmfont-text]: https://github.com/Jam3/three-bmfont-text
[text]: https://aframe.io/docs/0.5.0/components/text.html

A **text** component, using SDF and MSDF, has landed into A-Frame core! Based
on [mattdesl's][mattdesl] [three-bmfont-text], the text component has gone
through a long lineage starting with bryik's initial
`aframe-bmfont-text-component` to fernandojsg's improvements to mchen's fork to
mchen shepherding the component into A-Frame. The text component comes with
several stock fonts and supports custom fonts, alignment, anchors, baselines,
spacing, and wrapping. [Read more about the text component][text].

![Text](https://cloud.githubusercontent.com/assets/674727/22808347/4daf3bc4-eee0-11e6-9af7-048faf188b0f.png)

[aboutgltf]: https://www.khronos.org/gltf
[gltf]: https://aframe.io/docs/0.5.0/components/gltf.html

The **glTF model** component has also landed into A-Frame core! glTF (GL
Transmission Format) is an open project by Kronos providing a standard
efficient 3D file format that is tailored for transmitting models over the Web.
The `gltf-model` component loads a 3D glTF model with a line of HTML. Note that
glTF is a fairly new specification and adoption is still growing, but a large
portion of the WebVR community are optimistic that glTF will become the `.jpg`
of 3D assets. [Read more about the `gltf-model` component][gltf].

[releasenotes]: https://github.com/aframevr/aframe/releases/tag/v0.5.0

Long-awaited bug fixes relating for smartphones include:

- Fixing mobile iOS resolution and bluriness. Thanks to
  [nullcode](https://github.com/nullcode) for the fix!
- Fixing Cardboard support for many mobile devices, especially those with large
  screens. Thanks to [@thoragio](https://twitter.com/thoragio) for forking
  WebVR polyfill to update its device database.
- Fixing and forking WebVR polyfill for better WebView support. Thanks to
  [grigorkh](https://github.com/grigorkh) for the fix and
  [andymartinwork](https://github.com/andymartinwork) for QAing.

The [Inspector](https://github.com/aframevr/aframe-inspector) also contains a
slew of updates including sample assets and texture modals so give that a look
as well!

Check out the [release notes][releasenotes] for the complete changelog,
includes a list of all new features, optimizations, and bug fixes.

<!-- more -->

## What Have People Built?

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

A-Frame has enabled rapid innovation and open experimentation around room scale
WebVR interactions and patterns! Check out some of these novel A-Frame scenes,
or [visit the blog to check out editions of *A Week of A-Frame*](/blog/).

<div class="tweets">
https://twitter.com/fernandojsg/status/821471460871041024
https://twitter.com/kfarr/status/825643364519251968
https://twitter.com/aframevr/status/824458764354940928
https://twitter.com/whoyee/status/821271916451229697
https://twitter.com/micahstubbs/status/814622454597328896
https://twitter.com/JonathanZWhite/status/816755095371137024
https://twitter.com/maros_pekarik/status/815912259704750080
https://twitter.com/andgokevin/status/819899447169560577
</div>

A-Frame now boasts nearly 120 contributors on the primary A-Frame repository!
While we haven't started seriously focusing on populating the A-Frame Registry
yet, [the A-Frame Registry now contains 25 curated
components](https://aframe.io/registry/).

## What's Next?

Release cycles may seem a bit faster as our new friend,
[A-Frobot](https://github.com/a-frobot) is generating new builds and supply
fresh rawgit.com CDN URLs on each commit to A-Frame. Documentation will be
automatically deployed. And we can test the bleeding edge version of A-Frame at
`https://a-frobot.github.io/aframe/`.

### A-Frame

[link traversal]: https://blog.mozvr.com/connecting-virtual-worlds-hyperlinks-in-webvr/

The largest and most awaited feature coming up is [link traversal], which is
dependent on stability in the browsers. Currently, link traversal works in
[Firefox Nightly](https://webvr.rocks/firefox).

[shadows]: https://github.com/aframevr/aframe/pull/2350

[Shadows are also about to land][shadows] and will go out in a subsequent 0.5.1 release.

![Shadows](https://cloud.githubusercontent.com/assets/674727/22716319/53c0d32a-ed4a-11e6-8e2d-5afd2ddf58fd.png)

Keep up with the [0.6.0 milestone] for an initial idea of what may be next.
We're holding an open Skype meeting amongst A-Frame developers to do talk about
roadmap. Join `#planning` on the A-Frame Slack if you're interested!

### Record-and-Replay Motion Capture Tools

We're currently working on record-and-replay tools using motion capture of the
headset and controllers, led by [@dmarcos](https://twitter.com/dmarcos). Motion
capture tools will enable a large realm of possibilities for VR development.

You'll be able to open a scene, start a recording, enter VR, move around with
the headset, interact with objects with the controllers, and save the
recording.  Then later, you can replay the recording without needing a VR
headset nor having to refresh and enter VR on each file change. Rapidly develop
VR on to go, or send a recording for someone to take a look at!

You'll also be able to do motion capture. Not only could you record yourself,
but you could record paths and events on entities. Imagine creating a
non-playable character (NPC) whose movements are pre-recorded through dancing
or drawing the paths of airborne enemies with your hands. Perhaps you could paint
a work of art with [A-Painter](https://aframe.io/a-painter/) and have others
spectate the painting being drawn live.

A fun demo around this tool will be released shortly. As we can say is,
A-Frame's gonna shake it off!

![Shake it Off](https://cloud.githubusercontent.com/assets/674727/22814444/72a50efe-ef08-11e6-8502-5fb9db628de8.gif)
