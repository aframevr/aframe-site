---
title: "Tick tock and how to post proc with A-Frame"
author: twitter|wizgrav|Yannis Gravezas
date: 2017-6-11
layout: blog
image:
  src: https://wizgrav.github.io/aframe-effects/screen.png
---

A-Frame 0.6.0 brings with it several exciting new options for developers. In this post we'll go over implementing post processing to visually enchance our projects.

<!--toc-->

<!--more-->

## Tick, tock and the render loop

Component writers should already be familiar with the tick() method exposed by systems and components. This is where logic updates that need to happen every frame are performed. When the render loop iteration starts for any frame, all the tick() methods for all components will be dispatched.

Immediately after the components, the ticks() for all systems will be called. Besides their many other uses, systems also provide some order in the execution of operations. When systems are also done ticking, the scene is finally rendered.

A-Frame 0.6.0 comes with an extension to this loop structure by allowing developers to define tock() methods on both components and systems. Tock is an almost symmetric counterpart to tick() which will get dispatched after the scene is rendered. Similarly to tick, all components tocks will be called, then system tocks and that's when the render loop iteration ends.

So a way to tap in the appropriate time in the render loop is provided but just by itself, it is not enough for post processing to happen. We also need a way to notify A-Frame that it should render the scene in a WebGLRenderTarget, instead of directly to the screen. This render target can then be used as input for post processing.

After lengthy discussions, it was decided that this part should be left entirely at the component/system writers hands. All he needs to do is attach a .renderTarget property on the scene element. This property must be a THREE.WebGLRenderTarget. When it's not null, the scene will be rendered on it, instead of the screen. 

Three.js render targets can contain two usable textures: An rgba texture with the scene rendering and optionally a .depthTexture with the depth map for the current frame. It should be of note that the depth texture comes for free, as it is used internally by webgl for its depth testing operation.

This scheme moves the responsibility for implementing the post proc pipeline entirely on the developer, giving him absolute control over the implementation.

## How does post processing work?

In essence, its little more than 2D processing of images like one would do with photoshop or gimp. A full screen quad is used to cover the whole screen and draw with shaders that use the base scene rendering textures(color+depth) for their input. 

Some basic but very useful operations would be the manipulation of colors to get a desired aesthetic. A toon effect can be achieved with a simple quantization of the color values. A vignette effect by darkening parts of the screen based on the uvs of the full screen quad.

Besides operations on color alone, the combination of a depth map opens us a range of other great possibilities. Having even that partial knowledge of the scene geometry allows us to implement effects like depth of field, outlines, ambient occlusion and more.

## How do we implement it?

The most simple setup would require just a single component or system that creates and sets a renderTarget on the scene element, which target then processes in its tock() to filter the scene and output on the canvas/screen.

```js
AFRAME.registerComponent('bloom', {
  
  schema: {
    strength: { default: 1 },
    radius: { default: 0.5 },
    threshold: { default: 0.8 }
  },

  init: function () {
    
    // Set a renderTarget to draw into instead of the canvas
    // From now on, we're responsible for outputing to screen
    var pars = { minFilter: THREE.LinearFilter, format: THREE.RGBAFormat } 
    this.el.sceneEl.renderTarget = new THREE.WebGLRenderTarget(1, 1, pars);
 
    // Threes effect composer is not directly usable,
    // as it needs to take over the scene render,
    // but we can use its passes manually
    this.pass = THREE.UnrealBloomPass();
  },

  remove: function () {
    // Cleanup our resources
    this.pass.dispose();
    this.el.sceneEl.renderTarget.dispose();
    
    // Set the scene to render straight to canvas again
    this.el.sceneEl.renderTarget = null;
  },

  update: function () {
    // Just a one on one mapping of schema to pass properties
    this.pass.strength = this.data.strength;
    this.pass.radius = this.data.radius;
    this.pass.threshold = this.data.threshold;
  },

  // Runs every frame after the base scene render
  tock: function () {
    var renderer = this.el.sceneEl.renderer;
    var renderTarget = this.el.sceneEl.renderTarget;

    // If needed, resize our target to match the renderer
    var size = renderer.getSize();

    if (renderTarget.width !== size.width || renderTarget.height !== size.height) {
      renderTarget.setSize(size.width, size.height)
    }

    // render to screen, that is done by
    // setting the second argument to null
    // the third argument is the input to use
    // and we provide it with our scene rendering
    this.pass.render(renderer, null, renderTarget);
  }
});
```

This setup is essentially a handover from A-Frame to the component or system which will act as the single point implementing our pipeline. In any case there must be only one component or system that will finally output to canvas. 

This scheme allows for the straightforward porting of most existing three.js pipelines. Just wrap the code in a component and you're good to go. Outputting to screen, resizing the renderTarget and toggling the pipeline on and off would be the responsibility of the component writer. 

Three.js developers should find this approach useful to straight away reuse their optimized pipelines across projects. While being a perfectly viable strategy, it does not take advantage of the modularity provided by A-Frame.

An approach that does take advantage of componentization is [aframe-effects](https://github.com/wizgrav/aframe-effects/), a multicomponent system combo that implements an extensible and modular pipeline on top of the base mechanisms provided by A-Frame. It allows the developer to combine parts of different effects and effortlessly implement complex pipelines in a, mostly, declarative fashion.

In later posts we will deal with the implemention details of specific setups and discuss on best practices, in the meanwhile you can check out the effects repo and experiment with its components to enhance your projects looks.
