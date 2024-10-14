# Back to Linux - Ep 06: Re-setup with Debian (Gains and losses)

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Certain statements may not make sense in text form, and watching the video instead is recommended. You can watch the entire playlist [here](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO), where you'll find the videos that have been published till this point.

[![https://i.ytimg.com/vi/2vlGNDqYdb8/hq720.jpg](https://i.ytimg.com/vi/2vlGNDqYdb8/hq720.jpg)](https://youtu.be/2vlGNDqYdb8)

This video is a part of my series **Back to Linux** in which I covered my transition from my Apple MacBook Pro to a [ThinkPad](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0) earlier this year. Though this video isn't about a transition between two hardware, given how I had to reconfigure the entire machine this time too, I consider this video to be a part of the series.

## Note

If you haven't watched [the previous videos in the series](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO) yet, you might feel a little lost in this one. I would highly recommend watching at least a couple of previous videos to get in sync with the state of [the machine](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0) we'll be talking about all the time during the rest of this video.

## A quick recap and some catch-up

Before we talk about the migration to [Debian](https://www.debian.org), it would be a better idea to instead start with the plenty of changes that happened since I set it up with [Arch](https://archlinux.org), so let's just get that out of the way first:

1. **Display:**

 With every other [Nvidia](https://www.nvidia.com) update, my machine used to see the screen differently such that I could see different outputs from [`xrandr`](https://www.x.org/wiki/Projects/XRandR). Though I already had a way to adjust display brightness using [brightnessctl](https://github.com/Hummer12007/brightnessctl) through [a pair of keybindings in i3wm](https://github.com/myTerminal/dotfiles/blob/052b6bc9fdef0da0eda7b143087e2e271f1e8e9d/.config/i3/config#L56), I complimented it with [a script](https://github.com/myTerminal/dotfiles/blob/052b6bc9fdef0da0eda7b143087e2e271f1e8e9d/.scripts/linux/mt-brightness-mode-interactive) where I set it using `xrandr` directly. I know the script isn't the best, but it works. Also, having two different ways of adjusting brightness may sound like a workaround, but I thought I had more pressing issues at the moment and I convinced myself to be happy with what worked.

2. **Trackpad:**

 I used to wonder why the trackpad used to work so much better in [Gnome shell](https://en.wikipedia.org/wiki/GNOME_Shell) as compared to other environments. I finally found out a way to configure the trackpad behavior manually using [xinput](https://wiki.archlinux.org/title/Xinput). I could set parameters like gesture sensitivity, inverted scrolling, and also a two-finger tap for right-click. After I did that, I wasn't surprised that the trackpad performed a hundred times better than it used to without it.

3. **Integrated microphone:**

 With some tweaks that in fact changed twice during my months with Arch, I got the integrated microphone to work and it performed great. The final method was to just [install a package named sof-firmware](https://github.com/myTerminal/dotfiles/blob/052b6bc9fdef0da0eda7b143087e2e271f1e8e9d/.setup/linux/other/arch/excelsior#L23).

4. **The rest:**

 The [fingerprint sensor](https://wiki.archlinux.org/title/Lenovo_ThinkPad_X1_Extreme#Fingerprint_reader) and the rest of the hardware were still in the state as it was before.

## To start with

Let's start talking about the new setup I now have with Debian. It's similar to the old one in some ways, and different otherwise. There sure were a few compromises, that I hope will disappear with time.

## Things that stay the same

The following things remain the same:

1. **BTRFS**: The setup still uses [BTRFS partitions](https://btrfs.wiki.kernel.org/index.php/Main_Page) with separate subvolumes for different mount points pretty much the same way I had last time.

2. **LUKS**: There's still [LUKS encryption](https://gitlab.com/cryptsetup/cryptsetup) for the Linux partition.

3. **Triple boot**: I still have [three operating systems](https://www.gnu.org/software/grub/manual/multiboot/multiboot.html) installed currently on the machine, and given how I've configured my drives this time, it will be pretty easy to add more without moving a lot of things around. We'll talk more about this just in a moment.

4. **GRUB**: I still have [GRUB](https://www.gnu.org/software/grub) as the bootloader as well as the boot-manager as with all the experiments I performed with [the newer](http://www.rodsbooks.com/refind) [(and cooler)](https://www.freedesktop.org/wiki/Software/systemd/systemd-boot) alternatives, nothing worked as expected with the complicated parts of my setup like LUKS encryption for example. You may blame this one on me, but I guess GRUB still works.

## Things that have changed

Now let's talk about the things that have changed.

1. I now have a simpler drive partition scheme with a smaller count of partitions. We'll talk about this new scheme in detail in just a moment.

2. As it goes without saying, Debian now became the primary OS.

3. Arch became the new alternate/secondary OS because I'd miss [pacman](https://archlinux.org/pacman) otherwise. I plan to keep my [dotfiles compatible with Arch](https://github.com/myterminal/dotfiles#software-selection) as well, at least for a while, just as I've made all efforts to keep it compatible with MacOS even after switching to Linux full time.

4. Though the [SWAP space](https://wiki.archlinux.org/title/Swap) still continues to exist as a separate drive partition, it's been reduced in size and has been only kept for the sake of it. I've seen people use a [SWAP file instead](https://thelinuxexperiment.com/using-a-swap-file-instead-of-a-swap-partition-in-linux), but I don't plan to look into it any time soon.

5. I now have a larger [boot/efi/esp](https://wiki.archlinux.org/title/EFI_system_partition) partition which has been increased in size from 500MBs to 512MBs. Not that it changes anything, but I guess it's just better to look at with this number.

6. I now have a larger [Windows](https://www.microsoft.com/en-us/windows) partition, which though wasn't planned, but happened as a result of the re-partitioning that reduced the number of partitions and also the size of the SWAP partition.

## The new drive partition scheme

So the new partition scheme involves a single BTRFS partition that hosts multiple subvolumes for all Linux distros. Along with the clear advantage of having to look at (and deal with) a smaller number of partitions, the following are a few more advantages:

1. It enables a more efficient disk space management such that no space is wasted and all possible free space is made available for anything that needs it.

2. It provides a possibility to add more distros to the set without having to move around partitions all over again.

3. All distros can share single encryption.

## Issues after the install

In my previous video about how I used [debootstrap](https://wiki.debian.org/Debootstrap), I did mention [the issues I encountered while installing Debian](https://www.youtube.com/watch?v=unhRffAGE7w). With all that taken care of, let's talk about the issues and changes that exist after and as a result of the installation.

1. My drive is now encrypted with [LUKS1](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/LUKS-standard/on-disk-format.pdf) instead of `LUKS2`. I don't know how much that'll affect my setup and workflow, but this thing will remain there in a corner of my mind until [the change to support `LUKS2`](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=927165) finally makes its way to our systems through future updates to GRUB. As far as I've read, [upgrading from `LUKS1` to `LUKS2`](https://www.johannes-bauer.com/linux/luksipc) is just a matter of a single command, maybe.

2. Now I get two password prompts instead of one: once for the boot partition even before GRUB shows up, and then for the second time for Linux root. This might as well be related to the previous change, but I guess I can live with it for the time being given I only start my machine about once a day. Yes, I do shut it down at night being from the '80s.

3. Debian has different package names for packages like [fd](https://github.com/sharkdp/fd) and [bat](https://github.com/sharkdp/bat), which are [fd-find](https://packages.debian.org/bullseye/fd-find) and [batcat](https://packages.debian.org/bullseye/bat) respectively. This does change my scripts and workflow slightly.

4. I had to downgrade from [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer) to [regular Firefox](https://www.mozilla.org/en-US/firefox) as installing the former would involve more work and I'd like to keep things simple at least for the time being. Speaking of Firefox, it isn't available on [Debian archives](https://packages.debian.org/testing) either, so I had to choose between [Snap](https://snapcraft.io) and [Flatpak](https://flatpak.org), and after comparing the two for a few days, I settled with [the one from Snap](https://snapcraft.io/firefox) for a few reasons like display scaling, etc. The only issue that this adds is that my password manager, which is [KeePassXC](https://keepassxc.org) isn't able to connect to Firefox installed with Snap. I can definitely not live with this issue for long and will keep an eye out for a solution.

5. [brightnessctl](https://github.com/Hummer12007/brightnessctl) needs to be run as `sudo`, so I had to fall back to working with `xrandr` directly through the script I mentioned in the video before. Also, the output from `xrandr` changed once more, so I had to update the script for the time being, but I would like to be able to work with `brightnessctl` once again, which would enable me to set relative brightness values instead of absolute values, furthermore have a single "standard" way of doing it.

6. There might be more issues that I might've missed and/or forgotten by now.

## Positive outcomes of the migration

Having talked about all the issues and changes, let's also have a look at the positive side of this migration.

1. Having lost access to the AUR, not all software I depend on is available through the default package manager anymore. This forced me to look at `snap` and `flatpak`. Not everything is available at either place at once, so even though I thought I'd prefer `flatpak`, I had to depend on both, but slowly, I've found my setup to lean more towards `snap`.

2. I now have a better understanding of[ GTK themes](https://wiki.archlinux.org/title/GTK), [icons](https://wiki.archlinux.org/title/Icons), [cursors](https://wiki.archlinux.org/title/Cursor_themes), and [fonts](https://wiki.archlinux.org/title/Fonts) on Linux, thanks to the absence of these packages on Debian. These did exist back in my previous setup when I configured all these elements after hours of ricing my Linux, but the elements still came as packages from the [AUR](https://aur.archlinux.org), which as it goes without saying, neither exist on Debian archives nor do they need to be, considering the kind of assets/dependencies these are. Now I have [scripts](https://github.com/myTerminal/dotfiles/blob/052b6bc9fdef0da0eda7b143087e2e271f1e8e9d/.setup/linux/tasks/common#L33) to install all of them by cloning them from their respective GitHub repos and placing them at the right filesystem locations.

3. Do I even need to mention that I'm using Nvidia and [Xorg](https://www.x.org) once again with virtually no issues?

4. I also have better display scaling at places like the [sddm login screen](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager) for example, without writing the tiniest of scripts.

5. I've been getting way smaller software updates without a single issue since I've moved on to this side. I now run an update every now and then without the fear of ending up with an unusable system. Yes, I don't live my life that dangerously anymore, but I'm happy I can spend all that extra time on something arguably more productive.

## That's definitely not all

This may not be all and I'm sure I'll be coming across gaps and issues here and there at least for the next few months. Regardless, I'm sure it'll be fun. I'll try to cover anything significant that I get to learn in the process of navigating through those issues if there are any.

The relatively lower priority issues that I talked about can be ironed out one by one slowly while I resume back to my planned development tasks that had been stalled for a long time due to this migration.

## Up next

So this has been my experience with Debian till now and having a very similar and close to complete setup with two completely different Linux distributions proves the same thing we already know: there could be multiple ways to solve a problem in Linux. The next one in the series could be [Gentoo](https://www.gentoo.org), but that would be like jumping ahead several years. In the near future, I might jump back to Arch, hopefully when I'll be a little better equipped to deal with issues that I wasn't able to deal with this time. Till then, Debian helps get the job done and in some ways, it gets it done better.

## Outro

That's all that I have for this video, so let me know if you liked it through either the Like/Unlike buttons or through your thoughts, feedback (preferably constructive), and ideas in the comments. You may also subscribe to the channel to show me your support and encourage me to make more of such videos. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
