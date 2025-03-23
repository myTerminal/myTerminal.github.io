# How to Stop Worrying About Losing Your Data

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/JA8IU8mU4L4/hq720.jpg](https://i.ytimg.com/vi/JA8IU8mU4L4/hq720.jpg)](https://youtu.be/JA8IU8mU4L4)

Digital data is all around us, and with so much of it in our lives, it's very easy to either lose it or have it compromised. So today I'll be talking about a few things I've been doing differently such that I do not worry about losing my data, at least the way I used to before.

## The situation

Computers mean different things to different people. And no matter who you are and what you use them for, they pretty much help us with one common thing, that is to manage our lives digitally. If you're the kind of person I am, all this digital data involved in and across these apps and websites can get overwhelming pretty quickly, and that's a serious problem if you think about it. I might have a remedy for this, given I haven't had to deal with data loss for several years now, even as my data just kept growing over the last two decades.

## Before we proceed...

When I use the term digital data, I don't only refer to the stuff that most of us usually think of as data, for example, pictures, documents, notes, To-Do lists, passwords, etc., but I also talk about [my computer configuration](https://github.com/myTerminal/dotfiles). Though the latter can be recovered with enough time unlike the former, I prefer to be safe with both these kinds of data. So the following are a few things you can do too if you'd rather worry about other important things in life.

## 1. Treating hardware as unreliable

I still love my computers and gadgets the way I've always done: I perform regular maintenance, keep them clean, and whatnot! However, one thing I've learned to do lately is to treat them as temporary and replaceable.

The idea is that even though the machine would change at the end of its life, be it a motherboard failure on a computer, or a spoilt battery on a smartphone, the data should still be available. So, to put it in other words, I still care about my machines, but I care about my data even more.

One thing that I've been following for a long time now is to have [a scripted setup](https://github.com/myTerminal/dotfiles/tree/master/.setup) of all my computers. What this helps me to do is, I can pretty quickly transform a newly purchased machine into the one I use daily, with virtually zero downtime. Now that I know I can recreate my computing setup on any random machine, given that the hardware is powerful enough, of course, it takes a big chunk of stress out of my head so I can focus on my work more instead of worrying about my daily driver failing just about anytime.

## 2. Making your data available

So I can re-create my computing setup anytime, and anywhere, but my data should also be available across computers. I make sure it is by taking appropriate measures for different kind of data.

All the source code for my software projects is either at [GitHub](https://github.com) as public repositories or at [GitLab](https://about.gitlab.com) as private projects. Most other data is backed up regularly and is made portable across machines in a "secure-enough" way. I have a premium plan with [pCloud](https://www.pcloud.com) for larger files that I don't need that often, and for the kind of data I need to have with me pretty much all the time, I have a reasonably complex mesh of nodes on my private [Syncthing](https://syncthing.net) network. Finally, the data that drives it all, sort of like the mission log of my life, resides on [Remember The Milk](https://www.rememberthemilk.com), which is one of those apps/services that are available on every single platform you can imagine, even [BlackBerry](https://www.blackberry.com/us/en/products/devices)!

So with all these mechanisms in place, I can access all my data on pretty much all of my devices.

## 3. Keeping your data cross-compatible

One other thing I hate is to get locked by an application platform, a specific file format, or an operating system of the computer the data is stored on.

Except for my To-Dos on Remember The Milk, which is a well-deserved exception, all my data is stored in form of plain text. I store my draft posts in [Markdown](https://daringfireball.net/projects/markdown) and most other notes in [Org](https://orgmode.org). This way, I can view and edit them using virtually any text editor.

## 4. Losing your data regularly

Another thing I do is that I lose some data regularly. But wait... wasn't all this supposed to be helping me *not* lose my data? Let me explain.

So my data is backed-up at multiple places, always available to me, and also editable through a wide variety of tools, but there's one more problem: it keeps growing. And no matter how well I organize it, it soon ends up getting out of hand. So along with the "re-organization" that I run regularly, I also try to lose the data that I don't find relevant anymore. This makes sure I carry only what's important and hence everything is easier to maintain. I have recurring tasks in my To-Do list just for this activity, one for each kind of data.

There are a few other benefits of this as well, one of them is that it makes space for new data. As I store the same data on all my devices, storage space can be a concern, especially on devices with smaller storage capacities.

## 5. Owning as much data as possible

Finally, I also like to keep my data on my local machines as opposed to using cloud-based file-sync platforms.

Syncthing is a gift, and it lets me do exactly that and that too very reliably. It lets me sync data between my local devices in a decentralized way so my data stays only with me. This local cloud of mine carries most of my data including my encrypted passwords DB, my finance worksheets, notes, etc. I only use cloud-based apps and services like [Dynalist](https://dynalist.io) for the things I need to collaborate with other people, who are often normies.

## My further plans

With all this taken care of, I still have a lot of data synced through proprietary platforms. A few of them are contacts, emails, calendar entries, web bookmarks, etc. 

For web bookmarks, I need to decouple them from my Firefox account, just the way I did for my passwords a while back. The same goes for contacts too, and I'd love to be able to host my contacts locally instead of relying on Google services to sync them across my devices.

I have some interesting (and hopefully) feasible plans to get these items offline, so stay tuned to learn what happens in the next couple of months!
