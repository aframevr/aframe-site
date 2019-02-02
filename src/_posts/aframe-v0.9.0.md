---
title: A-Frame v0.9.0 - Perf & Initial WebXR
author: twitter|andgokevin|Kevin Ngo
date: 2019-02-11 10:00:00
layout: blog
image:
  src: https://user-images.githubusercontent.com/674727/52596116-5efe9400-2e04-11e9-9dc5-6297fd499e65.jpg
---

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[Supermedium]: https://supermedium.com
[Soundboxing WebVR]: https://supermedium.com
[Supercraft]: https://supermedium.com/supercraft
[BeatSaver Viewer]: https://supermedium.com/beatsaver-viewer/

Over the last year, we've continued to try to push the limits of the Web to
produce VR content that stands on its own alongside the native apps and games
found on the stores. At [Supermedium], we developed content such as
[Soundboxing WebVR] alongside [@ericflo](https://twitter.com/ericflo),
[Supercraft](https://supermedium.com/supercraft), and the [BeatSaver
Viewer](http://supermedium.com/beatsaver-viewer/).

We're starting to highlight usage of A-Frame by companies such as Disney, Ford,
Toyota, Chevrolet, Sony, Samsung, Google, CERN, Magic Leap, Electronic Frontier
Foundation, NPR, and NASA. See the new and developing [A-Frame
showcase](https://aframe.io/showcase/) on the website.

And thanks to Google Creative Labs for financially supporting development of
initial WebXR support through us at [Supermedium] in this release of A-Frame.

<!-- more -->

## What's New?

Major changes to A-Frame involve large performance improvements, a new
animation component, Inspector updates, addition of `oculus-go-controls` +
`vive-focus-controls`, and introductory WebXR support. Note that the release
date of WebXR is indefinite a few years under discussion and is not yet parity
with the WebVR 1.1 standard from five years back. A-Frame will do its best to
smooth out the flux. We may ship an 0.9.1 since WebXR has already broken with
Chrome Canary. Biggest things to note for migrating is that:

- `<a-animation>` has been removed in favor of the animation component (a
back-polyfill exists). We are currently working on fixing some memory leaks in
anime.js .
- Raycaster event APIs have slightly changed.

The Inspector has also received some overhaul with stability, bug fixes,
performance improvements, a complete refactoring, UI enhancements, and now a
companion server to sync changes back to your HTML files with the [A-Frame
Watcher](https://supermedium.com/aframe-watcher/)!

<div class="tweets">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">👀 <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> Watcher, a companion to the <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> Inspector that can sync changes from the visual editor to your HTML files. Supported on master branch of the Inspector.<br><br>Useful for tweaking positions, laying out text w/o going between code + browser. <a href="https://t.co/SmTTrljqWA">https://t.co/SmTTrljqWA</a> <a href="https://t.co/qQxv8KvhQS">pic.twitter.com/qQxv8KvhQS</a></p>&mdash; Kevin Ngo (@andgokevin) <a href="https://twitter.com/andgokevin/status/1073776813799759873?ref_src=twsrc%5Etfw">December 15, 2018</a></blockquote>


</div>

[changelog]: https://github.com/aframevr/aframe/blob/master/CHANGELOG.md
[release notes]: https://github.com/aframevr/aframe/releases/tag/v0.9.0

See the **[release notes][release notes]** or **[changelog]** for more details.

## What Have People Built?

Let's check out what people have built how world-renowned companies have
released production projects using A-Frame! Also see the new [A-Frame
Showcase].

<div class="tweets">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">EFF&#39;s Spot the Surveillance virtual reality project places you in a street scene, where you learn to identify a variety of police technologies. <a href="https://t.co/LuXEJu8atV">https://t.co/LuXEJu8atV</a></p>&mdash; EFF (@EFF) <a href="https://twitter.com/EFF/status/1066077176435376128?ref_src=twsrc%5Etfw">November 23, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Check out the new updated version of our <a href="https://twitter.com/hashtag/webgl?src=hash&amp;ref_src=twsrc%5Etfw">#webgl</a> Camry Configurator, built using <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> and <a href="https://twitter.com/hashtag/threejs?src=hash&amp;ref_src=twsrc%5Etfw">#threejs</a> 🙌 <a href="https://t.co/rO8pUJwgsf">https://t.co/rO8pUJwgsf</a> <a href="https://t.co/3umySnTMp8">pic.twitter.com/3umySnTMp8</a></p>&mdash; Rotor Studios (@rotorstudios) <a href="https://twitter.com/rotorstudios/status/1003435514936979456?ref_src=twsrc%5Etfw">June 4, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Check out the the all-new 2019 Chevrolet Silverado in 3D! <a href="https://t.co/zJ0g7Kadq2">https://t.co/zJ0g7Kadq2</a>  Made with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> &amp; threejs <a href="https://t.co/LVZgxxchgx">pic.twitter.com/LVZgxxchgx</a></p>&mdash; Allan Cozart (@ALLANCOZART) <a href="https://twitter.com/ALLANCOZART/status/1086274438864064513?ref_src=twsrc%5Etfw">January 18, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This was sort of glossed over. But Sony&#39;s $1 million dollar sweepstakes 360/VR challenge for marketing their Hollywood movie &quot;Escape Room&quot; was built with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>! <a href="https://t.co/PDbnA4XHyi">https://t.co/PDbnA4XHyi</a> <a href="https://t.co/ESoBSdnmkd">pic.twitter.com/ESoBSdnmkd</a></p>&mdash; Kevin Ngo (@andgokevin) <a href="https://twitter.com/andgokevin/status/1091457135748120576?ref_src=twsrc%5Etfw">February 1, 2019</a></blockquote>


</div>

**[Hidden Mickey](https://disney.co.uk/mickey-mouse/hidden-mickey) from Disney** developed by @shaunmnemonic:

![Disney](https://user-images.githubusercontent.com/674727/52158596-a17ae080-264e-11e9-92de-3ecc1596a05a.png)

**[Inside Music](https://experiments.withgoogle.com/webvr/inside-music/view/) from Google, Song Exploder** developed by tambien and help from
Supermedium:

![Inside Music](https://user-images.githubusercontent.com/674727/52158893-ebb19100-2651-11e9-8e36-53416167f520.png)

**[Access Mars](https://accessmars.withgoogle.com) from Google, NASA** with help from Supermedium:

![Access Mars](https://user-images.githubusercontent.com/674727/52158894-ebb19100-2651-11e9-9605-0c5d12250533.png)

Here are some companies, startups, and studios that have leaned on A-Frame and
thus some pretty fun jobs created!

<div class="tweets">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Build, collaborate, and share your world with anyone around the globe. <a href="https://twitter.com/hashtag/XR4all?src=hash&amp;ref_src=twsrc%5Etfw">#XR4all</a> <a href="https://twitter.com/magicleap?ref_src=twsrc%5Etfw">@magicleap</a> <a href="https://twitter.com/MadewMagicLeap?ref_src=twsrc%5Etfw">@MadewMagicLeap</a> <a href="https://t.co/VDna4EfpNZ">pic.twitter.com/VDna4EfpNZ</a></p>&mdash; 3Data (@3DataCloud) <a href="https://twitter.com/3DataCloud/status/1071066827634151425?ref_src=twsrc%5Etfw">December 7, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;ve done it again! The Camry <a href="https://twitter.com/hashtag/WebGL?src=hash&amp;ref_src=twsrc%5Etfw">#WebGL</a> Configurator has won the Visionary Award at the <a href="https://twitter.com/summitawards?ref_src=twsrc%5Etfw">@summitawards</a> for Emerging Media. It&#39;s such an honour to be recognised again for this innovative project - try it here: <a href="https://t.co/L1HMXwd7cd">https://t.co/L1HMXwd7cd</a> <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> <a href="https://twitter.com/hashtag/threejs?src=hash&amp;ref_src=twsrc%5Etfw">#threejs</a> 🏆🍾🙌 <a href="https://t.co/56CkHJeq7l">pic.twitter.com/56CkHJeq7l</a></p>&mdash; Rotor Studios (@rotorstudios) <a href="https://twitter.com/rotorstudios/status/1083551574742323201?ref_src=twsrc%5Etfw">January 11, 2019</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Imagine a world where you can create <a href="https://twitter.com/hashtag/VR?src=hash&amp;ref_src=twsrc%5Etfw">#VR</a>, <a href="https://twitter.com/hashtag/AR?src=hash&amp;ref_src=twsrc%5Etfw">#AR</a>, 360 &amp; <a href="https://twitter.com/hashtag/3D?src=hash&amp;ref_src=twsrc%5Etfw">#3D</a> content with zero coding by simply dragging and dropping. Say Hello to Scapic. We know you&#39;ll love this.<br><br>Try out the Scapic Editor - <a href="https://t.co/GmzUPVI4VM">https://t.co/GmzUPVI4VM</a><a href="https://twitter.com/hashtag/VirtualReality?src=hash&amp;ref_src=twsrc%5Etfw">#VirtualReality</a> <a href="https://twitter.com/hashtag/AugmentedReality?src=hash&amp;ref_src=twsrc%5Etfw">#AugmentedReality</a> <a href="https://t.co/uwlR1lQA6w">pic.twitter.com/uwlR1lQA6w</a></p>&mdash; Scapic (@scapicxr) <a href="https://twitter.com/scapicxr/status/1053328627616628737?ref_src=twsrc%5Etfw">October 19, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Check out <a href="https://twitter.com/hashtag/craftblocks?src=hash&amp;ref_src=twsrc%5Etfw">#craftblocks</a> by <a href="https://twitter.com/sgidon?ref_src=twsrc%5Etfw">@sgidon</a>! A fully featured voxel editor built with <a href="https://twitter.com/hashtag/8thWallWeb?src=hash&amp;ref_src=twsrc%5Etfw">#8thWallWeb</a> and <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>. Share your art with others using <a href="https://twitter.com/hashtag/ARCameras?src=hash&amp;ref_src=twsrc%5Etfw">#ARCameras</a> at <a href="https://t.co/edq86qaKvP">https://t.co/edq86qaKvP</a>. Try it in Safari (iOS) or in Android browsers today! <a href="https://t.co/ujJeHEaU3u">pic.twitter.com/ujJeHEaU3u</a></p>&mdash; 8th Wall (@the8thwall) <a href="https://twitter.com/the8thwall/status/1073020032425345024?ref_src=twsrc%5Etfw">December 13, 2018</a></blockquote>
</div>

And some more cool A-Frame projects:

<div class="tweets">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The new triple combo with a defense element. It&#39;s not easy, but a good combination and reaction training. Go to the tower and set to random combo.<a href="https://t.co/2CJMMthk8G">https://t.co/2CJMMthk8G</a> or try it out in <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a> browser<a href="https://twitter.com/hashtag/vrfitness?src=hash&amp;ref_src=twsrc%5Etfw">#vrfitness</a> <a href="https://twitter.com/hashtag/vrboxing?src=hash&amp;ref_src=twsrc%5Etfw">#vrboxing</a> <a href="https://twitter.com/hashtag/vrworkout?src=hash&amp;ref_src=twsrc%5Etfw">#vrworkout</a> <a href="https://twitter.com/hashtag/vr?src=hash&amp;ref_src=twsrc%5Etfw">#vr</a> <a href="https://twitter.com/hashtag/boxing?src=hash&amp;ref_src=twsrc%5Etfw">#boxing</a> <a href="https://twitter.com/hashtag/workout?src=hash&amp;ref_src=twsrc%5Etfw">#workout</a> <a href="https://twitter.com/hashtag/fitness?src=hash&amp;ref_src=twsrc%5Etfw">#fitness</a> <a href="https://t.co/NTTCPoCsVc">pic.twitter.com/NTTCPoCsVc</a></p>&mdash; TowermaxFitness (@towermaxfitness) <a href="https://twitter.com/towermaxfitness/status/1073915256106311682?ref_src=twsrc%5Etfw">December 15, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">👐 Need someone to talk to? Put on a little show with these cute hand &quot;vuppets&quot; by <a href="https://twitter.com/jorgefuentesnet?ref_src=twsrc%5Etfw">@jorgefuentesnet</a>! Built with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a>. Now playing on <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a>. <a href="https://t.co/UZFHAITWr4">pic.twitter.com/UZFHAITWr4</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/1067177609786621952?ref_src=twsrc%5Etfw">November 26, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⚔️ We teamed up w/ the Beat Saber Modding Group &amp; elliotttate to release the open source BeatSaver Viewer! Preview + link community songs on any browser (iOS soon) powered by <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>/<a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a>. Featured on <a href="https://t.co/vj8PxhqxQg">https://t.co/vj8PxhqxQg</a>!<a href="https://t.co/pWKmNRnZdJ">https://t.co/pWKmNRnZdJ</a> <a href="https://t.co/eWbcHXuIuz">https://t.co/eWbcHXuIuz</a> <a href="https://t.co/CR4sA8MzKs">pic.twitter.com/CR4sA8MzKs</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/1088966488910753793?ref_src=twsrc%5Etfw">January 26, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">👊 True VR warriors need not weapons. Punch your way through hundreds of songs with <a href="https://twitter.com/soundboxingvr?ref_src=twsrc%5Etfw">@soundboxingvr</a>! Made with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> long ago in collaboration with <a href="https://twitter.com/ericflo?ref_src=twsrc%5Etfw">@ericflo</a>. Burn some calories on <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a>. <a href="https://t.co/ANrlF34Etb">pic.twitter.com/ANrlF34Etb</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/1057969133868933121?ref_src=twsrc%5Etfw">November 1, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🔫 pewpew, <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> Super Shooter Kit! A simple set of components to make a <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> shooter minigame in no time. Featuring a rapid workflow with <a href="https://twitter.com/hashtag/supercraft?src=hash&amp;ref_src=twsrc%5Etfw">#supercraft</a> for live reloading + in-VR + micro file size + low poly assets! <a href="https://t.co/0LV9aw83Ke">https://t.co/0LV9aw83Ke</a> <a href="https://t.co/J2Q4gGnaOI">pic.twitter.com/J2Q4gGnaOI</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/1022486165998452737?ref_src=twsrc%5Etfw">July 26, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;m *unbelievably* excited to share a preview release of Hubs by Mozilla, a new Mixed Reality-based communications platform we are building. All open source, and all running in your browser, powered by WebVR. Really!<a href="https://t.co/AtYqAn2qam">https://t.co/AtYqAn2qam</a></p>&mdash; Greg Fodor (@gfodor) <a href="https://twitter.com/gfodor/status/989492906594525185?ref_src=twsrc%5Etfw">April 26, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Can you get to the Top 10?? SUPER SAYS, a simon clone for VR, available on <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a> for 6dof controllers (<a href="https://twitter.com/hashtag/Oculus?src=hash&amp;ref_src=twsrc%5Etfw">#Oculus</a> <a href="https://twitter.com/hashtag/HTCVive?src=hash&amp;ref_src=twsrc%5Etfw">#HTCVive</a> <a href="https://twitter.com/hashtag/mixedreality?src=hash&amp;ref_src=twsrc%5Etfw">#mixedreality</a>) <a href="https://t.co/DHivKcO0Bh">https://t.co/DHivKcO0Bh</a>  1 day to create, 2 weeks to polish ¯\_(ツ)_/¯ <a href="https://t.co/gY7gkLqk60">pic.twitter.com/gY7gkLqk60</a></p>&mdash; Diego F. Goberna (@feiss) <a href="https://twitter.com/feiss/status/991597070711705600?ref_src=twsrc%5Etfw">May 2, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🏆🥚 Gunters of OASIS. Hundreds of generated <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> worlds. Hidden among them a golden egg. Find the egg and inherit the OASIS (and half a hundred dollars). Search for hidden clues, meet up with other Gunters. Ready? Start the hunt on <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a>!<a href="https://t.co/oTKimoCrFM">https://t.co/oTKimoCrFM</a> <a href="https://t.co/jyaPoUGHEW">pic.twitter.com/jyaPoUGHEW</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/981556448923590656?ref_src=twsrc%5Etfw">April 4, 2018</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve updated Trajectile Command with a high score leaderboard and a kickin sound track. Try it out on <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a> or another vr browser here: <a href="https://t.co/6vL9vyfDSQ">https://t.co/6vL9vyfDSQ</a> … Can you beat my high score?? <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> <a href="https://twitter.com/hashtag/VR?src=hash&amp;ref_src=twsrc%5Etfw">#VR</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/hashtag/webgl?src=hash&amp;ref_src=twsrc%5Etfw">#webgl</a> <a href="https://t.co/vy9oQYaO6K">pic.twitter.com/vy9oQYaO6K</a></p>&mdash; Adam Alexander (@AdamAlexandr) <a href="https://twitter.com/AdamAlexandr/status/1003143618167574528?ref_src=twsrc%5Etfw">June 3, 2018</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">ð Need someone to talk to? Put on a little show with these cute hand &quot;vuppets&quot; by <a href="https://twitter.com/jorgefuentesnet?ref_src=twsrc%5Etfw">@jorgefuentesnet</a>! Built with <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a>. Now playing on <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a>. <a href="https://t.co/UZFHAITWr4">pic.twitter.com/UZFHAITWr4</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/1067177609786621952?ref_src=twsrc%5Etfw">November 26, 2018</a></blockquote>
</div>

## Numbers

- 268 contributors with 45 new contributors since March 2018
- 1,600 total questions asked on StackOverflow
- 370,000+ people visited aframe.io since March 2018
- 3,200,000+ pageviews since March 2018
- Over 9000! GitHub stars
- 145+ entries of A Week of A-Frame and still going!

## What's Next?

We will ensure that A-Frame runs well on the Oculus Quest, and that there is a
place for users to experience A-Frame applications. A-Frame will continue to
keep up to date on the WebXR flux. We need to update documentation, guides, and
examples. And there are some lingering improvements we want to make to the
A-Frame API. Perhaps provide more streamlined tools for A-Frame development.

Thanks to everyone for filing issues, contributing, and sharing your projects!
