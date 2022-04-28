---
title: Step by Step guide on building a custom React hook in Typescript
date: 2022-03-06
published: true
description: A step-by-step guide on how to effectively create a custom React hook using Typescript. In this example, we go over how to create a useToggle hook.
categories:
    - react
    - typescript
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651102787778/bnu2X3X3z.png
---

### Introduction

According to the results of the annual survey of the [State of Javascript](https://relatablecode.com/important-takeaways-from-the-state-of-javascript/), it doesn’t seem like React nor Typescript is going anywhere anytime soon so it’s worth taking some time and learning how they work!

React hooks have revolutionized the way we can build React components as they tend to be considerably more intuitive than Class Components. However, one feature that isn’t taken advantage of nearly as much as it should be, is the ability to create custom hooks!

Custom hooks let us abstract away the logic of react components and re-use them! I suggest only doing this with logic that actually gets reused a ton throughout your web application.

More info about hooks can be found [here](https://reactjs.org/docs/hooks-intro.html).

For the sake of this article, the example I’m going to be creating is a **useToggle** hook! Toggling something in the UI is quite common so we should get a lot of mileage out of this one.

### Building the hook

First, let’s create the file **useToggle.ts** , and let’s build the skeleton for our hook. All hooks must begin with the word **_use_**!

![useToggle](https://cdn.hashnode.com/res/hashnode/image/upload/v1646568257917/QTX_6cPES.png)

A toggle hook will typically just rely on toggling a boolean state from **true** to **false** and vice versa, however, to make it more complete let’s add some additional, _optional_, functionality to the hook where we can completely set it to **false** or **true**.

Let’s create the state and the skeleton of the functions:

![useToggle](https://cdn.hashnode.com/res/hashnode/image/upload/v1646568259117/h1SlqvFFm.png)

You should import the appropriate hooks from React itself, in this case, **useState** and **useCallback**.

```js
import { useState, useCallback } from 'react';
```

The **useState** hook has access to the previous state, this is generally safer to use so we’ll just toggle it with this functionality. The other two functions, **close** and open, will set the state to either true or false directly. The state of the toggle and the three functions will get returned in an array.

### Typescript

Last but not least, let’s give our hook some type-safety by letting the function know what we are expecting to return.

![useToggle](https://cdn.hashnode.com/res/hashnode/image/upload/v1646568260374/4-CYpdNk4.png)

We return an array with the internal state of the hook, and the 3 functions to alter the state!

As a little extra we can add an initial state to the hook in case we want it to start off as closed or opened:

![useToggle](https://cdn.hashnode.com/res/hashnode/image/upload/v1646568261590/X-IJwTbJh.png)

### Conclusion

And that’s it! Hooks are a great way to abstract logic used in react components.

Here’s an example of the hook in action:

https://codesandbox.io/embed/use-toggle-wbzlso?fontsize=14&hidenavigation=1&theme=dark
