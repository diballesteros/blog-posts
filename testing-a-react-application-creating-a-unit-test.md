---
title: Testing a React Application Creating a Unit Test
date: 2022-05-02
published: true
description: Unit tests are essential to ensuring confidence in the code we have written. In the fourth part of this series, I'll be going over how to write our first unit test and the thought process of how I decided what to test.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651098470347/9coA_akWr.png
---

### Introduction

Unit tests are essential to ensuring confidence in the code we have written. In the fourth part of this series, I'll be going over how to write our first unit test and the thought process of how I decided what to test.

[First part](https://relatablecode.com/testing-a-react-application-the-modern-approach/)

[Second part](https://relatablecode.com/testing-a-react-application-the-setup/)

[Third part](https://relatablecode.com/testing-a-react-application-what-is-vitest/)

> A unit test is a testing method for an isolated and individual piece of code, a unit. In the context of React, this more than likely refers to testing our components in isolation and any associated function

That's great! But how do we decide exactly what to test? Our tests should only be concerned with the interactions the user expects. Implementation details such as variable names, function names, etc should all be irrelevant in our tests.

![unit test](https://cdn.hashnode.com/res/hashnode/image/upload/v1651460964006/RZ_YF4dY_.png)

### Deciding on the Unit Test

To give a brief review, we created a very barebones application that fetches some generic JSON and displays them on the page:

![modern react testing](https://cdn.hashnode.com/res/hashnode/image/upload/v1651461010761/zC7Hk3jwu.png)

What we can reasonably assume the user will care about:

1. When clicking on the fetch posts button it should list out the posts.
2. When clicking on the clear posts button it should clear the posts.

What we don't care about:

1. The name of the function calling the fetch request
2. The class names of the elements in the content

#### Looking at our code

Let's compare this by looking at our code.

```js
<section className="App-buttons">
    <button onClick={fetchPosts} type="button">
      Fetch Posts
    </button>
    <button onClick={clearPosts} type="button">
      Clear posts
    </button>
</section>
{loading && <p>Loading...</p>}
{posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  ))}
</main>
```

So to visualize this as if we were the end-user:

![validate post flow](https://cdn.hashnode.com/res/hashnode/image/upload/v1651461151484/_TP3g_2HH.png)

What's wrong here? Well, we're testing several implementation details such as the content of the response and whether or not the function was executed.

These parts should be a black box for our tests.

Something better would be:

![correct unit test flow](https://cdn.hashnode.com/res/hashnode/image/upload/v1651461198905/uvkLzt9lm.png)

You may be asking, well doesn't the first option test for more?

This is an incorrect way to approach it. Code changes, we tend to refactor. If our tests are constantly breaking when making code changes we add a lot of overhead to development.

In the end, what we care about is that the posts are **fetched and displayed**. The details of the function are _irrelevant_.

### Modifying our App for the first Unit Test

Let's modify our `vite.config.js` file:

```js
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
```

### Writing the Unit Test

Let's go ahead and create our first test. At the root of our project let's create `App.test.js`

```js
import { describe } from 'vitest';

describe('Testing our React application', () => {
	it('Fetch posts', () => {});
});
```

But wait! While creating our test let's watch and see if they're passing or failing. In the terminal run the following command:

```bash
vitest --watch
```

This should generate a failure as we have no assertions in our test:

![failed test with no assertions](https://cdn.hashnode.com/res/hashnode/image/upload/v1651461390079/Fk_dyHpbK.png)

Next, in order to render our components, we need the help of another library: [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/).

> The @testing-library family of packages helps you test UI components in a user-centric way.

```bash
npm install @testing-library/react @testing-library/jest-dom @testing-library/user-events --save-dev
```

First, let's just check we can correctly render and pass a test:

```js
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Testing our React application', () => {
	it('Fetch posts', async () => {
		render(<App />);

		expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
	});
});
```

Here we just render our app and check for the title of our heading. Expect in this case is our assertion that decides if we pass a test or not.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651461506563/0mI3pyql6.png)

### Unit Test for fetching

But this isn't really relevant to actual testing. So let's try working with our button and post-fetching functionalities.

```js
import React from 'react';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('Testing our React application', () => {
	it('Fetch posts', () => {
		const user = userEvent.setup();

		render(<App />);

		expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
	});
});
```

`userEvent` in this case lets us follow a core principle we laid out at the very beginning: Make tests that can most closely resemble how the user interacts with the application.

For example, inside of our userEvent object, we have access to the click function! And with this click function, we can send in an argument to look for our button.

```js
userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));
```

Let's explain this with a diagram:

![explaining a userEvent click](https://cdn.hashnode.com/res/hashnode/image/upload/v1651461598950/AEKziXpL-.png)

A whole lot of utilities to click the button in our unit test. However, the function invoked by clicking the button is asynchronous. So let's make our test asynchronous and wait for the posts to be fetched.

Later on, we'll mock this request to test for more possibilities.

```js
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';

describe('Testing our React application', async () => {
    it('Fetch posts', () => {
      render(<App />);
      userEvent.click(screen.getByRole('button', { name:'Fetch Posts'}));

      await waitForElementToBeRemoved(() => screen.queryByLabelText('Loading...')
);

      expect(screen.getByRole('heading', { level: 3 })).toBeDefined();
    });
});
```

Perfect. Yet again we're using the screen functionality and just waiting for the Loading text to disappear.

**BUT**, this will give us an error...but why? Well, we're not stubbing or mocking the fetch service that's called when clicking the button. How can we solve that?

### Wrapping it up

In the next article, I'll go over how to use MSW to mock requests that are launched from the tests. We'll go over the setup and integrate it with this test!

More content at [Relatable Code](https://relatablecode.com)

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
