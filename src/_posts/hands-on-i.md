---
title: Hands-On! Building Interactive Training With A-Frame
author: twitter|salvadelapuente|Salvador de la Puente
date: 2017-08-09
layout: blog
image:
  src: hands-on-i.png
---

In an industry where manipulation of complex mechanisms involves tens of tools, expensive equipment and even safety risks, virtual reality helps to increase operator safety and reduce material costs. In addition, WebVR puts everything just one link away.

This is the first of a series of articles providing an in-depth walkthrough of a hand-based interaction and manipulation model for training purposes ([check the demo online](https://delapuente.github.io/aframe-interactive-training/step3/)). The series is not a step-by-step tutorial but a postmortem breakdown covering one major feature at a time. At the same time you build the experience, you will also learn about core A-Frame concepts, its ecosystem, the entity-component-system architecture, how to use the [A-Frame physics system](https://hacks.mozilla.org/2017/05/having-fun-with-physics-and-a-frame/), common errors, workarounds and good practices. All you need to confront a real project.

<!--more-->

This is an advanced virtual reality experience and so it requires a head-mounted display supporting room-scale VR and [6DoF](https://en.wikipedia.org/wiki/Six_degrees_of_freedom) controllers such as those included in the [HTC VIVE](https://www.vive.com/us/product/#controller-intro) or the [Oculus Touch](https://www.oculus.com/rift). Personally, I used a VIVE.

All articles in the series:

  1. Hands-on! Building interactive training with A-Frame
  2. [Hands-on! Simple physical behaviours in A-Frame](/blog/hands-on-ii/)
  3. [Hands-on! Hand-based interactions in A-Frame](/blog/hands-on-iii/)

## The project repository

Use git to clone the [repository of the simulation](https://github.com/delapuente/aframe-interactive-training). Enter the repository and run `npm install` then `npm start` to install the dependencies and start the development server at port `8080`.

At the root of the project, you'll find [`step1/`](https://github.com/delapuente/aframe-interactive-training/tree/master/step1), [`step2/`](https://github.com/delapuente/aframe-interactive-training/tree/master/step2) and [`step3/`](https://github.com/delapuente/aframe-interactive-training/tree/master/step3) with the **finished HTML** for each step. Look at the same folders inside the [`js/`](https://github.com/delapuente/aframe-interactive-training/tree/master/js) directory to browse the JavaScript code.

Open the browser and enter the URL `localhost:8080` to find the index of steps. Append `step1` at the end of the URL path and click on the VR button on the bottom-right corner of the display to experience the project after step 1 is completed (or select step 1 in the list).

The project is based on the [A-Frame SPA skeleton](https://github.com/delapuente/aframe-spa-skeleton) that quickly bootstraps a virtual reality single-page application with auto reload and publishing features. Read the [a-frame-skeleton README file](https://github.com/delapuente/aframe-spa-skeleton#a-frame-spa-skeleton) for further information.

## Planning the demo

The app’s initial aim was to provide a simulation of the process of backing up the contents of a chip from an in-car key reader device, which includes loosening the solder and removing the chip from a circuit board. As a reference, I used a YouTube video showing the [complete in-real-life procedure](https://youtu.be/qFGX3AHVLqA?t=90). The video comprises several steps involving around eight different tools. For this series, I'm going to focus on the specific step of separating the chip from the circuit board. See a detailed sequence here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/tHP2kX6aAZM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

The required steps are as follow:

  1. With a hot air gun, soften the soldering around the chip.
  2. With the help of a suction pad, separate the chip from the circuit board.
  3. Carefully place the chip on the table, to avoid ruining the chip pins.

I started prototyping to implement one step at a time without realistic models in the beginning. Once I am able to recreate the complete process, I can think about adding different levels of detail to the demo.

But before providing specific simulations and behaviors, we need some basic hand-based interaction.

## Setting the scene up

The first thing I needed was a scene containing all the elements I wanted to work with: the air gun, the suction pad, the chip, the soldering around the chip, and the circuit board. Of course I needed a representation of my own hands and some environmental elements such as a sky, a floor and of course a table!

This is the initial code for the scene:

```html
<a-scene>
  <!-- World -->
  <a-sky color="#333"></a-sky>
  <a-plane rotation="-90 0 0"
           width="15" height="15" color="#777">
  </a-plane>
  <!-- Workspace -->
  <a-entity id="workspace" position="0 0.8 -0.8">
    <a-box id="workbench" position="0 0 0"
           width="2" depth="1" height="0.02" color="#97b7d5">
    </a-box>
    <a-box id="circuitboard" position="0 0.0115 0.4"
           width="0.05" depth="0.05" height="0.003" color="#008000">
      <a-box id="chip" position="0 0.002 0.005"
             width="0.02" depth="0.02" height="0.001" color="#000">
      </a-box>
    </a-box>
    <a-cylinder id="suction-pad"
                position="-0.2 0.015 0.286" rotation="-90 0 0"
                height="0.1" radius="0.005" color="red">
    </a-cylinder>
    <a-cylinder id="hot-air-gun"
                position="0.3 0.02 0.286" rotation="-90 0 0"
                height="0.15" radius="0.01" color="blue">
    </a-cylinder>
  </a-entity>
  <!-- Operator -->
  <a-camera position="0 0 0" user-height="1.3"></a-camera>
  <a-entity id="left-hand" hand-controls="left"></a-entity>
  <a-entity id="right-hand" hand-controls="right"></a-entity>
</a-scene>
```

When working with A-Frame, all the scene objects are contained inside the `a-scene` element. A-Frame provides some special tags to achieve common tasks such as adding a sky dome or a camera into the virtual space and it also has primitives available such as boxes, planes, or cylinders.

This is how I set up the environment with a sky dome, and a plane decorated with a couple of sad grey tones.

```html
<a-sky color="#333"></a-sky>
<a-plane rotation="-90 0 0"
         width="15" height="15" color="#777">
</a-plane>
```

Length units in A-Frame are expressed in meters and angles are described in sexagesimal degrees (0º to 360º). Thus, the floor has a surface of _15m x 15m_, the workbench is _2cm_ thick and has a surface of _2m x 1m_, and the circuit board is _3mm thick_ and measures _5cm x 5cm_. Real measures are important for two reasons: they **improve the feeling of immersion** and provide **realistic physics**.

When placing elements, take into account that they are placed according to their central point in the coordinate system of the parent element. If they are direct children of the `a-scene` element, then they are positioned according to the world coordinates system. In the case of the chip, **it is positioned relative to the central point of the circuit board** because the circuit board is the parent node of the chip.

```html
<a-box id="circuitboard" position="0 0.0115 0.4"
       width="0.05" depth="0.05" height="0.003" color="#008000">
  <a-box id="chip" position="0 0.002 0.005"
         width="0.02" depth="0.02" height="0.001" color="#000">
  </a-box>
</a-box>
```

A-Frame provides a way of adding empty nodes to the scene or, in A-Frame nomenclature, an **entity**. [Entities](/docs/0.6.0/core/entity.html) are represented by the `a-entity` element and they have nothing associated with them: no geometry, model, or material. They do have implicit `rotation`, `position`, `scale` and `visible` attributes, which are automatically injected by the framework for all the elements within the scene.

Adding the [`hand-controls`](/docs/0.6.0/components/hand-controls.html) attribute to an entity displays a hand model following the position and orientation of one of the tracked controllers of an HTC Vive or Oculus.

```html
<a-entity id="left-hand" hand-controls="left"></a-entity>
<a-entity id="right-hand" hand-controls="right"></a-entity>
```

This is the resulting scene:

[![Initial scene](/images/blog/hands-on/step1-initial-scene.png)](/images/blog/hands-on/step1-initial-scene.png)

### One workspace to rule them all

To increase the feeling of immersion, I placed the elements as if they were resting on my real desktop only 5cm higher up. This allowed me to avoid my hands colliding  with my physical keyboard when I’m in VR mode. Adjusting the whole workspace at the same time is achieved by changing the `position` attribute of the `workspace` entity. Thanks to the real and virtual table heights matching, the demo has a great feeling of presence.

A simpler alternative would have been to make the circuit board and tools children of the table. Unfortunately this configuration does not play well when adding physics during the next article. The physics engine would consider the nested elements to be compounding parts of the root element and I didn’t want my tools and circuit board to be considered part of the table but separated elements.

Also notice that if you are experiencing room-scale VR, you will also need to manually position the workspace and camera relative to the center of your configured stage, making them match with your real-life table and yourself respectively.

Finally, while developing I spend most of my the time sitting in front of my computer. So as a last touch I changed the height correction of the camera, the `user-height` attribute, to match the distance of my eyes from the floor when I'm sitting down:

```html
<a-camera position="0 0 0" user-height="1.3"></a-camera>
```

This correction is [automatically disabled when entering VR](/docs/0.6.0/components/camera.html#vr-behavior) mode since the position of the camera is provided by the VR head-mounted display (HMD).

## Conclusion

The very first thing you need to start implementing a simulation experience is a clear reference of the real procedure. Some clues? Watch videos, take descriptive notes and diagrams, and maintain a fluid conversation with an expert.

The next step is to figure out a basic depiction of what the environment looks like. You don't need complex models to do it, just some basic shapes to provide placeholders for the realistic versions that you will add in the future. This is a common practice when prototyping game environments called [**greyboxing**](http://jackw-gamedesign.tumblr.com/post/139960850160/what-is-greyboxing).

In the [next article](/blog/hands-on-ii/), I will add some physics in preparation for grabbing things, something imperative in almost any simulation experience.
