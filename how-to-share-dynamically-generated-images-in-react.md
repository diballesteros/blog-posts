---
title: How to share dynamically generated images in React
date: 2021-09-03
published: true
description: How to share dynamically generated images in React to various social media sites, email, clipboard and various other options
categories:
    - react
---

## How to share dynamically generated images in React

I have been developing a [pokémon related app](https://nuzlocke.netlify.app) where you can track encounters. Throughout the process I also added a way to generate a summary image of the run:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1649276400145/zmSMrgPEB.png)

Generating the image was easy enough, but typically most users would want to share that image directly to a social media site. In comes the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)! With this it can natively check for methods from the OS to share the site, so direct integration with Facebook, Twitter, Reddit, etc is unnecessary.

**DISCLAIMER**: For the time being this API has limited compatibility across some operating systems and browsers. Check out https://caniuse.com/?search=navigator.share for the current state.

## The Requirements

-   Share button
-   Dynamically generate an image from the HTML
-   When clicking the share button share the image to a variety of different options

## The Setup

Before anything else, to dynamically generate the image a third-party library is necessary. In this tutorial, I will be using [html-to-image](https://www.npmjs.com/package/html-to-image). Cool! Now, let’s go ahead and start setting up the share button.

```js
<div>
	<h1>Dynamically generate and share images</h1>
	<button>Share</button>
	<div>// ...Dynamically generated content</div>
</div>
```

Simple enough. In order to extract the content let’s set up html-to-image. First, we need to hook up the div that’s going to contain the dynamic content with a ref using the useRef hook from React.

```js
const imageRef = useRef(null);

<div>
	<h1>Dynamically generate and share images</h1>
	<button>Share</button>
	<div ref={imageRef}>// ...Dynamically generated content</div>
</div>;
```

## Create and share the image

html-to-image provides us with a function to directly take out the HTML element and create an image: toBlob. Here we create the function:

```js
const handleShare = async () => {
	const newFile = await toBlob(imageRef.current);
	const data = {
		files: [
			new File([newFile], 'image.png', {
				type: newFile.type,
			}),
		],
		title: 'Image',
		text: 'image',
	};
};
```

Also, we must format the result to correctly be able to share. We can do this by making the image into a Blob by extracting the current value from the Ref as well as setting a title and text.

```js
const handleShare = async () => {
	const newFile = await toBlob(imageRef.current);
	const data = {
		files: [
			new File([newFile], 'image.png', {
				type: newFile.type,
			}),
		],
		title: 'Image',
		text: 'image',
	};

	try {
		await navigator.share(data);
	} catch (err) {
		console.error(err);
	}
};
```

Sharing the image is as simple as sharing the constructed data. This will automatically bring up a list of options available. But, wait! Earlier I mentioned compatibility issues, for that reason I added a try and catch, but we can take this a step further, the API also provides us a function to check if the data can be shared at all: navigator.canShare.

```js
try {
	if (!navigator.canShare(data)) {
		console.error("Can't share");
	}
	await navigator.share(data);
} catch (err) {
	console.error(err);
}
```

Check out the end result with the function hooked up to the button:

How the share shows up on mobile:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1649276401796/ZG9_mu1rp.png)
