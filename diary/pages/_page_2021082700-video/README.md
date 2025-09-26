# I'm Entering the Void (after Arch and Debian)

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/meqEsTj12cY/hq720.jpg](https://i.ytimg.com/vi/meqEsTj12cY/hq720.jpg)](https://youtu.be/meqEsTj12cY)

So it's finally time and I'm entering [the Void now](https://voidlinux.org), but as usual, I have a lot of things to talk about, so welcome back, grab a cup of coffee (or whatever you like) and let's talk.

## A quick recap

Before we start, the following is a super-quick rundown of all that happened to my computers in the last few months:

- I parted with my [MacBook Pro](https://support.apple.com/kb/SP747?locale=en_US) after four years
- Switched to a [Lenovo ThinkPad X1 Extreme](https://www.lenovo.com/us/en/p/20tk001fus)
- Created a setup with [Arch Linux](https://archlinux.org)
- Had issues with [Nvidia](https://www.nvidia.com) and decided to look for another distro that just works ((NOOB!!!))
- Switched from Arch to [Debian](https://www.debian.org)
- Had no issues so got a little bored
- Decided to switch from Debian too in the hope to find [something interesting](https://www.reddit.com/r/linuxmasterrace/comments/ngahkg/linux_periodic_table)
- And then, there's this...

## Concerns while leaving Debian

About leaving Debian, frankly, I don't have any concerns about it except encountering [similar issues as I had on Arch](https://www.youtube.com/watch?v=Vjue3qFEFrg) as I'll be leaving the reliability that Debian promises, and also not being able to find the [software packages](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/debian/install-packages) that I need in my setup.

## Why Void?

And now comes the most important question: Why did I choose Void? I don't have a lot of reasons except:

- It is sort of similar to Arch Linux, which is a good thing in my opinion. Am I back with the cool kids yet?
- Though being a [Rolling release distro](https://itsfoss.com/rolling-release), all that I've heard about it till this point makes it a middle-ground between Debian and Arch, which means newer packages, but not very old versions in the way I've been getting used to lately.
- It's a fresh new approach towards Linux, without relying on a derivative of Arch, Debian or other popular distros.
- It's an enthusiast focused Linux distribution that also brings in quite a lot of new things to learn.
- There were a few comments on my video about leaving Arch Linux pointing me to Void. I used to think of it as an Arch-based distro just like [Artix](https://artixlinux.org), but looking closely, I learned that it's different.

## Void packages and the package manager

As I mentioned in [the last video](https://www.youtube.com/watch?v=Kj4Y-62HW4s): stability, packages, and the package manager, so even from that perspective,

- The [package manager](https://docs.voidlinux.org/xbps/index.html) looks very promising, I've been playing with it since a few weeks now and I liked it.
- The [collection of packages](https://voidlinux.org/packages) on the main repos in itself is huge, especially for an independent distro that has to do it all by itself instead of pointing to a base distro.
- [`xbps-src`](https://github.com/void-linux/void-packages/blob/master/xbps-src) sort of fills in for the [AUR](https://aur.archlinux.org), but as per my research, almost all of the packages that I depend on are already available on the main repos, so it might be a little while before I really dive into it.

## Early impressions with Void

Though I haven't used Void as a daily driver yet, I do have a great impression of it till this point.

- [runit](http://smarden.org/runit) looks interesting, with neat concepts around maintaining services through symlinks, which opens up a lot of possibilities.
- I can once again use newer packages, though not the latest versions, which I think is necessary, given the kind of a *noob* I've been with Arch for not being able to repair broken stuff at least to the level it's expected from a regular Linux user (sarcasm).
- All in all, if this thing works, and I manage to utilize [all hardware features on my ThinkPad](https://wiki.archlinux.org/title/Lenovo_ThinkPad_X1_Extreme) including speakers, microphone, camera, touchscreen, trackpad, leaving behind just the fingerprint sensor that has always been left out, and if I had a stable system that didn't break often, this might as well be my dream distro, if it's not too much to expect from a desktop Linux distro, that is.

## My High-level plan for the migration

Most of the things for the migration have already been figured out, and much of it is already done. Back when I started with this activity, a high-level plan looked something like this:

1. Add [a parallel pipeline](https://github.com/myTerminal/dotfiles/tree/master/.setup/linux/void) in my dotfiles such that Void joins the other three platforms that current reside there
2. Create [alternate scripts](https://github.com/myTerminal/dotfiles/blob/master/.scripts/linux/mt-power-mode) for runit, for the ones that have been very specific to systemd all the way long
3. Implement [setup scripts](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/void/run) for Void including package installation and the rest
4. Create [a detailed set of steps to install Void using `chroot`](https://gist.github.com/myTerminal/82de59c83b2057868260d7185013e6d1) as a public Gist on GitHub, which is something I've maintained as a practice since my Arch days
5. Test it all out on virtual machines and fix the issues that I find
6. Install Void on my [Dell Precision desktop](https://www.ebay.com/itm/382071287250) as a secondary system while not performing any breaking changes to my setup
7. Run a lot of tests and fix any hardware-specific issues that I might see
8. Switch to Void as the primary system on the desktop, making Debian as the secondary distro, which might eventually leave the machine altogether one day.
9. Install Void on my ThinkPad X1 Extreme, which will need the fingers crossed all during the process as I'd really love this to not fail
10. Run a lot of tests and fix more hardware-specific issues for the ThinkPad
11. Perform [device-specific hardware tweaks](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/void/other/excelsior) that I've had on Arch and Debian before
12. Finally switch to Void as the primary system even on my daily-driver and celebrate

As I said, most of it has already been figured out and even tested on virtual machines, so the immediate next step is to install Void on my Precision desktop, which is something I've been waiting for since several weeks, but I couldn't get to as I wanted to get everything else out of the way so that I can focus on this with peace. Besides, there's no hurry this time like it was back when I literally broken it all, so I might as well take all the time I can get.

## Up next

So you'd ask, what's next? I might make a video on [installing a minimal Void system using the `chroot` method](https://docs.voidlinux.org/installation/guides/chroot.html), keep an eye out for issues and then eventually add another video to my series ["Back to Linux"](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO) to close it all.
