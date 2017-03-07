---
layout: project-template
title:  "Magic Mirror"
image:  magic-mirror-banner.jpg
link:
youtubeId: QgDcwEsEm1I
date:   2017-03-07 07:08:11 -0400
---
The story goes like this. [Michael Teeuw](http://michaelteeuw.nl/){:target="_blank"} was at the mall with his girlfriend when he saw a display mirror with illuminated lighting. He thought he could make a better one at home. The rest is internet history.

Here's what you need:

{% include image.html url="/images/one-way-mirror.jpg" description="One-way mirror" %}{: .float--right }

- A one-way mirror, like the kind cops use in interrogation scenes in movies. Mirror window tint over glass works just fine and is way more affordable.


- A flatscreen roughly the size of the glass.

- A Raspberry Pi

<!-- {% include image.html url="/images/my-raspberry-pi-3.jpg" description="A Raspberry Pi 3" %}{: .float--left } -->

Thats it! Hold on tight 'cause this is gonna go way faster and way easier than you probably think.

## The Hardware


For my Magic Mirror I wanted a frame that my LCD can sit inside of and can mount my mirror to. I removed the plastic case the LCD was in and used the leftover screws to attach it to the wooden frame. It's important to leave room for attaching the LCD power supply and USB cable from the Raspberry Pi.

{% include image.html url="/images/magic-mirror-without-mirror.jpg" description="A Magic Mirror without the mirror." %}{: .float--left }

Next, I peeled the glass tint away from its backing and applied it to a glass pane I got from an unused picture frame. I added soapy water to the glass beforehand. This allowed me to used a credit card to 'squeegee' out the air pockets.

My wooden frame was deep-set and had room left over for fitting the Raspberry Pi into place. This allowed me to keep the USB and power supply for the Pi tucked away neatly from view. This is also prevents several cables from protruding out of the mirror itself.

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

As you can see, `config.js` is used primarily to tie together all the separate modules, position them in their appropriate places on screen, and offer basic customization options. Additional customization requires finding specific module files but that's easy too. They're all conveniently located in a `modules` sub-directory.

Total time for development is 3-5 hours, depending on the size of the frame, glass, and display. The most time intensive portions were the physical ones -- the frame building and one-way mirror making. The programming was a cinch and I think this is a great project even for those just beginning to learn software engineering. You can see the finished product below.

## The MVP

{% include youtubePlayer.html id=page.youtubeId %}
