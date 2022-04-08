## How to change Material Icon Theme folder association

How to change [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) folder association
I really love the Material Icon Theme for Visual studio code. It’s very visually appealing and helps me quickly mentally locate whatever I need inside the explorer.

However, not all folder names and types are covered by default. But, they do offer a way to add your own associations with custom icons as well pre-existing icons.

Changing the icon
In this example, I’ll be changing the icon for a folder named cypress. [Cypress](https://www.cypress.io/) is used for end-to-end testing so I figured I should change the default Icon to something more oriented for testing.

First, let’s go ahead and open up Visual Studio Code and hit CTRL + SHIFT + p

This should open up possible commands. Type in User Settings.

![Visual Studio Code User Settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284606138/cfwZqUEmT.png)

Upon opening them up, we can see the search bar, search for folder icon.

In Material-icon-theme > Folders: Associations click on “Edit in settings.json”

There should be a section called material-icon-theme.folders.associations

Inside we can start changing the folder associations

![Material Icon Theme settings.json](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284607345/pUIDovuTs2.png)

I updated it to include cypress with the test folder association.

For default images this can be used as a reference:

https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/images/folderIcons.png

Now cypress will show up with the updated icon:

![New cypress icon](https://cdn.hashnode.com/res/hashnode/image/upload/v1649284608477/uEhtI5S_q.png)
