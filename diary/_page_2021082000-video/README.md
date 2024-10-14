# Linux is Full of Opinions - Part 2: More Choices

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/cgWlsI1F4wE/hq720.jpg](https://i.ytimg.com/vi/cgWlsI1F4wE/hq720.jpg)](https://youtu.be/cgWlsI1F4wE)

In the last video, we talked about a few choices newer Linux users come across and often have to make while using Linux. This video is a continuation of the list such that we'll talk about a few more choices that one may come across after getting some experience with Linux.

## A note, just like the last time

Just to remind you as I did in the last video, I don't mean to say that a particular choice is wrong, but we're just listing it along with the other alternatives we have. Also, as always, please be gentle in the comments. :smiley:

## How these choices are sorted

These choices are sorted the same way as the ones in the last video, which means, starting from the relatively basic choices and slowly climbing towards advanced.

## More Choices

Alright, let's start with the list.

### 1. Xorg or Wayland

If I'm not mistaken, and unless things have changed since the last time I read about it, [Xorg](https://x.org/wiki) is the [most popular windowing system on Linux](https://wiki.archlinux.org/title/Xorg), with support from comparatively more graphical environments. However, there's a parallel universe for Wayland where we have quite a lot of [desktop environments that work on Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)#Wayland_compositors) or have exclusive support for [Wayland](https://wayland.freedesktop.org).

Xorg has been there for a long time and hence promises stability and extensibility. While Wayland eliminates some of the design flaws of Xorg, one being that the absence of [GUI level isolation](https://bsdnerds.org/gui-isolation-in-linux), it might not be perfect just yet, or maybe it is, you can correct me in the comments.

What you might want to run is totally up to you.

### 2. GTK or QT

If you're looking for a graphics framework, you could [either choose GTK or go with QT](https://unix.stackexchange.com/q/129355). But that would be if you're a developer intending to create a graphical user interface for your application. Many Linux applications are also available [in two different variants, one with GTK and the other with QT](https://archlinux.org/packages/?sort=&q=transmission&maintainer=&flagged=). The two obviously intend to solve the same problem and appear a little different visually. [Which one you choose](https://stackoverflow.com/questions/1887070/what-should-i-choose-gtk-or-qt) often depends on the programming language you're planning to work with, and the environment your application will be running in.

### 3. GRUB or alternatives

When talking about a [bootloader](https://en.wikipedia.org/wiki/Bootloader) (or a boot manager), most of us don't look past the tried and tested [GRUB](https://www.gnu.org/software/grub). However, there are a lot of [modern alternatives to GRUB](https://alternativeto.net/software/grub) that promise speed, achieve very similar results with lesser configuration, and are easier to use in general. While [trying to install Debian recently](https://www.youtube.com/watch?v=unhRffAGE7w) in a very particular way, I had issues getting GRUB to generate boot configs and I spent quite a lot of time looking for alternatives, that is where I came across many. There is [BURG](https://burg.en.uptodown.com/windows), [rEFInd](https://www.rodsbooks.com/refind), [GummyBoot](https://wiki.archlinux.org/title/Systemd-boot), and more.

### 4. BTRFS or EXT4

[EXT4](https://en.wikipedia.org/wiki/Ext4) is one of the most popular drive formats used in Linux, or at least I'd want to believe that way given how much I've [used it in the past](https://gist.github.com/myTerminal/cdeb61cbc7f4b4e4a5cf6a60ab7021a2) for all my Linux computers, and also for external storage drives. As it goes without saying, there are many other alternatives like [BTRFS](https://en.wikipedia.org/wiki/Btrfs) for example, which has been gaining popularity recently, though has been there for a while. It also made it to be the default drive format with the [recent versions of Fedora](https://fedoramagazine.org/btrfs-coming-to-fedora-33).

BTRFS does offer a lot more features, which in fact was my reason to switch from EXT4 as well. However, [experts over the internet](https://www.partitionwizard.com/partitionmanager/btrfs-vs-ext4.html) say that if you need a little more reliability, and don't care about the features BTRFS has to offer, you may go with EXT4. This obviously doesn't mean that BTRFS isn't stable, but that's just a relative statement.

### 5. UEFI or BOIS (and hence GPT or MBR)

If you've ever configured your system by yourself, you must have had to take a decision of whether to choose [UEFI](https://uefi.org) or [BIOS](https://www.lifewire.com/bios-basic-input-output-system-2625820) while installing an operating system. If you haven't, in simple words, these are two firmware interfaces to choose from, where UEFI is the modern one and BIOS is the outgoing one. It's often suggested to choose UEFI instead of BIOS on newer systems and only use the latter for systems that are pretty old, though newer systems also have BIOS support for backward compatibility. I've also seen that you can't do [MBR](https://en.wikipedia.org/wiki/Master_boot_record) (DOS) partition tables with UEFI or [GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table) with BIOS, so the choice is also dictated by your drive partition scheme and vice-versa.

### 6. SystemD or OpenRC or RunIt or S6

Before I stepped into [Arch](https://archlinux.org), I didn't know something like an [init system](https://fedoramagazine.org/what-is-an-init-system) even existed, but when I did, I came across [Artix](https://artixlinux.org), that as advertised, ships with [three different init systems](https://artixlinux.org/download.php), instead of [systemd](https://systemd.io), which is the only one Arch comes with. An init system is the entity that takes control after boot to initialize and de-initialize services, or at least that's how one would sum it up in easy words.

I'm not very well-versed with init systems yet, but as far as I've read over the web, one of the major reasons for people to look for alternatives besides systemd is that it doesn't follow the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) of doing just one thing and doing it well. Instead, over the years it has grown into a huge system that tries to do many things that it's not even supposed to be concerned with.

The newer alternatives namely [OpenRC](https://wiki.gentoo.org/wiki/OpenRC), [RunIt](http://smarden.org/runit), [S6](https://skarnet.org/software/s6), etc. promise simplicity, performance, and closeness to UNIX philosophy while also bringing new and innovative ways to manage services and create your own custom services if at all time comes.

### 7. Glibc or Musl

This is one of those topics I know the least about. As per what I have learned till now, [Glibc](https://www.gnu.org/software/libc) (or GNU C library) is GNU's implementation of standard C library. It's the more popular one and is the one our popular Linux distros ship with. [Musl](https://musl.libc.org) is an alternate implementation that comes with an MIT license, promises a far more readable code, and probably performance too, though it's arguable. I've never dealt with either of these personally, except for while configuring my Linux where at times I find steps that are specific to either of the two.

### 8. More

As I said, these aren't the only choices one can make, and there are many more like: 

- [OpenSSL or LibreSSL](https://www.openbsd.org/papers/libtls-fsec-2015/mgp00002.html)
- [OwnCloud or NextCloud](https://www.reddit.com/r/selfhosted/comments/hmsjj5/owncloud_vs_nextcloud)
- [GPL or LGPL](https://www.difference.wiki/gpl-vs-lgpl)

...and more.

But I guess we should leave something for the next video too, right?

## Conclusion

One thing to note is that these choices not only give us the freedom to choose what we run on our computer, unlike those other operating platforms that tend to impose a lot of things that we don't really need, but also provide a channel for us to connect with our fellow members of the community and learn about their perspective on the same problem someone else or even we ourselves might have solved. In short, it doesn't create differences among us but instead brings us together as a single community.

## Up next

The list isn't conclusive and I might definitely come across more opinions and choices as I continue to learn more about Linux every day. Once I have enough items to talk about, I might plan another video in continuation to this one in the future.

## Outro

That's all that I have for this video, and if you found it helpful, you know what to do. Just be a little kind in the comments. As always, a subscribe will be helpful too. Thanks for watching it till the end, may the maker watch over you, see you in the next video!

