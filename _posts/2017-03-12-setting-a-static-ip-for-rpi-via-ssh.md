---
layout: post
title:  "Setting A Static WIFI IP For RPi Via SSH"
image:
date:   2017-03-12 10:32:11 -0400
categories: jekyll update
---
I'm a total RPi noob, so I bought a [complete starter kit](https://www.amazon.com/gp/product/B01IYC0LT0/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1){:target="_blank"} of the RPi 3 to get myself up and running. The RPi 3 comes WIFI enabled out-of-the-box. Since I don't have an extra monitor or wireless keyboard and mouse I had to find another way to access my RPi.

I found some instructions online for using SSH to talk to my RPi by connecting the built-in ethernet port to my router. My plan was to set the wireless IP address this way.

## First Things First

{% include image.html url="/images/raspberry-pi-3.jpg" description="A Raspberry Pi 3" %}{: .float--right }

First things first, I needed to find the ethernet IP address of my RPi. I did this by going to my router's dashboard. A single Google search with my router's brand info led me to an IP address. I entered this into my browser and, lo and behold, I arrived at my dashboard.


Once here, I found the DHCP Client List, a list of devices connected to my WIFI, from a tab on the main page. This list shows IP addresses and Host Names, the latter of which reveals what device it is. With this info I typed a single command into Terminal:


```shell
$ ssh pi@192.168.2.29
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
