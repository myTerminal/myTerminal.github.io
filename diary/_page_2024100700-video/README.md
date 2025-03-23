# I Finally Unlocked My X230 (for More Upgrades)

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/d6KOCVaNsw0/hq720.jpg](https://i.ytimg.com/vi/d6KOCVaNsw0/hq720.jpg)](https://youtu.be/d6KOCVaNsw0)

## Intro

With the wireless card upgrade in my [X61s](https://support.lenovo.com/us/en/solutions/pd012148-detailed-specifications-thinkpad-x61-x61s), I got lured into the idea of doing that with my [X230](https://www.notebookcheck.net/Lenovo-ThinkPad-X230-2306-2AU-Laptop-Review.75317.0.html) as well. Besides this was also one of those machines that struggled with maintaining a stable WiFi connection from one corner of the house to the other, not so much because of the distance, but more so due to the number of obstacles in between the machine and the router. Before I sort out the situation with my WiFi, I thought I might as well upgrade the module in my X230. However, there was a major block here, which thankfully got taken care of, and that’s exactly what we’ll talk about in this video.

## Hitting the Wall

While waiting for the [Intel Centrino Ultimate-N 6300](https://www.thinkwiki.org/wiki/Intel_Centrino_Ultimate-N_6300) for my X61s, I ordered two more out of frustration as it took an eternity to arrive. Meanwhile, I had destroyed the wireless card on my X61s, and it was pretty unusable, given the location of my modem to which I would’ve needed to be tethered to, to get access to the internet on that machine.

Having a couple of spare wireless modules, I simply replaced the one on my X230. Given that this machine was at least five years newer than the X61s, I assumed it would work right out of the box, which it didn’t. As soon as I tried to boot the machine, it made loud beeps with an error about an incorrect module being plugged in, and immediately shut itself down.

So there’s a whitelist in this device, which I wasn’t surprised with, but this experiment proved that the Intel Centrino Ultimate-N 6300 wasn’t on the list.

## Unlocking the BIOS

There’s no [Middleton BIOS mod](https://www.thinkwiki.org/wiki/Middleton's_BIOS) for the X230, but I did find people on the web talking about [Coreboot](https://coreboot.org) and [1vyrain](https://1vyra.in). I chose 1vyrain, it being the simpler of the two, and promising what I was specifically looking for here, which is removing the hardware whitelist.

I found the exploit pretty simple to perform, with one small problem: it needs a certain BIOS version that’s exploitable with the exploit, and that was lower than the one I had on my machine.

## Downgrading the BIOS

Usually, Lenovo places validations such that it won’t let you install a BIOS version lower than one already installed on the machine. So, downgrading the BIOS to version 2.60 couldn’t be done the regular way. It isn’t impossible though, and I found out that one could do it in at least three ways:

1. Using Windows with a few commands, to explicitly flash the specified old BIOS image.
2. Using Linux, [making changes to the BIOS image file](https://github.com/gch1p/thinkpad-bios-software-flashing-guide?tab=readme-ov-file#downgrading-bios), and playing around with scripts to achieve a similar effect as the first option.
3. Using [IVprep](https://github.com/n4ru/ivprep), as it promises to achieve the required downgrade for your machine with the help of a pre-written script.

The last option requires Windows, but as I had several spare storage drives lying around, I used one for a temporary Windows 7 setup and chose to go that route, and thankfully it helped me through the downgrade process like a breeze.

## Running 1vyrain Exploit

Once you have the correct BIOS version for the exploit, the rest of the process is pretty simple. You just need to download the image file, create a bootable drive, boot the machine into the custom Debian system, and follow the prompts. You just have to make sure the machine is connected to the charger. I’m sure I’m short-selling the process and the tool here, but it’s already well documented, and also covered in plenty of other tutorials on the internet.

Once the process was complete, booting into the BIOS gave me access to a lot of "advanced" options, proving that the machine was applied with 1vyrain.

There’s one problem though, that as soon as you restart after flashing the new BIOS, you do not only lose your date and time, but also the ability to set it back. As it goes without saying, I also lost my EFI variables and had to fix it using a bootable VOID USB Disk. This wasn’t a planned step in the process, but at least I knew what needed to be done to fix this. For the issue with date and time though, I think it might have fixed itself as soon as I booted into the Void Linux installer.

## Replacing the Module

Once it was all taken care of, upgrading the wireless module was just as simple as removing the old one and placing the new one in, just as I did back when I encountered the whitelist, only this time, it worked.

## Conclusion

So using 1vyrain, I’m now running a slightly better wireless card that the system was never designed to work with. For the rest of the “advanced” features that come with 1vyrain, I’ll probably explore them when time permits. Who knows this might just be the start of a series of upgrades for the X230. Only time will tell.
