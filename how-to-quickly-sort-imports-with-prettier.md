## How to quickly sort imports with Prettier

### Introduction

Having disorganized imports bothers me deeply when working on a project. I typically like to keep the entire codebase as organized as possible as it makes sifting through the files much easier. With the help of prettier and a plugin, we can easily sort imports!

As a side note if you’re using ESLint I have [another article](https://relatablecode.com/how-to-quickly-configure-eslint-for-import-sorting/) to sort imports using that.

### Sort Imports: Setting everything up

First, let’s install the necessary dependencies. We’ll need just two: prettier and the plugin 📦.

```bash
npm install prettier @trivago/prettier-plugin-sort-imports --save-dev
```

### Sort Imports: Configuring the Rules

Now we can go ahead and start configuring our rules. This plugin receives an array of strings. It uses these strings to decide the order of our imports!

So for example in my small sample project I have the following files:

![unsorted imports](https://cdn.hashnode.com/res/hashnode/image/upload/v1648645741874/BPISZd7-p.png)

So we’ll have to set up the rules to configure them. I typically like the following order:

1. Package/third-party imports
2. Project imports
3. Relative imports

This will cover mostly everything! So let’s create a .prettierrc (a prettier configuration file) at the route of our project.

![prettierrc file](https://cdn.hashnode.com/res/hashnode/image/upload/v1648645743471/MD1Qh7yLV.png)

Inside that file add the following rule:

```
{
    "importOrder": ["^components/(.*)$", "^[./]" ],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
}
```

Let’s break down these options. They’re parsed through regex (yes I know the devil’s tongue). But it’s roughly the same format for every import type.

First, any type of regex that isn’t included will be sent to the top. This is **crucial. As the unincluded third-party** dependencies will just go to the top as we want. Afterward, we follow up without aliased **components** folder, and then our **relative** imports. I also have two additional rules to add linebreaks between the import groups and to sort specifiers in an import declaration

In this [GitHub repo](https://github.com/trivago/prettier-plugin-sort-imports), you can find a list of the other rules that are available.

### Sort Imports: The Result

Now as soon as we save the file (if you happen to have format on saving in whichever IDE you’re using) or format the file you’ll see the following result:

![sorted imports](https://cdn.hashnode.com/res/hashnode/image/upload/v1648645744985/FTmqbsgzE.png)

_Wow, that look’s much cleaner_ 👌🏼

### Conclusion

Hopefully, with that, you have more organized imports in your projects!

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
