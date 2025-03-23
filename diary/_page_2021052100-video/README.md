# Why I'm leaving Arch Linux, and a summary of my experience

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/Vjue3qFEFrg/hq720.jpg](https://i.ytimg.com/vi/Vjue3qFEFrg/hq720.jpg)](https://youtu.be/Vjue3qFEFrg)

So, I'm leaving [Arch](https://archlinux.org), BTW.

Before I talk about the reason, let me take you through my short story as usual, about how I ended up on Arch in the first place leaving my favorite distro [Fedora](https://getfedora.org).

## First contact

Since we switched from [Windows](https://www.microsoft.com/en-us/windows) to [Linux](https://ubuntu.com) back in 2013, my brother and I were looking for a stable (and more usable) Linux distro. With our obvious first [Ubuntu-based distros](https://en.wikipedia.org/wiki/List_of_Linux_distributions#Ubuntu-based) we weren't getting the reliability from Linux that we've been hearing and reading about. I know that a part of this must be our own lack of understanding of how Linux works, but none among the ones we were aware of in the Ubuntu family were proving to be of any help. Lacking [support for hardware drivers](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html) and [broken software package sources](https://linuxhint.com/apt_get_fix_missing_broken_packages) are the two major issues that we faced often, at least as far as I remember.

## Looking for a reliable distribution

We came across [LMDE](https://www.linuxmint.com/download_lmde.php), which as advertised was based on [Debian](https://www.debian.org), seemingly being more reliable by eliminating a layer of Ubuntu in between, but that didn't help us either.

Given how we had already exhausted all the options a Linux newbie would look at, I thought Debian itself would be worth a try. Due to lack of a decent internet connection back at my place, I ordered a set of four [Debian 7.4 Wheezy](https://www.debian.org/releases/wheezy) DVDs from across the country but as soon as I started the installation, I got overwhelmed with the complicated nature of the non-graphical installer I wasn't used to and gave up on Debian altogether, thinking that it wasn't for me. I also remember that was the only time I ever paid for Linux and had the DVD got stuck on my Dell Studio's slot-load DVD drive. So yeah, that was a horrible disaster.

## Coming across Fedora

My brother introduced me to [Fedora](https://getfedora.org), and though [`dnf`](https://docs.fedoraproject.org/en-US/quick-docs/dnf) was a completely different package manager than the [`apt-get`](http://manpages.ubuntu.com/manpages/xenial/en/man8/apt-get.8.html) we were used to, we found it to be arguably better in terms of its command syntax and also its reliability in the sense that we didn't have to keep fixing broken package sources as we had to in Ubuntu-based distros. It was a breath of fresh air and was pretty stable, or at least that's what we thought.

## Discovering Arch through Arco

Fedora first started to become a blocker when I couldn't get Nvidia drivers to run on [my pre-owned Dell Precision T3600 desktop](https://www.ebay.com/itm/382071287250) I bought from eBay. It was the same issue with [Xorg](https://www.x.org) denying to start saying ["there were no screens found"](https://unix.stackexchange.com/questions/605696/nvidia-no-screens-found-error-when-using-xorg) as soon as I installed the closed-source Nvidia graphics drivers.

I accidentally learned that [KDE Neon](https://neon.kde.org) was doing well on the machine with the right legacy graphics drivers picked up automatically. This gave me hope that it was in fact possible to run [Nvidia graphics](https://www.nvidia.com) on that machine. I also realized that it was time to look at Linux from a little closer than before and learn it at a lower level to be able to configure my system from scratch, hopefully getting Xorg to work.

I chose [Arch](https://archlinux.org) for its nature of being very customizable and picked up [Arco](https://www.arcolinux.info), which (out of the three editions it came with at that time) had a variant where it let me install a minimal Linux setup that I could build on, sort of like Arch, but with a graphical [Calamares](https://calamares.io) installer so that I didn't have to start with first learning [how to install Arch](https://wiki.archlinux.org/index.php/Installation_guide).

I learned [how to configure GUI](https://www.youtube.com/watch?v=lHI4pBB2tI4) on a bare-bones Linux installation, created [twiner](https://github.com/myterminal/twiner) as a re-usable tool, and then finally bridged the left-over gap by learning [how to install Arch](https://gist.github.com/myTerminal/f8723f30661296c1b6f9d04bb201a4c4) myself rather than relying on Arco, eventually having total control over my setup.

## What makes Arch so special?

There are so many good things about Arch, I may not be able to do it justice if I tried to list down everything. However, if I could throw a tiny list here, it could be as follows:

1. Though the installation may seem difficult at the start, [the documentation](https://wiki.archlinux.org/index.php/Installation_guide) (along with plenty of online videos on YouTube) can help you achieve whatever you can imagine.
2. The [Arch-Wiki](https://wiki.archlinux.org) is by far the most comprehensive Linux documentation I've seen on the internet. They even have [dedicated pages for particular Linux hardware](https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_X1_Extreme).
3. The community is huge, and you'll find help somewhere or the other, my favorite platform being [Reddit](https://www.reddit.com/r/archlinux).
4. The [Arch User Repository (AUR)](https://aur.archlinux.org) is probably the largest package repository for any Linux distro out there, at least according to my knowledge. The [official repositories](https://archlinux.org/packages) are pretty huge in itself, but AUR has EVERYTHING else at your disposal through either just a couple of commands or one of those several AUR helper tools out there, example: [`yay`](https://github.com/Jguer/yay) and [`paru`](https://github.com/morganamilo/paru).

## So why am I planning to leave Arch?

So let's come back to the topic of this video. Arch Linux is a [rolling release distro](https://itsfoss.com/rolling-release), which means there are no version numbers and the OS keeps shifting. Updates get pushed multiple times a day, which is great if you like to use the latest versions of the packages. However, frequent updates bring in a lot of bugs and hence broken functionality. Not to mean in any way that the Arch community doesn't perform enough testing before placing a new version up there, but when working with computer software, at least as far as I've learned over the years, the only way to minimize (if not eliminate) defects is plenty of regression, which sort of gets compromised in this model where features are made available almost right out of the oven.

I've seen ways to make Arch stable, for example, there are even [several stable versions of the Linux kernel in there](https://arcolinux.com/installing-a-new-kernel-linux-linux-lts-linux-hardened-linux-zen), but probably due to my (relatively) limited experience with Linux, I could never get my setup to work that way, especially with Nvidia involved. Also, I couldn't find a way to install a particular version of a package through [`pacman`](https://archlinux.org/pacman), even after knowing what older package version doesn't have a particular issue that I'm trying to avoid, and it always fetches the latest version.

Having said that, being one of the very few people among my family and friends who use [Linux as their daily driver](https://www.lifewire.com/windows-vs-linux-mint-2200609), I need to be in a position to convince more people to jump over to this side of the fence, which also includes my brother who though is the one who got me into Linux in the first place, is currently tied up with the [macOS](https://www.apple.com/macos) ecosystem.

## So what's next?

The scene of Linux is wide open, in fact, it's growing as we speak. I've been looking at [Gentoo Linux](https://www.gentoo.org) where you have even more control over your Linux setup by compiling individual software packages for your unique system instead of using precompiled binaries from the internet. However, according to what I've read and heard about Gentoo, it takes way more time to install and maintain than your regular Linux distro. Part of me wants to have that experience as well, and there's a part of me that wants to settle down with something that just gets the job done. Life keeps pulling you from all possible directions, you get older, and then there comes a point where you can't really afford to spend time rebuilding broken stuff, every week, but instead would really appreciate something that works.

Now that doesn't mean I'll return to [Windows](https://www.microsoft.com/en-us/windows) or even [macOS](https://www.apple.com/macos) for that matter, but if I could keep the exact setup that I've been using and also achieve some degree of reliability at the same time, that would be ideal. I'd still want to try Gentoo one day when I'll have all that additional time required to burn. Also, with all the research I've done on the web in the recent months and even in the past back when I was looking for a way out of [Ubuntu](https://ubuntu.com), the only option that kept making its way to the top of my list is [Debian](https://www.debian.org). Yes, I'm coming back to one of the oldest Linux distros on which hundreds of other distros are based including Ubuntu and  the entire Ubuntu family.

Also, now that I think about it, I never got to work with [`apt`](https://wiki.debian.org/Apt) properly as I did with `dnf` and `pacman`, so it might as well be a chance for me to get properly acquainted with that ecosystem, now that I'm a slightly more mature Linux user than the last time I was over to that side.

## Fast forward

OK, so if you still haven't guessed by now, let me fast-forward the timeline to tell you that I did already leave Arch, BTW. And yes, I've migrated to Debian.

This video was scripted back when I lost all hope of getting Nvidia and Xorg to play nice with each other on Arch, but I couldn't have made this video on my machines in the absence of an Nvidia driver.

So unlike the title of this video, I'm already over to the other side, or should I say, "I use Debian, BTW". I have high hopes that this new setup proves to be as stable and reliable as advertised.

## Up next

In the upcoming videos, I plan to get into more details about the migration and possibly add another episode to my incomplete series [Back to Linux](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO).
