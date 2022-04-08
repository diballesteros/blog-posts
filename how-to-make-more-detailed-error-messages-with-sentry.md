## How to make more detailed error messages with Sentry

![Ladybug](https://cdn.hashnode.com/res/hashnode/image/upload/v1643569612712/3UQmQ56rH.jpeg)
_Photo by Ritchie Valens on Unsplash_

A while back I decided to implement [Sentry](https://sentry.io/welcome/) into my web app. This turned out to be a huge boon to the way I’m able to debug or even catch several bugs!

However, the error messages Sentry can send back can be fairly unhelpful without a complete step-by-step process on what the user did to cause the error.

Luckily enough Sentry has an option to make the steps leading up to the error a lot clearer!

To check out how to set up Sentry check out my [other article](https://relatablecode.com/how-to-quickly-add-error-tracking-with-sentry/).

DISCLAIMER: The examples are done with a React app but this can be done in any Javascript app!

First and foremost, in the area of your app where you want to have a more detailed error flow, we have to import sentry.

```
import { addBreadcrumb, Severity } from '@sentry/react';
```

addBreadCrumb is the function we are most interested in. It allows us to specify to Sentry a personalized error flow entry. It receives an object with several properties.

I won’t go into detail about every single property of the object, but there are three that are very good to keep in mind!

### The properties

![addBreadcrumb function](https://cdn.hashnode.com/res/hashnode/image/upload/v1643569614663/kyD4_lJn0.png)
_addBreadcrumb function_

The first property is category, in which we can detail how we want the breadcrumb to be categorized. This is just a simple string.

The second is incredibly important and is the message! This is where you could personalize and include parameters, data, etc in your error flow message.

Last but not least is the level which is the severity level of the error flow message.

Take into consideration these are predetermined and should be imported from the sentry library as well.

### Results

Looking over the results of the error message we can see something along these lines:

![error message](https://cdn.hashnode.com/res/hashnode/image/upload/v1643569616081/zmfQDRYFz.png)

This is taken from a personal app of mine but it now shows up in the flow!

And that’s it! Let me know in the comments below any more tips with Sentry or bug tracking in general.

More content at [Relatable Code](https://relatablecode.com)

_Originally published at_ [_https://relatablecode.com_](https://relatablecode.com/how-to-make-more-detailed-error-messages-with-sentry/) _on January 30, 2022._