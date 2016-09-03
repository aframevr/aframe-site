---
title: "A Week of A-Frame 20"
author: twitter|andgokevin|Kevin Ngo
date: 2016-07-08
layout: blog

awoa:
  contributions:
    - author: github|ngokevin
      action: reverted
      description: "cursor component event names (e.g., `cursor-click` to `click`)."
      github: "#1605"

    - author: github|ngokevin
      action: implemented
      description: "system schemas."
      github: "#1589"

    - author: github|mkungla
      action: fixed
      description: "various cursor component properties."
      github: "#1616"

    - author: github|donmccurdy
      action: fixed
      description: "an error when pressing `<ESC>` when not in VR mode."
      github: "#1601"

    - author: github|donmccurdy
      action: fixed
      description: "`vec4` property type stringification."
      github: "#1617"

    - author: github|ngokevin
      action: fixed
      description: "spot lights."
      github: "#1621"

    - author: github|ngokevin
      action: fixed
      description: "`<a-cursor>` not being registered."
      github: "#1605"

    - author: github|mkungla
      action: fixed
      description: 'not being able to set `stats="false"`.'
      github: "#1620"

  media:
    - author: twitter|auxdesigner
      action: wrote about exporting Sketch to A-Frame in
      title: "*Sketch Plugin: Sketch to VR*."
      url: https://blog.prototypr.io/sketch-plugin-sketch-to-vr-4e23ced47e6

    - author: twitter|andgokevin
      action: drew
      title: "A-Frame in [Tilt Brush](https://www.tiltbrush.com/)."
      url: https://twitter.com/andgokevin/status/751312216968744960

  projects:
    - title: "Aeon"
      author: github|h0r0man
      description: "Stroll through an ever-changing forest."
      image: aeon.gif
      url: http://aeon.horoman.com/

    - title: "iStaging LiveTour"
      author: github|alexcheninfo
      description: "360&deg; and virtual tours with a neat mini-map."
      image: istaging-livetour.jpg
      url: http://vrviewer.istaging.co/#!/684173

    - title: "Sketch to VR"
      author: github|auxdesigner
      description: "Turn your Sketch mocks into VR."
      image: sketch-to-vr.gif
      url: https://github.com/auxdesigner/Sketch-to-VR

    - title: "WebVR API Emulation Extension"
      author: github|thespite
      description: "Run WebVR 1.0 content without a supported headset or even a compatible browser/platform. Great for development."
      image: webvr-api-emulation-extension.jpg
      url: https://chrome.google.com/webstore/detail/webvr-api-emulation/gbdnpaebafagioggnhkacnaaahpiefil

    - title: "Mixin Style Sheets (MSS)"
      author: twitter|andgokevin
      description: "CSS-like stylesheets for A-Frame for declaring mixins."
      image: mss.jpg
      url: https://github.com/ngokevin/aframe-mss

    - title: "Tanks"
      author: github|ourvrisrealerthanyours
      description: "A multi-player tank game. ([code](https://github.com/ourvrisrealerthanyours/tanks))"
      image: tanks.jpg
      url: http://www.bubbletanks.biz/

    - title: "Stereo Cube Component"
      author: twitter|mkeblx
      description: "A component for stereo cubemap textures (i.e., left and right eye textures)."
      image: stereo-cube-component.gif
      url: https://github.com/wallabyway/aframe-stereocube

    - title: "Choose Your Own VR"
      author: twitter|dirosaur
      description: "Which cup will you choose? ([code](https://github.com/dannielle/tinier-house))"
      image: choose-your-own-vr.jpg
      url: https://github.com/dannielle/tinier-house

    - title: "Trigger Box Component"
      author: twitter|utopiah
      description: "A component that emits an event when it enters or leaves a predefined area."
      image: trigger-box-component.jpg
      url: https://github.com/Utopiah/aframe-triggerbox-component

    - title: "Cat Garden"
      author: twitter|dirosaur
      description: "Float through a space of cats and balloons."
      image: cat-garden.jpg
      url: http://dirosa.me/cat-garden/

  stars: 2342
---

The [A-Frame Editor](https://github.com/aframevr/aframe-editor) is publicly
underway, and the slated release target for 0.3.0 is the end of next week!

![Editor Teaser](/images/awoa/editor-teaser.jpg)
