## How to quickly configure ESLint for import sorting

![Imports](https://cdn.hashnode.com/res/hashnode/image/upload/v1633878320428/4iT3fpY3R.jpeg)

I can get a bit obsessive with the way the code is formatted and styled not only in a team setting but in my own personal projects. Something that I took note of along the way is that I really liked by imports at the beginning of the file being ordered in a specific way:

1. Dependencies / Built-in modules (eg ‘react’, ‘react-router-dom’)
2. Internal routes of absolute folders (eg ‘components’, ‘assets’)
3. Relative routes (eg ./, ../)

And within those same subcategories, I also wanted it to be alphabetical.

### ESLINT

With ESLint there are two options to flag errors or warnings when the imports are set in an incorrect order: sort-imports and with the help of a plugin eslint-plugin-import another rule with the name import/order.

### sort-imports

[sort-imports](https://eslint.org/docs/rules/sort-imports) offers a way to alphabetically organize the imports using the declarations or the members of the declaration. For example:

Will become:

Great! We can also add a few options to ignore letter cases. In order to hook up this to ESLint we have to add a rule in the ESLint config file:

```
"rules": { // ..other rules, "sort-imports": ["error", { "ignoreCase": true, "ignoreDeclarationSort": true }], }
```

You may have noticed I am ignored declaration sort here. This is intentional, we are going to have a more nuanced approach to sorting the declarations using [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import).

### import/orders

For this to work the ESLint plugin must first be installed:

```
yarn add eslint-plugin-import --dev
```

Great! It offers a rule configuration to get very [granular](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md) about how we want our imports to look. We can first differentiate the groups of our imports and split them up by groups:

```
"rules: { // ..other rules, "import/order": [1, { "groups": ["external", "builtin", "internal", "sibling", "parent", "index"], } ] }
```

This will split the imports by the groups we specified at the beginning! Great! However, when using aliases with Typescript a few of our imports can be confused with dependencies. This particular rule can help us circumvent these particular edge cases by specifying something called **pathGroups**.

```
"groups": ["external", "builtin", "internal", "sibling", "parent", "index"], "pathGroups": [{ "pattern": "components", "group": "internal" }, { "pattern": "common", "group": "internal" }, { "pattern": "routes/ **", "group": "internal" }, { "pattern": "assets/**", "group": "internal", "position": "after" }], "pathGroupsExcludedImportTypes": ["internal"], "alphabetize": { "order": "asc", "caseInsensitive": true }
```

Great now it will consider those aliased folders under the group **internal**!

As part of the linting process you could now run:

```
yarn lint --fix
```

And it’ll fix all import sorting warnings.
