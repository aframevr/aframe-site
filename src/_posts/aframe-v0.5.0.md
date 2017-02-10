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
through a long lineage starting with [@bryik](https://twitter.com/bryik_ws)'s
initial `aframe-bmfont-text-component` to
[fernandojsg](https://twitter.com/fernandojsg)'s improvements to
[mchen](https://twitter.com/machenmusik)'s fork to mchen shepherding the
component into A-Frame. The text component comes with several stock fonts and
supports custom fonts, alignment, anchors, baselines, spacing, and wrapping.
[Read more about the text component][text].

![Text](https://cloud.githubusercontent.com/assets/674727/22808347/4daf3bc4-eee0-11e6-9af7-048faf188b0f.png)

[aboutgltf]: https://www.khronos.org/gltf
[gltf]: https://aframe.io/docs/0.5.0/components/gltf-model.html

The **glTF model** component has also landed into A-Frame core! glTF (GL
Transmission Format) is an open project by [The Khronos
Group](https://www.khronos.org/) providing a standard efficient 3D file format
that is tailored for transmitting models over the Web.  The `gltf-model`
component loads a 3D glTF model with a line of HTML. Note that glTF is a fairly
new specification and adoption is still growing, but a large portion of the
WebVR community are optimistic that glTF will become the `.jpg`
of 3D assets. [Read more about the `gltf-model` component][gltf].

Thanks to everyone who worked on the three.js glTF loader
([richtr](https://github.com/richtr), [@mrdoob](https://twitter.com/mrdoob),
[@auradeluxe](https://twitter.com/auradeluxe),
[@superhoge](https://twitter.com/superhoge)) and the A-Frame component
([@donmccurdy](https://twitter.com/donmccurdy), [@xirvr](https://twitter.com/xirvr))!

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

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="tweets">
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Introducing A-Blast . A wave shooting game made with <a href="https://twitter.com/aframevr">@aframevr</a> by <a href="https://twitter.com/mozillavr">@mozillavr</a> <a href="https://t.co/aI2Wf1GvDH">https://t.co/aI2Wf1GvDH</a> <a href="https://twitter.com/hashtag/aframevr?src=hash">#aframevr</a> <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a> <a href="https://twitter.com/hashtag/threejs?src=hash">#threejs</a> <a href="https://t.co/SQl6akRKl4">pic.twitter.com/SQl6akRKl4</a></p>&mdash; Fernando Serrano (@fernandojsg) <a href="https://twitter.com/fernandojsg/status/821471460871041024">January 17, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New release of A-Frame City Builder <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a> game built on <a href="https://twitter.com/aframevr">@aframevr</a> <a href="https://t.co/dN4PRyUGjV">https://t.co/dN4PRyUGjV</a> works on both <a href="https://twitter.com/hashtag/oculus?src=hash">#oculus</a> and <a href="https://twitter.com/hashtag/vive?src=hash">#vive</a> touch controls <a href="https://t.co/qbNhagXoWg">pic.twitter.com/qbNhagXoWg</a></p>&mdash; Kieran Farr (@kfarr) <a href="https://twitter.com/kfarr/status/825643364519251968">January 29, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"> Building a Bow &amp; Arrow for tracked controllers in <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a> <a href="https://twitter.com/hashtag/threejs?src=hash">#threejs</a>!<br> <a href="https://t.co/2LgZ7LYVrf">https://t.co/2LgZ7LYVrf</a><br> <a href="https://t.co/PRYdpFvKly">https://t.co/PRYdpFvKly</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/824458764354940928">January 26, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"> I made <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> UI widgets for <a href="https://twitter.com/aframevr">@aframevr</a>   Hook&#39;em up to something cool!  <a href="https://t.co/Hr09EDWCwJ">https://t.co/Hr09EDWCwJ</a> <a href="https://t.co/AFcfTa98LK">pic.twitter.com/AFcfTa98LK</a></p>&mdash; Casey Yee (@whoyee) <a href="https://twitter.com/whoyee/status/821271916451229697">January 17, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> Grammar of Graphics <br>built on <a href="https://twitter.com/hashtag/aframevr?src=hash">#aframevr</a> <a href="https://twitter.com/hashtag/shiny?src=hash">#shiny</a> <a href="https://twitter.com/hashtag/gglplot2?src=hash">#gglplot2</a> <a href="https://twitter.com/hashtag/rstats?src=hash">#rstats</a><br> <a href="https://twitter.com/Datatitian">@Datatitian</a> <br> <a href="https://t.co/mOgW4y0796">https://t.co/mOgW4y0796</a> <br> <a href="https://t.co/oJHJWy0VJW">https://t.co/oJHJWy0VJW</a> <a href="https://t.co/yNtqXGHuH4">pic.twitter.com/yNtqXGHuH4</a></p>&mdash; Micah Stubbs (@micahstubbs) <a href="https://twitter.com/micahstubbs/status/814622454597328896">December 30, 2016</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Beautiful snow globe WebVR experience. Take a ride around NYC in a zeppelin. Made with <a href="https://twitter.com/aframevr">@aframevr</a> by <a href="https://twitter.com/ronikdesign">@ronikdesign</a><a href="https://t.co/E7llCl8PDM">https://t.co/E7llCl8PDM</a> <a href="https://t.co/Iz8WH8XV44">pic.twitter.com/Iz8WH8XV44</a></p>&mdash; Jonathan Z. White (@JonathanZWhite) <a href="https://twitter.com/JonathanZWhite/status/816755095371137024">January 4, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Look at our new virtual calculator inside <a href="https://twitter.com/hashtag/MathWorldVR?src=hash">#MathWorldVR</a>. Release is near! <a href="https://twitter.com/TheDimensionLab">@TheDimensionLab</a> <a href="https://twitter.com/aframevr">@aframevr</a> <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> <a href="https://twitter.com/hashtag/VR?src=hash">#VR</a> <a href="https://twitter.com/hashtag/HTCvive?src=hash">#HTCvive</a> <a href="https://t.co/gKY281iKwy">pic.twitter.com/gKY281iKwy</a></p>&mdash; Maros Pekarik (@maros_pekarik) <a href="https://twitter.com/maros_pekarik/status/815912259704750080">January 2, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Ready Player One? Tons of playable <a href="https://twitter.com/aframevr">@aframevr</a> classic arcade with Vive + Touch in one room.<br> Made by <a href="https://twitter.com/machenmusik">@machenmusik</a> <br> <a href="https://t.co/VKwDuCY682">https://t.co/VKwDuCY682</a> <a href="https://t.co/Hx6yVXT8Xt">pic.twitter.com/Hx6yVXT8Xt</a></p>&mdash; Kevin Ngo (@andgokevin) <a href="https://twitter.com/andgokevin/status/819899447169560577">January 13, 2017</a></blockquote>
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

Keep up with the [0.6.0
milestone](https://github.com/aframevr/aframe/milestone/5) for an initial idea
of what may be next.  We're holding an open Skype meeting amongst A-Frame
developers to do talk about roadmap. Join `#planning` on the A-Frame Slack if
you're interested!

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
