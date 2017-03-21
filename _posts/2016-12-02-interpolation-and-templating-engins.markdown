---
layout: post
title:  "Interpolation And Templating Engines?"
image:  laptop-and-pineapples.jpg
date:   2016-12-02 10:40:11 -0400
categories: angular
---
I'm currently working on my first solo Angular project. The idea is to host the app on my Jekyll site (the one you're on right now). Sounds like a simple enough task, right? And in theory it is, or should be.

AngularJS is a JavaScript framework built by the folks at Google. It's a powerful, quick way to get an application off the ground. There is so much built-in functionality that eliminates a staggering amount of code you would otherwise have to write. Some of the features I like most are two-way binding and directives. Two-way binding means that changes affecting the model are immediately made in the view, and vice-versa. Directives can be elements or element attributes that instruct, or direct, functionality. It's not necessary to write out HOW the functionality works, the directives tell a tag to just DO it.

## The Roadblock

I was making great progress on my app until I came to evaluate a simple expression in the HTML. I'm already accustomed to Liquid syntax so it all seemed like a walk in the park. For testing purposes I wrapped a math expression in double curly braces, like so:

```liquid
    {% raw %}
    {{ 1+2 }}
    {% endraw %}
```

...and nothing happened. The expression didn't evaluate. Nothing appeared on the page. Whaaa???

## Reaching Out

I spent an hour systematically troubleshooting that simple line of code -- adding space, removing space, comparing it to code listed in the documentation, reading all about evaluating expressions in AngularJS and what exactly interpolation is and how it works. I posted questions on Stack Overflow and Treehouse, tried all the suggestions I received and came up empty.

For the curious:

    In computer programming, string interpolation (or variable interpolation, variable substitution, or variable expansion) is the process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.

## The Conclusion

As fate would have it, I stumbled upon an article about templating engines, such as Django, Twig, and Liquid. I remembered how Liquid also uses the same interpolation characters as AngularJS. And that, folks, was when the light bulb came on. I realized that Liquid was stripping out the curly braces from my app. I changed the interpolation characters via:

```javascript
    angular.module('angularApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    })
```

A little switcharoo to...

```javascript
    {[{ 1+2 }]}
```

...and the expression evaluates! All is right with the world.
