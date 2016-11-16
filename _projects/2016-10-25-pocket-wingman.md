---
layout: project-template
title:  "Pocket Wingman"
image:  pocket-wingman-project-banner.jpg
link:   https://itunes.apple.com/us/app/pocket-wingman/id1021112996
---
Pocket Wingman is my first foray into mobile app development. It's an iOS app written in Objective-C.  I built it from scratch following an MVC design pattern.  

{% include image.html url="/images/MVC-Process.svg" description="MVC diagram,
by Regis Frey" %}{: .float--right }

The Model–view–controller (MVC) way of doing things was hard for me to pick up at first.  I hadn't spent much time working with object-oriented programming or data modeling before.  Initially, I couldn't wrap my head around the distinction between a model, a view, and a controller.

The way I began to understand MVC philosophy is that it's similar to website development in how it separates project components. Here's a list of loose correlations to demonstrate what I mean:  

    MVC               Site Development

    Model        =    Database
    View         =    HTML/CSS
    Controller   =    JavaScript

In website development you separate content from styles from functionality just as in MVC design, though the nomenclature is different.  

Some key lessons I learned from this project are:


- Developing a GUI (graphical user interface) from square one
- Separating model (data), view (graphical representations of the data), and controller (user input/interaction) functionality
- Xcode SDK development tools and workflow
- Working/managing Apple Signing Certificates and Provisioning Profiles
- App publishing through iTunes Connect

Frankly, this is the first piece of software I'd ever written and as necessity is the mother of invention, it was spurred on by me wanting to learn app development and use technology to improve my life. When I first thought of this project I got the idea from watching people interacting THROUGH their phones with each other. I was struck by how people used them to connect with each other instead of ignoring each other. That's the core idea behind Pocket Wingman. How could I leverage my phone to break the ice with people? All you have to do is pass someone your phone and it does the work for you.

Pocket Wingman uses games built around the device's features and capabilities:


- A drawing game captures a user's input
- The accelerometer prompts user interaction to move forward through views
- The touch screen is used to continue progress through a variety of gestures

For a free copy visit iTunes link here.  Try it out and tell me if you like it.  I appreciate feedback so if you see a place that needs work, have a suggestion, or an improvement I'd love to hear from you.
