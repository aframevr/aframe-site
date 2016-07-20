---
title: FAQ
type: faq
layout: page
toc: true
---

## What is A-Frame?

A-Frame is an open-source framework for easily creating WebVR experiences with HTML. It is designed and maintained by the Mozilla VR team ([MozVR][mozvr]). A-Frame wraps [three.js][three] and WebGL in HTML custom elements. This enables web developers, designers, and artists to create 3D/VR scenes without having to learn WebGL's complex low-level API. Because WebGL is ubiquitous in modern browsers on desktop and mobile, A-Frame experiences work across desktop, iOS, Android, and [Oculus Rift][oculus] headsets.

A-Frame features a smooth learning curve between beginner ease of use and advanced developer flexibility. Beginners start with easily understood primitives like cubes, videos, models, and skies. Advanced users can use JavaScript to imperatively create interactive scenes or dive into its underlying [entity-component-system pattern][ecs], a design pattern popular in the game industry that favors composition over inheritance. Because A-Frame is built around building blocks that can be extended and combined into limitless combinations, it provides a high degree of creative freedom. And being just an abstraction layer, A-Frame is capable of doing anything that [three.js][three] can.

## Why was A-Frame created?

We felt WebVR development was too difficult and sought tools that would make it faster, easier, and more enjoyable. Over the course of 2015, the MozVR team was creating many WebVR experiments with [three.js][three]. To speed up workflows, we began to experiment with custom elements wrapping three.js. In creating these tools, we drew inspiration from both existing declarative 3D/VR tools (e.g., [JanusVR][janus], [GLAM][glam], [SceneVR][scene]), and from game development best practices. As the tools matured, we felt that they might be able to address what we felt were gaps in the market, particularly around ease of use and webbiness. We envisioned A-Frame as having the following:

- The power of three.js and WebGL
- The accessibility of markup
- Support for modern web browsers on desktop, mobile, and the Oculus Rift
- A strong emphasis on virtual reality
- A smooth learning curve between beginners and experts
- Underlying modularity and extensibility
- Familiarity to non-WebGL web developers possibly with little 3D experience

Our hope is that A-Frame provides a constructive contribution to a growing pantheon of WebVR development tools, helping to grow the number of VR web developers and experiences.

## How is A-Frame different from VRML?

A-Frame is a JavaScript framework and not a web standard. It is built on top of WebGL which is widely supported on modern browsers for desktop and mobile devices. That means it works for developers and users *today*. This is in contrast to the old approach to implementing new functionality in the web platform; the proposal, ratification, and implementation of new web standards proved to be a multi-year process with no guarantee of a successful outcome.

A-Frame embodies the [Extensible Web][extensible] approach to evolving the web platform: "instead of taking years to draft and ship web standards that people might not even want, ship new ideas early and often as JavaScript libraries/frameworks built atop low-level enabling APIs (such as WebGL), let them battle it out in the market, and *then* look at standardization of the winners."

Technically, A-Frame is notable for its extensibility. Whereas 3DML and VRML predecessors exposed only a curated subset of features with limited functionality, A-Frame is built on an [entity-component-system pattern][ecs] allowing developers to use and share modules and features backed by the power of three.js and WebGL. It was designed by web developers for web developers with a hope to grow an open-source ecosystem of community-created components, shaders, tools, assets, etc.

## How can I get started?

See our [guide][guide] for in-depth instructions that will show several ways to quickly get started with A-Frame.

## Does A-Frame support X feature?

A-Frame ships with only so many standard components and primitives. However being based on top of an [entity-component-system pattern][ecs], A-Frame is highly extensible and modular. If a feature doesn't exist, just [write a component for it][writecomponent]! Or if one of the standard components is too limiting, [fork it][fork]!

Check out what the ecosystem has come up with on [awesome-aframe's collection of components][awesomecomponents].

## Is anyone working on Leap Motion support?

Many people and groups have expressed interest in creating a [Leap Motion][leapmotion] [component][writecomponent]. Nothing has been published yet.

## Does A-Frame support X library or framework?

Most likely, yes. A-Frame's interface is through the standard HTML and DOM APIs, so there should be little reason why it shouldn't. We've found A-Frame works wonderfully with:

- [React][aframe-react]
- [D3.js][d3]
- [Handlebars/Mustache/Nunjucks/Jade][template]
- [Popmotion Role][popmotion]

## Why does my video not play on mobile?

Mobile browsers have limitations with displaying inline video.

Because of an [iOS platform restriction](https://developer.apple.com/library/iad/documentation/UserExperience/Conceptual/iAdJSProgGuide/PlayingVideosinAds/PlayingVideosinAds.html) in order to get inline video (with or without autoplay), we must:

- Set the `<meta name="apple-mobile-web-app-capable" content="yes">` metatag.
- Set the `webkit-playsinline` attribute to the video element.
- Pin the webpage to the iOS homescreen.

On certain Android devices or browsers, we must:

- Require user interaction to trigger the video (such as a click or tap event).

These issues are filed on [GitHub][videoissue]. We plan on improving the user experience by providing:

- Instructions and UI to the user the necessary steps to get mobile video playing (pin-to-homescreen, tap).
- Out-of-the-box components for routing user-triggered events in order to play videos.

## Can I render YouTube videos as a texture?

With some manual effort, you could either proxy YouTube videos as a texture or download them locally to serve, but that is against their terms of service.

## How do I display `<iframe>`s or render HTML in A-Frame?

Currently as a limitation of the browser, `<iframe>`s can not be displayed within A-Frame, used as a texture, or be mixed with WebGL or WebVR. While it is possible to [overlay an iframe on top of the scene](http://learningthreejs.com/blog/2013/04/30/closing-the-gap-between-html-and-webgl/), it won't display properly in stereoscopic mode (VR) with proper distortion, and it won't be properly shaded. There may be browser features in the future that will help enable this.

To render HTML as a texture in A-Frame, it is not as easy as dropping HTML into `<a-scene>`. Solutions involve painting to a `<canvas>` and using the canvas as texture. The A-Frame community has shared some components for this:

- [HTML Texture Component][htmltexturecomponent] by [SceneVR][scene]
- [Draw Component][drawcomponent]

## How do I display text in A-Frame?

Standard text support for A-Frame is coming shortly. We have been focusing on the core foundations of the API and have yet to ramp up on features. In the meantime, the A-Frame community has shared some components for rendering text:

- [Text Geometry Component][textgeometrycomponent]
- [Text Wrap Component][textwrapcomponent]

Alternatively, you can save text to an image using a visual program, and just use the image.

## Why does my asset (e.g., image, video, model) not loading?

If you are loading the asset from a different domain, you will need [cross-origin resource sharing (CORS) headers][cors] set on the asset. Else we have to serve the asset on the same domain as the A-Frame site. For some options, all resources hosted on [GitHub Pages][ghpages] are served with CORS headers. We highly recommend GitHub Pages as a simple deployment platform. Alternatively, you could also upload assets using the [A-Frame + Uploadcare Uploader][uploader], a service that will help serve our assets CORS'd.

Given that CORS headers are set, if fetching a texture from a different origin or domain such as from an image hosting service or a CDN, then we should specify the `crossorigin` attribute on the `<img>`, `<video>`, or `<canvas>` element used to create a texture. [CORS][cors] security mechanisms in the browser generally disallow reading raw data from media elements from other domains if not explicitly allowed.

## Which devices and platforms does A-Frame support?

A-Frame supports the [Oculus Rift][riftspec] and modern smartphones using [Cardboard holders][cardboard]. A-Frame also works on desktop computers as a normal 3D experience. A-Frame's device support is built on the [WebVR API][webvrspec] and the [WebVR Polyfill][webvrpolyfill]. As the WebVR API and Polyfill mature and as WebVR-enabled browsers add support for additional devices like the [HTC Vive][vive], A-Frame will keep up-to-date to support those devices.

## Which mobile devices does A-Frame support?

On mobile, A-Frame works best on modern smartphones running iOS and Android. We recommend higher-end smartphones within the last two generations (e.g., iPhone 6 and higher, Samsung Galaxy S6 and higher). We don't guarantee support on tablet devices.

## How can I share my work?

There are several community channels available for sharing experiences built with A-Frame:

- Share with the community on the [A-Frame Slack channel][slack]
- Feature it on the [A-Frame Blog][blog]
- Add it to the collection on the [awesome-aframe repository][awesome]
- Share with the greater community on the [WebVR Slack channel][slackwebvr]
- Post it on the [WebVR subreddit][redditwebvr]

## How can I get in touch with the A-Frame team?

We are an extremely responsive and helpful bunch. You can reach us via:

- [A-Frame Slack channel][slack]
- Twitter [@aframevr][twitter]
- GitHub by filing issues against the [A-Frame GitHub repo][github].

We love questions, feedback, bug reports, and pull requests!

## How do I improve performance?

Virtual reality is a new and performance-intensive technology. The right combination of hardware and software settings can make the difference between presence and nausea:

- For the Oculus Rift, we recommend using a Windows PC that meets the recommended specs of the [Oculus Rift CV1][riftspec] (consumer version) including a GeForce GTX 970. Unfortunately, OS X is not recommended for consuming content with the Oculus Rift. Oculus froze Mac and Linux SDK development in the summer of 2015, and while the 0.5.0.1 SDK is still currently available from their [developer site][oculusdev], newer versions of OS X are beginning to break support for the Rift DK2. We still use the 0.5.0.1 with our Macs on the MozVR team, but only during development, to test basics of tracking and scene composition. For actually consuming VR experiences, we use Windows PCs and iOS/Android mobile phones.
- On mobile, the faster the phone the better. We recommend higher-end smartphones within the last two generations (e.g., iPhone 6 and higher, Samsung Galaxy S6 and higher).

A-Frame is a young framework with several known opportunities for performance improvements. Steadily improving performance and addressing bugs is an ongoing high priority for the development team. If you find bugs or performance improvement opportunities, please file [issues][ghissue] and [pull requests][ghpull]!

## Where can I find assets?

In general, [awesome-stock-resources][awesomestock] is a great collection of free assets.

For 3D models, also check out:

- [Clara.io][clara]
- [Sketchup's 3D Warehouse][sketchup]
- [Archive3D][archive3d]
- [TurboSquid][turbosquid]

## Can I add links to my scene?

At time of writing, the [new WebVR API][webvrhacks] is currently rolling out. Once that stabilizes, A-Frame will support link traversal in VR. In the interim, developers are encouraged to design experiences as self-contained single-page web applications.

The previous WebVR API that A-Frame was initially built on did not support traversal of domains within virtual reality. Due to restrictions in the underlying [`requestFullScreen` API][requestfs] that the WebVR API is built on, the browser drops out of VR display mode when leaving one domain for another. At the moment, Firefox Nightly is still using this WebVR API.

## Is there a feature roadmap?

Short-term and long-term goals, as well as overall project goals, are posted within the [AFrame Roadmap](https://github.com/aframevr/aframe/blob/master/ROADMAP.md).

We use [GitHub issues on the A-Frame repo][ghissue] to track feature requests and bugs. Please file new requests for things you would like to see, or bugs that you would like fixed!

## Do I call it "A-Frame" or "aframe" or "aframevr"?

Call it A-Frame.

We express it in code and domains as "aframe" as much as possible. Sometimes we cannot get "aframe" and have to resort to "aframevr". The site is at [aframe.io](https://aframe.io/) while the GitHub organization is [github.com/aframevr](https://github.com/aframevr/). We're not thrilled about this inconsistency, but it's something we accept begrudgingly. Sorry for any confusion!

## Why aren't my transparent images rendering correctly?

Transparency is tricky in 3D graphics. If you are having issues where transparent images in the foreground do not composite correctly over images in the background, it is probably due to underlying design of the OpenGL compositor (which WebGL is an API for). In an ideal scenario, transparency in A-Frame would "just work", regardless of where the developer places an image in 3D space, or in which order they define the elements in markup. In the current version of A-Frame, however, it is easy to create scenarios where foreground images occlude background images. This creates confusion and unwanted visual defects. A possible workaround is to try reordering your elements defined in HTML and see if that produces more expected results.

Take a look at this [example](http://codepen.io/bryik/pen/pyMoGb). Here we have two sets of identical transparent circles. One set is positioned front-to-back while the other is back-to-front. Notice that the circles are only transparent when positioned back-to-front (relative to the camera).

[aframe-react]: https://github.com/ngokevin/aframe-react
[archive3d]: http://archive3d.net/
[awesome]: https://github.com/aframevr/awesome-aframe
[awesomecomponents]: https://github.com/aframevr/awesome-aframe#components
[awesomestock]: https://github.com/neutraltone/awesome-stock-resources
[cardboard]: https://www.google.com/get/cardboard/
[blog]: https://aframe.io/blog/
[clara]: http://clara.io
[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[d3]: https://www.youtube.com/watch?v=Tb2b5nFmmsM
[drawcomponent]: https://github.com/maxkrieger/aframe-draw-component
[ecs]: ../docs/core
[extensible]: https://extensiblewebmanifesto.org/
[fork]: https://github.com/aframevr/aframe/tree/master/src/components
[ghissue]: https://github.com/aframevr/aframe/issues
[ghpages]: https://pages.github.com/
[ghpull]: https://github.com/aframevr/aframe/pulls
[github]: http://github.com/aframevr/aframe
[glam]: https://github.com/tparisi/glam
[guide]: ../docs/guide
[htmltexturecomponent]: https://github.com/scenevr/htmltexture-component
[leapmotion]: https://www.leapmotion.com/
[janus]: http://www.janusvr.com/
[mediael]: https://developer.mozilla.org/docs/Web/API/HTMLMediaElement
[mozvr]: http://mozvr.com
[oculus]: https://www.oculus.com/
[oculusdev]: https://developer.oculus.com/downloads/
[overlayiframe]: http://learningthreejs.com/blog/2013/04/30/closing-the-gap-between-html-and-webgl/
[popmotion]: https://github.com/Popmotion/aframe-role
[redditwebvr]: https://www.reddit.com/r/webvr
[requestfs]: https://developer.mozilla.org/docs/Web/API/Element/requestFullScreen
[riftspec]: https://www.oculus.com/en-us/blog/powering-the-rift/
[scene]: http://scenevr.com/
[sketchup]: https://3dwarehouse.sketchup.com/
[slack]: https://aframevr-slack.herokuapp.com/
[slackwebvr]: https://webvr-slack.herokuapp.com/
[template]: https://github.com/ngokevin/aframe-template-component
[textgeometrycomponent]: https://github.com/ngokevin/aframe-text-component
[textwrapcomponent]: https://github.com/maxkrieger/aframe-textwrap-component
[three]: http://threejs.org
[turbosquid]: http://www.turbosquid.com/Search/3D-Models/free
[twitter]: https://twitter.com/aframevr
[uploader]: https://aframe.io/aframe/examples/_uploader/
[videoissue]: https://github.com/aframevr/aframe/issues/316
[vive]: http://www.htcvive.com/us/
[webvrhacks]: https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/
[webvrpolyfill]: https://github.com/borismus/webvr-polyfill
[webvrspec]: https://github.com/MozVR/webvr-spec
[writecomponent]: ../docs/core/component.html
