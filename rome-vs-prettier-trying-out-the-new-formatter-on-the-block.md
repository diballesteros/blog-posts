---
title: Rome vs Prettier. Trying out the new formatter on the block
date: 2022-04-13
published: true
description: Short article describing my experience with Rome vs Prettier when it comes to code formatting. Rome comes with its own IDE integration, let's see what's better.
categories:
    - tooling
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1651431206863/jSlo7MOKP.png
---

### Introduction

Rome is designed to be a formatter, linter, bundler, and much more for JavaScript, Typescript, HTML, Markdown, and CSS. That’s a whole lot of change but it’s intended to be a one-stop-shop for web dev tooling. In this article, I’ll go over my experience in Rome vs Prettier.

As a disclaimer as Rome is only focused on those languages the comparison will also only be focused on those!

### What is a formatter?

A formatter applies opinionated stylistic conventions to text files, in this case, our coding files! These conventions can include but are not limited to, indentation style, quotation usage, code line length, and tons more depending on the language!

I’ll be evaluating the two on the following criteria:

-   Time to format
-   Formatting

### Setting up Rome

Rome is tied to integration in the IDE. However, it only supports Visual Studio Code we just have to search up Rome in the extensions:

![VS code extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1649947077522/OpdgmrkcI.png)

But for the purposes of this post, I want to run both prettier and Rome from the CLI. Rome recommends installing it only locally for the time being

```bash
npm i -D rome@next
```

Then add the following script to the package.json

```
"scripts": {
    "rome:format": "rome format ."
}
```

### Rome vs Prettier: Time

This is the time in Rome:

![Rome time](https://cdn.hashnode.com/res/hashnode/image/upload/v1649947078599/3DwtP25gO.png)

Prettier:

![prettier time](https://cdn.hashnode.com/res/hashnode/image/upload/v1649947079710/C9KnZxYpt.png)

Rome second run:

![rome second run](https://cdn.hashnode.com/res/hashnode/image/upload/v1649947081342/LRwmx1NEc.png)

Wow, Rome, was a lot faster! Here’s a graph just for the heck of it

![graph](https://cdn.hashnode.com/res/hashnode/image/upload/v1649947082612/JM5Dsljqi.png)
_Lower is better_

### Rome vs Prettier: Format

Well, what about the actual formatting? Rome and prettier are very opinionated when it comes to formatting and don’t allow for that much customization.

Prettier (from their site) has 23 options and since it’s been around so long there are plugins to supplement it. Rome on the other hand offers the following three options:

Both of them offer a way to ignore formatting if need be:

```js
// rome-ignore format: <explanation> 
// prettier-ignore
```

Rome also comes with something they have called **Error Recovery**. Allowing formatting to work despite syntax errors, which is something prettier does not offer. There’s a neat little GIF on their announcement page: [https://rome.tools/blog/2022/04/05/rome-formatter-release](https://rome.tools/blog/2022/04/05/rome-formatter-release)

Here’s a brief example of some formatted code by Rome:

![formatted rome code](https://cdn.hashnode.com/res/hashnode/image/upload/v1649947084038/I60Ox6nK3.png)

### Conclusion

Take everything said in this article with a grain of salt as the Rome formatter is still in alpha so there’s a lot that can change.

For more information on how it actually works check out their [website](https://rome.tools/#formatter).

Rome is a really interesting new concept in the world of tooling for web development. If they manage to make something easy to use that consolidates all of our needs then it’ll fix one of the major points for us web developers.

More content at [Relatable Code](https://relatablecode.com)

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
