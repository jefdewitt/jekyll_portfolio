---
layout: post
title: "Binding A Select Element"
image: binding.jpg
date: 2018-02-20 09:32:11 -0400
categories: Angular
---
Here was my problem: How to set a default value in a dynamically created JavaScript dropdown menu, the Angular way. Sure sounds simple enough, doesn't it?

## The Roadblock

The way I'm familiar with via vanilla JavaScript is to find an option and add an attribute to it. Well, because the select element is created after the rest of the DOM loads, trying to select an option element to apply the selected attribute to was not working. 

Going back to the way I know how, I guess I could have added another script tag after the ending body tag of the index file but this was an Angular application and that felt dirty. Or, another option would have been to use a timeout function to wait out the page load, but again, that isn't the Angular way of doing things. In fact, that's like the dirtiest way I could think of doing things. I'm cringing as I type this.

## The Path Forward

By binding the select element with a model (in my case, a string property on a class) I was able to set the default option that matched the string. It was as simple as adding an `ngModel` to the select element

```typescript
<select id="calendar-menu" (change)="onSelected($event)" [(ngModel)]="month">
    <option *ngFor="let option of options">{{ option }}</option>
</select>
```

This method allows me to grab the value of the current month, and when the dropdown is created, the default option that matches the current month is displayed. 