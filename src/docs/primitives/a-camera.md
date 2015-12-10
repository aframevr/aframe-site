---
title: a-camera
type: primitives
layout: docs
parent_section: primitives
---

The camera primitive wraps an entity that features:

- Camera component
- Cursor component
- Look controls component
- Mouse controls component

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-camera.html)

| Attribute  | Component Mapping | Default Value                          |
|------------|-------------------|----------------------------------------|
| aspect     | camera.aspect     | window.innerWidth / window.innerHeight |
| far        | camera.far        | 10000                                  |
| fov        | camera.fov        | 45                                     |
| locomotion | wasd-controls     | true                                   |
| mouselook  | look-controls     | true                                   |
| near       | camera.near       | 1                                      |

## Examples

A camera with all the defaults:

```html
<a-camera></a-camera>
```

A camera with a 60-degree field-of-view:

```html
<a-camera fov="60"></a-camera>
```

A camera with keyboard controls disabled for sitting experiences:

```html
<a-camera fov="60" mouselook="true" locomotion="false"></a-camera>
```
