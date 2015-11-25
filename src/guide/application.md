---
title: Building Large-Scale Scenes
type: guide
order: 18
---

The A-Frame core library is designed to be focused and flexible - it's just a view layer library that doesn't enforce any application-level architecture. While this can be great for integrating with existing projects, it could be a challenge for those with less experience to build larger scale applications from scratch.

The A_Frame ecosystem provides a set of tools, libraries on how to build large single-page scenes with A-Frame. This part is where we start get a bit "framework"-ish, but it's really just an opinionated list of recommendations; you still get to pick what to use for each part of the stack.

## Modularization

For large projects it's necessary to utilize a modularized build system to better organize your code. The recommended approach of doing so is by writing your source code in CommonJS or ES6 modules and bundle them using [Webpack](http://webpack.github.io/) or [Browserify](http://browserify.org/).

Webpack and Browserify are more than just module bundlers, though. They both provide source transform APIs that allow you to transform your source code with other pre-processors. For example, you can write your code with future ES2015/2016 syntax using [babel-loader](https://github.com/babel/babel-loader) or [babelify](https://github.com/babel/babelify).

If you've never used them before, I highly recommend going through a few tutorials to get familiar with the concept of module bundlers, and start writing JavaScript using the latest ECMAScript features.

## Single File Components

In a typical A-Frame project we will be dividing our interface into many small components, and it would be nice to have each component encapsulate its CSS styles, template, and JavaScript definition in the same place. Using Browserify or Webpack, we can write our scenes with ease.

You can find examples of the build setups on GitHub:

- [Browserify boilerplate](https://github.com/aframevr/aframe-boilerplate-browserify)
- [Webpack boilerplate](https://github.com/aframevr/aframe-boilerplate-webpack)

## Routing

## Communication with Server

## State Management

## Unit Testing

Anything compatible with a module-based build system works. A recommendation is using the [Karma](http://karma-runner.github.io/0.12/index.html) test runner. It has a lot of community plugins, including support for [Webpack](https://github.com/webpack/karma-webpack) and [Browserify](https://github.com/Nikku/karma-browserify). For detailed setup, please refer to each project's respective documentation.

<p class="tip">Since A-Frame directives perform updates asynchronously, when you are asserting DOM state after changing the data, you will have to do so in a `process.nextTick` callback.</p>

## Deploying for Production

The minified standalone build of A-Frame has already stripped out all the warnings for you for a smaller file size, but when you are using tools like Browserify or Webpack to build A-Frame scenes, you will need some additional configuration to achieve this.

### Browserify

### Webpack

## An Example Scene

