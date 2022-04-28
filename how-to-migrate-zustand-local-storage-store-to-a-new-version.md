---
title: How to migrate Zustand local storage store to a new version
date: 2021-08-19
published: true
description: How to improve SEO performance in a React app made by create-react-app with hosting configurations, metadata and integrations with various search engines
categories:
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651104528718/8HqaGn704.png
---

### Introduction

[Zustand](https://github.com/pmndrs/zustand) is a state-management solution for React apps. For anyone looking into a state manager that is low on boilerplate, very intuitive, and highly performant then I highly recommend using it.

[I personally love it](https://relatablecode.com/developer-blog-nuzlocke-tracker-part-one-react-project-structure/).

This guide assumes you have some knowledge of the basics of Zustand.

### Recapping LocalStorage Persistence

Baked into the Zustand API is a middleware that allows persisting the store to local storage. An example of how this persistence would look like (example taken straight from the docs):

```js
export const useStore = create(
	persist(
		(set, get) => ({
			fishes: 0,
			addAFish: () => set({ fishes: get().fishes + 1 }),
		}),
		{
			name: 'food-storage', // unique name
			getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
		}
	)
);
```

The persist function wraps the store and automatically sets the values inside the local storage. The entirety of the store can be identified in the local storage by a **key** (name) and a **version** (number) that can also be set in the options. These options can be set in the persist function; it first receives the Zustand store and the second parameter is the aforementioned configuration object.

An issue that can pop up while creating a store that is persisted to local storage is that the structure of the store can change in an update to the application. This can cause inconsistencies between what the store expects and what is currently persisted.

This can, in the worst-case scenarios, cause errors that cause the application to crash. Yikes! In order to circumvent this problem, Zustand offers a migration function to transition a persisted store to the new **version**.

### Scenario

For example, let’s assume that our store currently looks something like this:

```js
const AVAILABLE_FISHES = [
	{
		id: 1,
		name: 'Tuna',
	},
	{
		id: 2,
		name: 'Goldfish',
	},
];

export const useStore = create(
	persist(
		(set, get) => ({
			fishes: [
				{
					id: 1,
					name: 'Tuna',
				},
			],
			addAFish: () => set({ fishes: get().fishes + 1 }),
		}),
		{
			name: 'food-storage', // unique name
		}
	)
);
```

Where our fishes key in the state should directly link up to a fish that exist in the **AVAILABLE_FISHES** constant.

However, we have a problem, if the object structure of the fish we save ever changes then the corresponding object in the persisted store will not update. For example, if our **AVAILABLE_FISHES** constant now includes the color:

```js
const FISHES = [
	{
		id: 1,
		name: 'Tuna',
		color: 'Blue',
	},
	{
		id: 2,
		name: 'Goldfish',
		color: 'Gold',
	},
];
```

The object saved in the fishes key no longer has all the information necessary. This can be easily remedied by migrating the store to a new structure and **version**.

### Migration

Initially, the **version** of the local storage is set to 0. This can be confirmed by opening up the dev tools and looking at the entry in the local storage.

![Migration](https://cdn.hashnode.com/res/hashnode/image/upload/v1649267853559/idWWUk5Ej.png)

![Migration](https://cdn.hashnode.com/res/hashnode/image/upload/v1649267854619/KY3fHJKgf.png)

In order for Zustand to detect a new store version, it must be set inside the persist configuration object.

```js
export const useStore = create(
	persist(
		(set, get) => ({
			fishes: [
				{
					id: 1,
					name: 'Tuna',
				},
			],
			addAFish: () => set({ fishes: get().fishes + 1 }),
		}),
		{
			name: 'food-storage', // unique name
			version: 1,
			migrate: (persistedState) => {
				// Migrate store here...
			},
		}
	)
);
```

Once Zustand detects that version store 1 is superior to the persisted store 0 then it will try to migrate the store with the provided function.

This function receives the persisted local storage state as its parameter and expects a new store to be returned.

Returning to our example we should link up our store exclusively to the ID and not the whole fish object.

```js
migrate: (persistedState) => {
	const oldFishes = persistedState.fishes;
	const newFishes = oldFish.map((oldFish) => {
		return oldFish.id;
	});
	return newFishes;
};
```

And with this the new object structure is correct and as soon as a user loads up the webpage it will automatically migrate its store to the new version.

Any time a new change must be made it can easily be done by raising the version and updating the migrate function.
