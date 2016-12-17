---
title: A-Frame v0.4.0 - The Registry
author: twitter|andgokevin|Kevin Ngo
date: 2016-12-16 10:00:00
layout: blog
image:
  src: registry.svg
---

[inspector]: https://github.com/aframevr/aframe-inspector
[registry]: https://github.com/aframevr/aframe-registry
[unityassetstore]: https://www.assetstore.unity3d.com/

**Happy first birthday to A-Frame!**. A-Frame was born exactly one year ago
with the mission to make WebVR content creation accessible and to enable rapid
innovation. We can't begin to describe how much the community has grown and the
amazing things people have contributed and built in the past year.

We celebrate with the release of **v0.4.0**! v0.4.0 comes with Oculus Touch
support, API polish, bug fixes, and an update to the [A-Frame
Inspector][inspector]. In the past few months, we started the [A-Frame
Registry][registry]! We'll be expanding upon the Registry and focus on building
out more tooling and ecosystem on top of A-Frame.

[registryimage]: https://cloud.githubusercontent.com/assets/674727/20548359/a7d71d20-b0d7-11e6-8024-8022c4cd1fd9.png
![registryimage]

<!-- more -->

[latestbuild]: https://aframe.io/releases/0.4.0/aframe.min.js

Grab the latest build at
[`https://aframe.io/releases/0.4.0/aframe.min.js`][latestbuild] or `npm install
aframe`.

## What's New?

The **Registry** is a curated repository of open source community A-Frame
components, like the [Unity Asset Store][unityassetstore] for A-Frame. In the
next few months, we'll be working with community developers on getting the
Registry populated with quality A-Frame components.

The **Inspector** update includes UI polish and bug fixes. The Inspector has
initial integration with the Registry; in the component dropdown on the entity
panel, we are able to inject and attach components straight from the Registry.
This integration makes components such as physics, particle systems, text,
mountains, or animations a few clicks away:

![inspector](https://cloud.githubusercontent.com/assets/674727/20549382/7ca30e58-b0e0-11e6-95e7-5fba99308024.gif)

Oculus Touch controllers have landed thanks to
[@machenmusik](https://twitter.com/machenmusik) (@mchen on Slack) with models
provided by [@arturitu](https://twitter.com/arturitu)! The `hand-controls`
component supports all different the Oculus Touch hand poses for each finger.
Speaking of Oculus, @machenmusik also added automatic Enter VR support for
browsers that support it, primarily Carmel!

[cursor]: https://aframe.io/docs/master/components/cursor.html
[primitives]: https://aframe.io/docs/master/primitives/
[Ryan Betts]: https://twitter.com/hitsmachines

For A-Frame itself, we've improved API surrounding `getAttribute` and
`setAttribute`, and fixed major bugs regarding component dependencies, the
[cursor component][cursor], and [primitives].

[adarose]: https://twitter.com/lady_ada_king

Some new features include a `reverseDrag` property for `look-controls` for
static 360&deg; use cases, support for ambient
occlusion/displacement/normal/spherical environment maps for the standard
material (thanks for [Ada Rose Edwards][adarose]), and keyboard shortcuts to
take perspective (`<ctrl> + <alt> + s`) and equirectangular (`<ctrl> + <alt> + <shift> + s`)
screenshots.

[releasenotes]: https://github.com/aframevr/aframe/releases/tag/v0.4.0

Check out the [release notes][releasenotes] for the complete changelog, which
includes a list of breaking changes and deprecations to help migrate.

## What Have People Built?

[stackoverflow]: https://stackoverflow.com/questions/tagged/aframe

A-Frame has been hyping up since the last release. We are really glad that
everyone is enjoying A-Frame and finds it useful. We've seen an approximate 50%
growth in activity across Slack, GitHub, websites since late August. In the
meetups we've attended, we've received great feedback of A-Frame and the
support on [Stack Overflow](https://stackoverflow.com/questions/tagged/aframe).
We even got sent flowers from abroad! With that, people have been able to build
awesome A-Frame projects:

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="tweets">
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Get colorful with A-Painter! Paint in VR from your browser and then share it with all your friends over the Web. <a href="https://t.co/qp2f2EB2Tz">https://t.co/qp2f2EB2Tz</a> <a href="https://t.co/fycL8o4jxL">pic.twitter.com/fycL8o4jxL</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/778326840196804608">September 20, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Teleport component for <a href="https://twitter.com/hashtag/aframevr?src=hash">#aframevr</a> released!<a href="https://t.co/2p8YPwBE3A">https://t.co/2p8YPwBE3A</a> <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> <a href="https://twitter.com/aframevr">@aframevr</a> <a href="https://twitter.com/htcvive">@htcvive</a> <a href="https://t.co/TQeBoiSCUX">pic.twitter.com/TQeBoiSCUX</a></p>&mdash; Fernando Serrano (@fernandojsg) <a href="https://twitter.com/fernandojsg/status/793534080226820096">November 1, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Here&#39;s an <a href="https://twitter.com/aframevr">@aframevr</a> project I&#39;ve been working on for a few weeks. StageVR: practice your next talk in VR ð¥ <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> <a href="https://t.co/2VTxKg1k8u">https://t.co/2VTxKg1k8u</a> <a href="https://t.co/1moIG36AII">pic.twitter.com/1moIG36AII</a></p>&mdash; Jonathan Z. White (@JonathanZWhite) <a href="https://twitter.com/JonathanZWhite/status/796730555152920577">November 10, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The Catherine Storr Experience by <a href="https://twitter.com/Dan_FS">@Dan_FS</a>. A fusion of cultural heritage with new forms of creativity. <a href="https://t.co/TCJK2SbHeb">https://t.co/TCJK2SbHeb</a> <a href="https://t.co/rVzqcXzP1i">pic.twitter.com/rVzqcXzP1i</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/793201933771083776">October 31, 2016</a></blockquote>

 <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s an <a href="https://twitter.com/aframevr">@aframevr</a> project I&#39;ve been working on this week. ScreenVR: use your desktop on the web, in VR 🔥 <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> <a href="https://t.co/nyTYooGsTO">https://t.co/nyTYooGsTO</a> <a href="https://t.co/VIChZAA92y">pic.twitter.com/VIChZAA92y</a></p>&mdash; Jonathan Z. White (@JonathanZWhite) <a href="https://twitter.com/JonathanZWhite/status/801475080815570944">November 23, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Halloween Feature! Building Ghost Train Builder&quot; by <a href="https://twitter.com/realisetweets">@realisetweets</a>. Design, implementation w/ <a href="https://twitter.com/vuejs">@vuejs</a>, perf.  <a href="https://t.co/3RiD6enDQX">https://t.co/3RiD6enDQX</a> <a href="https://t.co/2Oj16WgHQk">pic.twitter.com/2Oj16WgHQk</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/793109141858332672">October 31, 2016</a></blockquote>

 <blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is the <a href="https://twitter.com/aframevr">@aframevr</a> project I&#39;ve worked on. Make your own snowflake! <a href="https://t.co/JK9nU6eJeM">https://t.co/JK9nU6eJeM</a> <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> <a href="https://twitter.com/hashtag/snow?src=hash">#snow</a> <a href="https://twitter.com/hashtag/%EB%88%88?src=hash">#눈</a> <a href="https://t.co/rzzYZEdX2m">pic.twitter.com/rzzYZEdX2m</a></p>&mdash; I&#39;m Sure (@SureBak) <a href="https://twitter.com/SureBak/status/802353979845996544">November 26, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Ghost Train Builder by <a href="https://twitter.com/realisetweets">@realisetweets</a>. Randomly generated and custom SPOOKY SCARY <a href="https://twitter.com/hashtag/halloween?src=hash">#halloween</a> <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a> rides ððð» <a href="https://t.co/XzPxoHotdT">https://t.co/XzPxoHotdT</a> <a href="https://t.co/fYVKFg1kg3">pic.twitter.com/fYVKFg1kg3</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/792114737278361600">October 28, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Why iStaging Chose A-Frame&quot; by Alexandro Chen, a developer enabling immersive real estate tours in production. <a href="https://t.co/ULGk4dQQ8M">https://t.co/ULGk4dQQ8M</a> <a href="https://t.co/GjXcgfMCeL">pic.twitter.com/GjXcgfMCeL</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/791741363360440320">October 27, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Virtual Forest by <a href="https://twitter.com/koen_hufkens">@koen_hufkens</a>. Tracking the changing seasons in a forest with live #360 photos. <a href="https://t.co/bnFJZznkdI">https://t.co/bnFJZznkdI</a> <a href="https://t.co/02PKaGBy57">pic.twitter.com/02PKaGBy57</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/788524558869409792">October 18, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">SENSE OF PROMISE by <a href="https://twitter.com/akupresanin">@akupresanin</a>. Witness five elixirs over five worlds, before someone buys them off the blockchain <a href="https://t.co/Qi383GwbWn">https://t.co/Qi383GwbWn</a> <a href="https://t.co/HfexHameWt">pic.twitter.com/HfexHameWt</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/786280813918691328">October 12, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hyperlinks are coming to WebVR! <a href="https://t.co/pfMgQDI2pf">https://t.co/pfMgQDI2pf</a><br><br>Brought to you from the future by Mozilla VR! (Demo by <a href="https://twitter.com/EricaLayton">@EricaLayton</a> <a href="https://twitter.com/whoyee">@whoyee</a> <a href="https://twitter.com/cvanw">@cvanw</a>) <a href="https://t.co/nBAbM7fOIT">pic.twitter.com/nBAbM7fOIT</a></p>&mdash; Mozilla VR (@mozillavr) <a href="https://twitter.com/mozillavr/status/793638223666778112">November 2, 2016</a></blockquote>

  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Published my article on how I built Kubernetes in virtual reality <a href="https://twitter.com/kubernetesio">@kubernetesio</a> <a href="https://twitter.com/CloudNativeFdn">@CloudNativeFdn</a> : <a href="https://t.co/gxLIBgjhiq">https://t.co/gxLIBgjhiq</a> <a href="https://twitter.com/hashtag/VR?src=hash">#VR</a> <a href="https://twitter.com/hashtag/kubernetes?src=hash">#kubernetes</a> <a href="https://t.co/CgDfrvYZYM">pic.twitter.com/CgDfrvYZYM</a></p>&mdash; Ryan van Niekerk (@iamnayr) <a href="https://twitter.com/iamnayr/status/801160527783178240">November 22, 2016</a></blockquote>
</div>

## What's Next?

[a-painter]: https://aframe.io/a-painter

We will populate and build out the A-Frame Registry, we're aiming for 20 by the
end of the year, and at least 100 by the end of next year. This will enable
powerful and easy-to-use features for A-Frame developers.  We will expand
ecosystem and tools on top of A-Frame, as we have with the Inspector.

We will continue producing showcase content for A-Frame and WebVR as we've done
with [A-Painter][a-painter]. Within the next month, we will be releasing a room
scale first-person shooting game built with A-Frame.

In the next release of A-Frame, there may be movement with animations, systems,
materials, and textures as we improve APIs. Link traversal will arrive shortly
as the API stabilizes and ships on browser platforms.

2016 was a monumental year for WebVR. A-Frame got tens of thousands of
designer, developers, and creators excited about the future of the Web. Let's
carry that momentum and then some into 2017!

![Scenes](/images/blog/v0.4.0.png)
