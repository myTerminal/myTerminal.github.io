# Void Linux installation for Arch users

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/5EGrcUDdbRw/hq720.jpg](https://i.ytimg.com/vi/5EGrcUDdbRw/hq720.jpg)](https://youtu.be/5EGrcUDdbRw)

So I love [the Arch installation process](https://wiki.archlinux.org/title/Installation_guide): it encourages one to learn more about Linux even before the installation is complete. Because I love it so much, I also created a video recently about [installing Debian in a very similar way](https://www.youtube.com/watch?v=G1GaDEiAeiU), and given that [I've moved to Void now](https://www.youtube.com/watch?v=meqEsTj12cY), I thought why not do another such video for [Void](https://voidlinux.org). So let's have some action!

## Recap

In the previous videos where I mentioned that I was switching from Debian to Void, I also mentioned that I already have [a detailed Gist on GitHub](https://gist.github.com/myTerminal/82de59c83b2057868260d7185013e6d1) showing the steps for a Void installation that I'd do on my computers. As a matter of fact, I used the same guide to install Void on my secondary computer, so I'm pretty confident that it is a hundred percent accurate.

## The scope of this video

For this video, we'll follow along the same lines, but for the sake of simplicity and shortening this video, we'll have a quick installation with a straightforward [partition table](https://wiki.osdev.org/Partition_Table) and no complication like encrypted partitions.

Just like the last time, we won't have a [windowing system](https://en.wikipedia.org/wiki/Windowing_system) and almost no other software package that isn't really necessary to boot a Void system.

## Why install Void this way?

I received a lot of questions on my video on installing Debian using debootstrap for why one would do that when they have other simpler options to do it in a far easier manner. I guess the same question applies to this video as well because even Void provides a simpler way to install. My answer to the question still remains the same, which is, to be able to have more control over the installation and most importantly, have fun.

There's also one more thing to note, that Void provides two methods of [installing it through `chroot`](https://docs.voidlinux.org/installation/guides/chroot.html). One is named [the "XBPS" method](https://docs.voidlinux.org/installation/guides/chroot.html#the-xbps-method), which is pretty similar to the way we install Arch and is the one we'll follow in this video. [The other method](https://docs.voidlinux.org/installation/guides/chroot.html#the-rootfs-method) involves downloading compiled tarballs, but that's not what we'll do today.

## Booting into the Void live ISO

Exactly like the last time, we'll skip all the regular and boring stuff, quickly create a new virtual machine in [Virt-Manager](https://virt-manager.org), choose [the Void ISO](https://voidlinux.org/download) to boot into, select [EFI](https://www.computerhope.com/jargon/e/efi.htm) as the boot firmware and skip right to the point where the boot is complete.

For this exercise, I chose the XFCE live image, partly because I'm a fan of XFCE and also because I had some issues with network services with the other minimal ISOs, especially the base image, which could very well be due to the fact that I'm pretty new to [runit](http://smarden.org/runit).

## The installation

As it goes without saying, and also just like the last time, the steps will appear very similar to Arch installation steps.

### Starting a terminal

Once the boot is complete, we jump straight into a terminal and enter full screen, removing all the unnecessary elements from the screen, leaving only the terminal that we'll be working in.

Then we switch user to root.

    su -s /bin/bash

Note that I also specify the shell for the root user, as it isn't `bash` by default and though I usually use [fish-shell](https://fishshell.com), bash is the minimum I need to be able to work at the shell.

### Connecting to a network

We would've needed to [connect to the internet](https://wiki.archlinux.org/title/Installation_guide#Connect_to_the_internet), but as all this is inside a virtual machine, we can verify that we're already connected to a virtual wired network.

    ip a

Otherwise, we could have used `nmtui` and selected a wired or a wireless network to connect to.

### Updating the host system

Before we proceed with the installation let's first update all packages, but before that let's update the `xbps` package manager itself.

    xbps-install -Su xbps

Once `xbps` is up-to-date, let's update all packages on the live system.

    xbps-install -u

### Preparing the filesystem

So now comes the most important and interesting part of the installation process: the disk setup. As it goes without saying, my usual setup has a slightly complex drive partition map where I use [BTRFS](https://en.wikipedia.org/wiki/Btrfs) subvolumes for various mount points, but for the sake of simplicity, let's just take a [boot](https://en.wikipedia.org/wiki/System_partition_and_boot_partition), a [SWAP](https://www.makeuseof.com/tag/swap-partition), and an [EXT4](https://en.wikipedia.org/wiki/Ext4) root partition for this exercise. If you want to see my setup, you can always head on to the Gist I have linked in the description. Furthermore, you may also suggest improvements and I'll be happy to learn from you.

So getting back to the installation, we can use `cfdisk` to create a new [GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table) partition and then:

1. We create a new partition of size 512MBs and set it as EFI
2. Then we create another partition with a size of 2GBs and select Linux SWAP
3. Then we choose the left-over space for a regular Linux filesystem.

Finally, let's make sure we write the changes to the disk before proceeding.

We also have to format the partitions, which is exactly what we'll do next.

We start with formatting the EFI partition as FAT32

    mkfs.fat -F32 /dev/vda1

Then we format the second one as Linux SWAP

    mkswap /dev/vda2

And then finally the last one as an EXT4 for Linux root.

    mkfs.ext4 /dev/vda3

Now that we have all the partitions created and formatted, let's mount them so that we can install Void.

Let's mount the root partition first.

    mount /dev/vda3 /mnt

Then we create a directory for `/boot/efi`.

    mkdir -p /mnt/boot/efi

And then mount the EFI partition.

    mount /dev/vda1 /mnt/boot/efi

And then we finally set SWAP.

    swapon /dev/vd2

That takes care of the drive setup and we are now ready for the installation.

### Installing the base-system

We start the installation by setting a couple of environment variables for the `REPO` we'll be pointing to and the `ARCH` we'll be installing.

    REPO=https://alpha.de.repo.voidlinux.org/current
    ARCH=x86_64

And then we can finally bootstrap a base system.

    XBPS_ARCH=$ARCH xbps-install -S -r /mnt -R "$REPO" base-system vim git grub-x86_64-efi elogind polkit dbus neofetch

A point to note here is that we're only installing the packages that we absolutely need. As usual, I'm including neofetch just to be able to have a report after the installation is complete.

### Preparing the `chroot` environment

Before we root into the installed base system, we need to perform a few things.

We bind a few virtual file systems, which is `/sys`, `/dev` and `/proc`.

    mount --rbind /sys /mnt/sys && mount --make-rslave /mnt/sys
    mount --rbind /dev /mnt/dev && mount --make-rslave /mnt/dev
    mount --rbind /proc /mnt/proc && mount --make-rslave /mnt/proc

And we copy the DNS configuration to the new system.

    cp /etc/resolv.conf /mnt/etc

### Changing root to the new system

Let's now root into the new system and start our session with Bash.

    chroot /mnt /bin/bash

This command is pretty similar to how we usually root into an Arch system using `arch-chroot`. Once executed, the next commands we'll type will be run in the new Void system.

### Setting the timezone

To set the timezone for the new system, we simply create a symlink for the appropriate location for our region. For my case, I'm selecting Chicago.

    ln -sf /usr/share/zoneinfo/America/Chicago /etc/localtime

### Setting the locales

Setting system locales is easy too. We just have to uncomment the appropriate entry from the file `/etc/default/libc-locales`.

I'm using Vim here, and you can of course use whatever text editor you like and is also available on the system, or otherwise you can install what you need.

    vim /etc/default/libc-locales

Once I've un-commented the appropriate locale, which in my case is `enUS-UTF-8`, let me generate the locales using `xbps-reconfigure`.

    xbps-reconfigure -f glibc-locales

### Setting HOSTNAME

Now it's time to set the HOSTNAME of the system.

    echo "titan" > /etc/hostname

I'm naming the machine "titan", just like the last time.

### Configuring hosts file

Let's also configure the `/etc/hosts` file for network and make a few changes to the file.

    127.0.0.1    localhost
    ::1          localhost
    127.0.1.1    titan.localdomain titan

I'll again quickly get this done with Vim.

### Creating users and groups

Before we add users to the system, let's first set a password for the root user.

    passwd

And once we're done with that, let's add [Garrus](https://masseffect.fandom.com/wiki/Garrus_Vakarian) to the system as a regular user.

    useradd garrus -m -c "Garrus Vakarian" -s /bin/bash

So Garrus (just like [Miranda](https://masseffect.fandom.com/wiki/Miranda_Lawson) in the last video) has a home folder of his own, his full name is Garrus Vakarian and his default shell is `bash`.

Let's also assign him a password.

    passwd garrus

Let's also add him to a few groups so he has more to do than just [his calibrations](https://www.youtube.com/watch?v=ULlrgjG1huY).

    usermod -aG wheel,audio,video,optical,storage garrus

Then as the last step, let's also enable `sudo` access for Garrus so that he can run `sudo` commands and be happy. For that, we run `visudo` to access `/etc/sudoers` file, uncomment the first line that mentions `wheel` group and then save the file.

    visudo

### Generating fstab

Generating the `/etc/fstab` file is a little bit of work, but we can start by copying the file `/proc/mounts` and using it as the starting point.

    cat /proc/mounts >> /etc/fstab

Let me open the file using Vim, and then make a few changes. In short, we have to remove the unnecessary entries except for `tmpfs`, replace references to the partitions with their respective UUIDs and change the last zero for those entries. The last zero for `/` needs to be a "1", while for everything else, it needs to be a "2".

This will take a little while, so let me speed up the video.

Once we have all the partitions, we still have to mention SWAP.

    UUID=[...]    swap    swap    rw,noatime,discard    0 0

When done, we can save the file and quit.

### Setting up bootloader

As we're not doing anything complicated here, setting up the bootloader is going to be very simple.

Choosing GRUB as the bootloader, all that we need to do is to run a `grub-install`.

    grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=VOID

Once done, we can generate the GRUB config.

    update-grub

Let us finally run an `xbps-reconfigure` to make sure everything that we did is picked up.

    xbps-reconfigure -fa

### Ending with a cleanup

That takes care of everything and we can now safely leave the newly installed system.

    exit

Let's also unmount all mounted systems.

    umount -a

We don't have to worry about the few errors that we see. Finally, let's reboot into the installed Void system.

    reboot now

### Rebooting into the new system

After the reboot, our Void system is pretty much ready. We can log in as Garrus, and finally enjoy that moment of glory we've been waiting for by running `neofetch`.

    neofetch

### Enabling a few services with runit

Actually, the setup isn't complete yet. We still have to activate a few services without which the system might not be usable.

We definitely need to start the `dhcpcd` service so that the machine is able to connect to the internet.

    ln -s /etc/sv/dhcpcd /var/service

And then we can set up and start services for seat.

    ln -srf /etc/sv/{dbus,polkitd,elogind} /var/service

See! We just created a couple of soft-links and the services automatically got created, picked up, and started by runit.

So when I run a ping, we see that we're connected to the internet.

    ping github.com

## Further from here

So what we just created is a minimal system on which you can build your daily driver. You might need a windowing system, a [graphical environment](https://wiki.archlinux.org/title/Desktop_environment), and useful software packages that you use daily according to your personal workflow. I leave all that fun stuff to you.

## Up next

As I mentioned during the start of the video, this demo was intentionally made short by having a very bare-bones setup but in a practical setup we may have much more configuration, a great example is my own setup that you can see on the Gist I've linked in the description.

My system setup is way more specific, and one of those things is [LUKS](https://guardianproject.info/archive/luks) encryption, which I might as well cover in an upcoming video. It does add a lot of steps to the installation, but the end result is worth it.
