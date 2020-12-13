# Back to Linux - Ep 05: Gaps and issues

> This article is a transcript of one of my YouTube videos that you can watch by clicking the below thumbnail. This means that certain statements may not make sense if you're reading it in this form. Also, you can find all the videos in the series in [this playlist](https://www.youtube.com/playlist?list=PLe6BbPAW-Wxgz5Jly855Aw3qWRiWqTXHO), at least the ones that I've published till this point.

[![https://i.ytimg.com/vi/HDmJSgtJqmw/hq720.jpg](https://i.ytimg.com/vi/HDmJSgtJqmw/hq720.jpg)](https://youtu.be/HDmJSgtJqmw)

This video is a part of my series **Back to Linux** in which I cover my transition from my Apple MacBook Pro back to Linux on a [ThinkPad](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0). If you haven't watched the previous videos yet, I highly recommend starting from there to get the context of this video but if you already have, let's talk about the gaps and issues with my current setup and a few thoughts about my transition till this point.

## Issues and broken functionality

### Display

A lot of applications are still confused about the DPI of the unusually high-resolution screen. While some applications render just fine, others either need application-specific configuration to be able to scale properly, or otherwise appear too small to be usable without getting too close to the screen.

We've talked about the screen brightness issue in one of the previous videos, where while running the device on "Discreet graphics" through BIOS, the brightness stayed on full setting. Though the issue is not there anymore as the setting has now been reverted to "Hybrid graphics", the brightness still starts at maximum on every login and needs to be lowered before use.

There is occasional random flickering when starting applications like Firefox and Terminology, and the issue goes away on moving the application window around once.

The Grub menu, the one that came with Manjaro Linux, is too tiny and doesn't scale properly. I'm sure this can be fixed by tweaking a few Grub settings, but at least in its default state, it's clearly a compromise.

I haven't been spending much time in my primary window manager i3wm since I set up this device as apart from many other issues, I still don't have an acceptable method for being able to adjust the screen brightness. Again, this can be fixed by spending some time, but I can definitely not work with full-brightness on my face until I get it fixed.

### Trackpad

Though the trackpad works great in Windows, it sometimes seems to miss my clicks on Linux. There's a pretty noticeable difference in sensitivity between Windows and Linux, and a similar difference between Gnome shell and i3wm. The "tap to click", even after enabling it from Gnome settings, it's very unreliable and totally broken in i3wm. I find myself using the dedicated click buttons at the top of the trackpad which is something I used to do on my previous Lenovo, but the MacBook Pro spoiled me.

### Fingerprint sensor

The fingerprint sensor is not used in Linux. First of all, I haven't found any device drivers for the hardware and then I didn't come across any application where I can utilize the scanner, sadly even my password manager, KeePassXC.

### Bluetooth

I've faced a variety of issues connecting to my Jabra true wireless earphones, in fact, there's no sound through the earphones in i3wm. I need to select the sound input and output device every time I connect the earphones. I've even had an issue once where I could only hear audio through the left earbud, which is an issue I didn't face with the earphones on any other device yet.

### Audio output

Although my ears are getting used to the audio quality of the ThinkPad, which is not as great as my old MacBook Pro, the volume level often feels very low, especially in some applications, even on the highest volume setting.

### Audio input

The microphone mute button on the keyboard doesn't work, the device detects no audio input device unless an external wired or wireless audio device is connected.

### Battery

Battery performance is terrible, and I'm getting around 3 hours or less even while running the computer on the integrated graphics. I understand that most of it due to the 4K screen, but it's still sad. I do have plans on working on battery optimization, but at least out of the box, this is way worse than my MacBook Pro, not that I expected it to be better.

### Crashes

I've had a system crash several times now, where the screen goes blank while I can hear the fans running at moderate speed. The device doesn't enter sleep even on closing the lid and the only way to get it out of that state is a forceful shutdown keeping the power button pressed for a few seconds and I feel bad every time I have to do it.

### Hybrid graphics setup

We've talked about [optimus-manager](https://github.com/Askannz/optimus-manager) in the last video for how it doesn't work with [gdm](https://en.wikipedia.org/wiki/GNOME_Display_Manager) and instead needs [gdm-prime](https://aur.archlinux.org/packages/gdm-prime), I couldn't get either to work. I can keep using [SDDM](https://wiki.archlinux.org/index.php/SDDM), but at least out of the box, it doesn't scale for the high-resolution screen and appears too tiny like the Grub menu. Though *SDDM* is known to be easily customizable, *GDM* used to scale perfectly right out-of-the-box. I even haven't been able to get *optimus-manager* to work without a display manager, which would've worked for me too.

### Broken integration with Google Drive

Along with [Syncthing](https://syncthing.net) for frequently access files and [pCloud](https://www.pcloud.com) for long-term storage, I still have a dependency on [Google Drive](https://www.google.com/drive) in my workflow. There's no official Google Drive client on Linux, and even though Gnome sort-of helps you to add your Google account to the computer and access your Google Drive through its default file-manager, the integration is not even remotely as flawless as the one on macOS. Surprisingly, pCloud works perfectly, just the way it used to work on macOS.

## Thoughts

Apart from the issues that I just talked about, there might be a few more that I missed mentioning in this video. However, many of these are things that I can solve with time, in fact, I look at those gaps as opportunities to explore Linux even more closely. The system is now pretty usable with a few workarounds here and there, and I can keep working on it to fill up the remaining gaps.

I've also planned to do a few things that I haven't done before. One of such things is to set up [Timeshift](https://github.com/teejee2008/timeshift) to take regular backups of my system by automatically creating BTRFS snapshots. I also plan to explore battery optimization options for which I have a few pointers already.

For me, I get to learn a lot of things every time I use a new computer. The MacBook Pro gave me a detailed dive-in into the macOS universe, my Dell Precision desktop totally changed the way I look at Linux. Hopefully, there's even more that I can learn from the ThinkPad.

As it goes for this machine, it feels like the best non Apple device I've used yet. Though the size is slightly larger than I'm used to, the beautiful ultra-high-resolution screen, finger-friendly keyboard, and tough exterior design together compensate for it and overall, I'm very happy with the purchase. Having said that, I still have to figure out a good new home for my MacBook Pro, which remains the most premium computer I've ever owned.

## Coming up...

So that's all that I had for this video, and the machine now finally seems to be completely set up. The next video in this series could be about my relatively longer-term experience with this device or anything that I learn in between. Thanks for watching, may the maker watch over you, see you in the next video!
