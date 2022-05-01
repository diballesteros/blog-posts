---
title: Testing a React Application The Setup
date: 2022-04-25
published: true
description: In the second part of my series on how to perform modern testing for a React application, I go over the setup of the react application and the testing packages.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651098470347/9coA_akWr.png
---

### Introduction

The second part of my ongoing series on how to have a more modern approach to testing a React application. Last time I went over the tools I prefer using. 🔨

-   Cypress for End-to-End testing
-   Vitest for Unit Testing
-   MSW for mocking our services

In this post, I’ll go over how to install everything before heading into the testing.

When first getting into testing it can be a little daunting with so many sources claiming what is the ideal way to test and what are the best packages or frameworks to use. But, in order to appreciate the testing frameworks, it’s important to see them in action in an application

I hope to give a very opinionated view on how to test in order to avoid decision paralysis and just get to testing!

### Setting up a React app for Testing

I’ve gone ahead and created a barebones application for the purposes of going through testing. You can find it here. This is the commit of its initial state [right here](https://github.com/diballesteros/react-testing/commit/b4514d2a3b6afc8f850e012264fbb949462afa62).

![github repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1650898959643/ALGy1tKEg.png)
_GitHub repository files_

It’s a simple react application powered by Vite that loads posts from [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) when a button is clicked.

Here is what it looks like:

![barebones react app](https://cdn.hashnode.com/res/hashnode/image/upload/v1650898960866/P8SFjttzr.gif)
_Fetching JSON, nothing fancy_

Just to give a very brief overview of the code:

```js
import { useState } from 'react';
import './App.css';

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchPosts = async () => {
		setLoading(true);
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const json = await response.json();
		setPosts(json);
		setLoading(false);
	};

	const clearPosts = () => {
		setPosts([]);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Modern React Testing</h1>
			</header>
			<main className="App-content">
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
		</div>
	);
}
```

We have two functions:

-   **fetchPosts ** — Calls the endpoint and fetches posts with a title, body, and id. This is set inside our local state
-   **clearPosts**  — Resets the local state to an empty array

These posts are then iterated over and displayed with a **map** function.

### Why this application?

![why in letter blocks](https://cdn.hashnode.com/res/hashnode/image/upload/v1650898962160/GRZv40fuic.jpeg)

Fetching, transforming, and displaying a request to an API is probably the most common task in application development. This app will allow us to test exactly those things.

We’ll eventually go on to **mock** the JSON service with MSW. Do some end-to-end visual testing with Cypress and go through **how a test can be created** with their test-runner. Finally, with Vitest we’ll create some unit tests to go gain some confidence around our **individual components** and **transformation functions**.

I tried to keep it as simple as possible to focus on what’s important to us. The testing! 💯

### Setting up the Testing Packages

This will just be a simple package installation:

For Vitest:

```
npm install -D vitest
```

For Cypress:

```
npm install -D cypress
```

For MSW:

```
npm install -D msw
```

Or all at once:

```
npm install -D vitest cypress msw
```

### Wrapping it up

Here’s the [same repository](https://github.com/diballesteros/react-testing/tree/c7530cd63f37c97d198e085a6d340f69ac330c4c) with the updated commit and all the packages correctly installed.

Now we’re finally ready to dive headfirst into the intricacies of the testing libraries. Next time I’ll go over how Vitest and how to use its simple syntax.

Thank you for reading! If you have any more questions don’t hesitate to reach out.

More content at [Relatable Code](https://relatablecode.com)

### Let’s connect!

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
