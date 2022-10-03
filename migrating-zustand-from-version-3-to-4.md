---
title: Migrating Zustand from version 3 to 4
date: 2022-10-03
published: true
description: In this article, I go over my experience on how I migrated Zustand from version 3 to 4 in a React web application using Typescript.
categories:
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1664640672964/0VejIbQL2.png
---

### Introduction

Zustand is an awesome state management library for React that excels in its simplicity. Its just one hook that can then be called from anywhere in the app to access your **store**.

This simplicity has made it the perfect choice for personal small-medium sized apps because it requires little boilerplate and it comes baked in with some awesome middleware!

As an aside middleware is:

such as:

-   Persisting to local storage
-   Immer to make state changes easier to handle
-   Store version and migration handling

I used this library to handle persisted data in a personal app of [mine](https://nuzlocke.netlify.app/). Essentially its a CRUD app to manage Pokemon you run into in a playthrough of a game.

The important part however is that I have an **obsession** with keeping my libraries up-to-date (specifically in these small personal apps) so I decided to go ahead and migrate Zustand from version 3 to 4.

As a small disclaimer this article assumes you have some base level experience with Zustand.

### Migration Process

First and foremost you can check out the changelog and any specific changes you may need to do on the [Zustand GitHub repo changelog](https://github.com/pmndrs/zustand/releases).

First, let's go ahead and update the library:

```ts
yarn add zustand
```

In my case, it updated to `4.1.1`.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664710424756/byJ4fabwY.png)

All the previous APIs are backward compatible so keep in mind that the changes I'm going to make apply to Typescript.

[Immer](https://immerjs.github.io/immer/) is a library that allows you to work with immutable state data in a more convenient way. Before we had to explicitly set the type like this and the function to use it:

```ts
const immer =
	<T extends State>(config: StateCreator<T>): StateCreator<T> =>
	(set, get, api) =>
		config(
			(partial, replace) => {
				const nextState =
					typeof partial === 'function'
						? produce(partial as (state: T) => T)
						: (partial as T);
				return set(nextState, replace);
			},
			get,
			api
		);
```

However, we can now just import it directly from Zustand's middleware, so we can delete the above code.

```ts
import { immer } from 'zustand/middleware/immer';
```

Next, the section where you're creating the store requires a small change:

```ts
const useStore = create<AppState>(
```

to

```ts
const useStore = create<AppState>()(
```

It is now treated as a curried function.

Last but not least, I used the `migrate` option in the `PersisOptions` that Zustand provides to persist all data to local storage. However, the state of this app is now considered `unknown` by Typescript.

We can fix this by explicitly declaring the type with an assert function. For the sake of brevity I did something like this:

```ts
 migrate: (persistedState, version) => {
      assertAppState(persistedState);
```

The assert function looks something like this:

```ts
function assertAppState(val: unknown): asserts val is AppState {
	if (typeof val !== 'object') {
		throw new TypeError('Invalid app state');
	}
}
```

This means anytime I call my state object afterward in the `migrate` function then it will have the correct typing rather than `unknown`.

### Wrapping it up

Zustand is an awesome library that is simple to use. I recommend using it in any project you may be working on. If you have any other questions or stories about your migration process leave them in the comments below!

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
