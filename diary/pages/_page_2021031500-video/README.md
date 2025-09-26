# Living in the command line - Ep 01: Introduction

> This article is a transcript of a video you can watch by clicking the thumbnail below. Needless to say, certain statements may not make sense at all, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/d9KHG9_K19A/hq720.jpg](https://i.ytimg.com/vi/d9KHG9_K19A/hq720.jpg)](https://youtu.be/d9KHG9_K19A)

This video is the first one from the series **Living in the command line** which is based on an alternate mode of computing that not many of us are used to but is arguably faster, more productive, and fun too.

## My inspiration behind this series

Since the time I switched from [the mainstream computing setup](https://en.wikipedia.org/wiki/GEM_(desktop_environment)) (where almost everything is mouse-driven) to [a tiling window manager](https://i3wm.org) (where keyboard shortcuts are given focus), I've been getting closer and closer to the command line. If you're not aware of what a tiling window manager is, you can read about it [here on Wikipedia](https://en.wikipedia.org/wiki/Tiling_window_manager). So while working with a tiling window manager, I started to see the benefits of using the keyboard where more fingers can work at the same time, as opposed to moving the mouse around, aiming for the right control on the screen to be able to interact with it. It goes without saying that there are a few tasks that do need a pointing device, be it a [mouse](https://en.wikipedia.org/wiki/Computer_mouse) or a [touchpad](https://en.wikipedia.org/wiki/Touchpad) or even [that red pointing device](https://www.lenovo.com/us/en/trackpoint) we have in a few mobile computers like the [ThinkPads](https://www.lenovo.com/us/en/thinkpad), but otherwise, at least as far as my experience goes, the keyboard is a lot faster, and convenient too.

Since my recent switch from [macOS](https://www.apple.com/macos) back to [Linux](https://www.linux.org), I've started shifting my setup towards command line alternatives to the applications that I've always had in my workflow. This is where this idea came up that rather than keep using the CLI applications I use daily, how about I explore the other areas of computing and find out what else (or rather what all) one can do from within the terminal in 2021.

## A few existing references

When I started researching for this series, I came across several other tutorials on the web in different forms like written posts, videos, etc. One such old example I came across is [this one on medium](https://medium.com/building-ibotta/living-in-the-command-line-tips-n-tricks-723b3b359e3f). The article mostly talks about the nerdy stuff one can do over the command line, but I plan to talk about more tasks, including the things our non-nerdy friends do on a computer.

## What you don't need

When working with a command line interface, there's nothing additional that you need to add to your setup, in fact, there are a few things that you might not need at all, the things that you otherwise would've had to set up or install.

### A command terminal or a terminal emulator

You don't need a [terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator), which goes without saying as all that you have in front of you is a terminal. If you're not used to this minimalistic interface, it's very easy to underestimate the power of the command line, but if you are, this text-based geeky terminal can outweigh a typical graphical interface with the kind of efficiency it can present to you.

### A display manager

The other software that you don't need is the [display manager](https://en.wikipedia.org/wiki/X_display_manager), which is the graphical login screen that is presented to you before you log in to a computer. For ready-to-use operating-systems like macOS and Windows, this is actually a part of the operating system itself, but as in Linux everything is modular such that you can mix and match your components as per your choice or even write your own, the display manager is an optional but very commonly used software.

When working with a terminal, you may not need a login screen as you can very well log in from the terminal itself. You still may need it, if you're simulating a command line interface while being inside a graphical interface. If that doesn't make sense yet, it soon will and I'll talk about it more in the next video.

### Graphics drivers

[Graphics drivers](https://www.nvidia.com/Download/index.aspx?lang=en-us), which are an essential part of graphical computing are pretty much redundant when working inside a terminal. Though the means of installing graphics drivers on Linux has improved significantly over the years, I still think it's arguably easier in Windows. Not to mention the numerous times my [Xorg server](https://www.x.org/wiki) has been rendered completely broken with an Nvidia update, or even the Linux kernel update. A significant contributor to this issue may be the fact that I use a rolling release Linux distro like [Arch](https://archlinux.org) and run my updates often, but anyway, the point is you don't have to deal with such issues if all you're interested in is mere text on a terminal, well, mostly.

### Windowing system

Speaking of my Xorg server, you don't need a [windowing system](https://en.wikipedia.org/wiki/Windowing_system) altogether. This means no [Xorg](https://www.x.org/wiki), neither [Wayland](https://wayland.freedesktop.org), nor any other such software. It's just your keyboard, you and the computer.

## Advantages

This obscure mode of computing has several advantages as well.

1. You don't need to move your hands away from the keyboard and that automatically means increased productivity. As you're not moving your hands around, you can spend all that time typing and effectively can do more.
2. Given how less processing is required to present the output of a command or operation to the user, the command line is usually faster. The absence of graphics makes a huge difference in the speed of the machine itself.
3. Along with the boosted productivity of the computer and also the operator, throughput can be further improved by automating tasks, which is way easier through commands. Your frequently used commands can be scripted and run even more effortlessly, either manually or through an automated process like a [cronjob](https://en.wikipedia.org/wiki/Cron).

## Disadvantages

Everything that has advantages also has some or the other disadvantage.

1. You might still need to move away from the terminal for things that you absolutely need graphics for.
2. For some tasks, even if they can be performed over the command line, (and I hate to say this) they are just better done through a graphical interface, at least for the normies.

I don't have examples for you here, but we can talk about this in detail in future videos.

## Up next

As per the plan, in the upcoming videos, we'll go through a few areas of computing, one area at a time where we'll not go very deep into details about the tools that we'll discuss, but at least talk about the options we have to be able to perform a particular task through the command line. But before that, the next video will talk about a few options for the kind of setup we can use to experience or practice the tools featured in the following videos.
