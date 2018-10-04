---
title: "Managing Application and Game State in A-Frame"
author: twitter|andgokevin|Kevin Ngo
date: 2017-4-11
layout: blog
image:
  src: https://cloud.githubusercontent.com/assets/674727/24813155/d1afc7fe-1b81-11e7-99b7-b444babd2593.png
---

> The current solution now is the **[A-Frame State Component](https://www.npmjs.com/package/aframe-state-component)**, which is sort of based off Redux patterns, but without all the memory issues, simpler API, and tailored for A-Frame performance.

Larger VR applications need a way of cleanly managing application or game
state. Managing lots of client-side state in a non-tangled manner has been a
large topic in 2D web development over the past couple of years which has given
rise to libraries such as
[Redux](http://redux.js.org/docs/introduction/ThreePrinciples.html). Having
built several non-trivial WebVR applications, we'll go over how we started to
bring these ideas of state management into A-Frame's DOM-based entity-component
architecture.

<!--toc-->

<!--more-->

## Initial Approach with Redux

![Redux](https://camo.githubusercontent.com/af8803571294fe373a54d039be8f9709f15a2ad4/687474703a2f2f6d616b6569746f70656e2e636f6d2f7374617469632f696d616765732f72656475785f666c6f7763686172742e706e67)

*[Image credit to makeitopen.com](http://makeitopen.com/tutorials/building-the-f8-app/data/)*

My initial approach was to use Redux straight up with A-Frame. Redux is a
library to predictably manage and modify state similar to a state management
machine. Redux has become extremely popular over the last couple of years when
used with React. I personally started using it the day it was released. Redux
is an agnostic library that can be integrated into any framework.

[Redux's three
principles](http://redux.js.org/docs/introduction/ThreePrinciples.html): single
source of truth, read-only state, and changes are made with pure functions.
The implementation of Redux involves a single global state, making it easy to
debug and inspect. That single global state is modified through pure functions
(reducers) that takes the previous state and action and returns next state,
making it easy to unit test. Then we can only modify the state by dispatching
actions (i.e., events), providing a single entry point into modifying the
state.

![Redux and A-Frame Diagram](https://cloud.githubusercontent.com/assets/674727/24901028/ab55bb0a-1e5a-11e7-9aff-57ddb71e48cf.png)

For a basic example, say we have a state `{value: 1}`. I could have a reducer
that modifies the state; on the `INCREMENT` action, the reducer would do return
a new state with `value++;`, and on the `DECREMENT` action, the reducer would
return a new state with `value--;`. An action dispatcher would send the
`INCREMENT` or `DECREMENT` actions, triggering a state change.

[reduxcomponent]: https://github.com/ngokevin/kframe/tree/master/components/redux/

I created an [A-Frame Redux component][reduxcomponent] to integrate Redux into
A-Frame. The Redux component lets us declaratively set up a Redux store, and
pass in reducers:

```html
<a-scene redux="reducers: counter"></a-scene>
```

And to register a reducer:

```js
AFRAME.registerReducer('counter', {
  actions: {
    DECREASE: 'COUNTER__DECREASE',
    INCREASE: 'COUNTER__INCREASE'
  },

  initialState: {value: 0},

  reducer: function (state, action) {
    state = state || this.initialState;
    switch (action.type) {
      case this.actions.INCREASE: {
        var newState = Object.assign({}, state);
        newState.value++;
        return newState;
      }
      case this.actions.DECREASE: {
        var newState = Object.assign({}, state);
        newState.value--;
        return newState;
      }
    }
  }
});
```

To dispatch actions, grab a handler to the Redux store and dispatch:

```js
scene.systems.redux.store.dispatch({type: 'COUNTER__INCREASE'});
```

The Redux component then provided a data-binding component to bind state to
A-Frame entities:

```html
<a-entity redux="counter.value: text.value"></a-entity>
```

The Redux component seems very usable with A-Frame. If I were to build a larger
application where I needed to compose multiple reducers and split up the
application state into sub-states, I would personally start reaching for Redux.

But to people had that have not used Redux, all of Redux's terms (e.g.,
reducers, stores, dispatchers, actions) are foreign. A lot of A-Frame
developers are coming from graphics, games, or 3D industries, and they don't
care about Redux. For me, it took a couple of weeks to fully grasp. So I wanted
to see if we could create something simpler and more tailored to A-Frame's
architecture and VR.

## Game State Implementation in A-Blast

![A-Blast](https://cloud.githubusercontent.com/assets/674727/24531440/0336e66e-156e-11e7-95c2-f2e6ebc0393d.gif)

The implementation below is the one I'm currently using on my personal
projects, but it will evolve. Note we'll be calling it *game state* as that's a
common term for 3D-related applications, but game state can apply for any
application in general.

[A-Blast](https://github.com/aframevr/a-blast/) is a cute VR shooter game. We
wanted to build an application in one of the most common and popular genres to
prove A-Frame as a 3D and VR framework.  A-Blast let us see how common concepts
such as game state would be implemented alongside A-Frame. For A-Blast, we
needed to keep track of things such as the wave, player health, score, phase
(e.g., Intro, Game Over), and time left.

![Redux-like Diagram](https://cloud.githubusercontent.com/assets/674727/24813155/d1afc7fe-1b81-11e7-99b7-b444babd2593.png)

The game state we implemented took ideas of Redux but tailored it for A-Frame:

1. A single global game state A-Frame system which is registered on the
  `<a-scene>` element.
2. Initial state is specified in the system's schema.
3. State can be accessed via the system's data (e.g.,
  `sceneEl.getAttribute('gamestate')`).
4. Actions are dispatched using events
5. Handlers in the game state are responsible for transitioning the state
6. The game state system publishes the game state and notifies via an event
7. Related to the game state system is a component to declaratively bind game
state to A-Frame component properties in HTML

Below is a basic skeleton for game state system implementation that mirrors
A-Blast's. Fewer than 50 lines of code that does the basics of Redux:

```js
AFRAME.registerSystem('gamestate', {
  // Initial state.
  schema: {
    value: 0
  },

  init: function () {
    var initialState = this.initialState;
    var sceneEl = this.el;
    var state = this.data;

    if (!initialState) { initialState = state; }

    sceneEl.emit('gamestateinitialized', {state: initialState});

    /**
     * Application-specific code goes under here! Handlers to transition state.
     */
    registerHandler('increment', function (newState, evt) {
      newState.value++;
      return newState;
    });

    // Part of the game state library.
    function registerHandler (eventName, handler) {
      el.addEventListener(eventName, function (param) {
        var newState = handler(AFRAME.utils.extend({}, state), param);
        publishState(eventName, newState);
      });
    }

    // Part of the game state library.
    function publishState (event, newState) {
      var oldState = AFRAME.utils.extend({}, state);
      el.setAttribute('gamestate', newState);
      state = newState;
      el.emit('gamestatechanged', {
        event: event,
        diff: AFRAME.utils.diff(oldState, newState),
        state: newState
      });
    }
  }
});
```

Then to dispatch an action, any A-Frame entity can emit an event, and it'll
bubble up to the scene, where the game state can trigger its handlers. No need
to grab a handle on the game state; entities don't even have to know about the
game state.

A-Blast also has a `gamestatebind` component that updates entities if necessary
on every state change. If we wanted to bind game state's `value` to A-Frame's
text component's `value` property, we can use the component declaratively:

```html
<a-entity gamestatebind="value: text.value"></a-entity>
```

Similar to the concepts in React, A-Frame components in this model of game
state could either be "smart components", meaning aware of the game state, or
"dumb components", meaning they're agnostic and purely responsible for pieces
such as 3D appearance, behavior, logic.

We are also free to choose what state is able to be handled within a single
component, local state, and when to hoist a piece of state up to the global
level if multiple entities or components need to interface with it.

State specific to an entity can either be kept in a component, and if we need
to make it global or more closely manage it, we can hoist that up to the global
game state. Say we had a collection of data in the game state each representing
an entity. To allow each entity having its own state while managing it at the
global level, we could "select" or bind each piece of data to its respective
entity; similar to how you might possibly fetch a list of data and bind it to
list items in HTML.

## Game State Implementation in A Saturday Night

![A Saturday Night](https://cloud.githubusercontent.com/assets/674727/24813570/54e183aa-1b83-11e7-840d-aaca5e9a0724.gif)

[A Saturday Night](https://aframe.io/a-saturday-night/) is a demo for motion
capture where people can get into their headset, record a dance, and share it
with their friends. Like a "dancegram". [Diego
Marcos](https://github.com/dmarcos/) implemented the game state for A Saturday
Night and took a different approach from scratch, without any bias from Redux.
This implementation is less generalized but optimized for A Saturday Night.

1. A single global game state component which is registered on the `<a-scene>` element
2. The application can be in a single game state at a time
3. All possible game states are statically defined up front in an array
4. A-Frame Components are registered, each one handling a different state. The
state components define an `init` handler on what's run when the application
transitions to its state, and a `remove` handler on what's run when the
application transitions away from its state
5. States are changed using a `setState` method that swaps to a different state
6. The game state component publishes its state to the application by toggling
the state components

![A Saturday Night State Machine](https://cloud.githubusercontent.com/assets/674727/24899932/03e67ace-1e57-11e7-965a-47a78fc4d64b.png)

Below is a basic skeleton for game state system implementation that mirrors
A Saturday Night's:

```js
AFRAME.registerComponent('game-state', {
  schema: {
    barCondition: {default: false},
    state: {default: 'foo', oneOf: ['bar', 'qux', 'qaz']}
  },

  update: function (oldData) {
    var data = this.data;
    if (oldData.state !== data.state) {
      this.setState(data.state);
      return;
    }
    this.updateState();
  },

  updateState: function () {
    var data = this.data;
    var el = this.el;

    switch (data.state) {
      /**
       * Application-specific code goes under here!
       */
      case 'foo': {
        // Transition to next state depending on condition.
        if (data.barCondition) {
          el.setAttribute('game-state', 'state', 'bar');
        }
      }
      default: {
        console.log('Unknown state', data.state);
      }
    }
  },

  setState: function(state) {
    var el = this.el;
    var states = this.schema.state.oneOf;
    if (this.updatingState) { return; }
    if (states.indexOf(state) === -1) {
      console.log('Unknown state', state);
    }
    // Remove all states.
    states.forEach(function (state) {
      el.removeAttribute(state);
    });
    el.setAttribute(state, '');
  }
});
```

Components can update the game state, and the game state will decide whether
conditions have been fulfilled to transition to the next state.

Then we have components that represent each distinct state:

```js
AFRAME.registerComponent('bar', {
  init: function () {
    // Ran when the game state enters the `bar` state.
  },

  remove: function () {
    // Ran when the game state leaves the `bar` state.
  }
});
```

## Comparing Implementations Between Redux Approach, A-Blast, A Saturday Night

A-Blast's game state was something I came up with, basing it on Redux. The
advantage is that components don't have to know about the game state; they just
emit events, and the game state listens to them. A-Blast's game state is also
more flexible since there's no single state represented as a string; any change
to pieces of the game state represents an entirely new game state. We send
actions, and the game state controls what needs to change in the state. This
model from this state management has form of state management has been
battle-tested through the web community's adoption of Redux.

A Saturday Night's game state was implemented by Diego Marcos. This model of
game state is well suited for simpler applications such as A Saturday Night
where there are only very distinct states (avatar selection, dancing, sharing
states). All the code that reacts to state changes are contained within
components that each manage a single state; this could be good or bad since
there is lots of code touching lots of parts of the application contained
within a single component. The nice part is that changing states and reacting
to changed states are synchronous rather than through events. However, it would
be possible to change A-Blast's game state to be synchronous.

However, as an application grows very large and contains lots of state, I would
give Redux a serious look up. By composing reducers, Redux is able to split an
application up into various sub-states or subtrees making each piece of the
application more manageable and predictable. The only obstacle would be the
learning curve, but the benefits would be proven state management with an
excellent community of state debugging tools.

## In-VR State Debugging Tools and Time Travel

![In-VR Debug Panel](https://cloud.githubusercontent.com/assets/674727/18897572/49ed95a4-84e0-11e6-9522-aa1c65cf0e14.png)

Since A-Frame is about VR, it's useful to view the entire game state while in
VR for debugging purposes. In A-Blast, we had a component that printed out the
entire game state on a panel with text within VR. Every time the game state
changed, we'd update the panel.

Eventually, it'd also be nice to have 2D state debugging tools just as Redux
has developer tools to inspect every single state change, or even time travel.
We'd be able to see every action that's dispatched and what it causes. With
A-Blast's game state component, it'd be easy since the system emits an event on
each game state change, providing the action that triggered the state change,
the diff between the old and next states, and the current new state.

![Debugger](https://cloud.githubusercontent.com/assets/674727/24814011/fd5fb4b0-1b84-11e7-8d00-04a59acacc13.png)

In the future, I can imagine creating a `time-travel` component that could
rewind and pan through the different states. We could turn the Vive trackers
into a dial that we could physically turn to reverse time, and see the world go
backwards in VR!

## Conclusion

These have been our initial attempts in implementing game state. I have no
doubt that our ideas and implementations will change and evolve for the better
as we build more and more complex WebVR applications. Coincidentally, [Don
McCurdy was brainstorming about state
machines](https://github.com/aframevr/aframe/issues/2569) at the exact time of
writing of this post! Check out his ideas as well.

More recently, I have been building the beginnings of a fairly complex
application where I am often interacting with game state. You can watch my
[recorded developer logs or catch me working on game state live on
Twitch](https://twitch.tv/andgokevin/) as I continue to develop it.

If you want to see various source code for implementations of game states:

- [A-Blast `gamestate`](https://github.com/aframevr/a-blast/blob/master/src/components/gamestate.js)
- [A Saturday Night `game-state`](https://github.com/aframevr/a-saturday-night/blob/master/src/components/game-state.js)

Whatever becomes the ultimate approach to game state will become the Oracle of
the Metaverse!
