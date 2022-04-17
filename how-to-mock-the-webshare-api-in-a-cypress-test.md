---
title: How to mock the Webshare API for a Cypress Test
date: 2021-12-05
published: true
description: How to make a Cypress test to mock the WebShare API and test the after-effects correctly. In this guide, we will check in case it does and doesn't load.
categories:
    - testing
---

## How to mock the Webshare API for a Cypress Test

[Cypress](https://www.cypress.io/) is a very robust testing framework with a ton of utilities. It has been my go-to option for all my side projects where I think extensive integration testing is necessary. In one of my apps, I offer the ability to share images using the [WebShare](https://web.dev/web-share/) API. In order to properly test this, I decided to investigate how to test this using Cypress!

### Brief rundown

The WebShare looks up native sharing functionalities the device may have for the selected data type. This could be anything ranging from text, URLs, images, or any number of other files. The application or method which will be used for sharing is called the share target.

Before validating if the selected data/file can be shared there is an additional function available in the navigator called canShare. This function will be the crux of our test as will test if this can be shared and validate what changes in UI are visible.

However, the results of the WebShare API would not be something I would personally test for as it is outside the scope of the app. As a result, I much prefer mocking the desired results and checking what should happen in the UI!

### Setting up Cypress

Cypress offers a way to access resources before it even loads with the onBeforeLoad utility. We can access this as we are visiting the main site. Let's look at this example below:

![Mock Success](https://cdn.hashnode.com/res/hashnode/image/upload/v1649268093646/5kMEXdQgy.png)

Firstly as it is not currently available in Firefox we only run the test on different browsers. Afterward in the onBeforeLoad function, we access the window object and completely replace the two functions we are attempting to mock. In this case the share and canShare. This way we can test the expected result with what should be displayed in the UI!

Below is a similar test but for the opposite case, for when a test fails:

![Mock Error](https://cdn.hashnode.com/res/hashnode/image/upload/v1649268095075/7G-UviK7W.png)

Bonus tip: In earlier versions, the canShare utility was not defined in the Navigator Type and if for some reason you receive some error using Typescript and canShare, you can go ahead and extend it and brute force the type for the purposes of testing.

Example:

![Typescript Tip](https://cdn.hashnode.com/res/hashnode/image/upload/v1649268096464/qI_IuQZol.png)

Small disclaimer, the Webshare API and several of its utility functions do not have widespread compatibility.
