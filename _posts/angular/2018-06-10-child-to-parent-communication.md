---
layout: post
title: "Talkin' Back To Our Parents"
image: machining-components.jpg
date: 2018-06-06 09:32:11 -0400
categories: Angular
---
Anyone who's spent time in therapy knows the importance of good communication. And when it comes to parents and their children it can be a real challenge. But Angular makes this easy!

Last article, we discussed sharing data from parent to child components via the `@Input` decorator. Still, it seemed a little one-sided to me. I want to even the score, so let's figure out how to talk back to ma and pa. 

## @Output & EventEmitter

Here's the jist: We're going to create an instance of EventEmitter in our child component and decorate it with the `@Output` keyword. This one-two punch will emit an event back up the component chain to our parent.

Let's dig in!

## Child Component

First, we're going to bind a method to a click event.

```typescript
    import { Component, Output } from '@angular/core'; // import Output symbol

    @Component({
    selector: 'child',
    template: 
        `
        <button (click)='clickaroo()'>Click Here</button> <!-- click binding -->
        `
    })

    export class ChildComponent {
        @Output() talkBack: EventEmitter<string> = // decorate property w/ Output
            new EventEmitter<string>(); // new EventEmitter object

        public clickaroo():void {
            this.talkBack.emit('Yeah, whatever!') // the emit method is key
        }
    }
```

## Parent Component

Within our parent component we want a way to 'listen' for an event coming from our child.

```typescript
    @Component({
    selector: 'parent',
    template: 
        `
        <p>{% raw %}{{messageFromChild}}{% endraw %}</p>
        
        <!-- Matching the @Output property from our child,
             talkBack is our 'event listener' & we trigger
             onClickFromChild when it 'hears' an event -->
        <child (talkBack)='onClickFromChild($event)'></child>
        `
    })

    export class ParentComponent {

        public messageFromChild;

        public onClickFromChild(message: string):void {
            this.messageFromChild = message;
        }
    }

```

Once we 'hear' the event, we set `messageFromChild` with its value. One key thing to understand is that the `$event` parameter passed to `onClickFromChild` stores whatever value's been emitted from the `@Output` / `EventEmitter` in our child component.

And that, ladies and gents, is that.  

Now that we've got a handle on communicating up and down the component chain, between parents and their children, who needs a `$scope` object anyway?!
