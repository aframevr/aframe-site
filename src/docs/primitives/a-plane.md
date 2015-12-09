---
title: a-plane
type: primitives
layout: docs
parent_section: primitives
---

Plainly put, a plane is a flat, two-dimensional surface.

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-camera.html)

## Attributes

| Attribute Name  | Description         | Type    | Default Value | Units                  | Required |
|-----------------|---------------------|---------|--------------:|------------------------|----------|
| `width`         | width               | float   | `1`           | meters                 | no       |
| `height`        | height              | float   | `1`           | meters                 | no       |
| `color`         | color               | string  | `gray`        | named color/hex        | no       |
| `opacity`       | opacity             | float   | `1.0`         | factor (`0.0` - `1.0`) | no       |
| `receive-light` | `true` for basic material; `false` for PBR | boolean | `true` | `true`/`false` | no |
| `transparent`   | transparent         | boolean | `true`        | `true`/`false`         | no (`true` if `opacity < 1.0 and receiveLight`) |
| `metalness`     | metalness           | float   | `0.0`         | factor (`0.0` - `1.0`) | no       |
| `roughness`     | roughness           | float   | `0.5`         | factor (`0.0` - `1.0`) | no       |
| `src`           | URL to image        | string  |               | absolute/relative URL  | no       |

## Examples

To create a simple green plane:

```html
<vr-plane rotation="0 -45 10" height="10" color="green"></vr-plane>
```
