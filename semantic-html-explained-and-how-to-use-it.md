---
title: Semantic HTML explained and how to use it
date: 2022-02-16
description: What are Semantic HTML elements? When looking at one it seems like any other HTML tag, however, its intended use is clearer to the browser.
categories:
    - accessibility
---

## Semantic HTML explained and how to use it

### What is Semantic HTML?

What are [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) elements? When looking at one it seems like any other HTML tag, however, its meaning and intended use are clearer to the browser interpreting the HTML code and possibly the developer reading the code.

It may be common to see most HTML split up with either divs or spans. However, this can be very difficult to understand the _intent_ behind the divs. But, in the case of semantic HTML elements, we can be more explicit when differentiating between all the parts of the page using tags such as:

### What does this look like?

The following is a brief visual example of what normal HTML looks like compared to Semantic HTML:

![Semantic HTML example](https://cdn.hashnode.com/res/hashnode/image/upload/v1645017455848/n3kXsHuWh.jpeg)
_Image from https://seekbrevity.com/semantic-markup-important-web-design/_

On the left, we are only using divs to separate the structure of our web page. This is very uninformative and has several downsides.

On the right, we have a much better visualization of how the page is actually laid out and what each part represents. This results in a more organic layout with our header — content — footer.

### Benefits

So to summarize the benefits we receive:

-   Increased clarity on the structure of the webpage
-   SEO benefits — web crawlers have an easier time parsing the website and understanding the content
-   Improved DX (Developer experience)

### But how do I use it?

Here are some examples of how to use semantic tags, note that there are about 100 semantic elements available so this article won’t cover them all.

### Main content

For most web pages you can instantly start getting some benefits from using more semantic tags! For example, you can being by splitting up the page into three sections using the **header** , **main** and **footer** tags. Where in this case the main would be the meat of your page.

Some things to consider about the header tag: This should contain some of the < h1 >  < h6 > tags. Only using one < h1 > tag! Your logo or icon and any authorship information.

The footer usually contains but is not limited to copyright information, sitemaps, or any other contact information.

```
<header>This is a header</header>
<main>This is the main content</main>
<footer>Footer</footer>
```

### Sections

Dividing the sections of the page is usually done with the **section** and **article** tags. Some say that this can be interchanged but there are some clear differences to take into consideration!

The **article** tag should contain independent content that does not require any other context. Whilst the section tag is explicitly tied to the content of the page but is further divided into its respective subsections

```
<article>This is self contained content</article>

<main>
    <section>Related Content</section>
    <section>Related Content</section>
</main>
```

### Images

A **figure** tag is a great option for an image/picture. This should typically be used for more self-contained content. One of the added benefits of this tag is that it can be used in conjunction with another tag, **figcaption** , to add a small caption at the foot of the image.

The **figure** tag contains both the **img** and **figcaption** tags to make it clear to the browser that these two are related to one another.

A **nav** tag should contain within, navigation links that either navigate to other sections of the same page or other pages. These can either be used for navbars, menus, tables of contents, or anything else involving navigation.

Here is a small example. Not the prettiest but the main focus are the tags:

%[https://codesandbox.io/s/semantic-html-bt8er?fontsize=14&hidenavigation=1&theme=dark]

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/diego-ballesteros-9468a7136/) or [Twitter](https://twitter.com/relatablecoder).
