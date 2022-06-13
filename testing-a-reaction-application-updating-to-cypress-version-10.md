---
title: Testing a Reaction Application updating to Cypress Version 10
date: 2022-06-13
published: true
description: Testing a modern React application. In this part of the series, we go over how to update Cypress to version 10.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651098470347/9coA_akWr.png
---

### Introduction

In the last article of this series, we went over how to create a test with Cypress, an end-to-end testing framework. Check it out[here](https://relatablecode.com/testing-a-react-application-creating-a-cypress-test). Cypress is a featureful framework that has only improved with its new version, and its main view got a makeover to give it a more modern look.

![new Cypress screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1655046298412/aTNqXSjwn.png)

Let's briefly go over the small barebones application we've made up to this point.

When clicking on a button it fetches posts from a service and displays them on the page:

![Cypress test](https://cdn.hashnode.com/res/hashnode/image/upload/v1655045723084/lfvg1sPnn.png)

For reference, you can find the repository [here](https://github.com/diballesteros/react-testing).

### Updating Cypress

First, let's go ahead and update our Cypress package. If this is your first time using Cypress, it'll also install it.

```bash
yarn add cypress --dev
```

or if you're using `npm` first uninstall it then re-install it. I've had issues with updating the package so I prefer reinstalling it fresh. If someone in the comments has a better way please let me know!

```bash
npm uninstall cypress
npm install cypress --save-dev
```

This should update Cypress to its newest version 10. As of this article, this is version 10.1.0. If you are having compatibility issues while reading this article I suggest checking out the official [Cypress changelog](https://docs.cypress.io/guides/references/changelog).

Easy enough. Now let's head into the breaking changes.

### Cypress Configuration file

Let's try running Cypress.

```js
npm run dev
npm run test-e2e
```

If you still have cypress open you'll notice a similar error:

![Cypress configuration file error](https://cdn.hashnode.com/res/hashnode/image/upload/v1655048359437/Cvc6b6IfB.png)

Cypress now uses a different configuration file. Let's delete our `cypress.json` and create a new `cypress.config.js`

This new file has a `defineConfig` function that will contain all of our old options. Which in this case was just the `baseUrl` option.

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		specPattern: 'cypress/integration/**/*.spec.ts',
	},
});
```

Now we'll get the new modern screen:

![new Cypress screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1655048663385/5sfY1Lw7C.png)

### Resolving errors

We'll get met with our first error when we click on the end-to-end testing option:

![Cypress error no supportFile](https://cdn.hashnode.com/res/hashnode/image/upload/v1655050382223/vzIfeTzTD.png)

This is simple, head into your Cypress directory and rename `cypress/support/index.js` to `cypress/support/e2e.js`

![Cypress choosing a browser](https://cdn.hashnode.com/res/hashnode/image/upload/v1655050926555/IRYsEXeqS.png)

Now we can choose a browser to launch our tests. Let's start testing in Chrome. When we click on it we'll see the option to create our first spec. But wait, where did all of our old test files go?

![Cypress create first test](https://cdn.hashnode.com/res/hashnode/image/upload/v1655051002290/SJ6NgSJQ4.png)

if we click on **View spec pattern** we'll see how it's looking for tests.

![cypress view spec pattern](https://cdn.hashnode.com/res/hashnode/image/upload/v1655051037658/Fi5Jgj7T2.png)

Looks like Cypress now defaults to the `**.cy.{js,jsx,ts,tsx}` extensions. Let's just update the spec pattern for the sake of our example project. In our Cypress configuration file let's add a new `specPattern` property.

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		specPattern: 'cypress/integration/**/*.spec.js',
	},
});
```

Now we'll see all of our tests again!

![Cypress test list](https://cdn.hashnode.com/res/hashnode/image/upload/v1655051246737/ZaZLM5E9J.png)

We can now run our tests as normal.

#### Some clean-up

We can also delete our `plugins` folder inside our `cypress` folder as it is no longer needed.

### Wrapping it up

Due to Cypress' new version, I decided it was best to first update our version. Next time we'll cover what I had to delay, hooking up our testing frameworks with a code coverage functionality.

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
