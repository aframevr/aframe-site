---
title: a-videosphere
type: primitives
layout: docs
parent_section: primitives
order: 13
---

The videosphere primitive wraps an entity featuring the geometry component with
a sphere primitive and the material component with a video texture.

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-videosphere.html)

| Attribute   | Component Mapping     | Default Value |
| ---------   | -----------------     | ------------- |
| autoplay    | `<video>`.autoplay    | true          |
| crossOrigin | `<video>`.crossOrigin | anonymous     |
| height      | geometry.height       | 2             |
| loop        | `<video>`.loop        | true          |
| radius      | geometry.radius       | 5000          |
| src         | material.src          | None          |
| translate   | geometry.translate    | 0 0 0         |

## Examples

A basic videosphere:

```html
<a-videosphere src="antarctica.mp4" radius="1000"><a-videosphere>
```
