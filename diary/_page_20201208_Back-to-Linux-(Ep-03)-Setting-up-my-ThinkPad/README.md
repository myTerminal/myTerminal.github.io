# Back to Linux - Ep 03: Setting up my ThinkPad

> This article is a transcript of one of my YouTube videos that you can watch by clicking the below thumbnail. This means that certain statements may not make sense if you're reading it in this form. Also, you can find all the videos in the series in [this playlist](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO), at least the ones that I've published till this point.

[![https://i.ytimg.com/vi/u4ivXywSekY/hq720.jpg](https://i.ytimg.com/vi/u4ivXywSekY/hq720.jpg)](https://youtu.be/u4ivXywSekY)

This video is a part of my series **Back to Linux** in which I cover my transition from my Apple MacBook Pro back to Linux on a [ThinkPad](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0). If you haven't watched the previous videos yet, I highly recommend starting from there to get the context of this video but if you already have, let's get right down to it as the main action starts NOW.

## My plan for the new setup

So as I mentioned in my previous videos, though the primary operating system on this new device was planned to be Linux, I decided to keep [Windows](https://www.microsoft.com/en-us/windows/get-windows-10) on a small but reasonably sized partition on the 512GB NVMe drive.

Apart from my primary Linux partition, I wanted to have another spare one that I could use to either try out other Linux distributions, or anything else that I might not be thinking of right now. Besides, believe it or not, 512GBs is just a lot of space for someone coming from a 256GBs M.2 SSD.

I also had been reading and hearing about [BTRFS](https://wiki.archlinux.org/index.php/Btrfs) file-system for a few years now for how it's arguably better than the good old [EXT4](https://wiki.archlinux.org/index.php/ext4). As I've been using EXT4 since my brother introduced it to me back in 2013, I thought of giving BTRFS a try on my primary computer this time.

## The steps I took for the major setup

So this is how my long exercise started:

### Inspecting the stock partition table

Before I started making changes to the drive, I wanted to examine the partition map Lenovo had set up on the device and I thought I'd do that from Linux instead of Windows. I chose [Elementary OS](https://elementary.io) for this job, because it's pretty small, and because I couldn't think of any other Linux distribution. I downloaded the latest Elementary OS  ISO on my MacBook Pro and created a bootable USB drive using [Balena Etcher](https://www.balena.io/etcher).

According to my experience, if you want to achieve a dual (or [multiple-boot](https://en.wikipedia.org/wiki/Multi-booting)) setup involving Windows as one of the operating systems, you always install Windows first. If you install Linux first and then Windows, you won't be able to boot into anything but Windows once you're done. So you install Windows first, then install your Linux so that GRUB will provide you with a list of options to choose from, for which operating system you want to boot into when the system starts. This behavior of Windows might have changed lately, but I didn't want to spend time finding out if it did, so I decided to stick to the same old method that I've been following since I did it the first time on my Dell in 2013.

### Disabling secure boot

As soon as I tried to boot the computer from the Elementary OS USB drive, it complained about some security violation, I figured it would be the [Secure Boot](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-secure-boot) in BIOS, so I disabled it, tried booting again and the error disappeared.

### Recreating the partition table

I verified the existing partition table that came with the device to see if I could use it and just re-create the partitions as I had planned. I ran `sudo parted /dev/nvme0n1` and respond to the next two prompts with `unit GB` and `print` respectively. Of course, I didn't know these commands on the top of my head, but it was very easy to find over the web. I found that the partition table would work, but I still destroyed it and created a fresh `GPT` partition table, and then created the partitions according to my needs. I also learned that as the drive setup on this machine was different than I was used to, the partitions showed up as `/dev/nvme0n1p1` instead of `/dev/sda1`.

### Installing Windows

Then I installed Windows on the last partition, which was pretty simple in itself. I performed some minimal configuration that I do on almost all Windows computers I use even for a few minutes, installed Windows updates, installed all hardware drivers, and made sure things were as close as possible to the original setup from Lenovo, just on a smaller partition this time.

### Preparing for Arch Linux setup

As the new Windows setup was now all taken care of, I downloaded the latest Arch Linux ISO from [the official website](https://www.archlinux.org) and created a bootable USB drive using Balena Etcher, just like the last time.

### Preparing for BTRFS

Then I performed a quick exploration of BTRFS. I didn't want to learn everything at that point, neither did I have the time for it, so I just learned a few commands that were necessary for the installation. I ran a simulation in a Virtual Machine on [Virtual Box](https://www.virtualbox.org) running on my MacBook Pro to verify that the steps would get me a working system with BTRFS.

Now, back when I installed Arch Linux on my Dell Precision desktop for the first time, which was last year, I created [a short Gist](https://gist.github.com/myTerminal/cdeb61cbc7f4b4e4a5cf6a60ab7021a2) on GitHub so that I had a personal reference with me for future installs, which you won't believe, at a point in time used to be at least once every week. Just don't ask me why.

I updated the Gist, in fact, created [a new one](https://gist.github.com/myTerminal/f8723f30661296c1b6f9d04bb201a4c4) with the changes so that I don't mess things up during the actual install. I could think of a few ways to organize it further, but then I decided to stick to the current activity, which was to install Arch Linux on the new system.

### Issues booting Arch Linux

Booting into Arch Linux introduced a new issue that I had never seen on this device yet, neither with Windows nor with Elementary OS. The screen started flickering even before the OS booted completely, and then it all turned black. [Searching on the web](https://duckduckgo.com/?q=thinkpad+x1+extreme+screen+flicker&t=newext&atb=v249-1&ia=web) for such an issue, I found that it's pretty common for this device and the only known solution was to switch from Hybrid graphics to Discreet graphics in BIOS. Now, I remember this was a suicidal step for this device as models from earlier generations were known to get bricked as soon as you flip this setting and try to reboot. One way to avoid turning your device into a very expensive paper-weight was to update the BIOS firmware to a particular version before you do this, and that is exactly what I did by booting in Windows, downloading the [BIOS update](https://pcsupport.lenovo.com/us/en/products/laptops-and-netbooks/thinkpad-x-series-laptops/thinkpad-x1-extreme-3rd-gen-type-20tk-20tl/20tk/20tkcto1ww/r9109sy7/downloads/driver-list/component?name=BIOS%2FUEFI), applying the patch and returning to where I left. Funny enough, Elementary OS live session stopped booting entirely now and the issue got worse. Thankfully, Arch installation had no problems, and I could at least proceed with my primary setup.

### Connecting to the internet

So I booted to Arch installer and quickly realized I needed to connect to the internet. I call myself lucky as since I moved to these command-line installers, I've never had to face this situation where I had to connect to a wireless network from a command-line. My desktop computer was always wired through the ethernet so I never even thought about learning how to do it without a cable. So even this time, to keep it simple and quick, I used [the ethernet adapter](https://pcsupport.lenovo.com/us/en/accessories/acc100324) I ordered with the device to connect to the internet and get past the problem without any time waste.

### The same old setup

The setup was pretty much the same as any other Arch setup that I had done in the past, minus the BTRFS, so I followed the steps mentioned in my [new Gist](https://gist.github.com/myTerminal/f8723f30661296c1b6f9d04bb201a4c4) with almost 100% accuracy.

### Creating snapshots

The first thing I did after rebooting into the newly installed system was to create a snapshot. Now, this is one of those many unique features of BTRFS, you can create snapshots of your partitions and restore them later in virtually zero time. I used two simple commands to create a snapshot of the root partition (or subvolume in this case) in it's freshly installed state.

    sudo btrfs subv create /.snapshots
    sudo btrfs subv snapshot / /.snapshots/2020-11-25_01-fresh-install

This snapshot could come in handy if at all I ever needed to restore my Arch installation in the future for whatever reason it might be. For obvious reasons, I won't talk about the commands in this video as it could be a totally separate one altogether.

### My personal setup and some configuration

Next, I ran [my dotfiles setup](https://github.com/myTerminal/dotfiles/tree/master/.setup) and performed usual manual stuff like configuring a few software packages for which I don't have automation yet. Past this, my Arch Linux was almost ready to use, except it wasn't yet ready still...

This is a different device, and it needed special tweaks on top of the regular Arch install.

### Tweaks for the HiDPI screen

The 4K screen needed DPI changes across the system. One most important place to make this change was the `.Xresources` file. I imported this file into my `.xinit` file and this in itself took care of most of the scaling.

### Fixing audio

There was no audio from the laptop speakers and even the sound through Bluetooth sounded worse than anything that I had heard before. The fix required a specific configuration that I got working after hours of looking over the web.

The audio on the device (when there is one) doesn't even remotely sound like it does in Windows, so I installed [pulseeffects](https://github.com/wwmm/pulseeffects) along with [the presets from JackHack96](https://github.com/JackHack96/PulseEffects-Presets) as suggested by ArchWIKI.

### Fixing bluetooth

I also had to explicitly enable and start Bluetooth service to make Bluetooth work on the device. I learned that this was [an issue introduced in recent versions of Arch Linux](https://bbs.archlinux.org/viewtopic.php?id=259260&p=2), but I bundled it with the script I wrote for this particular device anyway.

### More tweaks from the Wiki

Then I performed a few more tweaks mentioned on [the Arch WIKI guide](https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_X1_Extreme) but didn't get a chance to verify the results myself.

### Copying my workspace and projects

Copied my entire workspace of projects and more from the MacBook Pro and created convenience soft-links at `~/` level for the directories I frequently need access to.

### Fixing the bootloader

As my Arch installation steps still do not take into consideration the other operating systems installed on the system which I still have to do using packages like [os-prober](http://joeyh.name/code/os-prober), it took away the ability to boot into Windows. As a cheap and lazy fix, I installed [Manjaro](https://manjaro.org) on the spare Linux partition that I had reserved for my experiments just to be able to get a better Grub menu and to also bring back an option to boot into Windows when the system starts. So now I had three operating systems on the computer.

### Reverting to Hybrid graphics from BIOS

As previously I had switched the display mode to Discreet graphics, the device was always running on the dedicated Nvidia GPU. This can be a problem as drains the battery quicker than expected, but there was another problem which was much more noticeable to me: the screen brightness stayed on full setting and couldn't be adjusted. Again, full brightness is something one never uses indoors, but the bright 15 inch OLED was causing a lot of burning in my eyes throughout the setup process. As I was now past the Arch installation process, I switched it back to Hybrid graphics and the screen brightness could now be adjusted, and thankfully there were no visible flickering issues.

## Coming up...

So that's all that I had for this video, but with the above steps, the setup was still far from complete. The major left-over step that I anticipated to be a big one for me was setting up the hybrid graphics with Nvidia Optimus, which will come in the next video. So till then, thanks for watching, may the maker watch over you, see you in the next video!
