---
title: a-sphere
type: primitives
layout: docs
parent_section: primitives
---

The sphere primitive wraps an entity that features the geometry component with
a sphere primitive.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-sphere.html)

| Attribute       | Component Mapping       | Default Value |
| ---------       | -----------------       | ------------- |
| color           | material.color          | gray          |
| metalness       | material.metalness      | 0.5           |
| opacity         | material.opacity        | 1             |
| radius          | geometry.radius         | 5             |
| roughness       | material.roughness      | 0.5           |
| segments-height | geometry.segmentsHeight | 36            |
| segments-width  | geometry.segmentsWidth  | 18            |
| shader          | material.shader         | standard      |
| src             | material.src            | None          |
| transparent     | material.transparent    | true          |
| translate       | geometry.translate      | 0 0 0         |

## Examples

Yellow sphere.

```html
<a-sphere color="yellow" radius="5"></a-sphere>
```
