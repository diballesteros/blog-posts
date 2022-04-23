---
title: My experience migrating a React App from Create-React-App 4 to 5
date: 2022-01-02
published: true
description: How I migrated my react application from version four of create-react-app to version five and the errors and warnings I resolved along the way
categories:
    - react
---

### Introduction

![React photo](https://cdn.hashnode.com/res/hashnode/image/upload/v1641140789138/CLjlg8feL.jpeg)
_Photo by Lautaro Andreani on Unsplash_

Recently the team behind [Create-React-App](https://create-react-app.dev/) updated the package from version 4 to 5. You can see a full list of changes right [here](https://github.com/facebook/create-react-app/releases). This fixed a lot of outdated dependencies, gave support to Tailwind, updated Webpack, and a bunch of other changes.

This article addresses how I went about the process and all the small little problems I ran into along the way.

### Updating

In order to update the version from 4 to 5 run the following command:

![Yarn command to update react-scripts](https://cdn.hashnode.com/res/hashnode/image/upload/v1641140790654/FALCjxcAZ.png)

Upon starting up the dev environment for my app I noticed that the compile-time reduced considerably, which was a welcome change! But I also received several warnings and errors after updating and starting up the app.

### Warning

My first warning was about the source maps for third party libraries that don’t actually exist:

Failed to parse source map from ...\node_modules\html-to-image\src\applyStyleWithOptions.ts' file: Error: ENOENT: no such file or directory

For the time being, I’m not aware of a way to avoid this with a setting so to omit the warnings in the terminal I decided to no longer output the source maps, specifically for the dev environment.

In the root folder I created the following file: .env.development and added the following line:

```
GENERATE_SOURCEMAP=FALSE
```

The development suffix is important because I needed the source maps in production because of some third-party libraries.

### Errors

I received two major errors after the update, the first one was related to CSS-In-Modules in combination with SASS:

Invalid dependencies have been reported by plugins or loaders for this module. All reported dependencies need to be absolute paths.  
Invalid dependencies may lead to broken watching and caching.

Luckily enough in the error message itself the file that was being affected was referenced, for example:

![Sass error](https://cdn.hashnode.com/res/hashnode/image/upload/v1641140792165/iXeMKptnj.png)

This one was fairly simple to solve as the error message itself indicated the solution, just have to change the relative path to an absolute path. So this:

```css
@use 'styles/mixins';
@import 'styles/variables';
```

changed to this:

```css
@use 'src/styles/mixins';
@import 'src/styles/variables';
```

My final error was:

ERROR in Failed to load config "react" to extend from.  
Referenced from: \*/.eslintrc.json

This error is in reference to ESLint, from what I could gather their internal ESLint was running into a conflict with my personal configurations, to circumvent this I changed up the dependencies in the .eslintrc.json file.

I use a variety of extensions but I left it as follows, removing “react” and adding in “react-app”

```json
"extends": [
"react-app",
...Other dependencies
]
```
