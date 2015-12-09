---
title: a-cube
type: primitives
layout: docs
parent_section: primitives
---

Cubes are simply 3D objects with a box primitive.

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-cube.html)

## Attributes

| Attribute Name  | Description         | Type    | Default Value | Units                  | Required |
|-----------------|---------------------|---------|--------------:|------------------------|----------|
| `width`         | width               | float   | `5`           | meters                 | no       |
| `height`        | height              | float   | `5`           | meters                 | no       |
| `depth`         | depth               | float   | `5`           | meters                 | no       |
| `color`         | color               | string  | `gray`        | named color/hex        | no       |
| `opacity`       | opacity             | float   | `1.0`         | factor (`0.0` - `1.0`) | no       |
| `receive-light` | `true` for basic material; `false` for PBR | boolean | `true` | `true`/`false` | no |
| `transparent`   | transparent         | boolean | `true`        | `true`/`false`         | no (`true` if `opacity < 1.0 and receiveLight`) |
| `metalness`     | metalness           | float   | `0.0`         | factor (`0.0` - `1.0`) | no       |
| `roughness`     | roughness           | float   | `0.5`         | factor (`0.0` - `1.0`) | no       |
| `src`           | URL to image        | string  |               | absolute/relative URL  | no       |

## Examples

To create a simple gray 5&times;5&times;5 cube:

```html
<a-cube></a-cube>
```

Let's get fancy and create a textured cube with a small blue cube inside it:

```html
<a-cube rotation="0 45 0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Trefoil_knot_left.svg/2000px-Trefoil_knot_left.svg.png" opacity="0.5">
  <a-cube class="cube" rotation="0 45 0" scale="0.5 0.5 0.5" color="blue"></a-cube>
</a-cube>
```

[View examples](https://aframevr.github.io/aframe/examples/cubes/)
