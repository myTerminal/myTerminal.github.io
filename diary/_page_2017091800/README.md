# My Personal Workstation Configuration (as of 2017)

There's a limited set of software that I use on my computer and like data, I'm very particular of what software resides on my hard-drive. Since about in 2013, when I switched from Windows to the wide-open universe of Linux, the way I get software has changed a lot and that in some way has changed the software I use on my computer. I used executable setup files to install software back then and switched to the much cleaner and programmatic [apt](https://wiki.debian.org/Apt) in my first [Ubuntu](https://www.ubuntu.com) Linux, later to [dnf](http://dnf.baseurl.org) on [Fedora](https://getfedora.org) and currently am using [home-brew](https://brew.sh) on my Mac.

Being able to install software programmatically also helps me at what I care the most about my system: how quickly and effortlessly can I restore my system or replicate it on another system, just in case of trouble.

You can see how minimal my system setup is at [https://github.com/myTerminal/dotfiles/blob/master/.scripts/mac/setup.sh]().

# The Window Manager

Over last few years, I tried various Linux distributions like Ubuntu, [Linux Mint](https://www.linuxmint.com), [Debian](https://www.debian.org), [NetRunner](https://www.netrunner.com), [KUbuntu](https://kubuntu.org), [XUbuntu](https://xubuntu.org), [LUbuntu](http://lubuntu.me), [Korora](https://kororaproject.org), [Zorin OS](https://zorinos.com), [openSUSE](https://www.opensuse.org), [Fedora](https://getfedora.org), etc. and a bunch of desktop environments like [Gnome 2.x](https://help.gnome.org/misc/release-notes/2.0), [Gnome Shell](https://www.gnome.org/gnome-3), [Unity](https://www.ubuntu.com/desktop), [KDE](https://www.kde.org), [Cinnamon](https://github.com/linuxmint/Cinnamon), [LXDE](http://lxde.org), [XFCE](https://xfce.org), [Mate](https://mate-desktop.org), [Enlightenment](https://www.enlightenment.org), [Pantheon](https://wiki.archlinux.org/index.php/Pantheon), [i3wm](https://i3wm.org) and a few other variants that I cannot remember.

I settled for i3wm as a tiling window manager on my Fedora, without a need for a desktop environment and the need of using a mouse except for while using graphical applications. I still remember the moment when I just gave my mouse a break.

Mac OS Sierra offers a decent default desktop environment to work with, where spotlight and spaces smoothly replace my far too geeky d-menu and workspaces in i3wm, but if I were to ever go back, i3wm on Fedora will be my obvious choice.

# Google Chome

[Google Chrome](https://www.google.com/chrome/browser/desktop/index.html) (and [Chromium](https://www.chromium.org)) has been the only web browser that I have been using since I’ve stepped into the world of open technologies like HTML, CSS, JavaScript and their other web-oriented associates. From a person who just browsed MSDN pages over the web with [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer), I turned into a *web-developer* who used Google Chrome extensively and never looked back at the Internet Explorer. I see a shift there, from being a Microsoft indoctrinated fan to an aware individual who could see things beyond Microsoft Windows and its defaults.

Today, I spend most of the time on my computer reading posts on the internet, looking at others’ code on [GitHub](https://github.com), watching videos on [YouTube](https://www.youtube.com), etc.

In Fedora, all you need to get Google Chrome is

    dnf install google-chrome

On my Mac I do

    brew cask install google-chrome

# Emacs

I got introduced to [Emacs](https://www.gnu.org/software/emacs) in 2012 and I started using it in 2013 and it has been my only way to work with text on a computer. Unless needed by a project, I could stay within Emacs for all my tasks even at work, due to which I never got a chance to explore a few other text-editors that I found interesting, for instance: the [Atom editor](https://atom.io).

Since the last few years, I have been so infatuated with Emacs, I managed to write [numerous extensions](https://marmalade-repo.org/profile/myTerminal) and created a couple of ‘mini’ starter packs: [super-emacs](https://github.com/myTerminal/super-emacs) and [ample-emacs](https://github.com/myTerminal/ample-emacs). I am also proud of my [Emacs configuration](https://github.com/myTerminal/dotfiles/tree/master/.emacs.d) on GitHub.

On Fedora, I installed Emacs with

    dnf install emacs

On my Mac, unfortunately, it is a manual step of downloading a setup file from [https://emacsformacosx.com](https://emacsformacosx.com) as there are a lot of different flavors available and this is the one that I found closest to what I need. The one available through the command line was a terminal-only version of Emacs at the time of this writing.

# Finder

I tried a lot of different graphical file managers on Linux and I settled down on one of the most simplistic ones: [pcmanfm](https://en.wikipedia.org/wiki/PCMan_File_Manager). It is a plain simple file manager with all the basic features one would look for in a file manager with a few added ones. On my Mac, it is replaced by Finder, which is the built-in file manager for the Macintosh operating system. It is a default, yes, but it does the job well enough to be not replaced at the moment.

# Terminal

This is another default that I am tied to on the Mac. I have installed [iterm2](https://www.iterm2.com), as it is known to be better than the former but have never spent the time to explore it, at least as much as I would before switching to it entirely. Besides, the default terminal works well with the window manager on Mac so I do not feel an immediate need for improvement there. On Fedora, it used to be [terminology](https://github.com/billiob/terminology), a very light-weight and theme-able command line, one of the best and most easily available terminals available on Linux.

# Clementine

I came across [Clementine](https://www.clementine-player.org) on Linux quite a few years ago and with iTunes on Mac already, I still use Clementine for music. Surely it does not look that good on a Mac screen with so many pixels to draw, but it still does the job with all fade-ins and fade-outs working perfectly by default, unlike Linux where I had to install [gstreamer](https://gstreamer.freedesktop.org) backend on some distributions for it to work correctly.

Besides, I do not like the idea of requiring twice as space for my music on my space-precious SSD because iTunes does not like working with my music right away but likes to import them all and waste a lot of precious space which otherwise I would prefer to keep free.

On Fedora, one can install Clementine with

    dnf install clementine

On Mac, I installed it as

    brew cask install clementine

# Steam

Since I do not have a Windows-based PC to play games right now, I prefer to have a package manager for my games too. [Steam](http://store.steampowered.com) seems to do the job well, with almost all the games I need already present in the Store. Back there with my Linux system, I used to have a separate hard-drive partition to run Windows with Steam installed, which is something that I do not need anymore. I like to keep Windows out of my Macintosh hard-drive even for gaming.

On Fedora, installing Steam was as simple as

    dnf install steam

provided you have added [RPM Fusion repositories](https://rpmfusion.org/) first.

On Mac, I installed it as

    brew cask install steam
