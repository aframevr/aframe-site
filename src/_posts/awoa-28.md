---
title: "A Week of A-Frame 28"
author: twitter|andgokevin|Kevin Ngo
date: 2016-09-23
layout: blog

awoa:
  projects:
    - title: A-Painter
      author: twitter|mozillavr
      description: "Paint in VR with your hands, create your own brushes, and share your paintings over the Web! ([code](https://github.com/aframevr/a-painter))"
      image: a-painter.jpg
      url: https://aframe.io/a-painter/

    - title: Foot-tracked Football
      author: twitter|utopiah
      description: "Playing football in VR using both your hands and feet, full-body tracking."
      image: football-vr.gif
      url: https://www.youtube.com/watch?v=jUPIQecyhOo

    - title: Click-Drag Component
      author: twitter|jesstelford
      description: "A component that makes objects draggable with the mouse cursor."
      image: click-drag-component.gif
      url: "https://jesstelford.github.io/aframe-click-drag-component/"

    - title: Mountain Component
      author: twitter|andgokevin
      description: "Generate terrains with `<a-mountain>`."
      image: mountain-component.jpg
      url: https://ngokevin.github.io/kframe/components/mountain/

    - title: Sun Sky
      author: twitter|andgokevin
      description: "Sky with adjustable sun with `<a-sun-sky>`, taken from the A-Frame shader example. ([code](https://github.com/ngokevin/kframe/tree/master/components/sun-sky/))"
      image: sun-sky.gif
      url: https://ngokevin.github.io/kframe/components/sun-sky/examples/sun-position/

    - title: Punch Prototype
      author: twitter|andgokevin
      description: "Getting started with punching in VR."
      image: punch.gif
      url: https://github.com/ngokevin/kframe/tree/master/scenes/punch

  media:
    - author: twitter|fernandojsg
      action: wrote about
      title: "*A-Painter: Paint in VR in Your Browser*"
      url: https://blog.mozvr.com/a-painter/

    - author: twitter|feiss
      action: ""
      title: "recorded himself painting a fox in A-Painter"
      url: https://www.youtube.com/watch?v=DpWOKikos7Q

    - author: twitter|whiteboxamir
      action: wrote in Venture Beat about
      title: "*how WebVR will make virtual reality massively available*"
      url: http://venturebeat.com/2016/09/17/how-webvr-will-make-virtual-reality-massively-available/

    - author: twitter|diekus
      action: "wrote an article about"
      title: "*WebVR, feasting in the round table*"
      url: https://medium.com/samsung-internet-dev/webvr-feasting-in-the-round-table-f51a16bf5f40

    - author: twitter|utopiah
      action: recorded
      title: "himself using A-Painter"
      url: https://www.youtube.com/watch?v=5q-iMS2ILks

    - author: twitter|lady_ada_king
      action: wrote an article about
      title: "*Optimising A-Frame Assets for Faster Starts*"
      url: https://medium.com/samsung-internet-dev/optimising-a-frame-assets-for-faster-starts-4ec3bd35c6fc

    - author: twitter|misslivirose
      action: "gave a talk at Coldfront16:"
      title: "*Immersion in the Browser - Building the VR Web*"
      url: https://www.youtube.com/watch?v=SV3UO_2Pftw

    - author: twitter|misslivirose
      action: "gave a talk at Full Stack Fest:"
      title: "*Virtual Reality is Here, in your Browser*"
      url: https://www.youtube.com/watch?v=Ciqucr_Ww9s

    - author: twitter|ram_gurumukhi
      action: "wrote about his"
      title: "*A-Frame experience in a nutshell*"
      url: https://gurumukhi.wordpress.com/2016/09/21/a-frame-experience/

    - author: twitter|michaltakac
      action: wrote about an article about creating a
      title: "*loading cursor effect in A-Frame*"
      url: https://medium.com/dimensionlab/loading-cursor-effect-in-a-frame-909be259800e


  contributions:
    - author: twitter|dmarcos
      action: bumped
      description: "three.js `VREffect` to work with Firefox Nightly."
      github: "#1913"

    - author: twitter|msfeldstein
      action: added
      description: "a rainbow brush."
      github: "aframevr/a-painter|#1913"

    - author: twitter|donrmccurdy
      action: added
      description: "intersection data to `cursor` component events."
      github: "#1920"

    - author: twitter|andgokevin
      action: removed
      description: "deprecated Declarative Events."
      github: "#1914"

    - author: twitter|andgokevin
      action: removed
      description: "deprecated `look-at` component."
      github: "#1913"

  stars: 3467
---

[**A-Painter**](https://blog.mozvr.com/a-painter/) has been released! It's like
Tilt Brush, but open source so you can help us create more brushes. You can
share your paintings online for anyone to view in 3D. Or you can take other
people's paintings and make them your own! Want to share a painting?  Post it
to this makeshift [A-Painter gallery](https://github.com/aframevr/a-painter/issues/99)! Check
out some paintings so far:

- [The World's First VR Guestbook](https://aframe.io/a-painter/?url=https://ucarecdn.com/69c16e90-ee65-410c-82f6-23bf1ecc6d2f/), created in collaboration from multiple people.
- [*The Gentle Robot*](https://aframe.io/a-painter/?url=https://ucarecdn.com/69c16e90-ee65-410c-82f6-23bf1ecc6d2f/), by [@feiss](https://twitter.com/feiss)
- [*The Leap*](https://aframe.io/a-painter/?url=https://ucarecdn.com/bacf6186-96b1-404c-9751-e955ece04919/), by [@feiss](https://twitter.com/feiss)
- [*It Follows*](https://aframe.io/a-painter/?url=https://ucarecdn.com/c9c89a30-7259-46aa-9b02-64b72adb3fb2/), by [@feiss](https://twitter.com/feiss)
- [*Demon*](https://aframe.io/a-painter/?url=https://ucarecdn.com/d939bcb0-bc69-4600-a5d2-3e0b47e0639c/), by [@feiss](https://twitter.com/feiss)
- [*Rose Bush*](https://aframe.io/a-painter/?url=https://ucarecdn.com/3f92dffd-1c66-400d-898a-9a9decd5f07a/), by [@feiss](https://twitter.com/feiss)

[@msfeldstein](https://twitter.com/msfeldstein) has even already contributed a
Rainbow Brush. After having released A-Painter, we are currently working on
more cool demos.

Initial work on the [**A-Frame Registry**](https://github.com/aframevr/aframe-registry) has
started. The registry is a curated collection of A-Frame components. In the future,
this could contain things like assets, controls, effects, or shaders. The
registry currently fetches metadata from npm and builds JSON files respective
to each version of A-Frame. This data can then be used to populate perhaps a
Unity Store-like UI in the [A-Frame
Inspector](https://github.com/aframevr/aframe-inspector). Submit your components!

Check out some of the more *physical* demonstrations of VR this week. See
[full-body tracking](https://www.youtube.com/watch?v=jUPIQecyhOo) and
[punching](https://twitter.com/andgokevin/status/779428404563095553) with
A-Frame.
