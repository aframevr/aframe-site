---
title: A Week of A-Frame 9
author: twitter|andgokevin|Kevin Ngo
date: 2016-04-15
layout: blog

awoa:
  contributions:
    - author: github|dmarcos
      action: heavily optimized
      description: "performance by making less trips to the DOM, caching parsed component data, and only flushing stringified component data to DOM on developer demand."
      github: "#1323"

    - author: github|ngokevin
      action: reduced
      description: "memory usage with a geometry caching system."
      github: "#1347"

    - author: github|ngokevin
      action: heavily reduced
      description: "memory usage by defaulting to BufferGeometries for the geometry component."
      github: "#1338"

    - author: github|ngokevin
      action: reduced
      description: "memory usage by disposing of geometries and materials when no longer in use."
      github: "#1287"

    - author: github|johnrodney
      action: improved
      description: "performance by reducing the sky primitive's default radius and segments."
      github: "#1319"

    - author: github|ngokevin
      action: implemented
      description: "a registerGeometry API such that each primitive has its own schema."
      github: "#1317"

    - author: github|ngokevin
      action: refactored and improved
      description: "the raycaster and cursor components."
      github: "#1196"

    - author: github|donmccurdy
      action: enabled
      description: "unit testing with Chrome."
      github: "#1365"

    - author: github|dbradleyfl
      action: improved
      description: "GearVR support."
      github: "#1366"

    - author: github|cvan
      action: tweaked
      description: "the Enter VR modal's appearance."
      github: "#1368"

  projects:
    - title: Escape Game
      author: github|dkraeker
      description: Can you escape?
      image: escape.jpg
      url: http://drawvr.com/escape/

    - title: "Escape 2: The Game"
      author: github|dkraeker
      description: Can you escape? Electric boogaloo.
      image: escape2.jpg
      url: http://drawvr.com/escape2/

    - title: GIF Component
      author: github|mayognaise
      description: A GIF component to display GIF animations as a material. If only there were a component to resolve whether GIF is pronounced with a hard-G or a soft-G.
      image: gif-component.gif
      url: https://mayognaise.github.io/aframe-gif-component/basic/

    - title: Mouse Cursor Component
      author: github|mayognaise
      description: A cursor component that uses the mouse rather than the Cardboard-style cursor that ships with A-Frame.
      image: mouse-cursor-component.gif
      url: https://mayognaise.github.io/aframe-mouse-cursor-component/basic/

    - title: Drag Look Controls Component
      author: github|mayognaise
      description: A controls component where the canvas moves the way you drag, and the cursor changes to grab-style.
      image: drag-look-controls-component.gif
      url: https://mayognaise.github.io/aframe-drag-look-controls-component/basic/
---

Inspired by [This Week in Servo](https://blog.servo.org/), welcome to A Week of A-Frame! After a hiatus in [A-Frame Feature Friday](https://aframevr.tumblr.com/), we return to our regularly scheduled programming of A-Frame awesomeness here on the A-Frame blog.
