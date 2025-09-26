# Setting up GUI on Linux

> This article is a transcript of a video that you can watch by clicking the below thumbnail. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/lHI4pBB2tI4/hq720.jpg](https://i.ytimg.com/vi/lHI4pBB2tI4/hq720.jpg)](https://youtu.be/lHI4pBB2tI4)

## Previously...

In [the previous video](https://www.youtube.com/watch?v=fa0zt2ouFIQ), we saw how I built my workstation setup scripts using [twiner](https://github.com/myterminal/twiner) as a library of [Bash](https://www.gnu.org/software/bash) functions. The other way you can use *twiner*, as I mentioned earlier is to run it as a standalone Bash program.

If you haven't watched the previous video, you can watch it to get the context and the story behind *twiner*. Though there's no such recommended sequence to watch these videos, the demo in the previous one was arguably a little more eventful. That's not to say this one's not interesting though, so let's take another look at *twiner*, from a different angle.

## Thoughts on setting up a custom GUI

When you're a new Linux user, it's very easy to get into the impression that [Ubuntu](https://ubuntu.com) looks a certain way, [Lubuntu](https://lubuntu.net) looks some other way, and likewise. Linux isn't like that, it's about choices so that you can install virtually any Linux distribution and set it up to run virtually any graphical environment with only a few commands. There are obvious exceptions like not being able to run [Pantheon](https://en.wikipedia.org/wiki/Elementary_OS) on an Arch-based distro, something that I've tried and failed multiple times.

I remember the enlightening moment when my brother showed me that one can install a different graphical environment on a distro that came with a different one. But when I learned that you can also change the graphical login screen (which is the [display manager](https://en.wikipedia.org/wiki/X_display_manager)) on a Linux installation, that was a total game-changer, such that I didn't have to be limited with [LightDM](https://en.wikipedia.org/wiki/LightDM) on [LXQT](https://lxqt-project.org) and other such light-weight distros.

One of the major parts of *twiner* is about choosing the graphical environment of your liking, and that's exactly what we'll look at in this video.

## Starting *twiner* as a program

Once you have *twiner* cloned on your local workspace, you can start it by running `start` at the root of the project. *twiner* starts with a menu of tasks to choose from. Once a selection is made, appropriate scripts are run, and then you're returned to the menu where you started from.

You can run *twiner* in three modes. Running `start` with no parameters will run it in regular mode. Passing in `debug` and running it like `start debug` will run *twiner* in debug mode, where it will also echo the commands it runs as a part of its steps. The last mode is `simulate`, which as the name suggests is a mere simulation, so running it as `start simulate` and will not make any changes to the system but only echo the commands that would have otherwise run.

## A quick look at the options

Out of the eight tasks that have been implemented in *twiner* at the point of this video, we've already seen most of them in action in the video about setting up my workstation. The ones towards the top of the list are pretty basic and also, for the scope of this video, we'll only look at the tasks related to setting up a GUI.

Also, like I said a few tasks being pretty basic, even the task that mentions adding additional software sources is nothing much really. On [Arch](https://archlinux.org), it almost only installs an [AUR](https://aur.archlinux.org) helper, on [Fedora](https://getfedora.org) it installs [Fusion repositories](https://rpmfusion.org), and on [Ubuntu](https://ubuntu.com), it simply updates the system. In the future, we can have it set up [snap](https://snapcraft.io), [flatpak](https://flatpak.org) and [AppImage](https://appimage.org) as a few additional ways of adding software to a computer.

Finally, you can also see two tasks marked as suggested as *twiner* can detect that these steps have not been performed on this system yet.

## Task: Setting up GUI

The task for setting up GUI in turn depends on the next two tasks in the list. It by itself takes care of installing a [display server](https://en.wikipedia.org/wiki/Display_server) and a [graphics driver](https://en.wikipedia.org/wiki/Intel_Graphics_Technology) and then internally executes the next two tasks for installing a [display manager](https://wiki.archlinux.org/index.php/Display_manager) and a graphical environment where you can choose from a list of [desktop environments](https://en.wikipedia.org/wiki/Desktop_environment) and [window managers](https://en.wikipedia.org/wiki/Window_manager).

## Demo: Setting up Gnome with GDM

One possible quickest demo for setting up a GUI could be starting from a bare-bones setup like the one we used in the last video. So if we run this task on a minimal [ArcoLinux](https://arcolinux.info) installation, we're taken through a couple of prompts. A lot of parts of this video will be fast-forwarded to save time, but don't worry as we won't miss any important action.

Hitting 'G' first installs [Xorg](https://www.x.org) and then soon asks us to choose a graphics driver to use. Let me choose [Intel](https://en.wikipedia.org/wiki/Intel) for this video.

After Intel driver is installed, it's time to install a display manager. At this point, *twiner* only provides a choice of two options. Let us choose [GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager) for this demo.

Next and the final step is to install a graphical environment. I've placed a bunch of desktop environments and window managers in the list and you can mix and match almost any of these with any of the display managers you installed in the last step. Let us choose [Gnome shell](https://github.com/GNOME/gnome-shell).

After the process is complete, you're brought back to the menu as mentioned before. Let us quit *twiner* and restart the system. You can see a graphical login screen and also login into the Gnome shell.

## Demo: Switching the display manager to SDDM

Let us see how you can change the display manager to a different one. As currently there are only two options in there, and we have GDM already installed, the only other option is [SDDM](https://wiki.archlinux.org/index.php/SDDM). Hitting 'L' shows us the two options and then pressing 'S' does two things: it installs SDDM and then activates it for the next startup.

On the next restart, you can see that the login screen that we see is in fact SDDM.

## Demo: Installing LXDE

Let us now also see how you can install a new desktop environment. Getting back to the menu and hitting 'D' gets me the same list of options we saw earlier. Hitting 'L' installs [LXDE](https://www.lxde.org), and on the next log out, you can see LXDE in the list of available options to login into.

## A few observations on the current setup

You might have noticed that though *twiner* helps you install stuff, it doesn't yet help you uninstall any of it. Though this can be easily added, I haven't spent time thinking about this use-case yet.

You might also have noticed that the choices that *twiner* presents to you are limited. It starts with the assumption that you're looking to set up your graphical desktop with [Xorg](https://www.x.org/wiki) and doesn't even mention [Wayland](https://wayland.freedesktop.org). Part of this can be justified that if you're the person who's looking for Wayland on your computer, there's a high probability that you won't even be needing *twiner* to help you. Also, the choices for graphical environments and especially display servers can be increased, but I've almost only included the ones that I could test install myself and didn't want to include half-broken choices.

## Conclusion

That's all that I have for this video, so let me know if you liked this video through either the Like/Unlike buttons or through your thoughts, feedback, and ideas in the comments. You can also choose to subscribe to show me your support and encourage me to make more of such videos. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
