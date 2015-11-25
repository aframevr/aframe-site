---
title: Getting Started
type: guide
order: 1
---

Let's start with a quick tour of A-Frame. If you are more interested in a high-level overview first, check out this [blog post](http://mozvr.com/posts/).

The easiest way to try out A-Frame is using the __[cubes example scene on CodePen](http://codepen.io/team/mozvr/pen/6e013bf4b446e85d8f268e937ee09143?editors=100)__. Feel free to open it in another tab and follow along as we go through some basic examples. If you prefer downloading / installing from a package manager, check out the [[Installation|Installation]] page.

## Simple Cube

```html
<a-scene>
 <a-cube
    width="10"
    height="10"
    depth="10"
    color="#167341"
    position="0 0 -20"
    rotation="45 30 0">
  </a-cube>
</a-scene>
```

{% raw %}
<iframe src="http://localhost:9000/examples/cube/" frameborder="0" scrolling="0" allowfullscreen="yes" width="100%" height="400"></iframe>
{% endraw %}

## Fancy Cubes

```html
<a-scene>
 <a-cube
    width="10"
    height="10"
    depth="10"
    color="#167341"
    position="0 0 -20"
    rotation="45 30 0">
  </a-cube>
</a-scene>
```

{% raw %}
<iframe src="http://localhost:9000/examples/cubes/" frameborder="0" scrolling="0" allowfullscreen="yes" width="100%" height="400"></iframe>
{% endraw %}
