# Back to Linux - Ep 08: Void on the ThinkPad, at last!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/Yn0NTmMg5a8/hq720.jpg](https://i.ytimg.com/vi/Yn0NTmMg5a8/hq720.jpg)](https://youtu.be/Yn0NTmMg5a8)

This video is a part of my series **Back to Linux** in which I covered my transition from my Apple MacBook Pro to a [ThinkPad](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-extreme-gen-3/22tp2x1x1e3) a few months back.

If you haven't watched [the previous videos in the series](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO) yet, you might feel a little lost in this one. I would highly recommend watching at least a couple of previous videos to get in sync with the state of [the machine](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-extreme-gen-3/22tp2x1x1e3) we'll be talking about for the rest of this video.

So I've been running Void on my ThinkPad for a couple of weeks now, let me tell you how.

## A quick recap

My entire activity of [switching to Void](https://www.youtube.com/watch?v=meqEsTj12cY) was perfectly planned, except for the fact that I ended up with very similar issues with [Nvidia](https://www.nvidia.com) as [I did with Arch](https://www.youtube.com/watch?v=Vjue3qFEFrg). We'll talk more about it in a moment. As I've mentioned a few times before, I didn't really have to switch to a different Linux distribution as I finally had [a stable setup](https://www.youtube.com/watch?v=2vlGNDqYdb8) for the first time since I had this machine such that it didn't break at all.

Though I had already switch to Void on my [secondary computer](https://www.dell.com/en-us/work/shop/desktops-all-in-one-pcs/dell-precision-t3600-workstation/spd/precision-t3600), I lost all hope to be able to run it on [my ThinkPad](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-extreme-gen-3/22tp2x1x1e3), until this happened...

## The dream and my Reddit post

I was starting to think that my purchase decision had all gone wrong. I was originally looking for an [AMD machine](https://www.amd.com), but then when I came across [Lenovo ThinkPad P1](https://www.lenovo.com/us/en/outletus/laptops/thinkpad/thinkpad-p/ThinkPad-P1-Gen-3/p/22WS2P1P1N3) (and hence X1 Extreme), I had to go with Nvidia. Also, I spent about twice as much as I had originally planned and now that I was not able to run the software I wanted, it brought a lot of stress on my mind.

I woke up from a dream where I could run the [latest Linux kernel](https://www.kernel.org) with Nvidia, and I shared it as [a funny post on Reddit](https://www.reddit.com/r/linuxmasterrace/comments/q15cac/finally_got_nvidia470_to_work_with_the_latest). What I didn't know was that the dream was about to come true.

## And there comes Void

One of the comments on my Reddit post [talked about switching settings](https://www.reddit.com/r/linuxmasterrace/comments/q15cac/comment/hfd4ybw) between hybrid and dedicated graphics and that reminded me of that last thing I could do to get this to work. I rebooted the machine, went inside the firmware interface settings to change the setting from Hybrid to Discreet but found it to be on "Discreet" already, so I flipped it around to "Hybrid" and after a reboot, I immediately started seeing improvements in the way my currently installed [Debian](https://debian.org) instance behaved. One of the many improvements was that I could once again use [`xrandr`](https://x.org/releases/X11R7.5/doc/man/man1/xrandr.1.html) to change the screen resolution and also connect external monitors to my machine.

With this new hope, I gave [Void another try](https://www.youtube.com/watch?v=5EGrcUDdbRw), and not to my surprise, it worked!

## What about Bedrock?

If you would've seen [my last video](https://www.youtube.com/watch?v=tXQ5YsPy6J0), I was planning to step into [Bedrock Linux](https://bedrocklinux.org). Now that I have it all working with Void, I don't need to make that jump. However, I'll still keep it in my inventory and am planning to spend more time with it for a future setup.

## State of the current setup

I do have a couple of minor issues with my current Void setup, one of them is the [`gvfs`](https://wiki.gnome.org/Projects/gvfs) integration with [Thunar](https://wiki.archlinux.org/title/Thunar), which means that whatever I delete from the graphical file manager directly gets destroyed instead of waiting at a central location called the Recycle Bin, but I guess I can live without it. With [Steam](https://store.steampowered.com) being able to run more games than ever, including my most favorite [Dirt 3](https://www.codemasters.com/game/dirt-3), I guess I couldn't have asked for more.

## Up next

If you ask me about the next steps, I may not have an answer at this point. I might try getting used to the terminal a little more though, trying to reduce my dependencies from [Xserver](https://www.x.org) as you never know when things may change again. Besides, I also have a series to continue, ["Living in the command line"](https://www.youtube.com/playlist?list=PLe6BbPAW-WxjP4mlEv9JkAN9kuphO_Bg9), which never got another video after episode 2. Apart from that, there are a few more interesting videos lined up, so stay tuned!

## Outro

That's all that I have for this video, and if you found it helpful, you know what to do. Just be a little kind in the comments. As always, a subscribe will be helpful too. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
