---
title: A-Frame v0.8.0 - Performance and Production
author: twitter|andgokevin|Kevin Ngo
date: 2018-03-09 10:00:00
layout: blog
image:
  src: v0.8.0.jpg
---

The A-Frame train continues! v0.8.0 has been released, bringing many, many
performance improvements through being battle-tested in production
applications. Notably, we ported many fixes and performance through building
out [Supermedium](http://store.steampowered.com/app/803010/Supermedium/) using
A-Frame!

We hit A Week of A-Frame 100, highlighting the long way we've come such that
there are companies and startups taking the leap with A-Frame. There's even an
A-Frame application published on Steam VR! Including:

- [Ottifox](https://ottifox.com/) - A nimble design app that helps you create VR and AR prototypes that run in the browser - without writing code.
- [Halo Labs](https://www.halolabs.io/) - VR/AR design, prototyping, and collaboration solution for teams.
- [Archilogic](https://spaces.archilogic.com/explore) - Turn floor plans into virtual tours.
- [Vragments](https://getfader.com/) - Build and publish your own 360 story.
- [Scapic](https://scapic.com/) - Create immersive worlds.
- [Lucid Web](https://www.lucidweb.io/) - WebVR player.
- [Ideaspace](https://www.ideaspacevr.org/) - CMS.
- [Supermedium](https://supermedium.com/) - The virtual reality browser.

Alongside many other companies!

## What's New?

The biggest change is allowing to modify three.js Object3D position, rotation,
scale, and visible directly while still maintining in sync in the A-Frame
layer. There is currently overhead with `.setAttribute`, but all of that can be
skipped for position, rotation, scale, visible by directly modifying three.js
Object3D. That is a simple object property change. Since object transformations
are one of the most often updated things, this saves on a lot of overhead. In
general, we begin to try to find ways to skip `.setAttribute` when able.

Lots of other performance improvements, both in the core of A-Frame and in top
A-Frame community components (e.g., animation). We scoured a lot of the
codebase removing unnecessary memory allocations and event emissions.

We've also upgraded to three.js's WebVR API, which was a long and grueling
process to integrate and catch all the bugs, but we did it! Still a lot to be
done on the performance side.

The A-Frame Inspector also got a few nifty features such as tree collapsing on
the entity panel, pressing `f` to focus on an entity, and some bug fixes.

[releasenotes]: https://github.com/aframevr/aframe/releases/tag/v0.8.0

Check out the [release notes][releasenotes] for the complete changelog which
includes a list of all new features, optimizations, and bug fixes.

<!-- more -->

## What Have People Built?

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="tweets">
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">We have released a beta version of our new funny webvr game Cross the Street Fun <a href="https://t.co/BWfCqOxxiR">https://t.co/BWfCqOxxiR</a> .<br>Do not get hit by the car.<a href="https://twitter.com/hashtag/threejs?src=hash&amp;ref_src=twsrc%5Etfw">#threejs</a> <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/hashtag/webxr?src=hash&amp;ref_src=twsrc%5Etfw">#webxr</a> <a href="https://t.co/nEPOCVhugl">pic.twitter.com/nEPOCVhugl</a></p>&mdash; sromline (@sromline) <a href="https://twitter.com/sromline/status/958793852139331584?ref_src=twsrc%5Etfw">January 31, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">ð Weâre excited to announce the launch of Supermedium, the virtual reality browser! Download it from <a href="https://t.co/Lnyvgt7HBY">https://t.co/Lnyvgt7HBY</a>, put on a headset, and surf dozens of VR experiences on the Web. <a href="https://t.co/2rloFZl5ko">https://t.co/2rloFZl5ko</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/hashtag/ycombinator?src=hash&amp;ref_src=twsrc%5Etfw">#ycombinator</a> <a href="https://t.co/6aArQKvgpn">pic.twitter.com/6aArQKvgpn</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/958799213877370880?ref_src=twsrc%5Etfw">January 31, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Todayâs the day! Ottifox 2 is here - with Google Poly search built straight into the app, grouping features, streamlined UI and more! For a full run down of all the new features check out our blog post: <a href="https://t.co/pzcTTGZJz5">https://t.co/pzcTTGZJz5</a> Examples to come! <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/aframe?ref_src=twsrc%5Etfw">@aframe</a> <a href="https://twitter.com/hashtag/madewithblocks?src=hash&amp;ref_src=twsrc%5Etfw">#madewithblocks</a> <a href="https://twitter.com/hashtag/VR?src=hash&amp;ref_src=twsrc%5Etfw">#VR</a> <a href="https://t.co/6FfpLZjpqJ">pic.twitter.com/6FfpLZjpqJ</a></p>&mdash; Ottifox (@ottifox) <a href="https://twitter.com/ottifox/status/960994033169448966?ref_src=twsrc%5Etfw">February 6, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;ve just released an <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> component to pan, rotate and scale the user camera on <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a>, inspired by VR editors like <a href="https://twitter.com/hashtag/UnrealEngine?src=hash&amp;ref_src=twsrc%5Etfw">#UnrealEngine</a> and <a href="https://twitter.com/hashtag/unity3d?src=hash&amp;ref_src=twsrc%5Etfw">#unity3d</a>. <a href="https://twitter.com/hashtag/threejs?src=hash&amp;ref_src=twsrc%5Etfw">#threejs</a> version coming soon :) <a href="https://t.co/bDyWnZVbcH">https://t.co/bDyWnZVbcH</a> <a href="https://t.co/iNF97dhpZy">pic.twitter.com/iNF97dhpZy</a></p>&mdash; Fernando Serrano (@fernandojsg) <a href="https://twitter.com/fernandojsg/status/968839714445975553?ref_src=twsrc%5Etfw">February 28, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Starting to look familiar. <a href="https://twitter.com/hashtag/WebVR?src=hash&amp;ref_src=twsrc%5Etfw">#WebVR</a> browser game with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>. Added cities you must defend from incoming missiles. <a href="https://twitter.com/hashtag/indiedev?src=hash&amp;ref_src=twsrc%5Etfw">#indiedev</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://t.co/GtPcIJL7on">pic.twitter.com/GtPcIJL7on</a></p>&mdash; Adam Alexander (@AdamAlexandr) <a href="https://twitter.com/AdamAlexandr/status/950126707033309184?ref_src=twsrc%5Etfw">January 7, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Weâre proud to announce the launch of our first WebVR experience! Visit Pierre Koenigâs Case Study House 22 in full 3D on your HTC Vive, desktop, or mobile device. Check it out! <a href="https://t.co/SljvOHRnQ2">https://t.co/SljvOHRnQ2</a><a href="https://twitter.com/hashtag/VR?src=hash&amp;ref_src=twsrc%5Etfw">#VR</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a> <a href="https://twitter.com/hashtag/threejs?src=hash&amp;ref_src=twsrc%5Etfw">#threejs</a> <a href="https://twitter.com/hashtag/losangeles?src=hash&amp;ref_src=twsrc%5Etfw">#losangeles</a> <a href="https://twitter.com/hashtag/midcentury?src=hash&amp;ref_src=twsrc%5Etfw">#midcentury</a> <a href="https://twitter.com/hashtag/modern?src=hash&amp;ref_src=twsrc%5Etfw">#modern</a> <a href="https://twitter.com/hashtag/architecture?src=hash&amp;ref_src=twsrc%5Etfw">#architecture</a> <a href="https://t.co/iM8AJ8DYT3">pic.twitter.com/iM8AJ8DYT3</a></p>&mdash; Paragram (@ParagramVR) <a href="https://twitter.com/ParagramVR/status/932070709983145985?ref_src=twsrc%5Etfw">November 19, 2017</a></blockquote>


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Try âc o m p o s u r eâ - immersive experience for stress relief. Built with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>, its <a href="https://twitter.com/hashtag/WebVR?src=hash&amp;ref_src=twsrc%5Etfw">#WebVR</a> &amp; <a href="https://twitter.com/hashtag/3daudio?src=hash&amp;ref_src=twsrc%5Etfw">#3daudio</a> for desktop, mobile and <a href="https://twitter.com/hashtag/VR?src=hash&amp;ref_src=twsrc%5Etfw">#VR</a>! Many thanks to <a href="https://twitter.com/ianpetrarca?ref_src=twsrc%5Etfw">@ianpetrarca</a> &amp; <a href="https://twitter.com/datavized?ref_src=twsrc%5Etfw">@datavized</a> for their skills, wisdom and guidance. Try it. PM me your feedback. Share! : <a href="https://t.co/bENdn6U5uk">https://t.co/bENdn6U5uk</a> <a href="https://t.co/VgYfFLfMbD">pic.twitter.com/VgYfFLfMbD</a></p>&mdash; Jeff McSpadden (@macspaddy) <a href="https://twitter.com/macspaddy/status/962108600465395712?ref_src=twsrc%5Etfw">February 9, 2018</a></blockquote>
</div>

## Numbers

Since v0.7.0 was released in September 20th, 2017:

- There have been 30 new contributors, totalling 223.
- We have 1246 new members in the Slack community for a total of 5980.
- 202,000 people have visited [aframe.io](https://aframe.io) since last release.

## What's Next?

We will continue performance improvements and battle testing. We will look at
how to enable people to build more full applications and games versus small
demos.  That includes disseminating the knowledge we've gained from building a
browser, full games, and complex applications using A-Frame. Via guides,
frameworks, boilerplates, and open game projects!
