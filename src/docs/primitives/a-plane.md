---
title: a-plane
type: primitives
layout: docs
parent_section: primitives
---

The plane primitive wraps an entity with the geometry component with a plane
primitive.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-camera.html)

| Attribute   | Component Mapping    | Default Value |
| ---------   | -----------------    | ------------- |
| color       | material.color       | gray          |
| height      | geometry.height      | 1             |
| metalness   | material.metalness   | 0.0           |
| opacity     | material.opacity     | 1.0           |
| roughness   | material.roughness   | 0.5           |
| shader      | material.shader      | standard      |
| src         | material.src         | None          |
| translate   | geometry.translate   | None          |
| transparent | geometry.transparent | None          |
| width       | material.width       | 1             |

## Examples

A green plane:

```html
<a-plane rotation="0 -45 10" height="10" color="green"></a-plane>
```
