## Quick TS Tips: How to extract a type from an array

Recently I had to work with some automatically generated types whilst using GraphQL. This is a very extremely useful feature! However, it can be a little cumbersome to specifically reach different custom _nested_ types from the requests without it being too verbose.

But, being a little creative with some native Typescript functions we can find a way to handle this exact use case!

### The example
