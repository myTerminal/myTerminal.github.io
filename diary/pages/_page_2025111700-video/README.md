# I Bought into the Hype of CachyOS

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/fj5J09RdSfw/hq720.jpg](https://i.ytimg.com/vi/fj5J09RdSfw/hq720.jpg)](https://youtu.be/fj5J09RdSfw)

## Background

I’ve read a lot about [CachyOS](https://cachyos.org) recently, and I heard that it’s not just another [Arch-based distro](https://wiki.archlinux.org/title/Arch-based_distributions). And, I’m always open to a secondary Linux distribution of choice, so here I am finally giving CachyOS a try, and also running some numbers on this [ThinkPad X13 Gen 3](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx/thinkpad-x13-gen-3-(13-inch-intel)/len101t0029).

## A Secondary Linux Distribution

While I work on the next major shift in my computing setup, which I plan to cover some time next year, [Void Linux](https://voidlinux.org) has established itself as the perfect Linux distribution for me, even more than the others I’ve used over the last twelve years, which includes [Ubuntu](https://ubuntu.com), [Debian](https://debian.org), [Fedora](https://getfedora.org), and the tens of distros based on them, [OpenSUSE](https://www.opensuse.org), [Arch](https://archlinux.org), etc. However, with my fear of missing out, you’ve seen on this channel how I’ve kept my eyes open for a few other interesting distros as well, and tried a new one when I got a chance. More so, a distro that promises a more out-of-the-box experience also helps me identify gaps and opportunities of improvement to my handcrafted setup with Void Linux. I’ve had a great experience with [Pop_OS!](https://pop.system76.com) and [Nobara](https://nobaraproject.org), at least until the latter started to show an increasing number of issues, including being broken right out of the box on a fresh install. I also briefly evaluated [Solus](https://getsol.us), but its limited package selection held me back.

## CachyOS

And then comes CachyOS. Over the years, I’ve learned that you can change pretty much anything in Linux, and a few of the only things that make one distro different than another are the release cadence, package manager, and sources, the init system, etc. As CachyOS is based on Arch, it has [AUR](https://aur.archlinux.org), which is probably the largest collection of software packages in any Linux flavor, and I can work with [SystemD](https://systemd.io) as well, if as promised by CachyOS, it is optimized for modern hardware. Also, CachyOS does several things differently, so I can kind of avoid the BTW crowd, their gatekeeping, and negativity. They mention a lot of technical terms that I haven’t come across in my last twelve years with Linux computing, so I’m sure there is a lot of optimization there.

## X13 Comes Back Around

I didn’t choose the X13 Gen 3, but as the owner of this machine didn’t need it anymore, I suddenly had a spare ThinkPad, which was more modern than anything else in my fleet. I had several reasons for not setting it up with Void Linux. Firstly, this form-factor, and hence the use-case, is already covered by my [X1 Nano](https://www.notebookcheck.net/Lenovo-ThinkPad-X1-Nano-Laptop-Review-Less-than-1-kg-for-the-Business-Subnotebook-with-LTE.517858.0.htm). Also, CachyOS seems to be more suited for modern ThinkPads than the classic ones with older hardware, so it felt like a perfect match, as this was literally the most modern I could go.

## Message from the Sponsor

Most of the machines you see me installing Linux on also have a Windows license embedded in the UEFI firmware. This helps me not worry about losing a license the machine comes with, and I can wipe it clean and prepare it with a fresh install of Windows for the next owner when the time comes. However, if you’re trying to set up one of these that doesn’t have one of those licenses, nor a license sticker underneath the battery, for example, a couple of HP notebooks I sold recently, I came across Keysfan.com as a source for legitimate licenses that you can buy for cheap. Windows isn’t the only license you can buy from them, as there are several other software in the list. And, you can also buy software for macOS. They also sell keys in bulk if you need. In order to purchase a key, simply add the desired license to the cart, use one of the coupon codes, and complete the payment using either a credit card or PayPal.

## Setup Process

Unlike how tedious my installation method for Void and other Linux distributions usually is, installing CachyOS was a breeze, just as I expected. I obviously went with the Desktop Edition and not the Handheld Edition for this notebook computer.

The only major thing I specified was user creation, letting the rest be defaulted to what was suggested. Unlike my usual choice, I chose [KDE Plasma](https://kde.org/plasma-desktop) as the desktop environment for a comprehensive experience out of the huge selection, as I wanted to experience stacking window management for a change.

## Tests & Observations

1. **Booting:** Booting is pretty quick with [SystemD boot](https://www.freedesktop.org/software/systemd/man/latest/systemd-boot.html) against [GRUB](https://www.gnu.org/software/grub), which I still prefer, because that’s what I’m familiar with.
2. Help with Tweaks and Packages: As soon as you log in, you’re greeted with helpful features that let you perform tweaks, install features like the ones for gaming, which include everything you need to run games, including [Steam](https://store.steampowered.com), of course, and install other software through this guided interface.
3. **Default Theming:** The default theming isn’t anything extraordinary, but it is dark by default.
4. **Default Software Selection:** Software selection isn’t too wild either, and I’m sure some of these come with KDE Plasma, and the rest are added by CachyOS team. Regardless, it’s interesting to see some of these familiar ones that I do not see installed by default on other distributions.
5. **General System Configuration:** All the rest of things worked out of the box, as you’d expect from a modern distribution shipping with a modern desktop environment, running on a relatively modern notebook. I just didn’t see a camera app that I could verify the camera with, but that’s OK.
6. **Speed and Performance Benchmarks:** And then it was time to run some benchmarks. Now, for benchmarks to be useful, you need something to compare, so I ran these on Pop_OS! before installing CachyOS, to have a reference. I used [Phoronix Test Suite](https://www.phoronix-test-suite.com), with [Xonotic](https://xonotic.org) as the test covering multiple areas. This suite also works well with [openbenchmarking.org](https://openbenchmarking.org). I won’t talk about it in this video, as there is a lot of information about it already. So the results do show a slight difference, but nothing significant. I realize that may change depending on the tests you run, as optimization in general wouldn’t apply to everything the same.

## Conclusion

As the next steps, I’ll tailor the setup to my needs by changing the default configuration, slowly installing some of the software packages from my regular setup, and then I could possibly also implement support for CachyOS in my dotfiles in some form or another. Regardless, I plan to carry this machine with me exclusively for a week or so to experience CachyOS more closely. If it doesn’t work for me, I’ll at least learn a few new things and may end up adding them to my setup and installing Void Linux on this one as well.
