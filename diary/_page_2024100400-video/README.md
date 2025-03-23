# I Destroyed a Circuit Board to Make My ThinkPad Faster

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/iUpBo6KFL_o/hq720.jpg](https://i.ytimg.com/vi/iUpBo6KFL_o/hq720.jpg)](https://youtu.be/iUpBo6KFL_o)

## Intro

I destroyed a circuit board on my [X61s](https://www.thinkwiki.org/wiki/Category:X61s) to make it cooler and faster. Now how would destruction help speed up a machine, you’d ask? Let me explain.

## What Owning a Machine Means to Me

For me, I do not consider a machine truly mine, until I’ve re-seated every single screw and have some familiarity with every possible component inside. Sometimes though, certain components need a little bit of force to take apart, and that’s exactly what we’ll see in this video.

## My Newer Machines

Now playing with every possible component may not be for my newer machines, given how I’d rather keep my warranty until it finally expires, opening up the floodgates of potential upgrades and tweaks. Two good examples are my [X1 Nano](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-nano/22tp2x1x1n1) and my [T15g Gen 2](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/thinkpad-t15g-gen-2-(15-inch-intel)/wmd00000484). For the rest of the machines though, many of them have already gone through major restorations, fixes, and upgrades, so those are the ones that I like to call, "truly mine".

## That One Exception with my X61s

Since the X61s joined my fleet, it has undergone a few complete disassemblies, a couple of which were for a thermal re-paste (do not ask me why I had to repeat it within a year). However, the one thing that I could not move was the stock wireless module, and that thing was held by screws that were too tight to be loosened, no matter how I approached it. Back when I first tried to remove the two screws to upgrade the wireless card, I had to abandon my plan as soon as the grooves started to wear out. But then, it was something I could never get out of my head, given that all my ThinkPads had relatively better wireless cards except for the X61s, and that was until the time finally came to change that.

## The Problem

The installed module was an [Intel 4965AG](https://www.intel.com/content/www/us/en/support/products/50566/wireless/legacy-intel-wireless-products/intel-wireless-series/intel-wireless-wifi-link-4965agn.html), which though was capable of connecting to 5GHz networks, wasn't the best in terms of reception or speed. And then given the location of my wireless router, that makes it even more difficult to get reasonable reception, even on my modern ThinkPads. Upon some research, I found that one of the reasons people get rid of the stock wireless card on an X61s is due to the excessive heat it generates and the amount of power it draws. If you’d ask me, out of the few complaints or rather nitpicks I have with my favorite ThinkPad, two are indeed heat and power consumption. Also, anyone who knows a little about how computers work would also know that if you could control heat, that could potentially let the processors run faster without any throttling so that could have taken care of the third of the three issues, which is the slowness of the [Core 2 Duo](https://en.wikipedia.org/wiki/Intel_Core_2) processor. I know that simply controlling the heat would not make it comparable to even the initial iterations of [Core-i series](https://en.wikipedia.org/wiki/Intel_Core#Core_i3/i5/i7/i9) processors, let alone the recent ones, but a slight improvement is still a good improvement, isn’t it?

## Attacking the Root Cause

So with that in place, it was clear that the one thing that I hadn’t touched since I adopted this machine, now had to be replaced in some way or the other. I gave it a few more tries to loosen the screws, but it only made things worse, and I had to stop as I didn’t want to be left with screw heads that were [completely worn](https://www.reddit.com/r/howto/comments/1at3wdg/how_do_i_remove_these_deeply_stripped_screws_from/), at least until I could figure out how to extract them. I read on Reddit about [screw-extracting pliers](https://www.engineertools-jp.com/screwremoval), which unfortunately, probably due to my lack of skill, weren’t of much help either. So that left me with the only other way forward, which would be to sacrifice the circuit board by drilling into it. I wanted to make sure the screw holes on the motherboard were in no way affected, so I used a [Dremel tool](https://www.dremel.com/us/en/p/8220-n-30h-f0138220ac) and a utility blade to systematically cut out the circuit board also making sure I extracted the screws without leaving any residue so that the new wireless card could be installed without any trouble. The entire process was violent and needed extra care to not damage the motherboard, not spraying metal dust all over it either, and yet getting it all out as cleanly as possible. It came out in four pieces, exactly as planned. I lost a fully functional WiFi card that day, but that sadness was overcome by the excitement that a new and more efficient module was going to take its place soon.

## The New Module

Now what module would I be installing next was onto me, and the range of choices was increased given that the machine was already applied with the Middleton BIOS mod by the previous owner. Now was the time to take the benefit of the absence of a hardware whitelist for using a wireless card that Lenovo prevented us from using with the machine, hopefully squeezing out some more performance with less heat. Now as you’re not limited to what Lenovo allows, you can go overboard and get crazy and expensive hardware in there, which wasn’t my purpose here. Keeping practicality in mind, and optimizing for price, I went with an [Intel Centrino Ultimate-N 6300](https://www.intel.com/content/www/us/en/support/products/60722/wireless/legacy-intel-wireless-products/intel-wireless-series/intel-centrino-ultimate-n-6300.html), as it seems to be the best possible card that came only with a Wi-Fi capability, not merging in Bluetooth as well, unlike models like [6235](https://ark.intel.com/content/www/us/en/ark/products/66890/intel-centrino-advanced-n-6235-dual-band.html), because I was OK with the slower Bluetooth chip the machine was already configured with. Also, I wanted the Bluetooth indication LED to work as designed, which would not have been the case had I replaced the Bluetooth module as well. That left me with only one problem, which was the size of the module versus the size of the slot. The new module was about half the size of the old one, and I found out about these adapter brackets being sold for this exact use. Putting one in place, it all felt right.

## Conclusion

After putting everything back together, the machine worked like a charm with no issues. The machine does seem to be running a little less warm, getting slightly (if not much) better reception, and also running faster, which might as well be due to the placebo effect. But yes, less power-draw means less heat, and effectively letting the machine run slightly faster. I do not have numbers to back my findings, but I’m happy that my X61s now runs better than it used to. 
