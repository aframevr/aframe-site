---
title: "A Week of A-Frame 29"
author: twitter|andgokevin|Kevin Ngo
date: 2016-09-30
layout: blog

awoa:
  projects:
    - title: Spotify Audio Visualization + Speech Recognition
      author: twitter|andgokevin
      description: "Just say *play <artist or song name>* and watch the audio visualization. Speech recognition right in the browser may play a large role in WebVR."
      image: spotify-audio-visualization.gif
      url: https://ngokevin.github.io/kframe/components/audioanalyser/examples/spotify/

    - title: PEGylated Antibody Journey
      author: twitter|utopiah
      description: "Join the antibodies in this medically educated journey from the syringe, through the body, up to the resistance against harmful cells. Brought to you by UCB biopharmaceutical. These demos were run."
      image: antibody-journey.gif
      url: http://vatelier.net/MyDemo/UCBProject/UCB/Final/

    - title: Post-Processed Audio Visualization with Clubber
      author: twitter|wizgrav
      description: "Showing off future A-Frame post-processing effects on an audio visualization using [Clubber](https://github.com/wizgrav/clubber)."
      image: post-processing-clubber.gif
      url: http://wizgrav.github.io/aframe/examples/test/post-processing-clubber/

    - title: Dancing to a Waveform
      author: twitter|andgokevin
      description: "Dancing in VR to a waveform audio visualization."
      image: dancing-waveform.gif
      url: https://ngokevin.github.io/kframe/components/audioanalyser/examples/waveform/

    - title: Click-Drag Component with Physics
      author: twitter|jesstelford
      description: "Click and drag to throw a sphere into a pyramid of boxes. Knock 'em down."
      image: click-drag-physics.gif
      url: https://jesstelford.github.io/aframe-click-drag-component/physics-2/

    - title: Equirectangular Screenshot Bookmarklet
      author: twitter|lady_ada_king
      description: "Take 360&deg; screenshots from within a scene. Use as a [bookmarklet](https://gist.github.com/ngokevin/60969daa44803618bb858f0746d63a6e)"
      image: equirectangular-screenshots.jpg
      url: https://gist.github.com/ngokevin/60969daa44803618bb858f0746d63a6e

    - title: UI Components
      author: twitter|g_marty
      description: "A start of UI components including cursor feedback, target indicator, and volumetric light."
      image: ui-components.gif
      url: https://gmarty.github.io/aframe-ui-components/

    - title: Redux Component
      author: twitter|andgokevin
      description: "Component for managing game state with single store, action dispatches, and reducers."
      image: redux-component.jpg
      url: https://github.com/ngokevin/kframe/tree/master/components/redux

    - title: Cardboard Maze
      author: twitter|rvdleun
      description: "A two-player maze game. One person travels in VR and another guides through the maze."
      image: cardboard-maze.jpg
      url: http://sandbox.leunix.nl/cardboard-maze/

    - title: Travel Component
      author: twitter|rvdleun
      description: "Gaze-based teleportation navigation component for Cardboard."
      image: aframe-travel-component.gif
      url: https://bitbucket.org/realitylab_ruben/aframe-travel-node

  media:
    - author: twitter|WIRED
      action: featured A-Frame in an article about
      title: "*Releasing the Infinite Monkeys to Make VR Great*."
      url: https://www.wired.com/2016/09/time-release-infinite-monkeys-vr/

    - author: twitter|taigagaita1
      action: started
      title: "*A-Framer.com*, a Japanese A-Frame blog."
      url: http://www.a-framer.com/

    - author: twitter|utopiah
      action: is holding
      title: "a WebVR workshop in Brussels during October 8-9."
      url: http://www.meetup.com/VR-LAB-Brussels/events/234462307/

  contributions:
    - author: twitter|andgokevin
      action: renamed
      description: "`getAttribute` to `getDOMAttribute` and `getComputedAttribute` to `getAttribute`."
      github: "#1925"

    - author: twitter|fernandojsg
      action: implemented
      description: "sound pooling."
      github: "#1934"

    - author: twitter|dmarcos
      action: made
      description: "raycaster component automatically refresh when entities are added/removed from the scene."
      github: "#1887"

    - author: twitter|hitsmachines
      action: improved
      description: "cursor component `mouseleave` reliability with multiple entities."
      github: "#1936"

    - author: twitter|donrmccurdy
      action: fixed
      description: "cursor component intersecting itself."
      github: "#1936"

    - author: github|donrmccurdy
      action: fixed
      description: "entity reattachments."
      github: "#1928"

    - author: github|dmarcos
      action: fixed
      description: "tracked controller previous state."
      github: "#1948"

    - author: github|mkungla
      action: bumped
      description: "`devDependencies`."
      github: "#1855"

    - author: twitter|andgokevin
      action: added documentation
      description: "for Mongoose local server in Getting Started."
      github: "2f254c4"

    - author: github|shaabhishek
      action: fixed in documentation
      description: "a template component example."
      github: "#1938"

    - author: github|shaabhishek
      action: fixed in documentation
      description: "example of animating on `cursor-fusing` event."
      github: "#1939"

    - author: twitter|andgokevin
      action: added documentation
      description: "for `extendSchema` and `updateSchema`."
      github: "32ed930"

    - author: twitter|cvanw
      action: fixed in documentation
      description: "FAQ links."
      github: "#1943"

  stars: 3539
---

The A-Frame team has started working on **A-Shooter**, a room-scale VR arcade
first-person shooting demo! It is still in its very early stages in concept and
gameplay, but we currently have guns, enemies, points, health, waves, and game
state.  These demos have brought back necessary improvements and fixes to
A-Frame such as [object pooling
support](https://github.com/aframevr/aframe/pull/1954), which are needed for
performant bullets and enemies.

![A-Shooter 1](/images/awoa/a-shooter-1.gif)

Also featuring initial spline-based enemy movement:

![A-Shooter Enemy Movement](/images/awoa/a-shooter-enemy-movement.jpg)

Other work includes **hooking up the A-Frame Inspector with the A-Frame
Registry**, which includes community components and perhaps assets. Below we
can see including mountains and text components from the registry from right
from the Inspector.

![Inspector Registry](/images/awoa/inspector-registry.gif)

And also with assets:

![Inspector Textures](/images/awoa/inspector-textures.gif)
