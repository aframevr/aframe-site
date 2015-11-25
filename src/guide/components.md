---
title: Components
type: guide
order: 12
---

## Using Components

### Registration

### Extending Custom Elements

### Component Caveats

### `is` attribute

Some HTML elements, for example `<template>`, has restrictions on what elements can appear inside it. Custom elements that are not in the whitelist will be hoisted out and thus not render properly. In such cases you should use the `is` special attribute to indicate a custom element:

```html
<template is="a-template">
</template>
```

## Properties

### Passing Data with Properties

### camelBack vs. kebab-case

HTML attributes are case-insensitive. When using camelCased prop names as attributes, you need to use their kebab-case (hyphen-delimited) equivalents:

### Dynamic Properties

### Literal vs. Dynamic

### Property Binding Types

### Property Validation
