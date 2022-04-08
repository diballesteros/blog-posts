---
title: How to use REM units with react-window with a custom hook
date: 2022-01-16
description: Short tutorial on how to use REM units with react-window by converting the necessary REM units to PX units with a custom hook.
categories:
    - react
    - css
---

## How to use REM units with react-window with a custom hook

![Window](https://cdn.hashnode.com/res/hashnode/image/upload/v1642351925382/-cUt_WlFz.jpeg)
_Photo by Hannah Tims on Unsplash_

A while back I transitioned my web app to using [REM](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) units instead of the PX unit. This has a lot of benefits that I won’t get into this article, but I did encounter a few conflicts I did not consider initially. [react-window](https://github.com/bvaughn/react-window) is a library that helps virtualize long lists!

This is super useful for rendering a considerably less amount of components/tags in the HTML to optimize the performance of the app. But, one thing to consider is that react-window expects certain parameters and properties to be specified in PX.

This article will quickly go over how I solved this problem.

### react-window

React-window offers a component called FixedSizeList which can render out our list of components. The property we are most interested in is itemSize. This takes in the following:

> _Size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width._

However, the word **size,** in this case **,** refers specifically to pixels! What we have to do is convert our REM units to PX.

This is the small hook I created:

![useRemtoPx hook](https://cdn.hashnode.com/res/hashnode/image/upload/v1642351926930/vilALg6Rx.png)

### Implementing the hook

Let’s break down this hook into several parts. For sake of clarity, I named the variable **itemSize** inside the hook but can this can be done with an early return. First, we get the font size from the user with getComputedStyle, calling upon the document properties. Afterward, we multiply that amount with how we plan to convert the units from PX to REM.

This hook can just be directly called in the component with the necessary REM units/multiplier that may be necessary:

![Small example component](https://cdn.hashnode.com/res/hashnode/image/upload/v1642351928349/Cv-oJgYTi.png)

And that's it! Let me know if this hook was of any use to you or if you have any other preferred way to use REM units with react-window or any other library that specifically requires PX units.
