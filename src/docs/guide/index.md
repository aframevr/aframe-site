---
title: Getting Started
section_title: Guide
type: guide
layout: docs
order: 1
parent_section: docs
section_order: 1
---

A-Frame is a library for creating scenes in virtual reality on the Web.

There are several ways to get started:

* [Boilerplate](https://github.com/aframevr/aframe-boilerplate/)
* [npm package](https://www.npmjs.com/package/aframe)
* [CDN-hosted JS file](../installation/#Standalone)
* [example scene on CodePen](http://codepen.io/team/mozvr/pen/2ac060c354546201f3337b83fbdcd110?editors=100)

The [Installation page](../installation/) has details for each. Whichever approach you take, A-Frame provides the same features and support for desktop, mobile, and Oculus Rift.

To start an A-Frame scene, we import the A-Frame JavaScript, and define a scene.

```html
<!doctype html>
<html>
  <head>
    <title>My first VR site</title>
    <script src="http://aframe.io/releases/latest/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
    </a-scene>
  </body>
</html>
```

Our A-Frame scene is ready to start adding objects to! Let's start with a simple cube.

```html
<!doctype html>
<html>
  <head>
    <title>My first VR site</title>
    <script src="http://aframe.io/releases/latest/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-cube></a-cube>
    </a-scene>
  </body>
</html>
```

When we open our scene in the browser, we can see the cube!
