---
layout: project-template
title:  "Instagram REST API"
tech:   "JavaScript"
image:  instagram.jpg
link:
youtubeId:
date:   2017-06-18 17:08:11 -0400
---
The term `REST API` has always intimidated me. If you've read any of my blog rants on the subject, technology documentation has a way of taking concepts and ramping up the difficulty level by orders of magnitude; simple examples are often overlooked in favor of showing off the writer's more advanced knowledge.

Don't sweat it. I'm gonna break it down to an easy level even *I* can understand. I *Keep It Simple, Stupid*.

In a nutshell, a `REST API` is just a way to get data, in the form of a JSON or XML object, via a URL. The technical definition goes like this:

REST

: Representational state transfer (REST) or RESTful web services is a way of providing interoperability between computer systems on the Internet.


Credit to the Wikipedia article [here](https://en.wikipedia.org/wiki/Representational_state_transfer){:target="_blank"}.

## APIs Are No Big Whoop

I've been using APIs for most of my development career. But in the beginning I was only tasked with formatting and styling data without really knowing where the data was coming from or why I should care to know. This left me feeling out of the loop.

Although at the bigger organizations I've worked with API calls are generally handled by backend devs, I think it's still important for us front-end guys to know how they work. Here's a simple project for demonstration.

## The Instagram API

Instagram has an easy-to-use API you can find [here](https://www.instagram.com/developer/){:target="_blank"}. I've used it to grab some photos from my account and share them below.

The first thing is to set up a developer account with Instagram. The only hiccup I faced was with the `access token` needed for the API call, so I ended up relying on a third party site to generate my token for me. I used [Pixel Union](http://instagram.pixelunion.net/){:target="_blank"} and literally just clicked one button to generate a token that I then copied and pasted into my script.

Here's what the entire API code looks like...

```javascript
var token = '<generated-token-code-goes-here>',
num_photos = 12;

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + 'self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        for( x in data.data ){
            $('ul.api-container').append('<li><a href="'+data.data[x].images.standard_resolution.url+'" target="_blank"><img src="'+data.data[x].images.low_resolution.url+'"></a></li>');
        }
    },
    error: function(data){
        console.log(data); // send the error notifications to console
    }
});
```

...and here is what it does.

{% include instagram-api.html %}

## What Is Actually Happening?

As you can see, the `ajax` call is where the magic happens.

 - The `url` is where we're getting data from.
 - The `jsonp` data type is just a padded type of JSON data that allows you to avoid CORS issues.
 - The `type` is the `http` method we're using to retrieve data.
 - The `data` object provides our key to establish authorization then the number of pics we want to receive.

Lastly, the success property uses a callback function to loop through the returned data where we build out some `html` for display.

As you can see, there's really only a few parts to getting data from an API. The `url` is the door and an access token or license is the `key` to that door. Although there are many different types of APIs out there they all use the same basic structure.
