---
title: a-camera
type: primitives
layout: docs
parent_section: primitives
---

[View source on GitHub](https://github.com/aframevr/aframe/blob/master/elements/templates/a-camera.html)

## Attributes

| Attribute Name | Description            | Type    | Default Value | Units          | Required |
|----------------|------------------------|---------|--------------:|----------------|----------|
| `fov`          | field-of-view angle    | float   | `45`          | degrees        | no       |
| `near`         | distance of near plane | float   | `1`           | meters         | no       |
| `far`          | distance of far plane  | float   | `10000`       | meters         | no       |
| `aspect`       | aspect ratio           | float   | `window.innerWidth / window.innerHeight` | degrees | no (auto-calculated if omitted) |
| `mouselook`    | mouselook controls     | boolean | `true`        | `true`/`false` | no       |
| `locomotion`   | locomotion controls    | boolean | `true`        | `true`/`false` | no       |

## Examples

Camera with a 45° Field of View and desktop mouse-look controls and WASD keyboard controls for movement:

```html
<a-camera></a-camera>
```

Same as above but with a 65° FOV:

```html
<a-camera fov="60"></a-camera>
```

Same as above but with only desktop mouse-look controls (useful for simple point-and-click experiences)

```html
<a-camera fov="60" mouselook="true" locomotion="false"></a-camera>
```
