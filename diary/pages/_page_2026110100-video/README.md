# I Finally Found a Linux Distro to Complement Void Linux (You Won't Believe Which One)

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/q73s1zomXI8/hq720.jpg](https://i.ytimg.com/vi/q73s1zomXI8/hq720.jpg)](https://youtu.be/q73s1zomXI8)

## Intro

If you've been following my channel, you know I'm stuck too deep into the [Void](https://voidlinux.org). If you've watched my recent videos, you know that I failed to adopt [Nobara Linux](https://nobaraproject.org) as my secondary Linux distribution of choice. After a few test, I finally found the perfect Linux distro for my use-case, and you won't believe which one.

## Why Look for a Secondary Setup?

So why was I Iooking for a secondary setup anyway? To start with, I wanted a setup simpler than my setup with Void Linux that would behave more like a traditional computing environment with no gaps at all.

A custom, handcrafted setup is awesome for productivity, but using a ready-made setup may teach you things you do not even know you can achieve. Look how after years of moving away from [macOS](https://www.apple.com/os/macos) as my daily driver, I still keep it around as a reference and comparison.

## Why Not Nobara?

For my experimental setup with Nobara Linux, I chose [GNOME](https://gitlab.gnome.org/GNOME/gnome-shell) shell for its fluid interface with touch gestures, etc. but I couldn't have believed that the limitation would be [`dnf`](https://github.com/rpm-software-management/dnf) itself that wouldn't let me install a hundred packages that I depend on, all at once without breaking the system in some way.

## Why Not Pop!\_OS?

[Pop!\_OS](https://system76.com/pop) is another great option that builds onto the "just-works" characteristic of [Ubuntu](https://ubuntu.com) and indirectly [Debian](https://debian.org), comes with its own optimized graphical environment: [Cosmic DE](https://system76.com/cosmic), and has the advantage of one of the largest software package collection among any Linux distribution family.

I could have gone with it, but I was looking for something a little lesser mainstream, something that would come with a package manager as optimized as [`xbps`](https://github.com/void-linux/xbps) in Void Linux. It still remains my choice for gaming with hybrid [Nvidia](https://www.nvidia.com) graphics on the [T15g Gen 2](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/thinkpad-t15g-gen-2-(15-inch-intel)/wmd00000484).

## Why Not CachyOS or Other Arch-Based Distro?

Speaking of an optimized package management system, there's always [Arch Linux](https://archlinux.org) and its hundreds of forks like [CachyOS](https://cachyos.org). I found these to be working great when they do, but are often too opinionated and end up failing on me somewhere or the other.

## What I Finally Went With?

So with all the major options out of the way, and with the obscure options like Solus not having all the software packages that I'd need in the repos, there was one Linux distribution that was independent, optimized, came as a complete package, and was often overlooked. I chose to go with [openSUSE](https://www.opensuse.org).

## Why I Chose openSUSE?

I realized openSUSE doesn't get the mention it deserves for what it is. It is well-tested, is available for more CPU architectures than distros like Arch, and comes with two choices for two different kinds of computing needs.

## Why I Chose openSUSE Tumbleweed?

Between the more stable Leap and the frequently updated Tumbleweed, I chose the latter as I wanted a more up-to-date experience and I could always make sure to not get into trouble by keeping my experiments out of openSUSE, limiting it to Void Linux only, until I got more comfortable with openSUSE.

## My Experience Setting up openSUSE Tumbleweed?

Setting up openSUSE wasn't very difficult either:
1. I simply grabbed a Live ISO for my CPU architecture, which is x64
2. There weren't too many graphical stack options to choose from, but still plenty to have me covered
3. There wasn't too much customization during the installation or the disk setup, though I managed to set it up how I prefer, leaving enough space at the end for more future experiments

So that is how whether you just want to install Linux on your machine without a lot of technical know-how, or you know exactly what you want, and how you want it, openSUSE works perfectly for both cases.

It didn't allow me to set the machine hostname, which is something I set post install. One of the impressive things was that I only needed [OPI](https://github.com/openSUSE/opi) (which is like a community source for additional packages that aren't available in the default repos), for two software packages, and everything else was available to install using [`zypper`](https://github.com/openSUSE/zypper) directly.

As a by-product, forge and crater are now familiar with openSUSE.

## A Few Differences

Speaking of `zypper`, the command syntax is easy to remember, it is fast, and the information if provides while making changes to your system is pretty verbose.

It may be due to placebo, but I found application launches on openSUSE to be a little faster than I saw on other major distros.

I also liked how [`snapper`](http://snapper.io) was configured to take snapshots every time I made changes to the system, so by the time I was done setting it up, I already had several snapshots in the list to choose from and go back to.

## Areas to Learn

So like I mentioned earlier how a different Linux setup has a lot to teach you about what else exists out there that is possible and lets you pick and choose additions and upgrades to your custom setup, I could spot several right within my initial few hours with openSUSE:

1. Firstly, it used [`systemd-boot`](https://www.freedesktop.org/software/systemd/man/latest/systemd-boot.html) that I've literally never played around with on my machines
2. I found that the subvolumes it created with [BTRFS](https://btrfs.readthedocs.io/en/latest) were much different than what I usually do
3. The [`swap`](https://phoenixnap.com/kb/swap-partition) that was suggested during the installation was much smaller than what works for me.
4. And finally, `snapper` still remains an unexplored piece of software that I'll get up-to-speed some day

## Conclusion

So overall, I found exactly what I was looking for, and I've had no issues at all using it on the [ThinkPad T14 Gen 1](https://www.notebookcheck.net/Lenovo-ThinkPad-T14-laptop-review-Comet-Lake-update-doesn-t-add-much.480979.0.html) interchangeably with Void Linux on my other machines. I hate to depend too much on just one thing, but that is something I've done with Void Linux lately. Thanks to hidden gems like openSUSE, I now have a backup, that I hope I'll never need.
