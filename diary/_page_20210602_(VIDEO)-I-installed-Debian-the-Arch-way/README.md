# (Why/How) I installed Debian the 'Arch' way

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Certain statements may not make sense in text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/unhRffAGE7w/hq720.jpg](https://i.ytimg.com/vi/unhRffAGE7w/hq720.jpg)](https://youtu.be/unhRffAGE7w)

In the previous video, I talked about [how I entered the Arch ecosystem a couple of years back](https://linuxrocks.online/@myTerminal/104770822315929177) and [recently moved to Debian](https://linuxrocks.online/@myTerminal/106242989709445138). In this video, I'll talk about the approach I took for the migration, and also share my experience and learning from this entire exercise.

## Expectation vs reality

As I've mentioned before how I once failed at installing [Debian on one of my older machines using the text-based installer](https://www.debian.org/releases/wheezy), I didn't expect things to be very different in 2021 either. I was expecting a text-based installer with about a hundred steps, half of which I won't understand or need either.

However, this time I came across more ways to install Debian. I found that, unlike Arch, Debian lets you choose between quite a lot of different kinds of installers including a [graphical live installer](https://www.debian.org/CD/live), [net-install](https://www.debian.org/CD/netinst) ISOs, free and [non-free editions](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware), some [with different desktop environments](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/10.9.0-live+nonfree/amd64/iso-hybrid) right out of the box, [installers for different architectures](https://cdimage.debian.org/debian-cd/current), and many more.

## But...

You must be knowing by now how I've been spoilt about having [a tighter control over my Linux setup](https://gist.github.com/myTerminal/f8723f30661296c1b6f9d04bb201a4c4). After so much, leaving all those important choices to a graphical installer didn't sound right, so I went out there looking for a way to install Debian in a more controlled, or rather difficult way that I'm sure many of us aren't aware of. You can say that I had to earn the ["I use Debian BTW"](https://duckduckgo.com/?q=i+use+debian+btw&t=newext&atb=v273-4&ia=web) badge for myself if there was one for Debian, that is.

## Why it didn't work for me

Leaving choices to a [graphical installer](https://calamares.io) is one thing, but I did realize that I had been getting used to a very particular setup with Arch lately.

A few major requirements are as follows:

1. A [multi-boot](https://www.gnu.org/software/grub/manual/multiboot/multiboot.html) arrangement with at least one secondary Linux for experiments and/or as a backup
2. A [BTRFS](https://en.wikipedia.org/wiki/Btrfs) filesystem with separate subvolumes for `/`, `~`, `/var`, etc. exactly according to the convention I like
3. [LUKS encryption](https://gitlab.com/cryptsetup/cryptsetup) for Linux partitions
4. A dedicated [Linux SWAP partition](https://wiki.archlinux.org/title/Swap) just like the old times even though I don't quite need it on either of my machines with 32GBs and 64GBs of RAM at this point
5. A [Windows](https://www.microsoft.com/en-us/windows) partition at the end of the drive, because why not?

## And then I found `debootstrap`

Thanks to Arch, I knew exactly what to search for on the web. I literally searched ["how to install Debian the 'Arch' way"](https://www.reddit.com/r/debian/comments/dhyzte/debian_installation_the_arch_linux_way) and I wasn't disappointed to learn that there indeed was a way to do it.

I came across [`debootstrap`](https://wiki.debian.org/Debootstrap) and it seemed to be the alternative to [`pacstrap`](https://man.archlinux.org/man/pacstrap.8) from Arch. I also learned that `debootstrap` could also be installed as a package on other Linux systems like Arch and used to install a Debian system on a particular directory on that Linux system, so this was definitely way more than what I was originally looking for.

## One minor shortcoming with Debian

I should admit that this migration probably has to be the longest, most tiring, severely crippling migration I've ever had on my computers. I shouldn't be blaming this on Debian, and of course, I may be wrong here, but really, if one would compare it with Arch, the amount of documentation, tutorials, and examples on the web available for Debian, be it official or community-contributed, is way smaller in number. Yes, in many cases, [Ubuntu tutorials do apply for Debian](https://ubuntu.com/community/debian) with slight changes here and there, so you know you're not entirely walking in the dark. Please don't kill me in the comments. :)

## The path I took, in moderate detail

So this is how I drove it:

1. **Prepared my dotfiles project on GitHub for the new addition to the family**

 As it has happened for the other operating systems before, I started with introducing placeholders for Debian in my [dotfiles](https://github.com/myTerminal/dotfiles), around scripts related to configuration, utility, and setup. I [placed `TODO`s all over the project](https://github.com/myTerminal/dotfiles/compare/a308812cbc8e9d0d2dbe8ed6ac9f515ddb044348..6fd47817265a8d0b75293559058936c758a6a1c5) so that I could later on fill in those gaps without having to worry about keeping a track of those gaps themselves, which is my typical approach to any software that I create.

 This [made sure the scripts were pretty symmetrical](https://github.com/myTerminal/dotfiles/tree/6fd47817265a8d0b75293559058936c758a6a1c5/.setup/linux/packages) for Debian, the way they've been for Arch and MacOS, even before I installed the new system.

2. **Unintentionally nuked the bootloader, multiple times**

 While replanning the partition map and working on cleaning those several [unused UEFI variables from the hardware bootloader](https://software.intel.com/content/www/us/en/develop/articles/unified-extensible-firmware-interface.html), I broke and fixed the bootloader itself, multiple times. I had access to at least Windows for a short while, and then I eventually made the machine entirely unusable by nuking that too.

3. **Re-created the partition table**
 
 Given that the entire thing was now pretty much bricked at this point, I wiped down the entire hard drive, created a fresh [GPT partition table](https://en.wikipedia.org/wiki/GUID_Partition_Table) (which I didn't even do the first time I move the factory-installed Windows to the end of the drive), and created a new (and hopefully) more efficient partition scheme. I had recently come across a scheme where the same BTRFS partition could be used to install multiple Linux distros, so I decided to do that too this time. I'll cover the advantages of this scheme in one of the future videos. So having made this change, now there was a single BTRFS partition alongside the [NTFS](https://docs.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview) for Windows, [FAT32](https://en.wikipedia.org/wiki/File_Allocation_Table) for `boot/efi/esp`, and a Linux SWAP partition.

 I did manage to save a condensed version of my `~` folder and carried it with me all along so that I didn't lose my personal unsynced data from the previous setup.

4. **Installed Windows, a few times**

 I installed Windows first, as always, with [a bootable media](https://support.microsoft.com/en-us/windows/create-installation-media-for-windows-99a58364-8c02-206f-aa6f-40c3b507420d) I created using my wife's Lenovo YOGA. I guess that machine is getting pretty used to doing that now, given how many times I've used it for just this purpose. I did have to repeat this step multiple times, but that was mostly just because of my own mistakes.

5. **Installed Arch the regular way**

 Then I [installed Arch](https://gist.github.com/myTerminal/f8723f30661296c1b6f9d04bb201a4c4) as usual, but this time as the alternate Linux on the new big fat BTRFS partition. I had literally zero issues here, given how fluent I've become with Arch installation by now.

6. **Installed Debian, finally**

 And then finally, it was time to install Debian. You won't be surprised to know, this was the step that took the most amount of time and effort. I'll talk about the issues in just a moment. 

 As it goes without saying, this was in fact my first step before everything else that I mentioned, where I ran installations on [virtual machines](https://www.vmware.com/topics/glossary/content/virtual-machine), tens of times to systematically clear out all potential obstacles I could face during the actual install on the real device. Also, it's pretty easy to guess that even after those tens of trials on virtual machines, I did run into issues on the real machine, even on steps that I wasn't supposed to. So, the number of times I did these installs on the real machine exceeded those I performed on the virtual machines.

 One thing I forgot to mention is that I pointed my installation to [Debian 11 (Bullseye)](https://www.debian.org/releases/testing), which is still under testing. I could've gone with [Debian 10 (Buster)](https://www.debian.org/releases/buster), the stable version, but as I was already going through the process of setting things up, I took a leap of faith and potentially saved some effort on an upgrade in the future.

7. **Installed software packages for the new system**

 The next obvious step was to map software packages to [Debian archives](https://packages.debian.org/search?suite=bullseye&section=all&arch=any&searchon=names&keywords=emacs) instead of Arch. A lot of packages had different names, many were missing, and the rest had to be fetched from either [`snap`](https://snapcraft.io) or [`flatpak`](https://flatpak.org).

8. **Wrote a lot of Bash scripts for machine-specific and machine-independent setup**

 I filled in the gaps for the [Debian version of machine setup scripts](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/tasks/debian), including [the setup script I had earlier dedicated for my ThinkPad-specific quirks and changes](https://github.com/myTerminal/dotfiles/blob/master/.setup/linux/other/debian/excelsior).

## Issues during the install

Let's look at the issues I faced during the installation from a little closer.

As I've mentioned before, Debian provides a separate [non-free ISO](https://cdimage.debian.org/images/unofficial/non-free/images-including-firmware/10.9.0-live+nonfree/amd64/iso-hybrid) for machines with proprietary hardware, my hardware being a very good example. There was no way I could've used an official ISO, and the only non-free ISO I could find was a live one.

1. The [live image that I used](https://cdimage.debian.org/images/unofficial/non-free/images-including-firmware/10.9.0-live+nonfree/amd64/iso-hybrid) wasn't very welcoming. The GUI never showed up, and the command-line interface wasn't able to draw curses well, in the sense it kept on throwing weird-looking characters on the screen. Fortunately, according to the method I planned to use for the installation, I didn't really care about a GUI and all of my steps could be performed from within a command line, except [connecting to my wireless network](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-configuring_ip_networking_with_nmtui). I used an ethernet adapter with my Thunderbolt here and then I was automatically connected to the internet. But, even the [TTY terminal](https://www.howtogeek.com/428174/what-is-a-tty-on-linux-and-how-to-use-the-tty-command) didn't show up directly. I was greeted with a blinking cursor on boot, and switching to a different TTY using 'Ctrl+Alt+F1' through 'Ctrl+Alt+F6' at least once was required for the thing to be operable.

2. I [couldn't install Grub](https://www.reddit.com/r/linuxquestions/comments/n0vr61/unable_to_install_grub_on_debian) at all. I later learned that this was because [I didn't mount `/dev`, `/proc` and `/sys`](https://gist.github.com/myTerminal/4f1d26eaf32cdc5bcc9fb19f594c03d2#preparing-the-chroot-environment) from the external system to the internal. This is something I wasn't used to back in Arch, where most of these things are automatically taken care of as soon as you do an `arch-chroot`.

3. I was shown [errors while installing base packages](https://www.reddit.com/r/debian/comments/n2yyba/facing_an_unusual_error_while_debootstrapping), which I later learned was because I was mounting the `esp` partition at `/boot` instead of `/boot/efi`. This is another one of those differences that I would've never known about until I got burned myself.

4. GRUB [failed to generate configs with *os-prober*](https://www.reddit.com/r/linuxquestions/comments/n8l9c2/unable_to_generate_grub_config_on_debian). This was the issue that took the most amount of time in the entire process. I thought of it to be an issue with grub, especially with the mention of *grub-probe* in the error, but then it later turned out to be with [os-prober](https://salsa.debian.org/installer-team/os-prober). To me, this was because of my drive setup on the machine which shows the internal drives as `/dev/nvme0n1` instead of `/dev/sda`. When *os-prober* came across the bootable image mounted as `/dev/sda1` it totally freaked out and hence all the issues. So, I skipped using *os-prober* altogether while installing GRUB.

5. There's [no `mkinitcpio` in Debian](https://unix.stackexchange.com/questions/268903/what-is-the-equivalent-of-mkinitcpio-conf-on-debian) for adding encrypt hook for GRUB, so I had to follow a different set of commands, making sure I updated `/etc/crypttab` with information about the encrypted volume.

6. Remember when I just mentioned how *os-prober* was freaking out due to `grub-probe`? I did try a couple of hacks to make `grub-probe` behave, but then *os-prober* [failed to discover Linux on other subvolumes](https://www.reddit.com/r/linuxquestions/comments/n8kyft/osprober_unable_to_see_a_distro_installed_on) on the same BTRFS partition. All that GRUB was able to see was the current Debian installation. This was another of those long-running issues and I eventually settled with using [the UEFI menu from my hardware](https://support.lenovo.com/us/en/solutions/ht104668-how-to-select-boot-device-from-bios-boot-menu-ideapad-thinkpad-thinkstation-thinkcentre-ideacentre), one that comes up when you hit `F12` while starting up the computer, to pick whatever bootloader I wanted to boot with.

7. Don't even think that this was the last issue in the process given that the step for installing GRUB is usually one of the final steps in a typical Linux installation. Actually, there was one more with LUKS encryption. I learned that as the packages in Debian, even with Bullseye are older than Arch, `LUKS2` encryption isn't supported here yet. It turned out that though I wasn't specifying whether to use `LUKS1` or `LUKS2` while creating a new encrypted volume using `cryptsetup`, `LUKS2` has been made default lately. This wasn't a problem in Arch, but in Debian, even though [the change to bring in support for `LUKS2`](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=927165) has already been made long back, it'll still take time for it to make it to our systems after enough testing of course. So I had to destroy the entire BTRFS partition and re-create it with explicitly specifying `LUKS1` this time. We're talking about installing Arch too once more, of course.

As far as I remember, that was all the struggle I had to deal with, and as you know I'm running Debian now, and the way this system has been performing, I guess all that hassle was totally worth it.

I've linked [my Gist](https://gist.github.com/myTerminal/4f1d26eaf32cdc5bcc9fb19f594c03d2) that documents my commands I used for the setup in the description.

## Up next

So like I said during the start of this video, this one was only about the issues, hurdles, and learnings during the installation. As per the plan, the immediate successor to this will be a new episode in my series [Back to Linux](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO), where I'll talk about the outstanding gaps and issues post the move to Debian.

## Outro

That's all that I have for this video, so let me know if you liked it through either the Like/Unlike buttons or through your thoughts, feedback (preferably constructive), and ideas in the comments. You may also subscribe to the channel to show me your support and encourage me to make more of such videos. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
