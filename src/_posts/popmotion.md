---
title: Popmotion Physics & Animation with A-Frame
date: 2016-01-12
author: twitter|SirHound|Matt Perry
layout: blog
image:
  href: http://codepen.io/popmotion/pen/GoZpjo?editors=101
  src: popmotion.gif
---

I'm convinced A-Frame is the start of the future for VR on the web. It simplifies creating VR websites to the point that no JavaScript knowledge is required, and abstracts best practises into a common framework. Spinning up a page takes seconds, a true fulfillment of the long-forgotten [VRML](https://wikipedia.org/wiki/VRML) dream.

Best of all, I was very quickly able to write scenes that leveraged [Popmotion](https://popmotion.io/) to give the 3D objects [physics](http://codepen.io/popmotion/pen/pgyoYx?editors=101) and [animation](http://codepen.io/popmotion/pen/GoZpjo?editors=101).

<!-- more -->

Ultimately a bouncing ball is a bouncing ball, whether it's rendered by the DOM, SVG, canvas or now, A-Frame. To this end, Popmotion uses a generic class, Actor, to describe objects. It then uses Roles to translate generic properties such as x, y and z into an API-specific format.

For A-Frame, this was as simple as creating strings using a generic `"x y z"` template and then setting them to DOM attributes like `"position"` and `"rotation"`. All other numerical properties, including colors, can be manipulated simply by using camelCase instead of dash-case.

Animation and physics both worked instantly. It was almost magical to watch, after so little effort. Just like setting up your first A-Frame scene.

Input tracking is still elusive. Setting up a data feed with the Input class would be trivial - making a music visualiser with A-Frame rectangles, for example. But mapping mouse movement, already used for panning around the scene on desktops, and applying it to 3D objects poses a new challenge.

You can find the latest Popmotion Role for A-Frame at its [GitHub repo](https://github.com/Popmotion/aframe-role). I'll be updating the readme with solutions to common problems as they're discovered.
