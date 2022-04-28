---
title: Dev Log Nuzlocke Tracker — Part Four — Deploying PWA to App Stores
date: 2021-09-26
published: true
description: How to easily deploy web app as a PWA (Progressive Web App) to the Google Playstore, Microsoft Store and Amazon Appstore using PWABuilder.
categories:
    - devlog
    - devops
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651104023812/nz2Gj2S5o.png
---

### Introduction

This is the fourth part in a series where I describe my experience developing an online web app. After several months of deploying various changes to the web app and receiving all kinds of feedback (mostly from Reddit) I had gotten several people that were interested in a native app version (iOS/Android)

At first, I thought this would be an incredible amount of work seeing as I have not used any of the respective languages. I briefly considered taking up React Native to port the apps. But during my research, I came across the fact that PWAs (Progressive web apps) could be deployed to the Google Playstore and the Microsoft Store.

### Making the PWA

First I had to make the app into a PWA.

I deployed my reacting app using [Create-React-App](https://create-react-app.dev/docs/getting-started/), fortunately, it offers a built-in opt-in service to create a PWA out of the React app. More info: https://create-react-app.dev/docs/making-a-progressive-web-app/.

In the index.tsx file you can include:

```js
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';

serviceWorkerRegistration.register();
```

This will automatically do all the configurations necessary for it to work as a PWA. For extra configuration, you can check out the manifest.json in the public folder.

Take into account this will only work for HTTPS.

You’ll be able to see the service worker installing the PWA in action in the console:

![console for service worker](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284276425/s7UOFNPiRs.png)

### Creating the APK

Once that is out of the way the next step is to generate the APK for the PWA. Luckily enough there already exists a site for this! [PWABuilder](https://www.pwabuilder.com/) allows us to generate all the files necessary to deploy the app to the Microsoft Store and Google Playstore (and as an added bonus the Samsung app store)

![PWA Builder Home Site](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284277687/KWIbV3BvK.png)

On the home page there is an input to scope out the PWA and build the necessary files:

![PWA score](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284279116/jjV7f3VI4.png)

This will give you a score for how well the PWA is configured (this mostly depends on manifest.json configurations. Following this page are the generated store package files:

![PWA store packages](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284280374/bOmt-aej4.png)

### Deploying to the stores

Each individual store package contains information on how to deploy it to the respective. For the most part, it’s just uploading the APKs. Take into account that there will be different requirements depending on the content if there are payments needed.

Also, both stores require in-app screenshots for the store listing along with several other details.

After a few days of waiting for the approval they were both available:

![Google Playstore Listing](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284281815/Kxjq9SSoC.png)

![Microsoft Store Listing](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284283236/5N4gRL6Dz.png)

### Bonus

Decided to also deploy to the Amazon Appstore as the majority of the extra work with descriptions, in-app screenshots was already done with the other store listings and for this, you only have to route to the respective webpage:

![Amazon](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284284657/FBgJnSklc.png)

Updating them is as easy as generating new files with PWABuilder and redeploying them.
