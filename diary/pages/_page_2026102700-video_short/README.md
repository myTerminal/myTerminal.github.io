# Filling Gaps in Minimal Linux Setups #VoidLinux #ArchLinux #Linux #Computing #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/iSru41L9IxI/hq720.jpg](https://i.ytimg.com/vi/iSru41L9IxI/hq720.jpg)](https://youtu.be/iSru41L9IxI)

## Transcript

So, let's say you installed a minimal Linux setup on your computer. Instead of wiping the drive to install another one in your long-running series of distro-hopping adventures, you actually intend to use it as a daily driver. Let me take you through a list of things you might need to set up, gaps you might need to fill, and software you might need to install before you can even remotely show it off to your friends who are still stuck with mainstream operating systems with more bloat than the AI features they’ve been force-fed.

Though I've been exclusively running Void Linux on all my machines since several years now, I've made sure to compare if with other mainstream setups in order to keep my personal handcrafted setup as complete as possible. A decade ago, when I stepped into macOS, the configs never left my dotfiles ever since, and so did the one-to-one mapping of most of the major elements between macOS and my current Linux distro of choice.

So right after the install, you'll most likely have a base system with a kernel, a few core elements like the init system, and a few software packages depending on how minimal your install is. Here are some of the things you may need to add on top of it.

1. System services which may include time synchronization, especially for dual or multi-boot setups
2. Bootloader and other boot-related configuration
3. User shell, privilege escalation with tools like `sudo` or `doas`
4. Networking and Bluetooth stack
5. Basic software that your workflow depends on
6. Power management and other hardware utilities
7. Graphical stack and appropriate GPU drivers
8. Application themes, icons, cursors, and fonts
9. Audio and multimedia stack
10. Startup applications and services
11. Default applications
12. Development tools setup, if you plan to develop on the machine

And there may be more of these depending on what you use your machine for, but you get the idea. On paper, using a minimal Linux setup may sound fascinating, and it is for most part, but getting it to be exactly how you'd like it to be may take months, or maybe years, or maybe forever. Needless to say, it will be your own setup that fits no one else better than you, and there's literally none other like it.

A question after all these additions would then be whether your setup is minimal anymore.
