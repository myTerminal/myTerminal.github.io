# I Created a Muslim Prayer Dashboard with (Mostly) Repurposed Hardware

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/J149M4IRlOQ/hq720.jpg](https://i.ytimg.com/vi/J149M4IRlOQ/hq720.jpg)](https://youtu.be/J149M4IRlOQ)


## Intro

Among the things this [ThinkCentre M600 Tiny](https://www.bhphotovideo.com/c/product/1303386-REG/lenovo_10g9001uus_thinkcentre_m600_tiny_pentium.html) helps me with, one that is the most useful for everyone in the house is [salah-compass](https://github.com/myTerminal/salah-compass), which is a Muslim daily prayer reminder and dashboard that I built myself a few years ago. Today, let's try to make another one of these using repurposed hardware.

## Why Do This?

Now, I know most of us do not need or otherwise would have a hard time justifying a dedicated computer for daily prayer reminders, and I do not intend to convince you otherwise either. I built salah-compass as an open-source tool that one can deploy in their home or anywhere they'd like instead of binding it to a mobile device, so it effectively becomes a part of your home, or office, or whatever place you deploy it at. All that you need is a [UNIX-like](https://en.wikipedia.org/wiki/Unix-like) computer connected to the internet and some sort of audio output device. Besides, building something new all by yourself is always fun, so I say why not?

## Setting Goals

Let us set some goals for ourselves. We'll build a daily prayer alarm and dashboard system that would keep you updated with the shifting prayer timings all throughout the year all by itself by automatically fetching it from the internet, while consuming as little power as possible.

The exercise would in no way represent a strict requirement for the hardware and also in most cases the software, but the final product will be a purpose-built standalone system that would continue to serve its purpose with minimal to no external human interaction.

## Hardware Setup

For hardware, we have almost an infinite number of options, but for this project, I plan to use a combination of things I already have with me, and some I acquired with the idea of being able to use for future projects.

### 1. Orange Pi 3 LTS

For a project like this, you do not need a regular computer, not even the 1L ThinkCentre M600 Tiny that I've been using. I'm not an expert with Pi hardware, but I've had this [Orange Pi 3 LTS](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/orange-pi-3-LTS.html) for over a year now, and that should work great as well. I got it on a deal as a used unit back then, and later added this transparent case I found on Etsy.

I ran a few experiments on it for an in-house ad-blocker system, but then it has just been sitting in a drawer doing nothing.

### 2. Storage Card

For the storage drive, I picked up this OK-ish 128GB [SanDisk](https://www.sandisk.com) microSD card from Ebay, which except for speed, will be another overkill for the project we intend to build.

### 3. MSI Pro MP165 E6

Now for a dashboard, we'd need a screen. I could have gone with a regular monitor but that would be too big for this project. I didn't have one of those portable monitors before, so I picked up this refurbished [MSI Pro MP165 E6](https://www.msi.com/Portable-Monitor/PRO-MP165-E6) from eBay on a deal. This 15.6" 1080p monitor comes with a carry case, several cables for connectivity and power, an integrated stand, and even integrated speakers, again, much more than what we'd need.

As the Orange Pi wouldn't support video over USB-C, we'll use this trusty old HDMI cable.

### 4. DexoPad

Now for the input peripherals, it'll only need one during the setup, after which it will just be the machine and the screen. We could either go with a wired or wireless keyboard and mouse, or even something like this [IBM UltraNav SK-8845RC](https://sharktastica.co.uk/wiki/8835-8840-8845). We're not doing any of that, as I have something just for this job.

This is a [DexoPad](https://www.dexopad.com.). It lets you connect a keyboard and mouse to almost anything with a USB port. The target machine does not need any drivers installed, so it works right from the BIOS/UEFI screen (at least on most hardware) with no dependency on the operating system. For remote control, you can use a computer running a major operating system or even a cellphone. It also let's you control a machine from around the globe, as this thing has a built-in WiFi to connect to the internet. Finally, there's also AI voice-dictation, which is something we won't be needing for this exercise. DexoPad was crowdfunded on [KickStarter](https://www.kickstarter.com/projects/palmblock/dexopad-cross-device-keyboard-mouse-and-macros-anywhere?ref=nav_search&result=project&term=DaxoPad&total_hits=2) earlier this year. I received this unit for free, and I thought why not use it here. You can get yours at https://www.dexopad.com.

In the box, you have a quick start guide, a pair of different USB cables, a reset PIN, and the DexoPad itself. They provide an app on mobile for [Android](https://www.android.com) and [iOS](https://www.apple.com/os/ios), and computers for [Windows](https://www.microsoft.com/en-us/windows), [macOS](https://www.apple.com/os/macos), and two [Linux](https://www.linux.org) distribution families, both, across x86_64 and ARM64. I say, let's try to use the [Unihertz Titan 2](https://www.unihertz.com/products/titan-2) for this as that would be fun. Setting it up is easy as well. Let's install the DexoPad app on the Titan 2, plug the DexoPad on one of the USB ports on this ThinkCentre M715q Tiny, search for a device through the app, and connect to it. There is a lot of ways you can interact with the DexoPad here, including a touchpad mode where my touchscreen becomes a cursor control on this Nobara system, a direct input mode with clipboard shortcuts where you can type in a text and send it to the device, a full keyboard mode which I realize is tricky due to the aspect ratio of this square screen, and a macro mode, which we may not need for this exercise. Funny enough, even though you can use the physical keyboard on the Titan 2 as a trackpad in touchpad mode, the physical keys aren't recognized in the keyboard mode. This wouldn't be a thing on your regular glass slab of a phone, but still. I took it up with them, and I've been told that they're evaluating it as a feature in their upcoming releases.

Now for the sake of controlling the Orange Pi, I could have used the `.rpm` file they provide for Fedora-based Linux systems on this [ThinkCentre Tiny](https://www.lenovo.com/us/en/p/desktops/thinkcentre/m-series-tiny/thinkcentre-m715q-tiny/11tc1mt715q), but I guess we'll stick to the Titan 2 just for fun.

### 5. Power

As the Orange Pi may not be able to provide enough power to the MSI screen, we'll use this power adapter with two outputs, along with a pair of USB power cables to power both: the MSI screen and the Orange Pi.

### 6. Internet Access

For internet access, in order to keep things simple, we can use this relatively long Ethernet cable on the Ethernet port.

## Software Setup

Now from the software side, we'd need an operating system, but the choices for Orange Pi are limited as compared to the more mainsteam Pi's like Raspberry Pi models.

### 1. Choosing an Operating System

Speaking of choices, I found mention of [DietPi](https://dietpi.com) on their official website, and it is available for my hardware, so I say let's use that. I've run several tests with DietPi on [Proxmox VE](https://pve.proxmox.com/wiki/Main_Page) lately, and the experience has been nothing but positive. This time, we'll run it on real hardware.

### 2. Installing DietPi

I've learned that you do not need to install operating systems on these Pi hardware the way we do with our regular computers, but instead you flash an image of the operating system itself on the card that you can use right away without any further installation.

### 3. Setting up DietPi

So here is the assembled setup, hopefully not too tangled. 

On first boot, it asks you to login as `root`. And right after the first login, I hit a problem. Turns out this is an issue with the Ethernet on the Orange Pi 3 LTS, though I remember having used it plugged in to my Netgear Nighthawk. Let's keep moving and switch over to WiFi, and that also simplifies the clutter on the desk in exchange to a little inconvenience later on while configuring network access.

Now connecting to the network on the DietPi is a little more involved than how you'd otherwise do on a Linux system, and though it took me a short while to figure my way around the prompts, I finally succeeded to get connected to the internet. Once we're past the WiFi configuration, we should be good to continue with the rest of the exercise just as planned.

As soon as it gets internet access it run an update, which takes a while on this relatively weaker hardware, and then when it's done, it reboots by itself. Upon login, there is another login as `root`.

This is where it takes you through the remainder of the setup. Here you choose the language, set passwords for the root and unprivileged account, which by default is named `dietpi`, set another password for software installation (which we'll soon see why it's needed), asks you about serial/UART for whether you'd like to keep it enabled, and then takes you to a menu-driven interface for software installation.

This is one of my favorite parts about the DietPi. Here, we can choose the software packages we need. Let's select:

1. [`git`](https://git-scm.com) because we'd need it for salah-compass
2. [`chromium`](https://www.chromium.org/Home) as we'd need it for the dashboard

Only thing after marking packages for install is to select "Install". It presents you a confirmation with the list of software you chose for installation, and once confirmed, it starts the installation. These commands will of course run terribly slow on a Pi, but apparently as we selected Chromium, it had to also install [Xorg](https://www.x.org) and the rest of graphical packages as well. Anyway, after a long wait when it is all installed, it brings you to the CLI to take it from there. Here, it then asks whether you'd like to opt-in for the telemetry.

There's one additional piece of software that I couldn't find in their list of what they call "optimized" software, and that is [`make`](https://www.gnu.org/software/make). As this is a Debian-based distribution anyway, a simple `apt install make` works just fine.

Now from here, you can go in so many ways, and I'd admit I'll be taking a shortcut here by using the `root` user for the next steps instead of doing it as the `dietpi` user.

To show you how the system works at this point, let's give it a quick reboot where we'll see how fast the startup is in real time, and how it welcomes you at the TTY.

### 4. Installing salah-compass

For the dashboard itself, we'll use salah-compass. As I mentioned earlier, I've been maintaining it as a light-weight prayer reminder for a little over two years now. It comprises of mostly a few shell scripts with a pinch of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). If you see on GitHub, there aren't many commits, mostly because it is almost what I wanted it to be. For prayer timings, it reaches out to [AlAdhan.com](https://aladhan.com) for their free web API. For a while it was designed to run as a headless alarm clock, and the dashboard feature was added fairly recently.

Installing salah-compass is as simple as a single shell command. Let's login as `root` just as planned, and type in the curl command. By the way, you see how helpful DietPi is such that it keeps hinting you with these possible commands that you may need?

Anyway, here, it installs the rest of the dependencies all by itself as it finds fit, and the only two things it asks are the lat and long geographical coordinates. These are needed to calculate prayer timings for your location you deploy it in. There's a lot of ways you can find yours, [Google Maps](https://www.google.com/maps) being one of those. Selecting nothing and simply pressing `Enter` defaults to the location of [the holy mosque](https://en.wikipedia.org/wiki/Masjid_al-Haram). I could literally not think of a better default location.

At this point, this Orange Pi almost becomes a perpetual Muslim prayer alarm clock, provided it has an uninterrupted supply of electricity and access to the internet for once during that time of the day when it tries to fetch the prayer times from the public web API.

### 5. Configuring Dashboard Mode

For the dashboard, we had already installed Chromium browser, but there's one more thing we need to perform to switch it into what they call a "kiosk mode".

We type `dietpi-autostart`, and enable Chromium from the list, step out, and simply reboot one last time. As soon as the system starts, all that you see on the screen is a prayer dashboard. I should really have gone with a smaller screen, I guess.

So, looking past the rendering issue, you may need to disable power-saving on the screen that you use to prevent the dashboard from going dark with inactivity.

## The Final Product

Now I know that the dashboard design itself appears to be a little unpolished. As I mentioned before, the dashboard mode was just an afterthought and I didn't spend a lot of time on the visuals, and then all that you see on the dashboard currently is from my old rusty [CSS](https://www.w3schools.com/css) skills without any assistance from a non-organic being.

This setup will not need a keyboard or a mouse, and even the screen can be removed, leaving it to be only a prayer call alarm clock. The only problem would then be that as the speakers in my case are integrated into the screen and the Orange Pi doesn't have any onboard, I'd need to add a cheap USB speaker like this one I got from AliExpress.

## Retrospection

OK, so this wasn't the perfect hardware for the project, but we at least made it till the end with a working prayer alarm system. If I were to do this again, I'd probably go with a different SOC, would definitely decouple speakers from the screen, and absolutely go with a much smaller, lower-resolution, and cheaper screen.

Like I mentioned before, I only used what I had with me, or what I could justify buying such that I could use them for other projects. Also, I already have a prayer alarm lock in the house, so these components will go back to the shelf, except the DexoPad, which will be in my travel bag.
