---
title: Introduction
section_title: Primitives
type: primitives
layout: docs
parent_section: docs
order: 0
page_sort_by: title
section_order: 2
---

In computer graphics, primitives are the simplest building blocks. In A-Frame,
primitives are user-friendly building blocks that layer on top of the
entity-component system. Think of them as recipes, they mix together
the right combination of components to achieve an end result, like `<a-image>`.
Under the hood, primitives wrap a single entity into a custom element and map
component attributes to more conventional HTML attributes.

So rather than `<a-entity geometry="primitive: box; width: 5" material="color:
red"`, we can see `<a-cube width="5" color="red">`. We say the geometry
component's width attribute (i.e., `geometry.width`) maps to the HTML `width`
attribute.

A-Frame ships with a handful of primitives with reasonable defaults.  These are
meant to tidy markup and to help ease us into the underlying entity-component
system. Note that while they provide conciseness, they sacrifice some
flexibility and composability compared to the entity-component system directly,
but they are a great starting point. The currently available list of primitives
can be found on the sidebar.

## Using Primitives

Primitives can be used like the HTML elements (or SVG) that most of us are
familiar with.  Take the `<a-cube>` primitive for instance. Let's use them as
literal building blocks and stack them together.

```html
<a-cube color="red" depth="1" height="1" width="1" position="-1 0 0"></a-cube>
<a-cube color="blue" depth="1" height="1" width="1" position="0 1 0"></a-cube>
<a-cube color="green" depth="1" height="1" width="1" position="1 0 0"></a-cube>
```

## Templates

Whereas primitives wrap a single entity, templates package multiple entities or
primitives into a custom element for easy reuse. Take our primitive example
above for example. Let's say we want to wrap that into a single element,
`<a-lot-of-cubes>`. We can wrap them in a template using the `template`
element.

```html
<template is="a-template" element="a-lot-of-cubes">
  <a-cube color="red" depth="1" height="1" width="1" position="-1 0 0"></a-cube>
  <a-cube color="blue" depth="1" height="1" width="1" position="0 1 0"></a-cube>
  <a-cube color="green" depth="1" height="1" width="1" position="1 0 0"></a-cube>
</template>
```

Then we can reuse it multiple times:

```html
<a-lot-of-cubes></a-lot-of-cubes>
<a-lot-of-cubes position="10 0 0"></a-lot-of-cubes>
```

That doesn't offer too much practicality. We can have templates specify
attributes. Let's say we want to allow the ability to scale the size of the
cubes. We can have the template expose parameters and apply templating.

```html
<template is="a-template" element="a-lot-of-cubes" size="1">
  <a-cube color="red" depth="${size}" height="${size}" width="${size}" position="-${size} 0 0"></a-cube>
  <a-cube color="green" depth="${size}" height="${size}" width="${size}" position="-${size} 0 0"></a-cube>
  <a-cube color="blue" depth="${size}" height="${size}" width="${size}" position="-${size} 0 0"></a-cube>
</template>
```

Then we can pass in a `size` attribute which will be passed down to the cubes.

```html
<a-lot-of-cubes size="5"></a-lot-of-cubes>
<a-lot-of-cubes position="10 0 0"></a-lot-of-cubes>
```

## Publishing and Sharing Templates

For now, we can share our templates on the [Awesome
A-Frame](https://github.com/aframevr/awesome-aframe) repository. Just add your
template to the list and make a pull request!

We hope to later create a more formal system for publishing and sharing
templates.
