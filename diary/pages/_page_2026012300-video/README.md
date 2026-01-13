# The T60 is My First IBM ThinkPad

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/P9rQv1922kQ/hq720.jpg](https://i.ytimg.com/vi/P9rQv1922kQ/hq720.jpg)](https://youtu.be/P9rQv1922kQ)

## Intro

So, my quest to find a tall-screen [ThinkPad](https://www.lenovo.com/us/en/c/laptops/thinkpad) that I would actually be able to use did not end with the [T61](https://thinkpads.com/t61). However, I could find plenty of [T60](https://www.notebookcheck.net/Review-IBM-Lenovo-Thinkpad-T60.1294.0.html) examples with a 4:3 form-factor, and I thought, what could go wrong? Spoiler alert: it was a rough ride.

## Even More Confusing Variations

Purchasing a T60 was even more confusing than a T61, because here, there are T60 examples in a 14.1” 4:3 screen size. After speaking to a few sellers to ensure I knew what I was getting into, I realized that even the sellers themselves do not know what they’re selling, similar to the T61.

## Initial State and Early Impressions

I picked up what looked like a 14.1” unit with, of course, a 4:3 aspect ratio. It was sold with a one-liner description: “Untested. No charger. For parts.”, and I took a chance.

The machine arrived in a bubble-padded paper envelope, which was a first time for me, but doesn’t that prove something about ThinkPads? It came with a battery and a lot of dust. With my fingers crossed, as soon as I connected it to the charger, it turned right ON. The buttons were stuck, and pressing them was like breaking ice underneath. Could that be due to water damage? I guess that would remain a mystery. Booting into a live Linux distribution threw a message saying that it was a 32-bit CPU and that running 64-bit applications was not possible. Thankfully, I had already ordered a better CPU for this machine, so I was covered.

I gave the machine a quick exterior cleanup to get a better look at it and determine if I need to order more parts. And then, what was otherwise looking like a great find started to look scary. The battery seemed to hold some charge at least, and was one of those aftermarket knock-offs. So it meant I had to get another machine with a better chassis, and maybe dead internals. And I found something I had never seen before in a ThinkPad: an IR receiver!

While I waited for the spare parts to arrive, I booted into Windows 7 32-bit to update the BIOS, and that is when I learned that the screen was an SXGA+, which was the highest resolution for a 14.1” size, and square form-factor. I updated the BIOS to the latest version I found online.

The result was a working motherboard with the latest BIOS, an SXGA+ screen without scratches, a storage caddy, an optical drive, and several other usable internals: pretty sweet.

## Second Machine

I wanted a pristine palmrest, a drive bay cover, certain trim pieces on the display cover, and a keyboard. These individual parts would add up to a lot of money, so I ended up buying this second machine with a locked BIOS.

This one had more scratches, a broken palmrest (again) with a fingerprint sensor. I cleaned it up to find even more problems. A beautiful engraving underneath, a middle button that jumped right off, badly rubbed display bezel edges, and several scratches on the screen. The battery was dead and refused to charge either. Now, this machine was even more unusable to me, except for the drive bay cover, and I could, for the sake of completeness, use the slightly less damaged palmrest, as it also had a fingerprint scanner. I’d worry about the BIOS password at some later point, and may cover it in a separate video.

One interesting difference between the two machines was the color of the cover latch. I’m not sure which one I prefer over the other. Maybe the black one?

## Combining Both Machines

Before I could jump into internal upgrades, I replaced the keyboard from the broken T61 we saw in the last video, so at least I had something to type on. Then, I replaced the palmrest from the other machine, and lost a couple of stickers on the left.

But then, right as I was about to proceed with working on the internals, I was upset about a couple of elements that were still broken. But then, I found a great working unit with most of what I was looking for, and all in a single package. Thanks to the seller, I got it at a good price.

## Third Machine

When the third machine arrived, it reminded me of my purchase of the [X61s](https://www.notebookcheck.net/Lenovo-Thinkpad-X61s.3935.0.html). I’ve been missing machines that you could just use them as they are, without trying to put together stuff from other machines to even get them to work. This thing threw a CMOS error, then kept going to blue screen of death while attempting to boot into Windows, but I could fix that by switching the SATA mode in the BIOS, and there was Windows XP in all its glory. It had a high-resolution SXGA+ screen, a good keyboard, a palmrest with a fingerprint scanner, and pretty much everything else, or rather more than I was looking for. Everything was as it should be, and it also came with a 65W charger and a Windows XP setup disc. I cleaned it up and chose it as my subject for the rest of the video.

For the other machine, I have some special plans before I find a new home for it, and I plan to cover that in a dedicated video.

## Restoration

1. I repeated the BIOS upgrade on the machine through Windows 7 32-bit.
2. Now, enthusiasts seek machines with higher-end CPUs, and that makes them difficult to find. However, with these classic ThinkPads, the CPU is almost plug-and-play in most cases. I replaced the [32-bit Intel Core 2 Duo T2500](https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+Duo+T2500+%40+2.00GHz&id=732) with a [64-bit Intel Core 2 Duo T7400](https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core2+Duo+T7400+%40+2.16GHz&id=1002), of course, coupled with a thermal re-paste and deep clean. And I found the ATI chip inside, making it my first ThinkPad with an AMD-based GPU. I was extra careful while I worked inside, because you do not want to mess up in a machine like this, something that seemed to have time-traveled to 2026.
3. I maxed out the RAM to 4GB using this pair of 2GB DDR2 SODIMM modules.
4. I verified that the machine had accepted the hardware changes. Then, out of curiosity, I booted into Windows XP through the 320GB HDD to see if the machine behaved any differently, only to find it didn’t. Maybe display drivers?
5. Then, I added a 512GB SATA III SSD because I had already invested a lot in this platform and started to grow fond of this machine, much more than the T61 I restored in an earlier video.
6. The battery from the first machine was already working, and I couldn’t get the other two to work.
7. And with the 65 Watt charger that came with this machine, the set was complete.

After everything was ready, I thought I’d give it a spin with a live Linux environment, but I couldn’t boot it into any, including [EndeavourOS](https://endeavouros.com), [Pop!_OS](https://system76.com/pop), or even [Void Linux](https://voidlinux.org/), not even Void 32-bit, though I could boot fine with [Bunsenlabs 64-bit](https://www.bunsenlabs.org). Now, there was a 3GB RAM limit with this chipset, and then there’s the legacy ATI chip, so either one or both of them could cause the issue. I showed persistence and tried the Void base image, which only works with the TTY, reminding me of [Arch Linux](https://archlinux.org) days. In the absence of `nmtui`I proceeded with the installation using an Ethernet cable. 

I finally gave it the honor of joining my fleet with Void Linux. I left a hundred GB at the end of the drive for use with other operating systems in the future. And yes, I also fixed the CMOS error between battery changes by replacing the battery.

## Comparisons and Conclusion

So, that was something, but at least I finally have a machine I wanted to build, and the result is more than worth it.

Now, this 14.1” tall T60 is not much lighter than the 15” [T61p](https://www.notebookcheck.net/Review-Lenovo-Thinkpad-T61p-Notebook.5313.0.html) I had the opportunity to work with a few years ago.

Standing next to its smaller sibling, the X61s, the T60 stands proud with a little extra horsepower and the gorgeous SXGA+ screen. While the X61s is barely usable for most tasks today, I hope I’ll be able to get a little more use out of the T60.

Placing it side by side with the widescreen T61 and the [T440p](https://www.notebookcheck.net/Review-Lenovo-ThinkPad-T440p-20AN-006VGE-Notebook.108423.0.html), it clearly stands out with its overall design. While the T60 and T440p form two extreme sides of the lot in terms of age, performance, and usability, the heavily upgraded T61 suddenly starts to seem redundant in the presence of the two.

Finally, my purpose wasn’t to build the fastest ThinkPad out there, as for that, I already have the T440p. What the T60 brings is a taller screen at 14.1 inches, while also being a tad more capable than the X61s, so I may be able to do much more with it outside the house than merely show it off to the normies at the public library who do not care anyway.

Regardless, I couldn’t have been happier with my 50th ThinkPad, which is also my first [IBM](https://www.ibm.com) ThinkPad.
