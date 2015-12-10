---
title: a-cube
type: primitives
layout: docs
parent_section: primitives
---

The cube primitive wraps an entity that features the geometry component with a
box primitive.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-cube.html)

| Attribute   | Component Mapping    | Default Value  |
|-------------|----------------------|----------------|
| color       | material.color       | gray           |
| depth       | geometry.depth       | 5              |
| height      | geometry.height      | 5              |
| metalness   | material.metalness   | 0.5            |
| opacity     | material.opacity     | 1              |
| roughness   | material.roughness   | 0.5            |
| shader      | material.shader      | standard       |
| transparent | material.transparent | true           |
| translate   | geometry.translate   | 0 0 0          |
| src         | material.src         | None           |
| width       | geometry.width       | 5              |

## Examples

[View an example](https://aframevr.github.io/aframe/examples/cubes/)

A simple gray cube:

```html
<a-cube></a-cube>
```

A textured cube containing a small blue cube:

```html
<a-cube rotation="0 45 0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trefoil_knot_left.svg/2000px-Trefoil_knot_left.svg.png" opacity="0.5">
  <a-cube class="cube" rotation="0 45 0" scale="0.5 0.5 0.5" color="blue"></a-cube>
</a-cube>
```
