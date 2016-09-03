---
title: "A Week of A-Frame 23"
author: twitter|andgokevin|Kevin Ngo
date: 2016-07-29
layout: blog

awoa:
  projects:
    - title: "Shopify &mdash; City Shoes"
      author: twitter|shopify
      description: "Shop in VR! Pick up some trainers and see if they match your swagga."
      image: shopify.jpg
      url: https://shopifyvr.myshopify.com/

    - title: "Physics & Controllers Demo"
      author: twitter|bryik_ws
      description: "Throw balls at blocks using Vive controllers and [Don McCurdy's](https://twitter.com/donrmccurdy) physics."
      image: physics-controllers-demo.gif
      url: https://twitter.com/andgokevin/status/759183942612160512

    - title: Vive Cursor Component
      author: twitter|bryik_ws
      description: "Laser Vive controller cursor to point at objects with your hands."
      image: vive-cursor-component.gif
      url: https://github.com/bryik/aframe-vive-cursor-component

    - title: Vrogger
      author: twitter|carbonfive
      description: "Frogger in VR. Hop and get across the road."
      image: vrogger.gif
      url: https://carbonfive.github.io/vrogger/

    - title: "A-Frame Statistics Dashboard"
      author: twitter|andgokevin
      description: "d3.js calendar heatmap of A-Frame GitHub Stargazers per day."
      image: aframe-statistics-dashboard.jpg
      url: https://ngokevin.github.io/aframe-statistics-dashboard/

    - title: Pokémon Stadium (Update)
      author: twitter|andgokevin
      description: "Pokémon stadium updated with arena seating and Pikachu!"
      image: pokemon-stadium-update.jpg
      url: https://ngokevin.github.io/aframe-magicavoxel-projects/pokemon/

    - title: Design Portfolio
      author: twitter|VRWebIO
      description: "\"About\" pages in 3D space with neat transitions."
      image: design-portfolio.jpg
      url: https://eddiebarkman.github.io/VR-Design-Portfolio/

  media:
    - author: twitter|davidwalshblog
      action: wrote about how to
      title: "*Create a 3D Panorama Image with A-Frame*."
      url: https://davidwalsh.name/3d-panorama-image

    - author: twitter|rvdleun
      action: talked at The Reality Lab in the Netherlands about
      title: "*VR Development* (slides)."
      url: https://docs.google.com/presentation/d/1HNLtVabsUGVrrlBqX6BZ7fVvmHz3Zd6mGPblunYPy6U/edit#slide=id.g1496fca36c_0_0

    - author: twitter|utopiah
      action: screencasted his
      title: "A-Frame bowling demo with Don McCurdy's physics component."
      url: https://twitter.com/utopiah/status/758190928435773440

  contributions:
    - author: github|dmarcos
      action: implemented
      description: "better support for embedded scenes by removing toggling styles when doing `<a-scene embedded>`."
      github: "#1474"

    - author: github|dmarcos
      action: implemented
      description: "support for fullscreen, flat experiences."
      github: "#1474"

    - author: github|dmarcos
      action: implemented
      description: "`camera.userHeight` property which defines a height offset that is removed when entering VR to resolve flat vs. VR camera height."
      github: "#1474"

    - author: github|ngokevin
      action: fixed
      description: "element prototype callback ordering issues."
      github: "#1689"

    - author: github|dmarcos
      action: fixed
      description: "`look-controls` with mouse when dragging off the canvas."
      github: "#1474"

    - author: github|blairmacintyre
      action: replaced
      description: "instances of hardcoded `<a-scene>` to support AR scenes."
      github: "#1665"

    - author: github|dmarcos
      action: added
      description: "fullscreen icon when headset not connected."
      github: "#1669"

    - author: github|blairmacintyre
      action: fixed
      description: "an error if browser does not support Gamepad API."
      github: "#1664"

    - author: github|ngokevin
      action: added
      description: "`material.visible` property."
      github: "#1690"

    - author: github|ngokevin
      action: worked around
      description: "Vive issues on Chromium when requesting fullscreen on canvas that is being presented to headset."
      github: "#1683"

    - author: github|ngokevin
      action: fixed
      description: "systems initializing on `createdCallback` rather than `attachedCallback`."
      github: "#1670"

    - author: github|ngokevin
      action: updated
      description: "default button colors for Vive controllers."
      github: "#1677"

    - author: github|ngokevin
      action: added
      description: "`camera.userHeight` mapping to `<a-camera>`."
      github: "#1672"

    - author: github|ngokevin
      action: preserved
      description: "`document.registerElement` polyfill."
      github: "#1654"

    - author: github|donmccurdy
      action: implemented
      description: "physics support with Vive controllers."
      github: "donmccurdy/aframe-extras|99f9f5"

    - author: github|ngokevin
      action: added
      description: "caching for `.ply` models."
      github: "donmccurdy/aframe-extras|#68"

  stars: 2609
---

It now looks finally realistic for an 0.3.0 release next week! The [GitHub
milestone](https://github.com/aframevr/aframe/milestone/2) has been updated.

[Blair MacIntyre](http://blairmacintyre.me/), a Georgia Tech professor researching
augmented reality got A-Frame working in the Argon AR Browser:

<video autoplay loop src="/images/awoa/argon.mp4" width="240"></video>
