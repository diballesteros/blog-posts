---
title: Testing a React Application Setting up Cypress
date: 2022-05-23
published: true
description: Testing a modern React application. In this part of the series, we go over how to set up Cypress with React and launching it for the first time.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651098470347/9coA_akWr.png
---

### Introduction

The sixth part of my ongoing series is on how to test a modern React application. This time I'll go over how to initially configure [Cypress](https://www.cypress.io/), our End-to-End testing framework.

[First part](https://relatablecode.com/testing-a-react-application-the-modern-approach)

[Second part](https://relatablecode.com/testing-a-react-application-the-setup)

[Third part](https://relatablecode.com/testing-a-react-application-what-is-vitest)

[Fourth part](https://relatablecode.com/testing-a-react-application-creating-a-unit-test)

[Fifth part](https://relatablecode.com/testing-a-react-application-integrating-msw-with-vitest)

In the previous parts of this series, I went over how to set up our [unit-testing framework with Vitest](https://relatablecode.com/testing-a-react-application-integrating-msw-with-vitest). Unit tests will cover more isolated and individual pieces of code like our functions or component-only tests if necessary.

On the other hand, Cypress and its test will handle the other big chunk where we can really gain confidence that our tests will behave similarly to how a user would use the application. Just to catch up let's go over what our simple barebones app does.

When clicking on a button it fetches posts from a service and displays them on the page:

![Testing a react application](https://cdn.hashnode.com/res/hashnode/image/upload/v1653220814601/IXI3Twik-.png align="left")

### What is Cypress?

The first phrase you'll see when navigating to their page is the following:

> Fast, easy and reliable testing for anything that runs in a browser.

The keyword for this quote is **browser**. Cypress' test runner replicates the browser environment. That means whatever test we create will behave exactly as if running in the browser. This gives us a ton of confidence!

On top of that, with Cypress we can test with several different browser environments: Google Chrome and Firefox being among them. Cypress comes with its own syntax at times but if you're familiar with Vitest or Jest then it should come naturally. The docs are actively maintained and well structured.

[Take a look at them](https://docs.cypress.io/)

![thumbs up relatablecode](https://cdn.hashnode.com/res/hashnode/image/upload/v1653223455475/J4CgrxFOP.png align="left")
_Photo by Sincerely Media on Unsplash_

Enough talking, let's start setting up Cypress.

### Configuration Files for Cypress

First, we have to install the necessary dependencies:

```bash
npm install cypress --save-dev
```

or

```bash
yarn add cypress --dev
```

Much like other libraries, this will have a configuration file at the root of our project: `cypress.json`. Let's go ahead and create it. Within this file, you can set a variety of different flags. Check out this [article](https://docs.cypress.io/guides/references/configuration#Global) in the docs to better understand all the options.

When first launching any Cypress test we have to manually visit the pages we want to test. So instead of writing out the entire URL every single time we'll go ahead and include the `baseUrl` in this config.

```json
{
	"baseUrl": "http://localhost:3000"
}
```

With that, the only other configuration we need to set up is the scripts in our `package.json`.

```json
  "scripts": {
    // ...other scripts,
    "e2e": "cypress open",
  },
```

Check out the full repository up to this point [here](https://github.com/diballesteros/react-testing).

Next time we'll create our first test with Cypress as well as make sure our integration with MSW holds up.

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
