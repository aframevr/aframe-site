---
title: <a-model>
type: primitives
layout: docs
parent_section: primitives
order: 8
---

The model primitive makes it easy to add OBJ or DAE (Collada) 3D models to a scene. Loaded models include textures, but do not include animations in the current version of A-Frame. The model primitive wraps an entity that contains a loader component.

| Attribute | Default Value | Component Mapping |
| --------- | ------------- | ----------------- |
| format    | collada       | loader.format     |
| opacity   | 1.0           | loader.opacity    |
| src       | None          | loader.src        |

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-model.html)

## Examples

A tree model:

```html
<a-model src="https://aframe.io/aframe/examples/_models/tree1/tree1.dae"></a-model>
```

Using scale to increase to size of the loaded tree model:

```html
<a-model scale="10 10 10" src="https://aframe.io/aframe/examples/_models/tree1/tree1.dae"></a-model>
```

Loading an obj formatted file:

```html
<a-model src="https://aframe.io/aframe/examples/_models/tree.obj" format="obj"></a-model>
```
