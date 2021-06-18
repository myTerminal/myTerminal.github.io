# Living in the command line - Ep 02: Software Setup

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/Bh-337F3jvs/hq720.jpg](https://i.ytimg.com/vi/Bh-337F3jvs/hq720.jpg)](https://youtu.be/Bh-337F3jvs)

This video is a part of the series **Living in the command line** which is based on an alternate mode of computing that not many of us are used to but is arguably faster, more productive, and fun too. If you haven't watched the previous video, I'd recommend you watching it first, but if you have, let's continue from where we left in the last video.

## Recap

In the previous video, we talked about what it is like to work in a command-terminal, at least at a high-level, and also talked about a few pros and cons of doing so. In this video, we'll have a look at a few different ways one can achieve a setup to be able to play with the tools we're about to see in the upcoming videos.

## A quick note

Before we move forward, I'd like to get this out of the way that there are multiple ways you can experience these tools in [Windows](https://www.microsoft.com/en-us/windows) either through the [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) or the good-old alternatives like [Cygwin](https://www.cygwin.com) or otherwise. However, for obvious reasons, we won't be talking about Windows in this series. Also, as Linux is [UNIX-like](https://en.wikipedia.org/wiki/Unix-like), almost everything that we talk about in this series will apply to UNIX, but for this series, we'll keep it only to [Linux](https://www.linux.org).

Also, this topic can be massive, and I realize limiting our area of exploration to only a single family of operating systems (not saying that it's a small one) will hopefully help us limit the entire thing down to a reasonable scope.

## The most obvious setup

One of the most obvious setups for working over the command line is to have a bare-minimum operating system installation with no graphical packages.

If you're an [Ubuntu](https://ubuntu.com) person, there's [Ubuntu server](https://ubuntu.com/download/server) that can be used for what we're trying to do here. A minimal [Debian](https://www.debian.org) installation can also get you something very similar if that's what you'd rather go with. I've never succeeded in installing Debian myself, but I'm sure [Debian live](https://www.debian.org/CD/live) should be reasonably simpler to install for a normal person.

[Fedora](https://getfedora.org) is one of the best options too and [Fedora server](https://getfedora.org/en/server) would be the one you'll install for a command-line based setup.

If you're an [Arch](https://archlinux.org) enthusiast, you can either install a basic Arch setup or take the smarter route through Arch-based distros like [Arco](https://www.arcolinux.info), which will eventually get you almost the same thing but with way less effort. There's also an edition or two for [Manjaro](https://manjaro.org/download) that should feel almost the same.

These are the more popular options, at least to the general audience but given the huge number of Linux distros out there, you have so many options to choose from but I just don't want to list down all Linux distros in this video, else the video will be hours long. Also, some distros will make you learn quite a lot of commands right during the installation itself and will get you very comfortable working in the command line even before you start using it.

## A cheaper setup

If you think you're not such a purist and won't be able to live without at least some graphical elements on your screen, you can go with a setup with a light-weight window manager, probably a [tiling window manager](https://en.wikipedia.org/wiki/Tiling_window_manager) such that you have the best of both worlds. You can simulate the experience of the command line when you want and also switch to a graphical application in a jiffy.

You might as well use one of those [heavier desktop environments](https://kde.org), but to me, that just makes things a little too graphics-focused to be able to get a feel of the command line.

## The cheapest alternative

Just in case you don't even want to touch your Linux setup to be able to play with these tools, you can also use your current Linux installation and go total command line by switching to one of those several [TTY terminals](https://en.wikipedia.org/wiki/Computer_terminal#Hard-copy_terminals) that are already running on your system.

If you don't know what I'm talking about, there are these multiple TTY terminals in Linux, that are like virtual terminals that can host totally separate login sessions and one can switch between them as and when required. In most systems, at least the ones that I've used, you can switch to a TTY using the keys "Ctrl+Alt+F1" through "Ctrl+Alt+F6" for TTY1 through TTY6 respectively. Depending on the setup you have, your Linux distro may be running the graphical session that you use regularly in one of these TTY's, leaving a few unused, or rather, ready to use.

Switching to an unused TTY can provide you with a hop-in-hop-out pure text-based experience, such that you can play around with these tools with virtually no change to your primary Linux setup.

## Just in case

Finally, you can also install a fresh system on a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) and keep that machine separate from your daily-driver.

For most people, this is the best option if you ask me.

## Up next

So coming up next, we'll start with a set of tools that we use in our day-to-day computing and that video will hopefully be more interesting and less of a theory lesson, so stay tuned, as the action is just around the corner.

## Outro

That's all that I have for this video, so let me know if you liked it through either the Like/Unlike buttons or through your thoughts, feedback, and ideas in the comments. You can also choose to subscribe to show me your support and encourage me to make more of such videos. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
