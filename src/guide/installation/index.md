---
title: Installation
type: guide
order: 0
aframe_version: 0.1.0
dev_size: "100.00"
min_size: "50.00"
gz_size: "50.00"
---

## Boilerplate Starter Kit

We've created a [simple starter kit](https://github.com/aframevr/aframe-boilerplate#getting-started) for creating WebVR scenes using A-Frame.

<div id="downloads">
<a class="button" href="https://github.com/aframevr/aframe-boilerplate/archive/master.zip" download="aframe-boilerplate.zip">Download kit</a>
</div>

If you're comfortable with npm and git, feel free to [clone the repo](https://github.com/aframevr/aframe-boilerplate#option-2-fork-this-git-repo-) or [fork this CodePen scene](http://codepen.io/team/mozvr/pen/2ac060c354546201f3337b83fbdcd110?editors=100) to get started. It also ships with an optional local development server (with Live Reloading) and GitHub Pages deployment workflow (and works with browserify too).

## Standalone

Simply download and include with a `<script>` tag. `aframe` will be registered as a global variable.

_**Pro tip:** Don't use the minified version during development. You will miss out all the nice warnings for common mistakes._

<div id="downloads">
<a class="button" href="/js/aframe.js" download>Development Version</a><span class="light info">With full warnings and debug mode</span>

<a class="button" href="/js/aframe.min.js" download>Production Version</a><span class="light info">Warnings stripped, {{gz_size}}kb min+gzip</span>
</div>

### CDN

Available on [jsdelivr](//cdn.jsdelivr.net/aframe/{{aframe_version}}/aframe.min.js) or [cdnjs](//cdnjs.cloudflare.com/ajax/libs/aframe/{{aframe_version}}/aframe.min.js) (it takes some time to sync, so the latest version might not be available yet).

## npm

npm is the recommended installation method when building scenes with A-Frame. It pairs nicely with a CommonJS module bundler such as [Webpack](http://webpack.github.io/) or [Browserify](http://browserify.org/). A-Frame also provides accompanying tools for authoring [Single-File Components](application.html#Single_File_Components).

```bash
# latest stable
$ npm install aframe
# dev build (directly from GitHub):
$ npm install mozvr/aframe#dev
```

## Bower

```bash
# latest stable
$ bower install aframe
```

## AMD Module Loaders

The standalone downloads or versions installed via npm/Bower are wrapped with UMD so they can be used directly as an AMD module.
