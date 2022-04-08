## How to supercharge your HTML link tag with these four tricks

### Introduction

The HTML link tag is one of the first tags everyone learns about when first diving into HTML. The most common use case is to just load up a stylesheet and forget it about.

```html
<link href="/styles.css" rel="stylesheet" />
```

**_However_** , the link tag has been updated throughout the years and has several features that can supercharge the performance of your application if used correctly.

### Link tag attribute: Preload

The **preload** value for the **rel** attribute lets the developer declare a fetch request from the link tag. This allows the page to start loading the resource specified in the tag earlier ⏰. This can create several benefits!

For example, with this tag, you are able to specify resources that will most definitely be used later on in the webpage, such as imported scripts or large media files. This is paired with the **as** attribute to specify to the browser what type of resource we’re dealing with.

```html
<link rel="preload" href="my_video.mp4" as="video" />
```

All in all, this can help with **render-blocking** resources and help the browser more accurately parse the resource to cache correctly.

### Link tag attribute: Prefetch

Another performance optimization! The **prefetch** value for the **rel** tag allows us, developers, to specify a resource for the browser to fetch while it’s idle.

In order for the browser to recognize you have to declare it as one of two ways:

```html
<link rel="prefetch stylesheet" href="my_other_style.css" />
<link rel="next" href="test.html" />
```

Obtaining the **stylesheet** needed in the future with prefetch and the following pages **HTML** with next 🚀

What is considered idle time? Per the official MDN docs:

> _In the current implementation (Mozilla 1.2), idle time is determined using the_ _nsIWebProgressListener API. We attach a listener to the toplevel_ _nsIWebProgress object ("@mozilla.org/docloaderservice;1"). From this, we receive document start & stop notifications, and we approximate idle time as the period between the last document stop and the next document start. The last document stop notification occurs roughly when the onLoad handler would fire for the toplevel document. This is when we kick off prefetch requests. If a subframe contains prefetching hints, prefetching will not begin until the top-most frame and all its "child" frames finish loading._

> [_https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ)

### Link tag attribute: media

### Media

The link tags can contain a media attribute to specify what type of screen should be handling it:

-   all
-   print
-   screen
-   speech
-   braille (Deprecated)
-   embossed (Deprecated)
-   handheld (Deprecated)
-   projection (Deprecated)
-   tty (Deprecated)
-   tv (Deprecated)

I’ll leave this [link](https://www.w3.org/TR/CSS21/media.html%23media-types) explaining more in detail what each property means. These can also make your pages more accessible. This [article of mine](https://relatablecode.com/make-your-website-more-accessible-with-these-responsive-design-tips/) goes more in-depth.

```html
<link rel="stylesheet" href="braille.css" media="braille" />
```

However, this media attribute can also be used for different screen sizes and can be used in conjunction with other features on this list!

```html
<link rel="preload" href="HUGE.png" as="image" media="(min-width: 601px)" />
```

### Link tag attribute: alternate

Did you know you can provide alternate stylesheets to the user? The link tag property rel can have a suffix word: **alternate**. This word can specify a different stylesheet for the user to use.

For example:

```html
<link href="styles.css" title="Main" rel="stylesheet" />
<link href="alternate.css" title="Alternate" rel="alternate stylesheet" />
```

The title attribute is used to specify the name of the stylesheet in the options. The options can be located directly from the browser:

![Alternate stylesheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1648502921064/21irc3DSA.gif)

In Firefox these can be opened up by hitting F10.

However, this has **limited compatibility** across browsers so don’t rely on this functionality. Example from the [Official MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets).

### Conclusion

Using these tips can definitely increase the usability of the website by several percentage points. A little optimization never hurt anyone.

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/diego-ballesteros-9468a7136/) or [Twitter](https://twitter.com/relatablecoder).

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
