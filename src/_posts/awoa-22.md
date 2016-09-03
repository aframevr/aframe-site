---
title: "A Week of A-Frame 22"
author: twitter|andgokevin|Kevin Ngo
date: 2016-07-22
layout: blog

awoa:
  projects:
    - title: "Stand at the Edge of Geologic Time"
      author: twitter|tylrfishr
      description: "A virtual reality tour from NPR of Rocky Mountain National Park. ([code](https://github.com/nprapps/rockymountain))"
      image: stand-at-the-edge-of-geologic-time.jpg
      url: https://apps.npr.org/rockymountain-vr/

    - title: "MagicaVoxel: A-Frame"
      author: twitter|andgokevin
      description: "A-Frame in MagicaVoxel in A-Frame."
      image: magicavoxel-aframe.jpg
      url: https://ngokevin.github.io/aframe-magicavoxel-projects/aframe/

    - title: "MagicaVoxel: Pokémon"
      author: twitter|andgokevin
      description: "Face off against Charizard on the Pokémon Stadium."
      image: magicavoxel-pokemon.gif
      url: https://ngokevin.github.io/aframe-magicavoxel-projects/pokemon/

    - title: Earth Rover
      author: twitter|rondagdag
      description: "Controlling a *physical* robot from outer space using Intel Edison and Leap Motion."
      image: earth-rover.gif
      url: https://www.hackster.io/RONDAGDAG/control-your-earth-rover-in-virtual-reality-15a9fe

    - title: Animation Component
      author: twitter|andgokevin
      description: "New-and-improved animation system using components."
      image: animation-component.gif
      url: https://github.com/ngokevin/aframe-animation-component

    - title: Imagined Reality
      author: twitter|bryik
      description: "Stereoscopic cubemaps, taken from winners of OTOY's *Render the Metaverse* context."
      image: imagined-reality.jpg
      url: https://bryik.github.io/aframe-metaverse-contest/examples/imagined-reality.html

    - title: Star Crossed
      author: twitter|VRWebIO
      description: "Piano and stars."
      image: star-crossed.jpg
      url: http://vrweb.io/p/starCrossed/

    - title: Vive Starter
      author: github|richardanaya
      description: "Simple boilerplate for a Vive project using the third-party `aframe-webvr-controller` component."
      url: https://github.com/richardanaya/aframe-vive-starter

  media:
    - author: twitter|ilikescience
      action: demonstrated
      title: "building a hamburger in A-Frame in front of a super-hyped crowd at [BrooklynJS](http://brooklynjs.com/)."
      url: https://www.periscope.tv/w/1BRJjkMLYvoxw

    - author: twitter|fabricus
      action: wrote about
      title: "*Building Social VR Apps in AltSpaceVR with A-Frame*."
      url: https://medium.com/immersion-for-the-win/building-social-vr-apps-in-altspacevr-with-a-frame-81cb1bbc3ec4

    - author: twitter|impronunciable
      action: wrote about his A-Frame tool for non-VR experts in
      title: "*GuriVR: Virtual Reality for the Rest of Us*."
      url: https://source.opennews.org/en-US/articles/virtual-reality-rest-us/

    - author: twitter|dmarcos
      action: tweeted
      title: "a demo of the new hand controls."
      url: https://twitter.com/dmarcos/status/755576398904000512

    - author: twitter|fernandojsg
      action: tweeted
      title: "a *Gone Fishin'* message painted using A-Frame's hand controls."
      url: https://twitter.com/fernandojsg/status/755929819838287872

    - author: twitter|andgokevin
      action: tweeted
      title: "a render of A-Frame in MagicaVoxel."
      url: https://twitter.com/andgokevin/status/755294995234422784

    - author: twitter|amadeuspzs
      action: tweeted
      title: "their VR prototyping setup with a nifty A-Frame scene in the background."
      url: https://twitter.com/amadeuspzs/status/756585905067028480

  contributions:
    - author: github|dmarcos
      action: implemented
      description: "`tracked-controls`, `vive-controls`, and `hand-controls` controller components."
      github: "#1584"

    - author: github|ngokevin
      action: added
      description: "an initial [Code of Conduct for A-Frame](https://github.com/aframevr/aframe/blob/master/CODE_OF_CONDUCT.md), adapted from the [Rust Code of Conduct](https://www.rust-lang.org/conduct.html)."
      github: "#954"

    - author: github|ngokevin
      action: deprecated
      description: "the undocumented Declarative Events (`<a-event>`) in favor of [Event Set Component](https://github.com/ngokevin/aframe-event-set-component)."
      github: "#1634"

    - author: github|dmarcos
      action: fixed
      description: "single-property components with a default truthy value being falsy if an attribute is attached without a value."
      github: "#1631"

    - author: github|cvan
      action: bumped
      description: "the WebVR polyfill."
      github: "#1618"

    - author: github|fernandojsg
      action: renamed
      description: "the A-Frame Editor to the A-Frame Inspector."
      github: "aframevr/aframe-inspector|#222"

    - author: twitter|davidwalshblog
      action: converted
      description: "`selectorAll` property type return value from `NodeList` to `Array`."
      github: "#1642"

    - author: github|ngokevin
      action: updated
      description: "all the documentation."
      github: "#1494"

    - author: github|ngokevin
      action: added
      description: "the name of the offended component to the warning when providing a property that is not part of the component's schema."
      github: "#1649"

    - author: github|ngokevin
      action: changed
      description: "the default stats' UI background color to gray."
      github: "#1644"

    - author: twitter|davidwalshblog
      action: added
      description: "a warning if `repeat='infinite'` is accidentally used instead of `repeat='indefinite'`."
      github: "#1640"

    - author: github|ngokevin
      action: exposed
      description: "the list of registered primitives in `AFRAME.primitives.primitives`."
      github: "#1643"

    - author: github|donmccurdy
      action: fixed
      description: "a code typo when exposing the list of registered primitives."
      github: "#1651"

    - author: github|bryik
      action: fixed
      description: "a code typo when detaching the `vive-controls` component."
      github: "#1648"

    - author: github|donmccurdy
      action: built
      description: "Stack Overflow Feed Bot to cross-post Stack Overflow questions to A-Frame Slack channels."
      github: "donmccurdy/stack-overflow-feed-bot"

  stars: 2530
---

Tracked controllers has landed! Use the HTC Vive controllers with A-Frame. NPR
has published a WebVR site, [@rondagdag](https://twitter.com/rondagdag) hooked
up A-Frame to control a robot with Leap Motion, and we now have an [initial
community code of conduct](https://github.com/aframevr/aframe/blob/master/CODE_OF_CONDUCT.md)!

0.3.0 is still in progress, and several members of the team will be out next
week. We need to land [improved embedded scene
support](https://github.com/aframevr/aframe/pull/1474), fix the [resolution
quality regression on VR
mobile](https://github.com/aframevr/aframe/issues/1541), implement built-in
link traversal support, and [refresh the
homepage](https://github.com/aframevr/aframe-site/tree/redesign). We may
publish an official beta build next week to hold folks over (depending on our
progress).
