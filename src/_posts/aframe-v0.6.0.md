---
title: A-Frame v0.6.0 - Link Traversal
date: 2017-06-29 10:00:00
layout: blog
image:
  src: https://user-images.githubusercontent.com/674727/27721720-19388346-5d17-11e7-912b-499886be0a8d.gif
---

A-Frame v0.6.0 at last fulfills the "Web" in WebVR. After three months of work,
this release features support for WebVR 1.1 API features such as **link
traversal** that shipped on Firefox Nightly (and soon release Firefox 55),
**portals**, and fills out **controller support for Daydream and GearVR**
including a component for **laser interactions**.

Use it today with `<script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>`.

## What's New?

After years of waiting, **link traversal** has finally landed in a desktop
browser with Firefox in the WebVR 1.1 API, and A-Frame is there to help you
travel from world to world. Link traversal lets us stay in VR as we travel
between VR web pages, at last fulfilling one of the key promises of WebVR.
This is accomplished by listening to a browser event on page load and kicking
into VR, but A-Frame also provides a link component and portals so we can zip
through the Metaverse in style.

Developed by Diego, the portals are represented as windows into another scene,
powered by 360&deg; panoramic images, which can be taken in A-Frame using the
[screenshot shortcut][screenshot] `<ctrl> + <alt> + <shift> + s`.

[Try link traversal out with Firefox Nightly and a
headset](https://aframe.io/aframe/examples/showcase/link-traversal/) or [read
the link docs](https://aframe.io/docs/0.6.0/components/link.html). We'll have
another blog post in detail soon.

[screenshot]: https://aframe.io/docs/0.6.0/components/screenshot.html

A-Frame completes the collection by providing components out of the box for
**controllers for every major headset**: `vive-controls`,
`oculus-touch-controls`, `daydream-controls`, and `gearvr-controls`. Want to
support them all at once in your application? Just toss in `<a-entity
laser-controls></a-entity>` and we have a ray-based control scheme that scales
across every type of controller.

There have been major gains in **performance**. We've:

- Added some caching and reduced some type checking in critical paths of object updates.
- Reduced memory usage by caching textures.
- Reduced memory usage by reducing the number of instantiated JavaScript objects.
- Eliminated duplicate asset network requests when using `<a-assets>`.
- Throttled the `componentchanged` event which gets emitted very often.

Some nice cherries on top are the **shadow component** for creating real-time
shadows. Add some depth and presence to our scene alongside lights. Brought to
you by our now core A-Frame developer,
[@donrmccurdy](https://twitter.com/donrmccurdy/). And add some post-processing
with **[aframe-effects](https://wizgrav.github.io/aframe-effects/)** by
@wizgrav.

[releasenotes]: https://github.com/aframevr/aframe/releases/tag/v0.6.0

Check out the [release notes][releasenotes] for the complete changelog which
includes a list of all new features, optimizations, and bug fixes.

<!-- more -->

## What Have People Built?

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

We've had over 20 entries of [A Week of A-Frame](https://aframe.io/blog/) since
v0.5.0 was released. Highlights include Google using A-Frame for one of their
[WebVR Experiments](https://www.webvrexperiments.com/experiment/musical-forest)
and [Google Expeditions](https://edu.google.com/expeditions/#about), A-Frame
experiences featured at the Tribeca / Cannes / Tokushima festivals, and
increasing usage of A-Frame for augmented reality experiments.

The component of the year goes to the [Environment
Component](https://github.com/feiss/aframe-environment-component), infinite
seeded procedural and customizable environments:

![Enviroments](/images/blog/environment.gif)

<div class="tweets">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Mix tunes among trees with people around the world in The Musical Forest, a <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> Experiment → <a href="https://t.co/kVaMiooQs6">https://t.co/kVaMiooQs6</a> <a href="https://t.co/vIW17ul5CN">pic.twitter.com/vIW17ul5CN</a></p>&mdash; Google (@Google) <a href="https://twitter.com/Google/status/852613738720931840">April 13, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⛏️ &quot;Minecraft in WebVR with HTML Using A-Frame&quot; tutorial on <a href="https://twitter.com/Real_CSS_Tricks">@Real_CSS_Tricks</a> by <a href="https://twitter.com/andgokevin">@andgokevin</a>. 11 lines of HTML! <a href="https://t.co/wj4dXqzCQf">https://t.co/wj4dXqzCQf</a> <a href="https://t.co/CouEW3HLHT">pic.twitter.com/CouEW3HLHT</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/842032593512026112">March 15, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Tweetscape is a <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> experience displaying <a href="https://twitter.com/hashtag/tweets?src=hash">#tweets</a> in real-time along a <a href="https://twitter.com/hashtag/3D?src=hash">#3D</a> timeline. Using <a href="https://twitter.com/vuejs">@vuejs</a> and <a href="https://twitter.com/aframevr">@aframevr</a>. By <a href="https://twitter.com/Koroeskohr">@Koroeskohr</a> and me 🚀 <a href="https://t.co/pDvAP9iLyS">pic.twitter.com/pDvAP9iLyS</a></p>&mdash; Pierre Charles (@pierrechls) <a href="https://twitter.com/pierrechls/status/844267761270493184">March 21, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Grand opening of the Metaverse&#39;s first dance club! Show off your best moves on our latest <a href="https://twitter.com/hashtag/aframevr?src=hash">#aframevr</a> <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a> demo <a href="https://t.co/l9Pm0Enoa8">https://t.co/l9Pm0Enoa8</a> <a href="https://t.co/3ypA9Z7QOq">pic.twitter.com/3ypA9Z7QOq</a></p>&mdash; Diego (@dmarcos) <a href="https://twitter.com/dmarcos/status/846983604374835200">March 29, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">One end of the Metaverse. A huge multiuser <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a> public space by 3D Artist <a href="https://twitter.com/J_Ostrem">@J_Ostrem</a> <a href="https://t.co/kcnFeGJX7y">https://t.co/kcnFeGJX7y</a> <a href="https://t.co/0u6p78hBnj">pic.twitter.com/0u6p78hBnj</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/848850525953024000">April 3, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to do <a href="https://twitter.com/hashtag/AR?src=hash">#AR</a> on the Web in 10 lines of HTML with AR.js and <a href="https://twitter.com/aframevr">@aframevr</a> | Tutorial + example on <a href="https://twitter.com/CodePen">@CodePen</a> 😉 <a href="https://t.co/7qq0Dcjgnf">https://t.co/7qq0Dcjgnf</a> <a href="https://t.co/sMImR8k9jF">pic.twitter.com/sMImR8k9jF</a></p>&mdash; Alexandra Etienne (@AndraConnect) <a href="https://twitter.com/AndraConnect/status/849995924495618048">April 6, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📺 Beginnings of WebScreenVR by <a href="https://twitter.com/cyberwarfighte1">@cyberwarfighte1</a> (Samuel Cardillo) in <a href="https://twitter.com/aframevr">@aframevr</a> <a href="https://twitter.com/hashtag/webvr?src=hash">#webvr</a>. View desktop windows in VR.  <a href="https://t.co/UhhUjiI6gm">https://t.co/UhhUjiI6gm</a> <a href="https://t.co/ZNEAFoydjb">pic.twitter.com/ZNEAFoydjb</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/855330586587680769">April 21, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Broken Night, interactive VR film premiering at <a href="https://twitter.com/Tribeca">@Tribeca</a> Film Festival. Made with <a href="https://twitter.com/aframevr">@aframevr</a> by <a href="https://twitter.com/Opherv">@Opherv</a> &amp; Gary Weiss. <a href="https://t.co/tX8hwAA7uU">https://t.co/tX8hwAA7uU</a> <a href="https://t.co/Bcb3zOQ1Hy">pic.twitter.com/Bcb3zOQ1Hy</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/858082819385442304">April 28, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">First tweet to announce that ubiver.io is online ! Browse YouTube and Facebook in VR. This project was built with <a href="https://twitter.com/aframevr">@aframevr</a> <a href="https://t.co/ItZEL1gkGZ">pic.twitter.com/ItZEL1gkGZ</a></p>&mdash; Ubiver (@UbiverIO) <a href="https://twitter.com/UbiverIO/status/866795345187090432">May 22, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">GIFed up that A-Frame Effects for ya. <a href="https://t.co/5YiijxQBvN">pic.twitter.com/5YiijxQBvN</a></p>&mdash; Kevin Ngo (@andgokevin) <a href="https://twitter.com/andgokevin/status/872158736806281217">June 6, 2017</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🇯🇵 Tokushima VR Video Festival website by Tatsuya Shirai. Being not a programmer, <a href="https://twitter.com/aframevr">@aframevr</a> hit the spot. <a href="https://t.co/kKvJFOHWmC">https://t.co/kKvJFOHWmC</a> <a href="https://t.co/9RalD97GBN">pic.twitter.com/9RalD97GBN</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/859482481766125568">May 2, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Forest Wave by <a href="https://twitter.com/alfredofrlp">@alfredofrlp</a><a href="https://t.co/0PlItkeLGF">https://t.co/0PlItkeLGF</a> <a href="https://t.co/2tsdYX5N5b">pic.twitter.com/2tsdYX5N5b</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/875143253959430144">June 15, 2017</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Throwing things at <a href="https://twitter.com/chrisschaer">@chrisschaer</a>! A multi-user <a href="https://twitter.com/aframevr">@aframevr</a> scene with synched entities and physics! <a href="https://twitter.com/hashtag/WebVR?src=hash">#WebVR</a> <a href="https://twitter.com/hashtag/WebRTC?src=hash">#WebRTC</a> <a href="https://t.co/OFwuqOXQme">pic.twitter.com/OFwuqOXQme</a></p>&mdash; Jan Azzati (@protyze) <a href="https://twitter.com/protyze/status/875831877755645953">June 16, 2017</a></blockquote>
</div>

## Numbers

Since v0.5.0 was released in February 2017:

- A-Frame has gained over 45 new contributors, totalling to 169.
- 216 GitHub issues were opened, 251 were closed.
- 240 GitHub pull requests were opened, 251 were closed.
- 150,000 people have visited [aframe.io](https://aframe.io).

In total:

- The A-Frame Slack has 3,984 members.
- On npm, A-Frame has been downloaded 26,000 times, and aframe-react 15,000 times.
- 530,000 people have visited [aframe.io](https://aframe.io).

## What's Next?

> There may be some regressions related to .setAttribute and raycasters drawing
> a line. We'll push out an 0.6.1 soon also including support for Firefox for
> Android.

[@machenmusik](https://twitter.com/machenmusik) is currently ushering in
support for [Vive trackers](https://www.vive.com/us/vive-tracker/) to bring in
real world objects into the VR world. Also expect support for SteamVR Knuckles
controller once that is released.

Much work is being done on **multiuser experiences** including
[@HaydenLee37](https://twitter.com/HaydenLee37)'s
[networked-aframe](https://github.com/haydenjameslee/networked-aframe),
[@superhoge](https://twitter.com/superhoge/)'s
[THREENetwork](https://github.com/takahirox/ThreeNetwork) , as well as some
thought on how to performantly achieve networked physics. These WebRTC
experiments succeed previous WebSocket and Firebase-based experiments. We'll be
releasing blog posts on making A-Painter multiuser and link traversal across
modifiable environments multiuser.

And lastly, more work on in-VR content creation and tools. A-Frame is a great
start on lowering the barrier of entry with web technologies, but we can knock
down that wall harder by content creation more literally into our hands.
