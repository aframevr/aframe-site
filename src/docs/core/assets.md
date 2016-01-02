---
title: Assets
type: core
layout: docs
parent_section: core
order: 8
---

To keep everything in one place and to later help A-Frame decide what to block on, assets (such as images, videos, and mixins) should be placed in `<a-assets>`. Media files that are defined within their respective tags help the browser cache assets for future loading.

```html
<a-assets>
  <img id="horse" src="...">
  <video id="kentucky-derby" src="..."></video>
  <a-mixin id="giant" scale="5 5 5"></a-mixin>
</a-assets>
```

## Cross-Origin Requests

Disclaimer: loading assets from a different domain requires [cross-origin resrouce sharing headers (CORS headers)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

Per [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing):

> Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.

> The reason we have to set these properties is that, by default, the modern browser checks whether you're allowed to request a resource from a different domain than the one you're running on. When you use Three.js to load a model or a texture, it uses an  XMLHTTPRequest  object to access that resource. Your browser will check for the availability of the correct headers, and since you're requesting a resource from your local system, which doesn't provide the correct headers, an error will oc- cur. Even, though with this recipe, you can circumvent this restriction, it is better to always test with a local web server, since that will most closely resemble how your users will access it online. For more information on CORS, refer to http://www.w3.org/TR/cors/

By default, all resources hosted on [GitHub Pages](https://pages.github.com/) are served with proper, permissive CORS headers (i.e., `Access-Control-Allow-Origin: *`). We highly recommend GitHub Pages as a simple deployment platform. Alternatively, you may upload assets (that are CORS'd and easily consumable) using our [Uploadcare](https://uploadcare.com/) account at https://aframe.io/aframe/examples/_uploader/

If you wish to host your scenes and assets on a separate server, refer to [this guide](http://enable-cors.org/server.html) for instructions.
