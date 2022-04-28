---
title: How to add Cypress & Codecov in Github Actions in React App
date: 2021-09-19
published: true
description: How to easily integrate Cypress and Codecov in a React app in a CI/CD pipeline using Github Actions. Validate tests for free on open source apps in Github.
categories:
    - testing
    - react
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1638468811165/SCsuy83xe2.png
---

### Introduction

Having a thorough CI/CD pipeline for an application is critical to the success of the application. Typically in these same pipelines, it is normal to include a testing pipeline to make sure everything is still working correctly.

[Cypress](https://www.cypress.io/) is a popular E2E testing framework with a robust system to truly test out the user experience. Whilst [Codecov](https://about.codecov.io/) is a development cycle tool to check out how much of the code is actually being tested.

Using both of these tools in tandem can give useful feedback, especially if incorporated into the CI/CD pipelines!

### Requirements

-   Basic knowledge of Github Actions
-   Some Cypress tests have already been implemented
-   React app ready to go and on Github as a repo! (Built with Create React App)

### Instrumentation

Codecov must receive a code coverage report. This code coverage report can be created via instrumenting the testing tools. If your React App happened to be created via Create-React-App then this can be easily done with a package: [@cypress/instrument-cra](https://www.npmjs.com/package/@cypress/instrument-cra). This will automatically instrument your app when executing the tests, but we need to modify our **package.json**

First, let’s install the necessary dependencies:

```
yarn add @cypress/code-coverage @cypress/instrument-cra --dev
```

These two packages allow us to create and instrument our React app.

In scripts let’s add two commands:

```
"scripts":
    {
        // ...Other commands
        "local:instrument": "react-scripts -r @cypress/instrument-cra start",
        "ci:instrument": "CHOKIDAR\_USEPOLLING=1 react-scripts -r @cypress/instrument-
          cra start",
     },
```

The first command is to instrument it locally to check out a coverage report locally, the second command will be the build command for the CI pipeline in Github Actions.

If you use the local command and begin to use the app a report is generated in the coverage folder at the root of the app:

![Results](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468811165/SCsuy83xe2.png)

I recommend adding this new folder to the **.gitignore**

If you need to exclude any files from the instrumentation this can be done in the package.json:

```
"nyc": {
    "exclude": \
       [ "src/serviceWorker.ts", "src/serviceWorkerRegistration.ts", \]
 },
```

I’m personally excluding files associated with the service worker.

### Codecov and Cypress

Let’s get Codecov and Cypress integrated with our Github repo. Navigate to the following two pages:

Login, integrate, and give permissions to the respective Github Repo. Take into account that if it is not open source this will require paying.

Cypress Dashboard has a limit for tests per month.

### The pipeline

Now that our integrations are connected we need to create the respective pipelines in Github Actions. Let's create a **.github** folder in the root of our folder with an internal folder named **workflows**. Inside let's create one more file named **main.yml**

You can find the full example of the file here:

[https://github.com/diballesteros/nuzlocke/blob/master/.github/workflows/main.yml](https://github.com/diballesteros/nuzlocke/blob/master/.github/workflows/main.yml)

This can essentially be copied and pasted making sure the commands exist and are correct.

I’ll explain a few of the important parts:

### Building the Artifact

steps: - name: Checkout uses: actions/checkout@v2 - name: Cypress install uses: cypress-io/github-action@v2.9.7 with: runTests: false # report machine parameters - run: yarn cypress info - run: node -p 'os.cpus()' - run: yarn lint - run: yarn build - name: Save build folder uses: actions/upload-artifact@v2 with: name: build if-no-files-found: error path: build

I want to run the tests on several browsers so I’ll first create a step to create an artifact of the build folder to share with the other parallelizations. I validate some of the specs and the cypress version.

### Running the tests and uploading

Afterward, I’ll run the tests in every container:

```yml
steps:
    - name: 🛫 Checkout
      uses: actions/checkout@v2

    - name: 🏗 Download the build folders
      uses: actions/download-artifact@v2
      with:
          name: build
          path: build

    - name: 💻 'UI Tests - Chrome'
      uses: cypress-io/github-action@v2.9.7
      with:
          start: yarn run develop:ci
          wait-on: http://localhost:3000
          wait-on-timeout: 120
          browser: chrome
          record: true
          parallel: true
          group: 'UI - Chrome - Main'
          spec: 'cypress/integration/main/*'
      env:
          CYPRESS_PROJECT_ID: ${{ secrets.CYPRESS_PROJECT_ID }}
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

    - name: ✅ Upload coverage to Codecov
      uses: codecov/codecov-action@v2
```

The most important portion here is using the already pre-existing GitHub action for cypress with **cypress-io/github-action@v2.9.7**

Also, I’m using the command previously **ci:instrument **to run the build. Likewise, I have included the tokens to integrate the Cypress dashboard. If your repository is private you **must** also include a token for Codecov.

The final portion Upload coverage to Codecov automatically uploads the report to Codecov if the Github integration is in place.

```yml
name: Cypress on: \[push\] jobs:
```

Don’t forget that you can customize what actions the workflow will trigger. I have it here for every push.

### Example of results

Now with a push, you’ll be able to see the workflow being executed in the Actions tab of the respective repo:

![codecov](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468814578/mopJg0qnF.png)

And in the respective pull requests you can see the reports:

![codecov](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468817497/KfzDlX8xX.png)

![codecov](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468820541/J_3lePcyd.png)
