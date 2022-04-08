## How to share dynamically generated images in React

I have been developing a [pokémon related app](https://nuzlocke.netlify.app) where you can track encounters. Throughout the process I also added a way to generate a summary image of the run:

![Image description](https://cdn.hashnode.com/res/hashnode/image/upload/v1649276400145/zmSMrgPEB.png)

Generating the image was easy enough, but typically most users would want to share that image directly to a social media site. In comes the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)! With this it can natively check for methods from the OS to share the site, so direct integration with Facebook, Twitter, Reddit, etc is unnecessary.

**DISCLAIMER**: For the time being this API has limited compatibility across some operating systems and browsers. Check out https://caniuse.com/?search=navigator.share for the current state.
