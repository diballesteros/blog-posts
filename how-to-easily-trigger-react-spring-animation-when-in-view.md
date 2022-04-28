---
title: How to easily trigger react-spring animation when in view
date: 2021-08-27
published: true
description: How to trigger a react-spring animation when in view using React hooks. Using Intersection Observer and useSpring create a seamless animation when on screen
categories:
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651104429605/NhNnm0FSM.png
---

### Introduction

[react-spring](https://react-spring.io/) is a library to easily create and integrate animations in a React app. A possible use-case of the library is triggering an animation only when a particular ref or component is in view.

In this tutorial, I’ll cover how to set up react-spring and the hooks necessary!

This guide assumes familiarity with React and react-spring and the fundamentals of React Hooks.

### Requirements

For the sake of the example let’s say we have a webpage that is split into two sections. Both sections take up the entire viewport. When scrolling down to the second page let’s have a header fly in from the right.

### Getting started

First, let’s set up the page with just the visual portion:

```js
<div className="App">
	<div style={{ backgroundColor: 'grey' }}>
		<h1>This is my first page</h1>
	</div>
	<div style={{ backgroundColor: 'white' }}>
		<h2>This should come flying in</h2>
	</div>
</div>
```

I’ve added some styles to better differentiate between both sections.

Now with the styles out of the way let’s set up the react-spring hook to make it fly in. We need to use useSpring to set up the animation and change the h2 element to an animated h2 element.

```js
const headerStyle = useSpring({
	config: { duration: 500 },
	from: { opacity: 0, left: '-500px' },
	to: {
		opacity: 1,
		left: '-500px',
	},
});

return (
	<div className="App">
		<div style={{ backgroundColor: 'grey' }}>
			<h1>This is my first page</h1>
		</div>
		<div style={{ backgroundColor: 'white' }}>
			<animated.h2 style={headerStyle}>
				This should come flying in
			</animated.h2>
		</div>
	</div>
);
```

Perfect. But wait our hook is missing some validations in order to transition between two styles. Luckily, modern browsers offer access to the Intersection Observer API. Without getting into the nitty-gritty, this API lets us detect elements that are visible.

### Intersection Observer

Let’s go ahead and create the hook we’re going to use:

```js
function useIntersectionObserver(
	elementRef,
	{ threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
) {
	const [entry, setEntry] = useState();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current;
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(updateEntry, observerParams);

		observer.observe(node);

		return () => observer.disconnect();
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry;
}
```

Alright, let’s example how this hook works. Essentially it receives a ref, the node stored in the ref is then set to be observed by the IntersectionObserver. A callback is passed to the observer so it is called when in view.

A local state is then set and we return this same entry. An additional parameter is available to freeze the trigger so it isn’t executed multiple times.

### Hooking it up

Next, let’s create the ref and hook it up to the new hook we just created:

```js
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true
  });

  return (
    <div className="App">
      <div style={{ backgroundColor: "grey" }}>
        <h1>This is my first page</h1>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <animated.h2 style={headerStyle}>
          This should come flying in
        </animated.h2>
        <div ref={triggerRef} />
      </div>
    </div>
```

We set up a trigger ref right below the header and we’re sending this same ref to useIntersectionObserver.

If we go ahead and console.log() the dataRef we should see it getting populated if we scroll down.

Inside the object there is a particular property that interests us:

![Values of entry of IntersectionObserver](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284965533/-_BvEv6jp.png)

isIntersecting is exactly what it says. When it’s visible and intersecting with the DOM/viewport it will change over to true. Let’s go ahead and set up the useSpring to validate this property.

```js
const headerStyle = useSpring({
	config: { duration: 500 },
	from: { opacity: 0, left: '-500px' },
	to: {
		opacity: dataRef?.isIntersecting ? 1 : 0,
		left: dataRef?.isIntersecting ? '0px' : '-500px',
	},
});
```

And that’s it! Here’s the working example:

https://codesandbox.io/embed/trigger-react-spring-in-view-c5e76?fontsize=14&hidenavigation=1&theme=dark
