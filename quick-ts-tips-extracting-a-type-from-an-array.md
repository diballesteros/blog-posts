---
title: Quick TS Tips How to extract a type from an array
date: 2021-11-21
description: A quick and easy Typescript tutorial on how to extract a type from an array of types using conditional typing and the infer keyword
categories:
    - typescript
---

## Quick TS Tips: How to extract a type from an array

Recently I had to work with some automatically generated types whilst using GraphQL. This is a very extremely useful feature! However, it can be a little cumbersome to specifically reach different custom _nested_ types from the requests without it being too verbose.

But, being a little creative with some native Typescript functions we can find a way to handle this exact use case!

### The example

![Generated Type](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468721047/mt0yAqeqC.png)

Let’s take for example this generated type (this will be a fairly simple type with a nested subtype):

If we wanted to extract the type of the array without it getting too verbose we could use some conditional typing from Typescript.

### Extraction Type

![Extraction Type](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468723206/SRFcrsz14.png)

The following type allows us to extract it:

It can be a little confusing at first glance but let’s break down every portion. First, we have our ArrayElement which is a [generic](https://www.typescriptlang.org/docs/handbook/2/generics.html) receiving the array itself as T.

Here the infer keyword from typescript (which must be used with extends) to declaratively introduce a new generic type U based on the given array.

Now let’s assume that the TStuff type is an array and we want to extract a singular TStuff. We could then supply the type of TStuff to ArrayElement\<T\>

```js
type TNestedStuff = ArrayElement<TStuff[]>;
```

### The result

Looking at the result of the extracted type we can now use it however we wish or even assign it as its own type to make it less verbose!

![Result Extracted Type](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468724658/VhKWGR_ie.png)

Here is the code sandbox to play around with the type and the Typescript documentation :

[Documentation - Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
