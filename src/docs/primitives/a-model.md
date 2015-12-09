---
title: a-model
type: primitives
layout: docs
parent_section: primitives
---

A model is an 3D model object (`.obj`) or Collada model object (`.dae`).

[View on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-model.html)

## Attributes

| Attribute Name  | Description         | Type    | Default Value | Units                       | Required |
|-----------------|---------------------|---------|--------------:|-----------------------------|----------|
| `opacity`       | opacity             | float   | `1.0`         | factor (`0.0` - `1.0`)      | no       |
| `format`        | format of model     | string  | `collada`     | format (`obj` or `collada`) | no       |
| `src`           | URL to model        | string  |               | absolute/relative URL       | __yes__  |

## Examples

To create a model from a URL:

```html
<a-model src="https://aframevr.github.io/aframe/examples/_models/tree1/tree1.dae"></a-model>
```
