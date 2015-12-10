---
title: a-model
type: primitives
layout: docs
parent_section: primitives
---

The model primitive wraps an entity with the loader (model) component.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-model.html)

| Attribute | Component Mapping | Default Value |
| --------- | ----------------- | ------------- |
| format    | loader.format     | collada       |
| opacity   | loader.opacity    | 1.0           |
| src       | loader.src        | None          |

## Examples

A model pointing to a tree model:

```html
<a-model src="https://aframevr.github.io/aframe/examples/_models/tree1/tree1.dae"></a-model>
```
