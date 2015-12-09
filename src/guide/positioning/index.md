---
title: Positioning
type: guide
order: 3
---

To position an element, you can use position, rotation, and scale.

```html
<a-cube position="0 0 0" rotation="0 0 0" scale="1 1 1"></a-cube>
```

For positions, A-Frame uses the following system:

```
    +y  -z
     |
-x------+x
     |
+z  -y
```

This is called a [right-handed cartesian coordinate system](https://wikipedia.org/wiki/Cartesian_coordinate_system), with Y-axis up.

Distances are defined in meters. It's very important to consider scale when working in virtual reality. If we create a cube that is `height="100"`, for example, we will perceive that it is 100 meters tall when viewed in virtual reality.

Rotations in A-Frame are set in degrees.

```html
<a-cube rotation="180 45 90"></a-rotation>
```
