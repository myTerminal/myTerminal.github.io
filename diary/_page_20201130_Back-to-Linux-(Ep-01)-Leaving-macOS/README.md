# Back to Linux - Ep 01: Leaving macOS

> This article is a transcript of one of my YouTube videos that you can watch by clicking the below thumbnail. This means that certain statements may not make sense if you're reading it in this form.

[![https://i.ytimg.com/vi/ix_Ji-lS_no/hq720.jpg](https://i.ytimg.com/vi/ix_Ji-lS_no/hq720.jpg)](https://youtu.be/ix_Ji-lS_no)

So this video is the first one from my series **Back to Linux** where I plan to cover my transition in a few videos, one part at a time. The videos will contain details about my computing experience so far, the reason for my move, a relatively short review of my next daily-driver, and the steps I took for the transition.

## A quick recap

Like most of us do, I was introduced to computers and Windows at the same time. That led to the most obvious thing that could happen: I believed Windows and computers to be one and the same thing. However, after using Windows for over 14 years, I switched Windows to Linux as my primary OS in mid-2013 on my [2010 Dell Studio 1558](https://www.dell.com/us/dfh/p/studio-15/pd), my first laptop computer. I had a dual-boot setup with Windows installed on a tiny partition at the far end of my hard-drive to make sure I'm still able to run video games. This was an obvious choice for me as being able to play games was one of the few things that kept me from switching to Linux. When my first machine died, I replaced it with [an entry-level Lenovo](https://support.lenovo.com/ro/en/solutions/pd100007-product-overview-lenovo-g50-45) and followed pretty much the same setup there as well. During the next few years, I distro-hopped through several noobs-oriented Linux distributions across a few flavors and built a decent [dotfiles](https://github.com/myterminal/dotfiles) repo.

In late 2016, on my quest to find a better machine and escape the tens of frustrating Linux compatibility issues on my Lenovo, I looked for a new machine and evaluated a few hardware options like the newly introduced [Razer Blade](https://www.razer.com/gaming-laptops/razer-blade) back then, the [Dell XPS 13 (and 15)](https://www.dell.com/support/home/en-us/product-support/product/xps-15-9550-laptop/docs), and others that I don't remember after all these years. The price of most of the machines I was considering was around 2000 USD (which was more than twice as compared to the most I had ever spent on a computer), and a lot of convincing from my brother who had just recently switched to a MacBook himself, I ended up buying a late [2016 Apple MacBook Pro 13 (without touchbar)](https://appleinsider.com/articles/16/11/13/review-apples-late-2016-macbook-pro-without-touch-bar). It was the same year they introduced touchbars on McBookPro's but I opted for the only model that didn't have one, for obvious cost saving. And that's how I stepped into the third major operating system in a totally unplanned way.

## My years with the MacBook

Given my hatred towards Apple and my history of Microsoft fanboyship, using a Macintosh as my daily driver was pretty unexpected, to say the least. Who'd know that better than my close friends who've had several debates about how Windows is the best OS and Microsoft is the best computer company on the planet?

Getting that out of the way, using a MacBook for the last four years was indeed a great learning experience. For the first few days, I wrote a lot of code to be able to accommodate macOS configuration into my dotfiles. I used macOS almost the way I used Linux: mostly through the command-line and tried to keep myself as less dependent on the Apple ecosystem as I could. Somehow I knew that even though I got lucky enough to switch to a Mac this time, my next machine might most probably not share the same logo.

As my setup evolved and my dotfiles grew, I always carried at least one virtual machine running [Fedora](https://getfedora.org) with me to make sure my scripts were still compatible with Linux as I moved forward and that I was still in touch with Linux, at least to a certain extent.

## Back to the present

Fast-forward to late 2019, I came across [Linux for Everyone](https://www.linux4everyone.com) by [Jason Evangelho](https://www.forbes.com/sites/jasonevangelho) and it quickly got me hooked, re-igniting my interest and passion for Linux once again. I invested in a pre-owned [Dell Precision T3600](https://www.ebay.com/itm/Dell-Precision-T3600-8-Core-2-60GHz-E5-2670-Wholesale-Custom-To-Order-No-OS/382071287250) desktop from eBay and started preparing my way back to Linux, for whenever that day might be. The learning that had once slowed down had now re-accelerated.

I got to know [System76](https://system76.com) a little better, got infatuated with [Pop!_OS](https://pop.system76.com), and almost lost my mind when I first experienced [Proton](https://www.protondb.com) through [Steam](https://store.steampowered.com) on my Linux for the first time: I could play most of the Windows games on my Linux desktop, including the ones that I couldn't play on my MacBook.

Due to this sudden peak in my interest in Linux, my dotfiles received a total overhaul, I rediscovered Linux by learning several new concepts I had never explored before and I came up with [twiner](https://github.com/myterminal/twiner) where I gathered a few (hopefully) useful scripts for the three most popular Linux flavors: [Debian](https://www.debian.org), [RedHat](https://www.redhat.com), and [Arch](https://www.archlinux.org). I learned about the existence of cross-distro package management solutions like [AppImage](https://appimage.org), [Snaps](https://snapcraft.io), and [Flatpaks](https://flatpak.org/) and then out of fascination, I wrote [foraget](https://crates.io/crates/foraget) in [Rust](https://www.rust-lang.org) as a universal package manager wrapper so that one didn't have to remember commands for each of those package managers. As a bonus, I designed it to be able to work for macOS as well, sort of.

I switched from Fedora to Arch as my primary Linux distro, re-configured my [i3](https://i3wm.org) setup from scratch, and systematically revisited every single software choice I made in my setup to create an arrangement parallel to the one I had on macOS.

A few months back, [Lenovo announced official support for Linux](https://news.lenovo.com/pressroom/press-releases/lenovo-brings-linux-certification-to-thinkpad-and-thinkstation-workstation-portfolio-easing-deployment-for-developers-data-scientists) and then I think we all know how the story went from there.

## My return to Linux

Moving between [macOS](https://www.apple.com/macos/big-sur) and [Linux](https://www.linux.org) means much more than just the OS. It also changes the host hardware, unless you're OK trying to run Linux on a Mac and vice-versa, which [I know people have done](https://www.youtube.com/watch?v=XcOFR3y1m2s), but let's talk about the general case here: you have to lose the device.

Looking back at the last four years, the macOS brought so many good things to my workflow:

1. **It just worked**, which means no spending time finding the right drivers for my wireless card, constantly resetting audio so that my speakers work for more than ten minutes without a complete reboot, making sure things work after a system update, the kind of usual stuff I had to do on my previous device.
2. **An pretty-close-to-Linux experience**, meaning I felt as I was using Linux but on a system that was designed to work out-of-the-box without the typical caveats involved with Linux so that I could focus on my "more productive" tasks.
3. **The trackpad worked better than a mouse**, which sounds odd at first, but I literally never connected a mouse on my device even for tasks that required extra precision, for example editing images, etc.

But...

1. **The choices were missing**, and the biggest for me was my tiling manager. I know there are ways you can add software like [ShiftIt](https://github.com/fikovnik/ShiftIt), but that is still far from the real thing.
2. **The world of Linux was shifting** and I couldn't be totally up-to-date while being a Mac user.
3. **I felt like I didn't belong there** in the Mac community, partly because I still wanted to have things more customized for my workflow. I felt like I didn't deserve the luxuries of the platform.
4. **I didn't want to get trapped for long**, which is something every macOS user can relate to Once you switch over to a Mac, you'll never want to return. I don't need to look beyond my family to look for examples either.

## And then comes the new hardware...

It is undeniable how well-designed things were on the Macintosh platform: be it the perfect integration between the hardware and the software that just feels like a single unit or the hardware design that appears to be "exactly the way it should be".

But...

> (drum-roll)

My [2020 Lenovo ThinkPad X1 Extreme (Gen 3)](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Extreme-Gen-3/p/20TKCTO1WWENUS0) improves the things I want to be improved:

1. **It's a platform** with great scope for future upgrades compared to a computer that doesn't even allow changing batteries.
2. **Slightly better keyboard layout for my workflow:** I spend most of my time within Emacs, and it doesn't involve using the two *Command* keys on either side of the space bar, moreover it felt bad to overuse the only *Ctrl* key on the keyboard. The fear that the key would stop working, especially given that the keyboards from that particular generation of MacBooks were the ones that introduced the problematic butterfly switches, it scared me even more. I also love the placement of the bothersome *Fn* key, to the left of the *Ctrl* so that all the keys that I frequently use: *Ctrl*, *Super* and *Alt* and in line with each other.
2. **I can now more easily use regular external keyboards, once again**, which includes my [Razer Ornata Chroma](https://www.razer.com/gaming-keyboards/razer-ornata-chroma/RZ03-02040100-R3M1) that has been connected to my Dell Precision desktop since the time I bought it. I didn't prefer using external keyboards with a Mac unless they're designed for them with those alternate *Command* and *Option* keys instead of *Ctrl*, *Super*, and *Alt*.
3. **I can once again play games over Steam, on my primary computer**, which was pretty limited on my MacBook, give the low specs, and [the recently lifted support for 32-bit applications](https://www.theverge.com/2019/10/12/20908567/apple-macos-catalina-breaking-apps-32-bit-support-how-to-prepare-avoid-update) starting [Catalina](https://en.wikipedia.org/wiki/MacOS_Catalina). Not that gaming is as frequent for me as it used to be a decade back, it's still good to have the capability, just in case...
4. **I get an alternate input method: a touchscreen**, after exactly ten years since I first wanted one in my Dell Studio but couldn't get it due to limited availability back in India. Not that I'm a fan of touchscreens on work computers (Emacs user here), but with my [Carpal Tunnel Syndrome](https://en.wikipedia.org/wiki/Carpal_tunnel_syndrome), the convenience of an alternate touch input for quick tasks could be handy, which is something I learned from my wife's Lenovo Yoga 2-in-1, and that took me a lot of time to realize. Besides, I definitely won't have a trackpad as good as the MacBook, so I might as well use a touchscreen once in a while when really needed.

And there's much more: more ports (lesser adapters) plus an integrated SD card reader, a dedicated GPU, spill-resistant keyboard, quick-charging, etc.

Now, this isn't my first ThinkPad. I've been using one at work for over three years now and to sound very kind, I'd say I just hate it. It's a [T480](https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T480/p/22TP2TT4800) with a high-capacity battery and though it's a 14-inch laptop, which is my most favorite size for a portable computer, it's way different than my X1 Extreme. Too much chassis flex, cheap plastic exterior, noisy fan are only a few things that make it so bad for me. I've used Dell Lattitudes that cost much lesser than this one and were still my favorite back at my previous job.

## My fears from the switch: GONE

After using a device as well-designed as the MacBook Pro, I knew I'd certainly lose a few things for sure. However...

1. **The ultra high resolution 16:10 IPS panel**: Choosing the 4K OLED really helped as the new screen looks awesome with more than sufficient brightness, very vibrant colors on the higher-than-required resolution.
2. **The unbeatable speakers**: Yes, the speakers on the ThinkPad are not supposed to be even closely as good as the MacBook, but (without a detailed technical evaluation) I found them to be almost 90% as loud, and about 80-85% as rich in terms of fidelity, which I guess works for me.
3. **The experience-defining glass trackpad**: I can't be more delighted to say that the trackpad on the ThinkPad is exactly as good as (if not better than) the MacBook. I really didn't need a better trackpad and finding one that's equally as good leaves no question at all.
4. **Overall solid build of the device**: And this was not short of a surprise when the device felt pretty well-built, more than any other laptop I've used in the last decade and definitely better than my T480 at work, right from the first time I unboxed it from the packaging.

There are a few other major changes though:

1. Though the screen is huge as compared to the old one, **moving around with a smaller machine was way easier**.
2. The laptop doesn't open with a single hand as **the lid is way tighter** than the ones they have on MacBooks.
3. **The machine breaths through the vents from underneath the body**, so keeping it on my lap while working doesn't appear to be the best way to use it.

## And from here...

So, was it a good decision to leave the Apple ecosystem and "downgrade" to a ThinkPad? I don't know. But what I do know, it'll be full of adventures for sure. Besides, I've decided to not remove compatibility for macOS from my dotfiles, who knows what the future has in store for me. Also, I'll have a small unused Windows partition at the far end of the drive, just like the old times, in the end, I had to pay for the license, so why not keep it?

## Coming up...

So that's all that I have for this video, there's a lot more to come in the next videos where I'll review the machine and talk cover much more details about my setup. Unsurprisingly, it was full of adventure, and that's all I can say without giving away too many spoilers. So till then, may the maker watch over you, see you in the next video!
