---
layout: post
title: "Component Communication"
image: machining-components.jpg
date: 2018-05-15 09:32:11 -0400
categories: Angular
---
If you're familiar with AngularJS, then you know all about `$scope`. Every controller has a `$scope` object and you can use these guys to broadcast and emit changes from one controller to another. Well, ideally, you'd emit up to a _parent_ or container controller and then broadcast back down the chain to a sibling of the emit controller.

What the hay, man? Angular doesn't use the `$scope` object now. How do I make the thing go?

## The Angular Way of Component Communication

Angular's mode of component comunicado is a bit different. This article is just going to focus on sending data 'down' the chain to a _child_ or nested component. 

Without the `$scope` object to hook into we need more of a direct method for our pieces to speak to one another. What we need is the `@Input` decorator. This guy sets a class's property to receive 'input'. But input from what, from where?

Some examples might fill in the holes.

## Child Component

Inside our child we're going to decorate a property to accept input from its parent component.

```typescript
    import { Component, Input } from '@angular/core'; // import Input symbol

    @Component({
    selector: 'child',
    template: 
        `
        <p>{% raw %}{{ dataFromParent }}{% endraw %}<p> <!-- show data from parent -->
        `
    })

    export class ChildComponent {
        @Input() dataFromParent: string; // decorate property to accept input
    }
```

## Parent Component

Then, we call our child selector from within the parent. That way we can set the value of the child's property as an element attribute that's exposed to its parent. It's a typical child/parent relationship -- the parent just gives and gives and give while the child takes and takes and takes ;)

```typescript
    @Component({
    selector: 'parent',
    template: 
        `
        <!-- we point the child's attribute toward our parent's property -->
        <child [dataFromParent='favoriteMuppet']></child>
        `
    })

    export class ParentComponent {
        public favoriteMuppet = 'Oscar The Grouch';
    }

```

Now, we've got one way data flowing from parent to child. Stay tuned to see how we turn this around and get data back up to the parent. Think of it as backtalk. We're about to give the parent a piece of our mind.
