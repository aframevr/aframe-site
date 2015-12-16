---
title: a-light
type: primitives
layout: docs
parent_section: primitives
order: 7
---

The light primitive wraps an entity featuring the light component.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-light.html)

| Attribute    | Component Mapping | Default Value |
| ---------    | ----------------- | ------------- |
| angle        | light.angle       | 60            |
| color        | light.color       | #fff          |
| ground-color | light.groundColor | #fff          |
| decay        | light.decay       | 1             |
| distance     | light.distance    | 0.0           |
| exponent     | light.exponent    | 10.0          |
| intensity    | light.intensity   | 1.0           |
| type         | light.type        | directional   |

## Examples

Red directional light shining from the top left:

```html
<a-light color="red" position="-1 1 0"></a-light>
```

Point light:

```html
<a-light color="blue" type="point"></a-light>
```
