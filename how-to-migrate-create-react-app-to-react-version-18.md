---
title: How to migrate Create-React-App to React version 18
date: 2022-04-18
published: true
description: My experience migrating my Create-React-App (CRA) to React Version 18. How to deal with the breaking changes and handle errors (Typescript included).
categories:
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651101564070/9KD0sNeg2.png
---

### Introduction

React just recently came out with a new version of their library: React version 18. I have a few apps that I’ve been maintaining for a while now that we’re bootstrapped with Create-React-App. I’ll go over how to migrate to version 18 and the issues I ran into along the way.

[Here](https://reactjs.org/blog/2022/03/29/react-v18.html) you can find the list of changes for React 18.

I also have a small write-up for my thoughts on it [here](https://relatablecode.substack.com/p/react-18-finally-out-and-new-css?s=w).

### Create-React-App migration to React version 18

The actual process of migrating is pretty quick. Let’s install the necessary dependencies:

```bash
yarn add react react-dom
```

The team behind create-react-app also came out with version 5.0.1 to help the migration process and make any new apps come with it out of the box:

```bash
npm install --save --save-exact react-scripts@5.0.1

or

yarn add --exact react-scripts@5.0.1
```

If you’re using Typescript don’t forget to update your types not only for React but for different **third-party** libraries. A lot have updated their apps.

```bash
yarn add @types/react @types/react-dom @types/node --dev
```

### Mandatory changes

The first thing we have to do is change how our root node is being rendered by React. The _first_ code block is how it originally looks.

```ts
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Now we’re going to use the newly added **createRoot** function:

```ts
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
```

### Create-React-App migration to React version 18: Typescript

If you don’t use Typescript you can skip this portion.

First, let’s check out how many errors we have to deal with. This will vary from project to project depending on how many incompatible third-party libraries you may have but they’ll all be resolved in a similar fashion.

Run the following command:

Ouch, we got 36 errors to resolve. Luckily most of them are the same.

![36 errors](https://cdn.hashnode.com/res/hashnode/image/upload/v1650545183141/vH6y2WEth.png)

I use [Semantic UI](https://react.semantic-ui.com/) in this project and there were several errors with the UI Radio component. For example, I had a **setView** function that took in the parameters from the **onChange** prop. For some reason, I lost the typing on the **e** and **data** parameters.

```js
Parameter 'data' implicitly has an 'any' type. onChange={(e, data) => setView(data.value as number)}
```

I hit **F12** (Windows users) or right-clicking and heading to the Type definition. On the prop of onChange to check out what it should be returning and manually set the types to the function.

![types](https://cdn.hashnode.com/res/hashnode/image/upload/v1650545184206/NoxDQwg6_.png)

Make sure to import the type from the library and set the types inside the function itself.

```ts
import type { CheckboxProps } from 'semantic-ui-react';


<Radio
// other props
onChange={(e: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => { // whatever your function does } }
/>
```

### Create-React-App migration to React version 18: Sentry

I also use the Sentry library to track errors in my project. [Here’s a quick write-up](https://relatablecode.com/how-to-quickly-add-error-tracking-with-sentry/) on how that works. For sentry, I got some errors with the ErrorBoundary component. This will probably be patched up but we can do it ahead of time until then.

React version 18 requires children to be explicitly declared in the props, hence the error:

```bash
error TS2769: No overload matches this call. Overload 1 of 2,
'(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>): ErrorBoundary', gave the following error.
```

Thankfully, there’s a library called patch-package that allows us to fix this up. Let’s install it.

```bash
yarn add patch-package --dev
```

As before let’s check out the type definitions for the ErrorBoundary by stepping into it. Hitting F12 or right-clicking and going to the Type definition.

![type definition](https://cdn.hashnode.com/res/hashnode/image/upload/v1650545185359/dA41Qj7wS.png)

As suspected the type does not have the children prop. Let’s add it by setting it to a **React.ReactNode**.

```ts
export declare type ErrorBoundaryProps = {
children: React.ReactNode;
 //...rest of the type, just ignore it
```

In order for **patch-package** to recognize this change we should run the following command in our terminal:

```bash
npx patch-package @sentry/react
```

This will create a file in our project indicating the changes we patched in the library.

```json
diff --git a/node_modules/@sentry/react/types/errorboundary.d.ts b/node_modules/@sentry/react/types/errorboundary.d.ts
index 4e1f326..779e0e7 100644
--- a/node_modules/@sentry/react/types/errorboundary.d.ts
+++ b/node_modules/@sentry/react/types/errorboundary.d.ts
@@ -9,6 +9,7 @@ export declare type FallbackRender = (errorData: {
 resetError(): void;
 }) => React.ReactElement; export declare type ErrorBoundaryProps = {
+ children: React.ReactNode;
/ **If a Sentry report dialog should be rendered on error */ showDialog?: boolean;
/**
```

The final step is to add the following line to our **scripts** in our **package.json**.

```json
"scripts": {
 // ...other scripts
"postinstall": "patch-package"
}
```

### Sidenote

As a small aside if there are any libraries you don’t want to patch and just want to ignore the errors for the time being while the maintainers fix them up. (Or alternatively, you can open up a PR to fix it! 😬) Just add some ts-ignore to the file right before the error:

### Wrapping it up

Create-React-App is still the most widely used method to bootstrap React apps so being able to migrate it is pretty important for some users. 🚀

If you liked this check out other posts like this at [Relatable Code](https://relatablecode.com)

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
