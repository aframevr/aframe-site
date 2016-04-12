---
title: 360&deg; Photosphere Viewer
date: 2016-1-22
author: twitter|ideaspacevr|Chris Car
layout: blog
image:
  href: https://www.ideaspacevr.org/themes/webvr-photosphere-viewer-equirectangular-images
  src: photosphere-viewer.png
---

> Chris from [IdeaSpaceVR](https://www.ideaspacevr.org/) has built an interactive 360-degree photosphere viewer. Space bar toggles a menu system, and a gaze-based cursor selects photos.

Recently I installed the Cardboard Camera app on my phone. It is a 360-degree photosphere VR app for Google Cardboard including a nice menu in VR which allows one to easily select photos from a list. The photosphere is showing photos with a so-called equirectangular projection (did not hear about that term before, as I am not a photo nerd ;-) ).

Since I knew that A-Frame had been released I thought of implementing this app in A-Frame, as I thought it might be quite easy to do, AND I would learn coding in A-Frame.

<!-- more -->

After a few hours of playing around I realised that

(a) yes it is easy to implement a photosphere BUT
(b) implementing a decent VR menu could not be done by just using A-Frame tags.

Which lead me to implement my first component for A-Frame. As it turned out, I needed actually two components:

The first component handles the VR photo menu (showing the menu, hiding the menu, position it in space). This component acts as a container for the photo thumbnails. You can check out the [source code here](https://github.com/IdeaSpaceVR/aframe-360-degree-photosphere/blob/master/js/components/isvr_photosphere_menu.js). I have to admit that I was not able to write the code for positioning the menu in space. So I turned to [Stack Overflow](http://stackoverflow.com/questions/34447119/positioning-a-three-js-object-in-front-of-the-camera-but-not-tied-to-the-camera) which helped me out on that one (again).

The second component is associated to each photo thumbnail within the menu container. I handles the selection of the photo via the mouse click event. I disabled the fuse cursors which would normally emit this click event. After many tests I decided that I did not like the fuse cursor for selecting photos. I guess people nowadays either have a Cardboard 2.0 (which supports a button) or an Oculus Rift and a mouse and keyboard. Additionally, I decided to only show the cursor when the menu is visible.

The main index.html file is straightforward. It contains the code for the photo thumbnail menu animation, the sky tag, the camera, the cursor, and their settings. Here's the [source code](https://github.com/IdeaSpaceVR/aframe-360-degree-photosphere/blob/master/index.html).

Anyway, this is a very first version of the 360-photosphere viewer, but I am quite pleased with it.

All photos are licensed under [Creative Commons 2.0 Generic Attribution](https://creativecommons.org/licenses/by/2.0/).

[Flickr is a good source of equirectangular photos](https://www.flickr.com/search/?text=equirectangular&license=4%2C5%2C9%2C10), or you can create your own by using Android Camera app (using the photosphere option).

**Instructions for the example:**

- Space bar for showing and hiding the menu
- Gaze and mouse click to select a photo

Enjoy!
