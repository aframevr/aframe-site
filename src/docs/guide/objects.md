---
title: Adding objects
type: guide
layout: docs
parent_section: guide
order: 3
show_guide: true
---

A-Frame comes with easy-to-use primitives for things like videos, models, images, and geometries. For example:

* `<a-cube>`
* `<a-plane>`
* `<a-sphere>`
* `<a-image>`
* `<a-sky>`

The full list is in the [Primitives documentation](../../docs/primitives/).

Each primitive has unique attributes. We can specify the width, depth, and height of a cube, for example, or the source of a 3D model:

* `<a-cube width="4" depth="2" height="20"></a-cube>`
* `<a-model src="tree.dae" scale="1 1 1"></a-model>`
* `<a-cylinder radius="5" open-ended="true"></a-cylinder>`
* `<a-videosphere src="sunset.mp4" autoplay="true"></a-videosphere>`

Primitives are convenient wrappers around A-Frame's underlying Entity/Component architecture. Components include geometry, materials, raycaster, controls, and more. To start working with entities and components, see the [Entity/Component documentation](../../docs/entities-and-components/).
