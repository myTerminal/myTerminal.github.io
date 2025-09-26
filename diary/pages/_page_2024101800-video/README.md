# This 17-Year-Old ThinkPad Continues to (Re)Shape My Setup

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/SV6V1ucCLF8/hq720.jpg](https://i.ytimg.com/vi/SV6V1ucCLF8/hq720.jpg)](https://youtu.be/SV6V1ucCLF8)

## Intro

Apart from a few broken ones, the [ThinkPad X61s](https://support.lenovo.com/gt/en/solutions/pd012148) remains the oldest and the weakest ThinkPad in my fleet, and yet it is my most favorite. Since the time I adopted it, it has pushed me to change several elements in my computing workflow, and it continues to do so.

## Xorg to Wayland

I heard about [Wayland](https://wayland.freedesktop.org) first back in 2013 but always stayed with the convention, which was [Xorg](https://www.x.org/wiki), as that was the ecosystem I was comfortable with. Then when I first switched out of a full-fledged distribution like [Fedora](https://getfedora.org) to a do-it-yourself distribution like [Arch](https://archlinux.org), with all the new things I learned and explored, that was my chance to give it a shot. But thanks to [Nvidia](https://www.nvidia.com), I could never step out of Xorg.

I could have switched to Wayland on my non-Nvidia machines, but my preference to configure all machines identically limited me to Xorg. Besides, the software packages in the parallel world of Wayland weren’t exactly coinciding with that of Xorg either, so scripting two different kinds of configs was something I wasn’t prepared for.

But then I picked up an X61s, which being as slow as it was, I was prepared to take extreme steps to get as much performance out of it as I could. Now, except for the web browser, which you can barely do anything about, the rest of my tools have been pretty basic and lightweight. I use [i3wm](https://i3wm.org) as the [window manager](https://en.wikipedia.org/wiki/Window_manager) in place of a [desktop environment](https://en.wikipedia.org/wiki/Desktop_environment), and I do not even use a [display manager](https://en.wikipedia.org/wiki/X_display_manager) but instead have my machine start on the [TTY](https://en.wikipedia.org/wiki/Tty_(Unix)). But then just out of curiosity, and with all the reading about how Wayland is supposed to be efficient with its relatively newer codebase, I finally took the leap.

Fast forward to today, my setup looks very different, such that it supports Xorg and Wayland both, and also has a few parallel software packages for either. Thankfully, it’s been running great for a year or more, with [swaywm](https://swaywm.org) running on most machines and i3wm on the ones with Nvidia GPUs. Long story short, the X61s pushed me to defeat my mental block and explore the world of Wayland.

## Lightweight Alternatives

Much of the modern software that we use today is pretty heavy on resources, and this is more noticeable on older hardware, especially on machines with lesser number of CPU cores.

One such software tool that I had to replace along with the switch from Xorg to Wayland was my [terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator). When you do not have a resource crunch, you do not mind using GPU acceleration within your terminal emulator, and that was exactly my case as I never encountered any significant performance issue with any of my machines. But then, as a part of the initiative to find lightweight terminal emulators, I switched from [Kitty](https://sw.kovidgoyal.net/kitty) to [rxvt-unicode](https://rxvt.sourceforge.net) for Xorg and [foot](https://codeberg.org/dnkl/foot) for Wayland. I did miss a couple of things here and there in the start, but then when I had it all configured the way I wanted, my setup worked great for me.

## Bottleneck with Modern Web-Browsers

Whether it be [Chrome](https://www.google.com/chrome), or [Firefox](https://www.mozilla.org/en-US/firefox), or any other modern web browser, all of these tools are pretty resource-hungry. Running a resource monitor, the software that shows up on the top of the list when sorted from highest to lowest in terms of CPU and memory usage is often the web browser. There are [lighter alternatives](https://github.com/OtterBrowser/otter-browser), but either they're still a derivative of [Chromium](https://www.chromium.org/Home) or Firefox, or otherwise not as usable as the mainstream browsers.

I find running Chromium instead of Firefox on these weak machines way easier, and that’s exactly what I do now on the X61s.

## Settling Time

No matter how many upgrades you make on a machine that’s 17 years old, there’s always going to be that one bottleneck that you can’t do anything about. The X61s cannot utilize the read-write speed of even an old [SATA-III](https://en.wikipedia.org/wiki/SATA#SATA_revision_3.0_(6_Gbit/s,_600_MB/s,_Serial_ATA-600)) solid-state drive, nor can it possibly use all the 8GBs of [DDR2 RAM](https://en.wikipedia.org/wiki/DDR2_SDRAM) I’ve put on it. The [1.6 GHz Core 2 Duo processor](https://ark.intel.com/content/www/us/en/ark/products/29757/intel-core-2-duo-processor-l7500-4m-cache-1-60-ghz-800-mhz-fsb.html) causes the machine to struggle for the lightest of tasks that modern machines do not even break a sweat for.

But then, there’s something I call the settling time, after which the required programs are in memory, there isn’t a lot going on in the CPU either, that is when the machine feels to start getting usable. It does hit the saturation every now and then, but this state is the state I found to be the most usable for a machine like this.

## Conclusion

These machines from the past are almost two decades old, and while there’s still a lot of charm in them, using them for your daily tasks needs some effort. Some of it comes in terms of the programs you run on those, and the rest is all about setting the right expectations in order to enjoy these beauties in the best way you can. These were built for a different time, and one needs to learn how to appreciate them for how they can still be of service today in whatever limited capacity they can be.
