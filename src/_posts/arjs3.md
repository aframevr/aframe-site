---
title: "Image Tracking and Location-Based AR with A-Frame and AR.js 3"
author: Nicolo Carpignoli and Diego Marcos
date: 2020-03-26 10:00:00
layout: blog
image:
  src: arjs3.gif
---

We're happy to announce AR.js 3 and A-Frame integration featuring new image and
location based tracking.

For detailed API reference and source code check the [official
documentation](https://ar-js-org.github.io/AR.js-Docs/) and the [Github
repository](https://github.com/AR-js-org/AR.js)

<!-- more -->

## Getting Started with Image Tracking

The new AR.js tracking can take any arbitrary image or drawing (not only
markers) to position and display your 3D content.

You just need a high resolution image with a good amount of detail. The more
complexity in the image the better the tracking. [Learn how to choose images for
best results in this article by Daniel Fernandes](https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers).

For this tutorial we will use the following image:

![image tracking](/images/blog/arjs3-image-tracking.jpg)

## Creating Image Descriptors

Next step is to create image descriptors: a set of files that describe your
image and are needed by the tracking algorithm. We will use the NFT Marked
creator available via Web (also available locally as a node.js script if you
prefer). Upload your image and click “generate” to create the descriptors. Once
the image is processed three files will automatically download. Copy the
following snippet of code on a new HTML file and host it on a server. Also a
Codepen with all the necessary code is available below for convenience.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Image based tracking AR.js demo</title>
    <!-- import aframe and then ar.js with image tracking / location based features -->
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>

    <!-- style for the loader -->
    <style>
      .arjs-loader {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .arjs-loader div {
        text-align: center;
        font-size: 1.25em;
        color: white;
      }
    </style>
  </head>

  <body style="margin : 0px; overflow: hidden;">
    <!-- minimal loader shown until image descriptors are loaded. Loading may take a while according to the device computational power -->
    <div class="arjs-loader">
      <div>Loading, please wait...</div>
    </div>

    <!-- a-frame scene -->
    <a-scene
      vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
      <!-- a-nft is the anchor that defines an Image Tracking entity -->
      <!-- on 'url' use the path to the Image Descriptors created before. -->
      <!-- the path should end with the name without the extension e.g. if file is trex.fset' the path should end with trex -->
      <a-nft
        type="nft"
        url="<path-to-your-image-descriptors>"
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5">
          <!-- as a child of the a-nft entity, you can define the content to show. here's a GLTF model entity -->
          <a-entity
          gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="5 5 5"
              position="100 100 0"
          >
          </a-entity>
      </a-nft>
      <!-- static camera that moves according to the device movemenents -->
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
```

Point `<path-to-your-image-descriptors>` to the path containing the Image
Descriptors you generated and downloaded before. Those files will have a common
name. Remove the file extension (e.g. with “dinosaur.fset”, “dinosaur.iset” and
so on, the path you have to add should end with “dinosaur”).

Serve the example from a local or remote server: [Github
Pages](https://pages.github.com/) and [Glitch](https://glitch.com/) are free
and convenient options. Navigate to the URL on your device and you should see a
T-Rex model after the loading screen disappears.

Visit [this Codepen](https://codepen.io/nicolocarpignoli/pen/vYOeYKd) if you
want to see right away how it looks without hosting your own.

You can replace the model above with any other assets: 2D videos, images, audio
files. Any A-Frame `a-entity` is a valid child of the `a-nft` anchor.

## Location-Based AR

Location-based tracking uses real-world coordinates to place AR content in context. Users can move freely (outdoors for better precision) and content associated with their location will be scaled and placed accordingly (e.g: content will render bigger / smaller based on distance to the user). With AR.js and A-Frame is now very easy to build experiences like cities and museum tours, restaurant guides, treasure hunts, biology or history learning games or place virtual art on any real world location.

The following example shows how to place text on a fixed position in the real world. The text will remain in place as you move around. The content is anchored to your current location. Make sure that GPS tracking is enabled on your device before you try.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Location-based AR.js demo</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
  </head>

  <body style="margin: 0; overflow: hidden;">
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="50 50 50"
        gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
      ></a-text>
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
  </body>
</html>
```

Some notes:

  - Replace `<add-your-latitude>` and `<add-your-longitude>` with your GPS coordinates. There are several online services that lets you retrieve those data for free like [latlong](https://www.latlong.net/)
  - Change the `scale` property according to the distance of the place you specified with the coordinates: if you are not seeing the text, try to scale it up or choose a place much near
  - We used the custom `look-at` A-Frame component, that makes the content always look towards the user camera. This is fundamental, in particular for 2D content as text.

Run the example on your device with GPS data on and you should be able to see
the text fixed in place. Its position should honor the real-world positioning
according to the GPS coordinates you added.

Unleash your creativity and replace the text with any content you like, thanks
to A-Frame you can quickly display 3D models, videos, images: Any `a-entity`
will be tracked as expected..

You can find additional support on the resources linked below and also on the
[official Gitter channel](https://gitter.im/AR-js/Lobby).

Have fun and please share the AR experiences you built with AR.js and A-Frame.
We will love to check them out!

Nicolo Carpignoli and Diego Marcos.

## Additional Resources

- [AR.js Repository](https://github.com/AR-js-org/AR.js)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Location-based Tutorials with AR.js](https://medium.com/swlh/build-your-location-based-augmented-reality-web-app-a841956eed2c)
