---
title: Methods and Event Handling
type: guide
order: 9
---

## Method Handler

We can then use the `<a-event>` element to listen to DOM events:

```html
<a-scene>
  <a-cube color="gray">
    <a-event type="click" color="blue"></a-event>
  </a-cube>
</a-scene>
```

We are binding a click event listener to the `<a-cube>`.

Here's an even simpler way:

```html
<a-scene>
  <a-cube color="gray">
    <a-click color="blue"></a-click>
  </a-cube>
</a-scene>
```

## Why Event Listeners in HTML?

You might be concerned that this whole event listening approach violates the good old rules about "separation of concern". Rest assured - since all A-Frame handler functions and expressions are strictly bound to the ViewModel that's handling the current View, it won't cause any maintenance difficulty. In fact, there are several benefits in using `<a-event>`:

1. It makes it easier to locate the handler function implementations within your JS code by simply skimming the HTML template.

2. Since you don't have to manually attach event listeners in JS, your JS code can be pure logic and DOM-free. This makes it easier to test.

3. When a parent node is destroyed, all event listeners are automatically removed. You don't need to worry about cleaning it up yourself.
