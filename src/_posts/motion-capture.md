---
title: "Rapid Motion-Capture-Powered VR Development"
author: twitter|andgokevin|Kevin Ngo
date: 2017-4-05
layout: blog
image:
  src: https://cloud.githubusercontent.com/assets/674727/24762741/18e56a68-1aa4-11e7-938b-da056c32c8bc.jpg
---

> Read about [the initial release of the A-Frame Motion Capture Components and
> A-Saturday-Night](https://blog.mozvr.com/a-saturday-night/). Or head directly
> to the [A-Frame Motion Capture
> Components](https://github.com/dmarcos/aframe-motion-capture-components/).

On the A-Frame team, we focus our development on experimentation and innovation
with the HTC Vive. But room scale VR can be cumbersome to develop. Every change
to the code, we have to:

- Open a web page (often running on a separate computer)
- Enter VR
- Put on the headset
- Grab the controllers (often having to turn them back on)
- Do our test run with the headset and controllers
- Take off the headset and controllers and pop open the browser development tools
- Restart the browser if necessary since they're currently experimental and buggy
- Repeat

Room scale VR development becomes molasses. But we've come up with a workflow
to supercharge VR development so we can automate, develop rapidly, and on the
go: **[A-Frame Motion Capture Components](https://github.com/dmarcos/aframe-motion-capture-components/).**

With the motion capture components, we can record VR actions (e.g., headset and
controller movement, controller button presses), and repeatedly replay those VR
actions, on any device from anywhere without a headset.

<!-- more -->

<!--toc-->

## Motion Capture Makes VR Developer Lives Easier

![Rapid Development](https://cloud.githubusercontent.com/assets/674727/24733615/9cb99dae-1a2d-11e7-85e3-a75d6c06bb91.gif)

Below are several real-life use cases of motion capture vastly improving VR
development ergonomics:

1. **Faster test trials:** No need to take the headset on and off, enter VR,
grab the controllers, do manual actions, or restart browsers. Just record once
and develop for hours on a single recording.

2. **Development on the go**: Rather than having to re-enter the headset and VR
every time we want to test something, we can take our recording, send it to,
say, a Macbook, head out to a coffee shop, and continue developing our VR
application using the recording on a stable browser. Add some `console.log`s,
refactor your application, or freeze the replay with the A-Frame Inspector
(`<ctrl> + <alt> + i`) to poke around.

3. **Automated testing**: We can record a bunch of different recordings as
regression test cases and QA. Store the recordings, do some development, and
occasionally click through the recordings to make sure everything still works.
We store multiple recordings in projects for later testing. For example, with
the Teleport Controls component, I recorded a couple to later test:

4. **Multiple developers sharing one headset**: One developer can take a recording
with the Vive and go off somewhere else to develop with the recording, leaving
the Vive free for the other developers to use or take recordings.

5. **Requests for recordings**: Perhaps you don't have a Vive or Rift handy but your
colleague or friend does.  Give them a link to your web application maybe via
[ngrok](https://ngrok.io) (isn't the Web awesome?), have them take a recording,
and send it to you! Now you're unblocked from developing.

6. **Demonstrating bugs**: Or let's say you found a bug in a VR web application
and want to show it to someone. Take a recording and send it to them to debug.
No need to give bug reproduction steps, it's all in the recording!

![Stored](https://cloud.githubusercontent.com/assets/674727/24733850/03f8a96e-1a2f-11e7-8420-34f63c4415a5.png)

Another use case for motion capture is as an animation tool to create paths and
splines, but we won't go over that here.

## How to Record

Read the [Motion Capture
documentation](https://github.com/dmarcos/aframe-motion-capture-components/)
for more information. Here's how to set up the recording:

1. Drop the Motion Capture Components script tag into your HTML file (e.g., `<script src="https://unpkg.com/aframe-motion-capture-components/dist/aframe-motion-capture-components.min.js">`)
2. Add the `avatar-recorder` component to the scene (i.e., `<a-scene avatar-recorder>`)
3. Enter VR
4. Press `<space>` to start recording
5. Record movements and actions
6. Press `<space>` to stop recording
7. Save the recording JSON file or upload it by hitting `u` to get a short URL to share between computers

Now we can replay the recording. You can try recording the camera with WASD and
mouse drag controls right now on a desktop. Head to the [Record
Example](http://dmarcos.github.io/aframe-motion-capture-components/), open the
browser Console to get feedback, and hit `<space>` to start and stop recording!


![Record](https://cloud.githubusercontent.com/assets/674727/24766726/3d660b7e-1ab1-11e7-9f64-d97b5732ec43.gif)

## How to Replay

By default, the recording will also be saved and replayed from localStorage. If
we want to take our recording on the go, here's how to replay a recording
(assuming we already have the script tag above):

1. Put the recording file somewhere accessible to the web page (i.e., in the project directory or online)
2. Add `avatar-replayer` component to the scene (i.e., `<a-scene avatar-replayer>`)
3. Append `?avatar-recording=path/to/recording.json` to the URL *or* set `<a-scene avatar-replayer="src: path/to/recording.json>`

Then replay the recording on any device from anywhere without a headset to your
heart's content. Get in the headset, record some clicks, and then from a
laptop, we can build event handlers on top of the controller events we emitted
in the recording.

## Spectator Mode

The A-Frame Motion Capture Components have a Spectator Mode feature that can be
enabled from the `avatar-replayer` component:

```
<a-scene avatar-replayer="spectatorMode: true">
```

This lets you view the recording from a third-person view. I found this
immensely useful because it was hard to see what was happening in first-person.
The first-person view is naturally shaky, hands would occlude the camera,
actions would be happening off-screen, and its hard to focus on one place if
the camera is always moving away. The Spectator Mode lets you free move around
the scene and view at whatever angle or focus on whatever area.

![Spectator Mode](https://cloud.githubusercontent.com/assets/674727/24733331/f2bc6094-1a2b-11e7-9442-bcf30d18af79.gif)

## Usage

Below is a video of me on Twitch. I was developing room scale VR with A-Frame
for almost **3 hours off of one recording**. That was some good mileage as I
made a ton of progress. I even served my project using
[ngrok.io](https://ngrok.io) so that people could visit the live state of my
project with the recording! See motion capture powered development in action:

<iframe src="https://player.twitch.tv/?video=v133692824&autoplay=false" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/andgokevin?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from andgokevin on www.twitch.tv</a>

## Try It Out!

Head to [A Saturday Night](https://aframe.io/a-saturday-night/) to see a
recording in action. Again, [check out the Motion Capture
Components](https://github.com/dmarcos/aframe-motion-capture-components/). Go
forth. Rapidly innovate and experiment with room scale VR interactions!

![A Saturday Night](https://cloud.githubusercontent.com/assets/674727/24481580/0ac87ace-14a0-11e7-8281-c032c90f0529.gif)
