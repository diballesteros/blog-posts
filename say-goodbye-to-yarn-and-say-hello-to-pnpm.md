---
title: Say goodbye to Yarn and say hello to PNPM
date: 2022-04-06
published: true
description: A short article on my experience using PNPM. I compare the size difference to the files before and after installing PNPM.
categories:
    - tooling
---

### Introduction

PNPM is a package manager that I have seen floating around for quite some time now. It’s tagged as a “fast, disk space-efficient package manager”. But in what ways? Well, let’s take the quote straight from them as well.

> Files inside node_modules are linked from a single content addressable storage

[_https://pnpm.io/_](https://pnpm.io/)

Cool so all projects share the same node_modules. But…. let’s make this more interesting. I’ll take a small folder I have with 5 projects or so. Hook it up to **pnpm** and see the size difference.

### How to use PNPM

Let’s use npm to install pnpm. 😈

```bash
npm install -g pnpm@next-7
```

And the commands are exactly the same but with a 🅿

### Initial steps for PNPM

![size](https://cdn.hashnode.com/res/hashnode/image/upload/v1649247917188/722C1GVZ6.png)

Alright, we have an initial size of 1.84GB on the disk. Let’s see how much we can lower this down.

![size](https://cdn.hashnode.com/res/hashnode/image/upload/v1649247918244/lGqAOG-ei.gif)

Took like 5 minutes for SSD to delete the node_modules folders for those projects.

Alright, now we can get started for real. In the terminal I just have to execute:

```bash
pnpm install
```

But it failed on the **postinstall** script phase, with the following error:

```
│ gyp verb check python checking for Python executable "python2" in the PATH
│ gyp verb `which` failed Error: not found: python2
│ gyp verb `which` failed at getNotFoundError (C
```

Apparently, I didn’t have my Python environment variable set!

![python](https://cdn.hashnode.com/res/hashnode/image/upload/v1649247919449/eJYr5YiBh.png)

Alright, this time is a success:

![success](https://cdn.hashnode.com/res/hashnode/image/upload/v1649247920617/09vGuE_i7g.png)

And we get a pnpm lock file:

![pnpm lock file](https://cdn.hashnode.com/res/hashnode/image/upload/v1649247921838/7651Ee_8e.png)

But it does seem to give me a critical-looking error message for not having a peer dependency. Regardless I’ll quickly do the other projects.

And I ended up saving:

![size saved](https://cdn.hashnode.com/res/hashnode/image/upload/v1649247923070/iWcPBWcy-.png)

This may not seem like much but these were just 5 loosely related projects. Multiplied across the entirety of my local repositories and I could be saving a lot more. Another important thing to note is that it feels faster and the logs from the installation were easier on the eyes.

This benefit is even larger in companies or workspaces with a ton of projects with similar dependencies. 😎

### Conclusion

This was just a very surface-level overview of pnpm. [Their page](https://pnpm.io/pnpm-cli) continues a ton more information on everything it was to offer.

What’s your go-to package manager? Yarn, npm, pnpm? Something else entirely?

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
