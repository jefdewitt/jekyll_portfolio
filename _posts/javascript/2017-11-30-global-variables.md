---
layout: post
title:  "Global Variables"
image: globe.jpg
date: 2017-11-30 09:32:11 -0400
categories: JavaScript
---
Well, it's been a long time. I've been working hard on some big projects at the office and over the summer I bought my first house. Time flies when you're overwhelmed.

Speaking of overwhelm, I'm consistently amazed at the overwheming amount of knowledge I lack when it comes to programming. I am literally ALWAYS learning loads of stuff every single day. So much so, that every few months I can look back and wonder how I ever got to where I am today without knowing what seems so fundamental now.

Take global variables for example. I used to get incredibly confused on scoping variables in JavaScript. I wondered what the big issue was about declaring a var outside a function. Mind you, almost all my JS work till 2017 had been on personal projects and smaller scale enterprise sites and apps.

Then it's no wonder, really, that I experienced little headache over gloval vars. And most likely, when I did run into trouble I likely misdiagnosed the problem or solved it successfully by accident. 

## The Window Object

The Window is the most global of globals. In your browser, the Window is the outermost container for page. [Here's](https://developer.mozilla.org/en-US/docs/Web/API/Window){:target="_blank"} the Mozilla docs on that.

    The Window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

There is one caveat -- an IFrame. IFrame's can make this a bit more confusing. They are contained in their own window so a single page can contain windows inside windows. But this is certainly the exception and not the rule. 

The Window object has a ton of properties that contain information on the current page you're viewing. To check them out, open your dev tools (in Chrome) and select the Sources tab. From there, click on the arrow next to Watch, the top level subsection in the right column (or lower right column depending on your viewing dimensions). Hit the + sign and type 'window' into the field. Click on the arrow next to it to reveal all of the object properties.

## Global Variables

A super simple way to declare a global variable is to add a variable to your JS file or script tag outside of any functions. If you're using jQuery make sure it's outside of the ready event handler. Declaring vars inside functions scope them to that function.

To check if your global var is set, be sure to initialize it with a value, save the file, refresh your browser, and open your console. Type 

```bash
    $ window.<var_name> 
```

into your console and the value should be returned. 

That's right, global vars are window object properites. So, if you're not sure about the global scoping of a var just use this method.

Okay, now back to home maintenance...
