---
title: "A Week of A-Frame 25"
author: twitter|andgokevin|Kevin Ngo
date: 2016-08-12
layout: blog

awoa:
  projects:
    - title: Dominoes
      author: twitter|bryik_ws
      description: "Demonstration of HTC Vive with physics using dominoes. ([code](https://github.com/bryik/aframe-dominoes/blob/master/index.html), [video](https://www.youtube.com/watch?v=gU-P-56kAnI))"
      image: dominoes.gif
      url: https://github.com/bryik/aframe-dominoes

    - title: Ball Throw
      author: twitter|bryik_ws
      description: "Previously featured, but now open source. Throw balls at blocks using Vive controllers and [Don McCurdy's](https://twitter.com/donrmccurdy) physics."
      image: ball-throw.gif
      url: https://github.com/bryik/aframe-ball-throw

    - title: Terrain Model Component
      author: twitter|bryik_ws
      description: "Generating terrains using `TerrainLoader` used in *LA Times*' *Discovering Gale Crater*."
      image: terrain-model.jpg
      url: https://github.com/bryik/aframe-terrain-model-component

    - title: Lyrics VR
      author: twitter|ram_gurumukhi
      description: "Watch lyrics fly past you in time with the music. ([code](https://github.com/gurumukhi/vr-ram/tree/gh-pages/demos/lyricsVR))"
      image: lyrics-vr.gif
      url: https://gurumukhi.github.io/vr-ram/demos/lyricsVR/

    - title: Rubik's Cube
      author: twitter|tusharaoljgd
      description: "Spinning Rubik's Cube featuring a `multicolored-cube` component."
      image: rubiks-cube.gif
      url: http://tushararora.github.io/rubiks-cube/

  media:
    - author: twitter|armthethinker
      action: "wrote a case study using A-Frame: "
      title: "*Product Presentation in Virtual Reality* - learning how to prototype efficiently in VR and create a robust user-testing setup."
      url: https://www.youtube.com/watch?v=vGjIWwozOU4

  contributions:
    - author: twitter|andgokevin
      action: implemented
      description: "automatic setting of `crossorigin` attribute on media elements."
      github: "#1789"

    - author: github|mkungla
      action: added
      description: "code coverage continuous integration using Codecov."
      github: "#1783"

    - author: twitter|andgokevin
      action: fixed
      description: "mobile resolution in stereo mode by bumping webvr-polyfill `BUFFER_SCALE`."
      github: "#1747"

    - author: twitter|dmarcos
      action: fixed
      description: "fixed iOS Safari canvas resizing issues."
      github: "#1725"

    - author: twitter|dmarcos
      action: worked around
      description: "XHR bug with nested asset loading bug in Chrome."
      github: "#1766"

    - author: twitter|andgokevin
      action: fixed
      description: "blurry resolution by scene wait for camera before rendering."
      github: "#1756"

    - author: twitter|fdesimpel
      action: fixed
      description: "spot lights and added support for light targets."
      github: "#1728"

    - author: twitter|dmarcos
      action: reduced
      description: "default `camera.near` plane so controllers don't clip in front of the camera."
      github: "#1749"

    - author: twitter|andgokevin
      action: generated
      description: "source maps for the minified bundle."
      github: "#1746"

    - author: twitter|andgokevin
      action: added
      description: "guide for unit testing."
      github: "#1750"

    - author: twitter|andgokevin
      action: bumped
      description: "the CHANGELOG."
      github: "#1774"

    - author: twitter|dmarcos
      action: lowered
      description: "default `segmentsRadial` for torus-knot geometry."
      github: "#1784"

    - author: twitter|andgokevin
      action: reverted
      description: "torus knot `p` and `q` property types to be floats again."
      github: "#1779"

    - author: twitter|dmarcos
      action: fixed
      description: "`Entity.addToParent` being invoked twice causing `null` parents."
      github: "#1726"

    - author: github|mkungla
      action: fixed
      description: "`camera.userHeight` updates."
      github: "#1736"

    - author: twitter|davidwalshblog
      action: made
      description: "`componentchanged` events not bubble."
      github: "#1734"

    - author: twitter|davidwalshblog
      action: added
      description: "data attribute to elements injected by A-Frame."
      github: "#1736"

  stars: 2764
---

The [milestone for 0.3.0](https://github.com/aframevr/aframe/milestone/2) is
just about clear. Any time now!
