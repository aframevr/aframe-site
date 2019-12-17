---
title: "A-Frame v1.0.0 - WebXR Support, AR Mode"
from: 2019-12-06
date: 2019-12-16
layout: blog
image:
  src: https://user-images.githubusercontent.com/674727/70950982-fc26ec00-2016-11ea-9091-56fcc024f62a.jpg
author: https://supermedium.com|Kevin Ngo
---

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

**Today marks A-Frame's fourth birthday**. Four years ago, on December 16th, 2015,
we released the first version of A-Frame to make it easier to build VR
experiences and make the Web keep pace with the VR industry.

With the help of a community of hundreds of thousands of developers over the
years, we're releasing **A-Frame v1.0.0** to support the coming out of the WebXR
spec which has been under discussion for the past several years. The upgrade to
A-Frame v1 and beyond will become necessary on more and more browsers as they
deprecate WebVR and only support the WebXR specification.

To clear confusion, WebXR refers to both AR and VR support on the Web. To that
end, we've included an AR mode out of the box in A-Frame for browsers that
support ARCore and ARKit. In production, make sure to use HTTPS for VR and AR
support.

We'd like to thank in part Google for providing a bit of funding to us at
[Supermedium](https://supermedium.com) to help develop and maintain WebXR
support for A-Frame. And to thank people within Google, Oculus, and importantly
the Web community for testing this version for us. We'll continue to provide
necessary updates to A-Frame.

We'd also like to celebrate now **300+ contributors**, **10,000+ GitHub
stars**, and **300+ email subscribers** to the A-Frame project.

If you'd like to continue to support us, please **[subscribe to the A-Frame
newsletter](https://aframe.io/subscribe/)** where we'll not only provide
updates and showcase community projects, but requests for testing and user
feedback support every now and then to keep us going in this grassroots
project.

Read the [release notes and changelog](https://github.com/aframevr/aframe/releases/tag/v1.0.0).

<div class="tweets tweets-feature">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A-Frame 1.0.0 is out! 🥳 With full WebXR support shipping now in Chrome 79 and Oculus Browser stable channels. Deliver VR experiences instantaneously to millions of users today! Happy immersive Christmas! 🎄</p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/1206625588481417216?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re still at it! Today marks the exact date of <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>&#39;s fourth birthday, and we&#39;re excited to release v1 with the help of the <a href="https://twitter.com/hashtag/WebVR?src=hash&amp;ref_src=twsrc%5Etfw">#WebVR</a> community. <a href="https://t.co/rlvFSpjBvu">https://t.co/rlvFSpjBvu</a> <a href="https://t.co/DHgRoEgb9f">https://t.co/DHgRoEgb9f</a></p>&mdash; Supermedium (@supermediumvr) <a href="https://twitter.com/supermediumvr/status/1206698957759336448?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For those who are using AR.js with <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a> in WebAR apps, please import latest <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a>, v1.0.0 has been shipped 🚀<br><br>This will avoid problems with new Chrome 79 that has WebXR Device API enabled by default.<br><br>Thanks to <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> team for the great work. It&#39;s outstanding.</p>&mdash; Nicolò Carpignoli (@nicolocarp) <a href="<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For those who are using AR.js with <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a> in WebAR apps, please import latest <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a>, v1.0.0 has been shipped 🚀<br><br>This will avoid problems with new Chrome 79 that has WebXR Device API enabled by default.<br><br>Thanks to <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> team for the great work. It&#39;s outstanding.</p>&mdash; Nicolò Carpignoli (@nicolocarp) <a href="https://twitter.com/nicolocarp/status/1206268332883808256?ref_src=twsrc%5Etfw">December 15, 2019</a></blockquote>

?ref_src=twsrc%5Etfw">December 15, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Hey devs! 👋 Remember to serve your content over HTTPS to enter VR mode in Chrome with A-Frame 1.0.0. WebXR is not available over HTTP.</p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/1206646669854461952?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🎉I&#39;m SUPER excited for the 1.0.0 release of <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> now that <a href="https://twitter.com/hashtag/WebXR?src=hash&amp;ref_src=twsrc%5Etfw">#WebXR</a> is shipping in Chrome 79🎉<br>There&#39;s SO much potential of merging spatial computing with the open web to form the <a href="https://twitter.com/hashtag/widerweb?src=hash&amp;ref_src=twsrc%5Etfw">#widerweb</a> &amp; early seeds for what may become &quot;The Metaverse.&quot;<br>Congrats to the <a href="https://twitter.com/supermediumvr?ref_src=twsrc%5Etfw">@supermediumvr</a> team! <a href="https://t.co/FuEgbBstFS">https://t.co/FuEgbBstFS</a></p>&mdash; Kent Bye VoicesOfVR (@kentbye) <a href="https://twitter.com/kentbye/status/1206652778359083009?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


</div>

<!-- more -->

## Projects

<div class="tweets">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">YES! CHESS IN VR <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a>  👏 <a href="https://t.co/jb3h1boQi3">https://t.co/jb3h1boQi3</a></p>&mdash; roncho (@ronchoqa) <a href="https://twitter.com/ronchoqa/status/1202625508976009218?ref_src=twsrc%5Etfw">December 5, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">xAPIGnome: Hanging out in the maker space at the <a href="https://twitter.com/hashtag/xAPIParty?src=hash&amp;ref_src=twsrc%5Etfw">#xAPIParty</a>. We’re playing with <a href="https://twitter.com/hashtag/AR?src=hash&amp;ref_src=twsrc%5Etfw">#AR</a> using aframevr markers to generate <a href="https://twitter.com/hashtag/xapi?src=hash&amp;ref_src=twsrc%5Etfw">#xapi</a> statements! What’s possible with these markers? We’re thinking space tours, new hire onboarding, complex equipment tutorials, etc… <a href="https://t.co/7iVlgmZwIX">pic.twitter.com/7iVlgmZwIX</a></p>&mdash; Digital Thinking 4 L&amp;D (@FreshThinkingfo) <a href="https://twitter.com/FreshThinkingfo/status/1205770247338438656?ref_src=twsrc%5Etfw">December 14, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">onCollide InstantGeometry GPU Particles for <a href="https://twitter.com/vrlandio?ref_src=twsrc%5Etfw">@vrlandio</a>  with <a href="https://twitter.com/hashtag/threejs?src=hash&amp;ref_src=twsrc%5Etfw">#threejs</a> <a href="https://twitter.com/hashtag/webgl?src=hash&amp;ref_src=twsrc%5Etfw">#webgl</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/hashtag/webx?src=hash&amp;ref_src=twsrc%5Etfw">#webx</a> <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> <a href="https://t.co/N0j1U7fd2G">pic.twitter.com/N0j1U7fd2G</a></p>&mdash; arpu (@arnputz) <a href="https://twitter.com/arnputz/status/1204180890747883520?ref_src=twsrc%5Etfw">December 9, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A <a href="https://twitter.com/hashtag/blog?src=hash&amp;ref_src=twsrc%5Etfw">#blog</a> theme for <a href="https://twitter.com/hashtag/WebVR?src=hash&amp;ref_src=twsrc%5Etfw">#WebVR</a> <a href="https://twitter.com/hashtag/WebXR?src=hash&amp;ref_src=twsrc%5Etfw">#WebXR</a> - IdeaSpace Compass Blog - for desktop, mobile and VR devices, included in the latest IdeaSpaceVR release - preview theme: <a href="https://t.co/AaDETNbakr">https://t.co/AaDETNbakr</a> enjoy! <a href="https://t.co/24spFehdDP">pic.twitter.com/24spFehdDP</a></p>&mdash; IdeaSpaceVR (@ideaspacevr) <a href="https://twitter.com/ideaspacevr/status/1179071359730802688?ref_src=twsrc%5Etfw">October 1, 2019</a></blockquote>


</div>






## Events

<div class="tweets">

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日は職場主催のイベントでWebAR/VRのハンズオンやります！<br>SOILセミナー： HTMLで作ろうWebAR/VR入門 <a href="https://t.co/01T6lZXzBW">https://t.co/01T6lZXzBW</a> <a href="https://twitter.com/hashtag/SRPOIL?src=hash&amp;ref_src=twsrc%5Etfw">#SRPOIL</a> <a href="https://twitter.com/hashtag/AR_Fukuoka?src=hash&amp;ref_src=twsrc%5Etfw">#AR_Fukuoka</a> <a href="https://twitter.com/hashtag/webvr?src=hash&amp;ref_src=twsrc%5Etfw">#webvr</a> <a href="https://twitter.com/hashtag/webar?src=hash&amp;ref_src=twsrc%5Etfw">#webar</a> <a href="https://twitter.com/hashtag/aframevr?src=hash&amp;ref_src=twsrc%5Etfw">#aframevr</a></p>&mdash; TakashiYoshinaga@AzureKinectとAR (@Taka_Yoshinaga) <a href="https://twitter.com/Taka_Yoshinaga/status/1204880585253998592?ref_src=twsrc%5Etfw">December 11, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@AFrameVR</a> and <a href="https://twitter.com/mozilla?ref_src=twsrc%5Etfw">@Mozilla</a> <a href="https://twitter.com/hashtag/WebXR?src=hash&amp;ref_src=twsrc%5Etfw">#WebXR</a> tools to teach <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a> in the classroom (here solving the <a href="https://t.co/WxRKdmRXxp">https://t.co/WxRKdmRXxp</a> ) and the difference between procedural knowledge (<a href="https://twitter.com/threejs_org?ref_src=twsrc%5Etfw">@threejs_org</a>) and declarative knowledge (<a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@AframeVR</a>) by <a href="https://twitter.com/Mikel_Salazar?ref_src=twsrc%5Etfw">@Mikel_Salazar</a> at <a href="https://twitter.com/centro_sanluis?ref_src=twsrc%5Etfw">@centro_sanluis</a> 🤗 <a href="https://t.co/leljYSKZvp">pic.twitter.com/leljYSKZvp</a></p>&mdash; Fabien Benetou (@utopiah) <a href="https://twitter.com/utopiah/status/1203975602132393984?ref_src=twsrc%5Etfw">December 9, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Congratulations! <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> is probably my favourite web framework out there atm - go try it out! <a href="https://t.co/sX4sxulrw3">https://t.co/sX4sxulrw3</a></p>&mdash; Pookage (@pookagehayes) <a href="https://twitter.com/pookagehayes/status/1206625962760298498?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


</div>



## Miscellaneous

<div class="tweets">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rural and Underserved inner city kids face the same challenges. Lack of access to Tech. Lack of Mentors. There are some great curriculums out there. <a href="https://twitter.com/freeCodeCamp?ref_src=twsrc%5Etfw">@freeCodeCamp</a> had over 5000 tutorials. Our PI515 kids are building <a href="https://twitter.com/hashtag/VR?src=hash&amp;ref_src=twsrc%5Etfw">#VR</a> via <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> and <a href="https://twitter.com/glitch?ref_src=twsrc%5Etfw">@glitch</a>.</p>&mdash; PI 515 (@LOVEPI515) <a href="https://twitter.com/LOVEPI515/status/1203769331982753799?ref_src=twsrc%5Etfw">December 8, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/WebXR?src=hash&amp;ref_src=twsrc%5Etfw">#WebXR</a> is arriving. Last week&#39;s first 🅰️-Frame Newsletter highlighting community projects and updates on WebXR and the next <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> release. Subscribe to get tomorrow&#39;s drop. <a href="https://t.co/heDZVmmw95">https://t.co/heDZVmmw95</a> <a href="https://t.co/rrrtZ3bQ74">pic.twitter.com/rrrtZ3bQ74</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/1205253314301984768?ref_src=twsrc%5Etfw">December 12, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">me trying to build anything using <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> <a href="https://twitter.com/hashtag/Memes?src=hash&amp;ref_src=twsrc%5Etfw">#Memes</a> <a href="https://t.co/TEyJnG3aua">pic.twitter.com/TEyJnG3aua</a></p>&mdash; roncho (@ronchoqa) <a href="https://twitter.com/ronchoqa/status/1206284740174794754?ref_src=twsrc%5Etfw">December 15, 2019</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For those who are using AR.js with <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a> in WebAR apps, please import latest <a href="https://twitter.com/hashtag/aframe?src=hash&amp;ref_src=twsrc%5Etfw">#aframe</a>, v1.0.0 has been shipped ð<br><br>This will avoid problems with new Chrome 79 that has WebXR Device API enabled by default.<br><br>Thanks to <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> team for the great work. It&#39;s outstanding.</p>&mdash; NicolÃ² Carpignoli (@nicolocarp) <a href="https://twitter.com/nicolocarp/status/1206268332883808256?ref_src=twsrc%5Etfw">December 15, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Just sent out the new A-Frame newsletter! Subscribe to get a copy of it, else we&#39;ll try to release it next week too. <a href="https://t.co/6SfIh0HYpY">https://t.co/6SfIh0HYpY</a> <a href="https://t.co/1z0zPJeedc">pic.twitter.com/1z0zPJeedc</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/1203092603194888192?ref_src=twsrc%5Etfw">December 6, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How&#39;s that for an early Christmas gift?<br><br>Congrats to all the <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> contributors, this is a major milestone. <a href="https://t.co/wj5WIzbq6f">https://t.co/wj5WIzbq6f</a></p>&mdash; Ruben van der Leun (@rvdleun) <a href="https://twitter.com/rvdleun/status/1206632782778294273?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">honestly huge <a href="https://t.co/SJlcLKdZ9C">https://t.co/SJlcLKdZ9C</a></p>&mdash; Joseph Schiarizzi (@CupOJoseph) <a href="https://twitter.com/CupOJoseph/status/1206709997142495239?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Subscribe to the A-Frame Newsletter for continuing updates on WebXR support, next version release, and community projects: <a href="https://t.co/0lwriQmXqv">https://t.co/0lwriQmXqv</a></p>&mdash; A-Frame (@aframevr) <a href="https://twitter.com/aframevr/status/1206626784382341128?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>


</div>



## In Other WebVR News

<div class="tweets">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The new WebXR Device API, explained <a href="https://t.co/eYpp3huHw1">https://t.co/eYpp3huHw1</a> Available as of today in vanilla Chrome, soon in Firefox and other browsers. Extended reality is coming to the web rather quickly. <a href="https://twitter.com/aframevr?ref_src=twsrc%5Etfw">@aframevr</a> to support it in its upcoming v1.0</p>&mdash; Jesus M Gonzalez-Barahona (@jgbarah) <a href="https://twitter.com/jgbarah/status/1204672745755303936?ref_src=twsrc%5Etfw">December 11, 2019</a></blockquote>


</div>

