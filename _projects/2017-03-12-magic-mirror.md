---
layout: project-template
title:  "Magic Mirror"
image:  tracker-keeper.jpg
link:
date:   2017-03-12 12:08:11 -0400
---
The story goes like this: [Michael Teeuw](http://michaelteeuw.nl/){:target="_blank"} was at the mall with his girlfriend and saw a display mirror with illuminated lighting. He thought he could make a better one at home. The rest is internet history.

Here's what you need:

- A one-way mirror, like the kind cops use in interrogation scenes in movies. Mirror window tint over glass works just fine and is way more affordable.

- An flatscreen roughly the size of the glass.

- A Raspberry Pi

Thats it! Hold on tight 'cause this is gonna go way faster and way easier than you probably think.

## The Hardware

For my Magic Mirror I wanted a frame that my LCD can sit inside of and can mount my mirror to. I removed the plastic case the LCD was in and used the leftover screws to attach it to the wooden frame. It's important to leave for for attaching the LCD power supply and USB cable from the Raspberry Pi.

Next, I peeled the glass tint away from its backing and applied it to a glass pane I got from an unused picture frame. I added soapy water to the glass beforehand. This allowed me to used a credit card to 'squeegee' out the air pockets.

## The Software

My Raspberry Pi came with a Micro SD card that was formatted with the latest version of the Raspbian OS. All I had to do was get the Magic Mirror codebase from [Michael Teeuw's](https://github.com/MichMich/MagicMirror){:target="_blank"} GitHub repo.

Once I had that installed it was really a matter of learning a few Terminal commands for restarting the Raspberry Pi after config alterations...

```shell
$ sudo shutdown -r now
```

...and firing up the display on the LCD.

```shell
$ DISPLAY=:0 nohup npm start &
```
## Customization

In order to make the most of this project it helps to know `Node.js`. Or, at least, knowing your way around node modules. Modules represent each of the core display outputs. A main `config.js` file provides a central place to customize these modules.

Here's a portion of that `config.js` file:

```javascript
},
{
  module: "updatenotification",
  position: "top_bar"
},
{
  module: 'clock',
  position: 'top_left'
},
{
  module: 'calendar',
  header: 'US Holidays',
  position: 'top_left',
  config: {
    calendars: [
	  {
	    symbol: 'calendar ',
		url: 'webcal://www.calendarlabs.com/US-Holidays.ics'
	  }
	]
  }
},
```

Each module is listed in this file. As you can see, `config.js` is used primarily to tie together all the separate modules, position them in their appropriate places on screen, and offer basic customization options. Additional customization requires finding specific module files but that's easy too. They're all conveniently located in a `modules` sub-directory.

```shell
$ ls
    clock  currentweather  helloworld  
    calendar  compliments  newsfeed
```

Here's some images of the finished product.
