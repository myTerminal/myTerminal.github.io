# The X301 Was Indeed a ThinkPad Air!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/3ozempHUYVQ/hq720.jpg](https://i.ytimg.com/vi/3ozempHUYVQ/hq720.jpg)](https://youtu.be/3ozempHUYVQ)

## Intro

I had been ignoring the [ThinkPad X300](https://www.notebookcheck.net/Review-Lenovo-Thinkpad-X300-Notebook.9852.0.html) and [X301](https://www.thinkwiki.org/wiki/Category:X301) all this while as I could never justify investing in the platform. This was partly because I had already experienced [neighboring generations](https://www.youtube.com/watch?v=3ozempHUYVQ) and thought I had covered it all. But with an X301 joining my fleet now, the [X61s](https://www.thinkwiki.org/wiki/Category:X61s) isn’t my slowest computer anymore, and there are a lot of exciting details to talk about, so let’s jump right into it!

## Time for a Story…

Let me start with a story. I learned about the ThinkPad X300 from the [YouTube series "Project Kodachi" by Laptop Retrospective](https://www.youtube.com/playlist?list=PLbMBru829z4sAzeYpz10PZYu67D1hiKHX). I’ve been keeping away from this platform as I thought it was close to the [X200](https://www.thinkwiki.org/wiki/Category:X200)/[X201](https://www.thinkwiki.org/wiki/Category:X201) and wasn’t the most usable ThinkPad today. But then my decision to finally pick one seemed to align with the poll I hosted recently, and after a few days, when the machine arrived in the mail, to say that I was shocked would be an understatement.

## Early Impressions and Initial State

With all that I had been reading on the web, I had a rough idea of what to expect here. It was supposed to be slimmer, lighter, and more premium than the other [X-series](https://www.lenovo.com/us/en/c/laptops/thinkpad/thinkpadx) notebooks or sub-notebooks I had experienced before. However, even after learning all the facts about the machine, I was still blown away at first sight and touch.

The first thing I noticed as soon as I unpacked the package was how much this thing resembled the [X1 Carbon](https://www.theverge.com/2012/8/13/3232132/lenovo-thinkpad-x1-carbon-review). This model was very important for Lenovo for several reasons. I recommend watching the Project Kodachi series by Laptop Retrospective to learn more about this. If you like this kind of stuff, which you definitely do given you’re watching this video, you’ll have a good time watching that YouTube series, and quite possibly even end up loving this machine. Experiencing it all firsthand made even more sense on how most of the things we love about the X1 Carbons had to start somewhere, and this was just that.

A few small to significant peculiarities include a soft-touch coating, different (arguably better) port locations, clear glyph icons near the ports, and an off-center [ThinkLight](https://en.wikipedia.org/wiki/ThinkLight). These appeared to make the ThinkPad X301 familiar and yet different from the other members of the X-series family. There was a clear focus to make the design as clean as possible and hence even the elements like the Lenovo logo and the display hinges are black instead of silver. On the other hand, I later found that the screws, which are usually black on ThinkPads, were silver! I find it funny how even the "Energy Star" sticker has been hidden underneath the battery. The screen is slightly larger, and the WXGA+ (1440×900) resolution makes the visuals slightly sharper as well.

There are two speakers, top-firing, a few status indicators are at the back, rather than being at the front of the lid and being visible all the time, which again shows the attempts to keep the design clean yet functional.

The keyboard, though it appears to be similar to the other classic keyboards we’ve seen on this channel, is different not only in visuals but also in the feel of the buttons when they are pressed. The volume buttons are different, in fact, this entire section is different including the blackend status indicators that are only visible when lit up, and the ThinkVantage button glows as well! I’ve never had this kind of TrackPoint before, and I’m not sure if I like it more than the design I’m used to, but it does seem to work fine.

The placement of the ports has been kept pretty clean as well. There are only two USB-A ports and a set of audio input and output jacks on the left. On the right, the only usable thing is the super-slim optical drive. The rest of the ports have been moved at the back, which includes the charging port, and the two options for connecting external displays including a DisplayPort (which I’ve come to learn wasn’t available on the X300), ethernet, and WiFi toggle slider, along with the third USB-A port.

If you’ve watched [my review of the X201](https://www.youtube.com/watch?v=uq8R9Iy7tbs), I may have to change my words here. This machine is clearly more premium, the design is way more elegant, and I’ll talk about the cover latch in detail soon. Oh, and the notebook also has a disc drive included, which is thinner than what we’ve seen in other ThinkPads with optical drives.

The condition of this particular unit was pretty good, not only for its age but even when compared to most other used machines I’ve handled. There were these minor scratches on the top cover, but which used ThinkPad doesn’t have these?

There was no storage drive, but the unit was already equipped with 4GBs of RAM. As a bonus, the seller also included a 65W charger in the package, which is something I’m not used to seeing that often with these classic ThinkPads, especially with those sold "for parts".

Finally, when the internals heat up, the machine smells better than many other ThinkPads I’ve had from similar years.

## Restoration

Given the condition of the machine, I thought there wouldn’t be much to restore, however, it ended up being effortful.

- I started working in a different order than I usually do this, so the first thing I wanted to take care of was the hardware whitelist so that I could upgrade the components while I opened it up for cleaning and a thermal repaste. But for that, I wanted to have a storage drive in the machine, and also an appropriate amount of RAM.
- The storage situation was unique as well among all the other ThinkPads I’ve worked on. The SATA drive-bay doesn’t accept the standard 2.1" drive, but instead allows only a 1.8" drive that I learned is called a micro-SATA. And these drives are expensive! Thankfully I found this one for relatively cheap and that too with 512GBs of capacity. As the drive rails are sort of integrated into the chassis, I created this custom pull tab before I slid the drive into the bay.
- As this machine accepts DDR3 RAM, and I had some lying around with me, I replaced the two 2GB modules with a pair of 4GB modules making it 8GBs in total. This may be the first time I have used modules from different brands on a computer.
- The X300 has a build available for [Middleton’s BIOS](https://www.thinkwiki.org/wiki/Middleton's_BIOS), while the X301 doesn’t. So I found a couple of builds here at [McDonnellTech](https://x301.mcdonnelltech.com/) that took care of the hardware whitelisting. I modded the BIOS the way we usually do using 32-bit Windows 7.
- Then I performed the obligatory deep clean and CPU thermal repaste. The entire process felt the most difficult as compared to any ThinkPad I’ve done this on before. There were more screws (which thankfully not even one of them refused to come off), more ribbon cables to unplug and plug, and everything felt more complex than I’m used to. This was also my first ThinkPad where I had to remove the screen during this process. There were also several noteworthy things I found inside, most of which I could not record as I was overwhelmed with the complexity of the process and prioritized getting it done right over recording my experience. However, I did capture this weird heatsink mechanism for how the screws go on the opposite side of the board than the CPU, and how this WiFi module could remain on the board even till the last point.
- As the hardware whitelist was already taken care of, I replaced the Bluetooth module from the stock one supporting Bluetooth 2.1 to one that supports Bluetooth 4.0 while assembling the machine back. Strangely, this module was on a ribbon cable that plugged into the board. I replaced the WiFi module with my standard Intel Centrino Ultimate-N 6300 with the help of this extension bracket and this was indeed my final step in the entire restoration.
- I planned on removing the Turbo Memory, similar to how I did with the X61, as I read a specific mention of this in order to improve the system performance, but there wasn’t one installed.
- I could not find replacement batteries for this model, so all I’m left with is the stock battery that came with the unit which is running at 46.6% capacity.
- I finally added the machine to my fleet with [Void Linux](https://voidlinux.org/).

## More Mods and Upgrades Possible

I learned that there are [a lot of mods and upgrades](https://alemauri.eu/x301/hardware.html) possible for this machine like replacing the trackpad and more, but I did not investigate further as I had already upgraded what I wanted.

## Trouble Booting into Void Installer

So installing Void Linux wasn’t straightforward either. To start with, the machine refused to boot into the Void Linux installer, and upon investigation, I learned that people facing [similar issues on their ThinkPads from similar years](https://www.reddit.com/r/voidlinux/comments/ijo8da/trouble_booting_a_live_iso_on_thinkpad_x200) have managed to do it with [Ventoy](https://www.ventoy.net/en/index.html). I had tried Ventoy earlier, and for some reason never got it to work. This time though, it did work, and I could finally boot the machine into Void, after which, the process was pretty standard. Look how the machine smiled after it was all done!

## A Quick Comparison with the X201

This machine seems to share many of the design elements with the X200 and X201. I wonder which models took inspiration from which ones. Speaking of the X201, the Fan error did show up eventually, and I plan to take care of that when I get time. Thankfully I have the required parts, and it’s all about spending a couple of hours to get everything apart, replace the fan with the one I have, perform a thermal repaste, and put everything back together. I’m in no hurry.

## Some Resemblance to the T420s

When looking at the ports behind this machine, it's hard for me to not get reminded of [my favorite port layout on the T420s](https://www.notebookcheck.net/Review-Lenovo-ThinkPad-T420s-4174-PEG-Notebook.66967.0.html). These ports that are behind the machine are a little harder to access, but I for some reason like it that way.

## Clear Resemblance to X1 Family

Finally, this design doesn’t feel short of reminding you of one of the best and most versatile series we have today, which is [the X1 series](https://en.wikipedia.org/wiki/ThinkPad_X1_series). The soft-touch chassis, blackened trim pieces, slim design, and overall premium look and feel clearly shout as a direct predecessor of the X1 Carbon. The most interesting thing is that this device was produced between the X200 and X201, so apparently they held onto their learning from this model and introduced the first-ever X1 three years later in 2011.

## Conclusion

So, who would believe one could have some of their best computing experiences with their slowest/weakest machine? Nonetheless, there will most likely be some shuffling in my fleet, and this X301 is definitely a keeper. Looking at the X301, the X201 suddenly starts to feel redundant. I mean I know the latter is much more capable in terms of computing power, but if I were to choose one between the two, I’d go with the X301.
