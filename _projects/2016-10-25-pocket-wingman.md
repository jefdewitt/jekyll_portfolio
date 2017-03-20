---
layout: project-template
title:  "Pocket Wingman"
tech:   "Objective-C"
image:  pocket-wingman-project-banner-narrow.jpg
link:   https://itunes.apple.com/us/app/pocket-wingman/id1021112996
date:   2016-10-25 09:08:11 -0400
---
Pocket Wingman is my first foray into mobile app development. It's an iOS app written in Objective-C. I built it from scratch following an MVC design pattern.  

{% include image.html url="/images/MVC-Process.svg" description="MVC diagram,
by Regis Frey" %}{: .float--right }

The Model–view–controller (MVC) way of doing things was too abstract for me at first. Full admission here: I had been coding for a little over a year when I began the project, and although I had worked previously for a startup I hadn't yet worked as a full fledged front-end developer. My way of doing things was fly by the seat of your pants and I had virtually no object-oriented programming experience or work with data modeling before.

## So What Is A Model, A View, And A Controller

The way I began to understand MVC philosophy was in the context of what these things actually look like in web development. Content is separate from styles is separate from functionality. Here's a list of loose correlations of components to demonstrate what I mean:  

    MVC       Website

    Model  =  Database
    View   =  HTML/CSS
    Ctlr   =  JavaScript/PHP


## What I Learned


- Developing a GUI (graphical user interface) from square one
- Separating model (data), view (graphical representations of the data), and controller (user input/interaction) functionality
- Xcode SDK development tools and workflow
- Working/managing Apple Signing Certificates and Provisioning Profiles
- App publishing through iTunes Connect

Frankly, this is the first piece of software I'd ever written and as necessity is the mother of invention, it was spurred on by me wanting to learn app development and use technology to improve my life. When I first thought of this project I got the idea from watching people interacting THROUGH their phones with each other. I was struck by how people used them to connect with each other instead of ignoring each other. That's the core idea behind Pocket Wingman. How could I leverage my phone to break the ice with people? All you have to do is pass someone your phone and it does the work for you.

## Key Features


- A drawing game captures a user's input
- The accelerometer prompts user interaction to move forward through views
- The touch screen is used to continue progress through a variety of gestures

For a free copy visit [here](https://itunes.apple.com/us/app/pocket-wingman/id1021112996){:target="_blank"}.  Try it out and tell me if you like it.  I appreciate feedback so if you see a place that needs work, have a suggestion, or an improvement I'd love to hear from you.
