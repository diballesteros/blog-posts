## How to make a Jest Test for Error Boundaries

**Own your error**

[Error boundaries](https://reactjs.org/docs/error-boundaries.html) are a nifty part of the React API to handle errors. Basically, an error that occurs within the error boundary propagates to said error boundary to control it.

With this functionality, you can choose what to do with the error as well as provide a fallback component to display to the user.

### Breaking it down

The error boundary is one of a handful of cases where you are required to use a class component.

At first glance, the error itself is provided by a callback within the lifecycle of React. componentDidCatch is what will receive the error and allow us to access the message and contents of said error.

The most basic functionality of this could be to simply console.error the message for debugging. However, more advanced use cases may include sending the error to a third-party service or displaying some kind of personalized message to the user.

The return of the component is what the sure will see instead of what was originally inside the error boundary. Example below:

![React docs error boundary example](https://cdn.hashnode.com/res/hashnode/image/upload/v1638468757223/LoK9e5yskX.png)

React Docs Error Boundary example

This example is straight from the React docs and provides a simple text follow-up, in a lot of cases this specific portion of the app may become unusable due to said error so you can possibly indicate to the user to reset or retry.

The best way to think of this is a gigantic try catch for your components to handle any unexpected errors.

### The Test

I made a slight modification to the component that is returned by the Error Boundary:

<h1 data-testid="errorboundary">Something went wrong.</h1>

The following is an example of how to create the test:

```
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom';

describe('Error Boundary', () => {
  test('Error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };

  render(
    <ErrorBoundary fallback={<ErrorBoundary />}>
      <ThrowError />
    </ErrorBoundary>
  );

expect(screen.getByTestId('errorboundary')).toBeVisible();
  });
});
```

Essentially what we do is create a component whose sole purpose is to throw an error and make sure that it is correctly displayed. This is quite the basic test but the idea is that now you can expand upon it and test for anything else the error boundary may do!
