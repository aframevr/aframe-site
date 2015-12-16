---
title: FAQ
type: faq
layout: page
---

## What is A-Frame?

A-Frame is an open source framework for easily creating WebVR experiences with HTML. It is designed and maintained by [MozVR](http://mozvr.com/) (Mozilla's virtual reality team research team). A-Frame wraps WebGL in HTML custom elements, enabling web developers to create 3D VR scenes that leverage WebGL's power, without having to learn its complex low-level API. Because WebGL is ubiquitous in modern browsers on desktop and mobile, A-Frame experiences work across desktop, iPhone (Android support coming soon), and Oculus Rift headsets.

A-Frame optimizes for a smooth learning curve between beginner ease of use and advanced user flexibility. Beginners start with easily understood primitives like cubes, videos, models, and skies. Advanced users can use JavaScript to imperatively create dynamic and interactive scenes or dive into its underlying entity-component system, a design pattern popular in the game industry that favors composition over inheritance. Because A-Frame is built around building blocks that can be extended and combined into limitless combinations, it provides a high degree of creative freedom.

## Why did you create it?

We felt WebVR development was too difficult, and sought tools that would make it faster, easier, and more enjoyable. Over the course of 2015 the MozVR team was creating many WebVR experiments with [Three.js](http://threejs.org/). To speed up workflows, we began to experiment with custom elements wrapping WebGL. In creating these tools we drew inspiration from both existing declarative VR tools (e.g., [JanusVR](http://www.janusvr.com/), [GLAM](https://github.com/tparisi/glam), [SceneVR](http://scenevr.com/)), and from game development best practices. As the tools matured, we felt that they might be able to address what we felt were gaps in the market, particularly around ease of use and "webby-ness". We envisioned A-Frame as having the following:

* The power of WebGL
* The accessibility of markup
* Support for modern web browsers on desktop, mobile, and the Oculus Rift
* A strong emphasis on virtual reality
* A smooth learning curve between beginners and experts
* Underlying modularity and extensibility
* Familiarity to non-WebGL web developers

Our hope is that A-Frame provides a constructive contribution to a growing pantheon of WebVR development tools, helping to grow the number of VR web developers and experiences.

## How can I get started?

See our [Guide](../docs/guide) for in-depth instructions. There are several ways to start using A-Frame, including a CDN-hosted version minified JS file, a boilerplate, and an NPM package.

## Which VR devices does A-Frame support?

A-Frame supports the Oculus Rift and mobile phones in "Cardboard"-style holders. A-Frame also works on desktop computers with mouse and keyboard controls. A-Frame's device support is built on the [WebVR API](https://github.com/MozVR/webvr-spec) and the [WebVR Polyfill](https://github.com/borismus/webvr-polyfill). As the WebVR API and Polyfill mature, and as WebVR-enabled browsers add support for additional devices like the HTC Vive, A-Frame will be updated to also support those devices.

## What mobile devices does A-Frame support?

On mobile, A-Frame works best on newer iPhones. Some Android devices can exhibit an error where textures appear black. This is a known issue with A-Frame's texture and lighting implementation, and a top priority to improve. Results will vary from Android device to Android device. A OnePlus One will render textures in black, for example, whereas the Nexus 6 renders the textures correctly.

## How can I share my work?

There are several community channels available for sharing experiences built A-Frame.

* [Made with A-Frame Tumblr](https://aframevr.tumblr.com/)
* [A-Frame Slack](https://aframevr-slack.herokuapp.com/)
* [WebVR Slack](https://webvr-slack.herokuapp.com/)
* [WebVR Reddit](https://www.reddit.com/r/webvr)

## How can I contact the A-Frame team?

We're easiest to reach on the [A-Frame Slack channel](https://aframevr.slack.com/), via Twitter at [@aframevr](https://twitter.com/aframevr), or by filing issues against the A-Frame [GitHub repo](http://github.com/aframevr/aframe). We love questions, feedback, bug reports and pull requests!

## How can I improve performance?

Virtual reality is a new and performance-intensive technology. The right combination of hardware and software settings can make the difference between presence and nausea.

For the Oculus Rift, we recommend using a Windows PC that meets the  recommended specs of the [Oculus Rift CV1](https://www.oculus.com/en-us/blog/powering-the-rift/) (consumer version), including a GeForce GTX 970.

Unfortunately, Macs are not recommended for consuming content with the Oculus Rift. Oculus froze Mac and Linux SDK development in the summer of 2015, and while the 0.5.0.1 SDK is still currently available from their [developer site](https://developer.oculus.com/downloads/), newer versions of OS X are beginning to break support for the Rift DK2. We still use the 0.5.0.1 with our Macs on the MozVR team, but only during development, to test basics of tracking and scene composition. For actually consuming VR experiences, we use Windows PCs or our mobile phones.

On mobile, the faster the phone the better. We generally use iPhone 6S devices or the latest Nexus Android devices, for example.

A-Frame is also a young framework with several known opportunities for performance improvements. Steadily improving performance and addressing bugs is an ongoing high priority for the development team. If you find bugs or performance improvement opportunities, please file [issues](https://github.com/aframevr/aframe/issues) and/or [pull requests](https://github.com/aframevr/aframe/pulls)!

Lastly, the A-Frame team will be publishing guides on performance optimization best practices.

## Where can I find assets?

The [Awesome A-Frame GitHub repo](https://github.com/aframevr/awesome-aframe) provides links to A-Frame-compatible assets and learning materials. Awesome A-Frame is a list built by the community, for the community. If you find cool resources, add them to the list by editing the repo. The Awesome A-Frame README provides instructions on that process.

## Can I add links to my scene?

The WebVR API that A-Frame is built on does not currently support traversal of domains within virtual reality. Due to restrictions in the underlying [`requestFullScreen` API](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen) that the WebVR API is built on, the browser drops out of VR display mode when leaving one domain for another. There are plans to resolve this shortcoming with a new version of the WebVR API. When that happens A-Frame will be updated to support link traversal in VR. In the interim, developers are encouraged to design experiences as self-contained single-page web applications.

## Is there a feature roadmap?

We use issues on the [A-Frame GitHub repo](https://github.com/aframevr/aframe/issues) to track feature requests and bugs. Please file new requests for things you'd to see, or bugs that you find!

## Is it A-Frame or aframe or aframevr?

We call it A-Frame. We express it in code and domains as aframe, as much as possible. Sometimes we cannot get "aframe", and we have to resort to "aframevr", which is more widely available. The site is at [aframe.io](https://aframe.io/), for example, but the GitHub organization is [github.com/aframevr](https://github.com/aframevr/). We're not thrilled about this inconsistency, but it's something we accept begrudgingly. Sorry for any confusion!

## Why aren't my transparent images rendering correctly?

Transparency is tricky in 3D graphics. If you are having issues where transparent issues in the foreground do not composite correctly over images in the background, it is probably due to underlying design of the OpenGL compositor (which WebGL is an API for). In an ideal scenario, transparency in A-Frame would "just work", regardless of where the developer places an image in 3D space, or what order they define the elements in markup. In the current version of A-Frame, however, it is easy to create scenarios where foreground images occlude background images. This creates confusion and unwanted visual defects.

While we are somewhat limited in the degree to which we can improve this by the underlying architecture of OpenGL, we are planning improvements in future versions of A-Frame that will (1) reduce the probability of encountering this unwanted occlusion, and (2) give developers better controls to manually override the default behaviors when they are undesirable. Track this work in [aframe-core](https://github.com/aframevr/aframe-core/) [issue #498](https://github.com/aframevr/aframe-core/issues/498).
