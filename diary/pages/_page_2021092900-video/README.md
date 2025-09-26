# Back to Linux - Ep 07: Not again, Nvidia!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/tXQ5YsPy6J0/hq720.jpg](https://i.ytimg.com/vi/tXQ5YsPy6J0/hq720.jpg)](https://youtu.be/tXQ5YsPy6J0)

This video is a part of my series **Back to Linux** in which I covered my transition from my Apple MacBook Pro to a [ThinkPad](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0) a few months back. Though this video isn't really about a transition, as I'm still looking for that "perfect" setup, I consider this video to be a part of the series.

Previously we've seen that I was about to enter the Void, so let's continue from there.

## Note

If you haven't watched [the previous videos in the series](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO) yet, you might feel a little lost in this one. I would highly recommend watching at least a couple of previous videos to get in sync with the state of [the machine](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0) we'll be talking about for the rest of this video.

## Updates till now

As I've mentioned in [my previous videos](https://www.youtube.com/watch?v=Kj4Y-62HW4s), I'm moving slowly with [the migration from Debian to Void](https://www.youtube.com/watch?v=meqEsTj12cY), taking one step at a time. I've moved my secondary computer, my [Dell Precision desktop](https://www.ebay.com/itm/382071287250) to Void and it's working great. What I've been worried about since the start is how my ThinkPad will behave with Void.

I had planned a systematic, step-by-step migration for the ThinkPad, exactly the way I did for [Debian](https://www.debian.org). In fact, I executed almost all the steps, learned a lot more things this time, one of those things being [runit](http://smarden.org/runit), which is awesome by the way.

## Two unexpected issues

The two unexpected places where I spent time fixing things were the audio and the touchpad.

The sound didn't work after installing the [`sof-firmware`](https://www.sofproject.org) unlike how I believed it would go, but instead, I had to create a `.asoundrc` file for [`alsa`](https://alsa-project.org/wiki/Main_Page) to finally get it to work.

For the touchpad, I've already had a configuration that worked through [xinput](https://www.x.org/wiki/XInputSpec) to configure [libinput](https://www.freedesktop.org/wiki/Software/libinput) for the touchpad, but this time around, because [Synaptics](https://www.synaptics.com/products/touchpad-family) was also present with the meta-package for [Xorg](https://www.x.org), it was taking precedence. After hours of trying and also seeking [help from Reddit](https://www.reddit.com/r/voidlinux/comments/ppmp84/can_synaptics_driver_be_blacklisted), I learned that I could either install [`xorg-minimal`](https://github.com/void-linux/void-packages/blob/master/srcpkgs/xorg-minimal/template) (which doesn't come with Synaptics by default) or have both Synaptics and libinput installed along with `xorg` and force X to use libinput. I learned that one can create a config file overriding all other configurations, which is exactly what I did and my touchpad now worked exactly as it did with [Arch](https://archlinux.org) and Debian.

## But Nvidia...

So that should've taken care of everything, right? Sadly, it didn't, and I got stuck with the same thing as I did for Arch. Xorg worked great with the open-source driver [`nouveau`](https://nouveau.freedesktop.org), which is pretty unusable for my use-case, but as soon as I installed [the closed-source proprietary driver](https://github.com/void-linux/void-packages/blob/master/srcpkgs/nvidia/template), it kept crashing with no way to recover the session, even through the other TTYs.

[Xorg configuration](https://www.x.org/wiki/UserDocumentation) being as complicated as it is, I even tried to create a configuration file for my machine by referring to several examples online and none of them worked, not that I expected it to. The best result I could get is the same and familiar ["no screens found"](https://www.reddit.com/r/linuxquestions/comments/mx57gm/ran_paru_syu_and_now_starting_xorg_only_shows_a) error, which is at least something you can recover from instead of being left with a stuck session needing a hard-reset using the hardware power key.

## Wayland could have been an option

As a result of my desperation to get this thing to work, I even started looking at [Wayland](https://wayland.freedesktop.org) once again after years. I learned that there is [plenty of help](https://www.fosskers.ca/en/blog/wayland) to find alternatives for Xorg-based graphical environments that you can run on Wayland.

[`sway`](https://swaywm.org) being the closest alternative for my [`i3wm`](https://i3wm.org), I spent some time with it and found it to be snappy as advertised and the response times were noticeably low, not to say that i3wm has ever been slow for me. In fact, the instant it started (and picked up i3wm configs automatically), it confused me to think that what I had on screen was i3wm, which couldn't have been true, but then I realized that I had read this about sway that it can also work with i3wm configs.

I liked the fact that I didn't need a [`startx`](https://linux.die.net/man/1/startx), and I could launch a graphical session just by typing `sway`. But even with all this ease and luxury, I had the following major issues:

- [Steam](https://store.steampowered.com), which is the standard test I run while testing the graphical capabilities of a Linux setup, didn't launch at all.
- Scaling on my high-resolution 4K screen was awful. I know that I could fix it eventually, but it didn't work by default, proving that support for HiDPI isn't great for Wayland compositors either, the way it hasn't been great for Xorg.
- There were many things on the screen that couldn't be clicked. Some of them were the menus in the [Thunar](https://docs.xfce.org/xfce/thunar/start) file manager.
- I also noticed a few glitches while using the touchscreen and dragging things around. I usually almost never use the touchscreen on my machine, and I had opted for it as it was the only option coming with a 4K HDR screen, but regardless, knowing that there would be issues here as well I lost my remaining hope with Wayland.

With this, I concluded that it wasn't the time for me to jump into Wayland yet, so I kept this thing aside for the time being.

## Up next

I spent way more money on this machine than I had originally planned for, so I guess I'll have to be living with Nvidia and its issues for at least a decade.

And, if Xorg won't work with [Nvidia](https://www.nvidia.com) and even Wayland isn't an option, it feels that I may not be able to use Void on my ThinkPad X1 Extreme for the very same reason I couldn't use Arch. I wish I could combine the "just works" feature from Debian with the "newness" that comes with Void.

Speaking of combining two Linux distros, the only thing that comes to my mind is [Bedrock Linux](https://bedrocklinux.org) as that is exactly what it offers. So next up, I'll evaluate Bedrock Linux and play with a few combinations of Linux distros, mostly with one of them being Debian (or [Devuan](https://www.devuan.org)) for those packages that need to be older including core graphical packages, and probably [Void](https://voidlinux.org) for everything else?

Stay tuned for updates, and I hope to get back with a positive result from my research.
