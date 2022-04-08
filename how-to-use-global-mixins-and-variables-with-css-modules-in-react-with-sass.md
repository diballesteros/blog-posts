## How to use global mixins and variables with CSS Modules in React with SASS

These days it’s fairly common to use different CSS frameworks or libraries to handle styling in a React app such as Tailwind or styled-components. Typically I tend to prefer more traditional CSS with separated files. Outside of the arguments of why this may be preferred or not it’s still fairly useful to have a set of global mixins (SASS) and/or variables to keep it DRY.

Starting an app with Create-React-App or next a fairly common option is to use [CSS Modules](https://github.com/css-modules/css-modules) which guarantees that the styles per component will not have any conflicts, however, it does mean it’s slightly different to access these global variables.

This tutorial assumes you already have a react app ready to configure.

### The package

Create-react-app docs recommend using [node-sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) for the styling, however, this is deprecated so I would suggest using sass (Dart Sass) as it is still actively receiving support. This can be quickly done with:

```
yarn add sass
```

or

```
npm install sass
```

### The stylesheet

Now with that out of the way let’s create a file for our mixins with the name \_variables.scss:

![variables](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468742684/ji2YxUech.png)

Mixin stylesheet

In the actual style sheet, it can be imported in the following way (any file \*.module.scss):

![stylesheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468744199/STkI5E8_Z.png)

Imported mixins

### Variables

For variables it would be something very similar, let’s have a file with the name \_variables.scss:

![variables](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468745880/iWf-EKaMW.png)

Variable stylesheet

And importing it can be done in a similar fashion:

![stylesheet](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468747330/TpLGR84DDB.png)

This can be quite useful to reuse a lot of variables and similar styles throughout the entire project while still maintaining the module structure.

For example, I did something along these lines to share variables to use in media queries throughout my project:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468749050/V1lBq37MB.png)

Example stylesheet

This is quite useful as I used a combination of CSS variables and SASS variables to reuse a lot of fixed sizes and paddings to keep everything standardized throughout the entire app.
