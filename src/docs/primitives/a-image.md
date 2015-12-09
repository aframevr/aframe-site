---
title: a-image
type: primitives
layout: docs
parent_section: primitives
---

An image is a transparent plane with an image texture.

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-image.html)

## Attributes

| Attribute Name  | Description         | Type    | Default Value | Units                  | Required |
|-----------------|---------------------|---------|--------------:|------------------------|----------|
| `width`         | width               | float   | `2`           | meters                 | no       |
| `height`        | height              | float   | `2`           | meters                 | no       |
| `opacity`       | opacity             | float   | `1.0`         | factor (`0.0` - `1.0`) | no       |
| `src`           | URL to image        | string  |               | absolute/relative URL  | __yes__  |

## Examples

To create an image from a URL:

```html
<a-image src="https://aframevr.github.io/aframe-core/examples/_images/pano/louvre.jpg"></a-image>
```

You can also create an image from an `<img>` in the document:

```html
<a-assets>
  <img class="louvre" src="https://aframevr.github.io/aframe-core/examples/_images/pano/louvre.jpg">
</a-assets>
<a-scene>
  <a-image src=".louvre"></a-image>
</a-scene>
```
