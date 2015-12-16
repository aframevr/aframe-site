---
title: Camera
section_title: Components
type: components
layout: docs
parent_section: docs
order: 1
section_order: 4
---

The camera component defines from which perspective the user views the scene. It is often paired with control-related components, such as user input which moves and rotates the camera.

```html
<a-entity>
  <a-entity camera look-controls wasd-controls></a-entity>
</a-entity>
```

| Property  | Description                                                                          | Default Value  |
|-----------|--------------------------------------------------------------------------------------|----------------|
| far       | Camera frustum far clipping plane.                                                   | 10000          |
| fov       | Field of view (in degrees).                                                          | 80             |
| near      | Camera frustum near clipping plane.                                                  | 0.5            |
