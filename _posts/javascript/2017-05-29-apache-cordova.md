---
layout: post
title:  "Apache Cordova"
image: apache-helicopter.jpg
date: 2017-05-29 09:32:11 -0400
categories: JavaScript
---
Want to make mobile apps? Don't want to learn, Java, Objective-C, or Swift? Don't worry, I got you. [Apache Cordova](http://cordova.apache.org){:target="_blank"} (formerly PhoneGap) is all you need to build your mobile apps using only HTML, CSS, and JavaScript. You read that right, you can use web technologies to not only create mobile apps but also target multiple platforms -- iOS, Android, and Windows.

{% include image.html url="/images/cordova-logo.png" description="" %}{: .float--right }

## How Does It Work?

Cordova is basically a wrapper -- it acts as a container for running a web application as native mobile software. Usually web apps can't use native device functionality like the camera or accelerometer. Cordova takes care of this by packaging the web app in the format of a native mobile application.

Plus, it's not difficult to use at all. Thanks to the Apache folks the Cordova command-line tool is available as an npm package.

```bash
$ sudo npm install -g cordova
```

Create a cordova project in your project directory root:

```bash
$ cordova create hello com.example.hello HelloWorld
```

The first argument is the name of the cordova project folder, followed by the reverse URL project name that's customary with mobile projects. The third and last argument is the name of the app.

Next, cd into the project directory and add the platforms you want.

```bash
$ cd hello
$ cordova platform add ios
```

Finally, building/compiling project files is a breeze.

```bash
$ cordova build ios
```

And if you want to see your work in a device emulator:

```bash
$ cordova emulate ios
```

## The WWW Directory

For all intents and purposes, all your work will happen inside the `www` directory. This is the place where you'll find your `index.html` file, as well as your `css`, `img`, and `js` directories. All the work you do here gets compiled out to the various platforms of your project on a build.

And that really is that. With four commands in Terminal you've a got a fully functioning mobile application without ever having to touch Xcode or Android Studio.

Click [here](http://cordova.apache.org){:target="_blank"} for the full documentaion.
