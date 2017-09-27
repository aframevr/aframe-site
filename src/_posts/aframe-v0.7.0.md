---
title: A-Frame v0.7.0 - Windows Mixed Reality Headsets and glTF 2.0
date: 2017-09-21 10:00:00
layout: blog
image:
  src: https://user-images.githubusercontent.com/39342/30718754-cdc31786-9ed5-11e7-84a5-eda80089fd8b.gif
---

We welcome Microsoft to the A-Frame family. 0.7.0 ships out of the box support for Microsoft Mixed Reality headsets and controllers on Microsoft Edge thanks to the work of [Olga Milovanova](https://github.com/olga-microsoft), [Lewis Weaver](https://github.com/leweaver), [Nell Waliczek](https://github.com/NellWaliczek) and [Samira Hirji](https://github.com/SamiraAtMicrosoft). A-Frame 0.7.0 fully adopts glTF 2.0, unlocking a huge pool of models you can now import in your experiences.

Use it today with `<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>`.

## What's New?

The glTF ecosystem has made huge progress and all the learnings have consolidated in the 2.0 version of the format. Thanks to the work of [Don McCurdy](http://github.com/donmccurdy/) and [Takahiro](https://github.com/takahirox) on A-Frame and THREE fronts you can now import glTF 2.0 models with a [single line of markup](https://aframe.io/docs/0.7.0/components/gltf-model.html#example).

Microsoft is fully embracing immersive computing with Windows Mixed Reality and you can now have fun with your favorite framework on Microsoft Edge as well.

0.7.0 has now full support for all the major headsets and controllers: Daydream, Gear VR, Windows Mixed Reality, Oculus Rift and HTC Vive.

Performance is top priority for us and A-Frame 0.7.0 ships a bunch of improvements to tame the garbage collector beast:

- Added some caching and reduced some type checking in critical paths of object updates.
- Reduced memory usage by caching textures.
- Reduced memory usage by reducing the number of instantiated JavaScript objects.
- Eliminated duplicate asset network requests when using `<a-assets>`.
- Throttled the `componentchanged` event which gets emitted very often.

[releasenotes]: https://github.com/aframevr/aframe/releases/tag/v0.7.0

Check out the [release notes][releasenotes] for the complete changelog which
includes a list of all new features, optimizations, and bug fixes.

<!-- more -->

## What Have People Built?

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

We've had over 10 entries of [A Week of A-Frame](https://aframe.io/blog/) since
v0.6.0 was released. Highlights include the release of WebVR in Firefox 55. A-Frame powered immersive Websites are now just one click away for millions of people. We saw great progress made on multiuser experiences thanks to the [Networked A-Frame Component](https://github.com/haydenjameslee/networked-aframe). The quality of the tooling is sky rocketing as [Hologram](https://hologram.cool/) or [BeBlock](https://fasility.com/beblock/#link=https://vr.google.com/objects/2AJLgaNhQTD&env=tron&shadows=false&smooth=false&rap=0~0&mode=orbit&height=0&scale=1) demonstrate. VR UIs are getting fancy thanks to the [A-Frame Material Kit](https://github.com/etiennepinchon/aframe-material). WebVR calls back home as [CERN](http://home.cern/), where the Web was born, dips the toes in A-Frame. That's a top achievement unlocked by the whole community.


<div class="tweets">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tada!! 🎉😁 <a href="https://twitter.com/aframevr">@aframevr</a> is getting a keyboard, input, checkbox, radio button and way more with a material design look! <a href="https://t.co/HCDNVAoqYm">https://t.co/HCDNVAoqYm</a> <a href="https://t.co/XDYj3DgEts">pic.twitter.com/XDYj3DgEts</a></p>&mdash; Etienne Pinchon (@EtiennePinchon) <a href="https://twitter.com/EtiennePinchon/status/904539478823448578">September 4, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">👁️ Hologram: all-in-one WebVR creation using <a href="https://twitter.com/aframevr">@aframevr</a> including Blocks support!<a href="https://t.co/oQwXfBZ557">https://t.co/oQwXfBZ557</a> by <a href="https://twitter.com/EtiennePinchon">@EtiennePinchon</a> <a href="https://t.co/Vyri3o710n">pic.twitter.com/Vyri3o710n</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/894831140531339264">August 8, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">View <a href="https://twitter.com/googlevr">@googlevr</a>&#39;s <a href="https://twitter.com/hashtag/MadeWithBlocks?src=hash">#MadeWithBlocks</a> models in WebVR or WebAR with environments! Built in <a href="https://twitter.com/aframevr">@aframevr</a> by <a href="https://twitter.com/Fasility_VR">@Fasility_VR</a> <a href="https://t.co/ojwAZnTfhF">https://t.co/ojwAZnTfhF</a> <a href="https://t.co/YOdOkY85lR">pic.twitter.com/YOdOkY85lR</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/892362454323281920">August 1, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Made a multi-user WebVR scene with cute little raccoons using Google Blocks + Networked-Aframe <a href="https://twitter.com/hashtag/MadeWithBlocks?src=hash">#MadeWithBlocks</a> 😍<a href="https://t.co/KQmi4NncVD">https://t.co/KQmi4NncVD</a> <a href="https://t.co/3zszko0rpO">pic.twitter.com/3zszko0rpO</a></p>&mdash; Hayden Lee (@HaydenLee37) <a href="https://twitter.com/HaydenLee37/status/883507706539122688">July 8, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Visit CMS and the <a href="https://twitter.com/hashtag/LHC?src=hash">#LHC</a> at <a href="https://twitter.com/CERN">@CERN</a> with <a href="https://twitter.com/hashtag/VirtualReality?src=hash">#VirtualReality</a>, powered by <a href="https://twitter.com/aframevr">@aframevr</a> and using <a href="https://twitter.com/googlevr">@googlevr</a>&#39;s <a href="https://twitter.com/hashtag/googlecardboard?src=hash">#googlecardboard</a>: <a href="https://t.co/l5c0xd3tie">https://t.co/l5c0xd3tie</a> <a href="https://t.co/cF2qpeGyKS">pic.twitter.com/cF2qpeGyKS</a></p>&mdash; CMS Experiment CERN (@CMSexperiment) <a href="https://twitter.com/CMSexperiment/status/890223864562810880">July 26, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">made a virtual reality game where you pet a dog. thats it thats the whole game <a href="https://t.co/YqBbtRFBiA">pic.twitter.com/YqBbtRFBiA</a></p>&mdash; manny4߷4 (@mannynotfound) <a href="https://twitter.com/mannynotfound/status/879853657713516544">June 28, 2017</a></blockquote>
</div>

## Numbers

Since v0.6.0 was released in Jun 29 2017:

- A-Frame has gained 24 new contributors, totalling 193.
- We have 749 new members in the Slack community for a total of 4,734. 
- 101,966 people have visited [aframe.io](https://aframe.io) since last release.

## What's Next?

We will keep profiling and measuring to make sure that A-Frame overhead is negligable and your content runs buttery smooth. We are starting to consolidate the API and want to get soon to a point we feel confortable with the design and ship a 1.0.0 release. 0.7.0 has shippped a bit earlier than we planned to make sure that Windows Mixed Reality headsets and Microsoft Edge are well supported at launch. A couple of features, such as Vive tracker support and spectator camera, have moved to 0.8.0. Keep an eye on the [roadmap](https://github.com/aframevr/aframe/blob/master/ROADMAP.md) to see what's coming.
