---
title: a-sky
type: primitives
layout: docs
parent_section: primitives
order: 10
---

The sky primitive wraps an entity featuring the geometry component with a
sphere primitive with a large radius and the scale component inverted on the
Z-axis.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-sky/index.html)

| Attribute       | Component Mapping       | Default Value |
| ---------       | -----------------       | ------------- |
| color           | material.color          | white         |
| radius          | geometry.radius         | 5000          |
| segments-height | geometry.segmentsHeight | 64            |
| segments-width  | geometry.segmentsWidth  | 64            |
| src             | material.src            | None          |

## Examples

A basic sky:

```html
<a-sky src="sky.png"></a-sky>
```

[View examples](https://aframevr.github.io/aframe/examples/)
