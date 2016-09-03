---
title: A Week of A-Frame 18
author: twitter|andgokevin|Kevin Ngo
date: 2016-06-17
layout: blog

awoa:
  contributions:
    - author: twitter|andgokevin
      action: made
      description: "the `registerShader` API only require to set a material, rather than return."
      github: "#1549"

    - author: twitter|donrmccurdy
      action: preserved
      description: "geometry data before geometries are converted to `BufferGeometry`s."
      github: "#1557"

    - author: github|amberroy
      action: implemented
      description: channels for the Firebase component.
      github: "ngokevin/aframe-firebase-component|#11"

    - author: github|kalkut
      action: fixed
      description: errors due to unbounded variables.
      github: "ngokevin/aframe-layout-component|#3"

    - author: github|amberroy
      action: fixed
      description: entities not being removed on disconnect.
      github: "ngokevin/aframe-firebase-component|#10"

    - author: twitter|andgokevin
      action: implemented
      description: one-time component broadcasts.
      github: "ngokevin/aframe-firebase-component|#4"

    - author: twitter|andgokevin
      action: implemented
      description: individual component property broadcasts.
      github: "ngokevin/aframe-firebase-component|#5"

    - author: github|amberroy
      action: implemented
      description: broadcast interval configuration.
      github: "ngokevin/aframe-firebase-component|#15"

    - author: twitter|andgokevin
      action: started unit tests
      description: for the Firebase component.
      github: "ngokevin/aframe-firebase-component|612318e"

  media:
    - author: twitter|armthethinker
      action: "wrote"
      title: "about head-tracked transformations for his Humane Virtuality internship."
      url: https://medium.com/humane-virtuality/weekly-digest-1-e3425a74e594

    - author: twitter|alialmossawi
      action: "wrote"
      title: "*Visualizing in VR using A-Frame and D3*."
      url: http://almossawi.com/aframe-d3-visualization/

    - author: twitter|thomasbalou
      action: "wrote about building TumbVR: "
      title: "*One Day Prototyping with A-Frame*."
      url: https://medium.com/@tombalou/one-day-prototyping-with-aframevr

    - author: twitter|xwalk_project
      action: "wrote about"
      title: "using Crosswalk to build A-Frame hybrid apps on Android."
      url: https://crosswalk-project.org/documentation/tutorials/webvr.html

    - author: twitter|armthethinker
      action: "wrote about"
      title: "starting his Humane Virtuality VR UX internship."
      url: https://medium.com/humane-virtuality/humane-virtuality-internship-ca69a834175a

    - author: twitter|lizmhull
      action: "tweeted"
      title: "a video of the Mozilla VR team giving WebVR demos in London."
      url: https://twitter.com/lizmhull/status/743109154416566272/video/1

    - author: twitter|thomasbalou
      action: "wrote about building TumbVR: "
      title: "*One Day Prototyping with A-Frame*."
      url: https://medium.com/@tombalou/one-day-prototyping-with-aframevr

    - author: twitter|oscarmarinmiro
      action: "tweeted a teaser of"
      title: "a video control component."
      url: https://twitter.com/oscarmarinmiro/status/742314843638800384

    - author: twitter|rachsmithtweets
      action: "gave a quick shout-out to A-Frame."
      title: "during her *Beyond Boxes* talk at Front-End Conference"
      url: https://speakerdeck.com/rachsmith/beyond-boxes-1

  projects:
    - title: Where is Piers Morgan Disliked the Most?
      author: twitter|alialmossawi
      description: "D3 data visualization of the UK displaying dislike levels of Piers Morgan. ([code](https://github.com/almossawi/aframe-d3-visualization))."
      image: where-is-piers-morgan-disliked-the-most.jpg
      url: http://almossawi.com/aframe-d3-visualization/demo/

    - title: Blanket Component
      author: twitter|kanarula
      description: "A intricately waving blanket of spheres."
      image: blanket.gif
      url: https://github.com/AvikaN/WebVR

    - title: Head-Tracked Transformations
      author: twitter|armthethinker
      description: "VR UX prototype of transforming objects' orientations with your head to enhance VR experiences that don't have positional tracking. [Read the instructions here](https://armthethinker.github.io/webVR-experiments/#6-head-tracked-transformations). ([code](https://github.com/armthethinker/webVR-experiments))"
      image: head-tracked-transformations.jpg
      url: https://armthethinker.github.io/webVR-experiments/6--head-tracked-transformations.html

    - title: First Citadel
      author: twitter|ericalayton
      description: "Citadel with waterfalls."
      image: firstcitadel.jpg
      url: http://www.skyislandsvr.com/pages/firstcitadel.html

    - title: Missed Connections
      author: twitter|armthethinker
      description: "Visualizing Craigslist missed connections posts. [Read the instructions here](https://armthethinker.github.io/webVR-experiments/#5-missed-connections). ([code](https://github.com/armthethinker/webVR-experiments))"
      image: missed-connections.jpg
      url: https://armthethinker.github.io/webVR-experiments/5--missed-connections.html

    - title: Keyboard Material Component
      author: github|richardanaya
      description: "CSS-styleable VR keyboard compatible with WebVR controllers."
      image: aframe-keyboard.jpg
      url: https://github.com/richardanaya/aframe-keyboard

    - title: VRWeb.IO
      author: github|VRWebIO
      description: "Upload and share 360&deg; images."
      image: vrwebio.jpg
      url: https://github.com/richardanaya/aframe-keyboard

    - title: "SFMTA Van Ness BART Model"
      author: twitter|kfarr
      description: "Model of the new Bus Rapid Transit project in San Francisco."
      image: brt.jpg
      url: https://brt-webvr-fjrtyyjbhf.now.sh/vn-geary.html

    - title: HTML Material Component
      author: github|richardanaya
      description: "Component for rendering from HTML content to a texture. See also [HTML Shader](https://github.com/mayognaise/aframe-html-shader)."
      image: aframe-html.jpg
      url: https://github.com/richardanaya/aframe-html

    - title: Canvas Material Component
      author: github|richardanaya
      description: "Component for rendering from an HTML5 canvas to a texture. See also [Draw Component](https://github.com/maxkrieger/aframe-draw-component)."
      image: aframe-canvas.jpg
      url: https://github.com/richardanaya/aframe-canvas

  stars: 2210
---

The Mozilla VR team met up together in London with contributors, [Don
McCurdy](https://twitter.com/donrmccurdy) and [DrawVR](https://drawvr.com), who
have been with A-Frame since the start. And
[@georational](https://twitter.com/georational) from down the street stopped by
to say hi as well. There's strong momentum heading into the second half of
2016; let's do special things to finish off The Year of VR!
