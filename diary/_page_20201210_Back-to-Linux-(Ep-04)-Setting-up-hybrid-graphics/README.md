# Back to Linux - Ep 04: Setting up hybrid graphics

> This article is a transcript of one of my YouTube videos that you can watch by clicking the below thumbnail. This means that certain statements may not make sense if you're reading it in this form. Also, you can find all the videos in the series in [this playlist](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO), at least the ones that I've published till this point.

[![https://i.ytimg.com/vi/vRl2DTlH1Js/hq720.jpg](https://i.ytimg.com/vi/vRl2DTlH1Js/hq720.jpg)](https://youtu.be/vRl2DTlH1Js)

This video is a part of my series **Back to Linux** in which I cover my transition from my Apple MacBook Pro back to Linux on a [ThinkPad](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0). If you haven't watched the previous videos yet, I highly recommend starting from there to get the context of this video but if you already have, let's get down to it as after the steps we took in the last video, we left out one major thing to be configured, that is the hybrid graphics. So let's take care of that as well.

## The primary reference guide

My primary reference document for anything related to this device has been the [Arch Linux Wiki for ThinkPad X1 Extreme](https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_X1_Extreme). This is one major reason why I love Arch Linux: the community is so huge, you could have an entire detailed document for a very specific device.

One pretty large section in the document outlines various pointers around setting up the hybrid graphics on the device.

## Finding out the details of our hardware

First things first, we use this pretty concise command to query the hardware that we're working with.

    lspci | grep "VGA"

The output of the command clearly mentions the presence of two graphics processors:

1. Intel UHD Graphics
2. NVIDIA GeForce GTX 1060 Ti

## A few options to work with hybrid graphics on this device

Returning back to the [Wiki](https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_X1_Extreme#Hybrid_graphics), we can see there are several options we have. At a high-level, we have the PRIME offloading, optimus-manager, and Bumblebee.

There's also the [nvidia-xrun](https://wiki.archlinux.org/index.php/Nvidia-xrun) which apparently offers a pretty solid power-saving performance by running an Xsession with Nvidia on a separate TTY. I didn't look into this option but I may evaluate it later.

## Default behavior in Linux

[nouveau](https://wiki.archlinux.org/index.php/Nouveau) is the open-source driver for Nvidia graphics cards and is probably the easiest solution for the hardware. In most cases, installation is as easy as a single command:

    sudo pacman -S xf86-video-nouveau

However, the performance with this driver is not even remotely as close to the proprietary one from Nvidia. Also, there are various other known issues with sleep and hibernation.

On this device, I realized that even after removing the `nouveau` package, the operating system still seemed to use the nouveau kernel driver, so turning it off didn't seem to be an easy option without making some complex configuration changes that I didn't want to step into.

## Using nvidia-prime

[nvidia-prime](https://wiki.archlinux.org/index.php/PRIME) is another one of the simpler options if you want to use the integrated graphics processor by default and run particular applications on the dedicated graphics processor.

As a pre-requisite, you need `nvidia` drivers, and then you can install the `nvidia-prime` package as:

    sudo pacman -S nvidia-prime

Anything you need to run with Nvidia can then be started with `prime-run`.

So, simply running `gimp` will start `gimp` with integrated graphics that is Intel graphics, whereas running

    prime-run gimp

will start `gimp` with dedicated graphics that is the Nvidia GeForce GTX 1060 Ti

## Using optimus-manager

A slightly better alternative is to set up [optimus-manager](https://github.com/Askannz/optimus-manager) and it even allows you to switch between three different modes: integrated, hybrid, and dedicated.

You do need `nvidia` and `nvidia-prime` as a pre-requisite, and an additional package `optimus-manager` that's available on [AUR](https://aur.archlinux.org), so a helper like `yay` can be used, and the installation can be as simple as:

    yay -S optimus-manager

You can then switch between the modes with commands like:

    # For integrated/intel mode
    optimus-manager --switch intel

    # For hybrid mode
    optimus-manager --switch hybrid

    # For dedicated/nvidia mode
    optimus-manager --switch nvidia

For more commands and options, you can always use the `--help` switch and explore the program options on your own.

## optimus-manager-qt applet

If you need, you can also install the `optimus-manager-qt` applet, so you can perform mode switches from the system tray if your window manager supports one. I didn't use it yet, but still installed it just in case I do in the future when I switch my graphical environment.

## Verifying active graphics processor

When you use `optimus-manager`, you can quickly check the currently active graphics processor by a `--status` switch.

    optimus-manager --status

There's also a way you can change the graphics processer to start with on boot, but having it as Intel was exactly what I needed, so I didn't bother to change the configuration.

You can also query the active one using `glxinfo`.

    glxinfo | grep -i vendor

## Limitations of optimus-manager

There are a few known limitations of `optimus-manager`, some of which matter to my setup.

Firstly, the [Gnome Display Manager (GDM)](https://en.wikipedia.org/wiki/GNOME_Display_Manager) is not compatible with `optimus-manager`. Instead, a patched version called `gdm-prime` written by Canonical, which is otherwise identical to `gdm` can be used. If you do not use a display manager, which is something I used to do on my Dell Precision desktop at one point, you have to take care that the appropriate hooks are called after the XServer has started and stopped. I tried it but couldn't get it to work and have planned to spend time on it sometime later.

I'm using [Simple Desktop Display Manager (SDDM)](https://wiki.archlinux.org/index.php/SDDM) for now as that's one of the display managers that are supported out-of-the-box, but the screen is not properly scaled as well as it does in GDM.

## My custom script to work with optimus-manager

I have a habit of creating wrapper scripts for almost every script that I use frequently, so I created [one](https://github.com/myTerminal/dotfiles/blob/master/.scripts/linux/mt-gpu-switch) to work with `optimus-manager` as well.

With the script in place, and added to my `$PATH` of course, I can switch modes even easily.

For obvious reasons, I won't run the script during this video, because switching graphics needs restarting all graphical applications running the computer, which in my case means logging me off and even closing this screen recording session.

In fact, I recently also wrote [an interactive version](https://github.com/myTerminal/dotfiles/blob/master/.scripts/linux/mt-gpu-switch-interactive) with [rofi](https://github.com/davatorium/rofi), so that I can spawn a menu and then choose one of the modes from the three options without having to type in a command in a terminal window. I have linked this script to a keyboard shortcut in my other (primary) window manager [i3wm](https://i3wm.org), and it shows up even more effortlessly there.

## My Nvidia Optimus setup script

I've also created a script specifically to set up Nvidia Optimus on a machine. Even though my Thinkpad X1 Extreme is the only machine with hybrid graphics that I have at the moment, I thought I'd create a script anyway to keep all the steps required in a [single file](https://github.com/myTerminal/dotfiles/blob/master/.scripts/linux/mt-nvidia-optimus-setup).

## Placement of the script in my device setup script

Also, I tried to perform all the tweaks and special configuration that I had to perform after the regular Arch install on this device programmatically, I dedicated [a separate script](https://github.com/myTerminal/dotfiles/blob/master/.scripts/linux/mt-excelsior-setup) for the device as an add-on to my regular setup scripts in its own script file. The script is not yet complete, but at least I have a place where I can later keep adding more tweaks as and when I find them.

Obviously, this script runs the one responsible to set up Nvidia Optimus as one of its many steps.

## Coming up...

So that's all that I had for this video, and even though my setup was sort-of complete at this point, there was still plenty of gaps and issues with the system. I found the list of issues to be so long, that I planned an entire video to talk about it. So thanks for watching this one, may the maker watch over you, see you in the next video!

