---
title: Dev Log Nuzlocke Tracker — React Project Structure
date: 2021-07-26
published: true
description: First in the series of a developer blog chronicling my experience creating a React app. In this part I explain the project and the folder structure.
categories:
    - react
    - devlog
---

### Introduction

This is the first in a series where I chronicle my process of developing an online app. Firstly, I suppose should explain what exactly a **Nuzlocke Tracker** is.

In case you were living under a rock [Pokémon](https://www.pokemon.com) is a franchise that has a very popular handheld game series from [Nintendo](https://www.nintendo.com/). Typically throughout the game, you capture creatures called pocket monsters. There are pokémon of all types and sizes. Essentially you create a team of 6 of all these creatures, and go on an adventure through a fictional world all the while battling with other trainers.

Typically these games are fairly easy to complete but the system on which the game is built is complex. In order to ramp up the difficulty a way of playing the game was invented: **The Nuzlocke**. A nuzlocke is a variation of playing the game which basically boils down to:

1. Only one Pokémon can be captured per area.
2. If the Pokémon faints, it faints for good and it can no longer be used for the remainder of the playthrough.

### The beginning

In order to practice my skills with React I decided to create a web-app I thought would get real-time use. This is because I feel way more motivated if people are actually using something I create and give me feedback.

At the time I was playing through a Nuzlocke and at various times I had to resort to an excel sheet or notepad to track the pokémon. This gave way to the thought that I could develop a better solution.

### The Folder Structure

![folder structure](https://cdn.hashnode.com/res/hashnode/image/upload/v1649267025574/Gv2pSy394.png)

### .github

I’ll most likely create a new post explaining the suite of options that GitHub offers to extend the functionality of the repo. This folder contains configurations for the GitHub Actions workflow.

### cypress

[Cypress](https://www.cypress.io/) is an End-to-end testing library, here I maintain the various end-to-end tests for the website.

### node_modules

Installed dependencies from NPM

### public

Auto-generated folder from [Create React App](https://create-react-app.dev/) that contains the index.html

### src

Main project folders it's split into the following categories:

1. assets — Contains my svgs, images
2. components — All the TSX and SCSS React component files
3. constants — This contains my type declaration file and constants
4. hooks — Reusable React hooks

The store.ts is my state management file. I decided to use [Zustand](https://github.com/pmndrs/zustand) to manage my state, it's easy to plug-n-play and very performant. I recommend it highly!

### .eslintrc.json .prettierrc cypress.json tsconfig.json

Configuration files for ESLINT, prettier, cypress, and Typescript

### LICENSE

License file, in this case, the MIT file. Github helps auto-generating the file.

### CODE_OF_CONDUCT.md CONTRIBUTING.md README.md SECURITY.md

Auto-generated files from Github to help manage the open-source and security portion of the web app. As said before I’ll most likely make a follow-up post explaining how I set up my project completely on Github.

### package.json

![package json](https://cdn.hashnode.com/res/hashnode/image/upload/v1649267026857/7_YD7mWC-.png)

Full list of dependencies I used to implement the project. I’m a huge fan of Typescript so all the related dependencies are integrated. Semantic UI was my component library of choice. ESLINT and Prettier to make everything feel cleaner!

That's it for this post. If there's anything else you want to be explained about the project structure let me know!

If you want to check out the current state of the app:  
[https://nuzlocke.netlify.app/](https://nuzlocke.netlify.app/)

Github repo:  
[https://github.com/diballesteros/nuzlocke](https://github.com/diballesteros/nuzlocke)
