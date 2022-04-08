## How to do a thorough accessibility review for your website

Making your website accessible is becoming increasingly important as more and more people are connected to the internet in some way or another.

However, even after using all the fancy aria tags and semantic elements how can you truly know if the website is accessible? Fear not there are some guidelines you can follow!

For a lot of users that depend on well-done accessibility, keyboard navigation is the go-to method to using a website. The good news is though, that this can be tested quite easily. Let’s start by hitting the tab key and checking how it navigates through the content.

```
<div tabindex="0">First Tabbable Element</div>
<div tabindex="0">Second Tabbable Element</div>
<div tabindex="0">Third Tabbable Element</div>
```

The elements that are highlighted are considered **focused** , [here](https://developers.google.com/web/fundamentals/accessibility/focus) you can find a quick write-up on some fundamentals on what should be focused or not.

Some things to note, you should typically avoid any **tabindex** number over 0. This can be very confusing and cause tabbing inconsistencies. Stick to 0! Controls that can be interacted with should definitely be focusable with a **tabindex** and elements that aren’t focusable should not be focusable to avoid confusion.

Also another side note! Make sure when tabbing nothing ends up offscreen and lost forever! Just tab through the entire website and make sure everything that needs to be interacted with, can be properly interacted with.

### Screen Reader

Going through the process of using a screen-reader and how it interacts with your website is the next step to making sure everything is accessible. Using one is quite easy!

NVDA is a popular open-source screen reader that is free to use! Here is the download [link](https://www.nvaccess.org/download/). Don’t be alarmed once you hear the text-to-speech upon installing. MAC Users might want to look into VoiceOver.

When highlighting the cursor over any element or typing the screen reader should activate and audibly interpret what’s on-screen. For developers this is critical and the way we typically interact with the screen reader is the aria properties!

For example, if we happen to have a button that has only an icon and no text this is a perfect situation for **aria labels**!

This is also very important with images and here is a situation where the **alt** property shines.

Moving the cursor over the image will read out the alt text.

Any content that you want to hide from the screen reader should have the aria-hidden property.

```
<div aria-hidden="true">I'm invisible</div>
```

### Semantic Structure

Another core principle of a website being accessible is having the correct semantic structure. In this case, it means using the **h1 ** —  **h6** tags in proper order and where it’s relevant. Correctly structuring the page within main, header, footer, and nav tags.

If you want more information on Semantic HTML check out [my article](https://relatablecode.com/semantic-html-explained-and-how-to-use-it/) for a more in-depth explanation.

And that’s it! As a final tip if you open up the developer tools and header over to the Lighthouse tab you can generate a report for accessibility! This is continually getting improved so it’s worth checking out when working on your site.

![Lighthouse Dev Tools](https://cdn.hashnode.com/res/hashnode/image/upload/v1645617644094/CmGrt2mmJ.png)

Side note: check out Google’s [guide](https://developers.google.com/web/fundamentals/accessibility/how-to-review?utm_source=lighthouse&utm_medium=lr) on accessibility for more details.

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/diego-ballesteros-9468a7136/) or [Twitter](https://twitter.com/relatablecoder)
