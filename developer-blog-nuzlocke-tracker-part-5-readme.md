---
title: Dev Log Nuzlocke Tracker — Part 5 — README
date: 2022-01-09
description: Small explanation on how I constructed the README for my open source project, a Nuzlocke Tracker, from status badges to the contributing guidelines
categories:
    - react
    - devlog
---

## Developer Blog: Nuzlocke Tracker — Part 5 — README

![splash](https://cdn.hashnode.com/res/hashnode/image/upload/v1641742150770/O01NPO-hM.jpeg)
_Photo by Studio Media on Unsplash_

It’s been a while since I added an entry to the series, for the past few months it’s mostly just been working through submitted bugs and added small features! But after some conversations, I figured I’d add another entry explaining the thought process for working through the README file.

A good readme can give a base explanation of the intention and proposed solution of the project as well as give a quick guide on how to start contributing to the application (if it’s open-source)

Here’s the [README](https://github.com/diballesteros/nuzlocke/blob/master/README.md) to check it out while reading through this short blog post.

### Status checks

At the very top of my README, I opted into leaving some quick status badges for several of the third-party libraries I have associated with my app: [codecov](https://about.codecov.io/), [cypress](https://www.cypress.io/), [codeql](https://codeql.github.com/), [netlify](https://www.netlify.com/), and several Github status points!

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1641742152339/R96eKU9N5.png)

I feel like this gives a pretty sweet overview of the health of the app!

### About

I split this section up into two sections. A quick list of the main features of the app and a ‘How it works’ section with gifs and screenshots! I feel like these screenshots give a much more tangible view of how the application works. These can be hooked up pretty easily using [Imgur](https://imgur.com/) and [giphy](https://giphy.com/).

I upload the necessary gifs and images and simply link them through the markdown:

```
<!-- Example Gif -->
![til](https://cdn.hashnode.com/res/hashnode/image/upload/v1641742153586/vqNTttGTF.gif)

<!-- Example Image -->
![Imgur Image](https://cdn.hashnode.com/res/hashnode/image/upload/v1641742155213/ksJzopDyo.png)
```

![example images](https://cdn.hashnode.com/res/hashnode/image/upload/v1641742156869/XZsApWxMK.png)

### Quickstarts

Afterward, I include several sections that help other contributors get quickly started with the app with the following sections:

-   Prerequisites —I quickly lay out the CLI commands to get started
-   Running the tests — Commands needed to double-check over the code and make sure everything is still A-okay
-   Roadmap — Just a small section linking to the issues page for the Github repository to know which issues can be worked on
-   Deployment — Brief summary on how the project is deployed to netlify
-   Versioning — Explanation of how versioning works. In this case, SemVer is used as it seems to be the industry standard

### Contributing

This is probably one of the more important sections of the entire README where you can reference, at least in my case, a CONTRIBUTING.md for a more in-depth explanation of how to contribute to the project.

Github can help out with a generic format but I suggest making adjustments respective to your project.

Ideally, this section should reference the CODE_OF_CONDUCT and any special steps needed for the pull request process.

### Miscellaneous

At the very end, I added a small section to be able to contact me as well as some legal information as the app is pokemon related in nature.
