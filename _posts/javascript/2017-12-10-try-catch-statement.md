---
layout: post
title:  "try...catch Statement"
image: catchjpg
date: 2017-12-10 09:32:11 -0400
categories: JavaScript
---
Nothin' easier than handling errors in JavaScript, amirite?!

The way it stops running when you've made a typo. The brevity of it's eloquent error messages in the console; especially the poetic cadence of `is not a function` and `Cannot find property <length> of undefined` errors. Oh, and the Where's Waldo game of working with minified files.

As I've progressed I've come across a lot of great tools to help debug. Foremost, I learned to `console.log` the crap out of my code. Insert a `console.log` function, save the file, and reload the page. Over and over and over again.

Then, I graduated to using breakpoints. Say, my JavaScript isn't running but I can't pinpoint why. I open up my dev tools and check out the file I'm looking for in the sources tab (Chrome). I set a couple breakpoints in different functions or places in the file and reload the page. The page pauses at the breakpoint I set and I can check the values that are currently set within the file. From here I step through the file and discover what's happening. 

These strategies are effective for debugging but they don't prevent JavaScript from just not running if there's an error. And, again, there's the generic JavaScript errors in the console to contend with.

## try...catch

There's a simple statement that gives you a lot more control. Control over your application finishing running and control over the exceptions that are thrown that you rely on. Meet `try...catch`.

Here's the basic structure:

```javascript
function double(varA) {
    try{
        var product = varA * 2;
        return product;
    }
    catch(error){
        // Catch and create your error message
        console.log('Cannot find sum ' + error.message);
    }
}
```

`try ... catch` allows you to navigate around runtime errors so that your code still runs. In the example above, if `varA` is missing a value then the `double()` function will spit out a nice tidy error message to the console but the rest of the file will still execute. 

What's more, even if you're working with minified files you'll know exactly where the error occurred.

Something to keep in mind is that this technique only works on runtime exceptions. So, syntax errors will still slip through the cracks and cause a program to fail.

## The `finally` Part

The last part of a `try ... catch` is the `finally`. This part is optional. But what's useful about this is that `finally` will ALWAYS run (even if `try` throws an exception). In the event you just need to move on you have a failsafe you can turn to. Again, `finally` *always* executes -- exception or not.

```javascript
function double(varA, varB) {
    try{
        // Execute a statement
    }
    catch(error){
        // Catch the exception
    }
    finally{
        // Call next function
        nextFunction();
    }
```

Find the MDN source [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch){:target="_blank"}.


