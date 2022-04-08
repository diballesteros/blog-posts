## Supercharge your app with runtime type-checking using ZOD

Type-checking in Javascript applications is becoming more and more normalized with Typescript. However, one common complaint of Typescript is that it doesn’t ensure type-safety in a runtime environment. [ZOD](https://github.com/colinhacks/zod) can solve these issues, as it offers type-safety checks at runtime, take note that this works in conjunction with Typescript!

As a small disclaimer, this isn’t a diss at Typescript. It’s amazing and makes writing code a lot faster as it instantly reports errors in the IDE, but a little more safety never hurt anyone.

In this article, I’ll quickly go over how to set up ZOD and an example of it what it offers!

### What is ZOD?

By definition of the creators of this package:

> _Zod is a TypeScript-first schema declaration and validation library. I’m using the term “schema” to broadly refer to any data type, from a simple_ _string to a complex nested object._

Sweet! The amazing thing about this is that it works in runtime so we can feel considerably safer than what we expect from API and Typescript will _actually_ match the response from API.

### The Setup

Let’s go ahead and first install the library:

```
npm install zod typescript
```

Make sure that in your tsconfig.json that the compiler has the strict option set to true.

```
{ 
    // ... 
    "compilerOptions": { 
        // ... 
        "strict": true 
    } 
}
```

Easy enough. Now we can start beginning to code. For this example, we’ll be using the Pokemon API to quickly have something available to all. More info on it is [here](https://pokeapi.co/).

### The Schema

ZOD works by having a schema of the type and then validating it. If I wanted to just validate a string I’d create the following:

![Code](https://cdn.hashnode.com/res/hashnode/image/upload/v1644766887907/ukO3lK-Jc.png)

Applying this to an API is fairly simple as we just need to know the object of the response.

![Code](https://cdn.hashnode.com/res/hashnode/image/upload/v1644766889763/8PnrC46MY.png)

Now let’s quickly build out some simple fetch requests to test this out.

![Code](https://cdn.hashnode.com/res/hashnode/image/upload/v1644766891403/wEa-PSEUo.png)

Here I’m using two very simple requests. The first one has a response type that directly correlates with the schema we created earlier. The second while instantly generates an error after parsing as it does not match the schema. This error can be handled in a variety of different ways so I suggest checking out the ZOD docs to get a better understanding.

### Conclusion

And that’s it! It’s a very simple library to implement but you can see great benefits from the get-go in the confidence of the application at runtime.

Here is a small sandbox with an example of the code above. There are two buttons to test out both requests and how the schema parses the code.

[https://codesandbox.io/embed/zod-type-check-09g3c?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/zod-type-check-09g3c?fontsize=14&hidenavigation=1&theme=dark)

_Originally published at_ [_https://relatablecode.com_](https://relatablecode.com/supercharge-your-app-with-runtime-type-checking-using-zod/) _on February 13, 2022._