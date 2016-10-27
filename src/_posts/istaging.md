---
title: Why iStaging Chose A-Frame
author: github|alexcheninfo|Alexandro Chen
layout: blog
date: 2016-10-26 12:00:00
image:
  src: istaging.png
---

When I joined [iStaging](http://istaging.co/) a year ago, I was in the position
of picking a WebVR framework. A hard decision. Since WebVR was relatively
young, like the new kid around the block.

iStaging wanted to build a tool for real estate agents to showcase their
buildings and properties. To upload panoramic pictures of rooms, create floor
plans, leave comments, set standpoints. Clients were to be immersed into a real
estate VR experience from the comfort of their homes.

We checked [KRPano](https://krpano.com/). It was cool. Full of features.
However, it lacked the flexibility that we needed. And the information
available on the Internet was very meager. The other framework that we
investigated was [Google VR
View](https://developers.google.com/vr/concepts/vrview). However, it turned out
to be just an image / video inserted inside an `iframe`. Kind of disappointing.
Then, one day, scrolling through Github's trending list, we stumbled upon this
WebVR framework created by some people at Mozilla. We tried it and we loved it.

Our virtual tour has since become one of our main products. Thanks to A-Frame
(and the [Mozilla VR team](https://mozvr.com)), iStaging has reached thousands
of customers while partnering with companies like **Microsoft, HTC, Lenovo, and
Alibaba**.

<!-- more -->

<video src="/videos/istaging.mp4" autoplay></video>

[VIEW DEMO](http://vrviewer.istaging.co/#!/684173)

## HTML-Based

Using [Three.js](https://threejs.org/) would have been like trying to build a
table from scratch; cutting the wood and finding the nails ourselves. Working
with KRPano would have been like getting a fully furnished house, but we would
have had to tear down the walls and throw away the appliances that we didn't
need.

A-Frame hit a sweet spot. It was like buying an IKEA desk that came with a
manual and parts that we could assemble together. In order words, it gave us
ready-to-use 3D components, while letting us put them together. And best of
all, they were simple HTML tags, so &mdash; as front-end developers &mdash; we
learned the framework in just a couple of days (without the need of coffee).

It was extremely easy to get the properties of the 3D elements and apply them
to our HTML. For example, we needed to get the rotation of the 3D camera and
display its angle as a 2D "range of vision". With A-Frame this was extremely
simple. Since its custom elements behave like regular HTML elements, we could
get the attribute like this: `const cameraRotation =
camera.getAttribute('rotation')`. Using that information to set the range of
vision was equally simple: `state.rangeOfVisionRotation = cameraRotation`. And
here's the HTML:

  ```html
    <i :style="rangeOfVisionRotation">
      <img :src="rangeOfVision.png">
    </i>
  ```

## Pluggable and Mixable

The best thing about A-Frame is that it works with plain HTML. So, it can be
plugged into any framework and mixed with other tools like Lodash, React, and
Angular. Or, in our case, [Vue.js](https://vuejs.org/). The process couldn't
have been simpler. All we had to do was to import A-Frame and write stuff like
the following to swap the panorama while assigning a default position and
rotation:

  ```html
    <a-sky
      :position="panoramaPosition"
      :rotation="panoramaRotation"
      :src="panoramaURL"
      :opacity="panoramaOpacity">
    </a-sky>
  ```

Beautiful.

## Complete

A-Frame is one of the most complete frameworks out there. Its ecosystem
includes physics and particle systems. You can even do cool things like walking
in a 3D world and play with ([VR
controllers](https://blog.mozvr.com/a-painter/)) like HTC Vive. Don't think
that's enough? It also has an [visual
interface](https://aframe.io/aframe-inspector/example/) to inspect your 3D
objects and a [tool](https://aframe.io/a-painter/) to paint in a virtual space.

## Great Resources

You can find practically anything in [the `Awesome A-Frame`
repo](https://github.com/aframevr/awesome-aframe). In our case, we were looking
for a component that displayed text (e.g. to display the price tags and the
location the standpoints led to). We weren't satisfied with the first one.
Neither with the second. Luckily, the third, which turned HTML elements into
textures, worked perfectly.

Another component that we're using is one that makes 3D objects draggable and
clickable:

  ```html
    <a-image
      src="#stand-point"
      v-for="standPoint in standPoints"
      :position="standPointPosition"
      @click="goToStandPoint"
      cursor-listener>
    ```

The result:

![https://i.stack.imgur.com/csm4q.png](https://i.stack.imgur.com/csm4q.png)

This lets real estate agents create standpoints to navigate between rooms. And
not only that: they can also create price tags, more-information buttons, and
more.

## Great Community

A-Frame has an awesome community. With other VR frameworks you'll feel like an
boat drifting alone in the ocean. With A-Frame, you'll feel like a ship in a
navy.

On the [A-Frame Slack](https://aframe.io/slack) (probably the biggest WebVR
Slack channel), you can get help in a matter of seconds (okay, not that fast,
but in less than a day). The community is so active, we don't need to rely on
Stack Overflow at all. Also, we're always amazed by what we find in the
`#projects` channel. We've seen stuff from AR experiments to VR games. You can
easily lose yourself in those virtual worlds.

## Free and Open Source

And last but not least, A-Frame is [free and open source on
Github](https://github.com/aframevr/aframe), so its development is rapid and
community-based. You can follow every change and see big improvements between
each version. It also gives you freedom. Freedom to use it for wherever you
want and for any purpose.

## Final Words

To date, we have created more than 10K projects. And we believe the figures
will increase, since [more](http://toursler.com/360-ridelle-306) and
[more](http://storage.net-fs.com/hosting/2727323/6/index.htm) companies are
using WebVR to showcase their real estate properties. How many of them will
succeed? It's hard to tell. The only certainty is that A-Frame will be the
leading WebVR framework for a long time.
