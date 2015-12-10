---
title: a-curvedimage
type: primitives
layout: docs
parent_section: primitives
---

The curved image primitive wraps an entity that features the geometry component
with a curved cylinder and the material component with a texture.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-curvedimage.html)

| Attribute       | Component Mapping       | Default Value  |
|-----------------|-------------------------|----------------|
| height          | geometry.height         | 1              |
| radius          | geometry.radius         | 2              |
| open-ended      | geometry.openEnded      | false          |
| segments-radius | geometry.segmentsRadius | 48             |
| theta-length    | geometry.thetaLength    | 360            |
| theta-start     | geometry.thetaStart     | 0              |
| transparent     | material.transparent    | true           |
| src             | material.src            | None           |

## Examples

[View an example](https://aframevr.github.io/aframe/examples/showcase-curved-mockups/)

A curved image:

```html
<a-curvedimage open-ended="true" theta-length="180" src="birdman.png"></a-curvedimage>
```
