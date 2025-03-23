# My First Tablet is a ThinkPad!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/7URy0SgYyZg/hq720.jpg](https://i.ytimg.com/vi/7URy0SgYyZg/hq720.jpg)](https://youtu.be/7URy0SgYyZg)

## Intro

Remember how I talked about the diversity within my fleet in the last video? Now is finally the time to lift the curtains and make the major reveal. BTW, I know you read the title, so I realized I spoilt it myself.

## The Reason to Pursue

Remember how I mentioned that I might be open to anything but I need my QWERTY keyboard? But then tablet PCs do not have a keyboard, or do they? I had purposely stayed away from this form factor as I had a misconception that these were merely toys to pacify kids or for adults to watch TikTok videos. However, the ThinkPad X1 family also includes a tablet, which is also a regular computer, that can run Linux, that has a ThinkPad keyboard, with the TrackPoint! This is probably the closest to a tablet I can go without straying away from my computing setup.

## Initial Impressions

So a few first things you'd notice on this device is how the main body is now within the screen, or rather the other way around actually. The keyboard is an optional accessory, and that is something I had to learn how to remove, but once you do that, this ThinkPad starts to look like a real tablet. I'm sure this isn't a new design, as I've seen offerings from Microsoft that look very similar, but who cares, now we have one of our own.

So coming back to the change around where the main body is now, the other things like the power button, fingerprint scanner, and pretty much everything has moved to where it isn't supposed to be, or at least we aren't used to seeing. The speakers are front-firing, which is nice, and are located across the opposite edges of the screen.

## Restoration

The restoration of this machine wasn't much, as the example I picked up was fully working. I did have to perform some obligatory cleaning though. Once I learned how to detach the keyboard, it started showing connectivity issues, so some cleaning of the contacts took care of it, at least for now.

The device was missing the stylus and the holder. I got lucky with a listing where I got both in pretty much new condition, and also received the other kind of holder used in other ThinkPads that plugs into one of the USB ports which this machine doesn't have with the USB-C ports. I bought my first set of AAAA batteries, and the set was complete.

With my research around the issues with this particular machine, a lot of people complained about how the screen coating is vulnerable to scratches and peeling off with the keyboard and the stylus, so I also added a screen protector to take that out of the way as well.

## A Different Setup

I could've gone with the same [standard, tried-and-tested software setup](https://github.com/myTerminal/dotfiles/tree/master/.setup) on this machine, just as my other ThinkPads. However, I didn't choose to go that route this time for two main reasons:

1. My setup has gone repetitive now as I've performed it on tens of machines in the last few years, and there's barely any challenge configuring it.
2. This machine is not your regular notebook computer, and it would need a more touch-friendly setup, which I'm sure mine isn't.

That means this would be my first machine (and the first time in the last several years) where I run anything apart from Void Linux. Oh wait, did I mention a different Linux distribution? I know many of us have gone down this path and never returned with a result. I kept it simple and the obvious choice for me was Pop!_OS. Apart from the fact that I'm a fan of [Pop!_OS](https://pop.system76.com/) and [System76](https://system76.com/) in general, this operating system brings several good features to the table:

1. It is very touch-friendly. I'm not sure how much of it comes from the fact that [Cosmic DE](https://github.com/pop-os/cosmic) is Gnome-based, but this thing does feel so much more usable on a tablet PC.
2. Being the “full” operating system it is, it also brings other cool things that aren't present in my regular setup, for example, things like an onscreen keyboard that is actually usable with touch, automatic screen rotation based on device orientation, automatic screen brightness based on the lighting conditions, and many more.

I'm sure this isn't all that I got from Pop!_OS. There's definitely a lot more going on in the background that I could have spent a lot of time to configure myself, but given how I do not own another device that could benefit from all those extra features, and especially how I might not own this tablet PC for long, I chose to use features that exist in an operating system out-of-the-box.

Every time there's a new computing setup, I get to write some code. [The code that I wrote this time](https://github.com/myTerminal/dotfiles/pull/2) though was mostly around selection of software packages. My custom scripts for hardware tweaks isn't required here anymore, given how complete of an operating system Pop!_OS is.

I didn't have to play around with the screen DPI, or graphic drivers, or trackpad sensitivity. I'm still working on setting up fingerprints. The only thing I configured was power-management with [tlp](https://github.com/linrunner/TLP) and battery charge thresholds.

Speaking of a complete operating system, this did make me realize how my regular setup on other computers is far from complete. It isn't a surprise to me, but the more I used Pop!_OS, the more it kept reminding me of it.

The computer now has a prettier prompt for the encryption password on boot, instead of a screen that might appear to be an error to most people. It also seems to decrypt faster here, which may be because Pop!_OS uses [LUKS2](https://gitlab.com/cryptsetup/cryptsetup) instead of LUKS1. I'd love to switch to LUKS2 on my other machines as well, but the last time I tried, I had to [drop back for compatibility with GRUB and BTRFS](https://www.reddit.com/r/voidlinux/comments/oy8mzp/unable_to_boot_with_luks_xbps_method_with_chroot/). Things might have changed now, but I'm in no mood to experiment unless needed. The machine now also starts right into the GUI login screen (which is probably [GDM](https://wiki.gnome.org/Projects/GDM)?), instead of the TTY as it is for the rest of my fleet, and on this machine, I love it.

Pop!_OS never worked for me with dual boot, so there's no secondary Windows install on this machine. I do not think I would need it after I updated the firmware once. My plan for this machine is to evaluate it as more or less a stretched mobile device that can run Linux. Now that I describe it that way, it starts to sound a lot like my experimental [Linux phone](https://www.reddit.com/r/linux/comments/13xaufm/the_state_of_real_linux_on_phones_will_they_ever/), doesn't it?

## Review

So about my review of this device:

1. The removable keyboard feels surprisingly close to the real thing, especially when you place the device on a flat surface.
2. The mylar-based trackpad is OK, even though it isn't glass as the other members of the X1 family.
3. The 3:2 aspect ratio changes how things are displayed on the screen, and the resolution is way beyond your standard notebook PC at 3000:2000.
4. I finally experienced a machine where the digitizer isn't garaged into the chassis unlike the X1 Yoga's I've used before. This one also doesn't charge automatically once you holster it and unfortunately will cause me battery anxiety.
5. I've never seen a touch-friendly [UEFI](https://uefi.org/) in a ThinkPad, and I'd say this is a nice touch, I mean literally.

## A Few Comparisons

The ThinkPads I can easily compare this one with are the X1 Yoga's I've used before. As a matter of fact, I do have the two Yoga's we saw in a recent video to compare. Those machines are very similar, but the keyboards are a part of the body, the stylus is rechargeable and garaged, and those are 14” devices. Also, the UEFI firmware is a standard one.

Then there are those non-Yoga notebooks that I've had over the years, but as we know the touchscreens aren't even remotely as capable as these digitizers. I was so naive to not being able to justify those extra couple of hundred milligrams in place of an X1 Carbon with a touchscreen. Thankfully, we all learn from our mistakes, and so did I.

Finally, there's one thing this tablet has in common with my [X1 Nano](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-nano/22tp2x1x1n1), which is the screen aspect ratio. I know a 3:2 screen is not the same as a 16:10 screen, but mathematically, the ratios are very close.

## Conclusion

I've temporarily put my X1 Nano down to the second preferred machine to accompany me everywhere and have planned to take the X1 Tablet with me. But this is a new device, and using the keyboard isn't as straightforward as your regular notebook, such that I cannot use this device on my lap, and need a table to use the keyboard. How it works out, time will tell. So while I work on getting an [X41 Tablet](https://www.thinkwiki.org/wiki/Category:X41_Tablet), this should be sufficient for me to evaluate a tablet as my primary computing companion. Meanwhile, let me figure out how to keep the digitizer in sync when I rotate the device into portrait mode while running Linux
