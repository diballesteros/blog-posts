## How to easily add dark mode to a React app

One of the most common UX requirements for an app is to add a way to toggle a dark mode for the user. Using React and just plain ol’ CSS this is easily achieved! This article assumes you have a basic understanding of React hooks.

Typically you would want to set the dark mode colors throughout the entire app to affect various different colors. In standard CSS there exist [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). We can use these to change the colors of our entire app!

### Code-along

First and foremost lets set the structure of our app:

```js
<div className="App">
	<header className="header">
		<h1>This is my navbar</h1>
	</header>
	<main className="main">Main content</main>
</div>
```

Nothing out of the ordinary just a header and our content. Now, let's add a way to toggle the dark mode setting. I’ll quickly add [Material-UI](https://material-ui.com/) to prettify our app:

```js
<div className="App">
	<header className="header">
		<h1>This is my navbar</h1>
		<Switch />
	</header>
	<main className="main">Main content</main>
</div>
```

Perfect! now we need to handle the state of the dark mode

```js
const [darkMode, setDarkMode] = React.useState(false);

const handleChange = () => {
	setDarkMode((prevState) => !prevState);
};

return (
	<div className="App">
		<header className="header">
			<h1>This is my navbar</h1>
			<Switch checked={darkMode} onChange={handleChange} />
		</header>
		<main className="main">Main content</main>
	</div>
);
```

To explain, our dark mode is a basic toggle state that we switch with the **Switch**!

Next, with the basic logic out of the way, we can tackle the styling of the dark mode. To our App, header, and main classes we’ll add our CSS variables and a:

```css
transition: all 500ms;
```

This to make the transition fluid for the user.

```js
.App {
  // ..other styles
  transition: all 500ms;
  background-color: var(--bg);
}

.header {
  // ...other styles
  transition: all 500ms;
  background-color: var(--navbar);
  color: var(--color);
}

.main {
  // ...other styles
  background-color: var(--secondarybg);
  color: var(--color);
}
```

Great! Now all that’s left is to _hook_ up our CSS variables with the dark mode state. React offers us a useEffect hook to do secondary effects.

```js
React.useEffect(() => {
	if (darkMode) {
		document.documentElement.style.setProperty('--color', '#FFFFFF');
		document.documentElement.style.setProperty('--navbar', '#333333');
		document.documentElement.style.setProperty('--bg', '#212121');
		document.documentElement.style.setProperty('--secondarybg', '#212121');
	} else {
		document.documentElement.style.setProperty('--color', '#616161');
		document.documentElement.style.setProperty('--navbar', '#FFFFFF');
		document.documentElement.style.setProperty('--bg', '#FFFFFF');
		document.documentElement.style.setProperty('--secondarybg', '#F5F5F5');
	}
}, [darkMode]);
```

### Dark Mode Final Implementation

And that’s everything! Let’s check it out in a working example:

%[https://codesandbox.io/embed/react-dark-mode-sczpn?fontsize=14&hidenavigation=1&theme=dark]
