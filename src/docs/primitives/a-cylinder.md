---
title: a-cylinder
type: primitives
layout: docs
parent_section: primitives
---

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-cylinder.html)

## Attributes

| Attribute Name    | Description         | Type    | Default Value | Units                  | Required |
|-------------------|---------------------|---------|--------------:|------------------------|----------|
| `radius`          | radius of the cylinder at the top *and* bottom | float | `0.5` | meters | no |
| `radius-top`      | radius of the cylinder at the top | float | `0.5` | meters | no |
| `radius-bottom`   | radius of the cylinder at the bottom | float | `0.5` | meters | no |
| `height`          | height of the cylinder | float | `1` | meters  | no |
| `segments-radius` | number of segmented faces around the circumference of the cylinder | float | `36` | meters | no
| `segments-height` | number of rows of faces along the height of the cylinder | float | `4` | meters                 | no |
| `theta-start` | start angle for first segment | float | `0` | radians | no |
| `theta-length` | the central angle (theta) of the circular sector | float | `6.3` <br> (≈ 𝛑/2) | radians                 | no |
| `open-ended` | whether the ends of the cylinder are open or capped | boolean | `false` | `true` for open; `false` for capped | no |
| `color`           | color               | string  | `gray`        | named color/hex        | no       |
| `opacity`         | opacity             | float   | `1.0`         | factor (`0.0` - `1.0`) | no       |
| `receive-light`   | `true` for basic material; `false` for PBR | boolean | `true` | `true`/`false` | no |
| `transparent`     | transparent         | boolean | `true`        | `true`/`false`         | no (`true` if `opacity < 1.0 and receiveLight`) |
| `metalness`       | metalness           | float   | `0.0`         | factor (`0.0` - `1.0`) | no       |
| `roughness`       | roughness           | float   | `0.5`         | factor (`0.0` - `1.0`) | no       |
| `src`             | URL to image        | string  |               | absolute/relative URL  | no       |

## Examples

To create a simple, closed gray cylinder with a 0.5-meter radius:

```html
<a-cylinder></a-cylinder>
```

Let's get fancy and create some cool cylinders:

```html
<!-- a red hexagon -->
<a-cylinder position="-4 0 -6" rotation="90 -90 20" radius="2" segments-radius="8" color="red"></a-cylinder>

<!-- a green pipe -->
<a-cylinder position="0 0 -6" rotation="-80 15 -20" height="5" open-ended="true" color="green"></a-cylinder>

<!-- a metallic-looking blue cylinder -->
<a-cylinder position="4 0 -6" rotation="45 -45 0" radius="2" height="1" color="blue" metalness="0.9"></a-cylinder>
```

[View examples](https://aframevr.github.io/aframe/examples/cylinders/)
