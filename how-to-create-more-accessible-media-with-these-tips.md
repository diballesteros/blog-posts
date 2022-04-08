---
title: How to create more accessible media with these tips
date: 2022-03-20
description: Images, audio, and video are becoming more common ways to consume content on the web. Use these tips to make sure everyone can enjoy accessible media!
categories:
    - accessibility
---

## How to create more accessible media with these tips

### Introduction

As part of my ongoing series, I’ll cover some best practices when it comes to making more accessible media. Text is a **first-class** citizen of the web, but more and more video and images are becoming common forms of online content consumption.

As previously mentioned in other articles, HTML gives us plenty of options as a starting point, but we’ll need to do some additional work to make everything a bit more accessible.

### Accessible media: Images

There are some important distinctions we must make at the very beginning: whether the image serves a **purpose** or is purely for **aesthetic** reasons. An image that serves a purpose should have a meaningful **ALT** text as screen readers will rely on this!

By contrast, an image that is purely for aesthetic reasons should probably be omitted for screens where this is not necessary using the following properties.

```html
<img src="./randomimage.png" alt="Text describing the image" />
```

### Using srcset for responsive accessible media

One small tip that isn’t widely known is that you can quickly add responsive attributes to images using the **srcset** and responsive attributes.

%[https://codepen.io/pixelstrolch/pen/yVbdea]

See the Pen [Srcset Demo](https://codepen.io/pixelstrolch/pen/yVbdea) by Stefan Brechbühl ([@pixelstrolch](https://codepen.io/pixelstrolch)) on [CodePen](https://codepen.io).

This is not the only solution you can also use native CSS properties and media queries to create responsive images! Decide the best option for your use case.

### Additional disclaimer

When using images as functional buttons or links there should be some CSS magic to swap out the image for text and vice versa depending on the type of screen.

Here are some CSS-tricks to achieve the goal:

[https://css-tricks.com/css-image-replacement/](https://css-tricks.com/css-image-replacement/)

CSS-tricks for image replacement

### Accessible Multimedia: Audio and Video

### Accessible media controls

Did you know that HTML5 has built-in controls to handle audio and video?

```html
<audio controls>
	<source />
	<p>Help text if it doesn't load</p>
</audio>

<video controls>
	<source />
	<p>Help text if it doesn't load</p>
</video>
```

These are great! Unfortunately, they’re not very accessible. Normally I’d go over a short code example of how to create it, but this is very unnecessary. It’d be nice to know how it works under the hood but there are very talented developers who have already created libraries with accessibility taken into consideration.

Unless its for learning purposes I’m a huge advocate of not reinventing the wheel. Here is a list of video players with supported accessibility features (last updated 2016).

[https://kensgists.github.io/apt/](https://kensgists.github.io/apt/)

Here’s a small visual example of what the AblePlayer looks like:

![AblePlayer](https://cdn.hashnode.com/res/hashnode/image/upload/v1647782602468/cNt56Lwy3.png)

[https://ableplayer.github.io/ableplayer/demos/video1.html](https://ableplayer.github.io/ableplayer/demos/video1.html)

### Accessible Media: Caption

Several of the video players mentioned in the last section offer the ability to add captions to the video. Just to give a brief summary of the web standard for providing captions in the [WebVTT](https://w3c.github.io/webvtt/) format.

Here is an example of a WebVTT file:

![WebVTT file](https://cdn.hashnode.com/res/hashnode/image/upload/v1647782603949/Hx2FEBqXc.png)

These can be linked directly to the track or in some cases the player:

```
<video controls src="myvideo.mp4">
    <track default src="track.vtt">
</video>
```

### Accessible Media: Transcript

Every video or audio **should** have a transcript available elsewhere on the page. That’s it that’s the section.

![Transcript](https://cdn.hashnode.com/res/hashnode/image/upload/v1647782605561/NKwCsFeB0.png)

If the video is important enough to the content of the webpage then having a transcript should be equally as important! Now you may be thinking to yourself that providing a transcript for every video would be an extremely time-consuming task.

Well yes, normally that would be the case. But! There are plenty of technologies that can assist us.

For example, there is a hackathon going on currently in dev.to with Deepgram. You could possibly automate the ability to create these transcripts!

Check out this [post](https://dev.to/devteam/join-us-for-a-new-kind-of-hackathon-on-dev-brought-to-you-by-deepgram-2bjd). (Note I’m not affiliated in any way)

### Conclusion

Hopefully, these tips helped you out to further the cause of making sites more accessible for everyone!

Multimedia options are becoming increasingly more common as tons of content that are being consumed daily is being done so with video or audio-only options.

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/diego-ballesteros-9468a7136/) or [Twitter](https://twitter.com/relatablecoder)
