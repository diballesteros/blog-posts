---
title: Simple styling using CSS grid for column groups
date: 2021-11-15
description: How to quickly code up simple styling for a CSS grid layout and pseudo-selectors to apply different styling to column groups
categories:
    - css
---

## Simple styling using CSS grid for column groups

Recently, I was tasked with creating a scheduler component. Although this article won’t go into full detail on how it’s being implemented one thing that I had to do was set up the layout (obviously).

I decided that the best course of action for this was to use a [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) to lay everything out. One of the requirements is that it was necessary to have column groups with different color backgrounds. Simple enough right?

### Planning it out

Where possible I like to use CSS and not javascript as it tends to be considerably faster. In this case, instead of iterating over the array and manually applying the styling that way, I decided the best way would be to use a CSS pseudo-selector in order to determine which columns should be colored.

Luckily enough there exists a [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) called nth-of-child and nth-of-type. These can be used to dynamically apply a set of CSS styling to a specific number of children. How you may ask? Well the selector can be used in conjunction with simple math to plan it out

Example:

```
    li:nth-child(2) {
      color: red;
    }
```

### Determining the sequence

Within the selector we have the option to select a child with the following operation: an + b So for example, if we were to just list out nth-child(3) it would be the third child. With the following sequence nth-child(2n) it would be every second child starting with the second.

In my particular case, I had to group up the columns by 4 and style them that way.

What I ended up going with was the following sequence:

![code](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468733642/_M_x5X1pw.png)

Column styling

With this, we are grouping up the columns by 8 and only coloring the second group of columns as by subtracting I am targeting the final four each time.

Here is the provided example:

[https://codesandbox.io/embed/jolly-nobel-27rtv?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/jolly-nobel-27rtv?fontsize=14&hidenavigation=1&theme=dark)
