---
title: Step-By-Step guide for the first time Open Source contribution
date: 2022-03-02
description: A step-by-step guide on how to find a list of issues for open source projects, choose one, make your first open-source contribution and get it approved.
categories:
    - devlog
---

## Step-By-Step guide for the first time Open Source contribution

After doing a wide array of coffee chats, one of the most common questions was how to go about contributing to open source. So I decided to make an in-depth how-to from the very beginning to the very end.  
This is what I would do as a first-time open source contributor, including:

-   How to find and request the issue
-   How to fork and clone the repo
-   How to make the branch
-   How to make the pull request to the open source repo
-   How to go through the review process

Small disclaimer: I’ll just assume you’re using VSCode however the process is similar with other IDEs.

### Finding the issue

Github has a tag system for their issues. In order to promote users/repo owners to find beginner issues for projects a tag was created: **good first issue.** Issues tagged with this are a great starting point! Sites exist that compile lists of open source projects that have this tag. Let’s go ahead and google it.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224559032/8gneXyDSz.png)

A few results down you can find a website that compiles a list of good first issues. Although there are other alternatives I’ll concentrate on this one.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224560586/97B_uAdjn.png)

[Link for reference](https://goodfirstissues.com/)

On the actual site we can filter by **JavaScript** and start looking through some issues:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224562232/vjipqK--R.png)

This list is chronological so there may be quite a few projects that aren’t too big, but that’s fine! This is mostly to practice and get our first contribution.

Found this issue which seemed fairly simple:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224563909/306r9J-Je.png)

Click on ‘Go to Issue’ this will open up the GitHub issue. Once there let’s read the description and head over to the CONTRIBUTING.md to see how we should tackle this. We can typically find this by clicking on the ‘Code’ tab at the top and finding the file in the root folder.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224565731/svAkHc0CT.png)

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224567228/lizZ7Scgh.png)

When reading the **CONTRIBUTING.md** check out how we can be assigned an issue.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224568967/F6hdI8U6o1.png)

Fair enough we just have to contact the maintainer. Let’s do this directly from the issue so we can be assigned the task:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224570703/hfYQmn825.png)

Unfortunately… I received _no_ reply! So I did this same process for another. I’ll skip ahead to the part where they reply!

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224572387/X2Et0wWVw.png)

### Working through the issue

I am now assigned the bug. Seems to be a simple UI/style error. Let’s go back to the root of the repo and get all the code in our local environment.

Let’s fork and then clone the repo first. In the top right, you’ll see a fork button. This will create the exact same repository for you as well. This is where you’ll be working from/

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224574103/jsxSIAhp6.png)

Now that it’s forked it’s time to clone the repo. Cloning can be done in a variety of different ways. Below I’ll post how to do so with the Github CLI command. At the top right you can find what commands to run in the **Code** dropdown:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224575630/IXrUctBXT.png)

or

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224578079/Sm-GeliNNy.png)

Click on Github CLI (in case you need to download it [here it is](https://cli.github.com/)). Run the command in your terminal/command prompt. Just in case here’s a [quick guide](https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/) on using the command prompt:

Obviously, for the case of your open source project, you’d replace **stormkit-io/app-stormkit-io** with what you have

```
gh repo clone stormkit-io/app-stormkit-io
```

Typically in the **README** (at the root of the repository), you can find how to run the app:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224579607/fQRZIlRNT.png)

Run both of these commands from the terminal in the same location where you cloned the repo!

Example:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224581564/O-kND7NcC.png)

I won’t get into the details of solving the error as it can vary wildly for each contribution. But just know that I fixed the bug. I’ll go ahead and make the pull request to the main branch!

I will say make sure you all the code you wrote thoroughly! This is important. I repeat make sure to everything you did, also try to do so in Safari, Firefox, and Chrome (if it’s a web app) to make sure there are no compatibility issues. Doubly so if the open-source project has tests you can run.

As a small aside in VSCode, you should be able to see what files you modified on the right by checking out the **source control**.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224583452/DJeeAVAqXT.png)

_For those that are curious to resolve the bug, it was literally just a single line of code….!_

### Making the pull request

Although you could have done this step before fixing the bug, let’s create a branch. Click on the master button below

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224585035/A7uoFAN5S.png)

Create a branch:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224586587/0orrVFj44.png)

As for the name. I typically like to do it in one of the following formats:

```
<MY GB USERNAME>/Short_name_separated_by_underscores
```

In the CONTRIBUTING.md there may be some info on how to name the branches. If not, however, a good idea may be to look at the repo and check out the pull request tabs and check Closed

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224588116/IHUT0yPFhj.png)

Look at how the other branches were named and just copy a similar format!

After creating the branch it should switch to it automatically. Now let’s push up the code:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224589768/gAiy6cWZb.png)

These are the commands I executed after switching:

```
git push -u origin git push --set-upstream origin <NAME OF BRANCH>
```

### Sidenote

As a small refresher when you’re done working through your code don’t forget the basic git commands to stage and commit your changes!

```
git add <CHANGED FILES> git commit -m "{{MEANINGFUL COMMIT MESSAGE}}
```

Here are two resources for making meaningful commit messages and for commit commands in generals:

This can also be done straight from VSCode with the GUI.

[https://www.freecodecamp.org/news/git-commit-command-explained/](https://www.freecodecamp.org/news/git-commit-command-explained/)  
[https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

### Back to the Pull Request

After pushing the code you can now go back to Github. In the original repo you’ll see an option to create the official pull request:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224591633/e-JuhsSvM.png)

Let’s go ahead and create it. In the PR write field, we should be very explicit about the changes we made. Possibly include a screenshot so the reviewer knows exactly what was changed. Also, you can reference the issue with the following line in the markdown. As always reference any docs to know what the open-source project maintainers prefer:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224593156/WGlVPa0R2.png)

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224595087/umWBVy5nR.png)

Now we play the waiting game for the maintainers of the repo to review the code.

### The review

Sometimes the reviewer might ask for adjustments here. For the sake of this example, I’ll pretend there was a review with adjustments needed.

On the same pull request page you may see some comments like this, which could either ask for adjustments or clarification about the code:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224597028/Olq9bcWaO.png)

Ideally, you would go through all the comments, resolve them in your **own** branch, stage, commit and push them once again. Once they’re uploaded go ahead and re-request the review from the top right with the little refresh icon.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224598608/iKLT0DqTu.png)

After the review checks out the new code you can go ahead and resolve the conversations.

Once everything is good to go the reviewer will approve the pull request, resolve the issue and merge everything:

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224600124/bGDQZv8cm.png)

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224602083/E-P9xVK0V.png)

Congratulations if you’ve gotten this far you should officially be a contributor! You can check out the entire list on the repo home page.

![github](https://cdn.hashnode.com/res/hashnode/image/upload/v1646224603680/nNWdJyrlv.png)

Hopefully, this gets your feet wet. Open source is an incredible thing for us developers and giving back is good! Something to keep in mind is that not all contributions will be bug fixes they may also include:

-   Creating tests
-   Improving or translating documentation

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/diego-ballesteros-9468a7136/) or [Twitter](https://twitter.com/relatablecoder).
