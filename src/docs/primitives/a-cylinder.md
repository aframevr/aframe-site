---
title: a-cylinder
type: primitives
layout: docs
parent_section: primitives
order: 5
---

The cylinder primitive wraps an entity that features the geometry component with a
cylinder primitive.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-cylinder.html)

| Attribute           | Component Mapping                                                  | Default Value  |
| ------------------- | ------------------------------------------------------------------ | -------------- |
| color               | material.color                                                     | gray           |
| height              | geometry.height                                                    | 1              |
| metalness           | material.metalness                                                 | 0.0            |
| opacity             | material.opacity                                                   | 1.0            |
| open-ended          | geometry.openEnded                                                 | false          |
| radius              | geometry.radius                                                    | 0.5            |
| radius-bottom       | geometry.radiusBottom                                              | 0.5            |
| radius-top          | geometry.radiusTop                                                 | 0.5            |
| roughness           | material.roughness                                                 | 0.5            |
| segments-height     | geometry.segmentsHeight                                            | 4              |
| segments-radius     | geometry.segmentsRadius                                            | 36             |
| shader              | material.shader                                                    | standard       |
| src                 | material.src                                                       | None           |
| theta-length        | geometry.thetaLength                                               | 360            |
| theta-start         | geometry.thetaStart                                                | 0              |
| transparent         | material.transparent                                               | true           |

## Examples

[View an example](https://aframevr.github.io/aframe/examples/cylinders/)

Simple closed gray cylinder:

```html
<a-cylinder></a-cylinder>
```

Cool shapes using cylinders:

```html
<!-- A red hexagon. -->
<a-cylinder position="-4 0 -6" rotation="90 -90 20" radius="2" segments-radius="8" color="red"></a-cylinder>

<!-- A green pipe. -->
<a-cylinder position="0 0 -6" rotation="-80 15 -20" height="5" open-ended="true" color="green"></a-cylinder>

<!-- A metallic blue cylinder. -->
<a-cylinder position="4 0 -6" rotation="45 -45 0" radius="2" height="1" color="blue" metalness="0.9"></a-cylinder>
```
