---
title: FAQ
type: faq
layout: page
sidebar_layout: flat
---

## What is A-Frame?

## Why did you create it?

## How can I get started?

## Which VR devices does it support?

## How can I share my work?

## The demos run slow or choppy for me. How can I improve performance?

## Can I use HTML and CSS?

## How is A-Frame different from other declarative 3D web frameworks?

## Where is your feature roadmap?

## What features do you not support?

* Animations on models
* glTF model format (yet)
* Gamepad support (yet)
* Positional audio

## Why are we creating this?

* It's too hard to create WebVR worlds. You shouldn't need to know Three.js.
* WebVR is very young. It needs more voices. People who don't know WebGL. People who don't have headsets. People who never programmed before, but love creating and sharing 3D worlds in tools like Minecraft.
* We want to make it radically easier to create WebVR.
* We looked at existing solutions. Lots of problems.
    * Stagnant
    * Little or no VR support
    * Too hard to use
    * Not created by creators, so missing critical design features.
    * Not compatible with the open web
    * Not compatible with modern web dev workflows
* Meanwhile we've been making tons of sites in-house at Mozilla Research. And over time we've learned a lot about what we need to create VR websites. And we've been creating lots of tools for internal use. VR-Markup is about sharing those tools.
* They're easy enough to use for someone who's never programmed before.
* But they're also extremely powerful, enabling experienced web devs to start cranking out highly sophisticated WebVR experiences with full interactivity, scripting, etc.
* And they're extensible, so you anyone can create and share new components. Unlocking the power of open source.

## What were the design principles?

* Easy to learn: you shouldn’t need to know JS to get started.
* Powerful: enough to create complex and compelling experiences.
* Performant: as much as possible.
* Extensible: build, share and discover custom components.
* Building blocks, not templates: open-ended for greatest creative potential.
* Responsive: works across platforms and devices. No headset required!
* Not a standard! This is a way to build WebVR experiences. Not the way.
* Future friendly: the markup and boilerplate will get better over time without breaking current features.
* WYSIWYG-friendly: today you can use the DOM Editor in DevTools to edit your scenes on the fly. That same capability enables people to build 3D drag-and-drop editors, or VR paintbrushes, etc.

## How is this different from X3D? (wip)

* X3D is meant to be a standard. It moves slowly as a result.
* X3D is a kitchen sink of features. It is complex and hard to use as a result.
* X3D learning materials are light, and adoption has been very weak.
* X3D VR support is an afterthought.

## How is this different from GLAM? (wip)

* GLAM separates concerns along traditional lines for the web: content (HTML), behavior (JavaScript) and presentation (CSS). This approach optimizes for shared styles across massive web sites. It breaks down, however, when interactivity, motion, and physics are added, and the number of elements increases vastly, as with VR worlds. At this point the creator finds it more useful to build with discrete components that encapsulate content, presentation and behavior. This more modular separation of concerns enables the creator to add or remove as many components to the scene as they like, while the others run independently. It is also vastly easier to work with, as the appearance of a component is defined by styles that live inside it, instead of a completely separate document linked via classes. The creator who can adjust visuals much faster when that they don't have to unnecessarily switch between documents and remember class names, line numbers, etc.
* This model also enables anyone to create and share new interoperable components, ensuring the number of available components rapidly expands.

## How is this different from Janus?

* Built on the open web. Made with HTML, CSS, JS, WebGL and Web Components.
* Works in your browser: Firefox, Chrome, Safari, Edge.
* Works across devices: desktop, mobile and VR.
* Modern tooling: NPM, Git, etc.
