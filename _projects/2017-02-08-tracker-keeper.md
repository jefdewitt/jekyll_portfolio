---
layout: project-template
title:  "Tracker Keeper"
tech:   "Angular JS"
image:  tracker-keeper.jpg
link:   
date:   2017-02-12 11:08:11 -0400
---
I've spent a lot of time getting discouraged when I didn't see the results I expected. Whether these were health, hobby, or financial goals, I needed to know I was making progress in order to keep going.

## Malcolm Gladwell

A few years back I read an article about [Dan McLaughlin](http://thedanplan.com/){:target="_blank"}, who quit his day job and tried to train his way into being a pro golfer. He was inspired by Malcolm Gladwell's book, Outliers. In it, Gladwell theorizes that it takes roughly 10,000 hours to master a field. I figured I'd find out for myself.

It was early 2014 and I was just learning code; with 10,000 hours in mind I now had a target to shoot for. It's daunting to view in one large chunk but if you look at it in the context of a full time job, we spend 2080 hours a year working. I put pen to paper and started logging every minute I spent coding.

## The Manual Labor

This was a good place to start but it was tedious. I used a white board calendar I bought at Walmart and mounted it in my living room. Each month I'd transcribe my time to a notebook until I had filled up four or five pages. I had months of data and as I tallied up the total time I was curious about how much time I was averaging per week, per month, per the year. Was I gaining momentum or was I slowing down?

I repeated this process every three or four months and found it gave me motivation to keep going. If my average was down I'd try harder to bring it back up. But I wanted more data. And the process of compilation was time consuming and error prone. I needed a tool.

## Tracker Keeper

[Tracker Keeper](/trackerkeeper){:target="_blank"} does all this for you. With a few simple steps you can start tracking the time you spend toward achieving your goals. You can see exactly how much time you're averaging, both in hours and percentages, plus the amounts you've already accomplished. If you're wondering if you're on track, wonder no more.

## Lessons Learned

Tracker Keeper is a single page application built with Angular JS and uses local storage to keep your data stored by the browser. The development process taught me a lot about error handling, particularly in terms of handling missing values on page refreshes. Another issue I faced was my approach to data persistence between views, which I accomplished with shared scoped objects. Local storage is achieved uniquely with Angular JS in that there's need for serializing or parsing JSON objects.

What I enjoyed working with most is Angular's two-way data binding  [ngModel](https://docs.angularjs.org/api/ng/directive/ngModel){:target="_blank"} directive. But [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat){:target="_blank"} and [ngSelect](https://docs.angularjs.org/api/ng/directive/ngOptions){:target="_blank"} sped up development by keeping my markup slim.

My plan is to continue refinement of this project and eventually develop it into a hybrid app for download. Take her out and give her a spin.

## Todo
- Convert to a hybrid app via Ionic
- Write help documentation
