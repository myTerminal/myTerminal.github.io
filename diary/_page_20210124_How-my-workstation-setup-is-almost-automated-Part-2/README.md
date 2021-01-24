# How my workstation setup is "almost" automated - Part 2

> This article is a transcript of a video that you can watch by clicking the below thumbnail. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/fa0zt2ouFIQ/hq720.jpg](https://i.ytimg.com/vi/fa0zt2ouFIQ/hq720.jpg)](https://youtu.be/fa0zt2ouFIQ)

## Previously...

In the previous video, we talked about how I got tired of re-configuring my computers manually, got lazy, and wrote some scripts to perform most of it in an automated way. If you haven't watched the previous video, I highly recommend watching it first, as if you don't have the context, you most probably may not be able to appreciate the demo we're about to see in a moment.

If you already have the context, which was quite a lot of theory, let's finally see some action.

## The Linux Distribution we'll use

My primary Linux distribution for quite a long time has been [Arch](https://archlinux.org), and that is the one we'll install during the demo today.

The base (or vanilla) Arch does not come with the regular graphical installer that most of us are familiar with. Instead, the entire installation happens within a command-line terminal and involves typing a lot of commands manually. [Arch documentation](https://wiki.archlinux.org) is enormous for almost everything and hence they have a pretty detailed page dedicated for installation as well, which you can find [here](https://wiki.archlinux.org/index.php/Installation_guide). After I successfully installed Arch for the first time on my [Dell desktop](https://www.ebay.com/itm/Dell-Precision-T3600-8-Core-2-60GHz-E5-2670-Wholesale-Custom-To-Order-No-OS/382071287250), I created a couple of personal notes as [Gists on GitHub](https://gist.github.com/discover) for my own reference. You can find them [here](https://gist.github.com/myTerminal/cdeb61cbc7f4b4e4a5cf6a60ab7021a2) and [here](https://gist.github.com/myTerminal/f8723f30661296c1b6f9d04bb201a4c4), each of them being for a very specific computer. Obviously, both of these links are mentioned in the description. They're mostly based around the steps mentioned in Arch's official setup guide, and though you should rather refer to the official material, it can serve as an example for quick reference, just in case.

One other thing about this basic Arch setup is that you need to install and configure many more things according to your preferences, all by yourself. Though I like to do it this way so that I have the most control over how I set up my Linux, not everyone would want to go through this lengthy and arguably difficult process. So, if instead of a basic system, you're looking for a ready-to-use out-of-the-box system that is still Arch, you can install one of the Linux distributions based on Arch, and there are plenty of them, just like there are so many of them based on [Debian](https://www.debian.org) and [Ubuntu](https://ubuntu.com). When speaking of Arch-based distributions, you cannot miss mentioning [Manjaro](https://manjaro.org) as it's one of the best Arch-based Linux distributions out there and it comes with a range of official and community editions for you to choose from. Installing one of these Arch-based distributions is way easier as they come with the familiar graphical installer, which is often the [Calamares](https://calamares.io) installer.

Now, these two options are at the two opposite ends of the spectrum, and just in case if you need something in between, which is as close as possible to vanilla Arch and also comes with a graphical installer, you can use something like [ArcoLinux](https://arcolinux.info), my favorite Arch-based distribution, which was in fact my entry point to the Arch ecosystem. We'll use ArcoLinux for the demo.

## The virtualization tool

For obvious reasons, I won't re-install the operating system on my machine for the demo, and it's not feasible to record the screen while doing so either, so we'll do it in a virtual machine, which is probably the best-suited way to run such experiments. First of all, you don't have to make changes to your computer and you can still get a feel of the new operating system in a sandbox totally separate from the host computer. The best part is that any mistake that might happen during the process doesn't cost you hours (or days) to get back to where you started from.

[VirtualBox](https://www.virtualbox.org) is a pretty popular virtualization solution and has been the one that I've been using on my computers for several years as well. However, we'll use a new tool for this demo, it's called [Gnome Boxes](https://help.gnome.org/users/gnome-boxes/stable). Gnome Boxes is an easy and modern way of running virtual machines without much configuration. Back when I tried it for the first time, I felt strongly obligated to give it a shout-out on Mastodon and another user replied to my Toot saying [Boxes creates a VM as easy as a picture viewer opens a picture](https://linuxrocks.online/@myTerminal/105019377701406047). That tells you how easy it is to use. I also didn't know one can right-click on an ISO file and create a virtual machine: that's cute!

## Demo: A quick Arco install

The first step for almost all operating system installations is [downloading an ISO](https://arcolinux.info/download), mostly from the official website for that Linux distribution and that's exactly where we'll start the process. We'll download ArcoLinuxD, which is the only one among the three that can help us achieve a minimal install that we can work on. Though Gnome Boxes allows you to choose a distribution and it automatically downloads it for you from the web, I like to do it the old-school way such that I supply the ISO for my virtual machine.

So I choose to create a new virtual machine, provide it with the ISO to use, specify the template as "Arch Linux" and proceed with the suggested default. Just like I said, it was so easy to create a virtual machine with minimal prompts and questions.

For this video, I'll rush through a minimal installation of ArcoLinux where I unselect every possible checkbox, choose automatic partitioning which I never do on my main machine, and create a root user. This makes sure we have the cleanest possible installation that still works as we'll be installing all that we need in the upcoming steps. Let me fast-forward this so that we can save some time. Once the installation is complete, we reboot into our fresh system.

## Demo: What we have on the first startup

On the first login, as expected, we find a minimal installation of ArcoLinux (basically Arch) that'll start on the command prompt.

## Demo: Next steps at a glance

Now that we have a running Linux system, we can bring in my custom setup scripts and set up the rest of the system with a little help from [twiner](https://github.com/myterminal/twiner).

All that we need for this step resides under [here](https://github.com/myTerminal/dotfiles/tree/master/.setup) and fortunately, with all the scripts arranged as an independent Bash program, we'll only be running a single command and the scripts will take care of the rest for us.

After the process is complete, we'll have a system that will very closely resemble my primary Linux installation, in fact, the system I've recorded this video on, with very little left to do manually, most of which would be mundane things like logging into my [Firefox](https://www.mozilla.org/en-US/firefox) to sync my account and settings, and a few things here and there.

## Demo: Starting my automated setup

Back when I first implemented [a setup script](https://github.com/myTerminal/dotfiles/blob/20049c76ee6832dcd6635d0b1b36a632d853bb9a/.scripts/setup.sh) in my dotfiles, getting it onto my new computer involved multiple steps. Not that the steps were very complicated in any way, but they had to be all typed manually.

So I created [a single script](https://github.com/myTerminal/dotfiles/blob/master/.setup/bootstrap) with all those commands that just manages to take care of everything: cloning my dotfiles as a local workspace on the target computer, and then starting the setup. The scripts are in no way perfect, but at least they work every single time.

Once the script is in place, I now just have to start it all with only [a single command](https://github.com/myTerminal/dotfiles#note-for-my-future-self). Though this command is still not short enough, I think one command is still better than seven. So I start the process by typing it in the terminal and hitting 'Enter'.

## Demo: Detection of the current operating system

Apart from fetching *twiner* and loading it as a dependency, the first step in my scripts is to detect the running operating system. As I've mentioned earlier, the setup at present only supports Arch and [macOS](https://www.apple.com/macos/big-sur), when either of them is found, scripts for the appropriate one are loaded and run.

For this video, we'll only look at the sequence of steps for setting up my workstation on Arch. The steps for macOS are pretty much the same with a few minor differences here and there, but that could probably be for another video.

If the operating system is found to be outside the two this thing has been programmed for, the setup quits with a message right as you expect.

## Demo: Initial steps for Linux

The first step for Arch is setting up the machine [hostname](https://en.wikipedia.org/wiki/Hostname) so if I choose to do it, I can enter a hostname to use.

The only next step before we start installing the required packages is creating users. As we've already created a user for me during the actual ArcoLinux installation, we can safely skip this step.

## Demo: Installing packages

The steps for installing the packages that constitute my daily workflow in Arch starts with first installing [yay](https://github.com/Jguer/yay), which is one of the best helper tools out there to ease up the installation of packages from the [AUR](https://aur.archlinux.org). Once `yay` is installed, the setup first installs packages from the official archives through `pacman` and then installs the rest from the AUR through `yay`.

This step is the one where we'll have to wait for the most, so I'll fast-forward it as well.

## Demo: A few more steps for Linux

We take care of a few more steps before we start setting up the GUI. One of them is switching the default user shell to [fish-shell](https://fishshell.com). This step is still not totally automated, and I have to do some typing here.

## Demo: Setting up the GUI

The step where we configure our graphical environment is pretty lengthy on its own self. For this very reason, I've planned a separate video to cover this in detail. To be as concise as I can be, this step installs [XServer](https://www.x.org/wiki/XServer) as a [display server](https://en.wikipedia.org/wiki/Display_server), prompts for installation of graphic drivers from a small list of options, installs a [display manager](https://wiki.archlinux.org/index.php/Display_manager) (also through a prompt) and then finally prompts for installation of a graphical environment from a reasonably long list of [desktop environments](https://en.wikipedia.org/wiki/Desktop_environment) and [window managers](https://en.wikipedia.org/wiki/Window_manager).

Let me fast-forward the video for this step as well.

## Demo: Installing peripheral drivers

Next, we install drivers for my peripheral devices, which at this point is only one: my [Razer Ornata Chroma](https://www.razer.com/gaming-keyboards/razer-ornata-chroma/RZ03-02040100-R3M1) keyboard that I never use outside of my desktop.

## Demo: Setting up startup services

Then I set up startup services, the first one of them is [Syncthing](https://syncthing.net) (my local cloud) and then there's [network-manager](https://wiki.archlinux.org/index.php/NetworkManager) service so that I can connect to wireless networks on Arch.

## Demo: A few platform-independent steps

After the completion of the platform-specific steps, there are a few more platform-independent steps. I'll skip all of these for the video.

1. We can generate an [SSH key](https://wiki.archlinux.org/index.php/SSH_keys) for the device
2. Then we can install all global [NPM](https://www.npmjs.com) packages for my daily use
3. Then comes one of the most important pieces of my setup: [my public projects on GitHub](https://github.com/myTerminal?tab=repositories&q=&type=source). We can use the previously installed NPM package [git-getter](https://www.npmjs.com/package/git-getter) to clone all of my projects utilizing the SSH key we generated in the previous step. This is currently broken unless the previously generated SSH key is already added to my GitHub account and that's pretty much impossible before I could start a web-browser on this computer and add the key.
4. Finally, I take care of a few more minor steps around my [Emacs](https://www.gnu.org/software/emacs) configuration which includes creating a fallback Emacs directory in case [XDG config directory](https://wiki.archlinux.org/index.php/XDG_user_directories) is not supported on the installed Emacs, and then linking my configs as a default config to my dotfiles. Don't worry if you don't really get what these last steps mean, you can safely ignore them thinking that they're too specific to my personal setup.

## Demo: Reboot on done

This concludes the setup with a simple reboot.

And there we have a Gnome shell login where I choose my preferred environment and log in. So we made it!

## More computer-specific scripts

If I run this setup on a generic computer, I can consider the setup complete at this point. However, there could be a few more steps to make sure my setup can utilize the hardware I'm running it on. Speaking of specific hardware, a great example can be my new [Lenovo ThinkPad X1 Extreme (Gen 3)](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0). I have [a reasonably lengthy script](https://github.com/myTerminal/dotfiles/blob/master/.scripts/linux/mt-excelsior-setup) dedicated for the particular device, specific to an Arch install that takes care of the gaps for that particular hardware. As I've already mentioned in my video about how I configured my ThinkPad for Arch, it takes care of a lot of things like setting up the right DPI for the 4K screen, sets up hybrid graphics with [Nvidia Optimus](https://wiki.archlinux.org/index.php/NVIDIA_Optimus), fixes audio issues, enables some basic power-saving, etc. This is another of those things that are still under development, but at this point, it already makes the computer much more usable than it would be otherwise without these additional steps.

This script resides with [a bunch of other scripts I keep in my dotfiles](https://github.com/myTerminal/dotfiles/tree/master/.scripts) for a few other purposes and is also added to my `$PATH` so that I can invoke it without referring to its physical location. Not that it adds any value, but why not?

## Thoughts

So as we saw, setting up a new workstation doesn't take a lot of manual effort anymore. Most of these steps are also made optional through prompts so testing a particular part of the setup on a temporary system is also pretty simple as I can perform only what I want and skip the rest. One other thing to note is that these scripts keep improving over time and what I demoed today is just a representation of its state at the time of this video.

One challenge to maintaining all this code is to watch for the things that keep breaking with the changing nature of the underlying dependencies including Linux. One way to make sure there's nothing broken is to run the entire script end-to-end every few weeks, finding out what all is broken, and fixing it. What I demoed today might look close to perfect, but the more I improve it, the more it feels lacking. I guess that's a good thing as there's no limit on how much one can learn and hence, implement new stuff as well.

There's still so much to improve and as [Professor Harold Abelson](https://en.wikipedia.org/wiki/Hal_Abelson) once rightly said, "...the constraints imposed in building large software systems are the limitations of our own minds". Though my scripts aren't nearly as big as what [he referred to back in 1986](https://www.youtube.com/watch?v=-J_xL4IGhJA), you get the point.

## Conclusion

That's all that I have for this video, so let me know if you liked this video through either the Like/Unlike buttons or through your thoughts, feedback, and ideas in the comments. Thanks for watching it till the end, may the maker watch over you, see you in the next video!

