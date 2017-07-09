---
layout: post
title: "Angular Components"
image: machining-components.jpg
date: 2017-07-08 09:32:11 -0400
categories: Angular
---
A lot of Angular's secret sauce lies in `components`. A component is a class and a self-contained section of an Angular app. It's sort of replaced `directives` if you're familiar with AngularJS. And they are ALWAYS associated with a template.

`Components` consist of three main parts:

1. The import statement
2. The class decorator
3. Exporting the class

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'my-new-component',
    template: '<h1>My New Component</h1>',
    styles: ['h1 { font-weight: bold; }']
})

export class MyNewComponent {
}
```

## What Are My Eyes Seeing?

The import statement just imports the `Component` Class from Angular core. We gain access to core features of the Angular framework this way. In effect, this replaces linking to the entire library as we had to do in AngularJS -- cutting out significant overhead.

By importing `Component` we get our hands on its `Decorator`. This is where some post-processing occurs that helps Angular figure out what to do with out new `component`.

Since we made use of the import keyword, now we must use the export keyword to also make our `component` available to the rest of our application. This is the convention with [ES2015 module syntax](http://exploringjs.com/es6/ch_modules.html){:target="_blank"}.


## What To Note

Pay special attention to the decorator object (@Component). The `template` and `styles` properties can be interchanged with `templateUrl` and `styleUrls` respectively. This allows you to further modularize your component by breaking out your template files and stylesheets.

And the best part? The component and style files will automagically be scoped to the component. Wizardry? Maybe.
