---
title: Hands-On! Simple Physical Behaviours In A-Frame
author: twitter|salvadelapuente|Salvador de la Puente
date: 2017-08-09
layout: blog
image:
  src: hands-on-ii.png
---

This article is the second in a series showing how to build a hand-based, interactive training experience in VR for a circuit manipulation procedure. In the [first part](/blog/hands-on-i/), I chose a [specific step in the procedure](https://www.youtube.com/embed/tHP2kX6aAZM?rel=0&amp;showinfo=0) and prototyped the workspace, tools and materials used in that step with simple geometrical primitives. This time around I will add basic physics to the elements of the scene and you will learn about A-Frame’s entity-component-system architecture.

All articles in the series:

  1. [Hands-on! Building interactive training with A-Frame](/blog/hands-on-i/)
  2. Hands-on! Simple physical behaviours in A-Frame
  3. [Hands-on! Hand-based interactions in A-Frame](/blog/hands-on-iii/)

<!--more-->

## The project repository

If you’ve not done so already, clone the [repository of the simulation](https://github.com/delapuente/aframe-simulation-demo). Enter the repository and run `npm install` and `npm start` to install the dependencies and start the development server at port `8080`.

Look at [`step2/index.html`](https://github.com/delapuente/aframe-interactive-training/blob/master/step2/index.html) and [`js/step2`](https://github.com/delapuente/aframe-interactive-training/tree/master/js/step2) to browse the finished HTML and JavaScript code of this step. Open a browser and enter the following URL `localhost:8080` to find the index of steps. Append `step2` at the end of the URL path to play the scene after step 2 is completed (or select step 2 in the list).

## The holding problem

An accurate correspondence between virtual and real objects is vital to increase the sense of presence. The problem with the hands models in the scene is that they are not oriented in the same way than your real hands hold the controllers.

Take a look at the following video, focus on how the real fingertips and the virtual hand's don't match. The grab axis, around which the fingers close, is also misaligned.

<video controls src="/images/blog/hands-on/step2-the-holding-problem.mp4"></video>

The simulation is more effective when using the 3D models of the VIVE controllers since the tools you see in VR will match the real tools hold in your hands. Using the `vive-controls` instead of `hand-controls` attribute also [allow us to change the model](/docs/0.6.0/components/vive-controls.html#value_model) in the future so we can provide a better representation of our hands.

```html
<a-entity id="left-hand"
          vive-controls="hand: left">
</a-entity>

<a-entity id="right-hand"
          vive-controls="hand: right">
</a-entity>
```

## The physics system
The [`aframe-physics-system`](https://github.com/donmccurdy/aframe-physics-system) extension is a wrapper around the [Cannonjs physics engine](http://www.cannonjs.org/) developed by [Don McCurdy](https://twitter.com/donrmccurdy). Mozilla Hacks blog has a good introduction to this extension in [Having fun with physics and A-Frame](https://hacks.mozilla.org/2017/05/having-fun-with-physics-and-a-frame/).

Enabling physics in A-Frame consists on importing the proper module after importing A-Frame (see `/js/step2/index.js`):

```js
import * as AFRAME from 'aframe';
import * as physics from 'aframe-physics-system';
```

Next, we need to set some attributes in the elements of the scene to define how they will be affected by the physics engine. I turned the floor, the workbench, and the operator's hands into _static bodies_ by adding the `static-body` attribute to these elements. A _static body_ is still a physical object but its properties are not controlled by the physics engine &mdash;they are not affected by gravity or other forces, which prevents the floor and table from falling indefinitely.

```html
<a-plane rotation="-90 0 0"
         static-body
         width="15" height="15" color="#777">
</a-plane>

<a-box id="workbench" position="0 0 0"
       static-body
       width="2" depth="1" height="0.02" color="#97b7d5">
</a-box>

<a-entity id="left-hand"
          static-body="shape: box"
          vive-controls="hand: left">
</a-entity>

<a-entity id="right-hand"
          static-body="shape: box"                  
          vive-controls="hand: right">
</a-entity>
```

On the contrary, a _dynamic body_ is an object fully controlled by the physics engine. I turned the circuit board containing the chip into a _dynamic body_ by setting the attribute `dynamic-body` on it. The value of the property establishes the mass of the object &mdash;I have set it to weigh 10g (which equates to 0.01, since Cannon.js uses [S.I.](https://en.wikipedia.org/wiki/International_System_of_Units) units, so kilograms for mass).

```html
<a-box id="circuitboard" position="0 0.0215 0.4"
       dynamic-body="mass: 0.01"
       width="0.05" depth="0.05" height="0.003" color="#008000">
  <a-box id="chip" position="0 0.002 0.005"
         width="0.02" depth="0.02" height="0.001" color="#000">
  </a-box>
</a-box>
```

Dynamic bodies collide with other dynamic bodies **and with static bodies**. This is what the scene looks like after enabling physics:

[![Red boxes around the floor and table. The circuit board is missing.](/images/blog/hands-on/step2-initial-scene.png)](/images/blog/hands-on/step2-initial-scene.png)

Red boxes are a result of the physics engine debug mode being enabled. You can enable it by setting the `physics` attribute of the `scene` tag to `debug: true`. You'll see a red box around the workbench, floor and circuit board... wait a moment! Where the heck is the circuit board!?

[![The circuit board is under the table. It fell through the table somehow.](/images/blog/hands-on/step2-where-is-the-chip.gif)](/images/blog/hands-on/step2-where-is-the-chip.gif)

Oh! There it is.

### Limits of the physics system

It turns out that the chip is not resting on the table but on the floor. The chip fell through the table because of the thickness of their physical bodies.

Indeed, Cannon.js [lacks from continuous collision detection](https://github.com/schteppe/cannon.js/issues/50#issuecomment-13730383): it only checks if an object is colliding another from frame to frame. With the Earth gravity (which is the default in Cannon.js), an [object falls around 3cm after the first 80ms](https://en.wikipedia.org/wiki/Free_fall#Uniform_gravitational_field_without_air_resistance) (~5 frames). Assuming I was probably missing some frames during the scene setup, a quick workardound was to increas the thickness (the `height` attribute of a box) of the workbench by a couple of centimetres to prevent the circuit board from passing through the table. This forced me to relocate the elements resting on the table, but this was preferable to changing the gravity.

```html
<a-box id="workbench" position="0 0 0"
       static-body
       width="2" depth="1" height="0.04" color="#97b7d5">
</a-box>
```

Another problem regarding the physics engine is related to the collision bounding shapes used for rotated models such as the VIVE controllers. They are miscalculated in terms of dimensions and positioned out of place for certain initial configurations.

[![Miscalculated and misplaced bounding box.](/images/blog/hands-on/step2-miscalculated-collision-box.png)](/images/blog/hands-on/step2-miscalculated-collision-box.png)

Nevertheless, this is something I’ll fix during the next article. At this point, you can experiment with the scene using the bounding box to move the circuit board around. Since the controllers can pass through the table, a funny interaction is trying to raise the chip placing your controller below it:

[![The VIVE controls interact with the circuit board realistically.](/images/blog/hands-on/step2-raising-the-circuit-board.gif)](/images/blog/hands-on/step2-raising-the-circuit-board.gif)

## The entity-component-system architecture

The [entity-component-system pattern](https://en.wikipedia.org/wiki/Entity%E2%80%93component%E2%80%93system) (ECS) is an architectural pattern in which objects or entities are composed of multiple aspects. A component captures an aspect of an entity and a system orchestrates the global interactions among the entities possessing a component of the same aspect. The A-Frame documentation includes a [complete chapter dedicated to ECS](/docs/0.6.0/introduction/entity-component-system.html).

In A-Frame, the entities are the `a-entity` elements and all the primitives (`a-box`, `a-plane`, `a-cylinder`, `a-camera`...) included in the scene. Components are represented by the elements' attributes so, hereinafter, we will stop using the word _attribute_ and start using _component_ when applicable. For instance, consider the operator's hands:

```html
<a-entity id="left-hand"
          static-body="shape: box"
          vive-controls="hand: left">
</a-entity>
<a-entity id="right-hand"
          static-body="shape: box"
          vive-controls="hand: right">
</a-entity>
```

Each hand is actually an entity which has two components `static-body` and `vive-controls`. The first is required by the physics engine to detect when it is colliding with other bodies. The second shows the specified controller making it automatically match the position and rotation of the tracked control. Components can be one-value such as the former `hand-controls` or multi-value like `static-body` or `vive-controls` (i.e., comprised of several named values like the _mass_ or the colliding _shape_). The different values of a multi-value component are called properties.

Finally, systems are pure behaviour extensions and therefore, they are usually invisible. Take the physics engine for instance. It is a system and it orchestrates the interactions between those entities with `static-body` and `dynamic-body` components (among others).

### A note on primitives

[Primitives are entities under the hood](/docs/0.6.0/introduction/html-and-primitives.html#primitives). Primitives have specific attributes mapped to certain properties of components implied by the primitive. For instance:

```html
<a-cylinder id="suction-pad"
            position="-0.2 0.025 0.286" rotation="-90 0 0"
            height="0.1" radius="0.005" color="red">
</a-cylinder>
```

This `a-cylinder` primitive implies [`geometry`](/docs/0.6.0/components/geometry.html) and [`material`](/docs/0.6.0/components/material.html) components. The `primitive` property of the `geometry` component is automatically set to `cylinder`. Then, `height`, `radius`, and `color` are attributes mapped to `geometry.height`, `geometry.radius`, and `material.color` respectively, while `position` and `rotation` are components on their own.

The equivalent entity looks like:

```html
<a-entity id="suction-pad"
          position="-0.2 0.025 0.286" rotation="-90 0 0"
          geometry="primitive: cylinder; heigh: 0.1; radius: 0.005"
          material="color: red">
</a-entity>
```

## The A-Frame registry

The [A-Frame registry](/aframe-registry/) is a centralized source of components. There you can find a collection of components, download the libraries and visit their home pages. Look at the [`aframe-auto-detect-controllers`](https://www.npmjs.com/package/aframe-auto-detect-controllers-component) component for instance. Given that I replaced the hand controls with the HTC VIVE controllers, I could have used this component to automatically detect which particular tracked controller to use, e.g. HTC Vive or Oculus Touch.

## Conclusion

All the bits we need are now in place to start implementing behaviours. Despite the limitations of the Cannon.js physics engine, [Don McCurdy’s](https://github.com/donmccurdy) A-Frame physics offers a simple and intuitive component-oriented API, and exposes enough features for covering our specific needs. Nevertheless, for simulation experiences to succeed in WebVR, we need more accurate and faster physics implementations. My hopes are with [Web Assembly](https://hacks.mozilla.org/2017/02/a-cartoon-intro-to-webassembly/), a new language for the Web that promises huge performance gains over JavaScript.

In the [next chapter](/blog/hands-on-iii/) I will go deeper in the ECS pattern, implementing _grab and drop_ and fixing the collision bounding box problem by using some custom components and systems.
