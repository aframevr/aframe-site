---
title: "A Week of A-Frame 24"
author: twitter|andgokevin|Kevin Ngo
date: 2016-08-05
layout: blog

awoa:
  projects:
    - title: A-Frame AR
      author: twitter|dietrich
      description: "Experimenting with AR using A-Frame and `getUserMedia`."
      image: aframe-ar.gif
      url: https://github.com/autonome/aframe-ar

    - title: Outside Lands VR
      author: twitter|andgokevin
      description: "VR preview of the San Francisco Outside Lands music festival (best viewed on desktop)."
      image: outsidelands.jpg
      url: https://ngokevin.github.io/aframe-magicavoxel-projects/outsidelands/

    - title: Home / Hope
      author: twitter|FulvioRomanin
      description: "Narrated journalism piece about humanitarian work in South Sudan. Featured on Italy's top news site."
      image: home-hope.jpg
      url: https://homehope.corriere.it

    - title: RunJumpDev Slides
      author: twitter|nickwarner
      description: "Virtual slide deck for an A-Frame talk at [RunJumpDev](http://runjumpdev.org/)."
      image: runjumpdev-slides.jpg
      url: http://webvr-demos-nikolaiwarner.c9users.io:8081/

    - title: Multi-player Tic Tac Toe
      author: twitter|utopiah
      description: "Prototype of networked Vives playing Tic-Tac-Toe. ([video](https://www.youtube.com/watch?v=vGjIWwozOU4))"
      image: multiplayer-tic-tac-toe.jpg
      url: http://jsbin.com/janevom/edit?html,output

    - title: 30 Days of WebVR
      author: twitter|davatron5000
      description: "One order of A-Frame and WebVR per day, all on CodePen."
      image: thirty-days-of-webvr.jpg
      url: https://codepen.io/collection/AKkywv/

    - title: Look At and Billboard Component
      author: github|blairmacintyre
      description: "Component to tell an entity to face another entity, or to face the camera. Improved version with bug fixes over previous `look-at` components."
      image: billboard-component.jpg
      url: https://github.com/blairmacintyre/aframe-look-at-component/


  media:
    - author: twitter|dietrich
      action: tweeted
      title: "an **augmented reality** prototype with A-Frame using `getUserMedia`."
      url: https://twitter.com/dietrich/status/760965267547578369

    - author: twitter|scenevr
      action: tweeted
      title: "an A-Frame scene with interpolated network updates from a persistent server."
      url: https://twitter.com/scenevr/status/760632406395060225

    - author: twitter|donrmccurdy
      action: presented
      title: "a lightning talk of A-Frame at BostonJS."
      url: https://docs.google.com/presentation/d/1lhCphoT37g6C_SPKZuHeAzvhH3gI8NHDSPsMM6B0SBA/edit#slide=id.g11698bfcf8_0_2

    - author: twitter|nickwarner
      action: presented
      title: "WebVR and A-Frame for RunJumpDev in Kentucky."
      url: https://www.youtube.com/watch?v=hHzUobbVAxQ

    - author: twitter|ram_gurumukhi
      action: will be holding
      title: "a Mozilla Reps WebVR workshop in Hyderabad, India on September 17."
      url: https://reps.mozilla.org/e/road-to-vr/

    - author: twitter|crcdng
      action: will be holding
      title: "*Imperfect VR Workshop* about A-Frame in Guilford, UK on August 7."
      url: https://www.emfcamp.org/line-up/2016/54-imperfect-vr-workshop

    - author: twitter|SonarSystems
      action: recorded
      title: "*A-Frame WebVR Tutorial 1 - Setting Up*."
      url: https://www.youtube.com/watch?v=dv6_C4UqTfs

    - author: twitter|SonarSystems
      action: recorded
      title: "*A-Frame WebVR Tutorial 2 - Drawing a Box*."
      url: https://www.youtube.com/watch?v=wXQQVMQO8y4

    - author: twitter|SonarSystems
      action: recorded
      title: "*A-Frame WebVR Tutorial 3 - Transformations*."
      url: https://www.youtube.com/watch?v=AjSaTiGs0Js

    - author: twitter|SonarSystems
      action: open-sourced
      title: "A-Frame WebVR Tutorial source code on GitHub."
      url: https://github.com/SonarSystems/A-Frame-WebVR-Tutorials

    - author: twitter|utopiah
      action: screencasted
      title: "networked multiplayer Vives playing Tic-Tac-Toe."
      url: https://www.youtube.com/watch?v=vGjIWwozOU4

  contributions:
    - author: github|dmarcos
      action: fixed
      description: "resolution issues on VR-mode mobile."
      github: "#1701"

    - author: github|ngokevin
      action: updated
      description: "the roadmap."
      github: "#1668"

    - author: github|ngokevin
      action: fixed
      description: "deep-seated bugs in our wrapping of `document.registerElement`."
      github: "#1689"

    - author: github|ngokevin
      action: fixed
      description: "defined cameras by waiting for scene load before injecting default camera."
      github: "#1724"

    - author: github|ngokevin
      action: fixed
      description: "camera `userHeight` offset being applied on mobile."
      github: "#1715"

    - author: github|ngokevin
      action: fixed
      description: "proper caching and load order of `<a-asset-item>` such that assets are fetched only once."
      github: "#1700"

    - author: github|dmarcos
      action: reverted
      description: "the fullscreen icon."
      github: "#1701"

    - author: github|ngokevin
      action: renamed
      description: "the `aframevr/media` repository to `aframevr/assets` which is served on `cdn.aframe.io`."
      github: "b68abfc"

    - author: github|mayognaise
      action: added
      description: "stereo support and custom meshes for the mouse cursor component."
      github: "mayognaise/aframe-mouse-cursor-component|9ded79"

    - author: github|ngokevin
      action: implemented
      description: "`cursor: grab` and `cursor: grabbing` for the look-controls component."
      github: "#1680"

    - author: github|ngokevin
      action: added
      description: "support for mixins being attached at runtime."
      github: "#1610"

    - author: github|ngokevin
      action: fixed
      description: "raycaster bugs if intersected objects don't have associated entity."
      github: "#1698"

    - author: github|mkungla
      action: updated
      description: "default eye level to 1.6m for camera and `<a-camera>`."
      github: "#1718"

    - author: github|bryik
      action: fixed
      description: "duplicate event listeners in the hand-controls component."
      github: "#1705"

    - author: github|frederickdesimpel
      action: fixed
      description: "entity `child-attached` event being emitted before `object3D` attach."
      github: "#1720"

    - author: github|mkungla
      action: readjusted
      description: "cameras in all the examples."
      github: "#1660"

    - author: github|halfzebra
      action: fixed
      description: "documentation about positioning."
      github: "#1710"

    - author: github|frederickdesimpel
      action: added
      description: "documentation about entity event details."
      github: "#1711"

    - author: github|darkwing
      action: replaced
      description: "a `for` loop with `Array.slice`."
      github: "#1706"

    - author: github|darkwing
      action: replaced
      description: "`Array.from` calls with `Array.slice`."
      github: "#1703"

  stars: 2700
---

0.3.0 [milestone burn-down list](https://github.com/aframevr/aframe/milestone/2)!
While we still try to get the release out, augmented reality continues to creep
in...
