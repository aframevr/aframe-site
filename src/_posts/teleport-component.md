---
title: Developing an A-Frame Teleport Component
author: twitter|fernandojsg|Fernando Serrano
layout: blog
date: 2016-11-01 13:00:00
image:
  src: teleport-component/background.png
---

> Want to jump right to it? <a href="https://fernandojsg.github.io/aframe-teleport-controls">Try the demos</a>!
>
> <small class="subintro">Make sure you have a <a href="https://webvr.info/get-chrome/">WebVR-enabled browser</a>. In Chromium, enable the flags for <code>chrome://flags/#enable-webvr</code> and <code>chrome://flags/#enable-gamepad-extensions</code>. <a href="https://blog.mozvr.com/experimental-htc-vive-support-in-firefox-nightly/">Firefox support</a> is <a href="https://iswebvrready.org/#htc-vive-support">coming soon</a>.</small>

The [HTC Vive](http://www.vive.com) introduced room scale VR letting users walk around naturally in the virtual space. While compelling, experiences are constrained to the available physical space of a few meters. In [The Lab](http://store.steampowered.com/app/450390/), Valve introduced a system to select a distant point to teleport yourself instantaneously, allowing you to explore large virtual spaces without physical boundaries.

**Today, We're releasing an A-Frame teleport [component](https://aframe.io/docs/0.3.0/core/component.html)** so you can easily use this technique in your experiences. The idea is simple; when holding the thumbpad, a line is displayed between you and the place you want to go. Move your hand to change the target position and release to teleport!

![](/images/blog/teleport-component/thelab.jpg)

<!-- more -->

Just include the component, and then the `teleport` HTML attribute is all it takes to enable teleportation in your experience:

```xml
<a-entity vive-controls=âhand: leftâ teleport-controls></a-entity>
```

## Creating a Curved Trajectory

The first version of the component used a straight line to select the destination.

![](/images/blog/teleport-component/line.png)

Using a straight ray only works when there's a direct line of sight between you and your target destination. For instance, if you want to move to a higher position you won't be able to point accurately with a straight line.

![](/images/blog/teleport-component/line-curve-comparison.png)

The solution is to use a curved line to be able to select an occluded target destination. We use simple physics to determine a [projectile shot curve](https://en.wikipedia.org/wiki/Projectile_motion):

![](/images/blog/teleport-component/formula.png)

where:

- **p<sub>0</sub> (Initial position)** is the initial position of the projectile. Is the controller position when the teleport button is pressed.
- **v<sub>0</sub> (Initial speed)** is the speed at p0. Defined by the user, the higher the speed the further the distance.
- **t (time)** is the time since shot.
- **a (acceleration)** with gravity at 9.8m/s<sup>2</sup>.

![](/images/blog/teleport-component/curve.jpg)

To paint the curve, we create an auxiliary `Mesh` class called `RayCurve`. Its constructor takes the number of points in the curve and a width value. Then you keep calling `setPoint(i, Vector3)` to define each point on the curve. It creates a `triangleStrip` mesh with two vertices for each point in the curve perpendicular to the direction of the line.

![](/images/blog/teleport-component/trianglestrip.jpg)

![](/images/blog/teleport-component/testing-curve.gif)

## Detecting Collisions

By default, we detect collisions against the floor (plane at origin `0, 0, 0` with the normal pointing up `0, 1, 0`), but you can define which entities to collide against. But in both cases, we use a raycaster that moves along the segments in the curve path checking collision within the distance between them.

![](/images/blog/teleport-component/raycasters.jpg)

If the raycaster detects a collision, an entity will be placed at the target destination where the user will be teleported. If you don't provide an entity, the component will create a cylinder with a gradient texture. When the user releases the button, the user (camera and controllers) will be teleported to the destination point.

Here's the pseudocode that showing how the curve painting and collision flow works:

```javascript
lastPoint = p0;
hitPoint = null;
hit = false;
for (i = 0 to numCurvePoints) {
  // Get the next point on the curve.
  nextPoint = parabolicCurve(p0, v0, a, i);

  // Add it to the curve mesh.
  curve.addPoint(i, nextPoint);

  // Set up raycaster between next and previous point and run hit test.
  raycaster.setFromSegment(lastPoint, nextPoint);
  hitPoint = raycaster.intersect(collisionEntity)
  if (hitPoint && validCollision(hitPoint)) {
    hit = true;
    break;
  }
}
```

To prevent the user from teleporting over steep surfaces like walls, we used the `validCollision()` function. `validCollision()` will check if the angle between the face normal where the raycaster hit and the default ground normal (defined by the user and defaults to `UP=(0, 1, 0)`) is under a defined max angle.

![](/images/blog/teleport-component/landing-normal.png)

![](/images/blog/teleport-component/demo-mesh.gif)

## Using Events

The teleport component depends on the [tracked-controls component](https://aframe.io/docs/0.3.0/components/tracked-controls.html) to handle the controller position, orientation, and button events. The default button to activate the teleport is the thumbpad so we added listeners for two buttons events:

- **thumbpadDown** will activate and make the teleportation curve (which is generated on each `tick`) visible.
- **thumbpadUp** will calculate the new position for the camera and do the teleportation if intersecting with a collidable entity.

The teleport component will also emit a `teleported` event that contains the `oldCamPosition`, `newCamPosition`, and `hitPoint` every time the user teleports.

## Customizing with Properties

The teleport component has several properties to customize its appearance and behavior:

- **type:** Type of teleportation, `line` or `parabolic`.
- **button:** Which button to press to teleport.
- **collisionEntity:** Selector of the mesh used to check for collisions. If no value provided, the plane `Y=0` is used.
- **hitEntity:** Entity to show at the intersection point of the target destination. If none is provided, a cylinder is used.
- **hitCylinderColor:** Color used for the default `hitEntity` primitives.
- **hitCylinderRadius:** Radius used for the default `hitEntity` primitives.
- **curveHitColor:** Color used when the curve is intersecting a collidable entity.
- **curveMissColor:** Color used when the curve is not intersecting a collidable entity.
- **curveNumberPoints:** Number of points used in the curve.
- **curveLineWidth:** Line width of the curve.
- **curveShootingSpeed:** Curve shooting speed. The bigger the value, the farther the distance.
- **maxLength:** Max length of the ray when using `type: line` teleportation.
- **landingNormal:** Normal vector to detect collisions with the `collisionEntity`.
- **landingMaxAngle:** Angle threshold (in degrees) used together with `landingNormal` to detect the maximum steepness of a surface that can be teleported to.

![](/images/blog/teleport-component/customize.gif)

## Using the Teleport Component in Your Experience

![](/images/blog/teleport-component/existing-demos.gif)

Using the component in an already existing experience is straightforward. Just include a `<script>` tag to the url of the component:

```html
<script src="https://unpkg.com/aframe-teleport-controls/dist/aframe-teleport-controls.min.js"
```

Then plug in the `teleport` component to your controller entities. For example, here's an example adding the teleport component to both hands in [A-Painter](https://aframe.io/a-painter):

```html
<a-entity id="left-hand"
  brush
  paint-controls="hand: left"
  ui
  teleport-controls>
</a-entity>
<a-entity id="right-hand"
  brush
  paint-controls="hand: right"
  ui
  teleport-controls>
</a-entity>
```

![](/images/blog/teleport-component/apainter-teleport.png)

### From the Inspector

You can also use the inspector to install the teleport component to an existing scene:

- Press `<ctrl> + <alt> + i` within an A-Frame scene running in the browser to launch the [Inspector](https://github.com/aframevr/aframe-inspector).
- Select your controllers entities from the Scene Graph.
- Go to the right-hand entity panel and add the `teleport-controls` component from  `Add Component`.
- Hit `Esc` to go back to scene.
- Enjoy teleporting around the scene!

![](/images/blog/teleport-component/inspector.png)

## Perhaps We Could...

Some possible ideas and features:

- Add an effects when performing the teleportation. Something like a simple fade in and out would work.
- Define the minimum time between teleportations.
- Let the user jump to every kind of surface without testing the normals. For example, teleport to the roof, and orientate the camera accordingly.

Please feel free to contribute with ideas, code, or issues at https://github.com/fernandojsg/aframe-teleport-controls.
