# Linux is Full of Opinions - Part 1: Early Choices

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/SZokbWrVYVk/hq720.jpg](https://i.ytimg.com/vi/SZokbWrVYVk/hq720.jpg)](https://youtu.be/SZokbWrVYVk)

One thing I've seen over the years with [Linux](https://www.linux.org) is opinions, I mean [a lot of different opinions](https://www.reddit.com/r/linuxmasterrace). I think this naturally comes from the fact that the [open-source community](https://github.com) is decentralized in a way that each and every one of us is free to solve the same problem in different ways. So I thought how about I talk about [a few opinions](https://www.heiko-sieger.info/why-linux-sucks) (and hence choices) I came across during my time with Linux till now, which is exactly what we'll do in this video.

## A quick note

Talking about these tools publicly is dangerous. Many people from the community often get upset and offended when something they use or love is being criticized. A very good example is [one of my earlier videos that was about me moving from Arch](https://www.youtube.com/watch?v=Vjue3qFEFrg) where I received plenty of fire. Let's not take this video the wrong way and instead just use it to discuss the choices we as users have to make depending on either our use-case or workflow or our own personal preferences.

Also, let's remember we're not saying that a particular choice is bad, but instead accepting it as an opinion of others in our community.

## Another note

I may not be the best person to talk about these tools, as I'm sure most of us have been with Linux for way longer than I have. So, I tried my best to talk about the choices and opinions that I personally came across, and the ones I could talk about and get into the least trouble possible. Having said that, please be gentle in the comments. :smiley:

## Yet another note

Most of these choices are not just limited to Linux but are also applicable to other [UNIX-like platforms](https://en.wikipedia.org/wiki/Unix-like) like the [BSDs](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) and [macOS](https://www.apple.com/macos). I'll just talk about these in the context of Linux, as apart from macOS, I don't have experience with other UNIX-like operating systems, at least till the date I recorded this video.

## How these choices are sorted

I tried to put these choices in a sequence such that we start the list with the ones that a new Linux user comes across in their earlier days with Linux and then slowly moving towards the ones that they eventually come across after gaining some experience with Linux.

Also, given the large number of choices I could list down while making this video, I divided the list into two, to have two smaller videos instead of a lengthy one, so instead of wasting any more time, let's start with the list.

## Choices

### 1. Ubuntu or Arch (or others)

The first one is probably the most common and difficult one, especially for [new Linux users](https://techunwrapped.com/choose-well-the-linux-distro-that-best-suits-your-needs) coming from platforms like [Windows](https://www.microsoft.com/en-us/windows) or [Mac](http://www.apple.com/macos) where things have been chosen on behalf of the user. Here they have to start with [choosing a Linux distro](https://i.redd.it/w1tlagn1u3071.png) first. Also, as it goes without saying, it's not just about [Ubuntu](https://ubuntu.com) and [Arch](https://archlinux.org), which I definitely just used as an example, and instead, we're talking about [hundreds of Linux distributions](https://distrowatch.com) to choose from. The last time I checked on [DistroTest.net](https://distrotest.net), they had 357 distributions. Let's not forget that almost each of these distros has at least a few variants.

It is often believed that Ubuntu is the best suited for newbies and Arch is for the most elite of Linux users. The first isn't true as I've personally experienced distros that are easier to use than Ubuntu some of them being [Linux Mint](https://www.linuxmint.com), [Elementary OS](https://elementary.io), [Zorin OS](https://zorinos.com), [Solus](https://getsol.us), [Pop!_OS](https://pop.system76.com), etc. which is obviously only a few out of many. Also, on the other hand, (and I know I'll receive a lot of fire for saying this, but) Arch isn't the most sophisticated and difficult to use distro out there, ask [Gentoo](https://www.gentoo.org) users, for example, not saying that using Gentoo makes you superior to Ubuntu users either. If you ask me, at the end of the day, Linux is just a tool, and it doesn't matter which distro you use, but instead what does matter is what you use it for. Just installing a distro to post its [`neofetch`](https://github.com/dylanaraps/neofetch) result over [Reddit](https://www.reddit.com/search/?q=i%20use%20arch%20btw) doesn't make anyone better than the rest of us, though I'd agree that it's fun on a personal level.

### 2. DEs or WMs

One could either go with a fully-featured [Desktop Environment](https://en.wikipedia.org/wiki/Desktop_environment) (which is often bloated with software that one may not use) or go lean with a minimalistic [Window Manager](https://wiki.archlinux.org/title/Window_manager) to have just enough packages installed to be able to work with graphical applications. As it goes with pretty much all other choices in Linux, this is just a matter of opinion and preference, and neither of them is objectively a wrong answer. The best part is that choices don't end here, as there isn't just a single DE and a single WM, but instead, there are [at least tens](http://www.xwinman.org).

Not to forget ones among us who like working from the [command-line](https://www.computerhope.com/jargon/c/commandi.htm) and only start a windowing system when really needed. I'm sure some of us don't even start a graphical environment, even for web browsing.

When running a lean setup, you often have to choose what software to use for a particular use case. In Linux, you'll almost never find a situation where you don't find some software to be able to do something on your computer, but the case is exactly the opposite. I love discovering new (and arguably better) alternatives to software that I already use, and also love spending time comparing computer software. For people who don't find this activity that exciting, there are always these Desktop Environments often coming with their own set of software effectively making your computer complete without you having to hunt for software or deciding between two or more options.

### 3. Stacking WMs or Tiling WMs

Whether you like to arrange windows on your screen manually or have them arranged automatically so that they take as much space as they can, that also is a personal choice. Some people like using a window manager of their choice even while using a desktop environment, which not only shows how particular some of us can get but also what all is possible in Linux, which isn't even a thing for operating systems like Windows.

[Stacking window managers](https://en.wikipedia.org/wiki/Stacking_window_manager) stack windows one over the other, while [Tiling window managers](https://en.wikipedia.org/wiki/Tiling_window_manager) just keep splitting the screen as new windows appear such that no screen space is wasted and you can work without needing to worry about the placement of open windows.

### 4. Rolling release or Point release

Linux distributions come in two general forms: a [rolling release](https://en.wikipedia.org/wiki/Rolling_release) and a [point release](https://en.wikipedia.org/wiki/Point_release). A rolling release is one that you install once and then keep getting updates forever. Point releases follow a different approach by assigning a version number to a release such that a numbered release doesn't receive updates beyond a certain point except for security-related updates.

One isn't necessarily better than the other, but in general, point releases focus more on stability (for example [Debian](https://www.debian.org), Ubuntu, Linux Mint, [Fedora](https://getfedora.org), etc.), whereas rolling releases focus more on latest software (for example Arch, [Manjaro](https://manjaro.org), Gentoo, etc.).

### 5. Snap or Flatpak or AppImage (or source compile)

[Cross-platform package managers](https://linuxhint.com/snap_vs_flatpak_vs_appimage) are a blessing for Linux. You just have to install the respective package manager on a Linux distribution it's available on and you'll have access to all the software packages contained on their repos. Once you do this, you won't have to worry about [a particular package not being available](https://packages.debian.org/search?keywords=keybase&searchon=names&suite=buster&section=all) for your Linux distro.

Sounds cool right? Actually, there's the same problem as we have with everything else in Linux: there are multiple options to choose from.

Some people like [Snap](https://snapcraft.io) while others prefer [Flatpak](https://flatpak.org). I've used both on the same system as the packages I find on one aren't available on the other. Speaking of Snap and Flatpak, there's also [AppImage](https://appimage.org), which follows a very different approach by shipping self-contained executable binaries instead of serving them through a package manager.

### 6. Vim or Emacs

If your workflow involves working with text, be it software development or writing, or else, you may have heard about [Vim or Emacs](https://cmd.com/blog/vim-or-emacs-the-debate-is-over) or both. While most of us use relatively newer software like the [VS Code](https://code.visualstudio.com), there are plenty of people who even today use [these ancient marvels of computer software](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs). Both of these take different approaches to achieve the same result, and no matter which one you choose, you won't be wrong. Personally, I've been stuck with Emacs [since 2014](https://github.com/myterminal/.emacs.d), but that's my preference and yours may be different. I do know [Vim](https://www.vim.org) just enough to get around, but I've decided to spend time on only one of the two as a daily driver, and that happens to be Emacs.

### 7. VirtualBox or Virt-Manager

[VirtualBox](https://www.virtualbox.org) is a pretty old virtualization software currently owned by [Oracle](https://www.oracle.com) and has been the one most of us are familiar with. The alternative that many of us aren't aware of is [Virt-Manager](https://virt-manager.org), developed by [RedHat](https://www.redhat.com) which has had its first stable release fairly recently. I have used both on my computers, and according to experience with the two, though I'm a little more comfortable with VirtualBox, I prefer Virt-Manager for its features and performance. Again, this is my personal preference and you may think otherwise.

### 8. Bash or Zsh vs Fish

For most of us, at least in our early days of computing, especially with Linux, all [command-line terminals](https://itsfoss.com/linux-terminal-emulators) are the same. However, the way we can switch the software that runs a terminal (aka Terminal Emulators), one can also change the [shell](https://www.tutorialspoint.com/unix/unix-what-is-shell.htm), which is the interface that the user works with. Once you look beyond the default shell, which in most distributions is [Bash](https://www.gnu.org/software/bash), there are several options to choose from. [Zsh](https://zsh.sourceforge.io) and [Fish](https://fishshell.com) are two of the most popular ones out there. Though either can be used as the shell for our daily work, Fish shell [isn't a POSIX compliant shell](https://wiki.archlinux.org/title/Fish), which means that it doesn't really comply with the UNIX shell standards, whereas Zsh is a fully POSIX compliant shell to the point that a lot of Linux distros have started shipping with Zsh as their default instead of Bash. On the other side of the wall, even [macOS has switched from Bash to Zsh](https://www.theverge.com/2019/6/4/18651872/apple-macos-catalina-zsh-bash-shell-replacement-features) as its default shell starting with macOS Catalina.

Personally, [I work with Fish as my default shell](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/common/tasks), and still [write my scripts in Bash](https://github.com/myTerminal/dotfiles/blob/master/.setup/start). I know Zsh is amazing, but I haven't had the time to explore it yet.

## Up next

So, those were the only choices I wanted to talk about in this first video about choices and opinions in Linux. I might have missed a lot of them, so feel free to bring those up in the comments. In fact, newer members of the community may be able to point us to a few choices that the rest of us don't realize.

Also, as I mentioned during the start of this video, we only talked about one-half of the choices I had planned for and the other half will be covered in the next video. It's highly likely that the ones you mention in the comments may already be planned for the next video.
