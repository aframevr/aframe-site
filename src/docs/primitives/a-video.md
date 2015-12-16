---
title: a-video
type: primitives
layout: docs
parent_section: primitives
order: 12
---

The video primitive wraps an entity featuring the geometry component with a
plane primitive and the material component with a video texture.

[View primitive definition](https://github.com/aframevr/aframe/blob/master/elements/templates/a-video.html)

| Attribute       | Component Mapping       | Default Value |
| ---------       | -----------------       | ------------- |
| autoplay        | `<video>`.autoplay      | true          |
| crossOrigin     | `<video>`.crossOrigin   | anonymous     |
| height          | geometry.height         | 2             |
| loop            | `<video>`.loop          | true          |
| segments-height | geometry.segmentsHeight | 64            |
| segments-width  | geometry.segmentsWidth  | 64            |
| src             | material.src            | None          |
| translate       | geometry.translate      | 0 0 0         |
| width           | geometry.width          | 4             |

## Examples

A basic video:

```html
<a-video src="penguin-sledding.mp4" height="5" width="10"><a-video>
```
