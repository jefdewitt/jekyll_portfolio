---
layout: post
title:  "ngStorage"
image:
date:   2017-03-24 07:32:11 -0400
categories: Angular
---
As a front-end dev my need for data storage was never a chief concern. Not that it isn't important, but I usually didn't have to get my hands dirty with managing databases. That was something for the back-end guys.

With my Angular JS app, [Tracker Keeper]('http://jefdewitt.com/trackerkeeper') that changed. I knew that using a database would be overkill, as my storage needs were minimal. So, I turned to local storage, or data stored in the browser.

## ngStorage

[ngStorage](https://github.com/gsklee/ngStorage) is an Angular JS module for using local storage the Angular Way. Its method for saving data is remarkably straight forward. No getting and setting, no parsing & serializing each time you store or retrieve.

## Install

```shell
npm install ngstorage
```

Then, I was prompted for a password and just like that, I was in. No muss no fuss.

Now, for the tricky part. Which file sets the wireless IP address, and more importantly, how do I set it?

## Setting A Wireless IP Address Via SSH

After more searches and more time than I care to own up to I found the file I was looking for, `/etc/network/interfaces`. Inside this file I found some short code blocks to edit FTW. To this file I added the block below (while commenting out some lines):

```shell
#iface wlan0 inet manual
#wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf

iface wlan0 inet static
address 192.168.2.28
netmask 255.255.248.0
network 192.168.2.1
gateway 192.168.2.1
wpa-passphrase <network password>
wpa-ssid <network name>
```

Here, you can view key components. Of which, the `address` was the only piece of information I created. The last two digits are just a number between 1 and 255, indicating an open local IP address on my network. It goes without saying that it must be a unique number -- you can't choose digits that are already in use by another device.

The rest of the info came from my router dashboard, which we read about accessing earlier. Just like that I'm now able to log in remotely via:

```shell
$ ssh pi@192.168.2.28
```

While this isn't a necessary step in RPi development, it certainly increases convenience. Plus, it makes use of RPi 3s built-in hardware. And considering I've done all the legwork here, I wholeheartedly support making this a part of your RPi workflow too.
