---
title: Testing a React Application The Modern Approach
date: 2022-04-20
published: true
description: Testing a React application with a modern approach. The first article in a series where I go over my tools of choice Cypress, Vitest, and MSW.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651098470347/9coA_akWr.png
---

### Introduction

Testing is a fundamental part of development. Testing a react application is no different. Once an application grows to a certain size it becomes one of the only ways you can have **confidence** that a change you make will not affect previous functionalities. The keyword here is **confidence**.

> _A test is only good if it can make sure that an interaction a user expects, remains the same_

_Me or something_

A test’s main focus should be centered around what the end-user expects. This means any and all implementation details should remain irrelevant. A user does not care about the names of variables or functions, only that when they click a button it does the expected behavior.

![sticky notes with errors](https://cdn.hashnode.com/res/hashnode/image/upload/v1650898789228/46ukd0j_Fx.jpeg)
_Photo by David Travis on Unsplash_

With that being said, this is the **first article in a series** where I’ll go over how to perform modern testing on a React application. I’ll first go over our terminology and tools, following articles will go over how to create E2E tests and unit tests taking into account the selected tools.

### Terminology

Although everyone has a different definition of what different types of tests are and what they cover, I figured I would give my own personal definition for future reference:

#### What is a unit test?

A unit test is a testing method for an isolated and individual piece of code, a **unit**. In the context of React, this more than likely refers to testing our components in isolation and any associated functions.

#### What is an end-to-end (E2E) test?

Testing the functionality of an application under the most production-like circumstances. In our case, this means compiling, building, and running the app inside a browser-like environment and going through different user flows.

### Testing a React app: The Tools

I put a heavy emphasis on end-to-end testing. This will most resemble how the user is interacting with the application and will, again, instill the most amount of confidence. My framework of choice here is [Cypress](https://www.cypress.io/).

Unit tests will be taken care of with [Vitest](https://vitest.dev/)(yes, not Jest).

And finally, since our concern isn’t with the backend or API but with the front-end and the respective user interactions then a mocking library will be vital. MSW has us covered here.

### End-to-end Testing a React App: Cypress

Here is a video directly from their landing page giving a brief introduction:

https://www.youtube.com/watch?v=LcGHiFnBh3Y

Cypress is a tool I can’t speak more highly of. As weird as it sounds it makes testing **fun**. The visual test runner makes it so easy to develop the tests as it can select elements and help you create selectors as you go. It comes with amazing Typescript support out of the box. The website documentation is on point. I’ll stop gushing about it now. 😢

### Unit Testing a React app: Vitest 🌽

The yin to our Cypress yang. Vitest will cover everything that isn’t feasible to do for end-to-end testing. Although integration testing is vital it does have the downside that it can be considerably slower than unit testing.

Although it’s become a bit of a meme to say something is **_blazing fast_** 🚀. In this case, it completely holds true.

![stopwatch](https://cdn.hashnode.com/res/hashnode/image/upload/v1650898790547/15r48ftvY.jpeg)
_Photo by Saffu on Unsplash_

Much like Cypress, this comes with out-of-the-box Typescript support, Chai built-in assertions, instant watch mode, and DOM mocking!

Not to mention it can be overkill if we want to test specific edge cases for functions or transformations that we have inside our codebase.

We will be using this to test our React components, hooks, and utility functions in isolation. This is to make sure we cover our edge cases in the process.

### Mocking our tests: MSW 🎭

Although not directly related to our tests this is still a vital component. [MSW](https://mswjs.io/) will make our tests consistent and avoid coupling our tests to backend cleanup and APIs. These can be more important down the line with end-to-end testing or separate backend-only testing.

I prefer MSW in most cases because we can mock our edges cases in a more declarative manner.

### Conclusion

Hope you enjoyed this brief introduction. If you’re interested to learn more about testing consider following me or bookmarking this article! This is just the first part of the series.

In future articles, I’ll go over everything from setup to building tests to implementing this process in your pipeline to getting accurate code coverage reports.

More content at [Relatable Code](https://relatablecode.com)

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
