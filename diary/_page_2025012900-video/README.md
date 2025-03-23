# Dell XPS M1710: Software Setup

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/C0iiew6xekE/hq720.jpg](https://i.ytimg.com/vi/C0iiew6xekE/hq720.jpg)](https://youtu.be/C0iiew6xekE)

## Intro

Previously, we covered a few aspects of the Dell XPS M1710, which included my impressions, the restoration process, and working with the lights through the BIOS. In this video, I plan to take you through the software setup with more than one operating system. 

## My Expectations for the XPS M1710

I presumed that the software setup for this machine would be very similar to the XPS M1210, and a quick test with a live Linux USB drive proved that I was correct. The WiFi card wasn’t recognized here either, and neither was the Bluetooth. But before we get an operating system, let’s talk about the lights!

## Working with Lights

I learned that the owners of this machine used [Dell QuickSet](https://www.dell.com/support/home/en-us/drivers/driversdetails?driverid=cdj0k) for Windows, as that was the answer on most [web forum pages](https://www.dell.com/community/en/conversations/laptops-general-locked-topics/accent-lights-how-do-you-change-them/647e74daf4ccf8a8def47bad) I could find. For Linux though, I could only find [one usable tool](https://xpsledchanger.sourceforge.net) which seemed to have been abandoned by the author, and the last few builds available on SourceForge were 10 years old. I came across [this project from the “Recommendations”](https://sourceforge.net/projects/dellxpsled), and it seemed to be even older.

My idea of a perfect setup for this machine was one that would let me work with all the available hardware and more so these lights. So depending on the operating system used, there were going to be different levels of difficulty involved, and here was my understanding:

1. [Windows](https://www.microsoft.com/en-us/windows) was the natural choice, especially as I received all the original discs.
2. For [Linux](https://www.linux.org), an [Ubuntu](https://ubuntu.com/desktop)-based or [Debian](https://www.debian.org)-based distribution would have been the second best given the tools I found mentioned on those web forums.
3. A setup with an obscure Linux distribution like [Void](https://voidlinux.org) could be the highest difficulty, at least for me. I’m sure things would be a little easier with [Arch](https://archlinux.org), with their pool of packages from AUR, but with a little bit of over-simplification, I’d say that I do not use [Arch BTW](https://www.reddit.com/search/?q=Arch+BTW). I’d rather turn to Debian or Ubuntu-based systems. I did not imagine I’d ever say that!

## Skipping Void Linux

With my experience running Void on the Dell XPS M1210, I got reminded of how WiFi drivers could be an issue, as this machine is from the exact same generation, so I knew what to expect here. As none of my ThinkPads (including the [X61](https://www.thinkwiki.org/wiki/Category:X61)) ever had issues with WiFi drivers, I have very limited experience installing WiFi drivers on these devices, so I dropped the idea of trying out Void Linux on this machine.

## Setup with Xubuntu

I went with a lighter Ubuntu-based distribution for this Core 2 Duo, the [Xubuntu](https://xubuntu.org). I sat next to my internet modem, used a spare 128GB SSD I had lying around, and went ahead with the super simple installation. Unfortunately, the wireless card wasn’t identified even after the installation. Given how I planned to install Windows later anyway, instead of getting into the rabbit hole to find a distribution that supported wireless, I chose a creative approach to solve this problem: I used a longer ethernet cable.

So now that I had a Linux distribution to work with, it was time to perform the experiments. Given how old the GPU is, finding proprietary Nvidia drivers for it is nearly impossible, so the open-source drivers were the way to go here. That left me with the two software packages for the lights.

I started with “DellXPSLED” and it refused to install. I thought it was about permissions, which I tried to fix, but that didn’t change anything either. So I moved on to the other option, which was the “XPS LED Changer”, and that gave me this error about missing dependency, and I knew it was the sign to just stop trying to get it to work. I have had bad experiences with trying to fulfill these dependency chains, and in my case, it often led me to a brick wall that I could not get past. So what I had with me was an almost two-decade-old computer, running a modern Linux distribution, trying to use a package from another time. There was no way this was going to work, and I wasn’t feeling motivated enough to try Ubuntu 4, 5, or 6, so I just gave up.

## Setup with Windows

Finally, to do things the “right” way with Windows, I dedicated the 256GB SSD I had purchased for this machine. I inserted the Windows XP disc and booted into the Windows setup.

I encountered a major problem though, which was this blue screen. I tried several things including changing a few settings in the BIOS, using a different SSD, and even switching out to the old HDD (just in case), but nothing seemed to work. I mean what’s the use of all those discs if I would not be able to install Windows on this machine anyway?

## Trying Zorin OS Again, With Patience

So Xubuntu didn’t let me use WiFi, and Windows wouldn’t install, so I installed [Zorin OS](https://zorin.com/os) again, but unlike how it did on the M1210, it did not let me use WiFi even after the installation. At this point, I was running out of options, and feeling lost, until that big reveal…

## Retrying with a Different WiFi Card

I wondered if simply replacing the WiFi card would help. Upon investigation, I learned that the limitation around what hardware would work on this machine was not about the hardware whitelist as we’ve seen in ThinkPads, but only around what would fit in the slot.

I went creative and tried the only full-size spare WiFi card I had lying around, the one I removed from the [ThinkPad X301](https://www.thinkwiki.org/wiki/Category:X301), and it worked right out of the box! Remember when I said, “none of my ThinkPads ever had issues with WiFi drivers”? The answer was with me right there all along, but I was just worried about the hardware whitelist. A reason why there was no mention of such a whitelist could be that there was no whitelist!

## That’s a Lot of Learning!

I’m all up for learning, and as a matter of fact, the most value I get working these old machines is through the lessons learned while bringing these to fully working order. With my adventure around running WiFi with Linux, following were the lessons:

1. Some notebooks do not have a hardware whitelist, so instead of losing hope, there would be other ways to solve the problem instead of trying to fight with software.
2. I could have upgraded the WiFi module on the XPS M1210 as well, where my fear of the hardware whitelist was the reason that stopped me.
3. When we say ThinkPads go well with Linux, part of the reason is also because they are equipped with hardware with better support outside of Windows.

So now if I come across any such computer, I have one more means to get the job done quicker and with less trouble.

## Conclusion

I’ll keep looking for a way to install Windows on this machine. Till then, I have Zorin OS. For the lights, I can always reboot into BIOS and make the changes as I feel like. It’s not the most convenient, but I can improve on that once I could run Windows.

The WiFi card I installed is significantly better than the original but isn’t the best one that would work on this machine, so that’s another thing I can potentially work on getting, along with a better Bluetooth card as well, because if you realize, I never talked about Bluetooth. I can also run a similar experiment with the XPS M1210 by trying it with a different WiFi card to check if that machine has a hardware whitelist in place, at least before I find a new home for it.

## Coming Up

With the software setup out of the way, all that’s left is a comparison with my other similar and popular notebooks. We’ll do just that in the next video.
