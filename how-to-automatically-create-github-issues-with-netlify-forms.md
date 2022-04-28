---
title: How to automatically create Github Issues with Netlify Forms
date: 2021-10-03
published: true
description: How to easily automatically create Github Issues with Netlify forms and an integration with Zapier in less than five minutes!
categories:
    - devops
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651103914314/Uvn3PUy8n.png
---

### Introduction

Deploying the web app is typically only one of the first parts of the process.

[Netlify](https://www.netlify.com/) offers a streamlined process that's easy to take advantage of with GitHub as it automatically can sync up with a repository to bundle it and display it on the web. Netlify also comes with a whole lot of benefits, plugins, and enhancements to the deployment process, more on this later

However, after the app is in the wild it’s bound to have some issues. Bugs and new features are a typical part of the software development process, a lot of the time this involves taking in feedback directly from the user.

### The Form

Netlify offers form integration where the response is automatically sent and stored in the admin console to review.

One possible use case of this is to develop a form to let the user suggest a feature or report a bug

Below is what the form looks like in the app:

![Netlify](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468790489/Kf52kLC7T.png)

Creating it is fairly straight forward and Netlify offers some great docs in regards to this:

[https://docs.netlify.com/forms/setup/](https://docs.netlify.com/forms/setup/)

After the form is set up the responses should start flowing in for review from the admin console:

![Netlify](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468794009/lID0AyaAR.png)

### Github Issue

That was just the first part of the process, now to streamline the process and automatically create the issue we can use [Zapier](https://zapier.com/). Zapier is a workflow manager that can execute a multitude of different actions on a variety of different triggers.

This sounds pretty vague and all but basically what it boils down to is that with Zapier we can set up a “zap” that waits for the form submission event and triggers an action to create a GitHub issue based on the contents of the form response.

### The Zap

First, we’ll create the event listener o trigger on Netlify form submission. Note that Zapier will require access to your GitHub account and Netlify account to access the necessary information.

![Netlify](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468797801/0ySdKDJ_k.png)

Now we can set up the respective action to create the GitHub Issue:

![Netlify](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468801133/Ofl0fCDIp4.png)

We can even set up a label to identify the user-submitted issue and fill in the necessary information from the form response:

![Netlify](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468804005/zeIEnfXQf.png)

Afterward, the Zap can be tested and created and everything is ready to go!
