---
title: Tackling Common React Interview Questions
date: 2023-06-04
published: true
description: In this article I go over some common React interview questions understanding how to answer them and why these are the appropriate answers.
categories:
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1685921736070/f448be0b-a7bc-4622-90cd-1aa1fd7dc92c.png
---

## Introduction

React has been a part of the front-end developer ecosystem for over ten years now! That's a long time. As a result, it is quite common to see React listed as a requirement for jobs. Let's take a look at some common React Interview Questions

## What are the main features of React?

1. JSX - This is a syntax extension that lets you write HTML-like markup inside a JavaScript file. JSX is not unique to React but most React projects use it. But why use it? It enables us to co-locate our rendering logic with our markup.

    Three rules of JSX: Return a single root element, close all the tags, and camelCase most things.

2. Components - These are the building blocks of React. As mentioned previously these are built using JSX. This is what lets us build a modular front end.
3. Virtual DOM - Behind the scenes, this is how React does its magic. React keeps a lightweight representation of the real DOM in memory, it then checks changes in the state and only updates what is necessary.
4. One-way data-binding - React heavily encourages a unidirectional flow of data from top to bottom. This is why we commonly nest child components within parent components and transfer the data by passing props.
5. High performance - React only updates the components (or re-renders) that have changed rather than updating all components on every change.

## How do web browsers interpret JSX?

Although JSX is JavaScript, browsers are unable to understand JSX. We use transpilers such as Babel or SWC to transform JSX into browser-compatible JavaScript.

## What are synthetic events in React?

Typically browsers have native events that we interpret on the front end to handle a user's action, for example, clicking a button or typing in an input. React, to standardize this behavior across browsers, has implemented synthetic events which combine all these events into a singular API.

```javascript
const handlepreventDefault = (e) => {
	e.preventDefault();
	console.log('clicked on preventDefault');
};
```

## What is state in React?

The state is a unique JavaScript variable for React that will trigger a re-render in the UI when it is changed or updated. This is necessary to use over a typical JavaScript variable because we want to keep our changes in the logic in sync with changes in the UI.

```javascript
const [index, setIndex] = useState(0);
```

## What is state hoisting?

State hoisting, or in other words "Lifting state up" is when we move the stateful logic of a component to its parent component. The purpose of this is to make sure that two children's components can act on the same data.

Before we mentioned that data should obey the principle of one-way data-binding. So our data should only flow one way. State hoisting allows us to continue this principle by making sure our data is used in the places it is needed to be.

## What is the purpose of a function as a Child?

This is a React pattern that lets you pass a render function for the `children` prop. For example:

```javascript
<Foo>{(name) => <div>`hello from ${name}`</div>}</Foo>
```

Then the `Foo` component would be able to use the function by calling `children`:

```javascript
const Foo = ({ children }) => {
	return children('foo');
};
```

Here we can use the children function, and send in the `name` parameter to be invoked in the parent component's logic.

## Explain the differences between a Presentational Component and a Container Component

Presentational components are concerned with the UI while the container component is more so concerned with how things work (IE the stateful logic).

Take into consideration that Dan Abramov, one of the creators of React doesn't necessarily believe this to be necessary anymore depending on the rest of the codebase, especially with hooks. Take a look at his original [article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#:~:text=While%20container%20components%20tend%20to,as%20classes%20and%20as%20functions.).

## Why do we need keys for React Lists?

For React to differentiate between different elements in a list and correctly order them we give every element in a list a unique identifier, or a `key`.

```javascript
<ul>
	{artists.map((artist) => (
		<li key={artist.id}>{artist.name}</li>
	))}
</ul>
```

## Explain closures in React

To quickly summarize, closures are about having access to variables in the parent scope even after the parent function finishes its execution. React is JavaScript, so naturally we have access to this same principle.

Whenever you've used a `useState` hook you've already used closures in react:

```javascript
import React, { useState } from 'react';
function Counter() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};
	return <button onClick={handleClick}>You clicked me {count} times</button>;
}
```

The `handleClick` function has access to the `count` even after finishing the execution of the `Counter` component function. Higher-order components behave under a similar paradigm.

## What is the purpose of fragments?

A `<Fragment />` which also includes the `<> ... </>` syntax. This lets you group elements without a wrapper node. As a small aside if you include the word `Fragment` inside the syntax, you can add a `key` as you would in a list.

## Explain the core hooks in the React ecosystem

1. `useState` - lets you add a state variable to your component
2. `useEffect` - lets you synchronize a component with an external system and/or add side effects to a component
3. `useContext` - lets you read and subscribe to a context from your component. Context in this case refers to information available to any component in the tree below it.
4. `useRef` - lets you reference a value that's not needed for rendering.
5. `useMemo` - lets you cache the result of a calculation between renders. Take note this is good for calculating derived values based on a dependency array.
6. `useCallback` - lets you cache a function definition between re-renders. Similar to `useMemo` it is created based on a dependency array.

## How do you create a custom hook?

You create a custom hook whenever you want to share logic between two functional components. It's important to keep in mind that two hooks don't normally share the same state they just share the same logic.

For example, directly from the React docs, you may have a hook that handles the state inside a form input:

```javascript
export function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	function handleChange(e) {
		setValue(e.target.value);
	}

	const inputProps = {
		value: value,
		onChange: handleChange,
	};

	return inputProps;
}
```

Within the hook, we notice a few rules we should follow. We can only call hooks within other hooks or functional components and the hooks should be at the top of the file and **always** rendered in the same order.

This can then be called within our component:

```javascript
function Form() {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');
  // ...
```

Also, take notice that we can share stateful logic without sharing the state.

## What is the difference between class and functional components?

React class components rely more on the ES6 syntax of classes.

```javascript
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
```

Previously only class components could handle stateful logic and lifecycle methods. This is no longer the case with the introduction of hooks. Functional components can colocate state and lifecycle methods with `useState` and `useEffect` respectively.

Also, something to keep in mind, the creators of React are aligned with promoting and moving forward with hooks and functional components.

## What is a higher-order component (HOC)?

A higher-order component is another way of sharing code. Essentially, it takes a component and wraps it with some added functionality, then it returns itself.

So for example, if you have an API call that you need to access in several parts of the application, you could create a higher-order component that does this API call and use this wrap other components.

Typically they start with the keyword `with`

### Wrapping it up

Obviously, there are several other questions about the React ecosystem that could pop up but I think this is a good foundation. Leave a comment down below with any questions you've received before.

### Let's Connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)
