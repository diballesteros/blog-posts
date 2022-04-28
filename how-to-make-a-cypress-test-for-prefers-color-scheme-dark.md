---
title: How to make a Cypress test for prefers-color-scheme dark
date: 2021-12-19
published: true
description: Blog post on how to quickly make a cypress end-to-end test for checking if the dark mode styles are applied if the user has set prefers-color-scheme dark.
categories:
    - testing
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1639932516028/v5wJOpkTs.jpeg
---

### Introduction

Taking into account the user’s preferences before the page loads are becoming more important every day to deliver the best possible experience out-of-the-box. One such option is the CSS [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) of prefers-color-scheme. This can be set up through the operating system or user agent setting.

The following is an example of how to set up dark mode through CSS:

![css dark mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1639932517496/mRPZ2xa-x.png)

As an aside I also have an article on how to quickly set up dark mode with the use of CSS variables in React, check it out [here](https://relatablecode.com/how-to-easily-add-dark-mode-to-a-react-app/).

### Cypress Test

[Cypress](https://www.cypress.io/) is a testing framework that makes it super easy and fun to develop end-to-end tests! Cypress offers a function to set up variables before the page loads! We can use this to set up the preference for dark mode ahead of time.

![Cypress test for dark mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1639932519044/VRNfvk2dP.png)

Using the onBeforeLoad function when we visit the root page we can alter what happens when we interact with the matchMedia function. [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) is a method on the window object that can check if the color scheme is dark. In my app I use a hook to check exactly this when applying dark mode, as its set to a variable in my global store:

![Hook to set dark mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1639932520659/23Iuuy1e5.png)

Neat! Alright, the following parts of the Cypress test can directly look at the different CSS properties of the page to make sure everything is being applied correctly:

![Additional testing for CSS properties](https://cdn.hashnode.com/res/hashnode/image/upload/v1639932522223/nf_Mu10LyL.png)

As an example, the app is the overall wrapper of my app. Gave it a data-testid and then I test for the color of my dark mode. This can be done several times over for all the different types of dark mode properties that are being set!
