---
title: a-image
type: primitives
layout: docs
parent_section: primitives
order: 6
---

The image primitive wraps an entity that features the geometry component with a
plane primitive and the material component with transparency and a texture.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-image.html)

| Attribute | Component Mapping | Default Value  |
| --------- | ----------------- | -------------- |
| height    | geometry.height   | 2              |
| width     | geometry.width    | 2              |
| opacity   | material.opacity  | 1.0            |
| src       | material.src      | None           |

## Examples

Image with an inline URL:

```html
<a-image src="https://aframevr.github.io/aframe-core/examples/_images/pano/louvre.jpg"></a-image>
```

Image using an existing `<img>` element:

```html
<a-assets>
  <img id="louvre" src="https://aframevr.github.io/aframe-core/examples/_images/pano/louvre.jpg">
</a-assets>

<a-scene>
  <a-image src="#louvre"></a-image>
</a-scene>
```
