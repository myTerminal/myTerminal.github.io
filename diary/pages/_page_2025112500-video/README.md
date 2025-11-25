# I Tried Running Linux on the Toughbook CF-20, feat. A Massive Revelation!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/WyKHPhGXcvo/hq720.jpg](https://i.ytimg.com/vi/WyKHPhGXcvo/hq720.jpg)](https://youtu.be/WyKHPhGXcvo)

## Recap

With the [Panasonic Toughbook CF-20](https://ruggedbooks.com/products/toughbook-20-mk1-16gb-512gb-4g-0-hours) all restored and ready, my next step was to test how it ran Linux. As I became overwhelmed by the process of CPU thermal repaste, watching [this video](https://www.youtube.com/watch?v=PJ2ngqDP5Ug), I thought I’d skip directly to installing Linux, which is exactly what we’ll do in this video.

## Neat Trick I Didn’t Know About

Before we try Linux on this thing, here is something I didn’t know and thought I would share. Through some [pictures on Notebookcheck.net](https://www.notebookcheck.net/Panasonic-Toughbook-CF-20.168959.0.html), I learned that the connection on the keyboard base is reversible. So while you can have the system appear more like a conventional notebook, you can also turn it into something like this, with the screen being visible while closed. This variant doesn’t have an integrated kickstand, but effectively, you still have a way to use the keyboard base as a stand.

## Hardware Preparation

I learned that the Windows license was embedded in the UEFI firmware, so I could, in theory, perform whatever experiments I wanted during my ownership, and wipe it all clean with a fresh installation of Windows 10/11 before putting it up for sale. Just to keep everything up-to-date, I updated the BIOS before I left Windows 11, just to save some time.

## Expected Challenges

Now, these machines are known to have great Linux support, similar to ThinkPads. However, this device is far from your regular notebook. For starters, the screen is too small, and the DPI of this 1080p display on a 10” screen is quite similar to the 4K display on the 15” screen of the [ThinkPad X1 Extreme Gen 3](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-extreme-gen-3/22tp2x1x1e3/?orgRef=https%253A%252F%252Fsearch.brave.com%252F), which wasn’t easy to work with, at least during my first few months with the machine. And, then there’s a detachable keyboard base, and this stylus that I didn’t see working in the Windows 11 setup it came with, with the touchscreen only working as a regular capacitive touchscreen. And, as you may have noticed, the screen brightness adjustment isn’t working on this machine, even in Windows 11. It’s either very low, with some PWM, or otherwise very bright. I can only imagine how it will behave with Linux.

## First Attempt Booting into Linux

I disabled Secure Boot from the UEFI firmware, used a boot override to force it to boot into the USB drive, and went over to install [Void Linux](https://voidlinux.org), nuking the Windows installation. I learned that there is no boot menu on this device, and the only way to boot into another media was by forcing it to boot into one from the BIOS. I started with my distribution of reference, Void Linux, because if I got it to work on this machine, I could self-certify this machine for use with Linux. But that is where the issues started. My [XFCE](https://www.xfce.org) Live image wouldn’t boot, and halted erroring out with a kernel panic. I learned that this was due to the unusual ACPI tables on Panasonic Toughbooks, especially the CF-20 models.

I tried several other Linux distributions, and I got pretty much the same results, mostly explicitly stating a kernel panic.

## Successive Attempts To Boot into Linux

I learned that one could edit GRUB command line parameters and trick it into booting, which didn’t get me far either.

1. Adding `acpi=off` booted me into Void, but as the live user did not auto login, I had to do it manually, after which I could not start a graphical session.
2. Adding `acpi=off` with [Pop!_OS](https://pop.system76.com) worked with a couple of screen flashes, but I couldn’t shut the machine down from there.

Then, I did a few more experiments with Void, but

1. Adding `acpi=noirq intel_idle.max_cstate=1` did not work, and it only stayed at a black screen
2. Adding `acpi_osi='Windows 2013' acpi_backlight=vendor intel_idle.max_cstate=1` got it stuck during booting with no kernel panic message.
3. Adding only `acpi_osi=’Windows 2013’` didn’t work either

At this point, I could either keep fighting to get Linux to boot on this machine or proceed with finding out whether the stylus would work with Windows 10, unlike Windows 11, where these screens are known to have issues without explicit driver installs.

## Downgrading to Windows 10

I downgraded to Windows 10 with a fresh install, only to learn that the digitizer didn’t work there either. And then there was a revelation that was a hard one for me. Turns out this specific variant, CF-20A5108VM, was equipped with a capacitive touchscreen and not a digitizer layer. Remember when I mentioned how I went with a variant without a kickstand because I liked this design? I learned that this was by design. The models with a kickstand were equipped with both a capacitive touchscreen for use with fingers and a digitizer layer on the screen for use with the inbuilt stylus pen. The models without a kickstand weren’t meant to be used with a digitizer, and saved production costs by dropping the need for an in-built kickstand or the digitizer support. But then you would ask, what is this garaged stylus for. Wait for it, as it gets even weirder. I learned that, as Panasonic used the same chassis designs between the variants that did and did not support a stylus digitizer, this one right here is a dummy stylus and not a real one. It makes sense now why both Windows 10 and 11 reported only a touchscreen and nothing about a digitizer. So this machine has fooled me twice now, if you count the filler for the keyboard base battery.

Windows 10 seemed to work smoother on this machine, and even things like the screen brightness adjustment worked as expected, so I guess Windows 10 is the most suited operating system for this machine, and that gives me the answer to the question I asked in the last video. This machine cannot be my travel notebook.

## Where to Go From Here

So, I can’t run Linux on this machine, at least yet, and I definitely won’t want to run Windows 10 or 11 either. At this point, I could either hold on to this machine to run some more experiments and try getting Linux to run on it, or find a new home for it. With Linux, the most noteworthy quirks may be with the display scaling, touchscreen behavior, networking and wireless, audio, dual cameras, and maybe the orientation sensors. Maybe some other time.

## Comparisons

In terms of comparison, this is my smallest screen yet, even smaller than the [X61s](https://support.lenovo.com/us/en/solutions/pd012148-detailed-specifications-thinkpad-x61-x61s), but with the same footprint and a lot of weight and thickness.

If I were to compare the two,

1. On one side, we have this relatively modern Toughbook from 2015 with a smaller touchscreen with a much higher screen resolution, a keyboard without a TrackPoint, and much faster hardware
2. On the other side, we have the X61s from 2007 with a better keyboard with a TrackPoint, but with pretty slow hardware, and for the sake of it, let’s also couple it with the [Ultrabase X6](https://www.thinkwiki.org/wiki/ThinkPad_X6_UltraBase)

I think I still find the ThinkPad more usable. Maybe the indoctrination is beyond repair. Now that doesn’t mean this Toughbook isn’t a great machine to type on. I wish I could run my preferred Linux setup on it, carry it to work, and turn some heads with this integrated carry handle. The absence of the TrackPoint could be augmented with the touchscreen, and the absence of the battery, well, let’s just call it some weight saving.

## Conclusion

I understand that judging the entire Toughbook lineup by only experiencing this CF-20 would be like saying all ThinkPads are thick, heavy, and have a bad screen. I may try a newer Toughbook someday.
