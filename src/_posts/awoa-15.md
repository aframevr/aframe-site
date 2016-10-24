---
title: A Week of A-Frame 15
author: twitter|andgokevin|Kevin Ngo
date: 2016-05-27
layout: blog

awoa:
  contributions:
    - author: github|msimpson
      action: added
      description: "the `end` attribute to animations to stop animations on events."
      github: "#1491"

    - author: github|msimpson
      action: implemented
      description: "a separate `delay` attribute for animations."
      github: "#1508"

    - author: github|msimpson
      action: added
      description: dodecahedron, octahedron, and tetrahedron geometries.
      github: "#1493"

    - author: github|msimpson
      action: fixed
      description: "raycaster intersection with models by binding `el` to `object3D`s."
      github: "#1497"

    - author: github|ngokevin
      action: tweaked
      description: default lighting to make objects look less flat.
      github: "#1478"

    - author: github|fernandojsg
      action: added
      description: "the `material.flatShading` boolean property."
      github: "#1503"

    - author: github|fernandojsg
      action: updated
      description: the geometry schemas to be more accurate and complete.
      github: "#1506"

    - author: github|fernandojsg
      action: added
      description: "the `oneOf` attribute to the `geometry.primitive` property for the editor."
      github: "#1501"

    - author: github|fernandojsg
      action: fixed
      description: "`.play()` not being called when active camera changed."
      github: "#1502"

    - author: github|ngokevin
      action: worked around
      description: "a weird error where `parentNode` was becoming `null` on entity callbacks."
      github: "#1483"

  media:
    - author: https://mozvr.com|@andgokevin and @dmarcos
      action: presented
      title: "*A-Frame: VR for Web Developers* at SFHTML5 WebVR Meetup."
      url: https://www.youtube.com/watch?v=wRqoSdPZQBY

    - author: https://elliotplant.wordpress.com/|Elliot Plant
      action: wrote
      title: about creating an orbital mechanics simulation, using React and a custom physics engine.
      url: https://elliotplant.wordpress.com/2016/05/20/celestial-dancers/

    - author: twitter|rabimba
      action: held
      title: a workshop on A-Frame at Innovation High School in New York
      url: https://blog.mozvr.com/fun-webvr-times-at-innovation-high/

    - author: twitter|fernandojsg
      action: teased
      title: a Beta of the A-Frame Editor.
      url: https://twitter.com/aframevr/status/735973974027292673

    - author: twitter|arturitu
      action: prototyped
      title: link traversal in the Vive by grabbing globes and placing them on your head.
      url: https://twitter.com/aframevr/status/735706943751217154

    - author: twitter|dmarcos
      action: prototyped
      title: embedded room-scale scenes within Wikipedia articles (shown Burj Khalifa).
      url: https://twitter.com/dmarcos/status/735988662551252993

  projects:
    - title: Celestial Dancers
      author: https://elliotplant.wordpress.com/|Elliot Plant
      description: An orbital mechanics simulation of celestial bodies.
      image: celestial-dancers.gif
      url: http://www.elliotplant.com/

    - title: Dark Lotus
      author: twitter|EricaLayton
      description: Lotus flowers on churning water.
      image: darklotus.gif
      url: http://www.skyislandsvr.com/pages/darklotus.html

    - title: Aquila VR
      author: https://www.linkedin.com/in/inje-yeo-0933a436|Inje Yeo
      description: Mapping of the universe using actual collected star data (may take time to load).
      image: aquilavr.jpg
      url: http://www.aquilavr.com

    - title: Audio Analyser Node Components
      author: twitter|andgokevin
      description: Refactoring of the audio visualizer components to use Web Audio `AnalyserNode`s coming soon.
      image: audio-analyser.gif
      url: https://github.com/ngokevin/aframe-audio-visualizer-components/tree/nodancer

    - title: Cubemap Component
      author: http://www.wsundine.com/|Ben Pyrik
      description: A component for creating cubemap textures.
      image: cubemap.jpg
      url: https://github.com/bryik/aframe-cubemap-component

    - title: Plinko
      author: twitter|drawvr
      description: Can you make it into the middle slot?
      image: plinko.jpg
      url: http://drawvr.com/plinko/

    - title: Foosball
      author: twitter|drawvr
      description: Everyone's second favorite table-top game, with physics.
      image: foosball.jpg
      url: http://drawvr.com/foosball/

    - title: Firebase Presentation
      author: twitter|andgokevin
      description: A multi-user demo scene for the SFHTML5 presentation.
      image: firebase-presentation.gif
      url: https://ngokevin.github.io/aframe-firebase-component/presentation/

    - title: Poop VR
      author: https://elliotplant.wordpress.com/|@elliotaplant + @iandeboisblanc + @shane
      description: Life-altering possibilities of VR at the San Francisco Stupid Hackathon.
      image: poop-vr.jpg
      url: http://www.poopvr.biz/

  stars: 2010
---

*A-Frame intensifies* as we pass 2000 GitHub stars and 800 Slack members! Sneak peeks of multi-user, embedded scenes, room-scale, asymmetric gaming, the A-Frame Editor, and link traversal at SFHTML5 WebVR meetup.

Thanks to Matt Simpson for the many contributions this week!
