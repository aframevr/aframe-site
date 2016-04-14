---
title: A-Frame v0.2.0 - The Extensible VR Web
author: twitter|andgokevin|Kevin Ngo
date: 2016-03-31 10:00:00
layout: blog
---

![A-Frame Community Examples](https://cloud.githubusercontent.com/assets/674727/14156618/3258460c-f67c-11e5-8176-5b66c3169a1c.gif)

After three fun and busy months of development, we are proud to announce the release of A-Frame version 0.2.0. This version's overarching theme is *extensibility*. For WebVR to evolve quickly, in a period in which VR is dominated by closed native ecosystems, A-Frame needs to enable open experimentation and rapid iteration. A-Frame's inherent extensibility grants developers permissionless innovation, making it the VR-flavored embodiment of the [Extensible Web Manifesto][extensibleweb].

<!-- more -->

## Since Launch

A-Frame has received an overwhelmingly positive response by democratizing immersive 3D content creation on the Web. By the numbers:

- Over 1500 stars, 25 contributors, 550 commits on the [A-Frame GitHub repository][github].
- Over 470 people have joined the [A-Frame community Slack channel][slack] to ask questions, show off projects, and just generally socialize.
- Over 100 awesome creations by people listed on the [awesome-aframe repository][awesome].
- Over 50 projects showcased on the [Made With A-Frame Tumblr][tumblr].

Members of the community have used A-Frame for some interesting use cases:

- [Donovan Kraeker][kraeker] of [DrawVR][drawvr] has built [several VR stores][spystore] to enhance his existing e-commerce properties.
- [Ryan James][ryan], a PhD student and researcher at the University of Washington, has [applied virtual reality to medical education][cadavr].
- [Don McCurdy][don], a software engineer at Google, has recreated a scene from the popular indie game, [Monument Valley][monument].

And A-Frame has received some high-profile use:

- [Amnesty International UK][amnesty], in partnership with design firm [Junior][junior], created [360 Syria][360syria], an experience that transports viewers to the besieged city of Aleppo, Syria to witness the devastation of barrel bombing on its citizens.
- [The Washington Post][washington] published *[Mars: An Interactive Journey][mars]* which transports people to the surface of the Red Planet to learn about space exploration programs.

## Improved Extensibility in A-Frame 0.2.0

A-Frame brought the *[entity-component-system][aecs]* pattern to HTML. Everything in a [scene][scene] is an [entity][entity]. An entity is a general placeholder object that inherently does nothing and renders nothing. Components are buckets of reusable data and logic; when plugged into entities, components provide them appearance, behavior, and functionality. Developers can write components to do whatever they want, with direct access to three.js, and then share them with the community. Anything that is possible with three.js and WebGL is possible in A-Frame.

Since A-Frame's initial release, we have been largely refining the [component API][componentapi]. We went through cycles of creating components, discovering limitations in the API, and then writing patches to improve A-Frame. By dogfooding our own framework, we were able to discover obstacles in extending A-Frame:

- Component API has been enhanced with property types, schema configurations, and more lifecycle methods (`pause`, `play`, `tick`).
- Primitives (convenience elements such as [`<a-sphere>`][sphere]) are able to take components.

In addition, we opened up more escape hatches for developers to delve deeper. They can now:

- Define custom property types for more flexible component APIs.
- Register GLSL shaders or three.js materials.
- Register primitives.
- Register systems to provide global scope and services to components.

Read the [full version v0.2.0 release notes][changelog] for more detail.

## Incarnation of the Extensible VR Web

The Extensible Web encourages healthy competition between ideas and APIs. Only once emerging ideas and APIs are established should they be standardized. Embracing this philosophy is mandatory in order for WebVR to succeed, else it'll be another case of the Web being late to the party when all the chips have already been eaten. A-Frame is an embodiment of these ideas.

As mentioned before, with A-Frame being built upon an entity-component-system pattern, developers can write, share, and plug in components that extend new features. If a feature doesn't yet exist or isn't up to par, the community can run with it. The ecosystem already features community-built components that enable gamepad controls, speech recognition, and physics. With this short-term innovation scheme, developers can rapidly experiment with ideas in order to help advance not only A-Frame but WebVR.

For example, [Don McCurdy][don] iterated on standard A-Frame components in his A-Frame playground repository, while the core A-Frame team worked on enabling extensibility. From that, he has refactored and enhanced A-Frame's entire controls system alongside physics. With those components proven, we seek to upstream them to a collection of standard A-Frame components.

Several people in the community were looking for a way to render text and HTML elements as textures in A-Frame. Student [Max Krieger][max] stepped up and wrote components to enable using a `<canvas>` element as a texture and to enable text wrapping.

Also, [Ben Nolan][ben] of [SceneVR][scenevr] recently ported his client-side code to use A-Frame. He is developing components that enable interactive and multi-user experiences, features the core A-Frame team was targeting for later this year. What's more, Ben is working on an [WYSIWYG][wysiwyg] editor for A-Frame scenes. We are  working on an editor as well.

This virtuous cycle of the community enabling features and sharing components continues to be a huge boon for the WebVR ecosystem. Rather than designing slowly behind closed doors, we built A-Frame to pull the entire web community into the effort. Together we'll try lots of things and slowly focus on the ones that work.

## Looking Ahead

We'll be working on building more demos, improving interactivity, and crunching down on performance. Once the polyfill is stabilized, we will quickly release [WebVR 1.0 support][webvr1] into A-Frame.

[360syria]: http://www.360syria.com/
[aecs]: https://aframe.io/docs/core/
[aframe]: https://aframe.io
[amnesty]: https://www.amnesty.org.uk/
[awesome]: https://github.com/aframevr/awesome-aframe
[awesome]: https://github.com/aframevr/awesome-aframe
[ben]: https://twitter.com/bnolan
[cadavr]: https://www.youtube.com/watch?v=eYyuEjhD-k8
[changelog]: https://github.com/aframevr/aframe/releases/tag/v0.2.0
[componentapi]: https://aframe.io/docs/core/component.html
[don]: https://twitter.com/donrmccurdy
[ecs]: https://wikipedia.org/wiki/Entity_component_system
[entity]: https://aframe.io/docs/core/entity.html
[extensible]: https://www.w3.org/community/nextweb/2013/06/11/the-extensible-web-manifesto/
[extensibleweb]: https://www.w3.org/community/nextweb/2013/06/11/the-extensible-web-manifesto/
[drawvr]: http://drawvr.com
[github]: https://github.com/aframevr/aframe
[hacks010]: https://hacks.mozilla.org/2016/03/build-the-virtual-reality-web-with-a-frame/
[knex]: https://wikipedia.org/wiki/K'Nex
[kraeker]: http://kraeker.com
[junior]: http://junior.io
[layout]: https://github.com/ngokevin/aframe-layout-component
[lego]: https://wikipedia.org/wiki/Lego
[max]: https://twitter.com/a9_io
[mars]: https://www.washingtonpost.com/graphics/business/mars-journey/
[monument]: https://sandbox.donmccurdy.com/vr/monument/
[physics]: https://github.com/ngokevin/aframe-physics-components
[ryan]: http://drryanjames.github.io/
[scene]: https://aframe.io/docs/core/scene.html
[scenevr]: https://www.scenevr.com/
[slack]: https://aframevr-slack.herokuapp.com
[sphere]: https://aframe.io/docs/primitives/a-sphere.html
[spystore]: http://vr.ispystore.ca/
[stack]:  https://stack.gl
[template]: https://github.com/ngokevin/aframe-template-component
[text]: https://github.com/ngokevin/aframe-text-component
[three]: https://threejs.org
[tumblr]: http://aframevr.tumblr.com/
[washington]: https://washingtonpost.com/
[webvr1]: https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/
[webvrslack]: https://webvr-slack.herokuapp.com
[wysiwyg]: https://wikipedia.org/wiki/WYSIWYG
