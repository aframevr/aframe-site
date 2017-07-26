---
title: Hands-On! Grab & Drop Interactions In A-Frame
author: twitter|salvadelapuente|Salvador de la Puente
date: 2017-08-08 12:02:00
layout: blog
image:
  src: hands-on-iii.png
---

This is the third article in the Hands-on! series, showing how to build an interactive training experience in VR. In the previous parts, I showed you [how to prototype a scene](/blog/hands-on-i/) and [enable physics allowing for basic interactions](/blog/hands-on-ii/). You also learned about A-Frame’s Entity-Component-System pattern (ECS), which I’ll use in this part to implement _grab and drop_.

<!--more-->

Remember that for hand-based interactions you’ll need an advanced head-mounted display supporting room-scale VR and [6DoF](https://en.wikipedia.org/wiki/Six_degrees_of_freedom) controllers such as those included in the [HTC VIVE](https://www.vive.com/us/product/#controller-intro) or the [Oculus Touch](https://www.oculus.com/rift).

I’ve implemented this series using a VIVE. You will need similar gear supporting room-scale VR and [6DoF](https://en.wikipedia.org/wiki/Six_degrees_of_freedom) controllers such as those included in the [HTC VIVE](https://www.vive.com/us/product/#controller-intro) or the [Oculus Touch](https://www.oculus.com/rift).

All articles in the series:

  1. [Hands-on! Building interactive training with A-Frame](/blog/hands-on-i/)
  2. [Hands-on! Simple physical behaviours in A-Frame](/blog/hands-on-ii/)
  3. Hands-on! Hand-based interactions in A-Frame

## The project repository

If you’ve not done so already, clone the [repository of the simulation](https://github.com/delapuente/aframe-simulation-demo). Enter the repository and run `npm install` and `npm start` to install the dependencies and start the development server at port `8080`.

Look at [`step3/index.html`](https://github.com/delapuente/aframe-interactive-training/blob/master/step3/index.html) and [`js/step3`](https://github.com/delapuente/aframe-interactive-training/tree/master/js/step3) to browse the finished HTML and JavaScript code of this step. Open a browser and enter the following URL `localhost:8080` to find the index of steps. Append `step3` at the end of the URL path to play the scene after step 3 is completed (or select step 3 in the list).

## Grabbing things

There are several ways of grabbing things. The most important thing after grabbing something is to ensure that the grabbed item follows the position and orientation of the tracked hand. I accomplished this in two different ways:

  1. For tools like the hot-air gun and the suction pad, I didn’t rely on physics; I instead performed a quick proximity test and attached the tools directly to the tracked controls.

  2. For other entities such as the circuit board or the chip (once it is separated), I relied on the physics system, setting a [_constraint_](https://github.com/donmccurdy/aframe-physics-system#components--constraint) between the circuit board and the tracked controller. A constraint is a way of binding the physical behavior of a body to a different one.

### The operator system

According to ECS theory, coordinating interactions between the operator’s hands and other elements in the scene sounds like something a system should be in charge of. This system will be the `operator` system.

In A-Frame, a system can be configured using the component notation. For instance, when setting `physics` component to `debug: true`, I’m telling the physics system to render a representation of the collision bounding boxes. The following code will configure the `operator` system that I’ll implement in a while:

```html
<a-scene physics="debug: true"
         operator="hands: [vive-controls]; items: #circuit-board,[tool]">
</a-scene>
```

The `operator` system is parametrized by two properties: `hands` and `items`. The `items` property represents all the items that the hands can grab. I’ve used CSS attribute selectors and they will be translated into lists of elements as if they were looked up using the [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) method. The barebones of the `operator` system looks like this:

```js
AFRAME.registerSystem('operator', {
  schema: {
    hands: { type: 'selectorAll' },
    items: { type: 'selectorAll' }
  },
  _grabbedItems: {},
  init() {
    const hands = this.data.hands;
    hands.forEach(hand => {
        hand.addEventListener('gripdown', () => console.log('Grab!'));
        hand.addEventListener('gripup', () => console.log('Drop!'));
    });
  }
});
```

The A-Frame documentation has a chapter explaining in detail — see [how to create and register new systems](/docs/0.6.0/core/systems.html).

The [`gripdown` and `gripup` events](https://aframe.io/docs/0.5.0/components/vive-controls.html#events) are emitted by the entities with the `vive-controls` component when buttons on the grip are pressed or released respectively.

### Grabbing physical bodies

Grabbing a physical body will establish a constraint between the item being grabbed and the hand. The code looks like:

```js
_grab(hand, item) {
  if (item) {
    const isGrabbed = item.hasAttribute('constraint');
    if (!isGrabbed) {
      item.setAttribute('constraint', `target: #${hand.id}`);
      this._grabbedItems[hand.id] = item;
    }
  }
}
```

We keep track of which item is grabbed by each hand to simplify dropping:

```js
_drop(hand) {
  const grabbedItem = this._grabbedItems[hand.id];
  if (grabbedItem) {
    grabbedItem.removeAttribute('constraint');
    this._grabbedItems[hand.id] = null;
  }
}
```

With those in place, the final `init` method looks like this:

```js
init() {
  const hands = this.data.hands;
  const items = this.data.items;
  hands.forEach(hand => {
    hand.addEventListener('gripdown', () => {
      const item = this._findNearby(hand, items);
      this._grab(hand, item);
    });
    hand.addEventListener('gripup', () => {
      this._dropBody(hand);
    });
  });
}
```

The proximity test used to find which of the items is reachable by the operator’s hand can be implemented in several ways. For simplicity, I decided to compute the distance between the controller origin and item origins. If this distance is less than _20cm_, then it is reachable:

```js
_findNearby(hand, items) {
  for (let i = 0, l = items.length; i < l; i++) {
    const item = items[i];
    if (distance(item) < 0.2) {
      return item;
    }
  }
  return null;

  function distance(item) {
    const handPosition = hand.getObject3D('mesh').getWorldPosition();
    const itemPosition = item.getObject3D('mesh').getWorldPosition();
    return handPosition.distanceTo(itemPosition);
  }
}
```

With A-Frame you can use well-known HTML APIs to create VR interactions. The only thing new for developers to learn is the API for computing distances, which will be covered later in this post.

[![Grabbing physical objects](/images/blog/hands-on/step3-grabbing-physical-bodies-thumb.png)](/images/blog/hands-on/step3-grabbing-physical-bodies.gif)

### Grabbing tools

Grabbing tools is a different thing. It usually involves complex handling not only to hold the tool but to hold it properly. For this simulation, I chose to automatically correct the position and rotation of the tool in the hand once the operator grabbed it.

When dropping, instead of letting the tool fall from its current position, I opted for returning it to its original position. To store the proper position and rotation of the tool while being held or resting, I created the `tool` component:

```js
AFRAME.registerComponent('tool', {
  dependencies: [‘tool-original-location’],
  schema: {
    position: { type: 'vec3' },
    rotation: { type: 'vec3' }
  },
  grab() {
    this._rememberLocation();
    this.setAttribute('position', this.data.position);
    this.setAttribute('rotation', this.data.rotation);
    this.isGrabbed = true;
  },
  drop() {
    this._restoreLocation();
    this.isGrabbed = false;
  },
  _rememberLocation() {
    this._originalParent = this.el.parentNode;
    this._originalPosition = this.el.getAttribute('position');
    this._originalRotation = this.el.getAttribute('rotation');
  },
  _restoreLocation() {
    this.el._originalParent.appendChild(this.el);
    this.el.setAttribute('position', this._originalPosition);
    this.el.setAttribute('rotation', this._originalRotation);
  }
});
```

The [`schema`](/docs/0.6.0/core/component.html#schema) key allows us to define multiple properties describing the `component`. A [complete list of all property types](/docs/0.6.0/core/component.html#property-types) can be found in the A-Frame documentation, which also includes a chapter explaining [how to create and register new components](/docs/0.6.0/core/component.html) with additional detail.

I applied the component `tool` to the tools in the scene with the correct values for position and rotation while being held:

```html
<a-cylinder id="suction-pad"
            tool="position: 0 -0.04 -0.035; rotation: -90 0 0"
            position="-0.2 0.025 0.286" rotation="-90 0 0"
            height="0.1" radius="0.005" color="red">
</a-cylinder>
<a-cylinder id="hot-air-gun"
            tool="position: 0 0 0.1; rotation: -90 0 0"
            position="0.3 0.03 0.286" rotation="-90 0 0"
            height="0.15" radius="0.01" color="blue">
</a-cylinder>
```

The following functions implement the code for grabbing and dropping tools. The return value indicates the result of grabbing or dropping and it is used by the callee of the functions to mark the items as grabbed or released:

```js
function _grabTool(element) {
  const tool = element.components.tool;
  if (!tool.isGrabbed) {
    grabbedItem = element;
    tool.grab();
    hand.appendChild(element);
    return true; // signal the success
  }
  return false;
}

function _dropTool() {
  const tool = grabbedItem.components.tool;
  tool.drop();
  return true;
}
```

Before continuing you should be aware that the above code does not function correctly. There is an aspect in which **A-Frame and normal HTML differ**, and it is subtle and counterintuitive.

As you can see, grabbing a tool implies making it a direct child of the operator’s hand. This way the tool will respond to the hand’s movements in a realistic way. But detaching and re-attaching the tool from the DOM **causes the components to be reset**. More precisely: when re-attaching, the components are completely new. By the time `_dropTool()` is called, the component has been detached from the workspace node and re-attached as a child of the hand so it won’t preserve the values in `_originalParent`,  `_originalPosition` and `_originalRotation` set during the `tool.grab()` call.

A solution would have been to declare those values as part of the schema but it does not work out of the box. It requires a call to the entity’s [`flushToDOM()`](https://aframe.io/docs/0.5.0/core/entity.html#flushtodom-recursive) method because A-Frame avoids serializing data for performance reasons. Furthermore, it is currently impossible to properly serialize the parent node if that node doesn’t have an `id`.

One way of preserving this data, without changing the way the element is used, is to store it inside the HTML node. The important piece is in the `init` method where the component creates or reuses a storage object to hold the state.

```js
AFRAME.registerComponent('tool', {
  schema: {
    position: { type: 'vec3' },
    rotation: { type: 'vec3' }
  },
  init() {
    this.el._tool = this.el._tool || {};
  },
  grab() {
    this._rememberLocation();
    this.el.setAttribute('position', this.data.position);
    this.el.setAttribute('rotation', this.data.rotation);
    this.el._tool._isGrabbed = true;
  },
  drop() {
    this._restoreLocation();
    this.el._tool._isGrabbed = false;
  },
  _rememberLocation() {
    this.el._tool._originalParent = this.el.parentNode;
    this.el._tool._originalPosition = this.el.getAttribute('position');
    this.el._tool._originalRotation = this.el.getAttribute('rotation');
  },
  _restoreLocation() {
    this.el._tool._originalParent.appendChild(this.el);
    this.el.setAttribute('position', this.el._tool._originalPosition);
    this.el.setAttribute('rotation', this.el._tool._originalRotation);
  },
  isGrabbed() {
    return this.el._tool._isGrabbed;
  }
});
```

Now we can grab every element in the scene:

[![Grabbing tools](/images/blog/hands-on/step3-grabbing-tools-thumb.png)](/images/blog/hands-on/step3-grabbing-tools.gif)

### Fixing the collision bounding shapes

In the [previous article](/blog/hands-on-ii.html), I mentioned that the physic engine was miscalculating the collision bounding box of the VIVE controllers. Making the bounding box to match the controller model is especially important when trying to grab physical objects, after disabling the debug mode of physics. If the bounding box, and the model position and dimensions don’t match, the user could not predict the distances for which grabbing something is possible resulting in a counterintuitive and frustrating interaction.

Both A-Frame and the physics component share some of the responsibility of the glitch: on one side, the physics component is not considering the current rotation of the controller properly so, unless the controller is resting in its default position, the bounding box dimensions would be miscalculated. On the A-Frame side, the `vive-controls` component is [applying a correction in the position of the model after loading the model](https://github.com/aframevr/aframe/blob/master/src/components/vive-controls.js#L202). This correction is not advertised outside the component so the physics component can not realize when the model is fully placed. Since the bounding box calculation is done before applying the correction, the bounding box will be misplaced.

To fix this problem, I’ve created a `delayed-static-body` component which solves both problems. To deal with the positioning problem, I delayed setting the real `static-component` until the next frame, once I know the browser has recovered the control of the execution and so, the correction must to be applied:

```js
import * as AFRAME from 'aframe';
import * as physics from 'aframe-physics-system';

const Component = AFRAME.registerComponent('delayed-static-body', {
  schema: AFRAME.components['static-body'].schema,
  init() {
    this.el.addEventListener('model-loaded', () => {
      window.requestAnimationFrame(this._resetBoundingBox.bind(this));
    });
  },
  _resetBoundingBox() { /* ... */ }
});
```

Notice how I borrow the schema from the `static-body` component to be the same.

To fix the miscalculation of dimensions, I store the current rotation of the entity, reset the rotation to 0, set the `static-body` component to the value of this component and restore the original rotation so the bounding box calculations happen when the entity lies in its default orientation.

```js
_resetBoundingBox() {
  var currentRotation = this.el.getAttribute('rotation');
  this.el.setAttribute('rotation', { x: 0, y: 0, z: 0 });
  this.el.removeAttribute('static-body');
  this.el.setAttribute('static-body', this.data);
  this.el.setAttribute('rotation', currentRotation);
}
```

The complete component is in the [`js/step3/components/delayed-static-body.js`]() file. To use it, I replaced the name part of the `static-body` component of the hands with `delayed-static-body` leaving the value parts untouched.

```html
<a-entity id="left-hand"
          delayed-static-body="shape: box"
          vive-controls="hand: left">
</a-entity>
<a-entity id="right-hand"
          delayed-static-body="shape: box"
          vive-controls="hand: right">
</a-entity>
```

## A-Frame and Three.js

In the same way the `aframe-physics-system` is a wrapper around the Cannon.js library, which exposes part of the API in the form of convenient `components` for the A-Frame nodes, A-Frame itself is a wrapper for the [Three.js 3D library](https://threejs.org/).

Three.js is a powerful and popular 3D library built on top of WebGL, which exposes a high-level API focused on manipulating a scene graph instead of working directly with 3D primitives.

One final function that I needed for the demo was to be able to calculate distances between objects. To do this I used some of the native Three.js functionality in A-Frame with the help of the [`getObject3d`](/docs/0.6.0/core/entity.html#getobject3d-type) entities’ method. I used this API to access the Three.js [Object3D API](https://threejs.org/docs/index.html) and compute the [distance](https://threejs.org/docs/index.html#api/math/Vector3.distanceTo) between two Three.js [Vector3](https://threejs.org/docs/index.html#api/math/Vector3) objects according to [their world coordinates](https://threejs.org/docs/index.html#api/core/Object3D.getWorldPosition) in the `distance` auxiliary function:

```js
function distance(item) {
  const handPosition = hand.getObject3D('mesh').getWorldPosition();
  const itemPosition = item.getObject3D('mesh').getWorldPosition();
  return handPosition.distanceTo(itemPosition);
}
```

## Conclusion

So far, you have learned how to prototype a complex and semantic VR scene, enable physics, workaround some limitations, and add basic interactions. You’ve discovered the [A-Frame registry](https://aframe.io/aframe-registry/) and now you know how to make the most of the [ECS pattern](/docs/0.6.0/introduction/entity-component-system.html) and create your own [customised components](/docs/0.6.0/core/component.html) and [systems](/docs/0.6.0/core/systems.html).

Stay tuned for new articles of the _Hands-on!_ series and you will learn how to enrich the experience by adding textures, effects, 3D models, sound and UI. If you liked these articles, [mention us on Twitter](https://twitter.com/aframevr) and don't hesitate asking your questions in the [A-Frame slack channel](https://aframevr.slack.com/).
