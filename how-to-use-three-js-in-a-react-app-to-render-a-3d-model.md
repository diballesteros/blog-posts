## How to use three.js in a React app to render a 3D model

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176957809/ZG0SuMgr5.jpeg)
_Photo by Mehmet Turgut Kirkgoz on Unsplash_

While scouring YouTube I came across the following [video](https://www.youtube.com/watch?v=bSMZgXzC9AA) that is a fairly concise tutorial on how to build a neat-looking portfolio page. But one technology that was used was three.js to render a cool-looking 3D Model with camera controls!

I wanted to learn how the technology worked and quickly create a standalone sandbox with the same tech stack. I’ll be explaining the process of coding it out and how it works!

### Set up

```
npm i three
```

First, let’s go ahead and install the necessary package:

And let’s import it in the file where we want to use it:

```
import * Three from "three"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
```

### Loader function

The three.js library has a loader for glTF 2.0 resources (GL Transmission Format). This is the main function we’ll be using to load our model into our app! This should be wrapped with a promise as it’s an asynchronous process. Let’s split this up:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176959380/tNxVpeCE0.png)

This function accepts a scene is how we set p what and where our model is going to be rendered. With this, we can decide how to place inner objects, camera controls, and different lighting effects. The secondary parameter is glbPath, which is the resource of our model, more on that later, and finally any secondary options.

We create a new instance of the GLTFLoader and set all our load constants with the internal load function. Traverse in this case is a callback function to maintain the values of castShadow and receiveShadow.

### The React Component

Next, let’s create the component, this just requires a ref linked to the useRef hook:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176960810/plaeIF6sR.png)

Let’s get some of the basic state management out of the way. We need to build a renderer in real-time in the app so we’ll be using the useState hook. As this is real-time we will also be using a useEffect hook to build it after the initial mount:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176962515/-sdgFOddy.png)

We have to make sure the renderer doesn’t already exist as well as check if the component is mounted correctly with the ref. Now we can get into the nitty-gritty details of building out the renderer.

### Renderer

There render we’ll use is the [WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer). Let’s create this and set up the defaults (all inside the useEffect internal if):

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176963949/Gj4VC08_D.png)

Nothing too crazy to mention here I suggest checking out the docs for more in-depth information on every property that has been set.

### The controls and scene

These are pretty straight-forward and don’t require crazy configurations:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176965911/AjIO8_XuF.png)

Added some arbitrary scaling and camera positioning. You can play around with this if you’d like! And some lighting to see the model itself.

Finally, we can go ahead and animate the model and make sure it works correctly with the controls!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176967843/Bfw3YCoKO.png)

Some math to help with the rotations as well as updating the controls when necessary. We call the renderer’s render function with all of our properties.

The final step for the rendering portion is calling the function we made at the very beginning!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1644176969738/bLSTOJO0u.png)

You have may have noticed a setLoading state. As our load function is asynchronous we need to take into consideration the delay for our model is rendered. The only other noteworthy mention is calling the animate function after correctly loading the model.

### Side Note

I obtained the model freely from the following site:

“Dinosaur” ( [https://skfb.ly/6ZBXA](https://skfb.ly/6ZBXA)) by jeilocreativedesignworld is licensed under Creative Commons Attribution ( [http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/)).

### Conclusion

And that’s it! Here is the full code and final result with everything all hooked up. Any model can be used. I encourage others to experiment with it and play around with the values!

[https://codesandbox.io/embed/react-three-render3d-qobqy?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/react-three-render3d-qobqy?fontsize=14&hidenavigation=1&theme=dark)

More content at [Relatable Code](https://relatablecode.com)

_Originally published at_ [_https://relatablecode.com_](https://relatablecode.com/how-to-use-three-js-in-a-react-app-to-render-a-3d-model/) _on February 6, 2022._