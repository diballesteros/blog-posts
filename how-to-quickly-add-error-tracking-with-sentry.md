---
title: How to quickly add error tracking with Sentry
date: 2021-10-24
published: true
description: A short tutorial on how to quickly and easily add error tracking and performance monitoring with the Sentry library in a React app
categories:
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651103796841/R96urmHj2.png
---

### Introduction

[Sentry](https://sentry.io/) is an error tracking and performance monitoring library that can be quickly hooked up to any existing project. This is especially useful to detect a considerable amount of bugs and can be easily integrated into a React app.

Let’s get started!

### Installation

First, let’s install the necessary third party libraries

```bash
yarn add @sentry/react @sentry/tracing
```

Sentry recommends initializing Sentry as early as possible. In a React app, this will commonly be the index.jsx/index.tsx

```js
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
Sentry.init({
	dsn: 'APPLICATION_DSN',
	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 0.2,
});
```

Looking at the code we initialize the application. The property of tracesSampleRate controls the volume of transactions directly to Sentry. This can be any value between 0 - 1. For the time being, I'll leave it as 0.2.

Now in order to get a functional DSN, we have to create a Sentry account. From their page, this is a fairly straightforward process. They even offer a brief section that details how to get it set up in React. We’ll get an option to create a new project whilst selecting a platform:

![Sentry](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468763185/FZMVGWQV4i.png)

Sentry platform selection

Let’s select React. On the following screen, you’ll see a code snippet much like the one above with the DSN and how to initialize Sentry.

### Testing

Now that we have Sentry initialized we can go ahead and test it out. My preferred method of integration is wrapping a Sentry Error Boundary around my components with a fallback component:

```js
import * as Sentry from '@sentry/react';

<Sentry.ErrorBoundary fallback={<p>This is a fallback</p>}>
	<MyComponent />
</Sentry.ErrorBoundary>;
```

In order to force an error let’s create the following code in a component

```js
const errorMethod = () => {
	throw new Error('Error');
};

return (
	<button onClick={errorMethod} type="button">
		Break the world
	</button>
);
```

Upon pressing the button this should generate an error and be sent directly to Sentry.

As an import aside, if you have an ad blocker (uBlockOrigin/Brave browser) make sure to disable it as Sentry uses cookies in order to keep track of the errors and performance monitoring.

After pressing the button you should see something along these lines on the Sentry dashboard:

![Sentry](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468764900/xfa1Z7ptd.png)

_Sentry issue entries_
