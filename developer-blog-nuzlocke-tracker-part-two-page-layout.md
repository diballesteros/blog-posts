---
title: Dev Log Nuzlocke Tracker – Part Two – Page Layout
date: 2021-08-01
published: true
description: Second in the series of a developer blog chronicling my experience creating a React app. In this part I explain the development of the initial page layout.
categories:
    - react
    - devlog
---

### Introduction

This is the second part of the series where I chronicle the development process of a [Nuzlocke Tracker](https://nuzlocke.netlify.app/).

Part one [here](https://relatablecode.com/developer-blog-nuzlocke-tracker-part-one-react-project-structure/).

Now that the project structure was done the next step was determining how exactly to build the tracker. Normally, when doing this I figure the best initial step is to figure out how the layout will go.

### The Page Layout

This is the finished product but initially, I split up the page into two portions: header and tracker. This page layout seemed optimal for desktop and mobile implementation.

For the time being, I have no plans on hooking this up to a database so I figured using local storage to keep track of a user’s data would be optimal. The header should contain an option to export and import the data of a user in case they want to save or switch computers as well as having the game options.

Also, as it is quite popular I also wanted to include a dark mode button to switch the color scheme of the app.

### The Tracker

Time for the meat of the application, the actual list of the encounters. As this was going to be a fairly large list with a lot of DOM elements I decided on using [react-window](rhttps://react-window.vercel.app/#/examples/list/fixed-size) for virtualization.

While doing my own runs I constantly looked up the level caps for the gym leaders. The level cap rule for a nuzlocke challenge is where you cannot over level the highest level pokémon of the next gym leader, so as to increase the difficulty. So I definitely wanted to include level caps so as to also show progression while completing the nuzlocke.

An encounter list is basically a large CRUD operation so I decided to include buttons for deleting, adding, and editing the encounters. As well as a search bar encounter lists can get pretty long and tedious to look through.

### The component library

Now that I had the initial idea for how to build the app I went through various component libraries to streamline the process. I needed a dropdown that not only could I search through but that I could also display the image of the Pokémon.

From what I saw Material-UI, ANT, ChakraUI, amongst many others, did not offer me this possibility. I thought I would have to build my own component but then I came across Semantic-UI with this neat dropdown component:

%[https://codesandbox.io/embed/pokemon-dropdown-dn2sz?fontsize=14&hidenavigation=1&theme=dark]

That is an example of how it would look with the pokémon images.

With that, I began to develop the whole initial application.
Next time I’ll go over how I first promoted my app!

Github repo:

https://github.com/diballesteros/nuzlocke

Credits to: https://pokemondb.net/sprites
