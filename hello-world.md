---
title: How To Create a Stunning Side Drawer with React-spring
date: 2021-07-23
description: How to create react and react-spring to create a stunning side drawer component using typescript. Includes an overlay and animations.
categories:
    - react
---

## How To Create a Stunning Side Drawer With React-spring

At my job, I recently had to create a side drawer and due to specific constraints had to create it using react-spring.

### Requirements

-   Button to toggle the side drawer.
-   Secondly, animate the dimmed overlay and side drawer.
-   Finally, clicking on the overlay should hide the overlay and side drawer.

### Breaking it down

With the requirements taken into consideration I figured I should first break it down into steps:

1. Show button
2. Animate overlay on button click
3. Animate side drawer
4. Close on overlay click

### Code-along

First and foremost, let's create the button that will handle the on-click event. The click event should toggle the state of the side drawer

```js
export default function App() {
	const [show, setShow] = useState();
	return (
		<div className="App">
			<button onClick={() => setShow((prevState) => !prevState)}>
				Click me
			</button>
		</div>
	);
}
```

![click me](https://cdn.hashnode.com/res/hashnode/image/upload/v1649263516704/GVgufN_TN.png)

Easy enough. Now, let's start hooking up react-spring to the state we just created. Thinking about how the animations will work first we want to display the overlay as well as push out the side drawer at the same time. The contents inside of the side drawer don’t really concern us too much but in order for the transitions to be used fluidly and prevent state management errors let’s use **useTransitition**.

**useTransition** is a hook provided to us by react-spring specifically for the task of tackling lifecycles!

````js
  const transitions = useTransition(show, null, {
    from: { position: "fixed", opacity: 0, width: 0 },
    enter: { opacity: 1, width: 320 },
    leave: { opacity: 0, width: 0 }
  });```

Now let’s break down the hook itself. We are evaluating the show state we had set earlier and are declaring two styles to adjust: the opacity of the overlay and the width of the side drawer.

### The Overlay

First, let’s code up the overlay; all we have to do is display a dimmed div.

```js
 <div className="App">
      <button onClick={() => setShow((prevState) => !prevState)}>
        Click me
      </button>
      {transitions?.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            />
          )
      )}
    </div>
````

Transitions must be mapped over. The key is for react to differentiate between the different items in the array. Because we are only interested in the overlay for the moment we will pass the opacity we declared in the previous hook.

![overlay](https://cdn.hashnode.com/res/hashnode/image/upload/v1649263517819/MPjqHgmNz.png)

### Side drawer

Now lets go ahead and animate the inner side drawer as well.

```
<div className="App">
      <button onClick={() => setShow((prevState) => !prevState)}>
        Click me
      </button>
      {transitions?.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            >
              <animated.div style={{ width: props.width }} className="drawer">
               Hey look it's a side drawer!
              </animated.div>
            </animated.div>
          )
      )}
    </div>
```

Similar to the overlay, we create our animated div and pass in the width from **useTransition**.

![sidedrawer](https://cdn.hashnode.com/res/hashnode/image/upload/v1649263518895/Xm8jX4bNy.png)

All that’s left to do is close the overlay when we click it for a great user experience.

```
<animated.div style={{ width: props.width }} className="drawer">
                Hey look it's a side drawer!
</animated.div>
<div className="fill" onClick={() => setShow(false)} />
```

Right next to the side drawer div we will put the div that handles the on-click event.

And with that, we’re done!

Heres a working example of the code:

%[https://codesandbox.io/embed/sidedrawer-react-spring-klkf2?fontsize=14&hidenavigation=1&theme=dark]
