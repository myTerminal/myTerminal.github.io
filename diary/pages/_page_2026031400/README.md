# My Perfect Computing Setup

## Intro

One of my oldest and most active software projects is my computing setup, which resides as [dotfiles on my GitHub account](https://github.com/myterminal/dotfiles). There's so much to talk/write about this that I can go on for hours, and there may still be something missed.

## Brief History

My computing setup started as a spreadsheet, turned into a shell script, and quickly evolved into a complex arrangement of not only scripts but also other assets that collectively form what I run on all my computers. It has been through [Windows](https://www.microsoft.com/en-us/windows), [macOS](https://www.apple.com/os/macos), and tens of [Linux](https://www.linux.org) distributions, currently supporting only two: [Void Linux](https://voidlinux.org) (because I run it everywhere, including my notebooks, desktops, and servers), and macOS (because using it exclusively for four years gave me a perspective I'd like to preserve).

## The Base Platform

I've had the opportunity to experience all three major operating systems: I started with Windows in my early years of computing, and since then, it's mostly been Linux, with four years of exclusive macOS in between. I still have a soft corner for [Windows 98](https://en.wikipedia.org/wiki/Windows_98), and maybe [Windows XP](https://en.wikipedia.org/wiki/Windows_XP), but anything past [Windows 7](https://en.wikipedia.org/wiki/Windows_7) for me is Linux.

On the Linux side, apart from tens of [Ubuntu](https://ubuntu.com), [Debian](https://www.debian.org), and [Fedora](https://www.fedoraproject.org)-based distributions, I also spent time with the [Arch](https://archlinux.org) (BTW) community for a short while, but since I entered the Void, I could never look back.

My method of installing Void Linux is pretty elaborate, and the exact steps are kept up-to-date [here](https://github.com/myTerminal/dotfiles/blob/master/.setup/docs/install-void.md). Being that particular helps me make sure that the foundation of my computing setup is exactly how I like it, and contains as little as possible of what I do not need.

## Design Principles

Since around 2016, the following have been the core principles I've followed with my software setup:

1. **Lean**: It should contain only the software that I need, with minimal to no tolerance for bloat. There's only one software for one thing, with exceptions, of course, and I run regular optimizations to make sure that is still the case. These changes could be either replacing a tool with a better alternative, or one from within the operating system itself, or dropping it altogether.
2. **Reproducible**: I should be able to reproduce the same setup on as many machines as I need to, at any point in time, as many times as I need or want, with minimal to no manual configuration. This means not only the fetching of software is scripted, but also configuration and often execution.
3. **Composable**: The elements of the setup should be interchangeable with other alternatives when a better-suited one is identified. Usually, following the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) (which is to have a tool for one job only) helps, with exceptions like [Emacs](https://www.gnu.org/software/emacs).
4. **Portable**: The setup should be portable such that (a) it should self-contain all other assets like code libraries, multimedia files, etc., with minimal to no external dependency, and (b) it should not contain elements bound to a particular Linux distribution, potentially preventing it from working elsewhere.
5. **Well-Documented**: The entire setup should contain sufficient documentation for my future self, because my older self has always had trouble aligning with my younger self from the past.

## A Few High-Level Choices

So, Linux is all about freedom and choices, and over the last few years, I've been getting more and more particular about what and how I use it on my computer, and Linux only sits at the top of the tree.

The following are a few high-level choices I've been sticking to for a long time:

1. **Void Linux**: I do not use a mainstream Linux distribution that you'd otherwise hear or read about when someone mentions they use Linux. So instead of Ubuntu or Arch BTW, I use Void Linux. Now, this isn't to prove that I'm even better than the "BTW" gang in any manner. A part of the credit goes to the distro itself for being the closest to what I need, and the rest to the small community that isn't even remotely as toxic as some other elitist cult groups.
2. **Runit**: Void Linux lets me use a modern init system (that is, [Runit](https://smarden.org/runit)) instead of the mainstream init systems like [SystemD](https://systemd.io). Without getting into the "SystemD vs others" debate, I'd say that the learning curve wasn't that steep, and now I find it easier to work with Runit than SystemD.
3. **Tiling Window Manager**: My Linux setup doesn't look or behave like most Linux setups you'd see on the web. That's because I do not use a Desktop Environment either and use a tiling window manager instead. I'll talk more about it soon.
4. **TTY Login**: I do not use a Display Manager either, so my computers start at a black-and-white TTY terminal. I only step into a graphical environment if I need it for the session, which is often the case, but I can still do most of what I need from the terminal itself. This is why I look at graphical software as an extension to the command line tools.
5. **BTRFS**: Using [BTRFS](https://wiki.archlinux.org/title/Btrfs) instead of [EXT4](https://wiki.archlinux.org/title/Ext4) filesystem gives me a lot more features and lets me manage my Linux partitions more efficiently. I barely ever do snapshots, but just being able to separate elements of my OS into subvolumes is more than enough to justify BTRFS to me.
6. **LUKS**: I also have my computers encrypted with [LUKS](https://gitlab.com/cryptsetup/cryptsetup), so unless you enter the super-secret encryption password on boot, accessing my data would be practically impossible, even if you steal my storage drive and try to recover data using another computer.

## Setup Scripts

Once Void Linux is installed and connected to the internet, running a single command on the TTY can help me turn a freshly adopted/rescued ThinkPad into one I can leave my house with and not miss the other machines in my fleet.

```bash
/bin/bash -c "$(curl https://gh.myterminal.me/setup)"
```

I wrote [a program](https://github.com/myterminal/forge) that helps you maintain the core of your configuration as a [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) file. The above script invokes it, passes my configuration file, and everything else follows. This is one of my projects that I'm most proud of and also grateful for being able to create.

## Hardware-Specific Tweaks

Now, simply installing Linux and installing software packages doesn't get you there. Also, even though you see only [ThinkPads](https://www.lenovo.com/us/en/c/laptops/thinkpad) here, my machines are pretty diverse in hardware and capabilities, so I need to adjust certain configuration details that are very specific to a particular machine. Some of those are:

1. Adjusting display DPIs for low-resolution and otherwise HiDPI screens
2. Configuring touchpad and trackpoint sensitivity
3. Setting fingerprints for passwords for machines with a usable fingerprint sensor
4. Installing appropriate graphics drivers, particularly proprietary drivers for machines with [Nvidia](https://www.nvidia.com) GPUs
5. Enabling power optimization and battery charge thresholds

And that's just the high-level items.

## A Few Major Tools

There are certain tools within my computing setup that I use more than others.

1. Starting from the text editor, I use super-emacs, which is a customization layer I hand-built over GNU Emacs, and it forms the most-used software on my computer. I'll drop the link in the description, so that you can check it out if you're curious.
2. For a web browser, I've stayed away from [Google Chrome](https://www.google.com/chrome) and have used alternatives like [Chromium](https://www.chromium.org/Home), [Brave](https://brave.com), and [Firefox](https://www.firefox.com). I recently switched to [LibreWolf](https://librewolf.net), but I still use Chromium, [Mullvad](https://mullvad.net/en/browser), and [Tor Browser](https://www.torproject.org/download) to complete my web browsing toolset.
3. I use [Betterbird](https://www.betterbird.eu) as my email client, which connects to my private exchange server and also forms my contacts manager and calendar. It's a fork of [Thunderbird](https://www.thunderbird.net) with many fixes and tweaks that make it easier to work with than the former.
4. Most of my documents are plain text, so a simple text editor like Emacs is sufficient to work with them. However, certain kinds of data are better represented as a spreadsheet, for which I use [LibreOffice](https://www.libreoffice.org) to maintain .ods files.
5. I sync data between my devices and cloud servers on [Linode](https://www.linode.com) through [Syncthing](https://syncthing.net), so nothing goes to the big brother.
6. My password manager is [KeePassXC](https://keepassxc.org), and it also has a Firefox plugin to be able to use it on websites from within LibreWolf. There is a command-line interface as well, but I barely ever use it.

## A Few Other Essential Tools

To make sure I feel at home, there are several more of these:

1. I switched from [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) to [fish](https://fishshell.com) years ago and never went back. I'm not saying it's better than Zsh, but it just works for me with reasonable configuration alongside Bash.
2. [ripgrep](https://github.com/BurntSushi/ripgrep) is an excellent text searcher, and [fd](https://github.com/sharkdp/fd) is an excellent file searcher. I'm still not totally into [awk](https://linux.die.net/man/1/awk), [sed](https://www.grymoire.com/Unix/Sed.html), and [jq](https://jqlang.org) yet, but I've kept them around for the future.
3. [rxvt](https://rxvt.sourceforge.net) (along with [foot](https://codeberg.org/dnkl/foot), as we'll talk about soon) forms my terminal emulator while in the graphical mode
4. For file-management tasks that I'd rather perform through a graphical interface, I use [Thunar](https://docs.xfce.org/xfce/thunar/start). It's enough for what I need: nothing more, nothing less.
5. I need to make sure the look and feel of my workspaces are consistent and exactly as I want them to be, so I use [Obsidian](https://github.com/madmaxms/theme-obsidian-2) as the GTK theme and icons, [Bibata](https://github.com/ful1e5/Bibata_Cursor) for the cursor, and a few particular fonts.
6. I've also become attached to and reasonably efficient with a lot of open-source digital content creation and multimedia tools like [Krita](https://krita.org) for drawings, [GIMP](https://www.gimp.org) and [Darktable](https://www.darktable.org) for image editing, [Audacity](https://www.audacityteam.org) for audio recording and processing, [OBS](https://obsproject.com) and [Blender](https://www.blender.org) for video, and then your standard [Shotwell](https://shotwell-project.org), [VLC](https://www.videolan.org/vlc), and [mpv](https://mpv.io) for quick runs.
7. Finally, I have a [Fallout](https://fallout.bethesda.net) reference on my [Grub bootloader](https://github.com/shvchk/fallout-grub-theme).

Also, these are just a few examples, and there's definitely more than that in there that would be very difficult to cover.

## Dual Setup

I have two identical graphical environments in my setup. I had been using [i3wm](https://i3wm.org) on [Xorg](https://www.x.org/wiki) as the manual tiling window manager, and recently, thanks to older and weaker machines like the [ThinkPad X61s](https://lenovo.fandom.com/wiki/X61s), I finally pushed myself to adopt [swaywm](https://github.com/swaywm/sway) as a [Wayland](https://wayland.freedesktop.org) compositor, and soon started to prefer it over i3wm. Even though I tried to keep my customization as close as possible to the familiar setup, the Wayland ecosystem simply feels much more modern, and what [Waybar](https://github.com/Alexays/Waybar) provides me is much more than [i3status](https://i3wm.org/i3status).

Then if I love swaywm so much, why keep two setups, you'd ask? Until recently, swaywm refused to start on anything running proprietary Nvidia drivers. So I ran i3wm on Xorg on the [ThinkPad X1 Extreme Gen 3](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-extreme-gen-3), [ThinkPad T15g Gen 2](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/thinkpad-t15g-gen-2-(15-inch-intel)), and my [Dell Precision T3600 workstation desktop](https://www.dell.com/support/product-details/en-us/product/precision-t3600/overview). Things have changed recently such that swaywm doesn't reject proprietary Nvidia drivers and GPU. This dual setup felt a little cumbersome at the start, and I'd definitely like to unify it in the future.

## Utility Scripts

The software packages I install, and the way I configure them forms barely half of what makes my setup work so well for me. There are [tens of utility scripts](https://github.com/myTerminal/dotfiles/tree/master/.bin) I've handcrafted over the years that make almost all tasks I do on my computers efficient and effortless. The collection keeps growing and getting better as we speak, and the way I see it, it may end up being a project of its own.

## Cycles of Growth and Shrinkage

My setup, along with the collection of software packages, keeps growing and shrinking in alternate cycles. Growth happens when I find something new to adopt into my workflow, and shrinkage happens periodically when I find myself not using a software. A challenge that I face with this is making sure the changes that I make are replicated on all systems to provide a consistent computing experience. I've been brainstorming on a system that would allow me to "sync" these changes across machines, but nothing has materialized at the time of this writing.

## How It's Perfect

My current setup is perfect, at least in most ways, such that I have absolute control over functionality, visuals, and everything in between. It's more or less a minimal installation of Void Linux with a lot of heavy customization, making the system mine. This may also mean that, even if I switch to a different Linux distro (I realize it's been a while since I did that), much of how I get the job done on these machines would remain largely unaffected.

## Why I Think It Could Be Better

I wish I could run the same window manager or compositor across all machines, that would:

1. Help me further unify my computing experience
2. Drop significant duplication in config files
3. Keep my setup lean for future changes

Whenever I get something like that in place, it would most likely be running a Wayland compositor on all my machines, regardless of the hardware. My stretch goal would be to find a compositor that is a [dynamic tiling window manager](https://en.wikipedia.org/wiki/Tiling_window_manager#Dynamic_window_manager), and I'm very positive about it, looking at a few tools out there.

## Conclusion

So, that is the computing setup that fits me like a glove, across all my machines, which didn't come into existence at all once, but piece by piece over the past several years.
