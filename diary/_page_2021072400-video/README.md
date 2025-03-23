# Installing a Minimal Debian system the Arch Way

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Certain statements may not make sense in text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/G1GaDEiAeiU/hq720.jpg](https://i.ytimg.com/vi/G1GaDEiAeiU/hq720.jpg)](https://youtu.be/G1GaDEiAeiU)

If you must have been watching a few of my [previous videos](https://www.youtube.com/c/myTerminal/videos), you definitely know about my recent move from [Arch](https://archlinux.org) to [Debian](https://www.debian.org). I've already covered most of the aspects of the switch across a few videos, except [the actual installation](https://gist.github.com/myTerminal/4f1d26eaf32cdc5bcc9fb19f594c03d2) itself. In this video, we'll install a minimal Debian system almost the way I did on my primary machine.

## Recap about `debootstrap`

I've already mentioned [debootstrap](https://wiki.debian.org/Debootstrap) a few times in my previous videos and I also talked about how it can be used to create a Debian installation on top of another Linux system which might not even be Debian. Though many of us won't find it that exciting because it involves tens of commands typed over the terminal, it's more of a blessing for the rest of us who like to have tighter control over their Linux right from the installation.

## Why make a video about it?

One of the few reasons to make a video on this topic is that there aren't as many resources online about installing Debian over the command line as many as there are [for other Linux distributions like Arch](https://www.youtube.com/results?search_query=how+to+install+arch).

But then one would ask, why would you install Debian in such a difficult way when it already comes with a [graphical](https://www.debian.org/releases/stable/amd64/ch05s01.en.html#graphical) and otherwise at least a text-based installer, effectively making all this effort useless. Why would someone be willing to go through all this pain of typing commands over a terminal and then eventually achieving a setup that is more or less the same? A short answer to this might as well be just because one can, but otherwise, I'd say that there could be very specific things one would want in their Linux setup that might not be possible through a graphical installer, a very good example is [my own case](https://github.com/myterminal/dotfiles#software-selection).

With all that out of the way, let's talk about the things we need for the installation.

## What we'll use for this video

To keep things simple (and quick), we'll install a very lean setup of Debian without a [windowing system](https://en.wikipedia.org/wiki/Windowing_system) or any other software packages. We'll use [virt-manager](https://virt-manager.org), which is a pretty cool alternative to [Virtual Box](https://www.virtualbox.org) for running virtual machines. We'll also have a very minimal [filesystem table](https://datacadamia.com/os/linux/disk/fstab#example), just enough to have a running Debian system.

## Booting into the Debian live ISO

Skipping all the regular and boring stuff, I'll quickly create a Virtual Machine in Virt-Manager, choose the Debian live ISO to boot into, select EFI as the boot firmware, and skip right to the point where the boot is complete.

## The installation

The installation, as you might expect, may look very similar to an [Arch installation](https://wiki.archlinux.org/title/Installation_guide). Along with a few other differences, there will be a few additional steps as well that are otherwise taken care of by Arch tools when you install Arch. So without wasting any more time talking, let's have some demo.

### Starting a terminal

So once we boot into live Debian, we jump straight into a terminal and switch user to root.

    sudo su

Now that we're root, it'll be easier to continue with the installation.

### Connecting to the network

A typical Linux installation starts with [connecting to a network](https://wiki.archlinux.org/title/Installation_guide#Connect_to_the_internet). However, as we're running a virtual machine, we don't need to worry about it, more specifically connecting to a wireless network, and we can just move along with the fact that our virtualization software takes care of it for us.

### Preparing filesystem

Before the installation, the obvious first step would be to prepare the [filesystem](https://wiki.archlinux.org/title/Partitioning) according to our needs. Though my usual setup is not as simple, for the scope of this video, let's stick to a simple partition map containing a [boot](https://en.wikipedia.org/wiki/System_partition_and_boot_partition), a [SWAP](https://www.makeuseof.com/tag/swap-partition), and a single partition to hold Linux. Needless to say, you can obviously scale this up and add more entries in the filesystem, but all that is pretty common such that there are plenty of examples all over the internet and hence we won't do it for this exercise.

We can use `cfdisk` to perform the partitioning in a relatively effortless manner. We create a new [GPT](https://en.wikipedia.org/wiki/GUID_Partition_Table) partition table and then:

1. We create a new partition of 512MBs, set it as EFI
2. Then we choose to create another one with a size of 2GBs and select Linux SWAP
3. Then we choose the left-over space as a regular Linux filesystem.

Finally, we make sure we write the changes to the disk before proceeding.

Let us now format the partitions.

We start with formatting the EFI partition as FAT32.

    mkfs.fat -F32 /dev/vda1

Then we format the second one as Linux SWAP.

    mkswap /dev/vda2

And then finally the last one as an [EXT4](https://en.wikipedia.org/wiki/Ext4). Again, I would've gone with [BTRFS](https://en.wikipedia.org/wiki/Btrfs), but to limit the number of steps and also to keep things simple, let's choose EXT4 for this exercise.

    mkfs.ext4 /dev/vda3

One thing to note here is that my devices are named `vda` and yours could be either `sda` or `nvme`, depending on the type of hardware, so you'll have to make sure you change the commands you run accordingly. You can simply check what your drives look like using `lsblk`.

    lsblk

Once we have all that we need, we can start mounting the partitions appropriately.

Let's mount the root partition first.

    mount /dev/vda3 /mnt

Then we create a directory for `/boot/efi`.

    mkdir -p /mnt/boot/efi

And then mount the EFI partition.

    mount /dev/vda1 /mnt/boot/efi

And then we finally set SWAP.

    swapon /dev/vda2

This takes care of mounting all partitions and we are pretty ready for the installation.

### Obtaining `debootstrap`

Depending on what operating platform you're running the installation from, the way you obtain `debootstrap` may be different. As we're currently running Debian itself, it could be installed as `apt install debootstrap`.

We just have to make sure we have the latest package metadata first.

    apt update

And then we can install `debootstrap`.

    apt install debootstrap

### Installing the base-system

With all partitions mounted, and with `debootstrap` in hand, we can start the installation rightaway:

    debootstrap --include linux-image-amd64,grub-efi,locales --arch amd64 bullseye /mnt

This command assumes that we're installing [Debian 11 Bullseye](https://www.debian.org/releases/bullseye) on a 64-bit system, which should be OK for most of us, or at least for the sake of a demo like this. This step takes a while depending on several things like the computer, the network speed, etc. We can fast-forward to the completion of this step, after which we'll have a base system ready.

### Preparing the `chroot` environment

Before we root into the installed base system, we need to perform a few things:

We copy the `/etc/mtab` file from the host system to the new system.

    cp /etc/mtab /mnt/etc/mtab

And then we bind a few virtual file systems to avoid issues we might otherwise encounter during the installation.

    mount -o bind /dev /mnt/dev
    mount -o bind /dev/pts /mnt/dev/pts
    mount -o bind /proc /mnt/proc
    mount -o bind /sys /mnt/sys

These are a few things that are automatically taken care of while installing Arch with [pacstrap](https://man.archlinux.org/man/pacstrap.8) and then rooting into the system using `arch-chroot`. Regardless, with all this taken care of, we should be good to proceed.

### Generating fstab

We can create the `/etc/fstab` file manually but that would be a little cumbersome and also error-prone. To save some time and also make sure we're not messing things up, let's do it in a smarter way. We can use `genfstab` to generate the file for us. As we're running Debian, we could install a package named [arch-install-scripts](https://github.com/archlinux/arch-install-scripts) through `apt`.

    apt install arch-install-scripts

Once installed, we can run `genfstab` over `/mnt` to get an `/etc/fstab` file.

    genfstab -U /mnt >> /mnt/etc/fstab

With this, we didn't have to type anything manually, and yet we have a proper `fstab` file.

### Changing root to the new system

Now that we have everything ready inside our freshly installed base system, we can now safely `root` into it.

    chroot /mnt /bin/bash

This command is pretty similar to how we usually root into an Arch system using `arch-chroot`. Once executed, the next commands we'll type will be run in the new system.

### Setting up `apt` sources

Let us start with updating `/etc/apt/sources.list` to include non-free software. This won't be needed for the software packages we'll be installing as a part of this exercise, and you can choose not to do it, but I'm doing it here just to show you that one can, just in case.

Let's use `nano` to open `/etc/apt/sources.list`:

    nano /etc/apt/sources.list

You can obviously use any text editor to edit this file.

We just need to add a couple of keywords at the end of the line:

    deb http://deb.debian.org/debian bullseye main contrib non-free

Once done, we press "Ctrl+O" and "Enter" to write the file, and then "Ctrl+X" to exit.

Then we run an update on package indexes (or indices, to be grammatically correct).

    apt update

### Installing core packages

With the `apt` sources correctly set up, we can install the software we need, but our aim isn't to set up a daily driver, so let's just only install what we absolutely need for the rest of the installation.

    apt install firmware-linux sudo vim neofetch

I'm just including `neofetch` for us to be able to see a report after the installation is complete.

### Setting timezone and locale

For setting up timezone, we can run `dpkg-reconfigure`.

    dpkg-reconfigure tzdata

You can choose a region you live in, or at least would like to in. I'm choosing Central US.

For setting up locales, we can run `dkpg-reconfigure` again.

    dpkg-reconfigure locales

I choose `en_US.UTF-8`, but you can choose whatever is applicable to you.

### Configuring network

Next, we set up the hostname of the new machine. Let's call it "titan".

    echo "titan" > /etc/hostname

Then we configure our hosts file. Let's do this using `vim`. Again, you can do this with any other text-editor too, including `nano`, that we used in one of the previous steps.

    127.0.0.1    localhost
    ::1          localhost
    127.0.1.1    titan.localdomain titan

After adding this additional entry, hit "Esc", then ":wq" and "Enter".

And we finally configure network interfaces

    auto lo
    iface lo inet loopback
    auto eth0
    iface eth0 inet dhcp

Let's just save the file, and done.

Lastly, let's also install a couple of network-related packages.

    apt install dhcpcd5 network-manager

### Creating users and groups

To set up users and groups, let's first start with setting up a password for `root`.

    passwd

And then let's create a non-root user for the system. Let's name the user "Miranda".

    useradd miranda -m -c "Miranda Lawson" -s /bin/bash

So she has a home folder of her own, her full name is "Miranda Lawson", and her default shell is `bash`.

Let's set a password for her as well.

    passwd miranda

Finally, let's also add her to the `sudo` group so she can run `sudo` commands too.

    usermod -aG sudo miranda

### Setting up bootloader

Just as most of our setup was pretty simple, we don't need to do much for the bootloader either.

Choosing GRUB as the bootloader, all that we need to do is to run a `grub-install`.

    grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB

And then we generate GRUB configs.

    update-grub

### Ending with a cleanup

That takes care of everything and we can now safely leave the newly installed system.

    exit

Let's also unmount all mounted systems.

    umount -a

We don't have to worry about the few errors that we see. Finally, let's reboot into the installed Debian system.

    reboot now

### Logging into the new system

After the reboot, we have a minimal Debian system that we installed using `debootstrap`!

Let's run `neofetch` and see what it looks like.

    neofetch

## Possible next steps

Now that we have a minimal Debian system running, there are several possible next steps one could perform. One can install a windowing system, which can be [Xorg](https://www.x.org/wiki), [Wayland](https://wayland.freedesktop.org), etc. followed by a [graphical environment](https://wiki.archlinux.org/title/Desktop_environment), for which one can use [twiner](https://github.com/myterminal/twiner) too. One can also install a few [useful software packages](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/packages/debian) that they would need for daily use. However, all that isn't the point of this video, so I'll leave all that to you.

## And that's just a small example

All the steps we went through were pretty basic, partly to keep the video simple and short, and then also because I'm not a hundred percent conversant with *debootstrap* yet except for the few times I've used it till this point. I'm sure the tool allows a lot more, but I leave that as well for you to explore if at all you're interested.
