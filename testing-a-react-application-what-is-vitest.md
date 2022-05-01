---
title: Testing a React Application What is Vitest?
date: 2022-04-26
published: true
description: The third part of a series of articles on how to test a React Application. I go over how Vitest and its syntax work in the simplest terms.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651098470347/9coA_akWr.png
---

### Introduction

Vitest is a **unit-test** framework that is “blazingly fast” and, **wow** , it is. Today I’ll be going over how to set up vitest and a brief explanation of how it works. Just for clarification, this is the third article in a series where I go over modern-day testing strategies for React applications.

[First part here](https://relatablecode.com/testing-a-react-application-the-modern-approach/)

[Second part here](https://relatablecode.com/testing-a-react-application-the-setup/)

What is a unit test?

> _A unit test is a testing method for an isolated and individual piece of code, a_ **_unit_** _. In the context of React, this more than likely refers to testing our components in isolation and any associated functions._

With this in mind, the end goal with vitest is to render our React components or functions in isolation from the rest of the application and test core functionality. Testing just a unit of our code if you will.

![why](https://cdn.hashnode.com/res/hashnode/image/upload/v1651084793796/zHNCvkjvF.gif)

But why is this so important? Well, tests give us confidence that whenever we make a change in our we haven’t broken anything. Sure, you can have some vague knowledge of everything the code touched and how it may affect the code in production.

But as any developer will tell you. This is not enough. Things happen, there are edge cases. Moreso if you’re on a team where the developers on the team may be unfamiliar with the code.

They also serve as a form of documentation. Reading through a test will give a developer idea of what the intended purpose of blocks of code is. With that out of the way let’s get into using Vitest

### Configuration

Like many other libraries, this will have a configuration file at the root of our project. Note if your project is already running on **Vite** it will look for a vite.config.ts file.

Although our test application (if this is the first article you’re reading check out the [second part](https://relatablecode.com/testing-a-react-application-the-setup/) as it has the barebones site we built for the sake of testing out vitest 😎)

```js
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// ...
	},
});
```

Here we can set up the file globs we want to monitor, any dependencies we require, the environment — for example, if we want to use nodejs, jsdom, or happy-dom. Why is this part so important? Well, it mocks where our unit tests are run.

For web applications, it might be a better choice to use jsdom or happy-dom as it more so resembles a browser. Let’s go with that.

![browsers](https://cdn.hashnode.com/res/hashnode/image/upload/v1651084795792/Ip3ltV8N7.jpeg)

A full list of possible configurations can be found [here](https://vitest.dev/config/).

For now, our code will only have the following: a vitest.config.js file at the root of our project.

```js
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
	},
});
```

### Commands

### test and describe

When you first open up a test file you’ll see one of two keywords: **test** and **describe**.

test is a function that creates the test. The vitest test runner will look for this syntax to see which tests to run.

![test syntax](https://cdn.hashnode.com/res/hashnode/image/upload/v1651084799516/8TerPFQGI.png)

test is our keyword. The **green text** is the test description and is how we identify our test in the terminal when looking at our test execution. The following function contains our actual test content. More on that later.

describe is for our organization. We can declare a suite of tests inside of a file. Normally the file is its own suite.

![describe syntax](https://cdn.hashnode.com/res/hashnode/image/upload/v1651084800943/nuuNCxsIk.png)

Its structure is very similar to test

![describe syntax](https://cdn.hashnode.com/res/hashnode/image/upload/v1651084802342/gQAEt8Yym.png)

We can put our test inside of the describe function.

### expect

expect is the most crucial part of our test. It's what we expect the outcome of the test to be. For example, if we are doing some simple math:

```js
const two = 1 + 1;

expect(two).to.equal(2);
expect(two).toBe(2);
```

Our tests will return success or failure based on our expect functions.

Very easy to understand. But we are not limited to just equals there are a ton of expect functions. Find the full list [here](https://vitest.dev/api/#expect).

### after and before

If there are some common actions we have to run before or after our tests then Vitest offers us the after and before keywords.

```js
beforeEach(() => {});

afterEach(() => {});
```

### Wrapping it up

Vitest has a ton of built-in functionality to create amazing unit tests. In the next article, I’ll go over how to create a test application using our barebones application. 🚀

More content at [Relatable Code](https://relatablecode.com)

### Let’s connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
