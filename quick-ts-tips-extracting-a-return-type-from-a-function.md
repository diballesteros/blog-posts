---
title: Quick TS Tips Extracting a return type from a function
date: 2021-12-12
published: true
description: My ongoing series of typescript tips. A short tutorial on how to extract the return type from a function into its own type, useful for post-manipulated data.
categories:
    - typescript
---

## Quick TS Tips: Extracting a return type from a function

![Splash](https://cdn.hashnode.com/res/hashnode/image/upload/v1639313427202/iiID9_Z1T.jpeg)
_Photo by Spencer Davis on Unsplash_

As part of an ongoing series of tips, I’m documenting some TS Tips.

If you’re curious about how to extract a type from an array, check out this [blog post](https://relatablecode.com/quick-ts-tips-extracting-a-type-from-an-array/)!

As I mentioned in that blog post working with GraphQL generated types can be quite cumbersome at times especially if you intend to do any post-fetching manipulation to the data.

However, with some Typescript functions, we can quickly extract a type from the result of a function!

### The example

Let’s take for example this simple type:

![Person Type](https://cdn.hashnode.com/res/hashnode/image/upload/v1639313429031/q5wXYAlb3.png)

Nothing too crazy just a simple object with a few properties.

As well as this simple function:

![Transformation function](https://cdn.hashnode.com/res/hashnode/image/upload/v1639313430507/nf_xxnf93.png)

As we can see in the function we receive a simple object type and we manipulate it adding in some new properties. For the sake of this example, the manipulation isn’t too complex and you could probably just extend the original type. More information on extending [here](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces).

However, if we were to assume we don’t have the original typing declared or the manipulation is considerably more complex it would be simpler just to extract the type from the result of the function.

### Extraction Type

The following utility type from Typescript lets us directly extract the type!

![Return type](https://cdn.hashnode.com/res/hashnode/image/upload/v1639313431911/pi_V9ImCU.png)

Now we can set an alias or just directly use the type around our application to feel a little safer when we’re manipulating the data. This is awesome!

Now if we go through the entire series of steps:

![Full example](https://cdn.hashnode.com/res/hashnode/image/upload/v1639313433346/ZxQwiHvZI.png)

No errors when sending in myself to the transformation function and now we can use the type anywhere else in the application!

Here’s a little sandbox to play around with the typing:
