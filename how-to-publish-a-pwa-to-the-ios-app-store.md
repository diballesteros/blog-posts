---
title: How to publish a PWA to the iOS App Store
date: 2021-11-28
published: true
description: A guide on how to generate the files necessary to upload and publish a progressive web app (PWA) to the iOS App Store using the PWABuilder
categories:
    - tooling
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651103498581/c2Rcq2Wcl.png
---

### Introduction

[PWABuilder.com](http://PWABuilder.com) is a site that allows you to link your PWA and generate files to publish it to various different app stores. I previously used it to create the files necessary to publish my app to the Google Playstore and the Windows Store. Recently an option was added for the App Store as well!

DISCLAIMER: I’m only aware of being able to do this on a MAC OS as it is required to use XCODE to bundle and ship off the software to App Store Connect.

If there is a method with Windows mention it in the comments!

### PWABuilder

![ship pwa](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468711373/KqFps4yX4.png)

PWABuilder URL Input

Firstly, let’s navigate to PWABuilder.com and enter the corresponding URL in the input above. Afterward, some basic stats are provided. By hitting the next button we can now start generating the files.

![ios options](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468713221/ytiyhlw8B.png)

PWABuilder iOS Option

Next, hit the store package option for iOS.

In the generated folder the team at PWABuilder included a next-step guide to work through the process of generating package:

[https://github.com/pwa-builder/pwabuilder-ios/blob/main/next-steps.md](https://github.com/pwa-builder/pwabuilder-ios/blob/main/next-steps.md)

Follow through the steps and you’ll be able to begin the publishing process! Do note that to be able to publish an app in the App Store a developer license must be purchased.

This is an example of my own personal app being published:

![nuzlocke tracker ios listing](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468714452/CidOjxmMh.png)
